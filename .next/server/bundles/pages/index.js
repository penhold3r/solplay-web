module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_imagesloaded__ = __webpack_require__("imagesloaded");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_imagesloaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_imagesloaded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_hero__ = __webpack_require__("./src/components/hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_about__ = __webpack_require__("./src/components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_services__ = __webpack_require__("./src/components/services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_components_products__ = __webpack_require__("./src/components/products.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_components_product_modal__ = __webpack_require__("./src/components/product-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_components_organic__ = __webpack_require__("./src/components/organic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_components_certificate__ = __webpack_require__("./src/components/certificate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_components_location__ = __webpack_require__("./src/components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_components_contact__ = __webpack_require__("./src/components/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_data_data_es__ = __webpack_require__("./src/data/data-es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_data_data_en__ = __webpack_require__("./src/data/data-en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_data_data_ru__ = __webpack_require__("./src/data/data-ru.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_data_data_pt__ = __webpack_require__("./src/data/data-pt.js");

var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\pages\\index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


















var data = {
  en: __WEBPACK_IMPORTED_MODULE_16__src_data_data_en__["a" /* default */],
  es: __WEBPACK_IMPORTED_MODULE_15__src_data_data_es__["a" /* default */],
  pt: __WEBPACK_IMPORTED_MODULE_18__src_data_data_pt__["a" /* default */],
  ru: __WEBPACK_IMPORTED_MODULE_17__src_data_data_ru__["a" /* default */]
};

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
            __WEBPACK_IMPORTED_MODULE_4_imagesloaded___default()(_img, function (obj) {
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
      this.setState({
        sections: sections
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
      var _props = this.props,
          lang = _props.lang,
          content = _props.content;
      var menu = content.menu,
          _content$main = content.main,
          home = _content$main.home,
          about = _content$main.about,
          services = _content$main.services,
          products = _content$main.products,
          organic = _content$main.organic,
          location = _content$main.location,
          contact = _content$main.contact;
      var langs = Object.values(data).map(function (l) {
        return l.lang;
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_layout__["a" /* default */], {
        menu: menu,
        currentLang: lang,
        langs: langs,
        sections: this.state.sections,
        menuClick: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_components_product_modal__["a" /* default */], {
        open: this.state.productModal,
        content: this.state.product,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_hero__["a" /* default */], {
        content: home,
        scrollClick: this.handleScroll,
        about: about.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_services__["a" /* default */], {
        content: services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_products__["a" /* default */], {
        content: products,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__src_components_contact__["a" /* default */], {
        content: contact,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__src_components_certificate__["a" /* default */], {
        title: organic.modal,
        open: this.state.certificateModal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Object.defineProperty(Index, "getInitialProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    var _value = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
      var query, lang, content;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref2.query;
              lang = query.lang || query;
              content = data[lang];
              return _context.abrupt("return", {
                lang: lang,
                content: content
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function value(_x) {
      return _value.apply(this, arguments);
    };
  }()
});
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_next_router__["withRouter"])(Index));

/***/ }),

/***/ "./src/components/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_about_jpg__ = __webpack_require__("./static/solplay_about.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_about_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_solplay_about_jpg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\about.js";




var About = function About(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      content = _ref$content.content,
      countries = _ref$content.countries;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: __WEBPACK_IMPORTED_MODULE_1_slugify___default()(title, {
      lower: true
    }),
    className: "about scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "about-bg-img",
    src: __WEBPACK_IMPORTED_MODULE_2__static_solplay_about_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-content-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "countries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "".concat(countries.intro, " ").concat(countries.list))))));
};

/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),

/***/ "./src/components/certificate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg__ = __webpack_require__("./static/solplay_certification.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg__ = __webpack_require__("./static/oia-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_download_pdf_icon_svg__ = __webpack_require__("./static/download-pdf-icon.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_download_pdf_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_download_pdf_icon_svg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\certificate.js";





var Certificate = function Certificate(_ref) {
  var title = _ref.title,
      open = _ref.open,
      closeModal = _ref.closeModal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "certificate".concat(open ? ' visible' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "close-modal",
    onClick: closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "\xD7"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg___default.a,
    alt: "",
    className: "certificate-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "certificate-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg___default.a,
    alt: "Organizaci\xF3n Internacional Agropecuaria",
    className: "oia-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "../../static/solpay_OIA_certificacion.pdf",
    className: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_3__static_download_pdf_icon_svg___default.a,
    alt: "Descargar PDF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Certificate);

/***/ }),

/***/ "./src/components/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social__ = __webpack_require__("./src/components/social.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_submit_form__ = __webpack_require__("./src/data/submit-form.js");
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\contact.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Contact.__proto__ || Object.getPrototypeOf(Contact)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        spinner: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        return _this.setState(_defineProperty({}, e.target.name, e.target.value));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, output) {
        e.preventDefault();
        var submitSettings = {
          dest: 'https://cors-anywhere.herokuapp.com/https://solplayargentina.com/contacto.php',
          fields: '.field',
          successMsg: output.successMsg,
          errorMsg: output.errorMsg,
          urlencoded: true
        };
        Object(__WEBPACK_IMPORTED_MODULE_3__data_submit_form__["a" /* default */])(e.target, submitSettings);

        _this.setState({
          spinner: true
        });
      }
    }), _temp));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props$content = this.props.content,
          title = _props$content.title,
          fields = _props$content.fields,
          output = _props$content.output;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: __WEBPACK_IMPORTED_MODULE_1_slugify___default()(title, {
          lower: true
        }),
        className: "contact scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "main-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "contact-form",
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e, output);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "name",
        id: "name",
        className: "field",
        placeholder: " ",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, fields.name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "email",
        name: "email",
        id: "email",
        className: "field",
        placeholder: " ",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, fields.email)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        name: "msg",
        id: "msg",
        className: "field msg",
        placeholder: " ",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, fields.msg)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        className: "button",
        value: fields.send,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.state.spinner ? 'sending visible' : 'sending',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "spinner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__social__["a" /* default */], {
        className: "contact-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-details-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://goo.gl/maps/oqrceYemCP5G1a7Q6",
        target: "_blank",
        rel: "noopener",
        className: "icon-map-pin-streamline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Antartida Argentina 1341, La Puntilla, Luj\xE1n de Cuyo.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto:info@solplayargentina.com",
        className: "icon-envelope-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "info@solplayargentina.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:+5492615089415",
        className: "icon-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "54 9 261 508 9415")))));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "./src/components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg__ = __webpack_require__("./static/solplay-white-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\footer.js";



var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg___default.a,
    alt: "",
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "\xA9 ", new Date().getFullYear())));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social__ = __webpack_require__("./src/components/social.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg__ = __webpack_require__("./static/solplay-header-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\header.js";


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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          menu = _props.menu,
          currentLang = _props.currentLang,
          langs = _props.langs;
      var headerClass = this.state.headerWhite ? ' white' : '';
      var moblieClass = this.state.menuOpen ? 'mobile-menu open' : 'mobile-menu';
      var navClass = this.state.menuOpen ? 'main-nav nav-open' : 'main-nav';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "main-header".concat(headerClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "extra-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lang-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, langs.map(function (lang, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          key: key,
          as: "/".concat(lang.slug),
          href: "/lang=".concat(lang.slug),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: currentLang == lang.slug ? 'lang-link active-lang' : 'lang-link',
          "data-lang": lang.name,
          title: lang.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, lang.slug));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__social__["a" /* default */], {
        className: "header-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/".concat(currentLang),
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg___default.a,
        alt: "Solplay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: navClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, menu.map(function (item, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "nav-link",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
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
            lineNumber: 66
          }
        }, item));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: moblieClass,
        onClick: this.handleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/components/hero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider__ = __webpack_require__("./src/components/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_01_jpg__ = __webpack_require__("./static/banner/solplay_banner-01.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_01_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_01_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_02_jpg__ = __webpack_require__("./static/banner/solplay_banner-02.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_02_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_02_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_03_jpg__ = __webpack_require__("./static/banner/solplay_banner-03.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_03_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_03_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_04_jpg__ = __webpack_require__("./static/banner/solplay_banner-04.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_04_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_04_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_05_jpg__ = __webpack_require__("./static/banner/solplay_banner-05.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_05_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_05_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_banner_solplay_banner_06_jpg__ = __webpack_require__("./static/banner/solplay_banner-06.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_banner_solplay_banner_06_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_banner_solplay_banner_06_jpg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\hero.js";










var Hero = function Hero(_ref) {
  var content = _ref.content,
      scrollClick = _ref.scrollClick,
      about = _ref.about;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "inicio",
    className: "hero scroll",
    onClick: function onClick() {
      return scrollClick(__WEBPACK_IMPORTED_MODULE_1_slugify___default()(about, {
        lower: true
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "slider-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__slider__["a" /* default */], {
    pagination: true,
    paginationStyle: {
      background: '#E89D0B',
      border: '1px solid #FFF',
      height: '9px',
      width: '9px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_01_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_02_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_03_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_04_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_05_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_8__static_banner_solplay_banner_06_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "hero-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "hero-text",
    dangerouslySetInnerHTML: {
      __html: content.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "button",
    dangerouslySetInnerHTML: {
      __html: content.cta
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),

/***/ "./src/components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header__ = __webpack_require__("./src/components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer__ = __webpack_require__("./src/components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_index_scss__ = __webpack_require__("./src/styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_index_scss__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\layout.js";







var Layout = function Layout(_ref) {
  var menu = _ref.menu,
      currentLang = _ref.currentLang,
      langs = _ref.langs,
      children = _ref.children,
      menuClick = _ref.menuClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Solplay"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "developer",
    content: "penHolder Designerd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    type: "theme-color",
    content: "#00A7E1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "title",
    content: "Solplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: "Solplay SA es una empresa Argentina, dedicada a la exportaci\xF3n de productos agroalimentarios de calidad.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "referrer",
    content: "origin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: "https://solplayargentina.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: "Solplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: "Solplay SA es una empresa Argentina, dedicada a la exportaci\xF3n de productos agroalimentarios de calidad.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: "../../static/opengraph.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "twitter:url",
    content: "https://solplayargentina.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "twitter:title",
    content: "Solplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "twitter:description",
    content: "Solplay SA es una empresa Argentina, dedicada a la exportaci\xF3n de productos agroalimentarios de calidad.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "twitter:image",
    content: "../../static/opengraph.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "profile",
    href: "https://gmpg.org/xfn/11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../../static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "../../static/favicon.png",
    sizes: "32x32 192x192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* default */], {
    menu: menu,
    currentLang: currentLang,
    langs: langs,
    menuClick: menuClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Layout));

/***/ }),

/***/ "./src/components/location.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_ubicacion_jpg__ = __webpack_require__("./static/solplay_ubicacion.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_ubicacion_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_ubicacion_jpg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\location.js";



var LocationSection = function LocationSection(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      _ref$content$content = _ref$content.content,
      intro = _ref$content$content.intro,
      text = _ref$content$content.text,
      map = _ref$content.map;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_ubicacion_jpg___default.a,
    alt: "",
    className: "location-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "location-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "location-intro",
    dangerouslySetInnerHTML: {
      __html: intro
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "location-txt",
    dangerouslySetInnerHTML: {
      __html: text
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://goo.gl/maps/WrcgbGnL3V92",
    target: "_blank",
    rel: "noopener",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, map)));
};

/* harmony default export */ __webpack_exports__["a"] = (LocationSection);

/***/ }),

/***/ "./src/components/organic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_leaf_jpg__ = __webpack_require__("./static/solplay_leaf.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_leaf_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_leaf_jpg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\organic.js";



var Organic = function Organic(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      content = _ref$content.content,
      modal = _ref$content.modal,
      openModal = _ref.openModal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "organic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "organic-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "organic-content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "organic-image",
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_leaf_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "organic-content-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    dangerouslySetInnerHTML: {
      __html: content.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content.text
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "certificaciones",
    className: "button",
    onClick: openModal,
    dangerouslySetInnerHTML: {
      __html: modal
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Organic);

/***/ }),

/***/ "./src/components/product-modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\product-modal.js";


var ProductModal = function ProductModal(_ref) {
  var open = _ref.open,
      content = _ref.content,
      closeModal = _ref.closeModal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: open ? 'product-modal open' : 'product-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, content && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "modal-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "close-modal product",
    onClick: closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "\u02DF"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, content.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "product-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, content.specs && Object.entries(content.specs).map(function (spec, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: key,
      className: "spec",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
      className: "spec-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, spec[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "spec-content",
      dangerouslySetInnerHTML: {
        __html: spec[1]
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: content.image,
    alt: "[imagen: ".concat(content.name, "]"),
    className: "product-image",
    style: {
      opacity: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (ProductModal);

/***/ }),

/***/ "./src/components/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\products.js";



var Products = function Products(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      products = _ref$content.products,
      openModal = _ref.openModal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: __WEBPACK_IMPORTED_MODULE_1_slugify___default()(title, {
      lower: true
    }),
    className: "products scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "products-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, products.map(function (product, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: key,
      className: "product",
      onClick: function onClick(e) {
        return openModal(e, product);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      className: "product-image",
      src: product.image,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
      className: "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, product.name)));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Products);

/***/ }),

/***/ "./src/components/services.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_servicios_jpg__ = __webpack_require__("./static/solplay_servicios.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_servicios_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_servicios_jpg__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\services.js";



var Services = function Services(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      icons = _ref$content.icons;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "servicios",
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "services-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "services-bg-img",
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_servicios_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "services-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, icons.map(function (icon, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: key,
      className: "services-icon",
      "data-lighten": "".concat(key * 5),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      src: icon.icon,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, icon.text));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Services);

/***/ }),

/***/ "./src/components/slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\slider.js";


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
    background: '#CCC',
    border: '1px solid #666',
    borderRadius: '50%',
    cursor: 'pointer',
    height: '20px',
    margin: '6px',
    opacity: 0.5,
    outline: 'none',
    padding: 0,
    transition: 'all 0.3s',
    WebkitAppearance: 'none',
    width: '20px'
  },
  activeTile: {
    background: '#999',
    opacity: 1
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
          var style = slides.indexOf(slide) == activeTile ? _objectSpread({}, _this.styles.tile, _this.styles.activeTile) : _this.styles.tile;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
            key: key,
            className: classes,
            style: style,
            onClick: function onClick() {
              return _this.handlePagination(currentIndex);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          });
        });
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
          className: "pagination",
          style: _this.styles.pagination,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, tiles);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handlePagination", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(index) {
        return _this.setState({
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
      tile: _objectSpread({}, styles.tile, props.paginationStyle),
      activeTile: _objectSpread({}, styles.activeTile, props.paginationStyle)
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
          style: _this2.styles.sliderImg
        });
      });
      this.setState({
        images: images,
        pagination: pagination
      });
      images && setInterval(function () {
        var onTop = _this2.state.currentSlide;
        var currentSlide = onTop == images.length - 1 ? 0 : onTop + 1;

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
        var style = images.indexOf(slide) == _this3.state.currentSlide ? _objectSpread({}, _this3.styles.slide, _this3.styles.onTop) : _this3.styles.slide;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: key,
          className: classes,
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, slide);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider",
        style: this.styles.slider,
        ref: this.slider,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, slides, pagination && this.createPagination(slides, this.state.currentSlide));
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),

