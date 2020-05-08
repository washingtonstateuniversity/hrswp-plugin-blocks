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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/accordion-panel/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/accordion-panel/block.json ***!
  \***********************************************/
/*! exports provided: name, category, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/accordion-panel\",\"category\":\"layout\",\"supports\":{\"reusable\":false},\"attributes\":{\"panelHeadingContent\":{\"type\":\"string\",\"source\":\"html\",\"selector\":\"h1,h2,h3,h4,h5,h6\",\"default\":\"\"},\"elementId\":{\"type\":\"int\",\"default\":0},\"level\":{\"type\":\"number\",\"default\":2}}}");

/***/ }),

/***/ "./src/blocks/accordion-panel/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/accordion-panel/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
var withInstanceId = wp.compose.withInstanceId;

function AccordionPanelEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      instanceId = _ref.instanceId;
  var panelHeadingContent = attributes.panelHeadingContent,
      elementId = attributes.elementId,
      level = attributes.level;
  var tagName = 'h' + level;
  setAttributes({
    elementId: "accordion-panel-id-".concat(instanceId)
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: tagName,
    className: 'accordion-panel-heading',
    value: panelHeadingContent,
    allowedFormats: ['italic'],
    onChange: function onChange(content) {
      return setAttributes({
        panelHeadingContent: content
      });
    },
    placeholder: __('Brief panel heading…')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'accordion-panel',
    id: elementId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false,
    renderAppender: function renderAppender() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(AccordionPanelEdit));

/***/ }),

/***/ "./src/blocks/accordion-panel/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/accordion-panel/index.js ***!
  \*********************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion-panel/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-panel/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/accordion-panel/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion-panel/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Accordion Panel'),
  parent: ['hrswp/accordion'],
  icon: 'index-card',
  category: category,
  description: __('A single panel of accordion content.'),
  keywords: [__('layout'), __('accordion')],
  supports: supports,
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/accordion-panel/save.js":
/*!********************************************!*\
  !*** ./src/blocks/accordion-panel/save.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
function save(_ref) {
  var attributes = _ref.attributes;
  var panelHeadingContent = attributes.panelHeadingContent,
      elementId = attributes.elementId,
      level = attributes.level;
  var tagName = 'h' + level;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: tagName,
    className: 'accordion-panel-heading',
    value: panelHeadingContent
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'accordion-panel',
    id: elementId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/blocks/accordion/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/accordion/block.json ***!
  \*****************************************/
/*! exports provided: name, category, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/accordion\",\"category\":\"layout\",\"supports\":{\"align\":true},\"attributes\":{\"level\":{\"type\":\"number\",\"default\":2}}}");

/***/ }),

/***/ "./src/blocks/accordion/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heading_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading-toolbar */ "./src/blocks/accordion/heading-toolbar.js");


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Disabled = _wp$components.Disabled,
    PanelBody = _wp$components.PanelBody;
var withDispatch = wp.data.withDispatch;
/**
 * Internal dependencies
 */


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In accordion block, the only block we allow is 'hrswp/accordion-panel'.
 *
 * @constant
 * @type {string[]}
 */

var ALLOWED_BLOCKS = ['hrswp/accordion-panel'];
/**
 * The block template.
 *
 * By default the block is populated with five accordion panels.
 *
 * @constant
 * @type {string[]}
 */

var TEMPLATE = [['hrswp/accordion-panel'], ['hrswp/accordion-panel'], ['hrswp/accordion-panel'], ['hrswp/accordion-panel'], ['hrswp/accordion-panel'], ['hrswp/accordion-panel']];

function AccordionEditContent(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      updateHeadingLevel = _ref.updateHeadingLevel;
  var level = attributes.level;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Heading level')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_heading_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isCollapsed: false,
    minLevel: 1,
    maxLevel: 7,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return updateHeadingLevel(newLevel);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className,
    "data-accordion-block": true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Disabled, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-buttons controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-outline"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    id: "open-all-panels",
    className: "wp-block-button__link"
  }, "Open all")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-outline"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    id: "close-all-panels",
    className: "wp-block-button__link"
  }, "Close All")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    templateLock: false,
    template: TEMPLATE
  })));
}

var AccordionEdit = withDispatch(function (dispatch, ownProps, registry) {
  return {
    /**
     * Update all child Accordion Panel blocks with a new heading
     * level setting based on whatever heading level is passed in.
     * This allows a change to the parent to propogate to all
     * child blocks and override anything set on an individual
     * panel.
     *
     * @param {number} newLevel the heading level setting
     */
    updateHeadingLevel: function updateHeadingLevel(newLevel) {
      var clientId = ownProps.clientId,
          setAttributes = ownProps.setAttributes;

      var _dispatch = dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      var _registry$select = registry.select('core/block-editor'),
          getBlockOrder = _registry$select.getBlockOrder; // Update own level setting.


      setAttributes({
        level: newLevel
      }); // Update child block to match own level setting.

      var innerBlockClientIds = getBlockOrder(clientId);
      innerBlockClientIds.forEach(function (innerBlockClientId) {
        updateBlockAttributes(innerBlockClientId, {
          level: newLevel
        });
      });
    }
  };
})(AccordionEditContent);
/* harmony default export */ __webpack_exports__["default"] = (AccordionEdit);

/***/ }),

/***/ "./src/blocks/accordion/heading-level-icon.js":
/*!****************************************************!*\
  !*** ./src/blocks/accordion/heading-level-icon.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadingLevelIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
/**
 * Renders the heading level icons in the toolbar.
 *
 * Copied from the 'core/heading' block.
 *
 * @param {number} level the heading level
 */

