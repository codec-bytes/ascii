import test from 'ava';
import {range} from '@iterable-iterator/range';

import {encode, ASCIIEncodeError, byte2char} from '../../src/index.js';
import {CodecError} from './_fixtures.js';

function success(t, string, options, expected) {
	const bytes = encode(string, options);

	t.deepEqual(bytes, expected);
}

success.title = (title, string, options, expected) =>
	title ??
	`encode(${JSON.stringify(string)}, ${JSON.stringify(
		options,
	)})' == ${JSON.stringify(expected)}`;

function failure(t, string, options, ExpectedError, position) {
	const error = t.throws(() => encode(string, options));
	t.true(error instanceof CodecError);
	t.true(error instanceof ExpectedError);
	t.is(error.encoding, 'ascii');
	t.is(error.object, string);
	t.is(error.position.start, position.start);
	t.is(error.position.end, position.end);
}

failure.title = (title, string, options, expected) =>
	title ??
	`encode(${JSON.stringify(string)}, ${JSON.stringify(options)})' fails with ${
		expected.name
	}`;

test(success, 'A', null, [0x41]);
test(success, 'a', null, [0x61]);

test(success, byte2char.join(''), null, [...range(0x80)]);

test(failure, 'ç', null, ASCIIEncodeError, {start: 0, end: 1});
test(failure, byte2char.join('') + 'ç', null, ASCIIEncodeError, {
	start: 128,
	end: 129,
});
