'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var translate3d = exports.translate3d = function translate3d(x, y) {
  var rotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var translate = 'translate3d(' + x + 'px, ' + y + 'px, 0px) rotateZ(' + rotation + 'deg)';
  return {
    msTransform: translate,
    WebkitTransform: translate,
    transform: translate
  };
};

var DIRECTIONS = exports.DIRECTIONS = ['Right', 'Left'];