'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsCodec = require('@aureooms/js-codec');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ASCIIEncodeError = function (_EncodeError) {
	_inherits(ASCIIEncodeError, _EncodeError);

	function ASCIIEncodeError(reason, object, position) {
		_classCallCheck(this, ASCIIEncodeError);

		return _possibleConstructorReturn(this, (ASCIIEncodeError.__proto__ || Object.getPrototypeOf(ASCIIEncodeError)).call(this, 'ascii', reason, object, position));
	}

	return ASCIIEncodeError;
}(_jsCodec.EncodeError);

exports.default = ASCIIEncodeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BU0NJSUVuY29kZUVycm9yLmpzIl0sIm5hbWVzIjpbIkFTQ0lJRW5jb2RlRXJyb3IiLCJyZWFzb24iLCJvYmplY3QiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxnQjs7O0FBRXBCLDJCQUFjQyxNQUFkLEVBQXVCQyxNQUF2QixFQUFnQ0MsUUFBaEMsRUFBMkM7QUFBQTs7QUFBQSw2SEFDbkMsT0FEbUMsRUFDekJGLE1BRHlCLEVBQ2hCQyxNQURnQixFQUNQQyxRQURPO0FBRTFDOzs7OztrQkFKbUJILGdCIiwiZmlsZSI6IkFTQ0lJRW5jb2RlRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmNvZGVFcnJvciB9IGZyb20gJ0BhdXJlb29tcy9qcy1jb2RlYycgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBU0NJSUVuY29kZUVycm9yIGV4dGVuZHMgRW5jb2RlRXJyb3Ige1xuXG5cdGNvbnN0cnVjdG9yICggcmVhc29uICwgb2JqZWN0ICwgcG9zaXRpb24gKSB7XG5cdFx0c3VwZXIoICdhc2NpaScgLCByZWFzb24gLCBvYmplY3QgLCBwb3NpdGlvbiApIDtcblx0fVxuXG59XG5cbiJdfQ==