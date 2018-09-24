webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_products__["a" /* default */], {
        content: products,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_organic__["a" /* default */], {
        content: organic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_certificate__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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

/***/ }),

/***/ "./src/components/certificate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg__ = __webpack_require__("./static/solplay_certification.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg__ = __webpack_require__("./static/oia-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg__);
var _jsxFileName = "/Users/ph/Documents/WEB/www/solplay-web/src/components/certificate.js";




var Certificate = function Certificate() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "certificate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_certification_jpg___default.a,
    alt: "",
    className: "certificate-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "certificate-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Certificacion"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg___default.a,
    alt: "Organizaci\xF3n Internacional Agropecuaria",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "down")));
};

/* harmony default export */ __webpack_exports__["a"] = (Certificate);

/***/ }),

/***/ "./static/oia-logo.svg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/oia-logo-0f2619734a9d10055ba9576e142acf9f.svg";

/***/ }),

/***/ "./static/solplay_certification.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_certification-a7e679dcec34bee8e58d3d7f9fd5e981.jpg";

/***/ })

})
//# sourceMappingURL=5.16375dd73bf31e827b76.hot-update.js.map