function HeadingLevelIcon(_ref) {
  var level = _ref.level,
      _ref$ispressed = _ref.ispressed,
      ispressed = _ref$ispressed === void 0 ? 'false' : _ref$ispressed;
  var levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };

  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    ispressed: ispressed
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: levelToPath[level]
  }));
}

/***/ }),

/***/ "./src/blocks/accordion/heading-toolbar.js":
/*!*************************************************!*\
  !*** ./src/blocks/accordion/heading-toolbar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heading-level-icon */ "./src/blocks/accordion/heading-level-icon.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var Component = wp.element.Component;
var Toolbar = wp.components.Toolbar;
/**
 * Internal dependencies
 */



var AccordionHeadingToolbar = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(AccordionHeadingToolbar, _Component);

  var _super = _createSuper(AccordionHeadingToolbar);

  function AccordionHeadingToolbar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AccordionHeadingToolbar);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AccordionHeadingToolbar, [{
    key: "createLevelControl",
    value: function createLevelControl(targetLevel, selectedLevel, onChange) {
      var isActive = targetLevel === selectedLevel;
      return {
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          level: targetLevel,
          isPressed: isActive
        }),
        // translators: %s: heading level e.g: "1", "2", "3"
        title: sprintf(__('Heading %d'), targetLevel),
        isActive: isActive,
        onClick: function onClick() {
          return onChange(targetLevel);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$isCollaps = _this$props.isCollapsed,
          isCollapsed = _this$props$isCollaps === void 0 ? true : _this$props$isCollaps,
          minLevel = _this$props.minLevel,
          maxLevel = _this$props.maxLevel,
          selectedLevel = _this$props.selectedLevel,
          onChange = _this$props.onChange;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Toolbar, {
        isCollapsed: isCollapsed,
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_heading_level_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          level: selectedLevel
        }),
        controls: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["range"])(minLevel, maxLevel).map(function (index) {
          return _this.createLevelControl(index, selectedLevel, onChange);
        }),
        label: __('Change heading level')
      });
    }
  }]);

  return AccordionHeadingToolbar;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (AccordionHeadingToolbar);

/***/ }),

/***/ "./src/blocks/accordion/icon.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/icon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1z"
})));

/***/ }),

/***/ "./src/blocks/accordion/index.js":
/*!***************************************!*\
  !*** ./src/blocks/accordion/index.js ***!
  \***************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/accordion/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/accordion/icon.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */





var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Accordion'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  category: category,
  description: __('Display content in an accordion.'),
  keywords: [__('layout'), __('accordion')],
  supports: supports,
  attributes: attributes,
  example: {
    innerBlocks: [{
      name: 'hrswp/accordion-panel',
      attributes: {
        /* translators: example text. */
        panelHeadingContent: __('An accordion panel title'),
        level: 2
      },
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.')
        }
      }]
    }, {
      name: 'hrswp/accordion-panel',
      attributes: {
        /* translators: example text. */
        panelHeadingContent: __('Another accordion panel title'),
        level: 2
      },
      innerBlocks: [{
        name: 'core/list',
        attributes: {
          values: __('<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li>')
        }
      }]
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/accordion/save.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/save.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className,
    "data-accordion-block": true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-buttons controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-outline"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    id: "open-all-panels",
    className: "wp-block-button__link"
  }, "Open all")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-outline"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    id: "close-all-panels",
    className: "wp-block-button__link"
  }, "Close All"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/callout/block.json":
/*!***************************************!*\
  !*** ./src/blocks/callout/block.json ***!
  \***************************************/
/*! exports provided: name, category, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/callout\",\"category\":\"layout\",\"supports\":{\"align\":true}}");

/***/ }),

/***/ "./src/blocks/callout/edit.js":
/*!************************************!*\
  !*** ./src/blocks/callout/edit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;
/**
 * The block template.
 *
 * This is locked so that the search input field is always first, followed
 * by a search filter section to contain the content to be searched.
 *
 * @constant
 * @type {string[]}
 */

var TEMPLATE = [['core/paragraph', {
  fontSize: 'large',
  placeholder: __('Callout title…')
}], ['core/paragraph', {
  placeholder: __('Enter the callout message or replace…')
}]];
function edit(_ref) {
  var className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    template: TEMPLATE
  })));
}

/***/ }),

/***/ "./src/blocks/callout/icon.js":
/*!************************************!*\
  !*** ./src/blocks/callout/icon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M21,3H3C1.9,3,1,3.9,1,5v14c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M21,19H3V5h18V19z M5,6h14v3H5V6z M5,11h14v6.25H5V11z"
})));

/***/ }),

/***/ "./src/blocks/callout/index.js":
/*!*************************************!*\
  !*** ./src/blocks/callout/index.js ***!
  \*************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/callout/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/callout/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/callout/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/callout/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/callout/icon.js");
/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    _x = _wp$i18n._x;
/**
 * Internal dependencies
 */





var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports;

var settings = {
  title: __('Callout'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  category: category,
  description: __('Display content in a callout module.'),
  keywords: [__('callout'), __('message')],
  supports: supports,
  example: {
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        fontSize: 'large',

        /* translators: example text. */
        content: __('Riverside Wren (Cantorchilus semibadius)')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        /* translators: example text. */
        content: __('The wren<br>Earns his living<br>Noiselessly.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        /* translators: example text. */
        content: __('— Kobayashi Issa (一茶)')
      }
    }]
  },
  styles: [{
    name: 'default',
    label: _x('Default', 'block style'),
    isDefault: true
  }, {
    name: 'positive',
    label: _x('Positive', 'block style')
  }, {
    name: 'caution',
    label: _x('Caution', 'block style')
  }, {
    name: 'warning',
    label: _x('Warning', 'block style')
  }],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/callout/save.js":
