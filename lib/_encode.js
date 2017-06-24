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
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var start, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, chr, reason, object, position;

	return regeneratorRuntime.wrap(function _encode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					start = 0;
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 4;
					_iterator = string[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 19;
						break;
					}

					chr = _step.value;

					if (_char2byte2.default.hasOwnProperty(chr)) {
						_context.next = 13;
						break;
					}

					reason = 'cannot find character ' + chr;
					object = string;
					position = { start: start, end: start + 1 };
					throw new _ASCIIEncodeError2.default(reason, object, position);

				case 13:
					_context.next = 15;
					return _char2byte2.default[chr];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwic3RhcnQiLCJjaHIiLCJoYXNPd25Qcm9wZXJ0eSIsInJlYXNvbiIsIm9iamVjdCIsInBvc2l0aW9uIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFHeUJBLE87O0FBSHpCOzs7O0FBQ0E7Ozs7OztlQUV5QkEsTzs7QUFBVixTQUFVQSxPQUFWLENBQW9CQyxNQUFwQjtBQUFBLEtBQTZCQyxPQUE3Qix1RUFBdUMsSUFBdkM7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFVkMsVUFGVSxHQUVGLENBRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlLRixNQUpMOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUZHLFFBSkU7O0FBQUEsU0FNUCxvQkFBVUMsY0FBVixDQUF5QkQsR0FBekIsQ0FOTztBQUFBO0FBQUE7QUFBQTs7QUFPTkUsV0FQTSw4QkFPNEJGLEdBUDVCO0FBUU5HLFdBUk0sR0FRR04sTUFSSDtBQVNOTyxhQVRNLEdBU0ssRUFBRUwsT0FBUUEsS0FBVixFQUFrQk0sS0FBTU4sUUFBUSxDQUFoQyxFQVRMO0FBQUEsV0FVTCwrQkFBc0JHLE1BQXRCLEVBQStCQyxNQUEvQixFQUF3Q0MsUUFBeEMsQ0FWSzs7QUFBQTtBQUFBO0FBQUEsWUFhUCxvQkFBVUosR0FBVixDQWJPOztBQUFBOztBQWViLE9BQUVELEtBQUY7O0FBZmE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfZW5jb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYXIyYnl0ZSBmcm9tICcuL2NoYXIyYnl0ZScgO1xuaW1wb3J0IEFTQ0lJRW5jb2RlRXJyb3IgZnJvbSAnLi9BU0NJSUVuY29kZUVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfZW5jb2RlICggc3RyaW5nICwgb3B0aW9ucyA9IG51bGwgKSB7XG5cblx0bGV0IHN0YXJ0ID0gMCA7XG5cblx0Zm9yICggY29uc3QgY2hyIG9mIHN0cmluZyApIHtcblxuXHRcdGlmICggIWNoYXIyYnl0ZS5oYXNPd25Qcm9wZXJ0eShjaHIpICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYGNhbm5vdCBmaW5kIGNoYXJhY3RlciAke2Nocn1gIDtcblx0XHRcdGNvbnN0IG9iamVjdCA9IHN0cmluZyA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcbiBcdFx0XHR0aHJvdyBuZXcgQVNDSUlFbmNvZGVFcnJvciggcmVhc29uICwgb2JqZWN0ICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0eWllbGQgY2hhcjJieXRlW2Nocl0gO1xuXG5cdFx0KytzdGFydCA7XG5cblx0fVxuXG59XG4iXX0=