webpackHotUpdate(5,{

/***/ "./src/components/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify__ = __webpack_require__("./node_modules/slugify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slugify__);
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\products.js";



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
        lineNumber: 13
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
      className: "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, product.name)));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Products);

/***/ })

})
//# sourceMappingURL=5.00273218582377f04430.hot-update.js.map