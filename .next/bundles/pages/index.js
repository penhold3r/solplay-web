module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([5],{

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$applicationCache: true,
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/slugify/index.js":
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else if (typeof define === 'function' && define.amd) {
    define(factory)
  }
  else {
    root[name] = factory()
  }
}('slugify', this, function () {
  /* eslint-disable */
  var charMap = JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  /* eslint-enable */

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var slug = string.split('')
      .reduce(function (result, ch) {
        return result + (charMap[ch] || ch)
          // allowed
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      }, '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces
      .replace(/[-\s]+/g, options.replacement || '-')
      // remove trailing separator
      .replace('#{replacement}$', '')

    return options.lower ? slug.toLowerCase() : slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}))


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_imagesloaded__ = __webpack_require__("./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_imagesloaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_imagesloaded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_layout__ = __webpack_require__("./src/components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_hero__ = __webpack_require__("./src/components/hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_about__ = __webpack_require__("./src/components/about.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_services__ = __webpack_require__("./src/components/services.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_products__ = __webpack_require__("./src/components/products.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_product_modal__ = __webpack_require__("./src/components/product-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_organic__ = __webpack_require__("./src/components/organic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_components_certificate__ = __webpack_require__("./src/components/certificate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_components_location__ = __webpack_require__("./src/components/location.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_components_contact__ = __webpack_require__("./src/components/contact.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_data_data__ = __webpack_require__("./src/data/data.js");
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
      this.waitForImages();
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
      var menu = __WEBPACK_IMPORTED_MODULE_12__src_data_data__["a" /* default */].menu,
          _data$main = __WEBPACK_IMPORTED_MODULE_12__src_data_data__["a" /* default */].main,
          home = _data$main.home,
          about = _data$main.about,
          services = _data$main.services,
          products = _data$main.products,
          organic = _data$main.organic,
          location = _data$main.location;
      var body = document.querySelector('body');
      this.state.productModal || this.state.certificateModal ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_layout__["a" /* default */], {
        menu: menu,
        sections: this.state.sections,
        menuClick: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_product_modal__["a" /* default */], {
        open: this.state.productModal,
        content: this.state.product,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_hero__["a" /* default */], {
        content: home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_about__["a" /* default */], {
        content: about,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_services__["a" /* default */], {
        content: services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_products__["a" /* default */], {
        content: products,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_organic__["a" /* default */], {
        content: organic,
        openModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_components_location__["a" /* default */], {
        content: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__src_components_contact__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_certificate__["a" /* default */], {
        open: this.state.certificateModal,
        closeModal: this.handleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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

/***/ "./src/components/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_empaque_jpg__ = __webpack_require__("./static/solplay_empaque.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_solplay_empaque_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_solplay_empaque_jpg__);
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
    src: __WEBPACK_IMPORTED_MODULE_1__static_solplay_empaque_jpg___default.a,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
    onClick: closeModal,
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
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "certificate-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Certificacion"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_2__static_oia_logo_svg___default.a,
    alt: "Organizaci\xF3n Internacional Agropecuaria",
    className: "oia-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "../../static/solpay_OIA_certificacion.pdf",
    className: "download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_3__static_download_pdf_icon_svg___default.a,
    alt: "Descargar PDF",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Certificate);

/***/ }),

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
          dest: 'https://cors-anywhere.herokuapp.com/https://solplayargentina.com/contacto.php',
          fields: '.field',
          successMsg: 'Mensaje enviado!',
          errorMsg: 'Hubo un error, intente más tarde. :(',
          urlencoded: true
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
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "main-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Contacto"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        className: "contact-form",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Nombre")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
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
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "E-mail")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        name: "msg",
        id: "msg",
        className: "field msg",
        placeholder: " ",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Mensaje")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "submit",
        className: "button",
        value: "Enviar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__social__["a" /* default */], {
        className: "contact-social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-details-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://goo.gl/maps/WrcgbGnL3V92",
        target: "_blank",
        rel: "noopener",
        className: "icon-map-pin-streamline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Ruta Provincial, 24, km, 16, 5535. - Mendoza Argentina.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "mailto:agrovit@hotmail.com",
        className: "icon-envelope-o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "agrovit@hotmail.com")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "contact-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:+5492614549231",
        className: "icon-phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "54 9 261 454 9231")))));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "./src/components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slugify__ = __webpack_require__("./node_modules/slugify/index.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
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
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Solplay"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "developer",
    content: "penHolder Designerd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
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
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: "../../static/bookmark-image.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "referrer",
    content: "origin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "profile",
    href: "https://gmpg.org/xfn/11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "../../static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "../../static/favicon.png",
    sizes: "32x32 192x192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* default */], {
    menu: menu,
    menuClick: menuClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_next_router__["withRouter"])(Layout));

/***/ }),

/***/ "./src/components/location.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
    href: "https://goo.gl/maps/WrcgbGnL3V92",
    target: "_blank",
    rel: "noopener",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    dangerouslySetInnerHTML: {
      __html: content.title
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content.text
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "certificaciones",
    className: "button",
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Certificaciones")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Organic);

/***/ }),

/***/ "./src/components/product-modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\PH\\Documents\\WEB\\www\\solplay-web\\src\\components\\product-modal.js";


var ProductModal = function ProductModal(_ref) {
  var open = _ref.open,
      content = _ref.content,
      closeModal = _ref.closeModal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: open ? 'product-modal open' : 'product-modal',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, content && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "modal-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "close-modal product",
    onClick: closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "\u02DF"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, content.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "product-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, content.specs && Object.entries(content.specs).map(function (spec, key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: key,
      className: "spec",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
      className: "spec-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, spec[0]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "spec-content",
      dangerouslySetInnerHTML: {
        __html: spec[1]
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
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
      lineNumber: 23
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (ProductModal);

/***/ }),

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

/***/ }),

/***/ "./src/components/services.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
    title: "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon-twitter",
    title: "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "icon-instagram",
    title: "Instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
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
        name: 'Ajo Colorado',
        image: __WEBPACK_IMPORTED_MODULE_4__static_productos_ajo_colorado_jpg___default.a,
        specs: {
          Variedad: 'Morado y Colorado',
          Region: 'Valle de Uco, zona norte y este de la provincia de Mendoza.',
          Cosecha: 'Ocubre, Noviembre y Diciembre',
          Formato: 'En cajas de 10 kilos, 30 libres, bolsas de polipropileno de 20 kilos y de 10 kilos, puede ser palletizado o a granel.<br/>Se comercializa en los calibres, 3 (30/35mm) 4 (36/45mm) 5 (46/55mm) 6 (56/65mm) 7 (66/75mm).'
        }
      }, {
        name: 'Ajo Blanco',
        image: __WEBPACK_IMPORTED_MODULE_5__static_productos_ajo_blanco_jpg___default.a,
        specs: {
          Variedad: 'Blanco',
          Region: 'Valle de Uco, zona norte y este de la provincia de Mendoza.',
          Cosecha: 'Ocubre, Noviembre y Diciembre',
          Formato: 'En cajas de 10 kilos, 30 libres, bolsas de polipropileno de 20 kilos y de 10 kilos, puede ser palletizado o a granel.<br/>Se comercializa en los calibres, 3 (30/35mm) 4 (36/45mm) 5 (46/55mm) 6 (56/65mm) 7 (66/75mm).'
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
    'Content-Type': settings.urlencoded ? 'application/x-www-form-urlencoded' : 'application/json'
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

/***/ "./static/productos/ajo-blanco.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ajo-blanco-b17935adff03b596c61e6c86b749d650.jpg";

/***/ }),

/***/ "./static/productos/ajo-colorado.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ajo-colorado-df0f56067844cb2e7a7aa0f3ac485302.jpg";

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

/***/ "./static/solplay_certification.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_certification-a7e679dcec34bee8e58d3d7f9fd5e981.jpg";

/***/ }),

/***/ "./static/solplay_empaque.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/solplay_empaque-7b690352943601f789a3696b267e36e7.jpg";

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map