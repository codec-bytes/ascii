'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _encode;

var _char2byte = require('./char2byte');

var _char2byte2 = _interopRequireDefault(_char2byte);

var _ASCIIEncodeError = require('./ASCIIEncodeError');

var _ASCIIEncodeError2 = _interopRequireDefault(_ASCIIEncodeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_encode].map(regeneratorRuntime.mark);

function _encode(string) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chr;

	return regeneratorRuntime.wrap(function _encode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = string[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 14;
						break;
					}

					chr = _step.value;

					if (_char2byte2.default.hasOwnProperty(chr)) {
						_context.next = 9;
						break;
					}

					throw new _ASCIIEncodeError2.default('cannot find character ' + chr);

				case 9:
					_context.next = 11;
					return _char2byte2.default[chr];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJjaHIiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3lCQSxPOztBQUh6Qjs7OztBQUNBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsTUFBcEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUtBLE1BRkw7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFRkMsUUFGRTs7QUFBQSxTQUlQLG9CQUFVQyxjQUFWLENBQXlCRCxHQUF6QixDQUpPO0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBSStCLDBEQUErQ0EsR0FBL0MsQ0FKL0I7O0FBQUE7QUFBQTtBQUFBLFlBTVAsb0JBQVVBLEdBQVYsQ0FOTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9lbmNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhcjJieXRlIGZyb20gJy4vY2hhcjJieXRlJyA7XG5pbXBvcnQgQVNDSUlFbmNvZGVFcnJvciBmcm9tICcuL0FTQ0lJRW5jb2RlRXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9lbmNvZGUgKCBzdHJpbmcgKSB7XG5cblx0Zm9yICggY29uc3QgY2hyIG9mIHN0cmluZyApIHtcblxuXHRcdGlmICggIWNoYXIyYnl0ZS5oYXNPd25Qcm9wZXJ0eShjaHIpICkgdGhyb3cgbmV3IEFTQ0lJRW5jb2RlRXJyb3IoIGBjYW5ub3QgZmluZCBjaGFyYWN0ZXIgJHtjaHJ9YCApIDtcblxuXHRcdHlpZWxkIGNoYXIyYnl0ZVtjaHJdIDtcblxuXHR9XG5cbn1cbiJdfQ==