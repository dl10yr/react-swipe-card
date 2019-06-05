'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwipeCards = function (_Component) {
  _inherits(SwipeCards, _Component);

  function SwipeCards(props) {
    _classCallCheck(this, SwipeCards);

    var _this = _possibleConstructorReturn(this, (SwipeCards.__proto__ || Object.getPrototypeOf(SwipeCards)).call(this, props));

    _this.state = {
      like: false,
      dislike: false,
      index: 0,
      containerSize: { x: 0, y: 0 }
    };
    _this.removeCard = _this.removeCard.bind(_this);
    return _this;
  }

  _createClass(SwipeCards, [{
    key: 'removeCard',
    value: function removeCard() {
      var _props = this.props,
          children = _props.children,
          onEnd = _props.onEnd;


      if (children.length === this.state.index + 1 && onEnd) onEnd();

      this.setState({
        like: false,
        dislike: false,
        index: this.state.index + 1
      });
    }
  }, {
    key: 'like',
    value: function like() {
      if (!this.state.like && !this.state.dislike) {
        this.setState({
          like: true
        });
      }
    }
  }, {
    key: 'dislike',
    value: function dislike() {
      if (!this.state.like && !this.state.dislike) {
        this.setState({
          dislike: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          like = _state.like,
          dislike = _state.dislike,
          index = _state.index;
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          likeOverlay = _props2.likeOverlay,
          dislikeOverlay = _props2.dislikeOverlay;


      var _cards = children.reduce(function (memo, c, i) {
        if (index > i) return memo;
        var props = _extends({
          key: i,
          index: children.length - index
        }, _utils.DIRECTIONS.reduce(function (m, d) {
          return _extends({}, m, _defineProperty({}, 'onOutScreen' + d, function undefined() {
            return _this2.removeCard();
          }));
        }, {}), {
          active: index === i,
          like: like,
          dislike: dislike,
          likeOverlay: likeOverlay,
          dislikeOverlay: dislikeOverlay
        });
        return [(0, _react.cloneElement)(c, props)].concat(_toConsumableArray(memo));
      }, []);

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { id: 'cards' },
          _cards
        )
      );
    }
  }]);

  return SwipeCards;
}(_react.Component);

exports.default = SwipeCards;