/*!************************************!*\
  !*** ./src/blocks/callout/save.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./src/blocks/accordion/index.js");
/* harmony import */ var _accordion_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion-panel */ "./src/blocks/accordion-panel/index.js");
/* harmony import */ var _posts_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts-list */ "./src/blocks/posts-list/index.js");
/* harmony import */ var _search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-filter */ "./src/blocks/search-filter/index.js");
/* harmony import */ var _search_filter_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-filter-section */ "./src/blocks/search-filter-section/index.js");
/* harmony import */ var _search_filter_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-filter-input */ "./src/blocks/search-filter-input/index.js");
/* harmony import */ var _callout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callout */ "./src/blocks/callout/index.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification */ "./src/blocks/notification/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar */ "./src/blocks/sidebar/index.js");
/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Internal dependencies
 */










/**
 * Function to register plugin blocks.
 *
 * @example
 * ```js
 * import { registerBlocks } from './blocks';
 *
 * registerBlocks();
 * ```
 */

var registerBlocks = function registerBlocks() {
  [_accordion__WEBPACK_IMPORTED_MODULE_0__, _accordion_panel__WEBPACK_IMPORTED_MODULE_1__, _posts_list__WEBPACK_IMPORTED_MODULE_2__, _search_filter__WEBPACK_IMPORTED_MODULE_3__, _search_filter_section__WEBPACK_IMPORTED_MODULE_4__, _search_filter_input__WEBPACK_IMPORTED_MODULE_5__, _callout__WEBPACK_IMPORTED_MODULE_6__, _notification__WEBPACK_IMPORTED_MODULE_7__, _sidebar__WEBPACK_IMPORTED_MODULE_8__].forEach(function (block) {
    if (!block) {
      return;
    }

    var settings = block.settings,
        name = block.name;
    registerBlockType(name, settings);
  });
};

/***/ }),

/***/ "./src/blocks/notification/block.json":
/*!********************************************!*\
  !*** ./src/blocks/notification/block.json ***!
  \********************************************/
/*! exports provided: name, category, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/notification\",\"category\":\"layout\",\"supports\":{\"align\":true},\"attributes\":{\"showActionButton\":{\"type\":\"boolean\",\"default\":true}}}");

/***/ }),

/***/ "./src/blocks/notification/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/notification/edit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies.
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var createBlock = wp.blocks.createBlock;
var withDispatch = wp.data.withDispatch;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */

var ALLOWED_BLOCKS = ['core/paragraph', 'core/button'];
/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */

var TEMPLATE = [['core/paragraph', {
  placeholder: __('Write message…')
}], ['core/button']];

function NotificationEditContainer(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      updateBlocks = _ref.updateBlocks;
  var showActionButton = attributes.showActionButton;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
    'has-action-button': showActionButton
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Action Button Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Show Action Button'),
    checked: !!showActionButton,
    onChange: function onChange(value) {
      return updateBlocks(value);
    },
    help: showActionButton ? __('Use the action button to call users to action.') : __('Toggle to include an action button.')
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    templateLock: "insert",
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  })));
}

var NotificationEdit = withDispatch(function (dispatch, ownProps, registry) {
  return {
    updateBlocks: function updateBlocks(showActionButton) {
      var clientId = ownProps.clientId,
          setAttributes = ownProps.setAttributes;

      var _dispatch = dispatch('core/block-editor'),
          replaceInnerBlocks = _dispatch.replaceInnerBlocks;

      var _registry$select = registry.select('core/block-editor'),
          getBlocks = _registry$select.getBlocks;

      var innerBlocks = getBlocks(clientId); // Set the block's own attribute.

      setAttributes({
        showActionButton: showActionButton
      });

      if (true === showActionButton) {
        // Add the action button.
        innerBlocks = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(innerBlocks), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["times"])(1, function () {
          return createBlock('core/button');
        })));
      } else {
        // Remove the action button.
        innerBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["dropRight"])(innerBlocks, 1);
      }

      replaceInnerBlocks(clientId, innerBlocks, false);
    }
  };
})(NotificationEditContainer);
/* harmony default export */ __webpack_exports__["default"] = (NotificationEdit);

/***/ }),

/***/ "./src/blocks/notification/icon.js":
/*!*****************************************!*\
  !*** ./src/blocks/notification/icon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG,
    Circle = _wp$components.Circle;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M0,0h48v48H0V0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M42,12H6c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V16C46,13.8,44.2,12,42,12z M42,32H6V16h36V32z M28,22v4 h12v-4H28z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Circle, {
  cx: "11",
  cy: "24",
  r: "1.5"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Circle, {
  cx: "15",
  cy: "24",
  r: "1.5"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Circle, {
  cx: "19",
  cy: "24",
  r: "1.5"
})));

/***/ }),

/***/ "./src/blocks/notification/index.js":
/*!******************************************!*\
  !*** ./src/blocks/notification/index.js ***!
  \******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/notification/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/notification/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/notification/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/notification/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/notification/icon.js");
/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    _x = _wp$i18n._x;
/**
 * Internal dependencies
 */





