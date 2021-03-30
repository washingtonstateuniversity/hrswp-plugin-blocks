/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/accordion-panel/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/accordion-panel/edit.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'accordion-panel',
    id: elementId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
    templateLock: false,
    renderAppender: function renderAppender() {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.ButtonBlockAppender, null);
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(AccordionPanelEdit));

/***/ }),

/***/ "./src/blocks/accordion-panel/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/accordion-panel/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion-panel/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-panel/block.json");
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/accordion-panel/save.js":
/*!********************************************!*\
  !*** ./src/blocks/accordion-panel/save.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    tagName: tagName,
    className: 'accordion-panel-heading',
    value: panelHeadingContent
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'accordion-panel',
    id: elementId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/blocks/accordion/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Heading level')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading_toolbar__WEBPACK_IMPORTED_MODULE_1__.default, {
    isCollapsed: false,
    minLevel: 1,
    maxLevel: 7,
    selectedLevel: level,
    onChange: function onChange(newLevel) {
      return updateHeadingLevel(newLevel);
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    "data-accordion-block": true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-buttons controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-button is-style-outline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: "open-all-panels",
    className: "wp-block-button__link"
  }, "Open all")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-button is-style-outline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: "close-all-panels",
    className: "wp-block-button__link"
  }, "Close All")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeadingLevelIcon; }
/* harmony export */ });
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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    ispressed: ispressed
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
    d: levelToPath[level]
  }));
}

/***/ }),

/***/ "./src/blocks/accordion/heading-toolbar.js":
/*!*************************************************!*\
  !*** ./src/blocks/accordion/heading-toolbar.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heading-level-icon */ "./src/blocks/accordion/heading-level-icon.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(AccordionHeadingToolbar, _Component);

  var _super = _createSuper(AccordionHeadingToolbar);

  function AccordionHeadingToolbar() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AccordionHeadingToolbar);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AccordionHeadingToolbar, [{
    key: "createLevelControl",
    value: function createLevelControl(targetLevel, selectedLevel, onChange) {
      var isActive = targetLevel === selectedLevel;
      return {
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_7__.default, {
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
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(Toolbar, {
        isCollapsed: isCollapsed,
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_7__.default, {
          level: selectedLevel
        }),
        controls: (0,lodash__WEBPACK_IMPORTED_MODULE_6__.range)(minLevel, maxLevel).map(function (index) {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1z"
})));

/***/ }),

/***/ "./src/blocks/accordion/index.js":
/*!***************************************!*\
  !*** ./src/blocks/accordion/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion/block.json");
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
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__.default,
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/accordion/save.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var className = _ref.className;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    "data-accordion-block": true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-buttons controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-button is-style-outline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: "open-all-panels",
    className: "wp-block-button__link"
  }, "Open all")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-button is-style-outline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: "close-all-panels",
    className: "wp-block-button__link"
  }, "Close All"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/callout/edit.js":
/*!************************************!*\
  !*** ./src/blocks/callout/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
    template: TEMPLATE
  })));
}

/***/ }),

/***/ "./src/blocks/callout/icon.js":
/*!************************************!*\
  !*** ./src/blocks/callout/icon.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M21,3H3C1.9,3,1,3.9,1,5v14c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M21,19H3V5h18V19z M5,6h14v3H5V6z M5,11h14v6.25H5V11z"
})));

/***/ }),

/***/ "./src/blocks/callout/index.js":
/*!*************************************!*\
  !*** ./src/blocks/callout/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/callout/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/callout/block.json");
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
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__.default,
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/callout/save.js":
/*!************************************!*\
  !*** ./src/blocks/callout/save.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var className = _ref.className;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerBlocks": function() { return /* binding */ registerBlocks; }
/* harmony export */ });
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

/***/ "./src/blocks/notification/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/notification/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: __('Action Button Settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
    label: __('Show Action Button'),
    checked: !!showActionButton,
    onChange: function onChange(value) {
      return updateBlocks(value);
    },
    help: showActionButton ? __('Use the action button to call users to action.') : __('Toggle to include an action button.')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: classes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerBlocks, {
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
        innerBlocks = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(innerBlocks), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.times)(1, function () {
          return createBlock('core/button');
        })));
      } else {
        // Remove the action button.
        innerBlocks = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.dropRight)(innerBlocks, 1);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M0,0h48v48H0V0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M42,12H6c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V16C46,13.8,44.2,12,42,12z M42,32H6V16h36V32z M28,22v4 h12v-4H28z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Circle, {
  cx: "11",
  cy: "24",
  r: "1.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Circle, {
  cx: "15",
  cy: "24",
  r: "1.5"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Circle, {
  cx: "19",
  cy: "24",
  r: "1.5"
})));

