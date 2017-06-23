'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.decode = decode;

var _byte2char = require('./byte2char');

var _ASCIIDecodeError = require('./ASCIIDecodeError');

var _marked = [decode].map(regeneratorRuntime.mark);

function decode(bytes) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, b;

	return regeneratorRuntime.wrap(function decode$(_context) {
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

					throw new _ASCIIDecodeError.ASCIIDecodeError('byte out of range 0x00 <= ' + b + ' <= 0xFF');

				case 9:
					_context.next = 11;
					return _byte2char.byte2char[b];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvZGUuanMiXSwibmFtZXMiOlsiZGVjb2RlIiwiYnl0ZXMiLCJiIl0sIm1hcHBpbmdzIjoiOzs7OztRQUdpQkEsTSxHQUFBQSxNOztBQUhqQjs7QUFDQTs7ZUFFaUJBLE07O0FBQVYsU0FBVUEsTUFBVixDQUFtQkMsS0FBbkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRVdBLEtBRlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTUMsTUFGTjs7QUFBQSxXQUlBQSxJQUFJLElBQUosSUFBWUEsS0FBSyxJQUpqQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQUk4QixzRUFBbURBLENBQW5ELGNBSjlCOztBQUFBO0FBQUE7QUFBQSxZQU1DLHFCQUFVQSxDQUFWLENBTkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJkZWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBieXRlMmNoYXIgfSBmcm9tICcuL2J5dGUyY2hhcicgO1xuaW1wb3J0IHsgQVNDSUlEZWNvZGVFcnJvciB9IGZyb20gJy4vQVNDSUlEZWNvZGVFcnJvcicgO1xuXG5leHBvcnQgZnVuY3Rpb24qIGRlY29kZSAoIGJ5dGVzICkge1xuXG5cdGZvciAoIGNvbnN0IGIgb2YgYnl0ZXMgKSB7XG5cblx0XHRpZiAoIGIgPCAweDAwIHx8IGIgPj0gMHg4MCApIHRocm93IG5ldyBBU0NJSURlY29kZUVycm9yKCBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2J9IDw9IDB4RkZgICkgO1xuXG5cdFx0eWllbGQgYnl0ZTJjaGFyW2JdIDtcblxuXHR9XG5cbn1cbiJdfQ==