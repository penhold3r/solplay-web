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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_hero__ = __webpack_require__("./src/components/hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_about__ = __webpack_require__("./src/components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_products__ = __webpack_require__("./src/components/products.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_organic__ = __webpack_require__("./src/components/organic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_certificate__ = __webpack_require__("./src/components/certificate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_location__ = __webpack_require__("./src/components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_contact__ = __webpack_require__("./src/components/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_data_data__ = __webpack_require__("./src/data/data.js");
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
    }), _temp));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sections = Array.from(document.querySelectorAll('section.scroll'));
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
      var menu = __WEBPACK_IMPORTED_MODULE_9__src_data_data__["a" /* default */].menu,
          _data$main = __WEBPACK_IMPORTED_MODULE_9__src_data_data__["a" /* default */].main,
          home = _data$main.home,
          about = _data$main.about,
          products = _data$main.products,
          organic = _data$main.organic,
          location = _data$main.location;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_components_layout__["a" /* default */], {
        menu: menu,
        sections: this.state.sections,
        menuClick: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_products__["a" /* default */], {
        content: products,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_certificate__["a" /* default */], {
        open: this.state.modal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/about.js";



var About = function About(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      content = _ref$content.content,
      countries = _ref$content.countries,
      icons = _ref$content.icons;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "nosotros",
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
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_about_jpg___default.a,
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
  }, "".concat(countries.intro, " ").concat(countries.list))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, icons.map(function (icon, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: key,
      className: "about-icon",
      "data-lighten": "".concat(key * 5),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      src: icon.icon,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, icon.text));
  })));
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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/certificate.js";





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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/contact.js";



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
  }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
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
      lineNumber: 10
    }
  }, "Nombre")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    className: "field",
    placeholder: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "E-mail")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "form-field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
    name: "msg",
    id: "msg",
    className: "field msg",
    placeholder: " ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    htmlFor: "msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Mensaje")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "button",
    className: "button",
    value: "Enviar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__social__["a" /* default */], {
    className: "contact-social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/footer.js";



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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/header.js";


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
        activeLink: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dom = document.scrollingElement;
        var headerWhite = Boolean(dom.scrollTop > 250); //this.setState({ headerWhite });
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
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var menu = this.props.menu;
      var headerClass = this.state.headerWhite ? ' white' : '';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "main-header".concat(headerClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__social__["a" /* default */], {
        className: "header-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_4__static_solplay_header_logo_svg___default.a,
        alt: "Solplay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, menu.map(function (item, key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "nav-link",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
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
            lineNumber: 48
          }
        }, item));
      })))));
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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/hero.js";



