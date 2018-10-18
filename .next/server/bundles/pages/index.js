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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_imagesloaded__ = __webpack_require__("imagesloaded");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_imagesloaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_imagesloaded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_hero__ = __webpack_require__("./src/components/hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_about__ = __webpack_require__("./src/components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_services__ = __webpack_require__("./src/components/services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_products__ = __webpack_require__("./src/components/products.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_organic__ = __webpack_require__("./src/components/organic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_certificate__ = __webpack_require__("./src/components/certificate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_components_location__ = __webpack_require__("./src/components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_components_contact__ = __webpack_require__("./src/components/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_data_data__ = __webpack_require__("./src/data/data.js");
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\pages\\index.js";


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
        modal: false,
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
        var openModal = !_this.state.modal;
        e.preventDefault();

        _this.setState({
          modal: openModal
        });
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
      var menu = __WEBPACK_IMPORTED_MODULE_11__src_data_data__["a" /* default */].menu,
          _data$main = __WEBPACK_IMPORTED_MODULE_11__src_data_data__["a" /* default */].main,
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
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_services__["a" /* default */], {
        content: services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_products__["a" /* default */], {
        content: products,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_certificate__["a" /* default */], {
        open: this.state.modal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_about_jpg__ = __webpack_require__("./static/solplay_about.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_about_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_about_jpg__);
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\about.js";



var About = function About(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      content = _ref$content.content,
      countries = _ref$content.countries;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "nosotros",
    className: "about scroll",
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
    className: "about-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "about-bg-img",
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_about_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-content-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "countries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
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
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\certificate.js";





var Certificate = function Certificate(_ref) {
  var open = _ref.open,
      closeModal = _ref.closeModal;
  var visible = open ? ' visible' : '';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "certificate".concat(visible),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "close-modal",
    onClick: function onClick(e) {
      return closeModal(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "\u02DF"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
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
  }, "Certificacion"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
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
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_3__static_download_pdf_icon_svg___default.a,
    alt: "Descargar PDF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__social__ = __webpack_require__("./src/components/social.js");
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\contact.js";



var Contact = function Contact() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "contacto",
    className: "contact scroll",
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
  }, "Contacto"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
    className: "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "field",
    placeholder: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Nombre")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    className: "field",
    placeholder: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "E-mail")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
    name: "msg",
    id: "msg",
    className: "field msg",
    placeholder: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Mensaje")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "button",
    className: "button",
    value: "Enviar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__social__["a" /* default */], {
    className: "contact-social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "./src/components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg__ = __webpack_require__("./static/solplay-white-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg__);
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\footer.js";



var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_white_logo_svg___default.a,
    alt: "",
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "\xA9 2018")));
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

      var menu = this.props.menu;
      var headerClass = this.state.headerWhite ? ' white' : '';
      var moblieClass = this.state.menuOpen ? 'mobile-menu open' : 'mobile-menu';
      var navClass = this.state.menuOpen ? 'main-nav nav-open' : 'main-nav';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "main-header".concat(headerClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__social__["a" /* default */], {
        className: "header-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg___default.a,
        alt: "Solplay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: navClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, menu.map(function (item, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "nav-link",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
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
            lineNumber: 58
          }
        }, item));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: moblieClass,
        onClick: this.handleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "menu-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider__ = __webpack_require__("./src/components/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_banner_solplay_banner_01_jpg__ = __webpack_require__("./static/banner/solplay_banner-01.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_banner_solplay_banner_01_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_banner_solplay_banner_01_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_02_jpg__ = __webpack_require__("./static/banner/solplay_banner-02.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_02_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_02_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_03_jpg__ = __webpack_require__("./static/banner/solplay_banner-03.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_03_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_03_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_04_jpg__ = __webpack_require__("./static/banner/solplay_banner-04.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_04_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_04_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_05_jpg__ = __webpack_require__("./static/banner/solplay_banner-05.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_05_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_05_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_06_jpg__ = __webpack_require__("./static/banner/solplay_banner-06.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_06_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_06_jpg__);
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\hero.js";









var Hero = function Hero(_ref) {
  var content = _ref.content;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "inicio",
    className: "hero scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "slider-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__slider__["a" /* default */], {
    pagination: true,
    paginationStyle: {
      background: '#FFF',
      height: '15px',
      width: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_2__static_banner_solplay_banner_01_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_3__static_banner_solplay_banner_02_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_4__static_banner_solplay_banner_03_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_5__static_banner_solplay_banner_04_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_6__static_banner_solplay_banner_05_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_7__static_banner_solplay_banner_06_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "hero-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "hero-text",
    dangerouslySetInnerHTML: {
      __html: content.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "descubrinos")));
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
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\layout.js";







var Layout = function Layout(_ref) {
  var menu = _ref.menu,
      children = _ref.children,
      menuClick = _ref.menuClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Solplay"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "developer",
    content: "penHolder Designerd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    type: "theme-color",
    content: "#00A7E1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: "../../static/bookmark-image.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "referrer",
    content: "origin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "profile",
    href: "http://gmpg.org/xfn/11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../../static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "../../static/favicon.png",
    sizes: "32x32 192x192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* default */], {
    menu: menu,
    menuClick: menuClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\location.js";



var LocationSection = function LocationSection(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      _ref$content$content = _ref$content.content,
      intro = _ref$content$content.intro,
      text = _ref$content$content.text;
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
    href: "#",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Ver en mapa")));
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
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\organic.js";



var Organic = function Organic(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      content = _ref$content.content,
      openModal = _ref.openModal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "organic",
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
    className: "organic-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "organic-content-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "organic-image",
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_leaf_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "organic-content-txt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "certificaciones",
    className: "button",
    onClick: function onClick(e) {
      return openModal(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Certificaciones")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Organic);

/***/ }),

/***/ "./src/components/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\products.js";


var Products = function Products(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      products = _ref$content.products;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "productos",
    className: "products scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "products-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, products.map(function (product, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: key,
      className: "product",
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
    }, product.name));
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
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\services.js";



var Services = function Services(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      content = _ref$content.content,
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
      lineNumber: 15
    }
  }, icons.map(function (icon, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: key,
      className: "services-icon",
      "data-lighten": "".concat(key * 5),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      src: icon.icon,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
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
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\slider.js";


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
    webkitAppearance: 'none',
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
              lineNumber: 106
            }
          });
        });
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
          className: "pagination",
          style: _this.styles.pagination,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
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
            lineNumber: 139
          }
        }, slide);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider",
        style: this.styles.slider,
        ref: this.slider,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
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
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\social.js";


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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Social);

/***/ }),

/***/ "./src/data/data.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajos_jpg__ = __webpack_require__("./static/productos/ajos.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_productos_ajos_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_productos_ajos_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ciruelas_secas_jpg__ = __webpack_require__("./static/productos/ciruelas-secas.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_productos_ciruelas_secas_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_productos_ciruelas_secas_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_nueces_chandler_jpg__ = __webpack_require__("./static/productos/nueces-chandler-.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_productos_nueces_chandler_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_productos_nueces_chandler_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_zapallo_butternut_jpg__ = __webpack_require__("./static/productos/zapallo-butternut.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_productos_zapallo_butternut_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_productos_zapallo_butternut_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_muscat_jpg__ = __webpack_require__("./static/productos/zapallo-muscat.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_muscat_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_muscat_jpg__);









/* harmony default export */ __webpack_exports__["a"] = ({
  menu: ['Inicio', 'Nosotros', 'Productos', 'Contacto'],
  main: {
    home: {
      name: 'Inicio',
      content: '<h2>Lo <strong>mejor</strong> de nosotros<br/> para <strong>todo el mundo</strong></h2><p>Motivados por la pasión de lo que nos gusta hacer, que es llegar con nuestros productos a nuestros clientes en el exterior.</p>'
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
        name: 'Ajos',
        image: __WEBPACK_IMPORTED_MODULE_4__static_productos_ajos_jpg___default.a
      }, {
        name: 'Ciruelas',
        image: __WEBPACK_IMPORTED_MODULE_5__static_productos_ciruelas_secas_jpg___default.a
      }, {
        name: 'Nueces',
        image: __WEBPACK_IMPORTED_MODULE_6__static_productos_nueces_chandler_jpg___default.a
      }, {
        name: 'Zapallo',
        image: __WEBPACK_IMPORTED_MODULE_7__static_productos_zapallo_butternut_jpg___default.a
      }, {
        name: 'Zapallo',
        image: __WEBPACK_IMPORTED_MODULE_8__static_productos_zapallo_muscat_jpg___default.a
      }]
    },
    organic: {
      title: 'Orgánicos',
      content: '<h2>Productos Orgánicos</h2><p>Trabajamos desde hace 1 año con productos orgánicos como ajo y ciruelas deshidratadas, pero pensamos seguir aumentando volúmenes y productos de esta naturaleza, apostando cada vez más al consumo de alimentos saludables.</p>'
    },
    location: {
      title: 'Ubicación',
      content: {
        intro: 'Estamos situados en la provincia de mendoza, república argentina, poseemos planta de empaque en la localidad de guaymallén y san rafael que son departamentos de dicha provincia.',
        text: '<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong> cerca de nuestra <strong>Patagonia Argentina,</strong> esta zona es óptima para la producción de productos orgánicos y convencionales debidos a su clima y a la sanidad de su agua y suelos.<br/><strong>Guaymallén</strong> se encuentra al norte de la provincia con producciones de primicia de ajos y frutas.'
      }
    }
  }
});

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

/***/ "./static/productos/ajos.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ajos-df0f56067844cb2e7a7aa0f3ac485302.jpg";

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

module.exports = "/_next/static/images/solplay-header-logo-e420b72f193261332e67a00eef87ced8.svg";

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

module.exports = "/_next/static/images/solplay_about-6089f28e7784fdfd0988d315927384bd.jpg";

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

module.exports = "/_next/static/images/solplay_ubicacion-f89c8cd58109d536c06196a301ca8450.jpg";

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "imagesloaded":
/***/ (function(module, exports) {

module.exports = require("imagesloaded");

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