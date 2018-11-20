webpackHotUpdate(5,{

/***/ "./src/components/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("./node_modules/slugify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social__ = __webpack_require__("./src/components/social.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_submit_form__ = __webpack_require__("./src/data/submit-form.js");
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\contact.js";


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
      value: {}
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
      }
    }), _temp));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          lang = _props.lang,
          _props$content = _props.content,
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
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "main-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "contact-form",
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e, output);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
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
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, fields.name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, fields.email)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        name: "msg",
        id: "msg",
        className: "field msg",
        placeholder: " ",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, fields.msg)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        className: "button",
        value: fields.send,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "output-msg visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        "class": "msg-ok",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Mensaje enviado!"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__social__["a" /* default */], {
        className: "contact-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-details-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://goo.gl/maps/WrcgbGnL3V92",
        target: "_blank",
        rel: "noopener",
        className: "icon-map-pin-streamline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "Ruta Provincial, 24, km, 16, 5535. - Mendoza Argentina.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto:info@solplayargentina.com",
        className: "icon-envelope-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "info@solplayargentina.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:+5492614549231",
        className: "icon-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "54 9 261 454 9231")))));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ })

})
//# sourceMappingURL=5.83871f887534f6af00c3.hot-update.js.map