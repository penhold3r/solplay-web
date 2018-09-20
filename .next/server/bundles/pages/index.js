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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_data_data__ = __webpack_require__("./src/data/data.js");
var _jsxFileName = "/Users/caro/CLIENTES/@WEB/solplay/pages/index.js";


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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Solplay"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, JSON.stringify(__WEBPACK_IMPORTED_MODULE_3__src_data_data__["a" /* default */], null, 2)));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify__ = __webpack_require__("slugify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slugify__);
var _jsxFileName = "/Users/caro/CLIENTES/@WEB/solplay/src/components/footer.js";




var Footer = function Footer(_ref) {
  var lang = _ref.lang,
      links = _ref.links;
  var menu = links && links[lang].sort(function (a, b) {
    return a.order - b.order;
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Solplay \xA9 2018")));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg__ = __webpack_require__("./static/solplay-header-logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg__);
var _jsxFileName = "/Users/caro/CLIENTES/@WEB/solplay/src/components/header.js";


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

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        headerWhite: false
      }
    });
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var dom = document.scrollingElement;
      var headerWhite = Boolean(dom.scrollTop > 250);
      this.setState({
        headerWhite: headerWhite
      });
    }
  }, {
    key: "render",
    value: function render() {
      var headerClass = this.state.headerWhite ? ' white' : '';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "main-header".concat(headerClass),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        prefetch: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: __WEBPACK_IMPORTED_MODULE_3__static_solplay_header_logo_svg___default.a,
        alt: "Solplay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }))))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

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
var _jsxFileName = "/Users/caro/CLIENTES/@WEB/solplay/src/components/layout.js";







var Layout = function Layout(_ref) {
  var children = _ref.children;
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
    type: "theme-color",
    content: "#00A7E1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: "../../static/bookmark-image.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "referrer",
    content: "origin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "profile",
    href: "http://gmpg.org/xfn/11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../../static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "../../static/favicon.png",
    sizes: "32x32 192x192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Layout));

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




/* harmony default export */ __webpack_exports__["a"] = ({
  menu: ['Inicio', 'Nosotros', 'Productos', 'Contacto'],
  main: [{
    name: 'Inicio',
    content: '<h2>Lo <strong>mejor</strong> de nosotros<br/> para <strong>todo el mundo</strong></h2><p>Motivados por la pasión de lo que nos gusta hacer, que es llegar con nuestros productos a nuestros clientes en el exterior.</p>'
  }, {
    name: 'Nosotros',
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
  }, {
    name: 'Productos',
    content: [{
      name: 'Ajos'
    }, {
      name: 'Ciruelas'
    }]
  }, {
    name: 'Orgánicos',
    content: '<h3>Productos Orgánicos</h3><p>Trabajamos desde hace 1 año con productos orgánicos como ajo y ciruelas deshidratadas, pero pensamos seguir aumentando volúmenes y productos de esta naturaleza, apostando cada vez más al consumo de alimentos saludables.</p>'
  }, {
    name: 'Ubicación',
    content: {
      intro: 'Estamos situados en la provincia de mendoza, república argentina, poseemos planta de empaque en la localidad de guaymallén y san rafael que son departamentos de dicha provincia.',
      text: '<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong> cerca de nuestra <strong>Patagonia Argentina,</strong> esta zona es óptima para la producción de productos orgánicos y convencionales debidos a su clima y a la sanidad de su agua y suelos.<br/><strong>Guaymallén</strong> se encuentra al norte de la provincia con producciones de primicia de ajos y frutas.'
    }
  }]
});

/***/ }),

/***/ "./src/styles/index.scss":
/***/ (function(module, exports) {



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