/***/ "./src/components/social.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\a310419\\Documents\\STUFFS\\PH\\solplay-web\\src\\components\\social.js";


var Social = function Social(_ref) {
  var className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "social-links ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon-facebook",
    title: "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon-twitter",
    title: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon-instagram",
    title: "Instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Social);

/***/ }),

/***/ "./src/data/data-en.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__ = __webpack_require__("./static/solplay-control_y_embalaje.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__ = __webpack_require__("./static/solplay-eficiencia.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__ = __webpack_require__("./static/solplay-seguimiento.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__ = __webpack_require__("./static/solplay-entrega.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__ = __webpack_require__("./static/productos/ajo-colorado.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__ = __webpack_require__("./static/productos/ajo-blanco.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__ = __webpack_require__("./static/productos/ciruelas-secas.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__ = __webpack_require__("./static/productos/nueces-chandler-.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__ = __webpack_require__("./static/productos/zapallo-butternut.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__ = __webpack_require__("./static/productos/zapallo-muscat.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__);










/* harmony default export */ __webpack_exports__["a"] = ({
  lang: {
    slug: 'en',
    name: 'English'
  },
  menu: ['Home', 'About Us', 'Products', 'Contact'],
  main: {
    home: {
      name: 'Home',
      content: '<h2>The <strong>best</strong> of us<br/> for <strong>everyone</strong></h2><p>We are motivated by the passion of what we like to do, get our products to customers from abroad.</p>',
      cta: 'Find more'
    },
    about: {
      title: 'About Us',
      content: '<strong>Solplay SA</strong> is an Argentinian company, dedicated to the export of quality agri-food products. We are in the international market for more than 2 decades, with vast experience in the products that we process and export to our clients.',
      countries: {
        intro: 'We reached different countries such as:',
        list: 'United States, European Union´s countries, Taiwan, Haiti, Brazil, Chile and Bolivia.'
      }
    },
    services: {
      title: 'Services',
      icons: [{
        text: 'Control and packaging',
        icon: __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default.a
      }, {
        text: 'Time efficiency',
        icon: __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default.a
      }, {
        text: 'Shipment follow up',
        icon: __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default.a
      }, {
        text: 'Guaranteed delivery',
        icon: __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default.a
      }]
    },
    products: {
      title: 'Products',
      products: [{
        name: 'Red Garlic',
        image: __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default.a,
        specs: {
          Variety: 'Red and Purple',
          Region: 'Valle de Uco, North and East Zone of Mendoza.',
          Harvest: 'October, November and December',
          Packaging: 'In boxes of 10 kilos, 30 libras, polypropylene bags of 20 kilos and 10 kilos, can be palletized or in bulk.<br/>It is sold in sizes, 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
        }
      }, {
        name: 'White Garlic',
        image: __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default.a,
        specs: {
          Variety: 'White',
          Region: 'Valle de Uco, North and East Zone of Mendoza.',
          Harvest: 'October, November y December',
          Packaging: 'In boxes of 10 kilos, 30 libras, polypropylene bags of 20 kilos and 10 kilos, can be palletized or in bulk.<br/>It is sold in sizes, 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
        }
      }, {
        name: 'Plums',
        image: __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default.a,
        specs: {
          Variety: 'D’agen',
          Region: 'East and south of Mendoza.',
          Harvest: 'February and March.',
          Packaging: 'In boxes of 10 kilos, white polypropylene bags 25 kilos with natural American drying type, sizes 30/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100, 100 / 110, 110/120.'
        }
      }, {
        name: 'Nuts',
        image: __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default.a,
        specs: {
          Variety: 'Chandler, Ser, Hartley, Howard and Vina',
          Region: 'Valle de Uco, Tupungato.',
          Harvest: 'March and April',
          Packaging: 'Natural nuts in white polypropylene bags of 25 kilos, sizes 3/32, 32/34, 34/36 and 36+.<br/>Peeled nuts in boxes of 10 kilos vacuum packed in 2 units of 5 kilos each, extra light quality, light, golden.'
        }
      }, {
        name: 'Pumpkin Butternut',
        image: __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default.a,
        specs: {
          Variety: 'Butternut',
          Region: 'North zone of Mendoza.',
          Harvest: 'January, February and March',
          Packaging: 'In boxes and wooden bins, in sizes S, M, L and XL.'
        }
      }, {
        name: 'Pumpkin Muscat di Provenza',
        image: __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default.a,
        specs: {
          Variety: 'Muscat di Provenza',
          Region: 'North zone of Mendoza.',
          Harvest: 'January, February and March',
          Packaging: 'In wooden bins with ranges of kilos from 5 kilos per unit to 15 kilos per unit.'
        }
      }]
    },
    organic: {
      title: 'Organic',
      content: {
        title: 'Products',
        text: 'We seek to offer a natural and healthy alimentation so we work with organic products such as garlic and dried plums among others.'
      },
      modal: 'Certifications'
    },
    location: {
      title: 'Location',
      content: {
        intro: 'We are located in the province of Mendoza, Argentine Republic.',
        text: '<strong>San Rafael</strong> is in the southern part of <strong>Mendoza</strong> near our Argentine Patagonia, this area is optimal to produce organic and conventional products due to its climate and the health of its water and soil.</br><strong>Guaymallén</strong> is located to the north of the province with productions of garlic´s scoop and fruits.'
      },
      map: 'View map'
    },
    contact: {
      title: 'Contact',
      fields: {
        name: 'Name',
        email: 'Email',
        msg: 'Message',
        send: 'Submit'
      },
      output: {
        successMsg: 'Menssage Sent!',
        errorMsg: 'Something went wrong, try again later. :('
      }
    }
  }
});

/***/ }),

/***/ "./src/data/data-es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__ = __webpack_require__("./static/solplay-control_y_embalaje.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__ = __webpack_require__("./static/solplay-eficiencia.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__ = __webpack_require__("./static/solplay-seguimiento.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__ = __webpack_require__("./static/solplay-entrega.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__ = __webpack_require__("./static/productos/ajo-colorado.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__ = __webpack_require__("./static/productos/ajo-blanco.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__ = __webpack_require__("./static/productos/ciruelas-secas.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__ = __webpack_require__("./static/productos/nueces-chandler-.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__ = __webpack_require__("./static/productos/zapallo-butternut.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__ = __webpack_require__("./static/productos/zapallo-muscat.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__);










/* harmony default export */ __webpack_exports__["a"] = ({
  lang: {
    slug: 'es',
    name: 'Español'
  },
  menu: ['Inicio', 'Quienes Somos', 'Productos', 'Contacto'],
  main: {
    home: {
      name: 'Inicio',
      content: '<h2>Lo <strong>mejor</strong> de nosotros<br/> para <strong>todo el mundo</strong></h2><p>Motivados por la pasión de lo que nos gusta hacer, llegar con nuestros productos a clientes alrededor del mundo.</p>',
      cta: 'Descubrinos'
    },
    about: {
      title: 'Quienes Somos',
      content: '<strong>Solplay SA</strong> es una empresa Argentina, dedicada a la exportación de productos agroalimentarios de calidad. Estamos en el mercado internacional hace más de 2 décadas, tenemos experiencia en los productos que procesamos y exportamos a nuestros clientes.',
      countries: {
        intro: 'Contamos con clientes en distintos Países tales como:',
        list: 'EEUU, Unión Europea, Taiwán, Haití, Brasil, Chile, Bolivia'
      }
    },
    services: {
      title: 'Servicios',
      icons: [{
        text: 'Control y embalaje',
        icon: __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default.a
      }, {
        text: 'Eficiencia de Tiempos',
        icon: __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default.a
      }, {
        text: 'Seguimiento de Envío',
        icon: __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default.a
      }, {
        text: 'Entrega asegurada',
        icon: __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default.a
      }]
    },
    products: {
      title: 'Productos',
      products: [{
        name: 'Ajo Colorado',
        image: __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default.a,
        specs: {
          Variedad: 'Morado y Colorado',
          Region: 'Valle de Uco, zona norte y este de la provincia de Mendoza.',
          Cosecha: 'Octubre, Noviembre y Diciembre',
          Formato: 'En cajas de 10 kilos, 30 libras, bolsas de polipropileno de 20 kilos y de 10 kilos, puede ser palletizado o a granel.<br/>Se comercializa en los calibres, 3 (30/35mm) 4 (36/45mm) 5 (46/55mm) 6 (56/65mm) 7 (66/75mm).'
        }
      }, {
        name: 'Ajo Blanco',
        image: __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default.a,
        specs: {
          Variedad: 'Blanco',
          Region: 'Valle de Uco, zona norte y este de la provincia de Mendoza.',
          Cosecha: 'Octubre, Noviembre y Diciembre',
          Formato: 'En cajas de 10 kilos, 30 libras, bolsas de polipropileno de 20 kilos y de 10 kilos, puede ser palletizado o a granel.<br/>Se comercializa en los calibres, 3 (30/35mm) 4 (36/45mm) 5 (46/55mm) 6 (56/65mm) 7 (66/75mm).'
        }
      }, {
        name: 'Ciruela',
        image: __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default.a,
        specs: {
          Variedad: 'D’agen',
          Region: 'Este y Sur de la provincia de Mendoza.',
          Cosecha: 'Febrero y Marzo',
          Formato: 'En cajas de carton de 10 kilos, bolsas de polipropileno blancas en 25 kilos tipo secado Americano natural, calibres 30/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100, 100/110, 110/120.'
        }
      }, {
        name: 'Nuez',
        image: __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default.a,
        specs: {
          Variedad: 'Chandler, Ser, Hartley, Howard y Vina',
          Region: 'Valle de Uco, Tupungato.',
          Cosecha: 'Marzo y Abril',
          Formato: 'Enteras tipo natural en bolsas de polipropileno blanca de 25 kilos, calibres 3/32, 32/34, 34/36 y 36+.<br/>Peladas en cajas de carton de 10 kilos envasadas al vacio en 2 unidades de 5 kilos cada una, calidad extra light, light, dorada.'
        }
      }, {
        name: 'Zapallo Butternut',
        image: __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default.a,
        specs: {
          Variedad: 'Butternut',
          Region: 'Zona norte de la provincia de Mendoza.',
          Cosecha: 'Enero, Febrero y Marzo',
          Formato: 'En cajas de carton y en bines de madera, en calibres S, M, L y XL.'
        }
      }, {
        name: 'Zapallo Muscat di Provenza',
        image: __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default.a,
        specs: {
          Variedad: 'Muscat di Provenza',
          Region: 'Zona norte de la provincia de Mendoza.',
          Cosecha: 'Enero, Febrero y Marzo',
          Formato: 'En bines de madera con rangos de kilos que van desde los 5 kilos por unidad hasta los 15 kilos por unidad.'
        }
      }]
    },
    organic: {
      title: 'Orgánicos',
      content: {
        title: 'Productos',
        text: 'Buscamos ofrecer una alimentación natural y saludable por lo que trabajamos con productos orgánicos como ajos y ciruelas deshidratadas entre otros.'
      },
      modal: 'Certificaciones'
    },
    location: {
      title: 'Ubicación',
      content: {
        intro: 'Estamos situados en la provincia de Mendoza, República Argentina.',
        text: '<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong> cerca de nuestra <strong>Patagonia Argentina,</strong> esta zona es óptima para la producción de productos orgánicos y convencionales debidos a su clima y a la sanidad de su agua y suelos.<br/><strong>Guaymallén</strong> se encuentra al norte de la provincia con producciones de primicia de ajos y frutas.'
      },
      map: 'Ver mapa'
    },
    contact: {
      title: 'Contacto',
      fields: {
        name: 'Nombre',
        email: 'Email',
        msg: 'Mensaje',
        send: 'Enviar'
      },
      output: {
        successMsg: 'Mensaje enviado!',
        errorMsg: 'Hubo un error, intente más tarde. :('
      }
    }
  }
});

/***/ }),

/***/ "./src/data/data-pt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__ = __webpack_require__("./static/solplay-control_y_embalaje.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__ = __webpack_require__("./static/solplay-eficiencia.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__ = __webpack_require__("./static/solplay-seguimiento.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__ = __webpack_require__("./static/solplay-entrega.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__ = __webpack_require__("./static/productos/ajo-colorado.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__ = __webpack_require__("./static/productos/ajo-blanco.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__ = __webpack_require__("./static/productos/ciruelas-secas.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__ = __webpack_require__("./static/productos/nueces-chandler-.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__ = __webpack_require__("./static/productos/zapallo-butternut.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__ = __webpack_require__("./static/productos/zapallo-muscat.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__);










/* harmony default export */ __webpack_exports__["a"] = ({
  lang: {
    slug: 'pt',
    name: 'Português'
  },
  menu: ['Home', 'Quem somos', 'Produtos', 'Contato'],
  main: {
    home: {
      name: 'Inicio',
      content: '<h2>O <strong>melhor</strong> de nós<br/> para <strong>todos</strong></h2><p>Somos motivados pela paixão do que gostamos de fazer, levar nossos produtos aos clientes do exterior.</p>',
      cta: 'Sobre nós'
    },
    about: {
      title: 'Sobre nós',
      content: 'A <strong>Solplay SA</strong> é uma empresa argentina dedicada à exportação de produtos agroalimentares de qualidade. Estamos no mercado internacional há mais de 2 décadas, com vasta experiência nos produtos que processamos e exportamos para nossos clientes.',
      countries: {
        intro: 'Chegamos a diferentes países como:',
        list: 'Estados Unidos, países da União Europeia, Taiwan, Haiti, Brasil, Chile e Bolívia.'
      }
    },
    services: {
      title: 'Serviços',
      icons: [{
        text: 'Controle e Embalagem',
        icon: __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default.a
      }, {
        text: 'Eficiência de Tempo',
        icon: __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default.a
      }, {
        text: 'Rastreamento De Entrega',
        icon: __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default.a
      }, {
        text: 'Entrega Garantida',
        icon: __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default.a
      }]
    },
    products: {
      title: 'Produtos',
      products: [{
        name: 'Alho Vermelho',
        image: __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default.a,
        specs: {
          Variedade: 'Vermelho e Roxo',
          Região: 'Valle De Uco, Zona Norte e Leste de Mendoza.',
          Colheita: 'Outubro, Novembro e Dezembro',
          Embalagem: 'Em Caixas De 10 Quilos, 30 Libras, Sacos De Polipropileno De 20 Quilos E 10 Quilos, Podem Ser Paletizados Ou A Granel.<br/>É Vendido Em Tamanhos De 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
        }
      }, {
        name: 'Ajo Branco',
        image: __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default.a,
        specs: {
          Variedade: 'Branco',
          Região: 'Valle De Uco, Zona Norte e Leste de Mendoza.',
          Colheita: 'Outubro, Novembro e Dezembro',
          Embalagem: 'Em Caixas De 10 Quilos, 30 Libras, Sacos De Polipropileno De 20 Quilos E 10 Quilos, Podem Ser Paletizados Ou A Granel.<br/>É Vendido Em Tamanhos De 3 (30 / 35mm) 4 (36 / 45mm) 5 (46 / 55mm) 6 (56 / 65mm) 7 (66 / 75mm).'
        }
      }, {
        name: 'Ameixas',
        image: __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default.a,
        specs: {
          Variedade: 'D’agen',
          Região: 'Leste e sul de Mendoza.',
          Colheita: 'Fevereiro e Março',
          Embalagem: 'Em caixas de 10 quilos, sacos de polipropileno branco 25 quilos com tipo de secagem natural americano, tamanhos 30/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100, 100/110, 110/120.'
        }
      }, {
        name: 'Nozes',
        image: __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default.a,
        specs: {
          Variedade: 'Chandler, Ser, Hartley, Howard e Vina',
          Região: 'Valle de Uco, Tupungato.',
          Colheita: 'Março e Abril',
          Embalagem: 'Nozes naturais em sacos de polipropileno branco de 25 quilos, tamanhos 3/32, 32/34, 34/36 e 36+.<br/>Nozes descascadas em caixas de 10 quilos embaladas a vácuo em 2 unidades de 5 quilos, qualidade extra light, light, golden.'
        }
      }, {
        name: 'Abóbora Butternut',
        image: __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default.a,
        specs: {
          Variedade: 'Butternut',
          Região: 'Zona norte de la provincia de Mendoza.',
          Colheita: 'Janeiro, Fevereiro e Março',
          Embalagem: 'Em caixas e caixas de madeira, nos tamanhos S, M, L e XL.'
        }
      }, {
        name: 'Abóbora Muscat di Provenza',
        image: __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default.a,
        specs: {
          Variedade: 'Muscat di Provenza',
          Região: 'Zona norte de la provincia de Mendoza.',
          Colheita: 'Enero, Febrero y Marzo',
          Embalagem: 'Em caixas de madeira com intervalos de 5 quilos a 15 quilos por unidade.'
        }
      }]
    },
    organic: {
      title: 'Orgânico',
      content: {
        title: 'Produtos',
        text: 'Procuramos oferecer uma alimentação natural e saudável, por isso trabalhamos com produtos orgânicos, como alho e ameixas secas, entre outros.'
      },
      modal: 'Certificações'
    },
    location: {
      title: 'Localização',
      content: {
        intro: 'Estamos Localizados Na Província De Mendoza, República Argentina.',
        text: '<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong>fica na parte sul de Mendoza, perto da nossa <strong>Patagônia Argentina,</strong> esta área é ideal para produzir produtos orgânicos e convencionais, devido ao seu clima e à saúde de sua água e solo.<br/><strong>Guaymallén</strong> está localizado ao norte da província, com produções de colher de alho e frutas.'
      },
      map: 'Ver no mapa'
    },
    contact: {
      title: 'Contato',
      fields: {
        name: 'Nome',
        email: 'Email',
        msg: 'Mensagem',
        send: 'Enviar'
      },
      output: {
        successMsg: 'Mensagem enviada!',
        errorMsg: 'Houve um erro, tente mais tarde.'
      }
    }
  }
});

/***/ }),

/***/ "./src/data/data-ru.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__ = __webpack_require__("./static/solplay-control_y_embalaje.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__ = __webpack_require__("./static/solplay-eficiencia.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__ = __webpack_require__("./static/solplay-seguimiento.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__ = __webpack_require__("./static/solplay-entrega.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__ = __webpack_require__("./static/productos/ajo-colorado.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__ = __webpack_require__("./static/productos/ajo-blanco.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__ = __webpack_require__("./static/productos/ciruelas-secas.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__ = __webpack_require__("./static/productos/nueces-chandler-.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__ = __webpack_require__("./static/productos/zapallo-butternut.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__ = __webpack_require__("./static/productos/zapallo-muscat.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg__);










/* harmony default export */ __webpack_exports__["a"] = ({
  lang: {
    slug: 'ru',
    name: 'русский'
  },
  menu: ['Начните', 'О нас', 'Товары', 'контакт'],
  main: {
    home: {
      name: 'Начните',
      content: '<h2><strong>Наше</strong> лучшее для всего <strong>мира</strong></h2><p>Мы выполняем наше дело со страстью и мотивацией и нам нравится доставлять наши продукты для клиентов из-за рубежа.</p>',
      cta: 'Подробнее о нас'
    },
    about: {
      title: 'О нас',
      content: '<strong>Solplay SA</strong> аргентинская компания, специализирующаяся на экспорте качественных агропродовольственных товаров. Мы находимся на международном рынке более двух десятилетий, имея большой опыт в обработке и экспорте продуктов.',
      countries: {
        intro: 'У нас имеются клиентские базы в:',
        list: 'Соединенных Штатах, странах Европейского союза, Тайване, Гаити, Бразилии, Чили и Боливии.'
      }
    },
    services: {
      title: 'Сервисы',
      icons: [{
        text: 'Контроль и упаковка',
        icon: __WEBPACK_IMPORTED_MODULE_0__static_solplay_control_y_embalaje_svg___default.a
      }, {
        text: 'Эффективность По Времени',
        icon: __WEBPACK_IMPORTED_MODULE_1__static_solplay_eficiencia_svg___default.a
      }, {
        text: 'Контроль Над Посылкой',
        icon: __WEBPACK_IMPORTED_MODULE_2__static_solplay_seguimiento_svg___default.a
      }, {
        text: 'Гарантированная Доставка',
        icon: __WEBPACK_IMPORTED_MODULE_3__static_solplay_entrega_svg___default.a
      }]
    },
    products: {
      title: 'Товары',
      products: [{
        name: 'Красный Чеснок',
        image: __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default.a,
        specs: {
          Разнообразие: 'Красный - фиолетовый',
          Регион: 'Валье-де-Уко, Северная и Восточная зона аргентинской провинции Мендоса.',
          Урожай: 'Октябрь, Ноябрь и Декабрь',
          Упаковка: 'В коробках по 10 килограммов (30 фунтов), полипропиленовых мешках по 20 килограммов и 10 килограммов, могут быть на паллетах или оптом.<br/>Продажа в размерах, 3 (30/35 мм) 4 (36/45 мм) 5 (46/55 мм) 6 (56/65 мм) 7 (66/75 мм).'
        }
      }, {
        name: 'Белый Гарлик',
        image: __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default.a,
        specs: {
          Разнообразие: 'белый',
          Регион: 'Валье-де-Уко, Северная и Восточная зона Мендосы.',
          Урожай: 'Октябрь, ноябрь и декабрь',
          Упаковка: 'В коробках по 10 килограммов (30 фунтов), полипропиленовых мешках по 20 килограммов и 10 килограммов, могут быть на паллетах или оптом.<br/>Продажа в размерах, 3 (30/35 мм) 4 (36/45 мм) 5 (46/55 мм) 6 (56/65 мм) 7 (66/75 мм).'
        }
      }, {
        name: 'Слива',
        image: __WEBPACK_IMPORTED_MODULE_6__static_productos_ciruelas_secas_jpg___default.a,
        specs: {
          Разнообразие: 'D’agen',
          Регион: 'Восток и юг Мендосы.',
          Урожай: 'Февраль и март',
          Упаковка: 'В коробках по 10 кг белые полипропиленовые мешки 25 кг с натуральным американским сухим типом, размеры 30/40, 40/50, 50/60, 60/70, 70/80, 80/90, 90/100, 100/110, 110/120.'
        }
      }, {
        name: 'Орешки',
        image: __WEBPACK_IMPORTED_MODULE_7__static_productos_nueces_chandler_jpg___default.a,
        specs: {
          Разнообразие: 'Чандлер, Сер, Хартли, Говард и Вина',
          Регион: 'Валье-де-Уко, Тупунгато.',
          Урожай: 'Март и апрель',
          Упаковка: 'Натуральные орехи в белых полипропиленовых мешках по 25 кг, размеры 3/32, 32/34, 34/36 и 36+.<br/>Очищенные гайки в коробках по 10 кг, упакованные в 2 единицы по 5 килограммов каждый, дополнительное качество света, светлое, золотистое.'
        }
      }, {
        name: 'Тыквенный Butternut',
        image: __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_butternut_jpg___default.a,
        specs: {
          Разнообразие: 'Butternut',
          Регион: 'Северная зона Мендосы.',
          Урожай: 'Январь, февраль и март',
          Упаковка: 'В коробках и деревянных бункерах, размерах S, M, L и XL.'
        }
      }, {
        name: 'Тыква Мускат ди Провенца',
        image: __WEBPACK_IMPORTED_MODULE_9__static_productos_zapallo_muscat_jpg___default.a,
        specs: {
          Разнообразие: 'Мускат ди Провенца',
          Регион: 'Нот-зона Мендосы.',
          Урожай: 'Январь, февраль и март',
          Упаковка: 'В деревянных бункерах с диапазонами килограммов от 5 кг на единицу до 15 кг на единицу.'
        }
      }]
    },
    organic: {
      title: 'Органические',
      content: {
        title: 'Товары',
        text: 'Мы стремимся предложить натуральное и здоровое питание, поэтому мы работаем с такими органическими продуктами, как чеснок и сушеные сливы.'
      },
      modal: 'Сертификаты'
    },
    location: {
      title: 'Место Нахождения',
      content: {
        intro: 'Мы расположены в провинции Мендоза, Аргентинской Республики.',
        text: '<strong>San Rafael</strong> Сан-Рафаэль находится в южной части Мендосы недалеко от нашей аргентинской Патагонии, этот район оптимален для производства органических и традиционных продуктов из-за его климата и благосостояния его воды и почвы.<br/><strong>Guaymallén</strong> расположен к северу от провинции с производствами совок и фруктов чеснока.'
      },
      map: 'Смотреть На Карте'
    },
    contact: {
      title: 'контакт',
      fields: {
        name: 'Имя',
        email: 'электронная почта',
        msg: 'Сообщение',
        send: 'Отправить сообщение'
      },
      output: {
        successMsg: 'Сообщение отправлено!',
        errorMsg: 'Произошла ошибка, повторите попытку позже.'
      }
    }
  }
});

/***/ }),

/***/ "./src/data/submit-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//--------------------------------------------------------
//>>   SUBMIT FORMS
//--------------------------------------------------------

/**
 *
 * @param {HTMLFormElement} form - reference to form elemnt
 * @param {Object.<string, *>} settings - settings before send
 */
var submitForm = function submitForm(form, settings) {
  if (!settings || !form) {
    console.warn('Must configure form settings');
    return false;
  } else if (!settings.dest) console.warn('Must set "dest" property: exaple – "dest":"/contact"');else if (!settings.fields) console.warn('Must set "fields" property value with input class name.');else {
    form.setAttribute('novalidate', '');
    submitFormData(form, settings);
  }
}; //


var submitFormData = function submitFormData(form, settings) {
  var fields = form.querySelectorAll(settings.fields);
  var msg = document.createElement('div');
  var validate = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  var formData = new FormData(form);
  var opt = {
    method: 'POST' //

  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _field = _step.value;

      if (_field.hasAttribute('required')) {
        if (_field.value === '' || _field.getAttribute('name') === 'email' && !validate.test(_field.value)) {
          _field.focus();

          return false;
        }
      }
    } //

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

  msg.classList.add('output-msg');
  msg.innerHTML = '<p></p>';
  if (!document.body.contains(document.querySelector('.output-msg'))) form.append(msg); //

  if (settings.closeMsg == 'true') {
    var msgClose = document.createElement('div');
    msgClose.classList.add('close-form-msg');
    msg.appendChild(msgClose);
    msgClose.addEventListener('click', function (e) {
      return msg.classList.remove('visible');
    });
  } //


  if (settings.name) formData.append('form-name', settings.name);
  if (settings.reciever) formData.append('dest', settings.reciever); //

  opt.headers = {
    'Content-Type': settings.urlencoded ? 'application/x-www-form-urlencoded' : 'application/json'
  };
  opt.body = settings.urlencoded ? urlencodeFormData(formData) : formData; //

  console.log('data: ', opt); //

  fetch(settings.dest, opt).then(function (resp) {
    if (resp.ok) {
      msg.querySelector('p').innerHTML = !settings.successMsg ? 'ok' : settings.successMsg;
      msg.querySelector('p').className = 'msg-ok';
      msg.classList.add('visible');
      form.classList.add('success');
      form.reset(); //

      console.log('successful', opt);
    } else {
      msg.querySelector('p').innerHTML = !settings.errorMsg ? 'error' : settings.errorMsg;
      msg.querySelector('p').className = 'msg-error';
      msg.classList.add('visible');
      form.classList.add('error');
      form.reset(); //

      console.warn('failed');
    }
  }).catch(function (err) {
    return console.error('Error: ', err);
  });
}; //

/**
 *
 * @param {FormData} fd - FromData Object to encode
 * @returns {String}
 */


var urlencodeFormData = function urlencodeFormData(fd) {
  var str = '';

  var encode = function encode(str) {
    return encodeURIComponent(str).replace(/%20/g, '+');
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = fd.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _pair = _step2.value;

      if (typeof _pair[1] == 'string') {
        str += (str ? '&' : '') + encode(_pair[0]) + '=' + encode(_pair[1]);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return str;
}; //


/* harmony default export */ __webpack_exports__["a"] = (submitForm);

/***/ }),

/***/ "./src/styles/index.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/banner/solplay_banner-01.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_banner-01-1fe25394881d52f4bf4379a4a54cb25c.jpg";

/***/ }),

/***/ "./static/banner/solplay_banner-02.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_banner-02-239cb1b1ac0f63d709e25e9c64f06ba2.jpg";

/***/ }),

/***/ "./static/banner/solplay_banner-03.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_banner-03-581e85af34257368656e43b039e62b38.jpg";

/***/ }),

/***/ "./static/banner/solplay_banner-04.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_banner-04-a9b0f887e909a0ebbc226d17a34a1b92.jpg";

/***/ }),

/***/ "./static/banner/solplay_banner-05.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_banner-05-5630151956d8582abced496245cf1661.jpg";

/***/ }),

/***/ "./static/banner/solplay_banner-06.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_banner-06-4ddddae601908e510f74dc6e4bc14385.jpg";

/***/ }),

