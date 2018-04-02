export interface WrapperUtils {
	isBuffer (obj: any): boolean;
	bufferToVirgilByteArray (buf: Buffer): any;
	isVirgilByteArray (obj: any): boolean;
	virgilByteArrayToBuffer (arr: any): Buffer;
}

const apply = Function.prototype.apply;
const hasOwn = Object.prototype.hasOwnProperty;

export function createNativeWrapper (utils: WrapperUtils) {
	let wrapNativeFunction: Function;
	if (process.browser) {
		wrapNativeFunction = function wrapNativeFunctionBrowser(fn: Function, target: any) {
			return function (...args: any[]) {
				const allocations: any[] = [];
				const transformedArgs = args.map(arg => {
					if (utils.isBuffer(arg)) {
						const arr = utils.bufferToVirgilByteArray(arg);
						allocations.push(arr);
						return arr;
					}

					return arg;
				});

				let result;
				try {
					result = apply.call(fn, target, transformedArgs);
					if (utils.isVirgilByteArray(result)) {
						allocations.push(result);
						result = utils.virgilByteArrayToBuffer(result);
					}

					return result;
				} finally {
					allocations.forEach(arr => arr.delete());
				}
			}
		}
	} else {
		wrapNativeFunction = function wrapNativeFunctionNode(fn: Function, target: any) {
			return function (this: any, ...args: any[]) {
				const transformedArgs = args.map(
					arg => utils.isBuffer(arg) ? utils.bufferToVirgilByteArray(arg) : arg
				);

				let result = apply.call(fn, target || this, transformedArgs);
				if (utils.isVirgilByteArray(result)) {
					result = utils.virgilByteArrayToBuffer(result);
				}

				return result;
			}
		}
	}

	return {
		createSafeInstanceMethods,
		createSafeStaticMethods
	};

	function createSafeInstanceMethods(ctor: Function, methods: string[]) {
		const proto = ctor.prototype;

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
			ctor[method + 'Safe'] = wrapNativeFunction(ctor[method])
		});
	}
}