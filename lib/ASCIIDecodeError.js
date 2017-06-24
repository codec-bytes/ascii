'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsCodec = require('@aureooms/js-codec');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASCIIDecodeError = function (_DecodeError) {
	_inherits(ASCIIDecodeError, _DecodeError);

	function ASCIIDecodeError(reason, object, start, end) {
		_classCallCheck(this, ASCIIDecodeError);

		return _possibleConstructorReturn(this, (ASCIIDecodeError.__proto__ || Object.getPrototypeOf(ASCIIDecodeError)).call(this, 'ASCII', reason, object, start, end));
	}

	return ASCIIDecodeError;
}(_jsCodec.DecodeError);

exports.default = ASCIIDecodeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BU0NJSURlY29kZUVycm9yLmpzIl0sIm5hbWVzIjpbIkFTQ0lJRGVjb2RlRXJyb3IiLCJyZWFzb24iLCJvYmplY3QiLCJzdGFydCIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxnQjs7O0FBRXBCLDJCQUFjQyxNQUFkLEVBQXVCQyxNQUF2QixFQUFnQ0MsS0FBaEMsRUFBd0NDLEdBQXhDLEVBQThDO0FBQUE7O0FBQUEsNkhBQ3RDLE9BRHNDLEVBQzVCSCxNQUQ0QixFQUNuQkMsTUFEbUIsRUFDVkMsS0FEVSxFQUNGQyxHQURFO0FBRTdDOzs7OztrQkFKbUJKLGdCIiwiZmlsZSI6IkFTQ0lJRGVjb2RlRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNvZGVFcnJvciB9IGZyb20gJ0BhdXJlb29tcy9qcy1jb2RlYycgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBU0NJSURlY29kZUVycm9yIGV4dGVuZHMgRGVjb2RlRXJyb3Ige1xuXG5cdGNvbnN0cnVjdG9yICggcmVhc29uICwgb2JqZWN0ICwgc3RhcnQgLCBlbmQgKSB7XG5cdFx0c3VwZXIoICdBU0NJSScgLCByZWFzb24gLCBvYmplY3QgLCBzdGFydCAsIGVuZCApIDtcblx0fVxuXG59XG4iXX0=