var Hero = function Hero(_ref) {
  var content = _ref.content;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "inicio",
    className: "hero scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__slider__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "hero-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "hero-text",
    dangerouslySetInnerHTML: {
      __html: content.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/layout.js";







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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/location.js";


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
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "location-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "location-intro",
    dangerouslySetInnerHTML: {
      __html: intro
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "location-txt",
    dangerouslySetInnerHTML: {
      __html: text
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/organic.js";



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
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/products.js";


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

/***/ "./src/components/slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_banner_001_jpg__ = __webpack_require__("./static/solplay_banner-001.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_banner_001_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_banner_001_jpg__);
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/slider.js";



var Slider = function Slider() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_banner_001_jpg___default.a,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),

/***/ "./src/components/social.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/social.js";


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_solplay_productos_001_jpg__ = __webpack_require__("./static/solplay_productos-001.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_solplay_productos_001_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_solplay_productos_001_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_solplay_productos_002_jpg__ = __webpack_require__("./static/solplay_productos-002.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_solplay_productos_002_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_solplay_productos_002_jpg__);






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
      },
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
        image: __WEBPACK_IMPORTED_MODULE_4__static_solplay_productos_001_jpg___default.a
      }, {
        name: 'Ciruelas',
        image: __WEBPACK_IMPORTED_MODULE_5__static_solplay_productos_002_jpg___default.a
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

/***/ "./static/download-pdf-icon.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzEsMi40SDEwLjljLTIuMSwwLTMuOCwxLjctMy44LDMuOFYxOXYyLjR2MjIuM2MwLDIuMSwxLjcsMy44LDMuOCwzLjhoMjguMmMyLjEsMCwzLjgtMS43LDMuOC0zLjgKCQlWMjEuNFYxOXYtNC42TDMxLDIuNHogTTQxLjUsNDMuOGMwLDEuMy0xLjEsMi40LTIuNCwyLjRIMTAuOWMtMS4zLDAtMi40LTEuMS0yLjQtMi40VjIxLjRoMzNWNDMuOHogTTguNSwxOVY2LjIKCQljMC0xLjMsMS4xLTIuNCwyLjQtMi40aDE5LjVsMC4zLDAuM3Y3LjVjMCwxLjcsMS40LDMuMSwzLjEsMy4xaDcuM2wwLjMsMC4zdjRIOC41eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNS42LDEwYy0wLjItMC4xLTAuNC0wLjItMC43LTAuMmMtMC4zLDAtMC42LTAuMS0xLTAuMWgtMS40djUuMWgwLjl2LTEuN2gwLjljMC4yLDAsMC40LDAsMC42LTAuMQoJCXMwLjQtMC4yLDAuNi0wLjNjMC4yLTAuMSwwLjMtMC4zLDAuNC0wLjZjMC4xLTAuMiwwLjItMC41LDAuMi0wLjljMC0wLjMsMC0wLjYtMC4xLTAuOFMxNS44LDEwLjEsMTUuNiwxMHogTTE1LDEyCgkJYy0wLjEsMC4xLTAuNCwwLjItMC43LDAuMmgtMC44di0xLjhoMC44YzAuMiwwLDAuMywwLDAuNSwwYzAuMSwwLDAuMiwwLjEsMC4zLDAuMWMwLjEsMC4xLDAuMSwwLjIsMC4yLDAuM2MwLDAuMSwwLDAuMiwwLDAuNAoJCUMxNS4yLDExLjcsMTUuMSwxMS45LDE1LDEyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMC41LDEwLjRjLTAuMi0wLjItMC41LTAuNC0wLjgtMC41Yy0wLjMtMC4xLTAuNi0wLjItMS0wLjJoLTEuOXY1LjFoMS45YzAuNCwwLDAuNy0wLjEsMS0wLjIKCQljMC4zLTAuMSwwLjYtMC4zLDAuOC0wLjVzMC40LTAuNSwwLjUtMC44YzAuMS0wLjMsMC4yLTAuNywwLjItMS4xcy0wLjEtMC43LTAuMi0xLjFDMjAuOSwxMC45LDIwLjgsMTAuNiwyMC41LDEwLjR6IE0xOS44LDEzLjUKCQljLTAuMywwLjMtMC42LDAuNC0xLjEsMC40aC0xdi0zLjNoMWMwLjUsMCwwLjksMC4xLDEuMSwwLjRzMC40LDAuNywwLjQsMS4yUzIwLjEsMTMuMiwxOS44LDEzLjV6Ii8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSIyMi4xLDE0LjggMjMsMTQuOCAyMywxMi42IDI0LjcsMTIuNiAyNC43LDExLjcgMjMsMTEuNyAyMywxMC42IDI1LjIsMTAuNiAyNS4yLDkuNyAKCQkyMi4xLDkuNyAJIi8+Cgk8cmVjdCB4PSIxMi44IiB5PSIyNi43IiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjEzIiBoZWlnaHQ9IjIiLz4KCTxyZWN0IHg9IjEyLjgiIHk9IjMwLjIiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMjMuNCIgaGVpZ2h0PSIyIi8+Cgk8cmVjdCB4PSIxMi44IiB5PSIzNC41IiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjEzIiBoZWlnaHQ9IjIiLz4KCTxyZWN0IHg9IjEyLjgiIHk9IjM4IiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjEzIiBoZWlnaHQ9IjIiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjksMzkuOEgzN3YtNS4xSDI5VjM5Ljh6IE0zMC4xLDM1LjhoNS44djIuOGgtNS44VjM1Ljh6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/oia-logo.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/oia-logo-0f2619734a9d10055ba9576e142acf9f.svg";

/***/ }),

