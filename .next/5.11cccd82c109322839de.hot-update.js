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
      this.setState({
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
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_product_modal__["a" /* default */], {
        open: this.state.productModal,
        content: this.state.product,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_services__["a" /* default */], {
        content: services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_products__["a" /* default */], {
        content: products,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_components_certificate__["a" /* default */], {
        open: this.state.certificateModal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
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
  menu: ['Home', 'About', 'Products', 'Contact'],
  main: {
    home: {
      name: 'Inicio',
      content: '<h2>Lo <strong>mejor</strong> de nosotros<br/> para <strong>todo el mundo</strong></h2><p>Motivados por la pasión de lo que nos gusta hacer, llegar con nuestros productos a clientes alrededor del mundo.</p>'
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
          Cosecha: 'Ocubre, Noviembre y Diciembre',
          Formato: 'En cajas de 10 kilos, 30 libras, bolsas de polipropileno de 20 kilos y de 10 kilos, puede ser palletizado o a granel.<br/>Se comercializa en los calibres, 3 (30/35mm) 4 (36/45mm) 5 (46/55mm) 6 (56/65mm) 7 (66/75mm).'
        }
      }, {
        name: 'Ajo Blanco',
        image: __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default.a,
        specs: {
          Variedad: 'Blanco',
          Region: 'Valle de Uco, zona norte y este de la provincia de Mendoza.',
          Cosecha: 'Ocubre, Noviembre y Diciembre',
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
        text: 'Buscamos ofrecer una alimentación natural y saludablepor lo que trabajamos con productos orgánicos como ajos y ciruelas deshidratadas entre otros.'
      }
    },
    location: {
      title: 'Ubicación',
      content: {
        intro: 'Estamos situados en la provincia de Mendoza, República Argentina.',
        text: '<strong>San Rafael</strong> está situada en la parte sur de <strong>Mendoza</strong> cerca de nuestra <strong>Patagonia Argentina,</strong> esta zona es óptima para la producción de productos orgánicos y convencionales debidos a su clima y a la sanidad de su agua y suelos.<br/><strong>Guaymallén</strong> se encuentra al norte de la provincia con producciones de primicia de ajos y frutas.'
      }
    }
  }
});

/***/ })

})
//# sourceMappingURL=5.11cccd82c109322839de.hot-update.js.map