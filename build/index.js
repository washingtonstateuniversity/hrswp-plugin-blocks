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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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
/* harmony import */ var _search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-filter */ "./src/blocks/search-filter/index.js");
/* harmony import */ var _search_filter_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-filter-section */ "./src/blocks/search-filter-section/index.js");
/* harmony import */ var _search_filter_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-filter-input */ "./src/blocks/search-filter-input/index.js");
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
  [_search_filter__WEBPACK_IMPORTED_MODULE_0__, _search_filter_section__WEBPACK_IMPORTED_MODULE_1__, _search_filter_input__WEBPACK_IMPORTED_MODULE_2__].forEach(function (block) {
    if (!block) {
      return;
    }

    var settings = block.settings,
        name = block.name;
    registerBlockType(name, settings);
  });
};

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
    htmlFor: elementId
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Disabled, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "wp-block-search__input",
    "aria-label": __('Optional placeholder text'),
    type: "search",
    name: "search_form_input",
    id: elementId,
    "data-search-type": ""
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-button is-style-small"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "button",
    className: "wp-block-button__link ".concat(elementId, "-reset"),
    "aria-label": __('Button text'),
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
  icon: 'portfolio',
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
var __ = wp.i18n.__;
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
    htmlFor: elementId
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "wp-block-search__input",
    "aria-label": __('Optional placeholder text'),
    type: "search",
    name: "search_form_input",
    id: elementId,
    "data-search-type": ""
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
    className: className
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
  icon: 'portfolio',
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
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/search-filter/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/search-filter/block.json ***!
  \*********************************************/
/*! exports provided: name, category, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrswp/search-filter\",\"category\":\"widgets\",\"supports\":{\"align\":true,\"html\":false}}");

/***/ }),

/***/ "./src/blocks/search-filter/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/search-filter/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
var createBlock = wp.blocks.createBlock;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    useDispatch = _wp$data.useDispatch,
    useSelect = _wp$data.useSelect;
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

var ALLOWED_BLOCKS = ['hrswp/search-filter-section'];
var TEMPLATE = [['hrswp/search-filter-input'], ['hrswp/search-filter-section']];

function SearchFilterEditContainer(_ref) {
  var className = _ref.className,
      clientId = _ref.clientId,
      updateSections = _ref.updateSections;

  var _useSelect = useSelect(function (select) {
    return {
      count: select('core/block-editor').getBlockCount(clientId)
    };
  }, [clientId]),
      count = _useSelect.count;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RangeControl, {
    label: __('Sections'),
    value: count,
    onChange: function onChange(value) {
      return updateSections(count, value);
    },
    min: 1,
    max: 60
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, {
    templateLock: "all",
    allowedBlocks: ALLOWED_BLOCKS
  })));
}

var SearchFilterEditContainerWrapper = withDispatch(function (dispatch, ownProps, registry) {
  return {
    /**
     * Updates the section count, including necessary revisions to child Section
     * blocks.
     *
     * @param {number} previousSections Previous sections count.
     * @param {number} newSections      New sections count.
     */
    updateSections: function updateSections(previousSections, newSections) {
      var clientId = ownProps.clientId;

      var _dispatch = dispatch('core/block-editor'),
          replaceInnerBlocks = _dispatch.replaceInnerBlocks;

      var _registry$select = registry.select('core/block-editor'),
          getBlocks = _registry$select.getBlocks;

      var innerBlocks = getBlocks(clientId);
      var isAddingSection = newSections > previousSections;

      if (isAddingSection) {
        innerBlocks = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(innerBlocks), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["times"])(newSections - previousSections, function () {
          return createBlock('hrswp/search-filter-section');
        })));
      } else {
        // The removed section will be the last of the inner blocks.
        innerBlocks = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["dropRight"])(innerBlocks, previousSections - newSections);
      }

      replaceInnerBlocks(clientId, innerBlocks, false);
    }
  };
})(SearchFilterEditContainer);

var createBlocksFromInnerBlocksTemplate = function createBlocksFromInnerBlocksTemplate(innerBlocksTemplate) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(innerBlocksTemplate, function (_ref2) {
    var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 3),
        name = _ref3[0],
        attributes = _ref3[1],
        _ref3$ = _ref3[2],
        innerBlocks = _ref3$ === void 0 ? [] : _ref3$;

    return createBlock(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks));
  });
};

var SearchFilterEdit = function SearchFilterEdit(props) {
  var clientId = props.clientId,
      name = props.name,
      className = props.className;

  var _useSelect2 = useSelect(function (select) {
    var _select = select('core/blocks'),
        getBlockType = _select.getBlockType;

    return {
      blockType: getBlockType(name),
      hasInnerBlocks: select('core/block-editor').getBlocks(clientId).length > 0
    };
  }, [clientId, name]),
      blockType = _useSelect2.blockType,
      hasInnerBlocks = _useSelect2.hasInnerBlocks;

  var _useDispatch = useDispatch('core/block-editor'),
      replaceInnerBlocks = _useDispatch.replaceInnerBlocks;

  if (hasInnerBlocks) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SearchFilterEditContainerWrapper, props);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InnerBlocks, {
    templateLock: "all",
    template: TEMPLATE,
    allowedBlocks: ALLOWED_BLOCKS
  }));
};

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
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports;

var settings = {
  title: __('HRS Search Filter'),
  icon: 'portfolio',
  category: category,
  description: __('Filter a section of content by heading or full text.'),
  keywords: [__('filter search')],
  supports: supports,
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


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var label = attributes.label;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

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