/***/ }),

/***/ "./src/blocks/notification/index.js":
/*!******************************************!*\
  !*** ./src/blocks/notification/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/notification/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/notification/block.json");
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
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__.default,
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/notification/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/notification/save.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'has-action-button': showActionButton
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/posts-list/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/posts-list/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons */ "./src/blocks/posts-list/icons.js");
/* harmony import */ var _post_meta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post-meta */ "./src/blocks/posts-list/post-meta.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared */ "./src/blocks/posts-list/shared.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    QueryControls = _wp$components.QueryControls,
    RadioControl = _wp$components.RadioControl,
    RangeControl = _wp$components.RangeControl,
    Spinner = _wp$components.Spinner,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarGroup = _wp$components.ToolbarGroup;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    __experimentalImageSizeControl = _wp$blockEditor.__experimentalImageSizeControl;
var withSelect = wp.data.withSelect;
/**
 * Internal dependencies
 */





var PostsListEdit = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(PostsListEdit, _Component);

  var _super = _createSuper(PostsListEdit);

  function PostsListEdit() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, PostsListEdit);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(PostsListEdit, [{
    key: "toggleSelectedTerms",
    value:
    /**
     * Adds or removes a taxonomy term from the selected terms attribute.
     *
     * @param {string} taxonomy A WP taxonomy `rest_base` value.
     * @param {Object} term The selected term to add or remove.
     */
    function toggleSelectedTerms(taxonomy, term) {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var selectedTermLists = attributes.selectedTermLists;
      var allTerms = !(0,lodash__WEBPACK_IMPORTED_MODULE_9__.isUndefined)(selectedTermLists) ? selectedTermLists : {};
      var taxonomyTerms = !(0,lodash__WEBPACK_IMPORTED_MODULE_9__.isUndefined)(allTerms[taxonomy]) ? allTerms[taxonomy] : allTerms[taxonomy] = [];
      var hasTerm = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.includes)((0,_shared__WEBPACK_IMPORTED_MODULE_13__.taxonomyListToIds)(allTerms, taxonomy), term.id);
      var newTerms = hasTerm ? (0,lodash__WEBPACK_IMPORTED_MODULE_9__.remove)(taxonomyTerms, function (value) {
        return value.id !== term.id;
      }) : [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(taxonomyTerms), [term]);
      allTerms[taxonomy] = newTerms;
      setAttributes({
        selectedTermLists: allTerms
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes,
          className = _this$props2.className,
          imageSizeOptions = _this$props2.imageSizeOptions,
          postsList = _this$props2.postsList,
          taxonomies = _this$props2.taxonomies,
          termLists = _this$props2.termLists,
          defaultImageWidth = _this$props2.defaultImageWidth,
          defaultImageHeight = _this$props2.defaultImageHeight;
      var displayFeaturedImage = attributes.displayFeaturedImage,
          displayPostContentRadio = attributes.displayPostContentRadio,
          displayPostContent = attributes.displayPostContent,
          displayPostDate = attributes.displayPostDate,
          displayPostCategory = attributes.displayPostCategory,
          displayPostTag = attributes.displayPostTag,
          displayPostTaxonomy = attributes.displayPostTaxonomy,
          postLayout = attributes.postLayout,
          columns = attributes.columns,
          order = attributes.order,
          orderBy = attributes.orderBy,
          selectedTermLists = attributes.selectedTermLists,
          postsToShow = attributes.postsToShow,
          excerptLength = attributes.excerptLength,
          featuredImageAlign = attributes.featuredImageAlign,
          featuredImageSizeSlug = attributes.featuredImageSizeSlug,
          featuredImageSizeWidth = attributes.featuredImageSizeWidth,
          featuredImageSizeHeight = attributes.featuredImageSizeHeight;
      var inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(PanelBody, {
        title: __('Post content settings')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(ToggleControl, {
        label: __('Post content'),
        checked: displayPostContent,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContent: value
          });
        }
      }), displayPostContent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(RadioControl, {
        label: __('Show:'),
        selected: displayPostContentRadio,
        options: [{
          label: __('Excerpt'),
          value: 'excerpt'
        }, {
          label: __('Full post'),
          value: 'full_post'
        }],
        onChange: function onChange(value) {
          return setAttributes({
            displayPostContentRadio: value
          });
        }
      }), displayPostContent && displayPostContentRadio === 'excerpt' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(RangeControl, {
        label: __('Max number of words in excerpt'),
        value: excerptLength,
        onChange: function onChange(value) {
          return setAttributes({
            excerptLength: value
          });
        },
        min: _shared__WEBPACK_IMPORTED_MODULE_13__.MIN_EXCERPT_LENGTH,
        max: _shared__WEBPACK_IMPORTED_MODULE_13__.MAX_EXCERPT_LENGTH
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(PanelBody, {
        title: __('Post meta settings')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(ToggleControl, {
        label: __('Display post date'),
        checked: displayPostDate,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostDate: value
          });
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(ToggleControl, {
        label: __('Display post category'),
        checked: displayPostCategory,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostCategory: value
          });
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(ToggleControl, {
        label: __('Display post tag'),
        checked: displayPostTag,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostTag: value
          });
        }
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(ToggleControl, {
        label: __('Display post taxonomy'),
        checked: displayPostTaxonomy,
        onChange: function onChange(value) {
          return setAttributes({
            displayPostTaxonomy: value
          });
        }
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(PanelBody, {
        title: __('Featured image settings')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(ToggleControl, {
        label: __('Display featured image'),
        checked: displayFeaturedImage,
        onChange: function onChange(value) {
          return setAttributes({
            displayFeaturedImage: value
          });
        }
      }), displayFeaturedImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(__experimentalImageSizeControl, {
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
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(BaseControl.VisualLabel, null, __('Image alignment')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(BlockAlignmentToolbar, {
        value: featuredImageAlign,
        onChange: function onChange(value) {
          return setAttributes({
            featuredImageAlign: value
          });
        },
        controls: ['left', 'center', 'right'],
        isCollapsed: false
      })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(PanelBody, {
        className: "".concat(className, " taxonomy-filter"),
        title: __('Filtering'),
        initialOpen: false
      }, taxonomies.map(function (taxonomy) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(PanelBody, {
          className: 'taxonomy-filter--body',
          key: taxonomy.slug,
          title: taxonomy.name,
          initialOpen: false
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("ul", {
          className: "edit__checklist"
        }, termLists[taxonomy.slug] && termLists[taxonomy.slug].map(function (term) {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("li", {
            key: term.id,
            className: "components-checkbox-control__label"
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(CheckboxControl, {
            label: term.name,
            checked: (0,lodash__WEBPACK_IMPORTED_MODULE_9__.includes)((0,_shared__WEBPACK_IMPORTED_MODULE_13__.taxonomyListToIds)(selectedTermLists, taxonomy.rest_base), term.id),
            onChange: function onChange() {
              _this.toggleSelectedTerms(taxonomy.rest_base, term);
            }
          }));
        })));
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(PanelBody, {
        title: __('Order and number'),
        initialOpen: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(QueryControls, {
        order: order,
        orderBy: orderBy,
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
        }
      }), postLayout === 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(RangeControl, {
        label: __('Maximum columns'),
        value: columns,
        onChange: function onChange(value) {
          return setAttributes({
            columns: value
          });
        },
        min: 2,
        max: !hasPosts ? _shared__WEBPACK_IMPORTED_MODULE_13__.MAX_POSTS_COLUMNS : Math.min(_shared__WEBPACK_IMPORTED_MODULE_13__.MAX_POSTS_COLUMNS, postsList.length),
        required: true
      })));
      var hasPosts = Array.isArray(postsList) && postsList.length;

      if (!hasPosts) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(Placeholder, {
          icon: _icons__WEBPACK_IMPORTED_MODULE_11__.pin,
          label: __('Posts')
        }, !Array.isArray(postsList) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(Spinner, null) : __('No posts found.')));
      } // Removing posts from display should be instant.


      var displayPosts = postsList.length > postsToShow ? postsList.slice(0, postsToShow) : postsList;
      var layoutControls = [{
        icon: _icons__WEBPACK_IMPORTED_MODULE_11__.list,
        title: __('List view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'list'
          });
        },
        isActive: postLayout === 'list'
      }, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_11__.grid,
        title: __('Grid view'),
        onClick: function onClick() {
          return setAttributes({
            postLayout: 'grid'
          });
        },
        isActive: postLayout === 'grid'
      }];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(ToolbarGroup, {
        controls: layoutControls
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(className, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({
          'is-grid': postLayout === 'grid',
          'has-feature-image': displayFeaturedImage,
          'has-date': displayPostDate,
          'has-full-content': displayPostContent && displayPostContentRadio === 'full_post',
          'has-excerpt': displayPostContent && displayPostContentRadio === 'excerpt'
        }, "columns-".concat(columns), postLayout === 'grid'))
      }, displayPosts.map(function (post, i) {
        var _classnames2;

        var titleTrimmed = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.invoke)(post, ['title', 'rendered', 'trim']);
        var excerpt = post.content.rendered;
        var excerptElement = document.createElement('div');
        excerptElement.innerHTML = excerpt;
        excerpt = excerptElement.textContent || excerptElement.innerText || '';
        var imageSourceUrl = post.featuredImageSourceUrl;
        var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classnames2 = {
          'wp-block-hrswp-posts-list--featured-image': true
        }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_classnames2, "size-".concat(featuredImageSizeSlug), !!featuredImageSizeSlug), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_classnames2, "align".concat(featuredImageAlign), !!featuredImageAlign), _classnames2));
        var hasPostMeta = displayPostDate || displayPostCategory || displayPostTag || displayPostTaxonomy;
        var needsReadMore = excerptLength < excerpt.trim().split(' ').length && post.excerpt.raw === '';
        var postExcerpt = needsReadMore ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, excerpt.trim().split(' ', excerptLength).join(' '), __(' … ')) : excerpt;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("div", {
          className: "wp-block-hrswp-posts-list--list-item",
          key: i
        }, displayFeaturedImage && imageSourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("figure", {
          className: imageClasses
        }, imageSourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("img", {
          src: imageSourceUrl,
          alt: "",
          style: {
            maxWidth: featuredImageSizeWidth,
            maxHeight: featuredImageSizeHeight
          }
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("div", {
          className: "wp-block-hrswp-posts-list--body"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("h3", {
          className: "wp-block-hrswp-posts-list--heading"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("a", {
          href: post.link,
          target: "_blank",
          rel: "noreferrer noopener"
        }, titleTrimmed ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(RawHTML, null, titleTrimmed) : __('(no title)'))), displayPostContent && displayPostContentRadio === 'excerpt' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("p", {
          className: "wp-block-hrswp-posts-list--post-excerpt"
        }, postExcerpt), displayPostContent && displayPostContentRadio === 'full_post' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)("div", {
          className: "wp-block-hrswp-posts-list--post-full-content"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(RawHTML, {
          key: "html"
        }, post.content.raw.trim())), hasPostMeta && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.createElement)(_post_meta__WEBPACK_IMPORTED_MODULE_12__.PostMeta, {
          displayPostCategory: displayPostCategory,
          displayPostDate: displayPostDate,
          displayPostTag: displayPostTag,
          displayPostTaxonomy: displayPostTaxonomy,
          post: post,
          taxonomies: taxonomies,
          termLists: termLists
        })));
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
      selectedTermLists = _props$attributes.selectedTermLists;

  var _select = select('core'),
      getEntityRecords = _select.getEntityRecords,
      getMedia = _select.getMedia,
      getTaxonomies = _select.getTaxonomies;

  var _select2 = select('core/block-editor'),
      getSettings = _select2.getSettings;

  var _getSettings = getSettings(),
      imageSizes = _getSettings.imageSizes,
      imageDimensions = _getSettings.imageDimensions;

  var postsListQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.pickBy)({
    order: order,
    orderby: orderBy,
    per_page: postsToShow
  }, function (value) {
    return !(0,lodash__WEBPACK_IMPORTED_MODULE_9__.isUndefined)(value);
  });

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_9__.isUndefined)(selectedTermLists)) {
    Object.entries(selectedTermLists).forEach(function (_ref) {
      var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),
          slug = _ref2[0],
          terms = _ref2[1];

      postsListQuery[slug] = terms.map(function (term) {
        return term.id;
      });
    });
  }

  var posts = getEntityRecords('postType', 'post', postsListQuery);
  var allTaxonomies = getTaxonomies(_shared__WEBPACK_IMPORTED_MODULE_13__.TERMS_LIST_QUERY);
  var taxonomies = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.filter)(allTaxonomies, function (taxonomy) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_9__.includes)(taxonomy.types, 'post');
  });
  var termLists = {};
  taxonomies.forEach(function (_ref3) {
    var slug = _ref3.slug;
    Object.defineProperty(termLists, slug, {
      value: getEntityRecords('taxonomy', slug, _shared__WEBPACK_IMPORTED_MODULE_13__.TERMS_LIST_QUERY)
    });
  });
  var imageSizeOptions = imageSizes.filter(function (_ref4) {
    var slug = _ref4.slug;
    return slug !== 'full';
  }).map(function (_ref5) {
    var name = _ref5.name,
        slug = _ref5.slug;
    return {
      value: slug,
      label: name
    };
  });
  return {
    defaultImageWidth: (0,lodash__WEBPACK_IMPORTED_MODULE_9__.get)(imageDimensions, [featuredImageSizeSlug, 'width'], 0),
    defaultImageHeight: (0,lodash__WEBPACK_IMPORTED_MODULE_9__.get)(imageDimensions, [featuredImageSizeSlug, 'height'], 0),
    imageSizeOptions: imageSizeOptions,
    taxonomies: taxonomies,
    termLists: termLists,
    postsList: !Array.isArray(posts) ? posts : posts.map(function (post) {
      if (post.featured_media) {
        var image = getMedia(post.featured_media);
        var url = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.get)(image, ['media_details', 'sizes', featuredImageSizeSlug, 'source_url'], null);

        if (!url) {
          url = (0,lodash__WEBPACK_IMPORTED_MODULE_9__.get)(image, 'source_url', null);
        }

        return _objectSpread(_objectSpread({}, post), {}, {
          featuredImageSourceUrl: url
        });
      }

      return post;
    })
  };
})(PostsListEdit));

/***/ }),

