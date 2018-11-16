webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_imagesloaded__ = __webpack_require__("./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_imagesloaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_imagesloaded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_hero__ = __webpack_require__("./src/components/hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_about__ = __webpack_require__("./src/components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_services__ = __webpack_require__("./src/components/services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_products__ = __webpack_require__("./src/components/products.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_product_modal__ = __webpack_require__("./src/components/product-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_components_organic__ = __webpack_require__("./src/components/organic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_components_certificate__ = __webpack_require__("./src/components/certificate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_components_location__ = __webpack_require__("./src/components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_components_contact__ = __webpack_require__("./src/components/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_data_data_es__ = __webpack_require__("./src/data/data-es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_data_data_en__ = __webpack_require__("./src/data/data-en.js");
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        lang: 'es',
        data: {
          es: __WEBPACK_IMPORTED_MODULE_13__src_data_data_es__["a" /* default */],
          en: __WEBPACK_IMPORTED_MODULE_14__src_data_data_en__["a" /* default */]
        },
        productModal: false,
        product: null,
        certificateModal: false,
        sections: [],
        sectionToScroll: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(section) {
        return _this.setState({
          sectionToScroll: section
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$setState;

        var product = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var modalTarget = e.currentTarget.classList.contains('product') ? 'productModal' : 'certificateModal';
        var openModal = !_this.state[modalTarget];
        e.preventDefault();

        _this.setState((_this$setState = {}, _defineProperty(_this$setState, modalTarget, openModal), _defineProperty(_this$setState, "product", product), _this$setState));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "waitForImages", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var imgs = document.querySelectorAll('img');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = imgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _img = _step.value;
            __WEBPACK_IMPORTED_MODULE_2_imagesloaded___default()(_img, function (obj) {
              return obj.images[0].img.style.opacity = 1;
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sections = Array.from(document.querySelectorAll('section.scroll'));
      this.waitForImages();
      var lang = this.props.router.query.lang;
      lang && this.setState({
        sections: sections,
        lang: lang
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _state = this.state,
          sections = _state.sections,
          sectionToScroll = _state.sectionToScroll;
      sections.map(function (section) {
        return section.id == sectionToScroll && section.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('state ', this.state);
      var _state2 = this.state,
          lang = _state2.lang,
          data = _state2.data;
      var _data$lang = data[lang],
          menu = _data$lang.menu,
          _data$lang$main = _data$lang.main,
          home = _data$lang$main.home,
          about = _data$lang$main.about,
          services = _data$lang$main.services,
          products = _data$lang$main.products,
          organic = _data$lang$main.organic,
          location = _data$lang$main.location;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_layout__["a" /* default */], {
        menu: menu,
        sections: this.state.sections,
        menuClick: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_product_modal__["a" /* default */], {
        open: this.state.productModal,
        content: this.state.product,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_services__["a" /* default */], {
        content: services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_products__["a" /* default */], {
        content: products,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_components_certificate__["a" /* default */], {
        open: this.state.certificateModal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Index));
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
//# sourceMappingURL=5.f46159fdca5ac4b2d437.hot-update.js.map