webpackHotUpdate(5,{

/***/ "./src/components/slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/slider.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var styles = {
  slider: {
    height: '100%',
    position: 'relative',
    width: '100%'
  },
  slide: {
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    transition: 'all 0.3s',
    width: '100%',
    zIndex: 3
  },
  sliderImg: {
    height: '100%',
    objectFit: 'cover',
    opacity: 1,
    display: 'block',
    width: '100%'
  },
  onTop: {
    opacity: 1,
    zIndex: 1
  },
  pagination: {
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    margin: '0 auto',
    position: 'absolute',
    right: 0,
    zIndex: 99
  },
  tile: {
    background: '#FFF',
    border: '1px solid #999',
    borderRadius: '50%',
    cursor: 'pointer',
    height: '20px',
    margin: '6px',
    transition: 'all 0.3s',
    width: '20px',
    outline: 'none',
    webkitAppearance: 'none'
  },
  activeTile: {
    background: '#333'
  }
};

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "createPagination", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(slides, activeTile) {
        var tiles = slides && slides.map(function (slide, key) {
          var currentIndex = slides.indexOf(slide);
          var classes = currentIndex == activeTile ? 'tile' : 'tile active-tile';
          var style = slides.indexOf(slide) == activeTile ? _objectSpread({}, styles.tile, styles.activeTile) : styles.tile;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
            key: key,
            className: classes,
            style: style,
            onClick: function onClick() {
              return _this.handlePagination(currentIndex);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          });
        });
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
          className: "pagination",
          style: styles.pagination,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, tiles);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handlePagination", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(index) {
        console.log(index);

        _this.setState({
          currentSlide: index
        });
      }
    });
    _this.state = {
      images: [],
      currentSlide: 0,
      pagination: false
    };
    _this.slider = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.styles = _objectSpread({}, styles, {
      pagination: _objectSpread({}, styles.tile, props.paginationStyle)
    });
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          pagination = _props.pagination,
          _props$delay = _props.delay,
          delay = _props$delay === void 0 ? 4500 : _props$delay;
      var images = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
          style: styles.sliderImg
        });
      });
      console.log(this.styles);
      this.setState({
        images: images,
        pagination: pagination
      });
      images && setInterval(function () {
        var onTop = _this2.state.currentSlide;
        var currentSlide = onTop == 2 ? 0 : onTop + 1;

        _this2.setState({
          currentSlide: currentSlide
        });
      }, delay);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          images = _state.images,
          pagination = _state.pagination;
      var slides = images.length > 1 && images.map(function (slide, key) {
        var classes = images.indexOf(slide) == _this3.state.currentSlide ? 'slide on-top' : 'slide';
        var style = images.indexOf(slide) == _this3.state.currentSlide ? _objectSpread({}, styles.slide, styles.onTop) : styles.slide;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: key,
          className: classes,
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, slide);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider",
        style: styles.slider,
        ref: this.slider,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, slides, pagination && this.createPagination(slides, this.state.currentSlide));
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ })

})
//# sourceMappingURL=5.f46003e0644a0c277e34.hot-update.js.map