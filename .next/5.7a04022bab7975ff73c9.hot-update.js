webpackHotUpdate(5,{

/***/ "./src/components/product-modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=5.7a04022bab7975ff73c9.hot-update.js.map