var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Notification'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  category: category,
  description: __('Show a brief notification message with optional action button.'),
  keywords: [__('callout'), __('message'), __('link')],
  supports: supports,
  example: {
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        /* translators: example text. */
        content: __('At length, however, Mrs. Bennet had no more to say; and Lady Lucas … was left to the comforts of cold ham and chicken.')
      }
    }, {
      name: 'core/button',
      attributes: {
        /* translators: example text. */
        text: __('Jane Austen')
      }
    }]
  },
  styles: [{
    name: 'default',
    label: _x('Default', 'block style'),
    isDefault: true
  }, {
    name: 'positive',
    label: _x('Positive', 'block style')
  }, {
    name: 'caution',
    label: _x('Caution', 'block style')
  }, {
    name: 'warning',
    label: _x('Warning', 'block style')
  }],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/notification/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/notification/save.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies.
 */

/**
 * WordPress dependencies
 */

var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var showActionButton = attributes.showActionButton;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'has-action-button': showActionButton
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/posts-list/block.json":
/*!******************************************!*\
  !*** ./src/blocks/posts-list/block.json ***!
  \******************************************/
/*! exports provided: name, category, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/posts-list\",\"category\":\"widgets\",\"supports\":{\"align\":true,\"html\":false},\"attributes\":{\"align\":{\"type\":\"string\",\"enum\":[\"left\",\"center\",\"right\",\"wide\",\"full\"]},\"className\":{\"type\":\"string\"},\"includeCategories\":{\"type\":\"array\",\"items\":{\"type\":\"object\"}},\"includeUnits\":{\"type\":\"array\",\"items\":{\"type\":\"object\"}},\"postsToShow\":{\"type\":\"number\",\"default\":5},\"displayPostContent\":{\"type\":\"boolean\",\"default\":false},\"displayPostContentRadio\":{\"type\":\"string\",\"default\":\"excerpt\"},\"excerptLength\":{\"type\":\"number\",\"default\":55},\"displayPostDate\":{\"type\":\"boolean\",\"default\":true},\"postLayout\":{\"type\":\"string\",\"default\":\"grid\"},\"columns\":{\"type\":\"number\",\"default\":3},\"order\":{\"type\":\"string\",\"default\":\"desc\"},\"orderBy\":{\"type\":\"string\",\"default\":\"date\"},\"displayFeaturedImage\":{\"type\":\"boolean\",\"default\":true},\"featuredImageAlign\":{\"type\":\"string\",\"enum\":[\"left\",\"center\",\"right\"]},\"featuredImageSizeSlug\":{\"type\":\"string\",\"default\":\"thumbnail\"},\"featuredImageSizeWidth\":{\"type\":\"number\",\"default\":null},\"featuredImageSizeHeight\":{\"type\":\"number\",\"default\":null}}}");

/***/ }),

/***/ "./src/blocks/posts-list/constants.js":
/*!********************************************!*\
  !*** ./src/blocks/posts-list/constants.js ***!
  \********************************************/
/*! exports provided: MIN_EXCERPT_LENGTH, MAX_EXCERPT_LENGTH, MAX_POST_COLUMNS, TAXONOMIES_LIST_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_EXCERPT_LENGTH", function() { return MIN_EXCERPT_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_EXCERPT_LENGTH", function() { return MAX_EXCERPT_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_POST_COLUMNS", function() { return MAX_POST_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAXONOMIES_LIST_QUERY", function() { return TAXONOMIES_LIST_QUERY; });
var MIN_EXCERPT_LENGTH = 10;
var MAX_EXCERPT_LENGTH = 100;
var MAX_POST_COLUMNS = 6;
var TAXONOMIES_LIST_QUERY = {
  per_page: -1
};

/***/ }),

/***/ "./src/blocks/posts-list/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/posts-list/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./src/blocks/posts-list/constants.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var _wp$element = wp.element,
    Component = _wp$element.Component,
    RawHTML = _wp$element.RawHTML;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    QueryControls = _wp$components.QueryControls,
    RangeControl = _wp$components.RangeControl,
    Spinner = _wp$components.Spinner,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarGroup = _wp$components.ToolbarGroup;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var __ = wp.i18n.__;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    format = _wp$date.format,
    __experimentalGetSettings = _wp$date.__experimentalGetSettings;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    __experimentalImageSizeControl = _wp$blockEditor.__experimentalImageSizeControl;
var withSelect = wp.data.withSelect;
var _wp$icons = wp.icons,
    pin = _wp$icons.pin,
    list = _wp$icons.list,
    grid = _wp$icons.grid;
/**
 * Internal dependencies
 */