/***/ "./static/solplay-control_y_embalaje.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTQ4LjMsM0gxLjd2MTBoMS44VjQ3aDQzVjEzaDEuOFYzeiBNNCw1LjNoNDJ2NS41SDRWNS4zeiBNMzYuOSwzOHY2LjZoLTMuNFYzOGgwLjdoMi4xSDM2Ljl6CgkgTTQ0LjIsNDQuN2gtMy4zVjM4aDIuN2wtNC43LTYuN2wtMy43LDUuMmwtMy43LTUuMkwyNi43LDM4aDIuN3Y2LjZINS44VjEzaDM4LjRWNDQuN3oiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/solplay-eficiencia.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTQxLjIsMTQuNmwxLjItMS4ybDAuOC0wLjhsMCwwbDAsMGwtNC40LTQuNGwwLDBsMCwwbC0xLjIsMS4ybC0xLDFjLTIuNC0xLjYtNS0yLjctNy45LTMuMlY2CglDMjkuNSw1LjQsMzAsNC44LDMwLDRjMC0xLjctMi4xLTIuOS01LTIuOWMtMi45LDAtNSwxLjItNSwyLjljMCwwLjgsMC41LDEuNSwxLjMsMnYxLjNjLTIuOSwwLjUtNS42LDEuNi03LjksMy4ybDAsMGwwLDBMMTIsOS4xCglsLTAuOS0wLjhsMCwwbC00LjQsNC40bDAuOSwwLjlsMS4xLDEuMUM1LjgsMTguMiw0LDIyLjksNCwyNy45YzAsMTEuNiw5LjQsMjEsMjEsMjFjMTEuNiwwLDIxLTkuNCwyMS0yMQoJQzQ2LDIyLjksNDQuMiwxOC4yLDQxLjIsMTQuNnogTTQzLjksMjYuNmMtMC4zLTAuMi0wLjYtMC4zLTAuOS0wLjNoLTAuOGMtMC4zLTMuNC0xLjYtNi41LTMuNy05LjFsMS4yLTEuMgoJQzQyLjEsMTksNDMuNiwyMi42LDQzLjksMjYuNnogTTM5LjUsMjkuNWgwLjZjLTAuNyw3LjEtNi40LDEyLjgtMTMuNSwxMy41di0wLjZjMC0wLjktMC43LTEuNi0xLjYtMS42Yy0wLjksMC0xLjYsMC43LTEuNiwxLjZWNDMKCWMtNy4xLTAuNy0xMi44LTYuNC0xMy41LTEzLjVoMC42YzAuOSwwLDEuNi0wLjcsMS42LTEuNnMtMC43LTEuNi0xLjYtMS42SDkuOWMwLjctNy4xLDYuNC0xMi43LDEzLjUtMTMuNXYwLjYKCWMwLDAuNCwwLjIsMC44LDAuNSwxLjFoLTAuMXYxMS41Yy0wLjIsMC4yLTAuNCwwLjMtMC42LDAuNmgtOC43djIuNGg4LjZjMC40LDAuNiwxLjEsMS4xLDEuOSwxLjFjMS4yLDAsMi4yLTEsMi4yLTIuMgoJYzAtMC44LTAuNC0xLjUtMS0xLjlWMTQuNmgtMC4xYzAuMy0wLjMsMC41LTAuNywwLjUtMS4xdi0wLjZjNy4xLDAuNywxMi43LDYuNCwxMy41LDEzLjVoLTAuNmMtMC45LDAtMS42LDAuNy0xLjYsMS42CglTMzguNiwyOS41LDM5LjUsMjkuNXogTTIzLjQsOS4xYzAuMSwwLDAuMiwwLDAuMywwYy0wLjEsMC4xLTAuMSwwLjItMC4yLDAuNGgtMC4xVjkuMXogTTI2LjUsOS40YzAtMC4xLTAuMS0wLjMtMC4yLTAuNAoJYzAuMSwwLDAuMiwwLDAuMywwdjAuNEgyNi41eiBNMzUuMSwxMS45bC0wLjksMC45bDEuNCwxLjRjLTItMS41LTQuMy0yLjctNi45LTMuMlY5LjRDMzEsOS44LDMzLjIsMTAuNywzNS4xLDExLjl6IE0yMy40LDYuNwoJYzAuNSwwLjEsMSwwLjEsMS42LDAuMXMxLjEsMCwxLjYtMC4xVjdjLTAuNSwwLTEuMS0wLjEtMS42LTAuMWMtMC41LDAtMS4xLDAtMS42LDAuMVY2Ljd6IE0yMS4zLDkuNHYxLjdjLTIuNSwwLjYtNC45LDEuNy02LjksMy4yCglsMS40LTEuNGwtMC45LTAuOUMxNi44LDEwLjcsMTksOS44LDIxLjMsOS40eiBNMTEuNSwxNy4yYy0yLDIuNS0zLjMsNS43LTMuNyw5LjFINy4xYy0wLjMsMC0wLjcsMC4xLTAuOSwwLjMKCWMwLjMtNCwxLjgtNy43LDQuMi0xMC42TDExLjUsMTcuMnogTTYuMSwyOS4yYzAuMywwLjIsMC42LDAuMywwLjksMC4zaDAuOGMwLjcsOC4zLDcuMywxNC45LDE1LjYsMTUuNnYwLjdjMCwwLjQsMC4xLDAuNywwLjMsMC45CglDMTQuMyw0Ni4yLDYuOCwzOC42LDYuMSwyOS4yeiBNMjYuMyw0Ni44YzAuMi0wLjMsMC4zLTAuNiwwLjMtMC45di0wLjdjOC4zLTAuOCwxNC44LTcuMywxNS42LTE1LjZoMC44YzAuMywwLDAuNy0wLjEsMC45LTAuMwoJQzQzLjIsMzguNiwzNS43LDQ2LjIsMjYuMyw0Ni44eiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/solplay-entrega.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjMwLjgsMjMgMzEuNywyMi44IDMxLjcsMjAuNiAzMi40LDIwLjQgMzEuMiwxOC45IDMwLjEsMjEuMSAzMC44LDIwLjkgCSIvPgoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHBvaW50cz0iMzIuOCwyMC4zIDMzLjUsMjAuMSAzMy41LDIyLjIgMzQuNCwyMS45IDM0LjQsMTkuOCAzNSwxOS42IDMzLjksMTguMSAJIi8+Cgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgcG9pbnRzPSIzMC4yLDI0LjcgMzUsMjMuMiAzNSwyMi4zIDMwLjIsMjMuNyAJIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM2LjUsNDIuMmM0LjItNC40LDEwLjktMTEuNiwxMS0xMy4yYzAuMS0xLjctMS42LTEwLTIuMS0xMS43Yy0wLjQtMS41LTEuOC0yLjItMi45LTIKCQljLTEsMC4yLTEuOCwxLjEtMS42LDIuN2MwLjMsMiwwLjgsNy44LDEsOS4zYy0xLjIsMS4zLTQsNC4yLTUsNC43Yy0wLjQsMC4yLTAuOSwwLjItMS4yLDAuMWwzLjItMy4xYzEtMSwxLjEtMi4zLDAuMy0zLjMKCQljLTAuNC0wLjUtMS0wLjktMS42LTEuMWMwLDAsMC0wLjEsMC0wLjF2LTEzbDMuMS0zLjljMC4yLTAuMiwwLjItMC41LDAuMi0wLjdjMC0wLjEtMC4xLTAuMS0wLjEtMC4yYzAuMi0wLjMsMC4yLTAuNiwwLTAuOQoJCWMtMC4yLTAuMy0wLjUtMC40LTAuOS0wLjNsLTEuMSwwLjNsLTkuNC0zLjZjLTAuMy0wLjEtMC43LDAtMSwwLjNsLTIuNywzLjRsLTIuNy0zLjRjLTAuMi0wLjMtMC42LTAuNC0xLTAuM2wtOS40LDMuNmwtMS4xLTAuMwoJCWMtMC4zLTAuMS0wLjcsMC4xLTAuOSwwLjNjLTAuMiwwLjMtMC4yLDAuNiwwLDAuOWMwLDAuMS0wLjEsMC4xLTAuMSwwLjJjLTAuMSwwLjMsMCwwLjUsMC4yLDAuN2wzLjIsNHYxM2MwLDAuMSwwLDAuMSwwLDAuMgoJCWMtMS0wLjQtMi4yLDAuMS0yLjksMWMtMC44LDEuMS0wLjcsMi40LDAuMywzLjNsMy4yLDMuMWMtMC40LDAuMS0wLjgsMC4xLTEuMi0wLjFjLTEtMC41LTMuNS0zLTUtNC43QzguMiwyNS44LDguNywyMCw5LDE4CgkJYzAuMi0xLjYtMC42LTIuNS0xLjYtMi43Yy0xLjEtMC4yLTIuNSwwLjUtMi44LDJDNC4xLDE5LDIuNCwyNy4zLDIuNSwyOWMwLjEsMS42LDYuOCw4LjgsMTEsMTMuMmwtMS4zLDQuN2MtMC4xLDAuMywwLDAuNSwwLjEsMC43CgkJYzAuMiwwLjIsMC40LDAuMywwLjcsMC4zaDEwLjhjMC4yLDAsMC41LTAuMSwwLjYtMC4zYzAuMi0wLjIsMC4yLTAuNCwwLjItMC42bC0wLjQtNi42YzAsMCwwLTAuMSwwLTAuMWwtMS44LTkKCQljMC0wLjItMC4yLTAuNC0wLjMtMC41Yy0wLjItMC4yLTQuOC0zLjctNy4xLTUuM2wxMC4xLDMuNGMwLjEsMC4xLDAuMywwLjEsMC41LDAuMWMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGMwLjIsMCwwLjMtMC4xLDAuNS0wLjEKCQlsNy43LTIuNmMtMi40LDEuOC01LjgsNC4zLTYsNC41Yy0wLjIsMC4xLTAuMywwLjMtMC4zLDAuNWwtMS44LDljMCwwLDAsMC4xLDAsMC4xbC0wLjQsNi42YzAsMC4yLDAuMSwwLjUsMC4yLDAuNnMwLjQsMC4zLDAuNiwwLjMKCQlIMzdjMC4zLDAsMC41LTAuMSwwLjctMC4zYzAuMi0wLjIsMC4yLTAuNSwwLjEtMC43TDM2LjUsNDIuMnogTTIxLjcsOS41bDIuMSwzLjdsLTktM2MwLDAsMCwwLDAsMGwtMS43LTIuNkwyMS43LDkuNXogTTI5LjYsOS41CgkJbDguNi0ybC0xLjgsMi42bC05LDNMMjkuNiw5LjV6IE0yNi41LDE1LjNsOS4zLTIuOVYyNGwtOS4zLDMuMlYxNS4zeiBNMjkuMywzLjlsNi41LDIuNWwtNi43LDEuNWwtMi4yLTEuMUwyOS4zLDMuOXogTTI3LjgsOS4xCgkJbC0xLjQsMi40bDAtM0wyNy44LDkuMXogTTI0LjgsMTEuNWwtMS40LTIuNGwxLjQtMC43TDI0LjgsMTEuNXogTTIxLjksMy45bDIuNCwyLjlsLTIuMiwxLjFsLTYuNy0xLjVMMjEuOSwzLjl6IE0yMi42LDQwLjcKCQlsMC4zLDUuNmgtOC44bDEuMi00LjFjMC4xLTAuMywwLTAuNi0wLjItMC44QzEwLDM2LjEsNC41LDI5LjksNC4yLDI4LjljLTAuMS0xLjQsMS41LTkuMSwyLTExLjJjMC4yLTAuNiwwLjYtMC44LDAuOS0wLjgKCQljMC40LDAuMSwwLjMsMC42LDAuMywwLjhjLTAuMywyLjMtMSw5LjUtMSw5LjhjMCwwLjIsMC4xLDAuNSwwLjIsMC42YzAuNCwwLjUsNC4xLDQuNSw1LjcsNS40YzIsMS4xLDMuOS0wLjUsNC0wLjUKCQljMC4yLTAuMiwwLjMtMC40LDAuMy0wLjZjMC0wLjItMC4xLTAuNS0wLjMtMC42bC00LjEtMy45Yy0wLjItMC4yLTAuNS0wLjYtMC4xLTEuMWMwLjMtMC40LDAuOC0wLjUsMC45LTAuNQoJCWMwLjksMC41LDUuNyw0LjIsNy43LDUuN0wyMi42LDQwLjd6IE0xNS40LDEyLjVsOS40LDIuOXYxMS44TDE1LjQsMjRWMTIuNXogTTI3LDQ2LjNsMC4zLTUuNmwxLjgtOC42YzIuMS0xLjYsNi45LTUuMiw3LjctNS43CgkJYzAuMS0wLjEsMC42LDAuMSwwLjksMC41YzAuNCwwLjUsMC4xLDAuOS0wLjEsMS4xbC00LDMuOWMtMC4yLDAuMi0wLjMsMC40LTAuMywwLjZzMC4xLDAuNSwwLjMsMC42YzAuMSwwLjEsMiwxLjYsNCwwLjUKCQljMS42LTAuOSw1LjMtNC45LDUuNy01LjRjMC4yLTAuMiwwLjItMC40LDAuMi0wLjZjMC0wLjMtMC43LTcuNS0xLTkuOGMwLTAuMi0wLjEtMC44LDAuMy0wLjhjMC4zLTAuMSwwLjcsMC4xLDAuOSwwLjgKCQljMC41LDIuMSwyLjEsOS44LDIsMTEuMWMtMC4zLDEuMS01LjgsNy4yLTEwLjksMTIuNWMtMC4yLDAuMi0wLjMsMC41LTAuMiwwLjhsMS4yLDQuMUgyN3oiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/solplay-header-logo.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay-header-logo-efce7611382cf3fc793ea745829d55af.svg";