/***/ "./src/blocks/posts-list/icons.js":
/*!****************************************!*\
  !*** ./src/blocks/posts-list/icons.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "grid": function() { return /* binding */ grid; },
/* harmony export */   "pin": function() { return /* binding */ pin; },
/* harmony export */   "list": function() { return /* binding */ list; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 18V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6V3h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6v-6h11z"
}));
var grid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z"
}));
var pin = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"
}));
var list = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11z"
}));

/***/ }),

/***/ "./src/blocks/posts-list/index.js":
/*!****************************************!*\
  !*** ./src/blocks/posts-list/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/posts-list/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/posts-list/block.json");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/blocks/posts-list/icons.js");
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
  title: __('Posts List'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__.icon,
  category: category,
  description: __('Display a list of posts.'),
  keywords: [__('posts'), __('latest posts')],
  supports: supports,
  example: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default
};

/***/ }),

/***/ "./src/blocks/posts-list/list-terms.js":
/*!*********************************************!*\
  !*** ./src/blocks/posts-list/list-terms.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListTerms": function() { return /* binding */ ListTerms; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var Fragment = wp.element.Fragment;
var ListTerms = function ListTerms(props) {
  var terms = props.terms,
      taxonomySlug = props.taxonomySlug,
      post = props.post,
      prefix = props.prefix; // Compat check for WP mismatched slugs.

  var slug;

  if ('category' === taxonomySlug || 'post_tag' === taxonomySlug) {
    slug = 'category' === taxonomySlug ? 'categories' : 'tags';
  } else {
    slug = taxonomySlug;
  }

  var postTerms = post[slug];
  var hasTerms = Array.isArray(postTerms) && postTerms.length;

  if (!hasTerms) {
    return null;
  }

  var listTerms = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(terms[taxonomySlug], function (i) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(postTerms, i.id);
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "wp-block-hrswp-posts-list--".concat(taxonomySlug, "-list")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, prefix), listTerms.map(function (term, i) {
    var sep = i > 0 ? ', ' : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, {
      key: i
    }, sep, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: term.link,
      target: "_blank",
      rel: "noreferrer noopener"
    }, term.name));
  }));
};

