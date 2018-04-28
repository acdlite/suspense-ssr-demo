require('source-map-support/register')
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(3);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REACT_ELEMENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REACT_CALL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REACT_RETURN_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REACT_PORTAL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REACT_FRAGMENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REACT_STRICT_MODE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REACT_PROVIDER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REACT_CONTEXT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REACT_ASYNC_MODE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REACT_FORWARD_REF_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return REACT_TIMEOUT_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["l"] = getIteratorFn;
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol['for']('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(0);
  var ReactPropTypesSecret = __webpack_require__(26);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReactCurrentOwner */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactDebugCurrentFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactInternals = __WEBPACK_IMPORTED_MODULE_0_react___default.a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ReactCurrentOwner = ReactInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame =  true ? ReactInternals.ReactDebugCurrentFrame : null;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

/* harmony default export */ __webpack_exports__["a"] = (omittedCloseTags);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (true) {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (lowPriorityWarning);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = createElement;
/* unused harmony export createFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneAndReplaceKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = cloneElement;
/* harmony export (immutable) */ __webpack_exports__["d"] = isValidElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ReactCurrentOwner__ = __webpack_require__(10);
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0,
    specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__["d" /* REACT_ELEMENT_TYPE */],

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (true) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (true) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (true) {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__["d" /* REACT_ELEMENT_TYPE */]) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, __WEBPACK_IMPORTED_MODULE_3__ReactCurrentOwner__["a" /* default */].current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */
function createFactory(type) {
  var factory = createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook: remove it
  factory.type = type;
  return factory;
}

function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(!(element === null || element === undefined), 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element);

  var propName = void 0;

  // Original props are copied
  var props = Object.assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = __WEBPACK_IMPORTED_MODULE_3__ReactCurrentOwner__["a" /* default */].current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__["d" /* REACT_ELEMENT_TYPE */];
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
}; /**
    * Copyright (c) 2013-present, Facebook, Inc.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */

/* harmony default export */ __webpack_exports__["a"] = (ReactCurrentOwner);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var ReactDebugCurrentFrame = {};

if (true) {
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ReactDebugCurrentFrame);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RESERVED; });
/* unused harmony export STRING */
/* unused harmony export BOOLEANISH_STRING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OVERLOADED_BOOLEAN; });
/* unused harmony export NUMERIC */
/* unused harmony export POSITIVE_NUMERIC */
/* unused harmony export ATTRIBUTE_NAME_START_CHAR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ATTRIBUTE_NAME_CHAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ID_ATTRIBUTE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ROOT_ATTRIBUTE_NAME; });
/* unused harmony export VALID_ATTRIBUTE_NAME_REGEX */
/* harmony export (immutable) */ __webpack_exports__["h"] = isAttributeNameSafe;
/* harmony export (immutable) */ __webpack_exports__["i"] = shouldIgnoreAttribute;
/* harmony export (immutable) */ __webpack_exports__["k"] = shouldRemoveAttributeWithWarning;
/* harmony export (immutable) */ __webpack_exports__["j"] = shouldRemoveAttribute;
/* harmony export (immutable) */ __webpack_exports__["g"] = getPropertyInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
var STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

var ID_ATTRIBUTE_NAME = 'data-reactid';
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }
  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  if (true) {
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default()(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }
  return false;
}

function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }
  switch (typeof value) {
    case 'function':
    // $FlowIssue symbol is perfectly valid here
    case 'symbol':
      // eslint-disable-line
      return true;
    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }
    default:
      return false;
  }
}

function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }
  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;
      case OVERLOADED_BOOLEAN:
        return value === false;
      case NUMERIC:
        return isNaN(value);
      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }
  return false;
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
['children', 'dangerouslySetInnerHTML',
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse', 'externalResourcesRequired', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML boolean attributes.
['allowFullScreen', 'async',
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
// Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be positive numbers.
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null);
} // attributeNamespace
);

// String SVG attributes with the xlink namespace.
['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink');
});

// String SVG attributes with the xml namespace.
['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace');
});

// Special case: this attribute exists both in HTML and SVG.
// Its "tabindex" attribute name is case-sensitive in SVG so we can't just use
// its React `tabIndex` name, like we do for attributes that exist only in HTML.
properties.tabIndex = new PropertyInfoRecord('tabIndex', STRING, false, // mustUseProperty
'tabindex', // attributeName
null);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (isCustomComponent);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = __webpack_require__(25);
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Namespaces; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getIntrinsicNamespace;
/* harmony export (immutable) */ __webpack_exports__["b"] = getChildNamespace;
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var React = __webpack_require__(31);

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
module.exports = React['default'] ? React['default'] : React;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export enableUserTimingAPI */
/* unused harmony export enableMutatingReconciler */
/* unused harmony export enableNoopReconciler */
/* unused harmony export enablePersistentReconciler */
/* unused harmony export enableGetDerivedStateFromCatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enableSuspense; });
/* unused harmony export debugRenderPhaseSideEffects */
/* unused harmony export debugRenderPhaseSideEffectsForStrictMode */
/* unused harmony export replayFailedUnitOfWorkWithInvokeGuardedCallback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return warnAboutDeprecatedLifecycles; });
/* unused harmony export addUserTimingListener */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// Exports ReactDOM.createRoot
var enableUserTimingAPI = true;

// Mutating mode (React DOM, React ART, React Native):
var enableMutatingReconciler = true;
// Experimental noop mode (currently unused):
var enableNoopReconciler = false;
// Experimental persistent mode (Fabric):
var enablePersistentReconciler = false;
// Experimental error-boundary API that can recover from errors within a single
// render phase
var enableGetDerivedStateFromCatch = false;
// Suspense
var enableSuspense = true;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
var debugRenderPhaseSideEffects = false;

// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:
var debugRenderPhaseSideEffectsForStrictMode = true;

// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
var replayFailedUnitOfWorkWithInvokeGuardedCallback = true;

// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Only used in www builds.
function addUserTimingListener() {
  __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(false, 'Not implemented.');
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* harmony default export */ __webpack_exports__["a"] = (function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on the escape-html library, which is used under the MIT License below:
 *
 * Copyright (c) 2012-2013 TJ Holowaychuk
 * Copyright (c) 2015 Andreas Lubbe
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape = void 0;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

/* harmony default export */ __webpack_exports__["a"] = (escapeTextForBrowser);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const boxOfficeMovies = [{ id: 1, title: 'Lady Bird', rating: '99%', gross: '$52.9M', fresh: true }, { id: 2, title: 'Downsizing', rating: '51%', gross: '$24.5M', fresh: false }, { id: 3, title: 'Black Panther', rating: '98%', gross: '$403.6M', fresh: true }, {
  id: 4,
  title: 'A Fantastic Woman',
  rating: '93%',
  gross: '$0.6M',
  fresh: true
}, {
  id: 5,
  title: 'Father Figures',
  rating: '22%',
  gross: '$17.5M',
  fresh: false
}, { id: 6, title: 'Early Man', rating: '81%', gross: '%6.8M', fresh: true }];
/* unused harmony export boxOfficeMovies */


const movieDetails = {
  1: {
    title: 'Lady Bird',
    rating: '99%',
    fresh: true,
    audience: '81%',
    consensus: 'Lady Bird delivers fresh insights about the turmoil of adolescence—and reveals writer-director Greta Gerwig as a fully formed filmmaking talent.',
    poster: '/img/bird.jpg'
  },
  2: {
    title: 'Downsizing',
    rating: '51%',
    fresh: false,
    audience: '23%',
    consensus: 'Downsizing assembles a talented cast in pursuit of some truly interesting ideas—which may be enough for some audiences to forgive the final product’s frustrating shortcomings.',
    poster: '/img/downsizing.jpg'
  },
  3: {
    title: 'Black Panther',
    rating: '98%',
    fresh: true,
    audience: '77%',
    consensus: `Black Panther elevates superhero cinema to thrilling new heights while telling one of the MCU’s most absorbing stories—and introducing some of its most fully realized characters.`,
    poster: '/img/panther.jpg'
  },
  4: {
    title: 'A Fantastic Woman',
    rating: '93%',
    fresh: true,
    audience: '82%',
    consensus: 'Subtle and tender, A Fantastic Woman handles its timely, sensitive subject matter with care.',
    poster: '/img/woman.jpg'
  },
  5: {
    title: 'Father Figures',
    rating: '22%',
    fresh: false,
    audience: '36%',
    consensus: 'No consensus yet.',
    poster: '/img/figures.jpg'
  },
  6: {
    title: 'Early Man',
    rating: '81%',
    fresh: true,
    audience: '57%',
    consensus: 'Early Man isn’t quite as evolved as Aardman’s best work, but still retains the unique visuals and sweet humor that have made the studio a favorite among animation enthusiasts.',
    poster: '/img/man.jpg'
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = movieDetails;


const movieReviews = {
  1: [{
    id: 0,
    fresh: true,
    text: 'The densely packed detail which makes this such a luminous work shows Gerwig to be an uncommonly alert filmmaker.',
    author: { name: 'Ryan Gilbey', publication: 'New Statesman' }
  }, {
    id: 1,
    fresh: true,
    text: 'While there is an acute authorial intelligence informing the transitions between scenes, the steady trot of clipped vignettes comes to seem monotonous and somewhat evasive, a way to move along before anything too hard and hurtful happens.',
    author: { name: 'Nick Pinkerton', publication: 'Sight and Sound' }
  }, {
    id: 2,
    fresh: true,
    text: 'Gerwig’s deft handling of script, camera and actors is all the more impressive given that this is her first film as solo director.',
    author: { name: 'Ed Potton', publication: 'Times (UK)' }
  }, {
    id: 3,
    fresh: true,
    text: 'A gloriously funny and wistfully autobiographical coming-of-age comedy.',
    author: { name: 'Peter Bradshaw', publication: 'Guardian' }
  }, {
    id: 4,
    fresh: true,
    text: "If Gerwig is capable of all this in her first solo feature, who knows what feats of woodwork she'll craft for us next.",
    author: { name: 'Tim Robey', publication: 'Daily Telegraph (UK)' }
  }, {
    id: 5,
    fresh: true,
    text: 'Writer-director Gerwig manages brilliantly the delicate feat of portraying the vulnerabilities and eccentricities of the townsfolk without patronising them.',
    author: { name: 'Geoffrey Macnab', publication: 'Independent (UK)' }
  }, {
    id: 6,
    fresh: true,
    text: 'Lady Bird uses its eponymous protagonist in the construction of one of the most skeptical voices of modern cinematography.',
    author: {
      name: 'Alberto Sáez Villarino',
      publication: 'El antepenúltimo mohicano'
    }
  }, {
    id: 7,
    fresh: true,
    text: 'There is no doubt that it has a certain charm. I guess a lot of its appeal lies in its accessibility, its slightly subversive attitude and its hipster aura.',
    author: { name: 'Jaime Fa de Lucas', publication: 'Culturamas' }
  }, {
    id: 8,
    fresh: true,
    text: "Gerwig's film, which closes with a tribute to Sacramento, ends well and feels sincere.",
    author: { name: 'Hugo Hernández Valdivia', publication: 'Cinexcepción' }
  }, {
    id: 9,
    fresh: true,
    text: '...beautiful, delicate and precise.',
    author: { name: 'Luis Martínez', publication: 'El Mundo (Spain)' }
  }, {
    id: 10,
    fresh: true,
    text: 'A pleasant and fresh surprise, it reminds me a bit of Juno.',
    author: { name: 'Israel Acosta Aroche', publication: 'Konexión' }
  }, {
    id: 11,
    fresh: true,
    text: '...nice and warm.',
    author: { name: 'Fernanda Solórzano', publication: 'Letras Libres' }
  }],
  2: [{
    id: 0,
    fresh: true,
    text: 'While Downsizing is not not about the end of human life on earth, it confronts the prospect with minimal sentiment, and uses it to ask questions about what the good life might consist of, here and now.',
    author: { name: 'Henry K. Miller', publication: 'Sight and Sound' }
  }, {
    id: 1,
    fresh: true,
    text: 'It starts out quick, sharp and funny and ends as a solemn and slow-moving leviathan: a movie overwhelmed by its own ecological and human implications',
    author: { name: 'Peter Bradshaw', publication: 'Guardian' }
  }, {
    id: 2,
    fresh: false,
    text: 'Dare we say that this once admired indie writer-director, who made Exhibition, Sideways and About Schmidt, is developing a humourless streak?',
    author: { name: 'Nigel Andrews', publication: 'Financial Times' }
  }, {
    id: 3,
    fresh: true,
    text: "It's a state-of-the-nation address by stealth, wry and wide-reaching.",
    author: { name: 'Trevor Johnston', publication: 'Little White Lies' }
  }, {
    id: 4,
    fresh: true,
    text: 'A smart, thought-provoking miniature piece.',
    author: { name: 'James Mottram', publication: 'South China Morning Post' }
  }, {
    id: 5,
    fresh: true,
    text: 'Payne’s film is full of invention, wit, great scenes and big—if not fully realised—intentions. Downsizing may be about a small world, but it is an audacious, out-sized peach of a picture.',
    author: { name: 'Ian Freer', publication: 'Empire Magazine' }
  }, {
    id: 6,
    fresh: true,
    text: 'Sometimes a change of perspective helps a person to better understand the world, and Downsizing makes it literal.',
    author: { name: 'Emmanuel Báez', publication: 'Cinéfiloz' }
  }, {
    id: 7,
    fresh: true,
    text: '...an exquisite cast, probably one of the most intelligent comeidies of the year.',
    author: { name: 'Marco Cubillo', publication: 'Konexión' }
  }, {
    id: 8,
    fresh: false,
    text: 'Christoph Waltz and Hong Chau feature in a fine cast but the entire plot meanders too much in search of decent narrative hinge. The middle act is in particular need of a boot up the rear.',
    author: {
      name: 'Hilary A White',
      publication: 'Sunday Independent (Ireland)'
    }
  }, {
    id: 9,
    fresh: false,
    text: 'The really sobering economy of scale about this overlong auteur indulgence is that it cost $68 million to make and none of that money went on a script doctor.',
    author: { name: 'Michael Coldwell', publication: 'Starburst' }
  }, {
    id: 10,
    fresh: true,
    text: 'The most ambitious and least convincing film of Nebraska’s talented filmmaker [Alexander Payne].',
    author: { name: 'Diego Batlle', publication: 'La Nación (Argentina)' }
  }, {
    id: 11,
    fresh: false,
    text: 'The intentions were good, but nothing worth remembering.',
    author: { name: 'Carlos Díaz Reyes', publication: 'Vanguardia (Mexico)' }
  }],
  3: [{
    id: 0,
    fresh: true,
    text: 'Black Panther is not just smart and politically aware for a superhero film—it’s smart and politically aware, full stop.',
    author: { name: 'Helen Lewis', publication: 'New Statesman' }
  }, {
    id: 1,
    fresh: true,
    text: 'When it comes to creative visuals, engaging action and likable characters, “Black Panther” stands confidently next to the best fare offered up by the Marvel Cinematic Universe.',
    author: { name: 'Matthew Rozsa', publication: 'Salon.com' }
  }, {
    id: 2,
    fresh: true,
    text: 'The identity politics provide a fresh spin to the genre’s increasingly tedious narrative formula.',
    author: { name: 'J. R. Jones', publication: 'Chicago Reader' }
  }, {
    id: 3,
    fresh: true,
    text: 'Jordan has swagger to spare, with those rolling shoulders, but there’s a breath of charm, too, all the more seductive in the overblown atmosphere of Marvel. He’s twice as pantherish as the Panther.',
    author: { name: 'Anthony Lane', publication: 'New Yorker' }
  }, {
    id: 4,
    fresh: true,
    text: 'The real stars of Black Panther are its women, both before and behind the camera.',
    author: { name: 'Kelli Weston', publication: 'Sight and Sound' }
  }, {
    id: 5,
    fresh: true,
    text: '[The] script adheres to the usual genre formula of tomfoolery, in-jokes, mythology and outright poppycock, but their knack for teasing emotional resonance out of standard scenarios gives them the edge over predecessors and competitors alike.',
    author: { name: 'Ryan Gilbey', publication: 'New Statesman' }
  }, {
    id: 6,
    fresh: true,
    text: 'In short, Black Panther emerges as a great cinematic triumph.',
    author: { name: 'José Martín', publication: 'El antepenúltimo mohicano' }
  }, {
    id: 7,
    fresh: true,
    text: 'Black Panther is good, but it’s not the greatest film of the MCU.',
    author: { name: 'Rafael Rosales Santos', publication: 'Konexión' }
  }, {
    id: 8,
    fresh: true,
    text: 'One of the best comic adaptations we have ever seen.',
    author: { name: 'Carlos Díaz Reyes', publication: 'Vanguardia (Mexico)' }
  }, {
    id: 9,
    fresh: true,
    text: 'Comes as close as a film possibly can to sloughing off all of the problems that persistently cling to this franchise.',
    author: { name: 'Tim Brayton', publication: 'Alternate Ending' }
  }, {
    id: 10,
    fresh: true,
    text: 'Emotional, occasionally funny, and narratively unpredictable. (...) I doubt any other blockbuster will manage to surpass “Black Panther” this year.',
    author: { name: 'Sebastian Zavala Kahn', publication: 'Cinencuentro' }
  }, {
    id: 11,
    fresh: true,
    text: 'The majority of moviegoers want to see films led by strong, intelligent characters that are more diverse than just heterosexual white men, especially when they are as thoughtfully and beautifully made as this one.',
    author: { name: 'Lee Jutton', publication: 'Film Inquiry' }
  }],
  4: [{
    id: 0,
    fresh: true,
    text: 'Given it could be re-titled “Microaggressions: The Movie”, this is an unsurprisingly upsetting watch at times, but it’s made compelling by Vega’s dignified, heartfelt performance.',
    author: { name: 'Helen O’Hara', publication: 'Empire Magazine' }
  }, {
    id: 1,
    fresh: true,
    text: 'It shows how thinking of a person in terms of his or her physical condition can have a harmful effect on that person, limiting his or her sense of self.',
    author: { name: 'Ben Sachs', publication: 'Chicago Reader' }
  }, {
    id: 2,
    fresh: true,
    text: 'A quietly honest centre never wavers.',
    author: { name: 'Kate Taylor', publication: 'Globe and Mail' }
  }, {
    id: 3,
    fresh: true,
    text: 'At its core, A Fantastic Woman is the story of genuine love, something requires no definition.',
    author: { name: 'Peter Howell', publication: 'Toronto Star' }
  }, {
    id: 4,
    fresh: true,
    text: 'Its clarity of purpose translates to an effectively lean and straightforward story of adversity and survival, in any language.',
    author: { name: 'Michael Phillips', publication: 'Chicago Tribune' }
  }, {
    id: 5,
    fresh: true,
    text: '“A Fantastic Woman” serves as a gentle reminder that we all contain multitudes.',
    author: { name: 'Ann Hornaday', publication: 'Washington Post' }
  }, {
    id: 6,
    fresh: true,
    text: 'The plot is straightforward, but the film’s tone and style supply an artful mix of sensations. The lighting is colorful and heady...The film’s rhythms gracefully accompany her endeavor, rising and falling with every setback or tiny, incremental victory.',
    author: { name: 'Peg Aloi', publication: 'Arts Fuse' }
  }, {
    id: 7,
    fresh: true,
    text: 'Defiant, determined, Vega delivers a star-making performance in a drama of embattled grief, directed with heart.',
    author: { name: 'Kevin Harley', publication: 'Total Film' }
  }, {
    id: 8,
    fresh: false,
    text: 'Compelling on a human level but dramatically monotonous. There aren’t exactly a lot of surprises here.',
    author: { name: 'Sean Burns', publication: 'The ARTery' }
  }, {
    id: 9,
    fresh: true,
    text: 'Vega establishes a milestone in the push for equality playing a transgender woman determined to properly grieve for her recently deceased lover.',
    author: { name: 'Al Alexander', publication: 'The Patriot Ledger' }
  }, {
    id: 10,
    fresh: true,
    text: 'Vega’s remarkable turn is something of a revelation, as if we are in on some kind of unique discovery.',
    author: { name: 'Jonathan W. Hickman', publication: 'Daily Film Fix' }
  }, {
    id: 11,
    fresh: true,
    text: '[Daniela] Vega is stunning. She delivers a performance of such breadth, scope and unwavering strength the cumulative power of what she accomplishes is unquestionably exceptional.',
    author: { name: 'Sara Michelle Fetters', publication: 'MovieFreak.com' }
  }],
  5: [{
    id: 0,
    fresh: false,
    text: 'Limp jokes, bad chemistry and the least believable onscreen fraternal bond make for a very lacklustre viewing experience.',
    author: { name: 'Eve Barlow', publication: 'Empire Magazine' }
  }, {
    id: 1,
    fresh: false,
    text: 'The film, which finished shooting more than two years ago before spending endless months without a release date, is both meandering and bloated, suggesting the Frankensteinian result of brutal test screenings.',
    author: { name: 'Eric Henderson', publication: 'Slant Magazine' }
  }, {
    id: 2,
    fresh: false,
    text: 'Distinguished mainly by its overqualified cast and lack of inspiration, “Father Figures” can’t decide whether it’s a gross-out comedy or an uplifting tale of brotherly love; it embraces the worst of both worlds.',
    author: { name: 'Ben Kenigsberg', publication: 'New York Times' }
  }, {
    id: 3,
    fresh: false,
    text: 'Would you like to watch Wilson and a young child urinate on each other in a rest stop bathroom? Thought not.',
    author: { name: 'Johnny Oleksinski', publication: 'New York Post' }
  }, {
    id: 4,
    fresh: false,
    text: 'Who’s your daddy? Who cares.',
    author: { name: 'John DeFore', publication: 'Hollywood Reporter' }
  }, {
    id: 5,
    fresh: false,
    text: 'A limply spritzing fountain of unconvincing (and unfunny) tricks out of the how-to-write-a-comedy-hit manual.',
    author: { name: 'Owen Gleiberman', publication: 'Variety' }
  }, {
    id: 6,
    fresh: false,
    text: 'Come back, Daddy’s Home 2; all is forgiven!',
    author: { name: 'Tara Brady', publication: 'Irish Times' }
  }, {
    id: 7,
    fresh: false,
    text: 'Offensive, amateurish and should be avoided, then forgotten. Who’s the Daddy? Who cares?',
    author: { name: 'Linda Marric', publication: 'HeyUGuys' }
  }, {
    id: 8,
    fresh: false,
    text: 'A talented cast mostly sink with the ship in a so-called comedy that is desperately dull and uninspired, often feeling like yet another carbon copy of a film we’ve seen several times before.',
    author: { name: 'Allan Hunter', publication: 'Daily Express (UK)' }
  }, {
    id: 9,
    fresh: false,
    text: 'If you’re looking for laughs, look elsewhere.',
    author: { name: 'Ken McIntyre', publication: 'Total Film' }
  }, {
    id: 10,
    fresh: false,
    text: 'Wilson and Helms are the right leads for this odd couple tale of friction between a laidback bum and his uptight sibling, but the central conceit (that women enjoying sexual freedom is funny) no longer passes for a joke.',
    author: { name: 'Eddie Harrison', publication: 'The List' }
  }, {
    id: 11,
    fresh: false,
    text: 'This almost totally fails as a comedy, with broad, unfunny, dumb jokes (such as Wilson and a young boy urinating on each other), though it’s marginally better during the goopy, heartwarming parts.',
    author: { name: 'Jeffrey M. Anderson', publication: 'Common Sense Media' }
  }],
  6: [{
    id: 0,
    fresh: false,
    text: 'The story is thin, allowing little room for imaginative engagement, and the comedy uninspired. Early Man contains a nice anti-sexism message, but delivers it half-heartedly.',
    author: { name: 'Ben Sachs', publication: 'Chicago Reader' }
  }, {
    id: 1,
    fresh: false,
    text: 'Aardman is a haven for creatures that hail from other species but match us or even outstrip us in proficiency and grace. Early Man, though, is stuffed with men and women...whereas the beasts of the field and the fowls of the air are reduced to extras.',
    author: { name: 'Anthony Lane', publication: 'New Yorker' }
  }, {
    id: 2,
    fresh: true,
    text: 'At least there’s director Nick Park’s playful Silly Putty visual imagination to take your mind off just how thin the story is.',
    author: { name: 'Chris Nashawaty', publication: 'Entertainment Weekly' }
  }, {
    id: 3,
    fresh: false,
    text: 'Mostly, “Early Man” plays like an overstuffed episode of “The Flintstones,” riffing on caveman accessories, as well as soccer fandom and hooliganism.',
    author: { name: 'Brian Lowry', publication: 'CNN.com' }
  }, {
    id: 4,
    fresh: true,
    text: 'There’s a quaintness about the film, from the animation style to the wholesome jokes, that is refreshing for this pop-culture-obsessed animation era.',
    author: { name: 'Fraser Abe', publication: 'Globe and Mail' }
  }, {
    id: 5,
    fresh: true,
    text: 'If just hearing animator Nick Park’s name doesn’t bring an anticipatory smile to your face, watching a few minutes of the thoroughly amusing “Early Man” will do the trick.',
    author: { name: 'Kenneth Turan', publication: 'Los Angeles Times' }
  }, {
    id: 6,
    fresh: true,
    text: 'In the end, the great charm of the film is that it will seduce fans... and football opponents alike.',
    author: { name: 'Carlos Del Río', publication: 'Cine Premiere' }
  }, {
    id: 7,
    fresh: true,
    text: '...lovable characters and humor so innocent some may see it as demodé. [Full Review in Spanish]',
    author: { name: 'Néstor Burtone', publication: 'Otroscines.com' }
  }, {
    id: 8,
    fresh: true,
    text: 'While not quite up to Wallace and Gromit levels of stop-motion sophistication, Aardman Animations’ Early Man assays a delightfully handcrafted, peculiarly British trip back in time, and one that will tickle the wee ones...',
    author: { name: 'Ken Eisner', publication: 'Georgia Straight' }
  }, {
    id: 9,
    fresh: true,
    text: 'Might not be a particularly impressive film, and it darn sure isn’t a surprising film, but it is a wonderfully pleasant & pleasurable film.',
    author: { name: 'Tim Brayton', publication: 'Alternate Ending' }
  }, {
    id: 10,
    fresh: false,
    text: 'Silly and derivative, it’s a bit of a primeval disappointment.',
    author: { name: 'Susan Granger', publication: 'SSG Syndicate' }
  }, {
    id: 11,
    fresh: true,
    text: 'Early Man is technically-impressive and boasts strong visuals, but its simple story holds it back from reaching its full potential.',
    author: { name: 'Chris Agar', publication: 'ScreenRant' }
  }]
};
/* harmony export (immutable) */ __webpack_exports__["b"] = movieReviews;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server_suspense__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server_suspense___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server_suspense__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App__ = __webpack_require__(64);











const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));

const openDocumentHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="/index.css"> 
</head>
<body>
`;

const closeDocumentHTML = `
</body>
</html>
`;

app.use((req, res, next) => {
  const delayMsParam = req.query.delay_ms;
  if (delayMsParam !== undefined) {
    const delayMs = Number(delayMsParam);
    setTimeout(next, delayMs);
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.write(openDocumentHTML);
  const App = Object(__WEBPACK_IMPORTED_MODULE_5__App__["a" /* default */])(req.query);
  const stream = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server_suspense__["renderToNodeStream"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, null));
  stream.pipe(res);
  stream.on('finish', () => {
    res.write(closeDocumentHTML);
    res.end();
  });
});

app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  const movie = __WEBPACK_IMPORTED_MODULE_3__data__["a" /* movieDetails */][id];
  if (movie === undefined) {
    res.status(404).json({ msg: 'Movie not found.' });
    return;
  }
  res.json(movie);
});

app.get('/movies/:id/reviews', (req, res) => {
  const id = req.params.id;
  const reviews = __WEBPACK_IMPORTED_MODULE_3__data__["b" /* movieReviews */][id];
  if (reviews === undefined) {
    res.status(404).json({ msg: 'Movie not found.' });
    return;
  }
  res.json(reviews);
});

app.listen(3000);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(15);
var invariant = __webpack_require__(1);
var emptyObject = __webpack_require__(6);
var warning = __webpack_require__(0);
var emptyFunction = __webpack_require__(3);
var checkPropTypes = __webpack_require__(4);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.3.2';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol['for']('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

// Exports ReactDOM.createRoot


// Mutating mode (React DOM, React ART, React Native):

// Experimental noop mode (currently unused):

// Experimental persistent mode (Fabric):

// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense
var enableSuspense = true;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Only used in www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    _changedBits: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;

  {
    context._currentRenderer = null;
  }

  return context;
}

function forwardRef(render) {
  {
    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warning(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_CALL_TYPE:
      return 'ReactCall';
    case REACT_RETURN_TYPE:
      return 'ReactReturn';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

{
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    !componentClass.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

if (enableSuspense) {
  React.Timeout = REACT_TIMEOUT_TYPE;
}

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var ReactSuspenseServerRenderer = __webpack_require__(28);

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
module.exports = ReactSuspenseServerRenderer['default'] ? ReactSuspenseServerRenderer['default'] : ReactSuspenseServerRenderer;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["ReactHTMLStream"] = ReactHTMLStream;
/* harmony export (immutable) */ __webpack_exports__["renderToNodeStream"] = renderToNodeStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stream__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_stream__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_DOMNamespaces__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_omittedCloseTags__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ReactPartialRenderer__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__react_reconciler_src_ReactTypeOfMode__ = __webpack_require__(62);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 /**
                                    * Copyright (c) 2013-present, Facebook, Inc.
                                    *
                                    * This source code is licensed under the MIT license found in the
                                    * LICENSE file in the root directory of this source tree.
                                    *
                                    * 
                                    */











var isArray = Array.isArray;

var Pending = 0;
var PendingChildren = 1;
var Suspended = 2;
var Complete = 3;

var GLOBAL_TIMEOUT_MS = 5000;

var EMPTY_ID = 0;
var ROOT_BOUNDARY_ID = 1;

function ReactHTMLStream(stream, rootNode) {
  // 0 is reserved for empty, and 1 is reserved for the root boundary ID,
  var idCounter = 2;

  var currentTimeMs = Date.now();

  var rootChunk = createChunk(__WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["e" /* HostRoot */]);
  rootChunk.props = rootNode;
  rootChunk.hostContext = __WEBPACK_IMPORTED_MODULE_4__shared_DOMNamespaces__["a" /* Namespaces */].html;
  rootChunk.timeoutMs = GLOBAL_TIMEOUT_MS;

  var rootBoundary = createBoundary(rootChunk, currentTimeMs);
  rootBoundary.id = ROOT_BOUNDARY_ID;

  var pendingBoundaries = new Set([rootBoundary]);

  renderBoundary(rootBoundary);

  function createUniqueId() {
    return idCounter++;
  }

  // function abort() {
  //   stream.closeChunk();
  // }

  function createBoundary(chunk, startTimeMs) {
    return {
      id: EMPTY_ID,
      startTimeMs: startTimeMs,
      child: chunk
    };
  }

  function createChunk(tag) {
    return {
      tag: tag,
      type: null,
      id: EMPTY_ID,

      props: null,
      state: null,

      'return': null,

      children: null,

      status: Pending,

      stateNode: null,

      hasEffect: false,
      effects: null,

      shouldRestart: false,

      timeoutMs: 0,
      hostContext: 'TODO',
      legacyContext: null
    };
  }

  function cloneChunk(chunk) {
    return {
      tag: chunk.tag,
      type: chunk.type,
      id: chunk.id,

      props: chunk.props,
      state: chunk.state,

      'return': chunk['return'],

      children: chunk.children,

      status: Pending,

      stateNode: chunk.stateNode,

      hasEffect: false,
      effects: null,

      shouldRestart: false,

      timeoutMs: 0,
      hostContext: 'TODO',
      legacyContext: chunk.legacyContext
    };
  }

  function renderHostRoot(boundary, chunk, typeOfWork, type, props, state, hostContext, legacyContext) {
    var startTimeMs = boundary.startTimeMs;
    if (currentTimeMs - startTimeMs >= GLOBAL_TIMEOUT_MS) {
      return null;
    }
    return renderChild(boundary, chunk, props, state, hostContext, legacyContext);
  }

  function shouldConstruct(Component) {
    return Component.prototype && Component.prototype.isReactComponent;
  }

  function renderFunctionalComponent(boundary, chunk, type, props, hostContext, legacyContext) {
    // TODO: Context
    var children = type(props, null);
    renderChild(boundary, chunk, children, null, hostContext, legacyContext);
  }

  function getStateFromUpdate(update, instance, prevState, props) {
    var partialState = update.partialState;
    if (typeof partialState === 'function') {
      return partialState.call(instance, prevState, props);
    } else {
      return partialState;
    }
  }

  function renderClassComponent(boundary, chunk, Component, props, instance, hostContext, legacyContext) {
    if (instance === null) {
      var updater = {
        queue: [],
        isMounted: function (publicInstance) {
          return false;
        },
        enqueueForceUpdate: function (publicInstance) {
          if (instance.updater !== updater) {
            // warnNoop(publicInstance, 'forceUpdate');
            return null;
          }
        },
        enqueueReplaceState: function (publicInstance, completeState) {
          if (instance.updater !== updater) {
            // warnNoop(publicInstance, 'setState');
            return null;
          }
          updater.queue.push({ partialState: completeState, isReplace: true });
        },
        enqueueSetState: function (publicInstance, partialState) {
          if (instance.updater !== updater) {
            return null;
          }
          updater.queue.push({ partialState: partialState, isReplace: false });
        }
      };
      instance = new Component(props, legacyContext, updater);
      if (instance.state === undefined) {
        instance.state = null;
      }
    }

    // Call getDerivedStateFromProps
    if (typeof Component.getDerivedStateFromProps === 'function') {
      var derivedState = Component.getDerivedStateFromProps.call(null, props, instance.state);

      if (derivedState !== null && derivedState !== undefined) {
        instance.state = Object.assign({}, instance.state, derivedState);
      }
    } else if (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function') {
      if (typeof instance.componentWillMount === 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        instance.componentWillMount();
      }
      if (typeof instance.UNSAFE_componentWillMount === 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        instance.UNSAFE_componentWillMount();
      }
      // Process the update queue
      var queue = instance.updater.queue;
      if (queue.length > 0) {
        var _state = instance.state;
        var dontMutatePrevState = true;
        for (var i = 0; i < queue.length; i++) {
          var update = queue[i];
          var partialState = void 0;
          if (update.isReplace) {
            _state = getStateFromUpdate(update, instance, _state, props);
            dontMutatePrevState = true;
          } else {
            partialState = getStateFromUpdate(update, instance, _state, props);
            if (partialState) {
              if (dontMutatePrevState) {
                // $FlowFixMe: Idk how to type this properly.
                _state = Object.assign({}, _state, partialState);
              } else {
                _state = Object.assign(_state, partialState);
              }
              dontMutatePrevState = false;
            }
          }
        }
        queue.length = 0;
        instance.state = _state;
      }
    }

    var children = instance.render();
    renderChild(boundary, chunk, children, null, hostContext, legacyContext);
  }

  function renderDOMNode(boundary, chunk, elementType, props, parentHostContext, legacyContext) {
    var tag = elementType.toLowerCase();

    var hostContext = parentHostContext === __WEBPACK_IMPORTED_MODULE_4__shared_DOMNamespaces__["a" /* Namespaces */].html ? Object(__WEBPACK_IMPORTED_MODULE_4__shared_DOMNamespaces__["c" /* getIntrinsicNamespace */])(tag) : parentHostContext;

    var opening = Object(__WEBPACK_IMPORTED_MODULE_6__ReactPartialRenderer__["a" /* createOpenTagMarkup */])(elementType, tag, props, hostContext, true, false);
    var closing = '';
    if (__WEBPACK_IMPORTED_MODULE_5__shared_omittedCloseTags__["a" /* default */].hasOwnProperty(tag)) {
      opening += '/>';
    } else {
      opening += '>';
      closing = '</' + elementType + '>';
    }
    stream.openChild(opening, closing);
    // TODO: Host context
    renderChild(boundary, chunk, props.children, null, hostContext, legacyContext);
    stream.closeChild();
  }

  function renderText(text) {
    stream.openChild(text, null);
    stream.closeChild();
  }

  function renderArray(boundary, chunk, array, hostContext, legacyContext) {
    for (var i = 0; i < array.length; i++) {
      var childNode = array[i];
      renderChild(boundary, chunk, childNode, null, hostContext, legacyContext);
    }
  }

  function renderTimeout(boundary, chunk, props, hostContext, legacyContext) {
    var timeoutPropMs = props.ms;
    if (chunk.props !== props) {
      // Timeout components are split into their own chunks.
      // TODO: Is there a better way to check if we're at the top of the stack?
      var childChunk = createChunk(__WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["g" /* TimeoutComponent */]);
      childChunk['return'] = chunk;
      var childChunkId = createUniqueId();
      childChunk.id = childChunkId;
      childChunk.props = props;
      // Indicates that we have not tried rendering this Timeout yet
      childChunk.state = false;

      // Create a boundary
      var timeoutBoundary = createBoundary(null, currentTimeMs);
      timeoutBoundary.id = createUniqueId();
      childChunk.stateNode = timeoutBoundary;

      var parentTimeoutMs = chunk.timeoutMs;
      childChunk.timeoutMs = typeof timeoutPropMs === 'number' && timeoutPropMs < parentTimeoutMs ? timeoutPropMs : parentTimeoutMs;

      stream.openBoundary(timeoutBoundary.id);
      stream.insertSlot(createUniqueId());
      stream.closeBoundary();

      // Add the chunk to the parent
      var _children = chunk.children;
      if (_children === null) {
        chunk.children = [childChunk];
      } else {
        _children.push(childChunk);
      }
      return;
    }

    var render = props.children;
    var didTimeout = chunk.state;
    var children = render(didTimeout);
    renderChild(boundary, chunk, children, null, hostContext, legacyContext);
  }

  function retry(boundary, sourceChunk) {
    sourceChunk.status = Pending;
    renderBoundary(boundary);
  }

  function awaitAndRetryBoundary(promise, boundary, sourceChunk) {
    promise.then(function () {
      retry(boundary, sourceChunk);
    });
  }

  function throwException(boundary, sourceChunk, returnChunk, node, state, hostContext, legacyContext, value) {
    if (value !== null && typeof value === 'object' && typeof value.then === 'function') {
      // This is a thenable.
      var promise = value;
      var _startTimeMs = boundary.startTimeMs;
      var elapsedTimeMs = currentTimeMs - _startTimeMs;
      var _timeoutMs = returnChunk.timeoutMs;
      var didTimeout = elapsedTimeMs >= _timeoutMs;
      if (didTimeout) {
        var chunk = returnChunk;
        do {
          switch (chunk.tag) {
            case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["g" /* TimeoutComponent */]:
              {
                var timeoutBoundary = chunk.stateNode;
                var didAlreadyTimeout = chunk.state;
                if (!didAlreadyTimeout) {
                  if (timeoutBoundary.child === null) {
                    // Create a new chunk by cloning this one
                    var normalChild = cloneChunk(chunk);
                    normalChild.status = Pending;
                    // The new chunk is the root of a new boundary
                    normalChild['return'] = null;
                    timeoutBoundary.child = normalChild;

                    // The current chunk is now a placeholder. Resume rendering.
                    chunk.status = Pending;
                    chunk.state = true;
                    chunk.shouldRestart = true;
                  }
                  var effect = promise;
                  if (chunk.effects === null) {
                    chunk.effects = [effect];
                  } else {
                    chunk.effects.push(effect);
                  }
                  // Await the promise and retry the boundary
                  awaitAndRetryBoundary(promise, timeoutBoundary, sourceChunk);
                  return;
                } else {
                  boundary.startTimeMs = currentTimeMs;
                  awaitAndRetryBoundary(promise, timeoutBoundary, sourceChunk);
                  return;
                }
              }
          }
          chunk = chunk['return'];
        } while (chunk !== null);
        // TODO: The root expired, but no fallback was provided. This is
        // an error.
        throw new Error('Missing timeout');
      } else {
        promise.then(function () {
          retry(boundary, sourceChunk);
        });
        setTimeout(function () {
          retry(boundary, sourceChunk);
        }, _timeoutMs);
      }
      return;
    }
    __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_warning___default()(false, 'TODO: Error handling yet implemented.');
    throw value;
  }

  function renderChildOfTypeImpl(boundary, chunk, typeOfWork, type, props, state, hostContext, legacyContext) {
    switch (typeOfWork) {
      case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["e" /* HostRoot */]:
        {
          return renderHostRoot(boundary, chunk, typeOfWork, type, props, state, hostContext, legacyContext);
        }
      case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["d" /* HostComponent */]:
        {
          return renderDOMNode(boundary, chunk, type, props, hostContext, legacyContext);
        }
      case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["f" /* HostText */]:
        return renderText(props);
      case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["c" /* FunctionalComponent */]:
        {
          return renderFunctionalComponent(boundary, chunk, type, props, hostContext, legacyContext);
        }
      case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["a" /* ClassComponent */]:
        {
          return renderClassComponent(boundary, chunk, type, props, state, hostContext, legacyContext);
        }
      case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["b" /* Fragment */]:
      case __WEBPACK_IMPORTED_MODULE_8__react_reconciler_src_ReactTypeOfMode__["b" /* StrictMode */]:
      case __WEBPACK_IMPORTED_MODULE_8__react_reconciler_src_ReactTypeOfMode__["a" /* AsyncMode */]:
        {
          if (!Array.isArray(props)) {
            return renderChild(boundary, chunk, props, state, hostContext, legacyContext);
          }
          return renderArray(boundary, chunk, props, hostContext, legacyContext);
        }
      case __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["g" /* TimeoutComponent */]:
        {
          return renderTimeout(boundary, chunk, props, hostContext, legacyContext);
        }
      case null:
        // Treat as empty
        return;
    }
  }

  function renderChildOfType(boundary, chunk, typeOfWork, type, props, state, hostContext, legacyContext) {
    try {
      renderChildOfTypeImpl(boundary, chunk, typeOfWork, type, props, state, hostContext, legacyContext);
    } catch (thrownValue) {
      var childChunk = void 0;
      if (chunk.props === props) {
        childChunk = chunk;
      } else {
        childChunk = createChunk(typeOfWork);
        childChunk['return'] = chunk;
        childChunk.type = type;
        childChunk.props = props;
        childChunk.timeoutMs = chunk.timeoutMs;
        stream.insertSlot(createUniqueId());

        // Add the chunk to the parent
        chunk.status = PendingChildren;
        var _children2 = chunk.children;
        if (_children2 === null) {
          chunk.children = [childChunk];
        } else {
          _children2.push(childChunk);
        }
        var childChunkId = createUniqueId();
        childChunk.id = childChunkId;
      }

      // TODO: Only if this is a thenable
      childChunk.status = Suspended;

      throwException(boundary, childChunk, childChunk['return'], props, state, hostContext, legacyContext, thrownValue);
    }
  }

  function renderChild(boundary, chunk, child, state, hostContext, legacyContext) {
    var typeOfWork = void 0;
    var type = void 0;
    var props = void 0;

    var isObject = typeof child === 'object' && child !== null;
    if (isObject) {
      switch (child.$$typeof) {
        case __WEBPACK_IMPORTED_MODULE_1_shared_ReactSymbols__["d" /* REACT_ELEMENT_TYPE */]:
          {
            type = child.type;
            switch (typeof type) {
              case 'string':
                typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["d" /* HostComponent */];
                props = child.props;
                break;
              case 'function':
                if (shouldConstruct(type)) {
                  typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["a" /* ClassComponent */];
                  props = child.props;
                } else {
                  typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["c" /* FunctionalComponent */];
                  props = child.props;
                }
                break;
              default:
                {
                  switch (type) {
                    case __WEBPACK_IMPORTED_MODULE_1_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */]:
                      typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["b" /* Fragment */];
                      props = child.props.children;
                      break;
                    case __WEBPACK_IMPORTED_MODULE_1_shared_ReactSymbols__["j" /* REACT_STRICT_MODE_TYPE */]:
                      typeOfWork = __WEBPACK_IMPORTED_MODULE_8__react_reconciler_src_ReactTypeOfMode__["b" /* StrictMode */];
                      props = child.props.children;
                      break;
                    case __WEBPACK_IMPORTED_MODULE_1_shared_ReactSymbols__["a" /* REACT_ASYNC_MODE_TYPE */]:
                      {
                        typeOfWork = __WEBPACK_IMPORTED_MODULE_8__react_reconciler_src_ReactTypeOfMode__["a" /* AsyncMode */];
                        props = child.props.children;
                        break;
                      }
                    case __WEBPACK_IMPORTED_MODULE_1_shared_ReactSymbols__["k" /* REACT_TIMEOUT_TYPE */]:
                      {
                        typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["g" /* TimeoutComponent */];
                        props = child.props;
                        break;
                      }
                    default:
                      return null;
                  }
                }
            }
            break;
          }
        default:
          {
            type = null;
            if (isArray(child)) {
              typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["b" /* Fragment */];
              props = child;
              break;
            }
            return null;
          }
      }
    } else if (typeof child === 'string') {
      typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["f" /* HostText */];
      type = null;
      props = child;
    } else if (typeof child === 'number') {
      typeOfWork = __WEBPACK_IMPORTED_MODULE_7_shared_ReactTypeOfWork__["f" /* HostText */];
      type = null;
      props = child + '';
    } else {
      // Treat everything else as empty.
      return null;
    }

    renderChildOfType(boundary, chunk, typeOfWork, type, props, state, hostContext, legacyContext);
  }

  function renderChunk(boundary, chunk) {
    if (chunk.status === Pending) {
      var _id = createUniqueId();
      chunk.id = _id;
      chunk.children = null;
      stream.openChunk(_id);
      renderChildOfType(boundary, chunk, chunk.tag, chunk.type, chunk.props, chunk.state, chunk.hostContext, chunk.legacyContext);
      stream.closeChunk();
    }

    // Now work on the children, if they exist
    var children = chunk.children;
    if (children !== null) {
      var allChildrenDidComplete = true;
      for (var i = 0; i < children.length; i++) {
        var _child = children[i];
        if (_child.status !== Suspended) {
          renderChunk(boundary, _child);
        }
        if (_child.status !== Complete) {
          allChildrenDidComplete = false;
        }
      }
      if (chunk.shouldRestart) {
        renderChunk(boundary, chunk);
      } else {
        chunk.status = allChildrenDidComplete ? Complete : PendingChildren;
      }
    } else {
      chunk.status = Complete;
    }
  }

  function awaitAndStartBoundary(boundary, promise) {
    pendingBoundaries.add(boundary);
  }

  function commitChunk(chunk, chunkInfo) {
    var chunkChildren = chunk.children;
    if (chunkChildren !== null) {
      var chunkInfoChildren = chunkInfo[1];
      if (chunkInfoChildren === null) {
        chunkInfoChildren = chunkInfo[1] = [];
      }
      for (var i = 0; i < chunkChildren.length; i++) {
        var childChunk = chunkChildren[i];
        // Set the return pointer before starting on child.
        childChunk['return'] = chunk;
        var childChunkInfo = [childChunk.id, null];
        commitChunk(childChunk, childChunkInfo);
        chunkInfoChildren.push(childChunkInfo);
      }
    }
    var effects = chunk.effects;
    if (effects !== null) {
      for (var _i = 0; _i < effects.length; _i++) {
        var promise = effects[_i];
        var boundary = chunk.stateNode;
        awaitAndStartBoundary(boundary, promise);
      }
    }
  }

  function commitBoundary(boundary) {
    var chunk = boundary.child;
    var commitInfo = [chunk.id, null];
    commitChunk(chunk, commitInfo);
    stream.commit(boundary.id, commitInfo);
  }

  function renderBoundary(boundary) {
    if (!pendingBoundaries.has(boundary)) {
      // Already committed
      return;
    }

    currentTimeMs = Date.now();
    var child = boundary.child;
    renderChunk(boundary, child);
    if (child.status === Complete) {
      commitBoundary(boundary);
      pendingBoundaries['delete'](boundary);
      if (pendingBoundaries.size === 0) {
        stream.finish();
      }
    }
  }
}

var PREFIX = '_ssr';

var SLOT_PREFIX = PREFIX + '_s';
var BOUNDARY_PREFIX = PREFIX + '_b';

var STAGE = PREFIX + '_stage';

var BOUNDARY_MAP = PREFIX + '_boundaries';
var CHUNK_MAP = PREFIX + '_chunks';
var SLOT_MAP = PREFIX + '_slots';

var INIT = PREFIX + '_init';
var CREATE_COMMENT = PREFIX + '_createComment';
var GET_BY_ID = PREFIX + '_get';
var PROCESS_CHUNK = PREFIX + '_process';
var COMMIT = PREFIX + '_commit';
var FINISH = PREFIX + '_finish';

// TODO: Extract this to separate file and minify it
var runtime = '<script>\n' + GET_BY_ID + ' = document.getElementById.bind(document);\n' + STAGE + ' = ' + GET_BY_ID + '(\'' + STAGE + '\');\n' + CHUNK_MAP + ' = {};\n' + SLOT_MAP + ' = {};\n' + BOUNDARY_MAP + ' = {};\n' + CREATE_COMMENT + ' = function () {\n  return document.createComment(\'\');\n};\n' + PROCESS_CHUNK + ' = function (id, slotIds, boundaryIds, innerHTML) {\n  var container = document.createElement(\'div\');\n  container.innerHTML = innerHTML;\n  ' + STAGE + '.appendChild(container)\n  for (var i = 0; i < slotIds.length; i++) {\n    var slotId = slotIds[i];\n    var slot = ' + GET_BY_ID + '(\'' + SLOT_PREFIX + '\' + slotId);\n    ' + SLOT_MAP + '[slotId] = slot;\n  }\n  for (var i = 0; i < boundaryIds.length; i++) {\n    var boundaryId = boundaryIds[i];\n    var start = ' + GET_BY_ID + '(\'' + BOUNDARY_PREFIX + '\' + boundaryId + \'start\');\n    var parent = start.parentNode;\n    var startComment = ' + CREATE_COMMENT + '();\n    parent.insertBefore(startComment, start);\n    parent.removeChild(start);  \n    \n    var end = ' + GET_BY_ID + '(\'' + BOUNDARY_PREFIX + '\' + boundaryId + \'end\');\n    var parent = end.parentNode;\n    var endComment = ' + CREATE_COMMENT + '();\n    parent.insertBefore(endComment, end);\n    parent.removeChild(end);\n    \n    ' + BOUNDARY_MAP + '[boundaryId] = {\n      start: startComment,\n      end: endComment,\n    };\n  }\n  var fragment = document.createDocumentFragment();\n  while (container.firstChild !== null) {\n    fragment.appendChild(container.firstChild);\n  }\n  ' + CHUNK_MAP + '[id] = {\n    fragment: fragment,\n    slotIds: slotIds\n  };\n  ' + STAGE + '.removeChild(container);\n};\n' + COMMIT + ' = function (boundaryId, rootInfo) {\n  function commit(info, slot) {\n    var chunk = ' + CHUNK_MAP + '[info[0]];\n    slot.parentNode.insertBefore(chunk.fragment, slot);\n    slot.parentNode.removeChild(slot);\n    var children = info[1];\n    if (children !== null) {\n      var slotIds = chunk.slotIds;\n      for (var i = 0; i < children.length; i++) {\n        var childSlot = ' + SLOT_MAP + '[slotIds[i]];\n        commit(children[i], childSlot);\n      }\n    }\n  }\n\n  var boundary = ' + BOUNDARY_MAP + '[boundaryId];\n  var start = boundary.start;\n  var end = boundary.end;\n  var parent = start.parentNode;\n  while (start.nextSibling !== end) {\n    parent.removeChild(start.nextSibling);\n  }\n  var stage = ' + STAGE + ';\n  var boundarySlot = document.createElement(\'span\');\n  parent.insertBefore(boundarySlot, end);\n  commit(rootInfo, boundarySlot);\n}\n' + FINISH + ' = function () {\n  var stage = ' + STAGE + ';  \n  stage.parentNode.removeChild(stage);\n}\n' + INIT + ' = function() {\n  var stage = ' + STAGE + ';  \n  var parent = stage.parentNode;\n  var rootStart = ' + CREATE_COMMENT + '();\n  var rootEnd = ' + CREATE_COMMENT + '();\n  parent.insertBefore(rootStart, stage);\n  parent.insertBefore(rootEnd, stage);\n  ' + BOUNDARY_MAP + '[' + ROOT_BOUNDARY_ID + '] = {\n    start: rootStart,\n    end: rootEnd,\n  };\n}\n' + INIT + '();\n</script>';

function renderToNodeStream(children) {
  var ReadableImpl = function (_Readable) {
    _inherits(ReadableImpl, _Readable);

    function ReadableImpl() {
      _classCallCheck(this, ReadableImpl);

      return _possibleConstructorReturn(this, _Readable.apply(this, arguments));
    }

    ReadableImpl.prototype._read = function _read() {};

    return ReadableImpl;
  }(__WEBPACK_IMPORTED_MODULE_0_stream__["Readable"]);

  var nodeStream = new ReadableImpl();

  var currentBoundaryId = 0;
  var currentChunkId = 0;
  var boundaryIds = [];
  var closingTags = [];
  var slotIds = [];
  var didFinish = false;

  var bufferedChunk = '';

  var stream = {
    openBoundary: function (boundaryId) {
      currentBoundaryId = boundaryId;
      bufferedChunk += '<span id="' + (BOUNDARY_PREFIX + boundaryId) + 'start"></span>';
    },
    openChunk: function (id) {
      currentChunkId = id;
    },
    openChild: function (opening, closing) {
      bufferedChunk += opening;
      closingTags.push(closing);
    },
    insertSlot: function (slotId) {
      slotIds.push(slotId);
      bufferedChunk += '<div id="' + (SLOT_PREFIX + slotId) + '"></div>';
    },
    closeChild: function () {
      var closingTag = closingTags.pop();
      if (closingTag !== null) {
        bufferedChunk += closingTag;
      }
    },
    closeChunk: function () {
      var html = bufferedChunk;
      bufferedChunk = '';
      nodeStream.push('<script>window.' + PROCESS_CHUNK + '(\'' + currentChunkId + '\', ' + JSON.stringify(slotIds) + ', ' + JSON.stringify(boundaryIds) + ', ' + JSON.stringify(html) + ')</script>');
      currentChunkId = 0;
      slotIds = [];
      boundaryIds = [];
    },
    closeBoundary: function () {
      var boundaryId = currentBoundaryId;
      currentBoundaryId = 0;
      bufferedChunk += '<span id="' + (BOUNDARY_PREFIX + boundaryId) + 'end"></span>';
      boundaryIds.push(boundaryId);
    },
    commit: function (boundaryId, commitLog) {
      nodeStream.push('<script>window.' + COMMIT + '(' + boundaryId + ', ' + JSON.stringify(commitLog) + ')</script>');
    },
    finish: function () {
      if (didFinish) {
        return;
      }
      didFinish = true;
      nodeStream.push('<script>window.' + FINISH + '()</script>');
      nodeStream.push('</div>');
      nodeStream.push(null);
    }
  };

  nodeStream.push('<div id="' + STAGE + '">');
  nodeStream.push(runtime);
  ReactHTMLStream(stream, children);
  return nodeStream;
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createOpenTagMarkup;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_emptyFunction__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_emptyFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_emptyFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_emptyObject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_emptyObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_emptyObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_hyphenateStyleName__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_hyphenateStyleName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fbjs_lib_hyphenateStyleName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_lowPriorityWarning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_memoizeStringOnly__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_memoizeStringOnly___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fbjs_lib_memoizeStringOnly__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types_checkPropTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types_checkPropTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types_checkPropTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_shared_describeComponentFrame__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_shared_ReactGlobalSharedState__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_shared_ReactFeatureFlags__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__DOMMarkupOperations__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__escapeTextForBrowser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_DOMNamespaces__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_ReactControlledValuePropTypes__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_assertValidProps__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_dangerousStyleValue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_isCustomComponent__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_omittedCloseTags__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_warnValidStyle__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_ReactDOMInvalidARIAHook__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_ReactDOMNullInputValuePropHook__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_ReactDOMUnknownPropertyHook__ = __webpack_require__(58);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




























// Based on reading the React.Children implementation. TODO: type this somewhere?

var toArray = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.toArray;

var currentDebugStack = void 0;
var currentDebugElementStack = void 0;

var getStackAddendum = __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_emptyFunction___default.a.thatReturns('');
var describeStackFrame = __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_emptyFunction___default.a.thatReturns('');

var validatePropertiesInDevelopment = function (type, props) {};
var setCurrentDebugStack = function (stack) {};
var pushElementToDebugStack = function (element) {};
var resetCurrentDebugStack = function () {};

if (true) {
  validatePropertiesInDevelopment = function (type, props) {
    Object(__WEBPACK_IMPORTED_MODULE_22__shared_ReactDOMInvalidARIAHook__["a" /* validateProperties */])(type, props);
    Object(__WEBPACK_IMPORTED_MODULE_23__shared_ReactDOMNullInputValuePropHook__["a" /* validateProperties */])(type, props);
    Object(__WEBPACK_IMPORTED_MODULE_24__shared_ReactDOMUnknownPropertyHook__["a" /* validateProperties */])(type, props, /* canUseEventSystem */false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return Object(__WEBPACK_IMPORTED_MODULE_9_shared_describeComponentFrame__["a" /* default */])(name, source, ownerName);
  };

  currentDebugStack = null;
  currentDebugElementStack = null;
  setCurrentDebugStack = function (stack) {
    var frame = stack[stack.length - 1];
    currentDebugElementStack = frame.debugElementStack;
    // We are about to enter a new composite stack, reset the array.
    currentDebugElementStack.length = 0;
    currentDebugStack = stack;
    __WEBPACK_IMPORTED_MODULE_10_shared_ReactGlobalSharedState__["a" /* ReactDebugCurrentFrame */].getCurrentStack = getStackAddendum;
  };
  pushElementToDebugStack = function (element) {
    if (currentDebugElementStack !== null) {
      currentDebugElementStack.push(element);
    }
  };
  resetCurrentDebugStack = function () {
    currentDebugElementStack = null;
    currentDebugStack = null;
    __WEBPACK_IMPORTED_MODULE_10_shared_ReactGlobalSharedState__["a" /* ReactDebugCurrentFrame */].getCurrentStack = null;
  };
  getStackAddendum = function () {
    if (currentDebugStack === null) {
      return '';
    }
    var stack = '';
    var debugStack = currentDebugStack;
    for (var i = debugStack.length - 1; i >= 0; i--) {
      var frame = debugStack[i];
      var _debugElementStack = frame.debugElementStack;
      for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(_debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

function getComponentName(type) {
  return typeof type === 'string' ? type : typeof type === 'function' ? type.displayName || type.name : null;
}

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag);
    validatedTagCache[tag] = true;
  }
}

var processStyleName = __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_memoizeStringOnly___default()(function (styleName) {
  return __WEBPACK_IMPORTED_MODULE_3_fbjs_lib_hyphenateStyleName___default()(styleName);
});

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    if (true) {
      if (!isCustomProperty) {
        Object(__WEBPACK_IMPORTED_MODULE_21__shared_warnValidStyle__["a" /* default */])(styleName, styleValue, getStackAddendum);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += Object(__WEBPACK_IMPORTED_MODULE_18__shared_dangerousStyleValue__["a" /* default */])(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  if (true) {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return Object(__WEBPACK_IMPORTED_MODULE_14__escapeTextForBrowser__["a" /* default */])(content);
    }
  }
  return null;
}

function flattenTopLevelChildren(children) {
  if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(children)) {
    return toArray(children);
  }
  var element = children;
  if (element.type !== __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */]) {
    return [element];
  }
  var fragmentChildren = element.props.children;
  if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    if (typeof child === 'string' || typeof child === 'number') {
      content += child;
    } else {
      if (true) {
        if (!didWarnInvalidOptionChildren) {
          didWarnInvalidOptionChildren = true;
          __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, 'Only strings and numbers are supported as <option> children.');
        }
      }
    }
  });
  return content;
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_emptyObject___default.a;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  if (true) {
    __WEBPACK_IMPORTED_MODULE_8_prop_types_checkPropTypes___default()(typeSpecs, values, location, 'Component', getStackAddendum);
  }
}

function processContext(type, context) {
  var maskedContext = maskContext(type, context);
  if (true) {
    if (type.contextTypes) {
      checkContextTypes(type.contextTypes, maskedContext, 'context');
    }
  }
  return maskedContext;
}

var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!props.hasOwnProperty(propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    var markup = null;
    if (Object(__WEBPACK_IMPORTED_MODULE_19__shared_isCustomComponent__["a" /* default */])(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = Object(__WEBPACK_IMPORTED_MODULE_13__DOMMarkupOperations__["a" /* createMarkupForCustomAttribute */])(propKey, propValue);
      }
    } else {
      markup = Object(__WEBPACK_IMPORTED_MODULE_13__DOMMarkupOperations__["b" /* createMarkupForProperty */])(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + Object(__WEBPACK_IMPORTED_MODULE_13__DOMMarkupOperations__["c" /* createMarkupForRoot */])();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(false, '%s(...): Nothing was returned from render. This usually means a ' + 'return statement is missing. Or, to render nothing, ' + 'return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context) {
  while (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;
    if (true) {
      pushElementToDebugStack(element);
    }
    if (typeof Component !== 'function') {
      break;
    }
    processChild(element, Component);
  }

  // Extra closure so queue and replace can be captured properly
  function processChild(element, Component) {
    var publicContext = processContext(Component, context);

    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(currentPartialState);
      }
    };

    var inst = void 0;
    if (shouldConstruct(Component)) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        if (true) {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUninitializedState[componentName]) {
              __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, '%s: Did not properly initialize state during construction. ' + 'Expected state to be an object, but it was %s.', componentName, inst.state === null ? 'null' : 'undefined');
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        if (true) {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = Object.assign({}, inst.state, partialState);
        }
      }
    } else {
      if (true) {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }
      inst = Component(element.props, publicContext, updater);
      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        if (true) {
          if (__WEBPACK_IMPORTED_MODULE_11_shared_ReactFeatureFlags__["b" /* warnAboutDeprecatedLifecycles */] && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName3 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
              Object(__WEBPACK_IMPORTED_MODULE_5_shared_lowPriorityWarning__["a" /* default */])(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
              didWarnAboutDeprecatedWillMount[_componentName3] = true;
            }
          }
        }

        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }
      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = Object.assign({}, nextState, _partialState);
              } else {
                Object.assign(nextState, _partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    if (true) {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext = void 0;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      if (typeof childContextTypes === 'object') {
        childContext = inst.getChildContext();
        for (var contextKey in childContext) {
          __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(contextKey in childContextTypes, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey);
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
      }
    }
    if (childContext) {
      context = Object.assign({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var flatChildren = flattenTopLevelChildren(children);

    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: __WEBPACK_IMPORTED_MODULE_15__shared_DOMNamespaces__["a" /* Namespaces */].html,
      children: flatChildren,
      childIndex: 0,
      context: __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_emptyObject___default.a,
      footer: ''
    };
    if (true) {
      topFrame.debugElementStack = [];
    }
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;

    // Context (new API)
    this.providerStack = []; // Stack of provider objects
    this.providerIndex = -1;
  }
  // TODO: type this more strictly:


  ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
    this.providerIndex += 1;
    this.providerStack[this.providerIndex] = provider;
    var context = provider.type._context;
    context._currentValue = provider.props.value;
  };

  ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
    if (true) {
      __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(this.providerIndex > -1 && provider === this.providerStack[this.providerIndex], 'Unexpected pop.');
    }
    this.providerStack[this.providerIndex] = null;
    this.providerIndex -= 1;
    var context = provider.type._context;
    if (this.providerIndex < 0) {
      context._currentValue = context._defaultValue;
    } else {
      // We assume this type is correct because of the index check above.
      var previousProvider = this.providerStack[this.providerIndex];
      context._currentValue = previousProvider.props.value;
    }
  };

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var out = '';
    while (out.length < bytes) {
      if (this.stack.length === 0) {
        this.exhausted = true;
        break;
      }
      var frame = this.stack[this.stack.length - 1];
      if (frame.childIndex >= frame.children.length) {
        var _footer = frame.footer;
        out += _footer;
        if (_footer !== '') {
          this.previousWasTextNode = false;
        }
        this.stack.pop();
        if (frame.type === 'select') {
          this.currentSelectValue = null;
        } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["h" /* REACT_PROVIDER_TYPE */]) {
          var provider = frame.type;
          this.popProvider(provider);
        }
        continue;
      }
      var child = frame.children[frame.childIndex++];
      if (true) {
        setCurrentDebugStack(this.stack);
      }
      out += this.render(child, frame.context, frame.domNamespace);
      if (true) {
        // TODO: Handle reentrant server render calls. This doesn't.
        resetCurrentDebugStack();
      }
    }
    return out;
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return Object(__WEBPACK_IMPORTED_MODULE_14__escapeTextForBrowser__["a" /* default */])(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + Object(__WEBPACK_IMPORTED_MODULE_14__escapeTextForBrowser__["a" /* default */])(text);
      }
      this.previousWasTextNode = true;
      return Object(__WEBPACK_IMPORTED_MODULE_14__escapeTextForBrowser__["a" /* default */])(text);
    } else {
      var nextChild = void 0;

      var _resolve = resolve(child, context);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;
          __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()($$typeof !== __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["g" /* REACT_PORTAL_TYPE */], 'Portals are not currently supported by the server renderer. ' + 'Render them conditionally so that they only appear on the client render.');
          // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
          __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(false, 'Unknown element-like object type: %s. This is likely a bug in React. ' + 'Please file an issue.', $$typeof.toString());
        }
        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        if (true) {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        return '';
      }
      // Safe because we just checked it's an element.
      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["j" /* REACT_STRICT_MODE_TYPE */]:
        case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["a" /* REACT_ASYNC_MODE_TYPE */]:
        case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */]:
          {
            var _nextChildren = toArray(nextChild.props.children);
            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            if (true) {
              _frame.debugElementStack = [];
            }
            this.stack.push(_frame);
            return '';
          }
        case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["b" /* REACT_CALL_TYPE */]:
        case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["i" /* REACT_RETURN_TYPE */]:
          __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(false, 'The experimental Call and Return types are not currently ' + 'supported by the server renderer.');
        // eslint-disable-next-line-no-fallthrough
        default:
          break;
      }
      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["e" /* REACT_FORWARD_REF_TYPE */]:
            {
              var element = nextChild;
              var _nextChildren2 = toArray(elementType.render(element.props, element.ref));
              var _frame2 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: ''
              };
              if (true) {
                _frame2.debugElementStack = [];
              }
              this.stack.push(_frame2);
              return '';
            }
          case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["h" /* REACT_PROVIDER_TYPE */]:
            {
              var provider = nextChild;
              var nextProps = provider.props;
              var _nextChildren3 = toArray(nextProps.children);
              var _frame3 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren3,
                childIndex: 0,
                context: context,
                footer: ''
              };
              if (true) {
                _frame3.debugElementStack = [];
              }

              this.pushProvider(provider);

              this.stack.push(_frame3);
              return '';
            }
          case __WEBPACK_IMPORTED_MODULE_12_shared_ReactSymbols__["c" /* REACT_CONTEXT_TYPE */]:
            {
              var consumer = nextChild;
              var _nextProps = consumer.props;
              var nextValue = consumer.type._currentValue;

              var _nextChildren4 = toArray(_nextProps.children(nextValue));
              var _frame4 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };
              if (true) {
                _frame4.debugElementStack = [];
              }
              this.stack.push(_frame4);
              return '';
            }
          default:
            break;
        }
      }

      var info = '';
      if (true) {
        var owner = nextElement._owner;
        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }
        var ownerName = owner ? getComponentName(owner) : null;
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }
      __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(false, 'Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + 'but got: %s.%s', elementType == null ? elementType : typeof elementType, info);
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === __WEBPACK_IMPORTED_MODULE_15__shared_DOMNamespaces__["a" /* Namespaces */].html) {
      namespace = Object(__WEBPACK_IMPORTED_MODULE_15__shared_DOMNamespaces__["c" /* getIntrinsicNamespace */])(tag);
    }

    if (true) {
      if (namespace === __WEBPACK_IMPORTED_MODULE_15__shared_DOMNamespaces__["a" /* Namespaces */].html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(tag === element.type, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      if (true) {
        __WEBPACK_IMPORTED_MODULE_16__shared_ReactControlledValuePropTypes__["a" /* default */].checkPropTypes('input', props, getStackAddendum);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = Object.assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      if (true) {
        __WEBPACK_IMPORTED_MODULE_16__shared_ReactControlledValuePropTypes__["a" /* default */].checkPropTypes('textarea', props, getStackAddendum);
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          if (true) {
            __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(defaultValue == null, 'If you supply `defaultValue` on a <textarea>, do not pass children.');
          if (Array.isArray(textareaChildren)) {
            __WEBPACK_IMPORTED_MODULE_4_fbjs_lib_invariant___default()(textareaChildren.length <= 1, '<textarea> can only have at most one child.');
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = Object.assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      if (true) {
        __WEBPACK_IMPORTED_MODULE_16__shared_ReactControlledValuePropTypes__["a" /* default */].checkPropTypes('select', props, getStackAddendum);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, '' // getDeclarationErrorAddendum(),
            );
          } else if (!props.multiple && isArray) {
            __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, '' // getDeclarationErrorAddendum(),
            );
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          __WEBPACK_IMPORTED_MODULE_7_fbjs_lib_warning___default()(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = Object.assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value = void 0;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = Object.assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    if (true) {
      validatePropertiesInDevelopment(tag, props);
    }

    Object(__WEBPACK_IMPORTED_MODULE_17__shared_assertValidProps__["a" /* default */])(tag, props, getStackAddendum);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';
    if (__WEBPACK_IMPORTED_MODULE_20__shared_omittedCloseTags__["a" /* default */].hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children = void 0;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: Object(__WEBPACK_IMPORTED_MODULE_15__shared_DOMNamespaces__["b" /* getChildNamespace */])(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    if (true) {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (ReactDOMServerRenderer);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_ReactVersion__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_ReactVersion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_shared_ReactVersion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_ReactFeatureFlags__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ReactBaseClasses__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReactCreateRef__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ReactChildren__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ReactCurrentOwner__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ReactElement__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ReactContext__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forwardRef__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ReactElementValidator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ReactDebugCurrentFrame__ = __webpack_require__(11);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
















var React = {
  Children: {
    map: __WEBPACK_IMPORTED_MODULE_6__ReactChildren__["c" /* map */],
    forEach: __WEBPACK_IMPORTED_MODULE_6__ReactChildren__["b" /* forEach */],
    count: __WEBPACK_IMPORTED_MODULE_6__ReactChildren__["a" /* count */],
    toArray: __WEBPACK_IMPORTED_MODULE_6__ReactChildren__["e" /* toArray */],
    only: __WEBPACK_IMPORTED_MODULE_6__ReactChildren__["d" /* only */]
  },

  createRef: __WEBPACK_IMPORTED_MODULE_5__ReactCreateRef__["a" /* createRef */],
  Component: __WEBPACK_IMPORTED_MODULE_4__ReactBaseClasses__["a" /* Component */],
  PureComponent: __WEBPACK_IMPORTED_MODULE_4__ReactBaseClasses__["b" /* PureComponent */],

  createContext: __WEBPACK_IMPORTED_MODULE_9__ReactContext__["a" /* createContext */],
  forwardRef: __WEBPACK_IMPORTED_MODULE_10__forwardRef__["a" /* default */],

  Fragment: __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */],
  StrictMode: __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__["j" /* REACT_STRICT_MODE_TYPE */],
  unstable_AsyncMode: __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__["a" /* REACT_ASYNC_MODE_TYPE */],

  createElement:  true ? __WEBPACK_IMPORTED_MODULE_11__ReactElementValidator__["b" /* createElementWithValidation */] : createElement,
  cloneElement:  true ? __WEBPACK_IMPORTED_MODULE_11__ReactElementValidator__["a" /* cloneElementWithValidation */] : cloneElement,
  createFactory:  true ? __WEBPACK_IMPORTED_MODULE_11__ReactElementValidator__["c" /* createFactoryWithValidation */] : createFactory,
  isValidElement: __WEBPACK_IMPORTED_MODULE_8__ReactElement__["d" /* isValidElement */],

  version: __WEBPACK_IMPORTED_MODULE_1_shared_ReactVersion___default.a,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: __WEBPACK_IMPORTED_MODULE_7__ReactCurrentOwner__["a" /* default */],
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: __WEBPACK_IMPORTED_MODULE_0_object_assign___default.a
  }
};

if (__WEBPACK_IMPORTED_MODULE_3_shared_ReactFeatureFlags__["a" /* enableSuspense */]) {
  React.Timeout = __WEBPACK_IMPORTED_MODULE_2_shared_ReactSymbols__["k" /* REACT_TIMEOUT_TYPE */];
}

if (true) {
  Object.assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: __WEBPACK_IMPORTED_MODULE_12__ReactDebugCurrentFrame__["a" /* default */],
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/* harmony default export */ __webpack_exports__["default"] = (React);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



// TODO: this is special because it gets imported during build.

module.exports = '16.3.2';

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyObject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_lowPriorityWarning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ReactNoopUpdateQueue__ = __webpack_require__(34);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyObject___default.a;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || __WEBPACK_IMPORTED_MODULE_3__ReactNoopUpdateQueue__["a" /* default */];
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant___default()(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (true) {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        Object(__WEBPACK_IMPORTED_MODULE_2_shared_lowPriorityWarning__["a" /* default */])(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyObject___default.a;
  this.updater = updater || __WEBPACK_IMPORTED_MODULE_3__ReactNoopUpdateQueue__["a" /* default */];
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning__);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  if (true) {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default()(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/* harmony default export */ __webpack_exports__["a"] = (ReactNoopUpdateQueue);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRef;


// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  if (true) {
    Object.seal(refObject);
  }
  return refObject;
} /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   * 
   */

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forEachChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onlyChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ReactElement__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReactDebugCurrentFrame__ = __webpack_require__(11);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */









var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case __WEBPACK_IMPORTED_MODULE_3_shared_ReactSymbols__["d" /* REACT_ELEMENT_TYPE */]:
          case __WEBPACK_IMPORTED_MODULE_3_shared_ReactSymbols__["g" /* REACT_PORTAL_TYPE */]:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = Object(__WEBPACK_IMPORTED_MODULE_3_shared_ReactSymbols__["l" /* getIteratorFn */])(children);
    if (typeof iteratorFn === 'function') {
      if (true) {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', __WEBPACK_IMPORTED_MODULE_5__ReactDebugCurrentFrame__["a" /* default */].getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      if (true) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + __WEBPACK_IMPORTED_MODULE_5__ReactDebugCurrentFrame__["a" /* default */].getStackAddendum();
      }
      var childrenString = '' + children;
      __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant___default()(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction___default.a.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (Object(__WEBPACK_IMPORTED_MODULE_4__ReactElement__["d" /* isValidElement */])(mappedChild)) {
      mappedChild = Object(__WEBPACK_IMPORTED_MODULE_4__ReactElement__["a" /* cloneAndReplaceKey */])(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction___default.a.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction___default.a.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_invariant___default()(Object(__WEBPACK_IMPORTED_MODULE_4__ReactElement__["d" /* isValidElement */])(children), 'React.Children.only expected to receive a single React element child.');
  return children;
}



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    if (true) {
      __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(calculateChangedBits === null || typeof calculateChangedBits === 'function', 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
    }
  }

  var context = {
    $$typeof: __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["c" /* REACT_CONTEXT_TYPE */],
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    _changedBits: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["h" /* REACT_PROVIDER_TYPE */],
    _context: context
  };
  context.Consumer = context;

  if (true) {
    context._currentRenderer = null;
  }

  return context;
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = forwardRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__);
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





function forwardRef(render) {
  if (true) {
    __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(typeof render === 'function', 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);

    if (render != null) {
      __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(render.defaultProps == null && render.propTypes == null, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
    }
  }

  return {
    $$typeof: __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["e" /* REACT_FORWARD_REF_TYPE */],
    render: render
  };
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createElementWithValidation;
/* harmony export (immutable) */ __webpack_exports__["c"] = createFactoryWithValidation;
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneElementWithValidation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_lowPriorityWarning__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_describeComponentFrame__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_isValidElementType__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_getComponentName__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shared_ReactSymbols__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_checkPropTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_checkPropTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_checkPropTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ReactCurrentOwner__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ReactElement__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ReactDebugCurrentFrame__ = __webpack_require__(11);
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */













var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

if (true) {
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === __WEBPACK_IMPORTED_MODULE_4_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */]) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += Object(__WEBPACK_IMPORTED_MODULE_1_shared_describeComponentFrame__["a" /* default */])(name, currentlyValidatingElement._source, owner && Object(__WEBPACK_IMPORTED_MODULE_3_shared_getComponentName__["a" /* default */])(owner));
    }
    stack += __WEBPACK_IMPORTED_MODULE_9__ReactDebugCurrentFrame__["a" /* default */].getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (__WEBPACK_IMPORTED_MODULE_7__ReactCurrentOwner__["a" /* default */].current) {
    var name = Object(__WEBPACK_IMPORTED_MODULE_3_shared_getComponentName__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_7__ReactCurrentOwner__["a" /* default */].current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== __WEBPACK_IMPORTED_MODULE_7__ReactCurrentOwner__["a" /* default */].current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + Object(__WEBPACK_IMPORTED_MODULE_3_shared_getComponentName__["a" /* default */])(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  if (true) {
    __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning___default()(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (Object(__WEBPACK_IMPORTED_MODULE_8__ReactElement__["d" /* isValidElement */])(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_8__ReactElement__["d" /* isValidElement */])(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = Object(__WEBPACK_IMPORTED_MODULE_4_shared_ReactSymbols__["l" /* getIteratorFn */])(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (Object(__WEBPACK_IMPORTED_MODULE_8__ReactElement__["d" /* isValidElement */])(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    __WEBPACK_IMPORTED_MODULE_5_prop_types_checkPropTypes___default()(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning___default()(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning___default()(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning___default()(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning___default()(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = Object(__WEBPACK_IMPORTED_MODULE_2_shared_isValidElementType__["a" /* default */])(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    __WEBPACK_IMPORTED_MODULE_6_fbjs_lib_warning___default()(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = __WEBPACK_IMPORTED_MODULE_8__ReactElement__["c" /* createElement */].apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === __WEBPACK_IMPORTED_MODULE_4_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */]) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  if (true) {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        Object(__WEBPACK_IMPORTED_MODULE_0_shared_lowPriorityWarning__["a" /* default */])(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = __WEBPACK_IMPORTED_MODULE_8__ReactElement__["b" /* cloneElement */].apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValidElementType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__ = __webpack_require__(2);
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */] || type === __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["a" /* REACT_ASYNC_MODE_TYPE */] || type === __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["j" /* REACT_STRICT_MODE_TYPE */] || type === __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["k" /* REACT_TIMEOUT_TYPE */] || typeof type === 'object' && type !== null && (type.$$typeof === __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["h" /* REACT_PROVIDER_TYPE */] || type.$$typeof === __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["c" /* REACT_CONTEXT_TYPE */] || type.$$typeof === __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["e" /* REACT_FORWARD_REF_TYPE */]);
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__ = __webpack_require__(2);


 /**
                                                                                                                                           * Copyright (c) 2013-present, Facebook, Inc.
                                                                                                                                           *
                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                           *
                                                                                                                                           * 
                                                                                                                                           */

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["f" /* REACT_FRAGMENT_TYPE */]:
      return 'ReactFragment';
    case __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["g" /* REACT_PORTAL_TYPE */]:
      return 'ReactPortal';
    case __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["b" /* REACT_CALL_TYPE */]:
      return 'ReactCall';
    case __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["i" /* REACT_RETURN_TYPE */]:
      return 'ReactReturn';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case __WEBPACK_IMPORTED_MODULE_0_shared_ReactSymbols__["e" /* REACT_FORWARD_REF_TYPE */]:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (getComponentName);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(43);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createMarkupForID */
/* harmony export (immutable) */ __webpack_exports__["c"] = createMarkupForRoot;
/* harmony export (immutable) */ __webpack_exports__["b"] = createMarkupForProperty;
/* harmony export (immutable) */ __webpack_exports__["a"] = createMarkupForCustomAttribute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quoteAttributeValueForBrowser__ = __webpack_require__(46);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */
function createMarkupForID(id) {
  return __WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["c" /* ID_ATTRIBUTE_NAME */] + '=' + Object(__WEBPACK_IMPORTED_MODULE_1__quoteAttributeValueForBrowser__["a" /* default */])(id);
}

function createMarkupForRoot() {
  return __WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["f" /* ROOT_ATTRIBUTE_NAME */] + '=""';
}

/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */
function createMarkupForProperty(name, value) {
  var propertyInfo = Object(__WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["g" /* getPropertyInfo */])(name);
  if (name !== 'style' && Object(__WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["i" /* shouldIgnoreAttribute */])(name, propertyInfo, false)) {
    return '';
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["j" /* shouldRemoveAttribute */])(name, value, propertyInfo, false)) {
    return '';
  }
  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === __WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["b" /* BOOLEAN */] || type === __WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["d" /* OVERLOADED_BOOLEAN */] && value === true) {
      return attributeName + '=""';
    } else {
      return attributeName + '=' + Object(__WEBPACK_IMPORTED_MODULE_1__quoteAttributeValueForBrowser__["a" /* default */])(value);
    }
  } else {
    return name + '=' + Object(__WEBPACK_IMPORTED_MODULE_1__quoteAttributeValueForBrowser__["a" /* default */])(value);
  }
}

/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */
function createMarkupForCustomAttribute(name, value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__shared_DOMProperty__["h" /* isAttributeNameSafe */])(name) || value == null) {
    return '';
  }
  return name + '=' + Object(__WEBPACK_IMPORTED_MODULE_1__quoteAttributeValueForBrowser__["a" /* default */])(value);
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__escapeTextForBrowser__ = __webpack_require__(20);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + Object(__WEBPACK_IMPORTED_MODULE_0__escapeTextForBrowser__["a" /* default */])(value) + '"';
}

/* harmony default export */ __webpack_exports__["a"] = (quoteAttributeValueForBrowser);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types_checkPropTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types_checkPropTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types_checkPropTypes__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

if (true) {
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props, getStack) {
    __WEBPACK_IMPORTED_MODULE_0_prop_types_checkPropTypes___default()(propTypes, props, 'prop', tagName, getStack);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ReactControlledValuePropTypes);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voidElementTags__ = __webpack_require__(49);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






var HTML = '__html';

function assertValidProps(tag, props, getStack) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (__WEBPACK_IMPORTED_MODULE_2__voidElementTags__["a" /* default */][tag]) {
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(props.children == null && props.dangerouslySetInnerHTML == null, '%s is a void element tag and must neither have `children` nor ' + 'use `dangerouslySetInnerHTML`.%s', tag, getStack());
  }
  if (props.dangerouslySetInnerHTML != null) {
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(props.children == null, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.');
  }
  if (true) {
    __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.%s', getStack());
  }
  __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(props.style == null || typeof props.style === 'object', 'The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.%s', getStack());
}

/* harmony default export */ __webpack_exports__["a"] = (assertValidProps);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__omittedCloseTags__ = __webpack_require__(7);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = Object.assign({
  menuitem: true
}, __WEBPACK_IMPORTED_MODULE_0__omittedCloseTags__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (voidElementTags);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CSSProperty__ = __webpack_require__(51);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(__WEBPACK_IMPORTED_MODULE_0__CSSProperty__["a" /* isUnitlessNumber */].hasOwnProperty(name) && __WEBPACK_IMPORTED_MODULE_0__CSSProperty__["a" /* isUnitlessNumber */][name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

/* harmony default export */ __webpack_exports__["a"] = (dangerousStyleValue);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUnitlessNumber; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_camelizeStyleName__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_camelizeStyleName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_camelizeStyleName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





var warnValidStyle = __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_emptyFunction___default.a;

if (true) {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function (name, getStack) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Unsupported style property %s. Did you mean %s?%s', name, __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_camelizeStyleName___default()(name), getStack());
  };

  var warnBadVendoredStyleName = function (name, getStack) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), getStack());
  };

  var warnStyleValueWithSemicolon = function (name, value, getStack) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.%s', name, value.replace(badStyleValueWithSemicolonPattern, ''), getStack());
  };

  var warnStyleValueIsNaN = function (name, value, getStack) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, getStack());
  };

  var warnStyleValueIsInfinity = function (name, value, getStack) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, getStack());
  };

  warnValidStyle = function (name, value, getStack) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, getStack);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, getStack);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, getStack);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, getStack);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, getStack);
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (warnValidStyle);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var camelize = __webpack_require__(54);

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateProperties;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_ReactGlobalSharedState__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DOMProperty__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isCustomComponent__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validAriaProperties__ = __webpack_require__(56);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + __WEBPACK_IMPORTED_MODULE_2__DOMProperty__["a" /* ATTRIBUTE_NAME_CHAR */] + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + __WEBPACK_IMPORTED_MODULE_2__DOMProperty__["a" /* ATTRIBUTE_NAME_CHAR */] + ']*$');

var hasOwnProperty = Object.prototype.hasOwnProperty;

function getStackAddendum() {
  var stack = __WEBPACK_IMPORTED_MODULE_1_shared_ReactGlobalSharedState__["a" /* ReactDebugCurrentFrame */].getStackAddendum();
  return stack != null ? stack : '';
}

function validateProperty(tagName, name) {
  if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = __WEBPACK_IMPORTED_MODULE_4__validAriaProperties__["a" /* default */].hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default()(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.%s', name, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default()(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?%s', name, correctName, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = __WEBPACK_IMPORTED_MODULE_4__validAriaProperties__["a" /* default */].hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default()(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default()(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
  } else if (invalidProps.length > 1) {
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_warning___default()(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, type, getStackAddendum());
  }
}

function validateProperties(type, props) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__isCustomComponent__["a" /* default */])(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

/* harmony default export */ __webpack_exports__["a"] = (ariaProperties);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateProperties;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_ReactGlobalSharedState__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




var didWarnValueNull = false;

function getStackAddendum() {
  var stack = __WEBPACK_IMPORTED_MODULE_0_shared_ReactGlobalSharedState__["a" /* ReactDebugCurrentFrame */].getStackAddendum();
  return stack != null ? stack : '';
}

function validateProperties(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.%s', type, getStackAddendum());
    } else {
      __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_warning___default()(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', type, getStackAddendum());
    }
  }
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateProperties;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events_EventPluginRegistry__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_ReactGlobalSharedState__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DOMProperty__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isCustomComponent__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__possibleStandardNames__ = __webpack_require__(60);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */









function getStackAddendum() {
  var stack = __WEBPACK_IMPORTED_MODULE_1_shared_ReactGlobalSharedState__["a" /* ReactDebugCurrentFrame */].getStackAddendum();
  return stack != null ? stack : '';
}

var validateProperty = function () {};

if (true) {
  var warnedProperties = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA = new RegExp('^(aria)-[' + __WEBPACK_IMPORTED_MODULE_3__DOMProperty__["a" /* ATTRIBUTE_NAME_CHAR */] + ']*$');
  var rARIACamel = new RegExp('^(aria)[A-Z][' + __WEBPACK_IMPORTED_MODULE_3__DOMProperty__["a" /* ATTRIBUTE_NAME_CHAR */] + ']*$');

  validateProperty = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties[name] = true;
      return true;
    }

    // We can't rely on the event system being injected on the server.
    if (canUseEventSystem) {
      if (__WEBPACK_IMPORTED_MODULE_0_events_EventPluginRegistry__["b" /* registrationNameModules */].hasOwnProperty(name)) {
        return true;
      }
      var registrationName = __WEBPACK_IMPORTED_MODULE_0_events_EventPluginRegistry__["a" /* possibleRegistrationNames */].hasOwnProperty(lowerCasedName) ? __WEBPACK_IMPORTED_MODULE_0_events_EventPluginRegistry__["a" /* possibleRegistrationNames */][lowerCasedName] : null;
      if (registrationName != null) {
        __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Invalid event handler property `%s`. Did you mean `%s`?%s', name, registrationName, getStackAddendum());
        warnedProperties[name] = true;
        return true;
      }
      if (EVENT_NAME_REGEX.test(name)) {
        __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Unknown event handler property `%s`. It will be ignored.%s', name, getStackAddendum());
        warnedProperties[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.%s', name, getStackAddendum());
      }
      warnedProperties[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA.test(name) || rARIACamel.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.%s', typeof value, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.%s', name, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }

    var propertyInfo = Object(__WEBPACK_IMPORTED_MODULE_3__DOMProperty__["g" /* getPropertyInfo */])(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === __WEBPACK_IMPORTED_MODULE_3__DOMProperty__["e" /* RESERVED */];

    // Known attributes should match the casing specified in the property config.
    if (__WEBPACK_IMPORTED_MODULE_5__possibleStandardNames__["a" /* default */].hasOwnProperty(lowerCasedName)) {
      var standardName = __WEBPACK_IMPORTED_MODULE_5__possibleStandardNames__["a" /* default */][lowerCasedName];
      if (standardName !== name) {
        __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Invalid DOM property `%s`. Did you mean `%s`?%s', name, standardName, getStackAddendum());
        warnedProperties[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.%s', name, lowerCasedName, getStackAddendum());
      warnedProperties[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && Object(__WEBPACK_IMPORTED_MODULE_3__DOMProperty__["k" /* shouldRemoveAttributeWithWarning */])(name, value, propertyInfo, false)) {
      if (value) {
        __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.%s', value, name, name, value, name, getStackAddendum());
      } else {
        __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.%s', value, name, name, value, name, name, name, getStackAddendum());
      }
      warnedProperties[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (Object(__WEBPACK_IMPORTED_MODULE_3__DOMProperty__["k" /* shouldRemoveAttributeWithWarning */])(name, value, propertyInfo, false)) {
      warnedProperties[name] = true;
      return false;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty(type, key, props[key], canUseEventSystem);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum());
  } else if (unknownProps.length > 1) {
    __WEBPACK_IMPORTED_MODULE_2_fbjs_lib_warning___default()(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior%s', unknownPropString, type, getStackAddendum());
  }
};

function validateProperties(type, props, canUseEventSystem) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__isCustomComponent__["a" /* default */])(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, canUseEventSystem);
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export plugins */
/* unused harmony export eventNameDispatchConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registrationNameModules; });
/* unused harmony export registrationNameDependencies */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return possibleRegistrationNames; });
/* unused harmony export injectEventPluginOrder */
/* unused harmony export injectEventPluginsByName */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant__);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Injectable ordering of event plugins.
 */
var eventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!eventPluginOrder) {
    // Wait until an `eventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var pluginModule = namesToPlugins[pluginName];
    var pluginIndex = eventPluginOrder.indexOf(pluginName);
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(pluginIndex > -1, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName);
    if (plugins[pluginIndex]) {
      continue;
    }
    __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(pluginModule.extractEvents, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName);
    plugins[pluginIndex] = pluginModule;
    var publishedEvents = pluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName), 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName);
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
  __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(!eventNameDispatchConfigs.hasOwnProperty(eventName), 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName);
  eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, pluginModule, eventName) {
  __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(!registrationNameModules[registrationName], 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName);
  registrationNameModules[registrationName] = pluginModule;
  registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;

  if (true) {
    var lowerCasedName = registrationName.toLowerCase();
    possibleRegistrationNames[lowerCasedName] = registrationName;

    if (registrationName === 'onDoubleClick') {
      possibleRegistrationNames.ondblclick = registrationName;
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */
var plugins = [];

/**
 * Mapping from event name to dispatch config
 */
var eventNameDispatchConfigs = {};

/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */
var registrationNameDependencies = {};

/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in __DEV__.
 * @type {Object}
 */
var possibleRegistrationNames =  true ? {} : null;
// Trust the developer to only use possibleRegistrationNames in __DEV__

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */
function injectEventPluginOrder(injectedEventPluginOrder) {
  __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(!eventPluginOrder, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.');
  // Clone the ordering so it cannot be dynamically mutated.
  eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
  recomputePluginOrdering();
}

/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */
function injectEventPluginsByName(injectedNamesToPlugins) {
  var isOrderingDirty = false;
  for (var pluginName in injectedNamesToPlugins) {
    if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
      continue;
    }
    var pluginModule = injectedNamesToPlugins[pluginName];
    if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
      __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_invariant___default()(!namesToPlugins[pluginName], 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName);
      namesToPlugins[pluginName] = pluginModule;
      isOrderingDirty = true;
    }
  }
  if (isOrderingDirty) {
    recomputePluginOrdering();
  }
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  'class': 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  'default': 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  'for': 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  'in': 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  'typeof': 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

/* harmony default export */ __webpack_exports__["a"] = (possibleStandardNames);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IndeterminateComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FunctionalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HostRoot; });
/* unused harmony export HostPortal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HostText; });
/* unused harmony export CallComponent */
/* unused harmony export CallHandlerPhase */
/* unused harmony export ReturnComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Fragment; });
/* unused harmony export Mode */
/* unused harmony export ContextConsumer */
/* unused harmony export ContextProvider */
/* unused harmony export ForwardRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TimeoutComponent; });


var IndeterminateComponent = 0; // Before we know whether it is functional or class
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var FunctionalComponent = 1;
var ClassComponent = 2;
var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
var HostComponent = 5;
var HostText = 6;
var CallComponent = 7;
var CallHandlerPhase = 8;
var ReturnComponent = 9;
var Fragment = 10;
var Mode = 11;
var ContextConsumer = 12;
var ContextProvider = 13;
var ForwardRef = 14;
var TimeoutComponent = 15;

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NoContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StrictMode; });


var NoContext = 0; /**
                           * Copyright (c) 2013-present, Facebook, Inc.
                           *
                           * This source code is licensed under the MIT license found in the
                           * LICENSE file in the root directory of this source tree.
                           *
                           * 
                           */

var AsyncMode = 1;
var StrictMode = 2;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_simple_cache_provider__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_simple_cache_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_simple_cache_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function fetchRelative(url) {
  return fetch(process.env.BASE_URL + url);
}

/* harmony default export */ __webpack_exports__["a"] = (function ({ scale_network_speed = 1 }) {
  // To keep things simple for this demo, we're going to use a basic
  const cache = Object(__WEBPACK_IMPORTED_MODULE_1_simple_cache_provider__["createCache"])();

  function adjustTime(ms) {
    return ms * scale_network_speed;
  }

  const MovieDetailsResource = Object(__WEBPACK_IMPORTED_MODULE_1_simple_cache_provider__["createResource"])(async id => {
    const response = await fetchRelative(`/movies/${id}?delay_ms=${adjustTime(800)}`);
    return response.json();
  });

  const MovieReviewsResource = Object(__WEBPACK_IMPORTED_MODULE_1_simple_cache_provider__["createResource"])(async id => {
    const response = await fetchRelative(`/movies/${id}/reviews?delay_ms=${adjustTime(1500)}`);
    return response.json();
  });

  function Placeholder(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.Timeout,
      { ms: props.delayMs },
      didExpire => didExpire ? props.fallback : props.children
    );
  }

  function App() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MoviePage, { id: 1 });
  }

  // --------------------------
  // Invididual movie page
  // --------------------------

  // --------------------------
  // Invididual movie details
  // --------------------------
  // ________
  // |      |  Moonrise Kingdom
  // |      |  🍅 93%
  // |      |  86% liked it
  // --------------------------

  function MoviePage(props) {
    MovieReviewsResource.preload(cache, props.id);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Placeholder,
      { delayMs: 1000, fallback: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Spinner, { size: 'large' }) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovieDetails, { id: props.id })
    );
  }

  function MovieDetails(props) {
    const movie = MovieDetailsResource.read(cache, props.id);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'MovieDetails' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MoviePoster, { src: movie.poster }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          movie.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovieMetrics, movie)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Placeholder,
        { fallback: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Spinner, { size: 'large' }) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovieReviews, { id: props.id })
      )
    );
  }

  function MoviePoster(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
      className: 'MoviePoster',
      alt: 'poster',
      src: props.src,
      width: '200',
      height: '300'
    });
  }

  function MovieMetrics(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'MovieMetrics-tomato' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'Tomatometer'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          props.fresh ? '🍅' : '🤢',
          ' ',
          props.rating
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'MovieMetrics-audience' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'Audience'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          '🍿',
          ' ',
          props.audience
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'MovieMetrics-consensus' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'Critics Consensus'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          props.consensus
        )
      )
    );
  }

  // ----------------------------
  // Invididual movie reviews pane
  // ----------------------------
  //  __________________________
  // | "Good movie" - Dan       |
  // |_ ________________________|
  // | "Waste of time" - Andrew |
  // |__________________________|
  // ----------------------------

  function MovieReviews(props) {
    const reviews = MovieReviewsResource.read(cache, props.id);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'MovieReviews' },
      reviews.map(review => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MovieReview, _extends({ key: review.id }, review)))
    );
  }

  function MovieReview(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'blockquote',
      { className: 'MovieReview' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'figure',
        null,
        props.fresh ? '🍅' : '🤢'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        props.text
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'footer',
        null,
        props.author.name,
        ', ',
        props.author.publication
      )
    );
  }

  function Spinner(props) {
    let className = 'Spinner';
    if (props.size === 'large' || props.size === 'medium') {
      className += ' Spinner--big';
    }
    let spinner = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: className },
      '🌀'
    );
    if (props.size === 'medium') {
      spinner = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          style: {
            position: 'relative',
            height: 200
          } },
        spinner
      );
    }
    return spinner;
  }

  return App;
});

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("simple-cache-provider");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map