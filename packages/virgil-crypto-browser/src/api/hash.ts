import { lib } from '../asmjs';
import { wrapFunction, isBuffer } from '../utils';
import { assert, errorFromNativeError, HashAlgorithm } from 'virgil-crypto-utils';

/**
 * Produces a hash of given data
 *
 * @param {Buffer} data - Data to hash
 * @param {string} [algorithm] - Hash algorithm to use. Default is SHA256
 *
 * @returns {Buffer}
 * */
export function hash(data: Buffer, algorithm: HashAlgorithm = HashAlgorithm.SHA256) {
	assert(isBuffer(data), 'Cannot calculate hash. Argument "data" must be a Buffer');

	const virgilHash = new lib.VirgilHash(lib.VirgilHashAlgorithm[algorithm]);
	const hashFn = wrapFunction(virgilHash.hash, virgilHash);

	try {
		return hashFn(data);
	} catch (e) {
		throw errorFromNativeError(e);
	} finally {
		virgilHash.delete();
	}
}