var PostsListEdit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PostsListEdit, _Component);

  var _super = _createSuper(PostsListEdit);

  function PostsListEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PostsListEdit);

    _this = _super.apply(this, arguments);
    _this.state = {
      categoriesList: [],
      hrsUnitsList: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PostsListEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.isStillMounted = true;
      this.fetchCategoriesRequest = apiFetch({
        path: addQueryArgs("/wp/v2/categories", _constants__WEBPACK_IMPORTED_MODULE_10__["TAXONOMIES_LIST_QUERY"])
      }).then(function (categoriesList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: categoriesList
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: []
          });
        }
      });
      this.fetchUnitsRequest = apiFetch({
        path: addQueryArgs("/wp/v2/hrs_unit", _constants__WEBPACK_IMPORTED_MODULE_10__["TAXONOMIES_LIST_QUERY"])
      }).then(function (hrsUnitsList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            hrsUnitsList: hrsUnitsList
          });
        }
      }).catch(function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            hrsUnitsList: []
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          imageSizeOptions = _this$props.imageSizeOptions,
          latestPosts = _this$props.latestPosts,
          defaultImageWidth = _this$props.defaultImageWidth,
          defaultImageHeight = _this$props.defaultImageHeight;
      var _this$state = this.state,
          categoriesList = _this$state.categoriesList,
          hrsUnitsList = _this$state.hrsUnitsList;
      var displayFeaturedImage = attributes.displayFeaturedImage,
          displayPostContentRadio = attributes.displayPostContentRadio,
          displayPostContent = attributes.displayPostContent,
          displayPostDate = attributes.displayPostDate,
          postLayout = attributes.postLayout,
          columns = attributes.columns,
          order = attributes.order,
          orderBy = attributes.orderBy,
          includeCategories = attributes.includeCategories,
          includeUnits = attributes.includeUnits,
          postsToShow = attributes.postsToShow,
          excerptLength = attributes.excerptLength,
          featuredImageAlign = attributes.featuredImageAlign,
          featuredImageSizeSlug = attributes.featuredImageSizeSlug,
          featuredImageSizeWidth = attributes.featuredImageSizeWidth,
          featuredImageSizeHeight = attributes.featuredImageSizeHeight;
      var categorySuggestions = categoriesList.reduce(function (accumulator, category) {
        return _objectSpread({}, accumulator, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, category.name, category));
      }, {});
      var hrsUnitSuggestions = hrsUnitsList.reduce(function (accumulator, hrsUnit) {
        return _objectSpread({}, accumulator, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, hrsUnit.name, hrsUnit));
      }, {});

      var selectCategories = function selectCategories(tokens) {
        var hasNoSuggestion = tokens.some(function (token) {
          return typeof token === 'string' && !categorySuggestions[token];
        });

        if (hasNoSuggestion) {
          return;
        } // Categories that are already will be objects, while new additions will be strings (the name).
        // allCategories nomalizes the array so that they are all objects.


        var allCategories = tokens.map(function (token) {
          return typeof token === 'string' ? categorySuggestions[token] : token;
        }); // We do nothing if the category is not selected from suggestions.

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["includes"])(allCategories, null)) {
          return false;
        }

        setAttributes({
          includeCategories: allCategories
        });
      };

      var selectHrsUnits = function selectHrsUnits(tokens) {
        var hasNoSuggestion = tokens.some(function (token) {
          return typeof token === 'string' && !hrsUnitSuggestions[token];
        });

        if (hasNoSuggestion) {
          return;
        } // Units that are already will be objects, while new additions will be strings (the name).
        // allUnits nomalizes the array so that they are all objects.


        var allUnits = tokens.map(function (token) {
          return typeof token === 'string' ? hrsUnitSuggestions[token] : token;
        }); // We do nothing if the unit is not selected from suggestions.

        if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["includes"])(allUnits, null)) {
          return false;
        }

        setAttributes({
          includeUnits: allUnits
        });
      };

      var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, null, console.log(includeUnits)
      /* @DEBUG just testing */
      , Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Post content settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Post content'),
        checked: displayPostContent,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContent: value
          });
        }
      }), displayPostContent && displayPostContentRadio === 'excerpt' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __('Max number of words in excerpt'),
        value: excerptLength,
        onChange: function onChange(value) {
          return setAttributes({
            excerptLength: value
          });
        },
        min: _constants__WEBPACK_IMPORTED_MODULE_10__["MIN_EXCERPT_LENGTH"],
        max: _constants__WEBPACK_IMPORTED_MODULE_10__["MAX_EXCERPT_LENGTH"]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Post meta settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Display post date'),
        checked: displayPostDate,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostDate: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Featured image settings')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
        label: __('Display featured image'),
        checked: displayFeaturedImage,
        onChange: function onChange(value) {
          return setAttributes({
            displayFeaturedImage: value
          });
        }
      }), displayFeaturedImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(__experimentalImageSizeControl, {
        onChange: function onChange(value) {
          var newAttrs = {};

          if (value.hasOwnProperty('width')) {
            newAttrs.featuredImageSizeWidth = value.width;
          }

          if (value.hasOwnProperty('height')) {
            newAttrs.featuredImageSizeHeight = value.height;
          }

          setAttributes(newAttrs);
        },
        slug: featuredImageSizeSlug,
        width: featuredImageSizeWidth,
        height: featuredImageSizeHeight,
        imageWidth: defaultImageWidth,
        imageHeight: defaultImageHeight,
        imageSizeOptions: imageSizeOptions,
        onChangeImage: function onChangeImage(value) {
          return setAttributes({
            featuredImageSizeSlug: value,
            featuredImageSizeWidth: undefined,
            featuredImageSizeHeight: undefined
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BaseControl.VisualLabel, null, __('Image alignment')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockAlignmentToolbar, {
        value: featuredImageAlign,
        onChange: function onChange(value) {
          return setAttributes({
            featuredImageAlign: value
          });
        },
        controls: ['left', 'center', 'right'],
        isCollapsed: false
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(PanelBody, {
        title: __('Sorting and Filtering')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(QueryControls, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        order: order,
        orderBy: orderBy
      }, {
        numberOfItems: postsToShow,
        onOrderChange: function onOrderChange(value) {
          return setAttributes({
            order: value
          });
        },
        onOrderByChange: function onOrderByChange(value) {
          return setAttributes({
            orderBy: value
          });
        },
        onNumberOfItemsChange: function onNumberOfItemsChange(value) {
          return setAttributes({
            postsToShow: value
          });
        },
        categorySuggestions: categorySuggestions,
        onCategoryChange: selectCategories,
        selectedCategories: includeCategories
      })), postLayout === 'grid' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RangeControl, {
        label: __('Columns'),
        value: columns,
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        },
        min: 2,
        max: !hasPosts ? _constants__WEBPACK_IMPORTED_MODULE_10__["MAX_POST_COLUMNS"] : Math.min(_constants__WEBPACK_IMPORTED_MODULE_10__["MAX_POST_COLUMNS"], latestPosts.length),
        required: true
      })));
      var hasPosts = Array.isArray(latestPosts) && latestPosts.length;

      if (!hasPosts) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Placeholder, {
          icon: pin,
          label: __('Posts list')
        }, !Array.isArray(latestPosts) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Spinner, null) : __('No posts found.')));
      } // Removing posts from display should be instant.


      var displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
      var layoutControls = [{
        icon: list,
        title: __('List view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'list'
          });
        },
        isActive: postLayout === 'list'
      }, {
        icon: grid,
        title: __('Grid view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'grid'
          });
        },
        isActive: postLayout === 'grid'
      }];

      var dateFormat = __experimentalGetSettings().formats.date;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToolbarGroup, {
        controls: layoutControls
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(this.props.className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
          'wp-block-latest-posts__list': true,
          'is-grid': postLayout === 'grid',
          'has-dates': displayPostDate
        }, "columns-".concat(columns), postLayout === 'grid'))
      }, displayPosts.map(function (post, i) {
        var titleTrimmed = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["invoke"])(post, ['title', 'rendered', 'trim']);
        var excerpt = post.excerpt.rendered;
        var excerptElement = document.createElement('div');
        excerptElement.innerHTML = excerpt;
        excerpt = excerptElement.textContent || excerptElement.innerText || '';
        var imageSourceUrl = post.featuredImageSourceUrl;
        var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
          'wp-block-latest-posts__featured-image': true
        }, "align".concat(featuredImageAlign), !!featuredImageAlign));
        var needsReadMore = excerptLength < excerpt.trim().split(' ').length && post.excerpt.raw === '';
        var postExcerpt = needsReadMore ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, excerpt.trim().split(' ', excerptLength).join(' '), __(' … '), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("a", {
          href: post.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, __('Read more'))) : excerpt;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("li", {
          key: i
        }, displayFeaturedImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: imageClasses
        }, imageSourceUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
          src: imageSourceUrl,
          alt: "",
          style: {
            maxWidth: featuredImageSizeWidth,
            maxHeight: featuredImageSizeHeight
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("a", {
          href: post.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, titleTrimmed ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RawHTML, null, titleTrimmed) : __('No title')), displayPostDate && post.date_gmt && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("time", {
          dateTime: format('c', post.date_gmt),
          className: "wp-block-latest-posts_post-date"
        }, dateI18n(dateFormat, post.date_gmt)), displayPostContent && displayPostContentRadio === 'excerpt' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: "wp-block-latest-posts_post-excerpt"
        }, postExcerpt), displayPostContent && displayPostContentRadio === 'full_post' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: "wp-block-latest-posts__post-full-content"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RawHTML, {
          key: "html"
        }, post.content.raw.trim())));
      })));
    }
  }]);

  return PostsListEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, props) {
  var _props$attributes = props.attributes,
      featuredImageSizeSlug = _props$attributes.featuredImageSizeSlug,
      postsToShow = _props$attributes.postsToShow,
      order = _props$attributes.order,
      orderBy = _props$attributes.orderBy,
      includeCategories = _props$attributes.includeCategories,
      includeUnits = _props$attributes.includeUnits;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getMedia = _select.getMedia;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      imageSizes = _getSettings.imageSizes,
      imageDimensions = _getSettings.imageDimensions;

  var catIds = includeCategories && includeCategories.length > 0 ? includeCategories.map(function (cat) {
    return cat.id;
  }) : [];
  var unitIds = includeUnits && includeUnits.length > 0 ? includeUnits.map(function (unit) {
    return unit.id;
  }) : [];
  var latestPostsQuery = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["pickBy"])({
    categories: catIds,
    unitIds: unitIds,
    order: order,
    orderby: orderBy,
    per_page: postsToShow
  }, function (value) {
    return !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(value);
  });
  var posts = getEntityRecords('postType', 'post', latestPostsQuery);
  var imageSizeOptions = imageSizes.filter(function (_ref) {
    var slug = _ref.slug;
    return slug !== 'full';
  }).map(function (_ref2) {
    var name = _ref2.name,
        slug = _ref2.slug;
    return {
      value: slug,
      label: name
    };
  });
  return {
    defaultImageWidth: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(imageDimensions, [featuredImageSizeSlug, 'width'], 0),
    defaultImageHeight: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(imageDimensions, [featuredImageSizeSlug, 'height'], 0),
    imageSizeOptions: imageSizeOptions,
    latestPosts: !Array.isArray(posts) ? posts : posts.map(function (post) {
      if (post.featured_media) {
        var image = getMedia(post.featured_media);
        var url = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(image, ['media_details', 'sizes', featuredImageSizeSlug, 'source_url'], null);

        if (!url) {
          url = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(image, 'source_url', null);
        }

        return _objectSpread({}, post, {
          featuredImageSourceUrl: url
        });
      }

      return post;
    })
  };
})(PostsListEdit));

