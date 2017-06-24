'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _byte2char = require('./byte2char');

var _byte2char2 = _interopRequireDefault(_byte2char);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var char2byte = {};
for (var i = 0x00; i < 0x80; ++i) {
  char2byte[_byte2char2.default[i]] = i;
}exports.default = char2byte;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyMmJ5dGUuanMiXSwibmFtZXMiOlsiY2hhcjJieXRlIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVksRUFBbEI7QUFDQSxLQUFNLElBQUlDLElBQUksSUFBZCxFQUFxQkEsSUFBSSxJQUF6QixFQUFnQyxFQUFFQSxDQUFsQztBQUFzQ0QsWUFBVSxvQkFBVUMsQ0FBVixDQUFWLElBQTBCQSxDQUExQjtBQUF0QyxDLGtCQUVlRCxTIiwiZmlsZSI6ImNoYXIyYnl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBieXRlMmNoYXIgZnJvbSAnLi9ieXRlMmNoYXInIDtcblxuY29uc3QgY2hhcjJieXRlID0geyB9IDtcbmZvciAoIGxldCBpID0gMHgwMCA7IGkgPCAweDgwIDsgKytpICkgY2hhcjJieXRlW2J5dGUyY2hhcltpXV0gPSBpIDtcblxuZXhwb3J0IGRlZmF1bHQgY2hhcjJieXRlIDtcbiJdfQ==