/***/ "./static/download-pdf-icon.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zMSwyLjRIMTAuOWMtMi4xLDAtMy44LDEuNy0zLjgsMy44VjE5djIuNHYyMi4zYzAsMi4xLDEuNywzLjgsMy44LDMuOGgyOC4yYzIuMSwwLDMuOC0xLjcsMy44LTMuOA0KCQlWMjEuNFYxOXYtNC42TDMxLDIuNHogTTQxLjUsNDMuOGMwLDEuMy0xLjEsMi40LTIuNCwyLjRIMTAuOWMtMS4zLDAtMi40LTEuMS0yLjQtMi40VjIxLjRoMzNWNDMuOHogTTguNSwxOVY2LjINCgkJYzAtMS4zLDEuMS0yLjQsMi40LTIuNGgxOS41bDAuMywwLjN2Ny41YzAsMS43LDEuNCwzLjEsMy4xLDMuMWg3LjNsMC4zLDAuM3Y0SDguNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE1LjYsMTBjLTAuMi0wLjEtMC40LTAuMi0wLjctMC4yYy0wLjMsMC0wLjYtMC4xLTEtMC4xaC0xLjR2NS4xaDAuOXYtMS43aDAuOWMwLjIsMCwwLjQsMCwwLjYtMC4xDQoJCXMwLjQtMC4yLDAuNi0wLjNjMC4yLTAuMSwwLjMtMC4zLDAuNC0wLjZjMC4xLTAuMiwwLjItMC41LDAuMi0wLjljMC0wLjMsMC0wLjYtMC4xLTAuOFMxNS44LDEwLjEsMTUuNiwxMHogTTE1LDEyDQoJCWMtMC4xLDAuMS0wLjQsMC4yLTAuNywwLjJoLTAuOHYtMS44aDAuOGMwLjIsMCwwLjMsMCwwLjUsMGMwLjEsMCwwLjIsMC4xLDAuMywwLjFjMC4xLDAuMSwwLjEsMC4yLDAuMiwwLjNjMCwwLjEsMCwwLjIsMCwwLjQNCgkJQzE1LjIsMTEuNywxNS4xLDExLjksMTUsMTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMC41LDEwLjRjLTAuMi0wLjItMC41LTAuNC0wLjgtMC41Yy0wLjMtMC4xLTAuNi0wLjItMS0wLjJoLTEuOXY1LjFoMS45YzAuNCwwLDAuNy0wLjEsMS0wLjINCgkJYzAuMy0wLjEsMC42LTAuMywwLjgtMC41czAuNC0wLjUsMC41LTAuOGMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMXMtMC4xLTAuNy0wLjItMS4xQzIwLjksMTAuOSwyMC44LDEwLjYsMjAuNSwxMC40eiBNMTkuOCwxMy41DQoJCWMtMC4zLDAuMy0wLjYsMC40LTEuMSwwLjRoLTF2LTMuM2gxYzAuNSwwLDAuOSwwLjEsMS4xLDAuNHMwLjQsMC43LDAuNCwxLjJTMjAuMSwxMy4yLDE5LjgsMTMuNXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSIyMi4xLDE0LjggMjMsMTQuOCAyMywxMi42IDI0LjcsMTIuNiAyNC43LDExLjcgMjMsMTEuNyAyMywxMC42IDI1LjIsMTAuNiAyNS4yLDkuNyANCgkJMjIuMSw5LjcgCSIvPg0KCTxyZWN0IHg9IjEyLjgiIHk9IjI2LjciIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTMiIGhlaWdodD0iMiIvPg0KCTxyZWN0IHg9IjEyLjgiIHk9IjMwLjIiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMjMuNCIgaGVpZ2h0PSIyIi8+DQoJPHJlY3QgeD0iMTIuOCIgeT0iMzQuNSIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxMyIgaGVpZ2h0PSIyIi8+DQoJPHJlY3QgeD0iMTIuOCIgeT0iMzgiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTMiIGhlaWdodD0iMiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjksMzkuOEgzN3YtNS4xSDI5VjM5Ljh6IE0zMC4xLDM1LjhoNS44djIuOGgtNS44VjM1Ljh6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./static/oia-logo.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/oia-logo-888bf7472ba11deb93c91cd86edd067a.svg";