/***/ }),

/***/ "./static/solplay-seguimiento.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTQ5LDMwLjN2LTcuMWwtMy45LTEuMXYtMWMwLTEtMC44LTEuOC0xLjgtMS44cy0xLjgsMC44LTEuOCwxLjh2MGwtMTIuNS0zLjRWOS41YzAtMi43LTEuOC01LTQuMS01CgljLTIuMiwwLTQuMSwyLjItNC4xLDV2OC4yTDguNCwyMS4xdjBjMC0xLTAuOC0xLjgtMS44LTEuOGMtMSwwLTEuOCwwLjgtMS44LDEuOHYxbC0zLjksMXY3LjFsMTkuOS0yLjZ2OC4ybC01LjQsMy40djYuM2w5LjQtMi42CglsOS40LDIuNnYtNi4zbC01LjQtMy40di04LjJMNDksMzAuM3ogTTQ3LjQsMjQuNHY0bC0yLjUtMC4zYzAuMi0wLjMsMC4zLTAuNiwwLjMtMXYtMy4zTDQ3LjQsMjQuNHogTTI5LjEsMTkuNGwxMi41LDMuNHY0LjMKCWMwLDAuMiwwLDAuNCwwLjEsMC42TDI5LjEsMjZWMTkuNHogTTIuNiwyNC40bDIuMi0wLjZ2My4zYzAsMC40LDAuMSwwLjcsMC4zLDFsLTIuNSwwLjNWMjQuNHogTTguMywyNy42YzAuMS0wLjIsMC4xLTAuNCwwLjEtMC42Cgl2LTQuM2wxMi41LTMuNFYyNkw4LjMsMjcuNnogTTMyLjgsNDAuMXYzLjJMMjUsNDEuMWwtNy44LDIuMnYtMy4ybDUuNC0zLjR2LTkuM2wwLDBWMTcuM2wwLDBWOS41YzAtMS44LDEuMS0zLjMsMi40LTMuMwoJYzEuMywwLDIuNCwxLjUsMi40LDMuM3Y3Ljh2MTAuMXY5LjNMMzIuOCw0MC4xeiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/solplay-white-logo.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDE1MC41IDQxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNTAuNSA0MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNTMuNywxMi4zYzAuOSwwLDEuNywwLjEsMi40LDAuNGMwLjcsMC4yLDEuMywwLjQsMS45LDAuNGMwLjYsMCwwLjktMC4yLDAuOS0wLjZoMC4zbDAuMyw0LjVoLTAuMwoJCWMwLTAuMy0wLjEtMC43LTAuMi0xLjFjLTAuMi0wLjQtMC40LTAuOS0wLjgtMS40Yy0wLjQtMC41LTAuOS0wLjktMS43LTEuM3MtMS43LTAuNS0yLjgtMC41Yy0yLDAtMywwLjctMywyLjEKCQljMCwxLjMsMC42LDIuNCwxLjcsMy40bDUuNiw0LjdjMiwxLjQsMi45LDMsMi45LDQuOGMwLDEuNS0wLjksMi44LTIuNiwzLjdjLTEuNSwwLjgtMy4zLDEuMi01LjYsMS4yYy0xLjUsMC0yLjctMC4zLTMuNy0xCgkJYy0wLjMtMC4yLTAuNi0wLjMtMC44LTAuM2MtMC40LDAtMC43LDAuMi0wLjksMC43Yy0wLjEsMC4xLTAuMSwwLjMtMC4xLDAuNWgtMC4zbDAuMS00LjVoMC4zYzAsMC4yLDAsMC41LDAuMSwwLjgKCQljMC4yLDAuOCwwLjgsMS42LDEuNSwyLjNjMC40LDAuNCwwLjksMC43LDEuNiwwLjljMC43LDAuMiwxLjQsMC40LDIuMiwwLjRjMS4xLDAsMS45LTAuMywyLjYtMC44YzAuNy0wLjYsMS0xLjIsMS0yCgkJYzAtMS4zLTAuNC0yLjItMS4yLTIuOWwtNS42LTQuN2MtMS43LTEuNC0yLjYtMy4xLTIuNi00LjhjMC0xLjQsMC43LTIuNSwyLjEtMy40QzUwLjMsMTIuNyw1MS45LDEyLjMsNTMuNywxMi4zeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02OS43LDMyLjRjLTIuNiwwLTQuNi0wLjctNi0yYy0xLjQtMS4zLTIuMS0zLjItMi4xLTUuN2MwLTIuNCwwLjctNC4zLDIuMS01LjdjMS40LTEuMywzLjQtMiw2LTIKCQljMi42LDAsNC42LDAuNyw2LDJjMS40LDEuNCwyLjEsMy4zLDIuMSw1LjdjMCwyLjUtMC43LDQuNC0yLjEsNS43Qzc0LjMsMzEuNyw3Mi4zLDMyLjQsNjkuNywzMi40eiBNNjkuNywzMi4xCgkJYzEuNSwwLDIuNC0wLjUsMi44LTEuNWMwLjQtMSwwLjYtMywwLjYtNS45YzAtMi45LTAuMi00LjgtMC42LTUuOWMtMC40LTEtMS40LTEuNS0yLjgtMS41Yy0xLjcsMC0yLjcsMC42LTMuMSwxLjkKCQljLTAuMywxLTAuNCwyLjktMC40LDUuNXMwLjEsNC41LDAuNCw1LjVDNjcsMzEuNCw2OCwzMi4xLDY5LjcsMzIuMXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNODQuOCwxMi41djE3LjRjMCwxLjQsMC44LDIsMi4zLDJ2MC4zaC05LjN2LTAuM2MxLjUsMCwyLjMtMC43LDIuMy0yVjEyLjVjMC0xLjQtMC44LTItMi4zLTJ2LTAuMwoJCWg1LjhDODQuNCwxMC4xLDg0LjgsMTAuOSw4NC44LDEyLjV6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTk0LjEsMzUuN2MwLDEuNCwwLjgsMiwyLjMsMlYzOGgtOS4zdi0wLjNjMS42LDAsMi4zLTAuNywyLjMtMlYxOS40YzAtMS40LTAuOC0yLTIuMy0ydi0wLjNIOTMKCQljMC4yLDAsMC40LDAuMiwwLjYsMC41QzkzLjgsMTcuOSw5NCwxOCw5NCwxOGMxLTAuNywyLjEtMSwzLTFjMi4zLDAsNC4xLDAuNyw1LjUsMmMxLjQsMS40LDIuMSwzLjMsMi4xLDUuN3MtMC43LDQuMy0yLDUuNgoJCWMtMS40LDEuNC0zLjIsMi01LjUsMmMtMSwwLTEuOS0wLjMtMi45LTFWMzUuN3ogTTk5LjksMjQuN2MwLTMuMy0wLjEtNS4yLTAuMy01LjhjLTAuNS0xLjEtMS4zLTEuNy0yLjYtMS43Yy0xLDAtMiwwLjQtMywxLjEKCQljMCwwLjMsMC4xLDAuNywwLjEsMS4xVjMxYzAuOSwwLjcsMS45LDEsMi45LDFjMS4zLDAsMi4xLTAuNiwyLjYtMS43Qzk5LjgsMjkuOCw5OS45LDI3LjksOTkuOSwyNC43eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMTEuNiwxMi41djE3LjRjMCwxLjQsMC44LDIsMi4zLDJ2MC4zaC05LjN2LTAuM2MxLjUsMCwyLjMtMC43LDIuMy0yVjEyLjVjMC0xLjQtMC44LTItMi4zLTJ2LTAuMwoJCWg1LjhDMTExLjIsMTAuMSwxMTEuNiwxMC45LDExMS42LDEyLjV6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEzMi44LDMyLjJIMTI3Yy0wLjIsMC0wLjQtMC4yLTAuNi0wLjVjLTAuMi0wLjMtMC40LTAuNS0wLjQtMC41Yy0xLDAuNy0yLjIsMS4xLTMuNiwxLjEKCQljLTIuNSwwLTQuNC0wLjYtNS45LTEuN2MtMS41LTEuMS0yLjItMi4zLTIuMi0zLjdjMC0xLjQsMC43LTIuNiwyLjItMy42YzEuNS0xLjEsMy40LTEuNiw1LjktMS42YzEuMiwwLDIuNCwwLjIsMy41LDAuN3YtMC43CgkJYzAtMy0xLjMtNC41LTMuOC00LjVjLTEuNiwwLTMuMSwwLjQtNC42LDEuMmwtMC4yLTAuM2MxLjUtMC45LDMuMS0xLjMsNC44LTEuM2M1LjYsMCw4LjQsMi42LDguNCw3Ljd2NS4yYzAsMS40LDAuOCwyLDIuMywyVjMyLjJ6CgkJIE0xMjUuOCwyMi44Yy0xLjEtMC41LTIuMy0wLjgtMy41LTAuOGMtMS40LDAtMi40LDAuNS0zLDEuNmMtMC4zLDAuNS0wLjUsMS42LTAuNSwzLjNjMCwyLjEsMC4zLDMuNCwwLjgsNAoJCWMwLjYsMC43LDEuNSwxLjEsMi43LDEuMWMxLjUsMCwyLjctMC40LDMuNS0xLjFjMC0xLjItMC4xLTIuNC0wLjEtMy41VjIyLjh6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEzOC42LDE5LjNsMy40LDguM2wzLjMtOC4zYzAuMS0wLjMsMC4yLTAuNiwwLjItMC45YzAtMC42LTAuNi0wLjktMS43LTAuOXYtMC4zaDMuOHYwLjMKCQljLTAuOCwwLTEuNSwwLjctMiwybC0zLjUsOC42bC0xLjYsNC4xbC0xLjcsNC4xYy0wLjcsMS40LTEuNSwyLjEtMi41LDIuMWMtMC42LDAtMS4yLTAuMi0xLjYtMC43cy0wLjctMS0wLjctMS42CgkJYzAtMC42LDAuMi0xLjIsMC43LTEuNmMwLjQtMC41LDEtMC43LDEuNi0wLjdjMC42LDAsMS4xLDAuMiwxLjYsMC42YzAuNCwwLjMsMC43LDAuNSwwLjksMC41YzAuMSwwLDAuMi0wLjEsMC4zLTAuMmwwLjktMi40aC0wLjYKCQljLTAuNCwwLTAuNy0wLjEtMC44LTAuM2MwLDAtMC4zLTAuNi0wLjctMS44bC00LjMtMTAuN2MtMC40LTAuOS0wLjctMS41LTEtMS43Yy0wLjMtMC4yLTAuNy0wLjMtMS40LTAuM3YtMC4zaDUuNQoJCUMxMzcuNSwxNy4xLDEzOC4xLDE3LjgsMTM4LjYsMTkuM3oiLz4KPC9nPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTYuMywzNy42YzAsMCwxMS43LTMsOS41LTEwLjFjLTAuOC0yLjYtMi42LTQtNC43LTVjLTIuNS0xLjItOS45LTIuOC0xMi42LTUuOAoJCWMtMC41LTAuNi0xLjktMS44LTEuMi0zLjljMS4yLTMuNSw3LjQtNy4xLDEzLjQtOC4yYzAsMC01LjgsMy4yLTAuNiw2LjVjNS4yLDMuMiwxNi4xLDkuNCwxMS44LDE3LjkKCQlDMjcuNywzNy4zLDE2LjMsMzcuNiwxNi4zLDM3LjZ6Ii8+Cgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIuMjcxOSIgeTE9IjI2LjgzODYiIHgyPSIyMi4yOTU0IiB5Mj0iMjYuODM4NiI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZFQ0IwOSIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNFRDZGMjYiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIGQ9Ik0yMi4zLDMwLjFjMC4yLDEuNS0wLjUsMy4xLTEuNSw0LjJjLTEuMSwxLjEtMi42LDEuNy00LjEsMmMtNC41LDAuOS05LjQtMC45LTEyLjEtNC42CgkJQzEuOSwyOCwwLjcsMjAuOSw2LDE3LjJjLTEuOCwyLjMtMi45LDUuNC0xLjUsOC40YzEsMi4xLDMuMiwzLjcsNS41LDMuN2MzLjEtMC4xLDUuNy0zLjEsOC43LTIuN0MyMC41LDI2LjgsMjIsMjguMywyMi4zLDMwLjF6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDE5NjM0OyIgZD0iTTIxLDkuOGMtMC43LTAuOS0wLjktMi4zLTAuMy0zLjNjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjNjMS4zLTEuNiw1LjgtMS4yLDUuOC01LjkKCQljMCwwLDIuNSw3LjctMi40LDkuOUMyMi43LDExLjEsMjEuNywxMC42LDIxLDkuOHoiLz4KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMi44NTkxIiB5MT0iMjguNTUyNCIgeDI9IjEzLjE4OTMiIHkyPSIyOC41NTI0Ij4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZENDAxIi8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRDQwMTtzdG9wLW9wYWNpdHk6MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMl8pOyIgZD0iTTMuMSwyMS45YzAsMC0wLjgsOC44LDgsMTAuOGM0LjcsMS4xLTAuMSwyLjYtMC4xLDIuNlMxLjIsMzIuNywzLjEsMjEuOXoiLz4KCQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTM3OC4xMTYiIHkxPSItNzc5LjM2NzEiIHgyPSIxMzc0Ljk5OTQiIHkyPSItNzgyLjU1OTkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTAuMzM3MyAxLjM3NTYgMS4wODIyIDAuNzU0NCAxMzM0LjMzMTEgLTEyOTguMzEyKSI+CgkJPHN0b3AgIG9mZnNldD0iMC4yNzI0IiBzdHlsZT0ic3RvcC1jb2xvcjojNDE5NjM0Ii8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRjtzdG9wLW9wYWNpdHk6MCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfM18pOyIgZD0iTTIyLjYsNy42Yy0wLjQtMC41LTAuNC0xLjEsMC0xLjZjMCwwLDAuMS0wLjEsMC4xLTAuMWMwLjktMC44LDMuNi0wLjcsMy45LTIuOQoJCWMwLDAsMSwzLjgtMi4xLDQuOUMyMy41LDguMywyMi45LDgsMjIuNiw3LjZ6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/solplay_about.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_about-6089f28e7784fdfd0988d315927384bd.jpg";

/***/ }),

/***/ "./static/solplay_banner-001.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_banner-001-23b79420585e032c8fc443a7fac375b5.jpg";

/***/ }),

/***/ "./static/solplay_certification.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_certification-a7e679dcec34bee8e58d3d7f9fd5e981.jpg";

/***/ }),

/***/ "./static/solplay_leaf.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_leaf-7db6c739e61c686dfeedf2405ccda460.jpg";

/***/ }),

/***/ "./static/solplay_productos-001.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_productos-001-43808da8f07f1e6a6a1d8ef158846337.jpg";

/***/ }),

/***/ "./static/solplay_productos-002.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_productos-002-86c9b681d22a931d44ce050bd1b66a17.jpg";

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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