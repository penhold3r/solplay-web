webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_imagesloaded__ = __webpack_require__("./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_imagesloaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_imagesloaded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_hero__ = __webpack_require__("./src/components/hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_about__ = __webpack_require__("./src/components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_services__ = __webpack_require__("./src/components/services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_products__ = __webpack_require__("./src/components/products.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_product_modal__ = __webpack_require__("./src/components/product-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_organic__ = __webpack_require__("./src/components/organic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_components_certificate__ = __webpack_require__("./src/components/certificate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_components_location__ = __webpack_require__("./src/components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_components_contact__ = __webpack_require__("./src/components/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_data_data__ = __webpack_require__("./src/data/data.js");
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
        productModal: false,
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
        var body = document.querySelector('body');
        var modalTarget = e.currentTarget.classList.contains('product') ? 'productModal' : 'certificateModal';
        var openModal = !_this.state[modalTarget];
        e.preventDefault();

        _this.setState(_defineProperty({}, modalTarget, openModal));

        body.classList.toggle('no-scroll');
        console.log(e.currentTarget, modalTarget);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "waitForImages", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(imgs) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = imgs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _img = _step.value;
            __WEBPACK_IMPORTED_MODULE_1_imagesloaded___default()(_img, function (obj) {
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
      this.setState({
        sections: sections
      });
      var images = document.querySelectorAll('img');
      this.waitForImages(images);
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
      var menu = __WEBPACK_IMPORTED_MODULE_12__src_data_data__["a" /* default */].menu,
          _data$main = __WEBPACK_IMPORTED_MODULE_12__src_data_data__["a" /* default */].main,
          home = _data$main.home,
          about = _data$main.about,
          services = _data$main.services,
          products = _data$main.products,
          organic = _data$main.organic,
          location = _data$main.location;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_layout__["a" /* default */], {
        menu: menu,
        sections: this.state.sections,
        menuClick: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_product_modal__["a" /* default */], {
        open: this.state.productModal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_services__["a" /* default */], {
        content: services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_products__["a" /* default */], {
        content: products,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_certificate__["a" /* default */], {
        open: this.state.certificateModal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
//# sourceMappingURL=5.6c0703a0f9e10f524da2.hot-update.js.map