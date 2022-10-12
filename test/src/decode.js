import test from 'ava';
import {range} from '@iterable-iterator/range';

import {CodecError} from './_fixtures.js';
import {decode, ASCIIDecodeError, byte2char} from '#module';

function success(t, bytes, options, expected) {
	const string = decode(bytes, options);

	t.deepEqual(string, expected);
}

success.title = (title, bytes, options, expected) =>
	title ??
	`decode(${JSON.stringify(bytes)}, ${JSON.stringify(
		options,
	)})' == ${JSON.stringify(expected)}`;

function failure(t, bytes, options, ExpectedError, position) {
	const error = t.throws(() => decode(bytes, options));
	t.true(error instanceof CodecError);
	t.true(error instanceof ExpectedError);
	t.is(error.encoding, 'ascii');
	t.is(error.object, bytes);
	t.is(error.position.start, position.start);
	t.is(error.position.end, position.end);
}

failure.title = (title, bytes, options, expected) =>
	title ??
	`decode(${JSON.stringify(bytes)}, ${JSON.stringify(options)})' fails with ${
		expected.name
	}`;

test(success, [0x41], null, 'A');
test(success, [0x61], null, 'a');

test(success, [...range(0x80)], null, byte2char.join(''));

test(failure, [-1], null, ASCIIDecodeError, {start: 0, end: 1});
test(failure, [0x80], null, ASCIIDecodeError, {start: 0, end: 1});
test(failure, [...range(0x81)], null, ASCIIDecodeError, {start: 128, end: 129});
