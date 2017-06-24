'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = encode;

var _encode2 = require('./_encode');

var _encode3 = _interopRequireDefault(_encode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function encode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	return [].concat(_toConsumableArray((0, _encode3.default)(bytes, options)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmNvZGUuanMiXSwibmFtZXMiOlsiZW5jb2RlIiwiYnl0ZXMiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLE07O0FBRnhCOzs7Ozs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBa0JDLEtBQWxCLEVBQTJDO0FBQUEsS0FBakJDLE9BQWlCLHVFQUFQLElBQU87OztBQUV6RCxxQ0FBWSxzQkFBUUQsS0FBUixFQUFlQyxPQUFmLENBQVo7QUFFQSIsImZpbGUiOiJlbmNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2VuY29kZSBmcm9tICcuL19lbmNvZGUnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5jb2RlICggYnl0ZXMgLCBvcHRpb25zID0gbnVsbCApIHtcblxuXHRyZXR1cm4gWyAuLi5fZW5jb2RlKGJ5dGVzLCBvcHRpb25zKSBdIDtcblxufVxuIl19