import _encode from './_encode.js';

export default function encode(bytes, options = null) {
	return [..._encode(bytes, options)];
}
