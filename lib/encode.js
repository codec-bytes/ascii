'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.encode = encode;

var _char2byte = require('./char2byte');

var _ASCIIEncodeError = require('./ASCIIEncodeError');

var _marked = [encode].map(regeneratorRuntime.mark);

function encode(string) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chr;

	return regeneratorRuntime.wrap(function encode$(_context) {
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

					if (_char2byte.char2byte.hasOwnProperty(chr)) {
						_context.next = 9;
						break;
					}

					throw new _ASCIIEncodeError.ASCIIEncodeError('cannot find character ' + chr);

				case 9:
					_context.next = 11;
					return _char2byte.char2byte[chr];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmNvZGUuanMiXSwibmFtZXMiOlsiZW5jb2RlIiwic3RyaW5nIiwiY2hyIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR2lCQSxNLEdBQUFBLE07O0FBSGpCOztBQUNBOztlQUVpQkEsTTs7QUFBVixTQUFVQSxNQUFWLENBQW1CQyxNQUFuQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFYUEsTUFGYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVNQyxRQUZOOztBQUFBLFNBSUMscUJBQVVDLGNBQVYsQ0FBeUJELEdBQXpCLENBSkQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsV0FJdUMsa0VBQStDQSxHQUEvQyxDQUp2Qzs7QUFBQTtBQUFBO0FBQUEsWUFNQyxxQkFBVUEsR0FBVixDQU5EOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZW5jb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhcjJieXRlIH0gZnJvbSAnLi9jaGFyMmJ5dGUnIDtcbmltcG9ydCB7IEFTQ0lJRW5jb2RlRXJyb3IgfSBmcm9tICcuL0FTQ0lJRW5jb2RlRXJyb3InIDtcblxuZXhwb3J0IGZ1bmN0aW9uKiBlbmNvZGUgKCBzdHJpbmcgKSB7XG5cblx0Zm9yICggY29uc3QgY2hyIG9mIHN0cmluZyApIHtcblxuXHRcdGlmICggIWNoYXIyYnl0ZS5oYXNPd25Qcm9wZXJ0eShjaHIpICkgdGhyb3cgbmV3IEFTQ0lJRW5jb2RlRXJyb3IoIGBjYW5ub3QgZmluZCBjaGFyYWN0ZXIgJHtjaHJ9YCApIDtcblxuXHRcdHlpZWxkIGNoYXIyYnl0ZVtjaHJdIDtcblxuXHR9XG5cbn1cbiJdfQ==