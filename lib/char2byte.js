'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.char2byte = undefined;

var _byte2char = require('./byte2char');

var char2byte = exports.char2byte = {};

for (var i = 0x00; i < 0x80; ++i) {
  char2byte[_byte2char.byte2char[i]] = i;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyMmJ5dGUuanMiXSwibmFtZXMiOlsiY2hhcjJieXRlIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPLElBQU1BLGdDQUFZLEVBQWxCOztBQUVQLEtBQU0sSUFBSUMsSUFBSSxJQUFkLEVBQXFCQSxJQUFJLElBQXpCLEVBQWdDLEVBQUVBLENBQWxDO0FBQXNDRCxZQUFVLHFCQUFVQyxDQUFWLENBQVYsSUFBMEJBLENBQTFCO0FBQXRDIiwiZmlsZSI6ImNoYXIyYnl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ5dGUyY2hhciB9IGZyb20gJy4vYnl0ZTJjaGFyJyA7XG5cbmV4cG9ydCBjb25zdCBjaGFyMmJ5dGUgPSB7IH0gO1xuXG5mb3IgKCBsZXQgaSA9IDB4MDAgOyBpIDwgMHg4MCA7ICsraSApIGNoYXIyYnl0ZVtieXRlMmNoYXJbaV1dID0gaSA7XG4iXX0=