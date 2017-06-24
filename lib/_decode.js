'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _decode;

var _byte2char = require('./byte2char');

var _byte2char2 = _interopRequireDefault(_byte2char);

var _ASCIIDecodeError = require('./ASCIIDecodeError');

var _ASCIIDecodeError2 = _interopRequireDefault(_ASCIIDecodeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_decode].map(regeneratorRuntime.mark);

function _decode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var start, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, b, reason, object, position;

	return regeneratorRuntime.wrap(function _decode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					start = 0;
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 4;
					_iterator = bytes[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 19;
						break;
					}

					b = _step.value;

					if (!(b < 0x00 || b > 0x7F)) {
						_context.next = 13;
						break;
					}

					reason = 'byte out of range 0x00 <= ' + b + ' <= 0x7F';
					object = bytes;
					position = { start: start, end: start + 1 };
					throw new _ASCIIDecodeError2.default(reason, object, position);

				case 13:
					_context.next = 15;
					return _byte2char2.default[b];

				case 15:

					++start;

				case 16:
					_iteratorNormalCompletion = true;
					_context.next = 6;
					break;

				case 19:
					_context.next = 25;
					break;

				case 21:
					_context.prev = 21;
					_context.t0 = _context['catch'](4);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 25:
					_context.prev = 25;
					_context.prev = 26;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 28:
					_context.prev = 28;

					if (!_didIteratorError) {
						_context.next = 31;
						break;
					}

					throw _iteratorError;

				case 31:
					return _context.finish(28);

				case 32:
					return _context.finish(25);

				case 33:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[4, 21, 25, 33], [26,, 28, 32]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZGVjb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvZGUiLCJieXRlcyIsIm9wdGlvbnMiLCJzdGFydCIsImIiLCJyZWFzb24iLCJvYmplY3QiLCJwb3NpdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3lCQSxPOztBQUh6Qjs7OztBQUNBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsS0FBcEI7QUFBQSxLQUE0QkMsT0FBNUIsdUVBQXNDLElBQXRDOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLFVBRlUsR0FFRixDQUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFJR0YsS0FKSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlGRyxNQUpFOztBQUFBLFdBTVJBLElBQUksSUFBSixJQUFZQSxJQUFJLElBTlI7QUFBQTtBQUFBO0FBQUE7O0FBT05DLFdBUE0sa0NBT2dDRCxDQVBoQztBQVFORSxXQVJNLEdBUUdMLEtBUkg7QUFTTk0sYUFUTSxHQVNLLEVBQUVKLE9BQVFBLEtBQVYsRUFBa0JLLEtBQU1MLFFBQVEsQ0FBaEMsRUFUTDtBQUFBLFdBVU4sK0JBQXNCRSxNQUF0QixFQUErQkMsTUFBL0IsRUFBd0NDLFFBQXhDLENBVk07O0FBQUE7QUFBQTtBQUFBLFlBYVAsb0JBQVVILENBQVYsQ0FiTzs7QUFBQTs7QUFlYixPQUFFRCxLQUFGOztBQWZhO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2RlY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBieXRlMmNoYXIgZnJvbSAnLi9ieXRlMmNoYXInIDtcbmltcG9ydCBBU0NJSURlY29kZUVycm9yIGZyb20gJy4vQVNDSUlEZWNvZGVFcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX2RlY29kZSAoIGJ5dGVzICwgb3B0aW9ucyA9IG51bGwgKSB7XG5cblx0bGV0IHN0YXJ0ID0gMCA7XG5cblx0Zm9yICggY29uc3QgYiBvZiBieXRlcyApIHtcblxuXHRcdGlmICggYiA8IDB4MDAgfHwgYiA+IDB4N0YgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2J9IDw9IDB4N0ZgIDtcblx0XHRcdGNvbnN0IG9iamVjdCA9IGJ5dGVzIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0dGhyb3cgbmV3IEFTQ0lJRGVjb2RlRXJyb3IoIHJlYXNvbiAsIG9iamVjdCAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdHlpZWxkIGJ5dGUyY2hhcltiXSA7XG5cblx0XHQrK3N0YXJ0IDtcblxuXHR9XG5cbn1cbiJdfQ==