/***/ }),

/***/ "./src/blocks/posts-list/post-meta.js":
/*!********************************************!*\
  !*** ./src/blocks/posts-list/post-meta.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostMeta": function() { return /* binding */ PostMeta; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list_terms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-terms */ "./src/blocks/posts-list/list-terms.js");


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    format = _wp$date.format,
    __experimentalGetSettings = _wp$date.__experimentalGetSettings;
/**
 * Internal dependencies
 */


var PostMeta = function PostMeta(props) {
  var displayPostCategory = props.displayPostCategory,
      displayPostDate = props.displayPostDate,
      displayPostTag = props.displayPostTag,
      displayPostTaxonomy = props.displayPostTaxonomy,
      post = props.post,
      taxonomies = props.taxonomies,
      termLists = props.termLists;

  var dateFormat = __experimentalGetSettings().formats.date;

  var hasPostTerms = displayPostCategory || displayPostTag || displayPostTaxonomy; // Move `post_tags` to the end.

  if (hasPostTerms && taxonomies) {
    taxonomies.push(taxonomies.splice(taxonomies.findIndex(function (i) {
      return i.slug === 'post_tag';
    }), 1)[0]);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-hrswp-posts-list--meta"
  }, hasPostTerms && taxonomies.map(function (taxonomy) {
    var prefix;

    if ('category' === taxonomy.slug) {
      if (!displayPostCategory) {
        return null;
      }

      prefix = __('More on: ');
    } else if ('post_tag' === taxonomy.slug) {
      if (!displayPostTag) {
        return null;
      }

      prefix = 'Tagged: ';
    } else {
      if (!displayPostTaxonomy) {
        return null;
      }

      prefix = "".concat(taxonomy.labels.singular_name, ": ");
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_list_terms__WEBPACK_IMPORTED_MODULE_1__.ListTerms, {
      key: taxonomy.slug,
      post: post,
      terms: termLists,
      taxonomySlug: taxonomy.slug,
      prefix: prefix
    });
  }), displayPostDate && post.date_gmt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "wp-block-hrswp-posts-list--post-date"
  }, __('Published on '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("time", {
    dateTime: format('c', post.date_gmt)
  }, dateI18n(dateFormat, post.date_gmt))));
};