/***/ }),

/***/ "./static/productos/ajo-blanco.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ajo-blanco-b17935adff03b596c61e6c86b749d650.jpg";

/***/ }),

/***/ "./static/productos/ajo-colorado.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ajo-colorado-df0f56067844cb2e7a7aa0f3ac485302.jpg";

/***/ }),

/***/ "./static/productos/ciruelas-secas.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ciruelas-secas-d15a44596a3dc8abbcf0699d1c344583.jpg";

/***/ }),

/***/ "./static/productos/nueces-chandler-.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nueces-chandler--9ee41713d89f07ca006989460f8d65e0.jpg";

/***/ }),

/***/ "./static/productos/zapallo-butternut.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/zapallo-butternut-240fe46cb0c47ec364319c7fa0965687.jpg";

/***/ }),

/***/ "./static/productos/zapallo-muscat.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/zapallo-muscat-eeba4b9f4855b314c84e79151b6df1b6.jpg";

/***/ }),

/***/ "./static/solplay-control_y_embalaje.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik00OC4zLDNIMS43djEwaDEuOFY0N2g0M1YxM2gxLjhWM3ogTTQsNS4zaDQydjUuNUg0VjUuM3ogTTM2LjksMzh2Ni42aC0zLjRWMzhoMC43aDIuMUgzNi45eg0KCSBNNDQuMiw0NC43aC0zLjNWMzhoMi43bC00LjctNi43bC0zLjcsNS4ybC0zLjctNS4yTDI2LjcsMzhoMi43djYuNkg1LjhWMTNoMzguNFY0NC43eiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./static/solplay-eficiencia.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik00MS4yLDE0LjZsMS4yLTEuMmwwLjgtMC44bDAsMGwwLDBsLTQuNC00LjRsMCwwbDAsMGwtMS4yLDEuMmwtMSwxYy0yLjQtMS42LTUtMi43LTcuOS0zLjJWNg0KCUMyOS41LDUuNCwzMCw0LjgsMzAsNGMwLTEuNy0yLjEtMi45LTUtMi45Yy0yLjksMC01LDEuMi01LDIuOWMwLDAuOCwwLjUsMS41LDEuMywydjEuM2MtMi45LDAuNS01LjYsMS42LTcuOSwzLjJsMCwwbDAsMEwxMiw5LjENCglsLTAuOS0wLjhsMCwwbC00LjQsNC40bDAuOSwwLjlsMS4xLDEuMUM1LjgsMTguMiw0LDIyLjksNCwyNy45YzAsMTEuNiw5LjQsMjEsMjEsMjFjMTEuNiwwLDIxLTkuNCwyMS0yMQ0KCUM0NiwyMi45LDQ0LjIsMTguMiw0MS4yLDE0LjZ6IE00My45LDI2LjZjLTAuMy0wLjItMC42LTAuMy0wLjktMC4zaC0wLjhjLTAuMy0zLjQtMS42LTYuNS0zLjctOS4xbDEuMi0xLjINCglDNDIuMSwxOSw0My42LDIyLjYsNDMuOSwyNi42eiBNMzkuNSwyOS41aDAuNmMtMC43LDcuMS02LjQsMTIuOC0xMy41LDEzLjV2LTAuNmMwLTAuOS0wLjctMS42LTEuNi0xLjZjLTAuOSwwLTEuNiwwLjctMS42LDEuNlY0Mw0KCWMtNy4xLTAuNy0xMi44LTYuNC0xMy41LTEzLjVoMC42YzAuOSwwLDEuNi0wLjcsMS42LTEuNnMtMC43LTEuNi0xLjYtMS42SDkuOWMwLjctNy4xLDYuNC0xMi43LDEzLjUtMTMuNXYwLjYNCgljMCwwLjQsMC4yLDAuOCwwLjUsMS4xaC0wLjF2MTEuNWMtMC4yLDAuMi0wLjQsMC4zLTAuNiwwLjZoLTguN3YyLjRoOC42YzAuNCwwLjYsMS4xLDEuMSwxLjksMS4xYzEuMiwwLDIuMi0xLDIuMi0yLjINCgljMC0wLjgtMC40LTEuNS0xLTEuOVYxNC42aC0wLjFjMC4zLTAuMywwLjUtMC43LDAuNS0xLjF2LTAuNmM3LjEsMC43LDEyLjcsNi40LDEzLjUsMTMuNWgtMC42Yy0wLjksMC0xLjYsMC43LTEuNiwxLjYNCglTMzguNiwyOS41LDM5LjUsMjkuNXogTTIzLjQsOS4xYzAuMSwwLDAuMiwwLDAuMywwYy0wLjEsMC4xLTAuMSwwLjItMC4yLDAuNGgtMC4xVjkuMXogTTI2LjUsOS40YzAtMC4xLTAuMS0wLjMtMC4yLTAuNA0KCWMwLjEsMCwwLjIsMCwwLjMsMHYwLjRIMjYuNXogTTM1LjEsMTEuOWwtMC45LDAuOWwxLjQsMS40Yy0yLTEuNS00LjMtMi43LTYuOS0zLjJWOS40QzMxLDkuOCwzMy4yLDEwLjcsMzUuMSwxMS45eiBNMjMuNCw2LjcNCgljMC41LDAuMSwxLDAuMSwxLjYsMC4xczEuMSwwLDEuNi0wLjFWN2MtMC41LDAtMS4xLTAuMS0xLjYtMC4xYy0wLjUsMC0xLjEsMC0xLjYsMC4xVjYuN3ogTTIxLjMsOS40djEuN2MtMi41LDAuNi00LjksMS43LTYuOSwzLjINCglsMS40LTEuNGwtMC45LTAuOUMxNi44LDEwLjcsMTksOS44LDIxLjMsOS40eiBNMTEuNSwxNy4yYy0yLDIuNS0zLjMsNS43LTMuNyw5LjFINy4xYy0wLjMsMC0wLjcsMC4xLTAuOSwwLjMNCgljMC4zLTQsMS44LTcuNyw0LjItMTAuNkwxMS41LDE3LjJ6IE02LjEsMjkuMmMwLjMsMC4yLDAuNiwwLjMsMC45LDAuM2gwLjhjMC43LDguMyw3LjMsMTQuOSwxNS42LDE1LjZ2MC43YzAsMC40LDAuMSwwLjcsMC4zLDAuOQ0KCUMxNC4zLDQ2LjIsNi44LDM4LjYsNi4xLDI5LjJ6IE0yNi4zLDQ2LjhjMC4yLTAuMywwLjMtMC42LDAuMy0wLjl2LTAuN2M4LjMtMC44LDE0LjgtNy4zLDE1LjYtMTUuNmgwLjhjMC4zLDAsMC43LTAuMSwwLjktMC4zDQoJQzQzLjIsMzguNiwzNS43LDQ2LjIsMjYuMyw0Ni44eiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./static/solplay-entrega.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMzAuOCwyMyAzMS43LDIyLjggMzEuNywyMC42IDMyLjQsMjAuNCAzMS4yLDE4LjkgMzAuMSwyMS4xIDMwLjgsMjAuOSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMzIuOCwyMC4zIDMzLjUsMjAuMSAzMy41LDIyLjIgMzQuNCwyMS45IDM0LjQsMTkuOCAzNSwxOS42IDMzLjksMTguMSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMzAuMiwyNC43IDM1LDIzLjIgMzUsMjIuMyAzMC4yLDIzLjcgCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzYuNSw0Mi4yYzQuMi00LjQsMTAuOS0xMS42LDExLTEzLjJjMC4xLTEuNy0xLjYtMTAtMi4xLTExLjdjLTAuNC0xLjUtMS44LTIuMi0yLjktMg0KCQljLTEsMC4yLTEuOCwxLjEtMS42LDIuN2MwLjMsMiwwLjgsNy44LDEsOS4zYy0xLjIsMS4zLTQsNC4yLTUsNC43Yy0wLjQsMC4yLTAuOSwwLjItMS4yLDAuMWwzLjItMy4xYzEtMSwxLjEtMi4zLDAuMy0zLjMNCgkJYy0wLjQtMC41LTEtMC45LTEuNi0xLjFjMCwwLDAtMC4xLDAtMC4xdi0xM2wzLjEtMy45YzAuMi0wLjIsMC4yLTAuNSwwLjItMC43YzAtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjItMC4zLDAuMi0wLjYsMC0wLjkNCgkJYy0wLjItMC4zLTAuNS0wLjQtMC45LTAuM2wtMS4xLDAuM2wtOS40LTMuNmMtMC4zLTAuMS0wLjcsMC0xLDAuM2wtMi43LDMuNGwtMi43LTMuNGMtMC4yLTAuMy0wLjYtMC40LTEtMC4zbC05LjQsMy42bC0xLjEtMC4zDQoJCWMtMC4zLTAuMS0wLjcsMC4xLTAuOSwwLjNjLTAuMiwwLjMtMC4yLDAuNiwwLDAuOWMwLDAuMS0wLjEsMC4xLTAuMSwwLjJjLTAuMSwwLjMsMCwwLjUsMC4yLDAuN2wzLjIsNHYxM2MwLDAuMSwwLDAuMSwwLDAuMg0KCQljLTEtMC40LTIuMiwwLjEtMi45LDFjLTAuOCwxLjEtMC43LDIuNCwwLjMsMy4zbDMuMiwzLjFjLTAuNCwwLjEtMC44LDAuMS0xLjItMC4xYy0xLTAuNS0zLjUtMy01LTQuN0M4LjIsMjUuOCw4LjcsMjAsOSwxOA0KCQljMC4yLTEuNi0wLjYtMi41LTEuNi0yLjdjLTEuMS0wLjItMi41LDAuNS0yLjgsMkM0LjEsMTksMi40LDI3LjMsMi41LDI5YzAuMSwxLjYsNi44LDguOCwxMSwxMy4ybC0xLjMsNC43Yy0wLjEsMC4zLDAsMC41LDAuMSwwLjcNCgkJYzAuMiwwLjIsMC40LDAuMywwLjcsMC4zaDEwLjhjMC4yLDAsMC41LTAuMSwwLjYtMC4zYzAuMi0wLjIsMC4yLTAuNCwwLjItMC42bC0wLjQtNi42YzAsMCwwLTAuMSwwLTAuMWwtMS44LTkNCgkJYzAtMC4yLTAuMi0wLjQtMC4zLTAuNWMtMC4yLTAuMi00LjgtMy43LTcuMS01LjNsMTAuMSwzLjRjMC4xLDAuMSwwLjMsMC4xLDAuNSwwLjFjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDBjMC4yLDAsMC4zLTAuMSwwLjUtMC4xDQoJCWw3LjctMi42Yy0yLjQsMS44LTUuOCw0LjMtNiw0LjVjLTAuMiwwLjEtMC4zLDAuMy0wLjMsMC41bC0xLjgsOWMwLDAsMCwwLjEsMCwwLjFsLTAuNCw2LjZjMCwwLjIsMC4xLDAuNSwwLjIsMC42czAuNCwwLjMsMC42LDAuMw0KCQlIMzdjMC4zLDAsMC41LTAuMSwwLjctMC4zYzAuMi0wLjIsMC4yLTAuNSwwLjEtMC43TDM2LjUsNDIuMnogTTIxLjcsOS41bDIuMSwzLjdsLTktM2MwLDAsMCwwLDAsMGwtMS43LTIuNkwyMS43LDkuNXogTTI5LjYsOS41DQoJCWw4LjYtMmwtMS44LDIuNmwtOSwzTDI5LjYsOS41eiBNMjYuNSwxNS4zbDkuMy0yLjlWMjRsLTkuMywzLjJWMTUuM3ogTTI5LjMsMy45bDYuNSwyLjVsLTYuNywxLjVsLTIuMi0xLjFMMjkuMywzLjl6IE0yNy44LDkuMQ0KCQlsLTEuNCwyLjRsMC0zTDI3LjgsOS4xeiBNMjQuOCwxMS41bC0xLjQtMi40bDEuNC0wLjdMMjQuOCwxMS41eiBNMjEuOSwzLjlsMi40LDIuOWwtMi4yLDEuMWwtNi43LTEuNUwyMS45LDMuOXogTTIyLjYsNDAuNw0KCQlsMC4zLDUuNmgtOC44bDEuMi00LjFjMC4xLTAuMywwLTAuNi0wLjItMC44QzEwLDM2LjEsNC41LDI5LjksNC4yLDI4LjljLTAuMS0xLjQsMS41LTkuMSwyLTExLjJjMC4yLTAuNiwwLjYtMC44LDAuOS0wLjgNCgkJYzAuNCwwLjEsMC4zLDAuNiwwLjMsMC44Yy0wLjMsMi4zLTEsOS41LTEsOS44YzAsMC4yLDAuMSwwLjUsMC4yLDAuNmMwLjQsMC41LDQuMSw0LjUsNS43LDUuNGMyLDEuMSwzLjktMC41LDQtMC41DQoJCWMwLjItMC4yLDAuMy0wLjQsMC4zLTAuNmMwLTAuMi0wLjEtMC41LTAuMy0wLjZsLTQuMS0zLjljLTAuMi0wLjItMC41LTAuNi0wLjEtMS4xYzAuMy0wLjQsMC44LTAuNSwwLjktMC41DQoJCWMwLjksMC41LDUuNyw0LjIsNy43LDUuN0wyMi42LDQwLjd6IE0xNS40LDEyLjVsOS40LDIuOXYxMS44TDE1LjQsMjRWMTIuNXogTTI3LDQ2LjNsMC4zLTUuNmwxLjgtOC42YzIuMS0xLjYsNi45LTUuMiw3LjctNS43DQoJCWMwLjEtMC4xLDAuNiwwLjEsMC45LDAuNWMwLjQsMC41LDAuMSwwLjktMC4xLDEuMWwtNCwzLjljLTAuMiwwLjItMC4zLDAuNC0wLjMsMC42czAuMSwwLjUsMC4zLDAuNmMwLjEsMC4xLDIsMS42LDQsMC41DQoJCWMxLjYtMC45LDUuMy00LjksNS43LTUuNGMwLjItMC4yLDAuMi0wLjQsMC4yLTAuNmMwLTAuMy0wLjctNy41LTEtOS44YzAtMC4yLTAuMS0wLjgsMC4zLTAuOGMwLjMtMC4xLDAuNywwLjEsMC45LDAuOA0KCQljMC41LDIuMSwyLjEsOS44LDIsMTEuMWMtMC4zLDEuMS01LjgsNy4yLTEwLjksMTIuNWMtMC4yLDAuMi0wLjMsMC41LTAuMiwwLjhsMS4yLDQuMUgyN3oiLz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./static/solplay-header-logo.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay-header-logo-c0a38cc1cefd5249aeba93df8ce5a40d.svg";

