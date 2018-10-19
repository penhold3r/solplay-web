webpackHotUpdate(5,{

/***/ "./src/components/contact.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__social__ = __webpack_require__("./src/components/social.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_submit_form__ = __webpack_require__("./src/data/submit-form.js");
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
      value: function value(e) {
        e.preventDefault();
        var submitSettings = {
          dest: '/contact.php',
          fields: '.field',
          successMsg: 'Mensaje enviado!',
          errorMsg: 'Hubo un error, intente más tarde. :('
        };
        Object(__WEBPACK_IMPORTED_MODULE_2__data_submit_form__["a" /* default */])(e.target, submitSettings);
        console.log(e.target);
      }
    }), _temp));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "contacto",
        className: "contact scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "main-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Contacto"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "contact-form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
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
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Nombre")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
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
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "E-mail")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        name: "msg",
        id: "msg",
        className: "field msg",
        placeholder: " ",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Mensaje")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        className: "button",
        value: "Enviar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__social__["a" /* default */], {
        className: "contact-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://goo.gl/maps/WrcgbGnL3V92",
        target: "_blank",
        rel: "noopener",
        className: "icon-map-pin-streamline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Ruta Provincial, 24, km, 16, 5535. - Mendoza Argentina.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto:agrovit@hotmail.com",
        className: "icon-envelope-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "agrovit@hotmail.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:+5492614549231",
        className: "icon-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "54 9 261 454 9231"))));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

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
    "Content-Type": settings.urlencoded ? "application/x-www-form-urlencoded" : "application/json"
  };
  opt.body = settings.urlencoded ? urlencodeFormData(formData) : formData; //

  console.log('data: ', opt); //

  fetch(settings.dest, opt).then(function (resp) {
    if (resp.ok) {
      msg.querySelector('p').innerHTML = !settings.successMsg ? 'ok' : settings.successMsg;
      msg.querySelector('p').className = 'msg-ok';
      msg.classList.add('visible');
      form.reset(); //

      console.log('successful', opt);
    } else {
      msg.querySelector('p').innerHTML = !settings.errorMsg ? 'error' : settings.errorMsg;
      msg.querySelector('p').className = 'msg-error';
      msg.classList.add('visible');
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

/***/ })

})
//# sourceMappingURL=5.bef107fd0c5e58e0888e.hot-update.js.map