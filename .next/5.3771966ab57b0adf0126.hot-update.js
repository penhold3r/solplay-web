webpackHotUpdate(5,{

/***/ "./src/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify__ = __webpack_require__("./node_modules/slugify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg__ = __webpack_require__("./static/solplay-header-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg__);
var _jsxFileName = "/Users/caro/CLIENTES/@WEB/solplay/src/components/header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        headerWhite: false
      }
    });
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var dom = document.scrollingElement;
      var headerWhite = Boolean(dom.scrollTop > 250);
      this.setState({
        headerWhite: headerWhite
      });
    }
  }, {
    key: "render",
    value: function render() {
      var headerClass = this.state.headerWhite ? ' white' : '';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "main-header".concat(headerClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg___default.a,
        alt: "Solplay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }))))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./static/solplay-header-logo.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay-header-logo-efce7611382cf3fc793ea745829d55af.svg";

/***/ })

})
//# sourceMappingURL=5.3771966ab57b0adf0126.hot-update.js.map