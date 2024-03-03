import ASCIIDecodeError from './ASCIIDecodeError.js';
import byte2char from './byte2char.js';

export default function* _decode(bytes, _options = null) {
	let start = 0;

	for (const b of bytes) {
		if (b < 0x00 || b > 0x7f) {
			const reason = `byte out of range 0x00 <= ${b} <= 0x7F`;
			const object = bytes;
			const position = {start, end: start + 1};
			throw new ASCIIDecodeError(reason, object, position);
		}

		yield byte2char[b];

		++start;
	}
}