/***/ }),

/***/ "./src/blocks/posts-list/shared.js":
/*!*****************************************!*\
  !*** ./src/blocks/posts-list/shared.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIN_EXCERPT_LENGTH": function() { return /* binding */ MIN_EXCERPT_LENGTH; },
/* harmony export */   "MAX_EXCERPT_LENGTH": function() { return /* binding */ MAX_EXCERPT_LENGTH; },
/* harmony export */   "MAX_POSTS_COLUMNS": function() { return /* binding */ MAX_POSTS_COLUMNS; },
/* harmony export */   "TERMS_LIST_QUERY": function() { return /* binding */ TERMS_LIST_QUERY; },
/* harmony export */   "taxonomyListToIds": function() { return /* binding */ taxonomyListToIds; }
/* harmony export */ });
var MIN_EXCERPT_LENGTH = 10;
var MAX_EXCERPT_LENGTH = 100;
var MAX_POSTS_COLUMNS = 6;
var TERMS_LIST_QUERY = {
  per_page: -1
};
/**
 * Converts an array of taxonomy terms into an array of IDs.
 *
 * @param {Object[]} terms An array of taxonomy term objects.
 * @param {string} taxonomy The name of the taxonomy the terms belong to.
 */

function taxonomyListToIds(terms, taxonomy) {
  if (!terms) {
    return null;
  }

  var ids = terms[taxonomy] && terms[taxonomy].length > 0 ? terms[taxonomy].map(function (term) {
    return term.id;
  }) : [];
  return ids;
}

