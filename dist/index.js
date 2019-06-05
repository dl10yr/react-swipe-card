'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Card = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _CardSwitcher = require('./CardSwitcher');

Object.defineProperty(exports, 'Card', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_CardSwitcher).default;
    }
});

var _Cards = require('./Cards');

var _Cards2 = _interopRequireDefault(_Cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Number.prototype.map = function (_ref) {
    var _ref$inputRange = _slicedToArray(_ref.inputRange, 2),
        iMin = _ref$inputRange[0],
        iMax = _ref$inputRange[1],
        _ref$outputRange = _slicedToArray(_ref.outputRange, 2),
        oMin = _ref$outputRange[0],
        oMax = _ref$outputRange[1],
        _ref$clamp = _ref.clamp,
        clamp = _ref$clamp === undefined ? false : _ref$clamp;

    var finalValue = (this.valueOf() - iMin) / (iMax - iMin) * (oMax - oMin) + oMin;
    if (clamp) {
        if (finalValue > oMax) {
            return oMax;
        } else if (finalValue < oMin) {
            return oMin;
        }
    }
    return finalValue;
};

exports.default = _Cards2.default;