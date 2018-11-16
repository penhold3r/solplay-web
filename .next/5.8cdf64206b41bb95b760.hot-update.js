webpackHotUpdate(5,{

/***/ "./node_modules/css-loader/index.js?{\"modules\":false,\"minimize\":false,\"sourceMap\":true,\"importLoaders\":1}!./node_modules/sass-loader/lib/loader.js?{}!./node_modules/sanitize.css/sanitize.css":
false,

/***/ "./node_modules/css-loader/index.js?{\"modules\":false,\"minimize\":false,\"sourceMap\":true,\"importLoaders\":1}!./node_modules/sass-loader/lib/loader.js?{}!./src/fonts/fonts.css":
false,

/***/ "./node_modules/css-loader/index.js?{\"modules\":false,\"minimize\":false,\"sourceMap\":true,\"importLoaders\":1}!./node_modules/sass-loader/lib/loader.js?{}!./src/fonts/icons.css":
false,

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./node_modules/css-loader/lib/url/escape.js":
false,

/***/ "./src/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify__ = __webpack_require__("./node_modules/slugify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social__ = __webpack_require__("./src/components/social.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg__ = __webpack_require__("./static/solplay-header-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about__ = __webpack_require__("./src/components/about.js");
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\header.js";


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

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        headerWhite: false,
        activeLink: 0,
        menuOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dom = document.scrollingElement;
        var headerWhite = Boolean(dom.scrollTop > 250); //this.setState({ headerWhite });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var menuOpen = !_this.state.menuOpen;

        _this.setState({
          menuOpen: menuOpen
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, key, section) {
        e.preventDefault();

        _this.setState({
          activeLink: key
        });

        _this.props.menuClick(section);

        _this.handleMenu();
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.handleScroll();
      // window.addEventListener('scroll', this.handleScroll);
      // this.handleResize();
      // window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          menu = _props.menu,
          langs = _props.langs;
      var headerClass = this.state.headerWhite ? ' white' : '';
      var moblieClass = this.state.menuOpen ? 'mobile-menu open' : 'mobile-menu';
      var navClass = this.state.menuOpen ? 'main-nav nav-open' : 'main-nav';
      console.log(langs);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "main-header".concat(headerClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "extra-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lang-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, langs.map(function (lang, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          key: key,
          as: "/".concat(lang),
          href: "/lang=".concat(lang),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: "lang-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, lang));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__social__["a" /* default */], {
        className: "header-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg___default.a,
        alt: "Solplay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: navClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, menu.map(function (item, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "nav-link",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: _this2.state.activeLink == key ? 'active' : '',
          href: __WEBPACK_IMPORTED_MODULE_2_slugify___default()(item, {
            lower: true
          }),
          onClick: function onClick(e) {
            return _this2.handleClick(e, key, __WEBPACK_IMPORTED_MODULE_2_slugify___default()(item, {
              lower: true
            }));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, item));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: moblieClass,
        onClick: this.handleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/fonts/icons/solplay.eot":
false,

/***/ "./src/fonts/icons/solplay.svg":
false,

/***/ "./src/fonts/icons/solplay.ttf":
false,

/***/ "./src/fonts/icons/solplay.woff":
false

})
//# sourceMappingURL=5.8cdf64206b41bb95b760.hot-update.js.map