/***/ }),

/***/ "./src/blocks/search-filter-input/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/search-filter-input/edit.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Disabled, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    "aria-labelledby": "".concat(elementId, "-label"),
    className: "wp-block-search__input",
    type: "search",
    name: "search_form_input",
    id: elementId
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-button is-style-small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/search-filter-input/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/search-filter-input/block.json");
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/search-filter-input/save.js":
/*!************************************************!*\
  !*** ./src/blocks/search-filter-input/save.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    tagName: "label",
    className: "wp-block-search__label",
    value: label,
    htmlFor: elementId,
    id: "".concat(elementId, "-label")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    "aria-labelledby": "".concat(elementId, "-label"),
    className: "wp-block-search__input",
    type: "search",
    name: "search_form_input",
    id: elementId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-button is-style-small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    tagName: "button",
    className: "wp-block-button__link ".concat(elementId, "-reset"),
    value: buttonText
  })));
}

/***/ }),

/***/ "./src/blocks/search-filter-section/edit.js":
/*!**************************************************!*\
  !*** ./src/blocks/search-filter-section/edit.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    "aria-live": "off"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : function () {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.ButtonBlockAppender, null);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/search-filter-section/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/search-filter-section/block.json");
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/search-filter-section/save.js":
/*!**************************************************!*\
  !*** ./src/blocks/search-filter-section/save.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save(_ref) {
  var className = _ref.className;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    "aria-live": "off"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/search-filter/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/search-filter/edit.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Search Filter Settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Retain Headings'),
    checked: !!retainHeadings,
    onChange: function onChange() {
      return setAttributes({
        retainHeadings: !retainHeadings
      });
    },
    help: retainHeadings ? __('Headings not matching search term will not be hidden.') : __('Toggle to always show headings.')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'has-retain-headings': retainHeadings
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/search-filter/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/search-filter/block.json");
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
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/search-filter/save.js":
/*!******************************************!*\
  !*** ./src/blocks/search-filter/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'has-retain-headings': retainHeadings
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/sidebar/edit.js":
/*!************************************!*\
  !*** ./src/blocks/sidebar/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "468 268 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M468 268h24v24h-24v-24z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M472 272h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-12c0-1.1.9-2 2-2zm0 2v12h10v-12h-10zm12 0v12h4v-12h-4z"
})));

/***/ }),

