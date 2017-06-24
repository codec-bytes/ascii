'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = decode;

var _decode2 = require('./_decode');

var _decode3 = _interopRequireDefault(_decode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function decode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	return [].concat(_toConsumableArray((0, _decode3.default)(bytes, options))).join('');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvZGUuanMiXSwibmFtZXMiOlsiZGVjb2RlIiwiYnl0ZXMiLCJvcHRpb25zIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxNOztBQUZ4Qjs7Ozs7Ozs7QUFFZSxTQUFTQSxNQUFULENBQWtCQyxLQUFsQixFQUEyQztBQUFBLEtBQWpCQyxPQUFpQix1RUFBUCxJQUFPOzs7QUFFekQsUUFBTyw2QkFBSyxzQkFBUUQsS0FBUixFQUFlQyxPQUFmLENBQUwsR0FBK0JDLElBQS9CLENBQW9DLEVBQXBDLENBQVA7QUFFQSIsImZpbGUiOiJkZWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2RlY29kZSBmcm9tICcuL19kZWNvZGUnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVjb2RlICggYnl0ZXMgLCBvcHRpb25zID0gbnVsbCApIHtcblxuXHRyZXR1cm4gWyAuLi5fZGVjb2RlKGJ5dGVzLCBvcHRpb25zKSBdLmpvaW4oJycpIDtcblxufVxuIl19