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
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, b;

	return regeneratorRuntime.wrap(function _decode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = bytes[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 14;
						break;
					}

					b = _step.value;

					if (!(b < 0x00 || b >= 0x80)) {
						_context.next = 9;
						break;
					}

					throw new _ASCIIDecodeError2.default('byte out of range 0x00 <= ' + b + ' <= 0xFF');

				case 9:
					_context.next = 11;
					return _byte2char2.default[b];

				case 11:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 14:
					_context.next = 20;
					break;

				case 16:
					_context.prev = 16;
					_context.t0 = _context['catch'](3);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 20:
					_context.prev = 20;
					_context.prev = 21;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 23:
					_context.prev = 23;

					if (!_didIteratorError) {
						_context.next = 26;
						break;
					}

					throw _iteratorError;

				case 26:
					return _context.finish(23);

				case 27:
					return _context.finish(20);

				case 28:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[3, 16, 20, 28], [21,, 23, 27]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZGVjb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvZGUiLCJieXRlcyIsImIiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd5QkEsTzs7QUFIekI7Ozs7QUFDQTs7Ozs7O2VBRXlCQSxPOztBQUFWLFNBQVVBLE9BQVYsQ0FBb0JDLEtBQXBCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVHQSxLQUZIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUZDLE1BRkU7O0FBQUEsV0FJUkEsSUFBSSxJQUFKLElBQVlBLEtBQUssSUFKVDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQUlzQiw4REFBbURBLENBQW5ELGNBSnRCOztBQUFBO0FBQUE7QUFBQSxZQU1QLG9CQUFVQSxDQUFWLENBTk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfZGVjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ5dGUyY2hhciBmcm9tICcuL2J5dGUyY2hhcicgO1xuaW1wb3J0IEFTQ0lJRGVjb2RlRXJyb3IgZnJvbSAnLi9BU0NJSURlY29kZUVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfZGVjb2RlICggYnl0ZXMgKSB7XG5cblx0Zm9yICggY29uc3QgYiBvZiBieXRlcyApIHtcblxuXHRcdGlmICggYiA8IDB4MDAgfHwgYiA+PSAweDgwICkgdGhyb3cgbmV3IEFTQ0lJRGVjb2RlRXJyb3IoIGBieXRlIG91dCBvZiByYW5nZSAweDAwIDw9ICR7Yn0gPD0gMHhGRmAgKSA7XG5cblx0XHR5aWVsZCBieXRlMmNoYXJbYl0gO1xuXG5cdH1cblxufVxuIl19