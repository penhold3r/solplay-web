webpackHotUpdate(5,{

/***/ "./src/components/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\products.js";


var Products = function Products(_ref) {
  var _ref$content = _ref.content,
      title = _ref$content.title,
      products = _ref$content.products,
      openModal = _ref.openModal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    id: "productos",
    className: "products scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "products-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
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
        lineNumber: 6
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      className: "product-image",
      src: product.image,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
      className: "product-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, product.name));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Products);

/***/ })

})
//# sourceMappingURL=5.ef8a7fbe88757c8095bf.hot-update.js.map