/***/ }),

/***/ "./src/blocks/posts-list/index.js":
/*!****************************************!*\
  !*** ./src/blocks/posts-list/index.js ***!
  \****************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/posts-list/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/posts-list/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/posts-list/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/posts-list/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('Posts List'),
  icon: 'filter',
  category: category,
  description: __('Display a list of posts.'),
  keywords: [__('recent posts')],
  supports: supports,
  attributes: attributes,
  example: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/posts-list/save.js":
/*!***************************************!*\
  !*** ./src/blocks/posts-list/save.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/*
 * No data is saved to the block. Data is saved to post meta via attributes.
 *
 * Because this is similar to a dynamic block it doesn’t need to override the
 * default save implementation on the client. Instead, it needs a server
 * component. The contents in the front of your site depend on the function
 * called by the `render_callback` property of `register_block_type`.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/blocks/search-filter-input/block.json":
/*!***************************************************!*\
  !*** ./src/blocks/search-filter-input/block.json ***!
  \***************************************************/
/*! exports provided: name, category, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/search-filter-input\",\"category\":\"common\",\"supports\":{\"inserter\":false,\"reusable\":false,\"html\":false},\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"Search\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"buttonText\":{\"type\":\"string\",\"default\":\"Reset\"},\"elementId\":{\"type\":\"int\",\"default\":0}}}");

/***/ }),

