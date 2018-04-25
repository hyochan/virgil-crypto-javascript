export interface WrapperUtils {
	isBuffer (obj: any): boolean;
	bufferToVirgilByteArray (buf: Buffer): any;
	isVirgilByteArray (obj: any): boolean;
	virgilByteArrayToBuffer (arr: any): Buffer;
}

const apply = Function.prototype.apply;
const hasOwn = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;

export function createNativeTypeWrapper (lib: any) {
	const utils = createUtils(lib);

	return {
		createSafeInstanceMethods,
		createSafeStaticMethods
	};

	function createSafeInstanceMethods(ctor: Function, methods: string[]) {
		let proto: any;
		if (process.browser) {
			proto = ctor.prototype;
		} else {
			proto = Object.getPrototypeOf(ctor.prototype);
		}

		methods.forEach(method => {
			if (!(method in proto) || typeof proto[method] !== 'function') {
				throw new TypeError(`Method "${method}" does not exist on ${ctor.name} prototype`);
			}

			// cannot replace the method on the prototype as there are additional properties
			// associated with class prototype methods generated by emscripten
			// cannot replace the prototype either as it is used for reference
			// equality check during construction of instances (e.g. new VirgilHash()
			// fails if we replace the `VirgilHash.prototype` with a custom object)
			proto[method + 'Safe'] = wrapNativeFunction(proto[method]);
		});
	}

	function createSafeStaticMethods(ctor: Function & { [key: string]: any }, methods: string[]) {
		methods.forEach(method => {
			if (!hasOwn.call(ctor, method) || typeof ctor[method] !== 'function') {
				throw new TypeError(`Method "${method}" does not exist on ${ctor.name}`);
			}

			// adding Safe suffix for consistency with instance methods
			ctor[method + 'Safe'] = wrapNativeFunction(ctor[method], ctor)
		});
	}

	function wrapNativeFunction(fn: Function, target?: any) {
		return function (this: any, ...args: any[]) {
			let deletionQueue: any[] = [];
			const transformedArgs: any[] = [];

			for (let i = 0; i < args.length; i++) {
				if (utils.isBuffer(args[i])) {
					const arr = utils.bufferToVirgilByteArray(args[i]);
					if (process.browser) {
						deletionQueue.push(arr);
					}

					transformedArgs[i] = arr;
				} else {
					transformedArgs[i] = args[i];
				}
			}

			let result;
			try {
				result = apply.call(fn, target || this, transformedArgs);
				if (utils.isVirgilByteArray(result)) {
					if (process.browser) {
						deletionQueue.push(result);
					}

					result = utils.virgilByteArrayToBuffer(result);
				}

				return result;
			} finally {
				if (process.browser) {
					while (deletionQueue.length > 0) {
						let item = deletionQueue.pop();
						item.delete();
					}
				}
			}
		}
	}
}

function createUtils(lib: any): WrapperUtils {
	return {
		isBuffer (obj: any) {
			return Buffer.isBuffer(obj);
		},

		bufferToVirgilByteArray(buffer: Buffer) {
			if (process.browser) {
				return lib.VirgilByteArray.fromUint8Array(buffer);
			} else {
				const array = new lib.VirgilByteArray(buffer.byteLength);

				for (let i = 0; i < buffer.length; ++i) {
					array.set(i, buffer[i]);
				}

				return array;
			}
		},

		isVirgilByteArray(obj: any) {
			if (process.browser) {
				return obj != null && obj.constructor === lib.VirgilByteArray;
			} else {
				if (obj == null) {
					return false;
				}

				const tag = toString.call(obj);
				return tag === '[object _exports_VirgilByteArray]' || tag === '[object VirgilByteArray]';
			}
		},

		virgilByteArrayToBuffer(byteArray: any) {
			const size = byteArray.size();
			const buffer = new Buffer(size);

			for (let i = 0; i < size; ++i) {
				buffer[i] = byteArray.get(i);
			}

			return buffer;
		}
	};
}