/***/ }),

/***/ "./static/solplay-seguimiento.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik00OSwzMC4zdi03LjFsLTMuOS0xLjF2LTFjMC0xLTAuOC0xLjgtMS44LTEuOHMtMS44LDAuOC0xLjgsMS44djBsLTEyLjUtMy40VjkuNWMwLTIuNy0xLjgtNS00LjEtNQ0KCWMtMi4yLDAtNC4xLDIuMi00LjEsNXY4LjJMOC40LDIxLjF2MGMwLTEtMC44LTEuOC0xLjgtMS44Yy0xLDAtMS44LDAuOC0xLjgsMS44djFsLTMuOSwxdjcuMWwxOS45LTIuNnY4LjJsLTUuNCwzLjR2Ni4zbDkuNC0yLjYNCglsOS40LDIuNnYtNi4zbC01LjQtMy40di04LjJMNDksMzAuM3ogTTQ3LjQsMjQuNHY0bC0yLjUtMC4zYzAuMi0wLjMsMC4zLTAuNiwwLjMtMXYtMy4zTDQ3LjQsMjQuNHogTTI5LjEsMTkuNGwxMi41LDMuNHY0LjMNCgljMCwwLjIsMCwwLjQsMC4xLDAuNkwyOS4xLDI2VjE5LjR6IE0yLjYsMjQuNGwyLjItMC42djMuM2MwLDAuNCwwLjEsMC43LDAuMywxbC0yLjUsMC4zVjI0LjR6IE04LjMsMjcuNmMwLjEtMC4yLDAuMS0wLjQsMC4xLTAuNg0KCXYtNC4zbDEyLjUtMy40VjI2TDguMywyNy42eiBNMzIuOCw0MC4xdjMuMkwyNSw0MS4xbC03LjgsMi4ydi0zLjJsNS40LTMuNHYtOS4zbDAsMFYxNy4zbDAsMFY5LjVjMC0xLjgsMS4xLTMuMywyLjQtMy4zDQoJYzEuMywwLDIuNCwxLjUsMi40LDMuM3Y3Ljh2MTAuMXY5LjNMMzIuOCw0MC4xeiIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./static/solplay-white-logo.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDE1MC41IDQxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNTAuNSA0MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik01My43LDEyLjNjMC45LDAsMS43LDAuMSwyLjQsMC40YzAuNywwLjIsMS4zLDAuNCwxLjksMC40YzAuNiwwLDAuOS0wLjIsMC45LTAuNmgwLjNsMC4zLDQuNWgtMC4zDQoJCWMwLTAuMy0wLjEtMC43LTAuMi0xLjFjLTAuMi0wLjQtMC40LTAuOS0wLjgtMS40Yy0wLjQtMC41LTAuOS0wLjktMS43LTEuM3MtMS43LTAuNS0yLjgtMC41Yy0yLDAtMywwLjctMywyLjENCgkJYzAsMS4zLDAuNiwyLjQsMS43LDMuNGw1LjYsNC43YzIsMS40LDIuOSwzLDIuOSw0LjhjMCwxLjUtMC45LDIuOC0yLjYsMy43Yy0xLjUsMC44LTMuMywxLjItNS42LDEuMmMtMS41LDAtMi43LTAuMy0zLjctMQ0KCQljLTAuMy0wLjItMC42LTAuMy0wLjgtMC4zYy0wLjQsMC0wLjcsMC4yLTAuOSwwLjdjLTAuMSwwLjEtMC4xLDAuMy0wLjEsMC41aC0wLjNsMC4xLTQuNWgwLjNjMCwwLjIsMCwwLjUsMC4xLDAuOA0KCQljMC4yLDAuOCwwLjgsMS42LDEuNSwyLjNjMC40LDAuNCwwLjksMC43LDEuNiwwLjljMC43LDAuMiwxLjQsMC40LDIuMiwwLjRjMS4xLDAsMS45LTAuMywyLjYtMC44YzAuNy0wLjYsMS0xLjIsMS0yDQoJCWMwLTEuMy0wLjQtMi4yLTEuMi0yLjlsLTUuNi00LjdjLTEuNy0xLjQtMi42LTMuMS0yLjYtNC44YzAtMS40LDAuNy0yLjUsMi4xLTMuNEM1MC4zLDEyLjcsNTEuOSwxMi4zLDUzLjcsMTIuM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTY5LjcsMzIuNGMtMi42LDAtNC42LTAuNy02LTJjLTEuNC0xLjMtMi4xLTMuMi0yLjEtNS43YzAtMi40LDAuNy00LjMsMi4xLTUuN2MxLjQtMS4zLDMuNC0yLDYtMg0KCQljMi42LDAsNC42LDAuNyw2LDJjMS40LDEuNCwyLjEsMy4zLDIuMSw1LjdjMCwyLjUtMC43LDQuNC0yLjEsNS43Qzc0LjMsMzEuNyw3Mi4zLDMyLjQsNjkuNywzMi40eiBNNjkuNywzMi4xDQoJCWMxLjUsMCwyLjQtMC41LDIuOC0xLjVjMC40LTEsMC42LTMsMC42LTUuOWMwLTIuOS0wLjItNC44LTAuNi01LjljLTAuNC0xLTEuNC0xLjUtMi44LTEuNWMtMS43LDAtMi43LDAuNi0zLjEsMS45DQoJCWMtMC4zLDEtMC40LDIuOS0wLjQsNS41czAuMSw0LjUsMC40LDUuNUM2NywzMS40LDY4LDMyLjEsNjkuNywzMi4xeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNODQuOCwxMi41djE3LjRjMCwxLjQsMC44LDIsMi4zLDJ2MC4zaC05LjN2LTAuM2MxLjUsMCwyLjMtMC43LDIuMy0yVjEyLjVjMC0xLjQtMC44LTItMi4zLTJ2LTAuMw0KCQloNS44Qzg0LjQsMTAuMSw4NC44LDEwLjksODQuOCwxMi41eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNOTQuMSwzNS43YzAsMS40LDAuOCwyLDIuMywyVjM4aC05LjN2LTAuM2MxLjYsMCwyLjMtMC43LDIuMy0yVjE5LjRjMC0xLjQtMC44LTItMi4zLTJ2LTAuM0g5Mw0KCQljMC4yLDAsMC40LDAuMiwwLjYsMC41QzkzLjgsMTcuOSw5NCwxOCw5NCwxOGMxLTAuNywyLjEtMSwzLTFjMi4zLDAsNC4xLDAuNyw1LjUsMmMxLjQsMS40LDIuMSwzLjMsMi4xLDUuN3MtMC43LDQuMy0yLDUuNg0KCQljLTEuNCwxLjQtMy4yLDItNS41LDJjLTEsMC0xLjktMC4zLTIuOS0xVjM1Ljd6IE05OS45LDI0LjdjMC0zLjMtMC4xLTUuMi0wLjMtNS44Yy0wLjUtMS4xLTEuMy0xLjctMi42LTEuN2MtMSwwLTIsMC40LTMsMS4xDQoJCWMwLDAuMywwLjEsMC43LDAuMSwxLjFWMzFjMC45LDAuNywxLjksMSwyLjksMWMxLjMsMCwyLjEtMC42LDIuNi0xLjdDOTkuOCwyOS44LDk5LjksMjcuOSw5OS45LDI0Ljd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMTEuNiwxMi41djE3LjRjMCwxLjQsMC44LDIsMi4zLDJ2MC4zaC05LjN2LTAuM2MxLjUsMCwyLjMtMC43LDIuMy0yVjEyLjVjMC0xLjQtMC44LTItMi4zLTJ2LTAuMw0KCQloNS44QzExMS4yLDEwLjEsMTExLjYsMTAuOSwxMTEuNiwxMi41eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTMyLjgsMzIuMkgxMjdjLTAuMiwwLTAuNC0wLjItMC42LTAuNWMtMC4yLTAuMy0wLjQtMC41LTAuNC0wLjVjLTEsMC43LTIuMiwxLjEtMy42LDEuMQ0KCQljLTIuNSwwLTQuNC0wLjYtNS45LTEuN2MtMS41LTEuMS0yLjItMi4zLTIuMi0zLjdjMC0xLjQsMC43LTIuNiwyLjItMy42YzEuNS0xLjEsMy40LTEuNiw1LjktMS42YzEuMiwwLDIuNCwwLjIsMy41LDAuN3YtMC43DQoJCWMwLTMtMS4zLTQuNS0zLjgtNC41Yy0xLjYsMC0zLjEsMC40LTQuNiwxLjJsLTAuMi0wLjNjMS41LTAuOSwzLjEtMS4zLDQuOC0xLjNjNS42LDAsOC40LDIuNiw4LjQsNy43djUuMmMwLDEuNCwwLjgsMiwyLjMsMlYzMi4yeg0KCQkgTTEyNS44LDIyLjhjLTEuMS0wLjUtMi4zLTAuOC0zLjUtMC44Yy0xLjQsMC0yLjQsMC41LTMsMS42Yy0wLjMsMC41LTAuNSwxLjYtMC41LDMuM2MwLDIuMSwwLjMsMy40LDAuOCw0DQoJCWMwLjYsMC43LDEuNSwxLjEsMi43LDEuMWMxLjUsMCwyLjctMC40LDMuNS0xLjFjMC0xLjItMC4xLTIuNC0wLjEtMy41VjIyLjh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMzguNiwxOS4zbDMuNCw4LjNsMy4zLTguM2MwLjEtMC4zLDAuMi0wLjYsMC4yLTAuOWMwLTAuNi0wLjYtMC45LTEuNy0wLjl2LTAuM2gzLjh2MC4zDQoJCWMtMC44LDAtMS41LDAuNy0yLDJsLTMuNSw4LjZsLTEuNiw0LjFsLTEuNyw0LjFjLTAuNywxLjQtMS41LDIuMS0yLjUsMi4xYy0wLjYsMC0xLjItMC4yLTEuNi0wLjdzLTAuNy0xLTAuNy0xLjYNCgkJYzAtMC42LDAuMi0xLjIsMC43LTEuNmMwLjQtMC41LDEtMC43LDEuNi0wLjdjMC42LDAsMS4xLDAuMiwxLjYsMC42YzAuNCwwLjMsMC43LDAuNSwwLjksMC41YzAuMSwwLDAuMi0wLjEsMC4zLTAuMmwwLjktMi40aC0wLjYNCgkJYy0wLjQsMC0wLjctMC4xLTAuOC0wLjNjMCwwLTAuMy0wLjYtMC43LTEuOGwtNC4zLTEwLjdjLTAuNC0wLjktMC43LTEuNS0xLTEuN2MtMC4zLTAuMi0wLjctMC4zLTEuNC0wLjN2LTAuM2g1LjUNCgkJQzEzNy41LDE3LjEsMTM4LjEsMTcuOCwxMzguNiwxOS4zeiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNi4zLDM3LjZjMCwwLDExLjctMyw5LjUtMTAuMWMtMC44LTIuNi0yLjYtNC00LjctNWMtMi41LTEuMi05LjktMi44LTEyLjYtNS44DQoJCWMtMC41LTAuNi0xLjktMS44LTEuMi0zLjljMS4yLTMuNSw3LjQtNy4xLDEzLjQtOC4yYzAsMC01LjgsMy4yLTAuNiw2LjVjNS4yLDMuMiwxNi4xLDkuNCwxMS44LDE3LjkNCgkJQzI3LjcsMzcuMywxNi4zLDM3LjYsMTYuMywzNy42eiIvPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMi4yNzE5IiB5MT0iMjYuODM4NiIgeDI9IjIyLjI5NTQiIHkyPSIyNi44Mzg2Ij4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZFQ0IwOSIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRUQ2RjI2Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIGQ9Ik0yMi4zLDMwLjFjMC4yLDEuNS0wLjUsMy4xLTEuNSw0LjJjLTEuMSwxLjEtMi42LDEuNy00LjEsMmMtNC41LDAuOS05LjQtMC45LTEyLjEtNC42DQoJCUMxLjksMjgsMC43LDIwLjksNiwxNy4yYy0xLjgsMi4zLTIuOSw1LjQtMS41LDguNGMxLDIuMSwzLjIsMy43LDUuNSwzLjdjMy4xLTAuMSw1LjctMy4xLDguNy0yLjdDMjAuNSwyNi44LDIyLDI4LjMsMjIuMywzMC4xeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0MTk2MzQ7IiBkPSJNMjEsOS44Yy0wLjctMC45LTAuOS0yLjMtMC4zLTMuM2MwLjEtMC4xLDAuMS0wLjIsMC4yLTAuM2MxLjMtMS42LDUuOC0xLjIsNS44LTUuOQ0KCQljMCwwLDIuNSw3LjctMi40LDkuOUMyMi43LDExLjEsMjEuNywxMC42LDIxLDkuOHoiLz4NCgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIuODU5MSIgeTE9IjI4LjU1MjQiIHgyPSIxMy4xODkzIiB5Mj0iMjguNTUyNCI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkQ0MDEiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDQwMTtzdG9wLW9wYWNpdHk6MCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8yXyk7IiBkPSJNMy4xLDIxLjljMCwwLTAuOCw4LjgsOCwxMC44YzQuNywxLjEtMC4xLDIuNi0wLjEsMi42UzEuMiwzMi43LDMuMSwyMS45eiIvPg0KCQ0KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEzNzguMTE2IiB5MT0iLTc3OS4zNjcxIiB4Mj0iMTM3NC45OTk0IiB5Mj0iLTc4Mi41NTk5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0wLjMzNzMgMS4zNzU2IDEuMDgyMiAwLjc1NDQgMTMzNC4zMzExIC0xMjk4LjMxMikiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjI3MjQiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MTk2MzQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8zXyk7IiBkPSJNMjIuNiw3LjZjLTAuNC0wLjUtMC40LTEuMSwwLTEuNmMwLDAsMC4xLTAuMSwwLjEtMC4xYzAuOS0wLjgsMy42LTAuNywzLjktMi45DQoJCWMwLDAsMSwzLjgtMi4xLDQuOUMyMy41LDguMywyMi45LDgsMjIuNiw3LjZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./static/solplay_about.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_about-3be397e44b737d00cdd7e4954b434438.jpg";

/***/ }),

/***/ "./static/solplay_certification.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_certification-a7e679dcec34bee8e58d3d7f9fd5e981.jpg";

/***/ }),

/***/ "./static/solplay_leaf.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_leaf-7db6c739e61c686dfeedf2405ccda460.jpg";

/***/ }),

/***/ "./static/solplay_servicios.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_servicios-b626c23d7d6463a7ab87017af2d29468.jpg";

/***/ }),

/***/ "./static/solplay_ubicacion.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_ubicacion-152c0eeb677f79b4134c27aa3f3bcc81.jpg";

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "imagesloaded":
/***/ (function(module, exports) {

module.exports = require("imagesloaded");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "slugify":
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map