/***/ "./src/blocks/search-filter-input/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/search-filter-input/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var RichText = wp.blockEditor.RichText;
var Disabled = wp.components.Disabled;
var withInstanceId = wp.compose.withInstanceId;

function SearchFilterInputEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      className = _ref.className,
      instanceId = _ref.instanceId;
  var label = attributes.label,
      buttonText = attributes.buttonText,
      elementId = attributes.elementId;
  setAttributes({
    elementId: "search-form-".concat(instanceId)
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "label",
    className: "wp-block-search__label",
    "aria-label": __('Label text'),
    placeholder: __('Add label…'),
    withoutInteractiveFormatting: true,
    allowedFormats: [],
    value: label,
    onChange: function onChange(value) {
      return setAttributes({
        label: value
      });
    },
    htmlFor: elementId,
    id: "".concat(elementId, "-label")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Disabled, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    "aria-labelledby": "".concat(elementId, "-label"),
    className: "wp-block-search__input",
    type: "search",
    name: "search_form_input",
    id: elementId
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-small"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "button",
    className: "wp-block-button__link ".concat(elementId, "-reset"),
    "aria-label": __('Reset search results.'),
    placeholder: __('Add button text…'),
    withoutInteractiveFormatting: true,
    allowedFormats: [],
    value: buttonText,
    onChange: function onChange(html) {
      return setAttributes({
        buttonText: html
      });
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(SearchFilterInputEdit));

/***/ }),

/***/ "./src/blocks/search-filter-input/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/search-filter-input/index.js ***!
  \*************************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/search-filter-input/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/search-filter-input/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/search-filter-input/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/search-filter-input/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('HRS Search Filter Input'),
  parent: ['hrswp/search-filter'],
  icon: 'filter',
  category: category,
  description: __('A search form for the search filter block.'),
  supports: supports,
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/search-filter-input/save.js":
/*!************************************************!*\
  !*** ./src/blocks/search-filter-input/save.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var RichText = wp.blockEditor.RichText;
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var label = attributes.label,
      buttonText = attributes.buttonText,
      elementId = attributes.elementId;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "label",
    className: "wp-block-search__label",
    value: label,
    htmlFor: elementId,
    id: "".concat(elementId, "-label")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    "aria-labelledby": "".concat(elementId, "-label"),
    className: "wp-block-search__input",
    type: "search",
    name: "search_form_input",
    id: elementId
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-small"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
    tagName: "button",
    className: "wp-block-button__link ".concat(elementId, "-reset"),
    value: buttonText
  })));
}

/***/ }),

/***/ "./src/blocks/search-filter-section/block.json":
/*!*****************************************************!*\
  !*** ./src/blocks/search-filter-section/block.json ***!
  \*****************************************************/
/*! exports provided: name, category, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/search-filter-section\",\"category\":\"common\",\"supports\":{\"inserter\":false,\"reusable\":false,\"html\":false}}");

/***/ }),

/***/ "./src/blocks/search-filter-section/edit.js":
/*!**************************************************!*\
  !*** ./src/blocks/search-filter-section/edit.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
var withSelect = wp.data.withSelect;

function SearchFilterSectionEdit(_ref) {
  var className = _ref.className,
      hasChildBlocks = _ref.hasChildBlocks;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className,
    "aria-live": "off"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : function () {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, ownProps) {
  var clientId = ownProps.clientId;

  var _select = select('core/block-editor'),
      getBlockOrder = _select.getBlockOrder;

  return {
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
})(SearchFilterSectionEdit));

/***/ }),

/***/ "./src/blocks/search-filter-section/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/search-filter-section/index.js ***!
  \***************************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/search-filter-section/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/search-filter-section/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/search-filter-section/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/search-filter-section/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports;

var settings = {
  title: __('HRS Search Filter Section'),
  parent: ['hrswp/search-filter'],
  icon: 'filter',
  category: category,
  description: __('A single section of content to search within.'),
  supports: supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/search-filter-section/save.js":
/*!**************************************************!*\
  !*** ./src/blocks/search-filter-section/save.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className,
    "aria-live": "off"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/search-filter/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/search-filter/block.json ***!
  \*********************************************/
/*! exports provided: name, category, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/search-filter\",\"category\":\"widgets\",\"supports\":{\"align\":true,\"html\":false},\"attributes\":{\"retainHeadings\":{\"type\":\"boolean\",\"default\":false}}}");

/***/ }),

/***/ "./src/blocks/search-filter/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/search-filter/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies.
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
/**
 * The Allowed Blocks.
 *
 * The allowed blocks constant is passed to InnerBlocks as specified here.
 * The only block allowed in the Search Filter block is the Search Filter
 * Section block (hrswp/search-filter-section).
 *
 * @constant
 * @type {string[]}
 */

