'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ASCIIDecodeError = undefined;

var _jsCodec = require('@aureooms/js-codec');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASCIIDecodeError = exports.ASCIIDecodeError = function (_DecodeError) {
	_inherits(ASCIIDecodeError, _DecodeError);

	function ASCIIDecodeError(reason, object, start, end) {
		_classCallCheck(this, ASCIIDecodeError);

		return _possibleConstructorReturn(this, (ASCIIDecodeError.__proto__ || Object.getPrototypeOf(ASCIIDecodeError)).call(this, 'ASCII', reason, object, start, end));
	}

	return ASCIIDecodeError;
}(_jsCodec.DecodeError);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BU0NJSURlY29kZUVycm9yLmpzIl0sIm5hbWVzIjpbIkFTQ0lJRGVjb2RlRXJyb3IiLCJyZWFzb24iLCJvYmplY3QiLCJzdGFydCIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztJQUVhQSxnQixXQUFBQSxnQjs7O0FBRVosMkJBQWNDLE1BQWQsRUFBdUJDLE1BQXZCLEVBQWdDQyxLQUFoQyxFQUF3Q0MsR0FBeEMsRUFBOEM7QUFBQTs7QUFBQSw2SEFDdEMsT0FEc0MsRUFDNUJILE1BRDRCLEVBQ25CQyxNQURtQixFQUNWQyxLQURVLEVBQ0ZDLEdBREU7QUFFN0MiLCJmaWxlIjoiQVNDSUlEZWNvZGVFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY29kZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWNvZGVjJyA7XG5cbmV4cG9ydCBjbGFzcyBBU0NJSURlY29kZUVycm9yIGV4dGVuZHMgRGVjb2RlRXJyb3Ige1xuXG5cdGNvbnN0cnVjdG9yICggcmVhc29uICwgb2JqZWN0ICwgc3RhcnQgLCBlbmQgKSB7XG5cdFx0c3VwZXIoICdBU0NJSScgLCByZWFzb24gLCBvYmplY3QgLCBzdGFydCAsIGVuZCApIDtcblx0fVxuXG59XG4iXX0=