/***/ "./src/blocks/sidebar/index.js":
/*!*************************************!*\
  !*** ./src/blocks/sidebar/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/sidebar/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/sidebar/block.json");
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
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__.default,
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
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_4__.default,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default
};

/***/ }),

/***/ "./src/blocks/sidebar/save.js":
/*!************************************!*\
  !*** ./src/blocks/sidebar/save.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/sidebar/transforms.js":
/*!******************************************!*\
  !*** ./src/blocks/sidebar/transforms.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

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
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

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
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/accordion-panel","category":"layout","supports":{"reusable":false},"attributes":{"panelHeadingContent":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6","default":""},"elementId":{"type":"int","default":0},"level":{"type":"number","default":2}}}');

/***/ }),

/***/ "./src/blocks/accordion/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/accordion/block.json ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/accordion","category":"layout","supports":{"align":true},"attributes":{"level":{"type":"number","default":2}}}');

/***/ }),

/***/ "./src/blocks/callout/block.json":
/*!***************************************!*\
  !*** ./src/blocks/callout/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/callout","category":"layout","supports":{"align":true}}');

/***/ }),

/***/ "./src/blocks/notification/block.json":
/*!********************************************!*\
  !*** ./src/blocks/notification/block.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/notification","category":"layout","supports":{"align":true},"attributes":{"showActionButton":{"type":"boolean","default":true}}}');

/***/ }),

/***/ "./src/blocks/posts-list/block.json":
/*!******************************************!*\
  !*** ./src/blocks/posts-list/block.json ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/posts-list","category":"widgets","supports":{"align":true,"html":false}}');

/***/ }),

/***/ "./src/blocks/search-filter-input/block.json":
/*!***************************************************!*\
  !*** ./src/blocks/search-filter-input/block.json ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/search-filter-input","category":"common","supports":{"inserter":false,"reusable":false,"html":false},"attributes":{"label":{"type":"string","default":"Search"},"placeholder":{"type":"string","default":""},"buttonText":{"type":"string","default":"Reset"},"elementId":{"type":"int","default":0}}}');

/***/ }),

/***/ "./src/blocks/search-filter-section/block.json":
/*!*****************************************************!*\
  !*** ./src/blocks/search-filter-section/block.json ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/search-filter-section","category":"common","supports":{"inserter":false,"reusable":false,"html":false}}');

/***/ }),

/***/ "./src/blocks/search-filter/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/search-filter/block.json ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/search-filter","category":"widgets","supports":{"align":true,"html":false},"attributes":{"retainHeadings":{"type":"boolean","default":false}}}');

/***/ }),

/***/ "./src/blocks/sidebar/block.json":
/*!***************************************!*\
  !*** ./src/blocks/sidebar/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/sidebar","category":"layout","supports":{"align":true}}');

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/**
 * Internal dependencies
 */

(0,_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlocks)();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map