var ALLOWED_BLOCKS = ['hrswp/search-filter-input', 'hrswp/search-filter-section'];
/**
 * The block template.
 *
 * This is locked so that the search input field is always first, followed
 * by a search filter section to contain the content to be searched.
 *
 * @constant
 * @type {string[]}
 */

var TEMPLATE = [['hrswp/search-filter-input'], ['hrswp/search-filter-section']];

function SearchFilterEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var retainHeadings = attributes.retainHeadings;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Search Filter Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Retain Headings'),
    checked: !!retainHeadings,
    onChange: function onChange() {
      return setAttributes({
        retainHeadings: !retainHeadings
      });
    },
    help: retainHeadings ? __('Headings not matching search term will not be hidden.') : __('Toggle to always show headings.')
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'has-retain-headings': retainHeadings
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    templateLock: "all",
    template: TEMPLATE,
    allowedBlocks: ALLOWED_BLOCKS
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchFilterEdit);

/***/ }),

/***/ "./src/blocks/search-filter/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/search-filter/index.js ***!
  \*******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/search-filter/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/search-filter/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/search-filter/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/search-filter/save.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
/**
 * Internal dependencies
 */




var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes;

var settings = {
  title: __('HRS Search Filter'),
  icon: 'filter',
  category: category,
  description: __('Search and filter a section of content by full text.'),
  keywords: [__('filter search')],
  supports: supports,
  attributes: attributes,
  example: {
    innerBlocks: [{
      name: 'hrswp/search-filter-input',
      attributes: {
        /* translators: example text. */
        label: __('Search'),

        /* translators: example text. */
        buttonText: __('Reset')
      }
    }, {
      name: 'hrswp/search-filter-section',
      innerBlocks: [{
        name: 'core/list',
        attributes: {
          values: __('<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li>')
        }
      }]
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/search-filter/save.js":
/*!******************************************!*\
  !*** ./src/blocks/search-filter/save.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies.
 */

/**
 * WordPress dependencies
 */

var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var retainHeadings = attributes.retainHeadings;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'has-retain-headings': retainHeadings
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/sidebar/block.json":
/*!***************************************!*\
  !*** ./src/blocks/sidebar/block.json ***!
  \***************************************/
/*! exports provided: name, category, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/sidebar\",\"category\":\"layout\",\"supports\":{\"align\":true}}");

/***/ }),

/***/ "./src/blocks/sidebar/edit.js":
/*!************************************!*\
  !*** ./src/blocks/sidebar/edit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies.
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var InnerBlocks = wp.blockEditor.InnerBlocks;
/**
 * The block template.
 *
 * This is locked so that the search input field is always first, followed
 * by a search filter section to contain the content to be searched.
 *
 * @constant
 * @type {string[]}
 */

var TEMPLATE = [['core/column', {
  placeholder: __('Enter the main content…')
}], ['core/column', {
  placeholder: __('Enter the sidebar content…')
}]];
/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */

var ALLOWED_BLOCKS = ['core/column'];

function SidebarEdit(_ref) {
  var className = _ref.className;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'wp-block-columns': true
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    template: TEMPLATE,
    templateLock: "all",
    allowedBlocks: ALLOWED_BLOCKS
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (SidebarEdit);

/***/ }),

/***/ "./src/blocks/sidebar/icon.js":
/*!************************************!*\
  !*** ./src/blocks/sidebar/icon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "468 268 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M468 268h24v24h-24v-24z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
  d: "M472 272h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-12c0-1.1.9-2 2-2zm0 2v12h10v-12h-10zm12 0v12h4v-12h-4z"
})));

/***/ }),

/***/ "./src/blocks/sidebar/index.js":
/*!*************************************!*\
  !*** ./src/blocks/sidebar/index.js ***!
  \*************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/sidebar/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/sidebar/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/sidebar/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/sidebar/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/sidebar/icon.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms */ "./src/blocks/sidebar/transforms.js");
/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    _x = _wp$i18n._x;
/**
 * Internal dependencies
 */






var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports;

var settings = {
  title: __('Sidebar'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  category: category,
  description: __('Display content in a sidebar-style layout (two-thirds and one-third).'),
  keywords: [__('sidebar'), __('columns')],
  supports: supports,
  example: {
    innerBlocks: [{
      name: 'core/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.')
        }
      }, {
        name: 'core/image',
        attributes: {
          url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: __('Suspendisse commodo neque lacus, a dictum orci interdum et.')
        }
      }]
    }, {
      name: 'core/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: __('Alice in Wonderland Characters')
        }
      }, {
        name: 'core/list',
        attributes: {
          values: __('<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li>')
        }
      }]
    }]
  },
  styles: [{
    name: 'sidebar-right',
    label: _x('Sidebar on right', 'block style'),
    isDefault: true
  }, {
    name: 'sidebar-left',
    label: _x('Sidebar on left', 'block style')
  }],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/sidebar/save.js":
/*!************************************!*\
  !*** ./src/blocks/sidebar/save.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies.
 */

/**
 * WordPress dependencies
 */

var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var className = _ref.className;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'wp-block-columns': true
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classes
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/sidebar/transforms.js":
/*!******************************************!*\
  !*** ./src/blocks/sidebar/transforms.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var createBlock = wp.blocks.createBlock;
var transforms = {
  from: [{
    type: 'block',
    blocks: ['hrs-wsu-edu/sidebar'],
    transform: function transform(attributes, innerBlocks) {
      return createBlock('hrswp/sidebar', attributes, innerBlocks);
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/**
 * Internal dependencies
 */

Object(_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlocks"])();

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map