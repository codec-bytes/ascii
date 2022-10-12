import _decode from './_decode.js';

export default function decode(bytes, options = null) {
	return [..._decode(bytes, options)].join('');
}
