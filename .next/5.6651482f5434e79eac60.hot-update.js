webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll_to_component_ssr__ = __webpack_require__("./node_modules/react-scroll-to-component-ssr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_scroll_to_component_ssr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_scroll_to_component_ssr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_hero__ = __webpack_require__("./src/components/hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_about__ = __webpack_require__("./src/components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_products__ = __webpack_require__("./src/components/products.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_organic__ = __webpack_require__("./src/components/organic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_certificate__ = __webpack_require__("./src/components/certificate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_components_location__ = __webpack_require__("./src/components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_components_contact__ = __webpack_require__("./src/components/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_data_data__ = __webpack_require__("./src/data/data.js");
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var openModal = !_this.state.modal;
        e.preventDefault();

        _this.setState({
          modal: openModal
        });
      }
    });
    _this.state = {
      modal: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sections = document.querySelectorAll('section.scroll');
      console.log(sections);
    }
  }, {
    key: "render",
    value: function render() {
      var menu = __WEBPACK_IMPORTED_MODULE_11__src_data_data__["a" /* default */].menu,
          _data$main = __WEBPACK_IMPORTED_MODULE_11__src_data_data__["a" /* default */].main,
          home = _data$main.home,
          about = _data$main.about,
          products = _data$main.products,
          organic = _data$main.organic,
          location = _data$main.location;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_layout__["a" /* default */], {
        menu: menu,
        menuClick: this.handleScrollTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_products__["a" /* default */], {
        content: products,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_certificate__["a" /* default */], {
        open: this.state.modal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.6651482f5434e79eac60.hot-update.js.map