/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/accordion-heading/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-heading/edit.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  RichText,
  useBlockProps
} = wp.blockEditor;

function HeadingEdit(_ref) {
  let {
    attributes,
    setAttributes,
    onReplace,
    mergedStyle
  } = _ref;
  const {
    content,
    level,
    placeholder
  } = attributes;
  const tagName = 'h' + level;
  const blockProps = useBlockProps({
    style: mergedStyle
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    identifier: "content",
    allowedFormats: [],
    tagName: tagName,
    className: 'hrswp-accordion-heading',
    value: content,
    onChange: value => setAttributes({
      content: value
    }),
    onReplace: onReplace,
    onRemove: () => onReplace([]),
    "aria-label": __('Heading text'),
    placeholder: placeholder || __('Brief panel heading…')
  }, blockProps)));
}

/* harmony default export */ __webpack_exports__["default"] = (HeadingEdit);

/***/ }),

/***/ "./src/blocks/accordion-heading/icon.js":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-heading/icon.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  SVG,
  Path
} = wp.primitives;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/accordion-heading/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/accordion-heading/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion-heading/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-heading/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion-heading/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/accordion-heading/icon.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __,
  _x,
  sprintf
} = wp.i18n;
/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

const settings = {
  title: _x('Accordion Heading', 'block title'),
  description: __('The accordion panel heading that users will select to show or hide the panel content.'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    attributes: {
      content: __('Panel Heading'),
      level: 2
    }
  },

  __experimentalLabel(attributes, _ref) {
    let {
      context
    } = _ref;

    if (context === 'accessibility') {
      const {
        content,
        level
      } = attributes;
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(content) ? sprintf(
      /* translators: accessibility text. %s: heading level. */
      __('Level %s. Empty.'), level) : sprintf(
      /* translators: accessibility text. 1: heading level. 2: heading content. */
      __('Level %1$s. %2$s'), level, content);
    }
  },

  merge(attributes, attributesToMerge) {
    return {
      content: (attributes.content || '') + (attributesToMerge.content || '')
    };
  },

  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/blocks/accordion-heading/save.js":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-heading/save.js ***!
  \**********************************************/
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
const {
  RichText,
  useBlockProps
} = wp.blockEditor;
function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    content,
    level
  } = attributes;
  const TagName = 'h' + level;
  const className = 'hrswp-accordion-heading';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, useBlockProps.save({
    className
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    value: content
  }));
}

/***/ }),

/***/ "./src/blocks/accordion-section/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-section/edit.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  sprintf,
  __
} = wp.i18n;
const {
  useSelect
} = wp.data;
const {
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
  store: blockEditorStore
} = wp.blockEditor;

function AccordionEdit(_ref) {
  let {
    attributes: {
      level
    },
    clientId
  } = _ref;
  const {
    accordionsIds,
    hasChildBlocks
  } = useSelect(select => {
    const {
      getBlockOrder,
      getBlockRootClientId
    } = select(blockEditorStore);
    const rootId = getBlockRootClientId(clientId);
    return {
      hasChildBlocks: getBlockOrder(clientId).length > 1,
      accordionsIds: getBlockOrder(rootId)
    };
  }, [clientId]);
  const blockProps = useBlockProps();
  const panelsCount = accordionsIds.length;
  const currentPanelPosition = accordionsIds.indexOf(clientId) + 1;
  const label = sprintf(
  /* translators: 1: Block label (i.e. "Block: Accordion"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
  __('%1$s (%2$s of %3$s)'), blockProps['aria-label'], currentPanelPosition, panelsCount);
  const innerBlocksProps = useInnerBlocksProps({ ...blockProps,
    'aria-label': label
  }, {
    template: [['hrswp/accordion-heading', {
      level
    }]],
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
}

/* harmony default export */ __webpack_exports__["default"] = (AccordionEdit);

/***/ }),

/***/ "./src/blocks/accordion-section/icon.js":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-section/icon.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.components;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/accordion-section/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/accordion-section/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion-section/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-section/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion-section/save.js");
/* harmony import */ var _accordion_section_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../accordion-section/icon */ "./src/blocks/accordion-section/icon.js");
/**
 * WordPress dependencies
 */
const {
  __,
  _x
} = wp.i18n;
/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  title: _x('Accordion Panel', 'block title'),
  description: __('A single panel of accordion content.'),
  icon: _accordion_section_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  keywords: [__('layout'), __('accordion')],
  example: {
    attributes: {
      level: 2,
      panelHeadingContent: __('Accordion Panel Heading')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/accordion-section/save.js":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-section/save.js ***!
  \**********************************************/
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
const {
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/blocks/accordions/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/accordions/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heading_level_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heading-level-dropdown */ "./src/blocks/accordions/heading-level-dropdown.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  PanelBody,
  RangeControl,
  ToolbarGroup
} = wp.components;
const {
  InspectorControls,
  useInnerBlocksProps,
  BlockControls,
  __experimentalBlockVariationPicker,
  useBlockProps,
  store: blockEditorStore
} = wp.blockEditor;
const {
  withDispatch,
  useDispatch,
  useSelect
} = wp.data;
const {
  createBlock,
  createBlocksFromInnerBlocksTemplate,
  store: blocksStore
} = wp.blocks;
/**
 * Internal dependencies
 */


const ALLOWED_BLOCKS = ['hrswp/accordion-section'];

function AccordionsEditContainer(_ref) {
  let {
    attributes,
    updateHeadingLevel,
    updateAccordions,
    clientId
  } = _ref;
  const {
    level
  } = attributes;
  const {
    count
  } = useSelect(select => {
    return {
      count: select(blockEditorStore).getBlockCount(clientId)
    };
  }, [clientId]);
  const blockProps = useBlockProps();
  const innerBlockProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: 'vertical',
    renderAppender: false
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading_level_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedLevel: level,
    onChange: updateHeadingLevel
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: __('Panels'),
    value: count,
    onChange: value => updateAccordions(count, value),
    min: 1,
    max: Math.max(75, count)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'components-panels-control__help'
  }, __('Reducing the number of panels will remove them starting at the end. Any existing content in removed panels will be deleted.')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlockProps));
}

const AccordionsEditContainerWrapper = withDispatch((dispatch, ownProps, registry) => ({
  /**
   * Update all child Accordion blocks with selected heading level.
   *
   * @param {number} level the heading level as an integer from 1 to 6
   */
  updateHeadingLevel(level) {
    const {
      clientId,
      setAttributes
    } = ownProps;
    const {
      updateBlockAttributes
    } = dispatch(blockEditorStore);
    const {
      getBlockOrder,
      getBlockName
    } = registry.select(blockEditorStore); // Update own heading level.

    setAttributes({
      level
    }); // Drill down to update accordion heading child blocks.

    const accordionBlockClientIds = getBlockOrder(clientId);
    accordionBlockClientIds.forEach(accordionBlockClientId => {
      updateBlockAttributes(accordionBlockClientId, {
        level
      });
      const innerBlockClientIds = getBlockOrder(accordionBlockClientId);
      innerBlockClientIds.forEach(innerBlockClientId => {
        const innerBlockName = getBlockName(innerBlockClientId);

        if ('hrswp/accordion-heading' === innerBlockName) {
          updateBlockAttributes(innerBlockClientId, {
            level
          });
        }
      });
    });
  },

  /**
   * Updates the panel count.
   *
   * @param {number} previousPanels Previous column count.
   * @param {number} newPanels      New column count.
   */
  updateAccordions(previousPanels, newPanels) {
    const {
      clientId,
      attributes
    } = ownProps;
    const {
      replaceInnerBlocks
    } = dispatch(blockEditorStore);
    const {
      getBlocks
    } = registry.select(blockEditorStore);
    const {
      level
    } = attributes;
    let innerBlocks = getBlocks(clientId);
    const isAddingPanel = newPanels > previousPanels;

    if (isAddingPanel) {
      innerBlocks = [...innerBlocks, ...(0,lodash__WEBPACK_IMPORTED_MODULE_1__.times)(newPanels - previousPanels, () => {
        return createBlock('hrswp/accordion-section', {
          level
        });
      })];
    } else {
      // Removing a column will always remove the last inner block.
      innerBlocks = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.dropRight)(innerBlocks, previousPanels - newPanels);
    }

    replaceInnerBlocks(clientId, innerBlocks);
  }

}))(AccordionsEditContainer);

function Placeholder(_ref2) {
  let {
    clientId,
    name,
    setAttributes
  } = _ref2;
  const {
    blockType,
    defaultVariation,
    variations
  } = useSelect(select => {
    const {
      getBlockVariations,
      getBlockType,
      getDefaultBlockVariation
    } = select(blocksStore);
    return {
      blockType: getBlockType(name),
      defaultVariation: getDefaultBlockVariation(name, 'block'),
      variations: getBlockVariations(name, 'block')
    };
  }, [name]);
  const {
    replaceInnerBlocks
  } = useDispatch(blockEditorStore);
  const blockProps = useBlockProps();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(__experimentalBlockVariationPicker, {
    icon: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockType, ['icon', 'src']),
    label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(blockType, ['title']),
    variations: variations,
    onSelect: function () {
      let nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;

      if (nextVariation.attributes) {
        setAttributes(nextVariation.attributes);
      }

      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks), true);
      }
    },
    allowSkip: true
  }));
}

const AccordionsEdit = props => {
  const {
    clientId
  } = props;
  const hasInnerBlocks = useSelect(select => select(blockEditorStore).getBlocks(clientId).length > 0, [clientId]);
  const Component = hasInnerBlocks ? AccordionsEditContainerWrapper : Placeholder;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, props);
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionsEdit);

/***/ }),

/***/ "./src/blocks/accordions/heading-level-dropdown.js":
/*!*********************************************************!*\
  !*** ./src/blocks/accordions/heading-level-dropdown.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeadingLevelDropdown; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heading_level_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heading-level-icon */ "./src/blocks/accordions/heading-level-icon.js");


/**
 * WordPress dependencies
 */
const {
  Dropdown,
  Toolbar,
  ToolbarButton,
  ToolbarGroup
} = wp.components;
const {
  __,
  sprintf
} = wp.i18n;
const {
  DOWN
} = wp.keycodes;
/**
 * Internal dependencies
 */


const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];
const POPOVER_PROPS = {
  className: 'block-library-heading-level-dropdown',
  isAlternate: true
};
/** @typedef {WPComponent} WPComponent */

/**
 * HeadingLevelDropdown props.
 *
 * @typedef WPHeadingLevelDropdownProps
 *
 * @property {number}   selectedLevel The chosen heading level.
 * @property {Function} onChange      Callback to run when
 *                                    toolbar value is changed.
 */

/**
 * Dropdown for selecting a heading level (1 through 6).
 *
 * @param {WPHeadingLevelDropdownProps} props Component props.
 *
 * @return {WPComponent} The toolbar.
 */

function HeadingLevelDropdown(_ref) {
  let {
    selectedLevel,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dropdown, {
    popoverProps: POPOVER_PROPS,
    renderToggle: _ref2 => {
      let {
        onToggle,
        isOpen
      } = _ref2;

      const openOnArrowDown = event => {
        if (!isOpen && event.keyCode === DOWN) {
          event.preventDefault();
          event.stopPropagation();
          onToggle();
        }
      };

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarButton, {
        "aria-expanded": isOpen,
        "aria-haspopup": "true",
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
          level: selectedLevel
        }),
        label: __('Change heading level'),
        onClick: onToggle,
        onKeyDown: openOnArrowDown,
        showTooltip: true
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, {
      className: "block-library-heading-level-toolbar",
      label: __('Change heading level')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarGroup, {
      isCollapsed: false,
      controls: HEADING_LEVELS.map(targetLevel => {
        const isActive = targetLevel === selectedLevel;
        return {
          icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading_level_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
            level: targetLevel,
            isPressed: isActive
          }),
          title: sprintf( // translators: %s: heading level e.g: "1", "2", "3"
          __('Heading %d'), targetLevel),
          isActive,

          onClick() {
            onChange(targetLevel);
          }

        };
      })
    }))
  });
}

/***/ }),

/***/ "./src/blocks/accordions/heading-level-icon.js":
/*!*****************************************************!*\
  !*** ./src/blocks/accordions/heading-level-icon.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeadingLevelIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.components;
/** @typedef {WPComponent} WPComponent */

/**
 * HeadingLevelIcon props.
 *
 * @typedef WPHeadingLevelIconProps
 *
 * @property {number}   level     The heading level to show an icon for.
 * @property {?boolean} isPressed Whether or not the icon should appear pressed; default: false.
 */

/**
 * Heading level icon.
 *
 * @param {WPHeadingLevelIconProps} props Component props.
 *
 * @return {?WPComponent} The icon.
 */

function HeadingLevelIcon(_ref) {
  let {
    level,
    isPressed = false
  } = _ref;
  const levelToPath = {
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
    isPressed: isPressed
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
    d: levelToPath[level]
  }));
}

/***/ }),

/***/ "./src/blocks/accordions/icons.js":
/*!****************************************!*\
  !*** ./src/blocks/accordions/icons.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "five": function() { return /* binding */ five; },
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "many": function() { return /* binding */ many; },
/* harmony export */   "three": function() { return /* binding */ three; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.components;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"
}));
const three = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  fillRule: "evenodd",
  d: "M41,14c0-1.104-0.896-2-2-2H9c-1.104,0-2,0.896-2,2v20c0,1.104,0.896,2,2,2h30c1.104,0,2-0.896,2-2V14z M39,19.177H9v-5.25 h30V19.177z M39,33.917H9v-5.229h30V33.917z M39,26.625H9v-5.25h30V26.625z"
}));
const five = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  fillRule: "evenodd",
  d: "M41,14c0-1.104-0.896-2-2-2H9c-1.104,0-2,0.896-2,2v20c0,1.104,0.896,2,2,2h30c1.104,0,2-0.896,2-2V14z M39,16.375H9v-2.448 h30V16.375z M39,33.917H9V31.5h30V33.917z M39,25.042H9v-2.45h30V25.042z M39,20.813H9v-2.438h30V20.813z M39,29.5H9v-2.449h30V29.5 z"
}));
const many = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M39,18.001H9v-2.592h30V18.001z M39,27.488H9v-2.595h30V27.488z M39,22.811H9V20.23h30V22.811z M39,32.387H9v-2.595h30 V32.387z M38.253,13.156l-2.831-1.906l-2.832,1.906l-2.831-1.906l-2.831,1.906l-2.831-1.906l-2.831,1.906l-2.832-1.906l-2.831,1.906 l-2.831-1.906l-2.832,1.906L7.11,11.25v25.417l2.831-1.906l2.832,1.906l2.831-1.906l2.831,1.906l2.832-1.906l2.831,1.906 l2.831-1.906l2.831,1.906l2.831-1.906l2.832,1.906l2.831-1.906l2.831,1.906V11.25L38.253,13.156z"
}));

/***/ }),

/***/ "./src/blocks/accordions/index.js":
/*!****************************************!*\
  !*** ./src/blocks/accordions/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordions/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordions/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/accordions/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variations */ "./src/blocks/accordions/variations.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/blocks/accordions/icons.js");
/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
/**
 * Internal dependencies
 */






const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  icon: _icons__WEBPACK_IMPORTED_MODULE_4__.icon,
  keywords: [__('layout'), __('accordion')],
  variations: _variations__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: {
    innerBlocks: [{
      name: 'hrswp/accordion-section',
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
      name: 'hrswp/accordion-section',
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

/***/ "./src/blocks/accordions/save.js":
/*!***************************************!*\
  !*** ./src/blocks/accordions/save.js ***!
  \***************************************/
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
const {
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/blocks/accordions/variations.js":
/*!*********************************************!*\
  !*** ./src/blocks/accordions/variations.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/accordions/icons.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
/**
 * Internal dependencies
 */


const variations = [{
  name: 'three-panels',
  title: __('Three'),
  description: __('Three accordion panels'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.three,
  innerBlocks: [['hrswp/accordion-section'], ['hrswp/accordion-section'], ['hrswp/accordion-section']],
  scope: ['block']
}, {
  name: 'five-panels',
  title: __('Five'),
  description: __('Five accordion panels'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.five,
  isDefault: true,
  innerBlocks: [['hrswp/accordion-section'], ['hrswp/accordion-section'], ['hrswp/accordion-section'], ['hrswp/accordion-section'], ['hrswp/accordion-section']],
  scope: ['block']
}, {
  name: 'ten-panels',
  title: __('Ten'),
  description: __('Ten accordion panels'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.many,
  innerBlocks: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(10, () => ['hrswp/accordion-section']),
  scope: ['block']
}, {
  name: 'fifteen-panels',
  title: __('Fifteen'),
  description: __('Fifteen accordion panels'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.many,
  innerBlocks: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(15, () => ['hrswp/accordion-section']),
  scope: ['block']
}, {
  name: 'twenty-panels',
  title: __('Twenty'),
  description: __('Twenty accordion panels'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.many,
  innerBlocks: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(20, () => ['hrswp/accordion-section']),
  scope: ['block']
}, {
  name: 'twenty-five-panels',
  title: __('Twenty-five'),
  description: __('Twenty-five accordion panels'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.many,
  innerBlocks: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(25, () => ['hrswp/accordion-section']),
  scope: ['block']
}];
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./src/blocks/button/clean-empty-object.js":
/*!*************************************************!*\
  !*** ./src/blocks/button/clean-empty-object.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Removed empty nodes from nested objects.
 *
 * @param {Object} object
 * @return {Object} Object cleaned from empty nodes.
 */

const cleanEmptyObject = object => {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(object) || Array.isArray(object)) {
    return object;
  }

  const cleanedNestedObjects = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(object, cleanEmptyObject), lodash__WEBPACK_IMPORTED_MODULE_0__.identity);
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(cleanedNestedObjects) ? undefined : cleanedNestedObjects;
};

/* harmony default export */ __webpack_exports__["default"] = (cleanEmptyObject);

/***/ }),

/***/ "./src/blocks/button/deprecated.js":
/*!*****************************************!*\
  !*** ./src/blocks/button/deprecated.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _migrate_font_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migrate-font-family */ "./src/blocks/button/migrate-font-family.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  RichText,
  getColorClassName,
  useBlockProps,
  __experimentalGetGradientClass,
  __experimentalGetBorderClassesAndStyles: getBorderClassesAndStyles,
  __experimentalGetColorClassesAndStyles: getColorClassesAndStyles,
  __experimentalGetSpacingClassesAndStyles: getSpacingClassesAndStyles
} = wp.blockEditor;
const {
  compose
} = wp.compose;
/**
 * Internal dependencies
 */



const migrateBorderRadius = attributes => {
  var _newAttributes$style, _newAttributes$style$, _newAttributes$style2;

  const {
    borderRadius,
    ...newAttributes
  } = attributes; // We have to check old property `borderRadius` and if
  // `styles.border.radius` is a `number`

  const oldBorderRadius = [borderRadius, (_newAttributes$style = newAttributes.style) === null || _newAttributes$style === void 0 ? void 0 : (_newAttributes$style$ = _newAttributes$style.border) === null || _newAttributes$style$ === void 0 ? void 0 : _newAttributes$style$.radius].find(possibleBorderRadius => {
    return typeof possibleBorderRadius === 'number' && possibleBorderRadius !== 0;
  });

  if (!oldBorderRadius) {
    return newAttributes;
  }

  return { ...newAttributes,
    style: { ...newAttributes.style,
      border: { ...((_newAttributes$style2 = newAttributes.style) === null || _newAttributes$style2 === void 0 ? void 0 : _newAttributes$style2.border),
        radius: `${oldBorderRadius}px`
      }
    }
  };
};

const migrateCustomColorsAndGradients = attributes => {
  if (!attributes.customTextColor && !attributes.customBackgroundColor && !attributes.customGradient) {
    return attributes;
  }

  const style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  if (attributes.customGradient) {
    style.color.gradient = attributes.customGradient;
  }

  return { ...(0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(attributes, ['customTextColor', 'customBackgroundColor', 'customGradient']),
    style
  };
};

const oldColorsMigration = attributes => {
  return migrateCustomColorsAndGradients((0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)({ ...attributes,
    customTextColor: attributes.textColor && '#' === attributes.textColor[0] ? attributes.textColor : undefined,
    customBackgroundColor: attributes.color && '#' === attributes.color[0] ? attributes.color : undefined
  }, ['color', 'textColor']));
};

const blockAttributes = {
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  title: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'title'
  },
  text: {
    type: 'string',
    source: 'html',
    selector: 'a'
  }
};
const v10 = {
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    title: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'title'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: 'a'
    },
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    width: {
      type: 'number'
    }
  },
  supports: {
    anchor: true,
    align: true,
    alignWide: false,
    color: {
      __experimentalSkipSerialization: true,
      gradients: true
    },
    typography: {
      fontSize: true,
      __experimentalFontFamily: true
    },
    reusable: false,
    spacing: {
      __experimentalSkipSerialization: true,
      padding: ['horizontal', 'vertical'],
      __experimentalDefaultControls: {
        padding: true
      }
    },
    __experimentalBorder: {
      radius: true,
      __experimentalSkipSerialization: true
    },
    __experimentalSelector: '.wp-block-button__link'
  },

  save(_ref) {
    var _style$border, _style$typography;

    let {
      attributes,
      className
    } = _ref;
    const {
      fontSize,
      linkTarget,
      rel,
      style,
      text,
      title,
      url,
      width
    } = attributes;

    if (!text) {
      return null;
    }

    const borderProps = getBorderClassesAndStyles(attributes);
    const colorProps = getColorClassesAndStyles(attributes);
    const spacingProps = getSpacingClassesAndStyles(attributes);
    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', colorProps.className, borderProps.className, {
      // For backwards compatibility add style that isn't provided via
      // block support.
      'no-border-radius': (style === null || style === void 0 ? void 0 : (_style$border = style.border) === null || _style$border === void 0 ? void 0 : _style$border.radius) === 0
    });
    const buttonStyle = { ...borderProps.style,
      ...colorProps.style,
      ...spacingProps.style
    }; // The use of a `title` attribute here is soft-deprecated, but still applied
    // if it had already been assigned, for the sake of backward-compatibility.
    // A title will no longer be assigned for new or updated button block links.

    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      [`has-custom-width wp-block-button__width-${width}`]: width,
      [`has-custom-font-size`]: fontSize || (style === null || style === void 0 ? void 0 : (_style$typography = style.typography) === null || _style$typography === void 0 ? void 0 : _style$typography.fontSize)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save({
      className: wrapperClasses
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  },

  migrate: _migrate_font_family__WEBPACK_IMPORTED_MODULE_3__["default"],

  isEligible(_ref2) {
    var _style$typography2;

    let {
      style
    } = _ref2;
    return style === null || style === void 0 ? void 0 : (_style$typography2 = style.typography) === null || _style$typography2 === void 0 ? void 0 : _style$typography2.fontFamily;
  }

};
const deprecated = [v10, {
  supports: {
    anchor: true,
    align: true,
    alignWide: false,
    color: {
      __experimentalSkipSerialization: true,
      gradients: true
    },
    typography: {
      fontSize: true,
      __experimentalFontFamily: true
    },
    reusable: false,
    __experimentalSelector: '.wp-block-button__link'
  },
  attributes: { ...blockAttributes,
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    width: {
      type: 'number'
    }
  },

  isEligible(_ref3) {
    var _style$border2;

    let {
      style
    } = _ref3;
    return typeof (style === null || style === void 0 ? void 0 : (_style$border2 = style.border) === null || _style$border2 === void 0 ? void 0 : _style$border2.radius) === 'number';
  },

  save(_ref4) {
    var _style$border3, _style$border4, _style$typography3;

    let {
      attributes,
      className
    } = _ref4;
    const {
      fontSize,
      linkTarget,
      rel,
      style,
      text,
      title,
      url,
      width
    } = attributes;

    if (!text) {
      return null;
    }

    const borderRadius = style === null || style === void 0 ? void 0 : (_style$border3 = style.border) === null || _style$border3 === void 0 ? void 0 : _style$border3.radius;
    const colorProps = getColorClassesAndStyles(attributes);
    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', colorProps.className, {
      'no-border-radius': (style === null || style === void 0 ? void 0 : (_style$border4 = style.border) === null || _style$border4 === void 0 ? void 0 : _style$border4.radius) === 0
    });
    const buttonStyle = {
      borderRadius: borderRadius ? borderRadius : undefined,
      ...colorProps.style
    }; // The use of a `title` attribute here is soft-deprecated, but still applied
    // if it had already been assigned, for the sake of backward-compatibility.
    // A title will no longer be assigned for new or updated button block links.

    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      [`has-custom-width wp-block-button__width-${width}`]: width,
      [`has-custom-font-size`]: fontSize || (style === null || style === void 0 ? void 0 : (_style$typography3 = style.typography) === null || _style$typography3 === void 0 ? void 0 : _style$typography3.fontSize)
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save({
      className: wrapperClasses
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  },

  migrate: compose(_migrate_font_family__WEBPACK_IMPORTED_MODULE_3__["default"], migrateBorderRadius)
}, {
  supports: {
    anchor: true,
    align: true,
    alignWide: false,
    color: {
      __experimentalSkipSerialization: true
    },
    reusable: false,
    __experimentalSelector: '.wp-block-button__link'
  },
  attributes: { ...blockAttributes,
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    style: {
      type: 'object'
    },
    width: {
      type: 'number'
    }
  },

  save(_ref5) {
    let {
      attributes,
      className
    } = _ref5;
    const {
      borderRadius,
      linkTarget,
      rel,
      text,
      title,
      url,
      width
    } = attributes;
    const colorProps = getColorClassesAndStyles(attributes);
    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', colorProps.className, {
      'no-border-radius': borderRadius === 0
    });
    const buttonStyle = {
      borderRadius: borderRadius ? borderRadius + 'px' : undefined,
      ...colorProps.style
    }; // The use of a `title` attribute here is soft-deprecated, but still applied
    // if it had already been assigned, for the sake of backward-compatibility.
    // A title will no longer be assigned for new or updated button block links.

    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      [`has-custom-width wp-block-button__width-${width}`]: width
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save({
      className: wrapperClasses
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  },

  migrate: compose(_migrate_font_family__WEBPACK_IMPORTED_MODULE_3__["default"], migrateBorderRadius)
}, {
  supports: {
    anchor: true,
    align: true,
    alignWide: false,
    color: {
      __experimentalSkipSerialization: true
    },
    reusable: false,
    __experimentalSelector: '.wp-block-button__link'
  },
  attributes: { ...blockAttributes,
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    style: {
      type: 'object'
    },
    width: {
      type: 'number'
    }
  },

  save(_ref6) {
    let {
      attributes,
      className
    } = _ref6;
    const {
      borderRadius,
      linkTarget,
      rel,
      text,
      title,
      url,
      width
    } = attributes;
    const colorProps = getColorClassesAndStyles(attributes);
    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', colorProps.className, {
      'no-border-radius': borderRadius === 0
    });
    const buttonStyle = {
      borderRadius: borderRadius ? borderRadius + 'px' : undefined,
      ...colorProps.style
    }; // The use of a `title` attribute here is soft-deprecated, but still applied
    // if it had already been assigned, for the sake of backward-compatibility.
    // A title will no longer be assigned for new or updated button block links.

    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      [`has-custom-width wp-block-button__width-${width}`]: width
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save({
      className: wrapperClasses
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  },

  migrate: compose(_migrate_font_family__WEBPACK_IMPORTED_MODULE_3__["default"], migrateBorderRadius)
}, {
  supports: {
    align: true,
    alignWide: false,
    color: {
      gradients: true
    }
  },
  attributes: { ...blockAttributes,
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    },
    style: {
      type: 'object'
    }
  },

  save(_ref7) {
    let {
      attributes
    } = _ref7;
    const {
      borderRadius,
      linkTarget,
      rel,
      text,
      title,
      url
    } = attributes;
    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', {
      'no-border-radius': borderRadius === 0
    });
    const buttonStyle = {
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    });
  },

  migrate: migrateBorderRadius
}, {
  supports: {
    align: true,
    alignWide: false
  },
  attributes: { ...blockAttributes,
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    },
    gradient: {
      type: 'string'
    }
  },
  isEligible: attributes => !!attributes.customTextColor || !!attributes.customBackgroundColor || !!attributes.customGradient,
  migrate: compose(migrateBorderRadius, migrateCustomColorsAndGradients),

  save(_ref8) {
    let {
      attributes
    } = _ref8;
    const {
      backgroundColor,
      borderRadius,
      customBackgroundColor,
      customTextColor,
      customGradient,
      linkTarget,
      gradient,
      rel,
      text,
      textColor,
      title,
      url
    } = attributes;
    const textClass = getColorClassName('color', textColor);
    const backgroundClass = !customGradient && getColorClassName('background-color', backgroundColor);

    const gradientClass = __experimentalGetGradientClass(gradient);

    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', {
      'has-text-color': textColor || customTextColor,
      [textClass]: textClass,
      'has-background': backgroundColor || customBackgroundColor || customGradient || gradient,
      [backgroundClass]: backgroundClass,
      'no-border-radius': borderRadius === 0,
      [gradientClass]: gradientClass
    });
    const buttonStyle = {
      background: customGradient ? customGradient : undefined,
      backgroundColor: backgroundClass || customGradient || gradient ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      borderRadius: borderRadius ? borderRadius + 'px' : undefined
    }; // The use of a `title` attribute here is soft-deprecated, but still applied
    // if it had already been assigned, for the sake of backward-compatibility.
    // A title will no longer be assigned for new or updated button block links.

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  }

}, {
  attributes: { ...blockAttributes,
    align: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    linkTarget: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    },
    rel: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    },
    placeholder: {
      type: 'string'
    }
  },

  isEligible(attribute) {
    return attribute.className && attribute.className.includes('is-style-squared');
  },

  migrate(attributes) {
    let newClassName = attributes.className;

    if (newClassName) {
      newClassName = newClassName.replace(/is-style-squared[\s]?/, '').trim();
    }

    return migrateBorderRadius(migrateCustomColorsAndGradients({ ...attributes,
      className: newClassName ? newClassName : undefined,
      borderRadius: 0
    }));
  },

  save(_ref9) {
    let {
      attributes
    } = _ref9;
    const {
      backgroundColor,
      customBackgroundColor,
      customTextColor,
      linkTarget,
      rel,
      text,
      textColor,
      title,
      url
    } = attributes;
    const textClass = getColorClassName('color', textColor);
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', {
      'has-text-color': textColor || customTextColor,
      [textClass]: textClass,
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass
    });
    const buttonStyle = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text,
      target: linkTarget,
      rel: rel
    }));
  }

}, {
  attributes: { ...blockAttributes,
    align: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  migrate: oldColorsMigration,

  save(_ref10) {
    let {
      attributes
    } = _ref10;
    const {
      url,
      text,
      title,
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor
    } = attributes;
    const textClass = getColorClassName('color', textColor);
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-button__link', {
      'has-text-color': textColor || customTextColor,
      [textClass]: textClass,
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass
    });
    const buttonStyle = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: buttonClasses,
      href: url,
      title: title,
      style: buttonStyle,
      value: text
    }));
  }

}, {
  attributes: { ...blockAttributes,
    color: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  },

  save(_ref11) {
    let {
      attributes
    } = _ref11;
    const {
      url,
      text,
      title,
      align,
      color,
      textColor
    } = attributes;
    const buttonStyle = {
      backgroundColor: color,
      color: textColor
    };
    const linkClass = 'wp-block-button__link';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `align${align}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: linkClass,
      href: url,
      title: title,
      style: buttonStyle,
      value: text
    }));
  },

  migrate: oldColorsMigration
}, {
  attributes: { ...blockAttributes,
    color: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    align: {
      type: 'string',
      default: 'none'
    }
  },

  save(_ref12) {
    let {
      attributes
    } = _ref12;
    const {
      url,
      text,
      title,
      align,
      color,
      textColor
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `align${align}`,
      style: {
        backgroundColor: color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      href: url,
      title: title,
      style: {
        color: textColor
      },
      value: text
    }));
  },

  migrate: oldColorsMigration
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/button/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/button/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/blocks/button/icons.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  useCallback,
  useEffect,
  useState,
  useRef
} = wp.element;
const {
  Button,
  ButtonGroup,
  PanelBody,
  TextControl,
  ToolbarButton,
  Popover
} = wp.components;
const {
  BlockControls,
  InspectorControls,
  RichText,
  useBlockProps,
  __experimentalUseBorderProps: useBorderProps,
  __experimentalUseColorProps: useColorProps,
  __experimentalGetSpacingClassesAndStyles: useSpacingProps,
  __experimentalLinkControl: LinkControl
} = wp.blockEditor;
const {
  displayShortcut,
  isKeyboardEvent
} = wp.keycodes;
const {
  createBlock
} = wp.blocks;
/**
 * Internal dependencies
 */


const NEW_TAB_REL = 'noreferrer noopener';

function WidthPanel(_ref) {
  let {
    selectedWidth,
    setAttributes
  } = _ref;

  function handleChange(newWidth) {
    // Check if we are toggling the width off
    const width = selectedWidth === newWidth ? undefined : newWidth; // Update attributes

    setAttributes({
      width
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
    title: __('Width settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, {
    "aria-label": __('Button width')
  }, [25, 50, 75, 100].map(widthValue => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      key: widthValue,
      isSmall: true,
      variant: widthValue === selectedWidth ? 'primary' : undefined,
      onClick: () => handleChange(widthValue)
    }, widthValue, "%");
  })));
}

function ButtonEdit(props) {
  var _style$border;

  const {
    attributes,
    setAttributes,
    className,
    isSelected,
    onReplace,
    mergeBlocks
  } = props;
  const {
    linkTarget,
    placeholder,
    rel,
    style,
    text,
    url,
    width
  } = attributes;
  const onSetLinkRel = useCallback(value => {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);

  function onToggleOpenInNewTab(value) {
    const newLinkTarget = value ? '_blank' : undefined;
    let updatedRel = rel;

    if (newLinkTarget && !rel) {
      updatedRel = NEW_TAB_REL;
    } else if (!newLinkTarget && rel === NEW_TAB_REL) {
      updatedRel = undefined;
    }

    setAttributes({
      linkTarget: newLinkTarget,
      rel: updatedRel
    });
  }

  function setButtonText(newText) {
    // Remove anchor tags from button text content.
    setAttributes({
      text: newText.replace(/<\/?a[^>]*>/g, '')
    });
  }

  function onKeyDown(event) {
    if (isKeyboardEvent.primary(event, 'k')) {
      startEditing(event);
    } else if (isKeyboardEvent.primaryShift(event, 'k')) {
      var _richTextRef$current;

      unlink();
      (_richTextRef$current = richTextRef.current) === null || _richTextRef$current === void 0 ? void 0 : _richTextRef$current.focus();
    }
  }

  const borderProps = useBorderProps(attributes);
  const colorProps = useColorProps(attributes);
  const spacingProps = useSpacingProps(attributes);
  const ref = useRef();
  const richTextRef = useRef();
  const blockProps = useBlockProps({
    ref,
    onKeyDown
  });
  const [isEditingURL, setIsEditingURL] = useState(false);
  const isURLSet = !!url;
  const opensInNewTab = linkTarget === '_blank';

  function startEditing(event) {
    event.preventDefault();
    setIsEditingURL(true);
  }

  function unlink() {
    setAttributes({
      url: undefined,
      linkTarget: undefined,
      rel: undefined
    });
    setIsEditingURL(false);
  }

  useEffect(() => {
    if (!isSelected) {
      setIsEditingURL(false);
    }
  }, [isSelected]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockProps.className, {
      [`has-custom-width wp-block-button__width-${width}`]: width,
      [`has-custom-font-size`]: blockProps.style.fontSize
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
    ref: richTextRef,
    "aria-label": __('Button text'),
    placeholder: placeholder || __('Add text…'),
    value: text,
    onChange: value => setButtonText(value),
    allowedFormats: [],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'wp-block-button__link', colorProps.className, borderProps.className, {
      'no-border-radius': (style === null || style === void 0 ? void 0 : (_style$border = style.border) === null || _style$border === void 0 ? void 0 : _style$border.radius) === 0
    }),
    style: { ...borderProps.style,
      ...colorProps.style,
      ...spacingProps.style
    },
    onSplit: value => createBlock('hrswp/button', { ...attributes,
      text: value
    }),
    onReplace: onReplace,
    onMerge: mergeBlocks,
    identifier: "text"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, {
    group: "block"
  }, !isURLSet && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarButton, {
    name: "link",
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__.link,
    title: __('Link'),
    shortcut: displayShortcut.primary('k'),
    onClick: startEditing
  }), isURLSet && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarButton, {
    name: "link",
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__.linkOff,
    title: __('Unlink'),
    shortcut: displayShortcut.primaryShift('k'),
    onClick: unlink,
    isActive: true
  })), isSelected && (isEditingURL || isURLSet) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Popover, {
    position: "bottom center",
    onClose: () => {
      var _richTextRef$current2;

      setIsEditingURL(false);
      (_richTextRef$current2 = richTextRef.current) === null || _richTextRef$current2 === void 0 ? void 0 : _richTextRef$current2.focus();
    },
    anchorRef: ref === null || ref === void 0 ? void 0 : ref.current,
    focusOnMount: isEditingURL ? 'firstElement' : false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(LinkControl, {
    className: "wp-block-navigation-link__inline-link-input",
    value: {
      url,
      opensInNewTab
    },
    onChange: _ref2 => {
      let {
        url: newURL = '',
        opensInNewTab: newOpensInNewTab
      } = _ref2;
      setAttributes({
        url: newURL
      });

      if (opensInNewTab !== newOpensInNewTab) {
        onToggleOpenInNewTab(newOpensInNewTab);
      }
    },
    onRemove: () => {
      var _richTextRef$current3;

      unlink();
      (_richTextRef$current3 = richTextRef.current) === null || _richTextRef$current3 === void 0 ? void 0 : _richTextRef$current3.focus();
    },
    forceIsEditingLink: isEditingURL
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(WidthPanel, {
    selectedWidth: width,
    setAttributes: setAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, {
    __experimentalGroup: "advanced"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: __('Link rel'),
    value: rel || '',
    onChange: onSetLinkRel
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonEdit);

/***/ }),

/***/ "./src/blocks/button/icons.js":
/*!************************************!*\
  !*** ./src/blocks/button/icons.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "link": function() { return /* binding */ link; },
/* harmony export */   "linkOff": function() { return /* binding */ linkOff; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.primitives;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"
}));
const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
const linkOff = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));

/***/ }),

/***/ "./src/blocks/button/index.js":
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/button/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/button/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/button/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/button/save.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/blocks/button/icons.js");
/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
/**
 * Internal dependencies
 */






const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

const settings = {
  icon: _icons__WEBPACK_IMPORTED_MODULE_4__.icon,
  example: {
    attributes: {
      className: 'is-style-fill',
      text: __('Call to Action')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_0__["default"],
  merge: (a, _ref) => {
    let {
      text = ''
    } = _ref;
    return { ...a,
      text: (a.text || '') + text
    };
  }
};

/***/ }),

/***/ "./src/blocks/button/migrate-font-family.js":
/*!**************************************************!*\
  !*** ./src/blocks/button/migrate-font-family.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clean_empty_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clean-empty-object */ "./src/blocks/button/clean-empty-object.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Migrates the current style.typography.fontFamily attribute,
 * whose value was "var:preset|font-family|helvetica-arial",
 * to the style.fontFamily attribute, whose value will be "helvetica-arial".
 *
 * @param {Object} attributes The current attributes
 * @return {Object} The updated attributes.
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(attributes) {
  var _attributes$style, _attributes$style$typ;

  if (!(attributes !== null && attributes !== void 0 && (_attributes$style = attributes.style) !== null && _attributes$style !== void 0 && (_attributes$style$typ = _attributes$style.typography) !== null && _attributes$style$typ !== void 0 && _attributes$style$typ.fontFamily)) {
    return attributes;
  } // Clone first so when we delete the fontFamily
  // below we're not modifying the original
  // attributes. Because the deprecation may be discarded
  // we don't want to alter the original attributes.


  const atts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(attributes);
  const fontFamily = atts.style.typography.fontFamily.split('|').pop();
  delete atts.style.typography.fontFamily;
  atts.style = (0,_clean_empty_object__WEBPACK_IMPORTED_MODULE_1__["default"])(atts.style);
  return { ...atts,
    fontFamily
  };
}

/***/ }),

/***/ "./src/blocks/button/save.js":
/*!***********************************!*\
  !*** ./src/blocks/button/save.js ***!
  \***********************************/
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
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  RichText,
  useBlockProps,
  __experimentalGetBorderClassesAndStyles: getBorderClassesAndStyles,
  __experimentalGetColorClassesAndStyles: getColorClassesAndStyles,
  __experimentalGetSpacingClassesAndStyles: getSpacingClassesAndStyles
} = wp.blockEditor;
function save(_ref) {
  var _style$border, _style$typography;

  let {
    attributes,
    className
  } = _ref;
  const {
    fontSize,
    linkTarget,
    rel,
    style,
    text,
    title,
    url,
    width
  } = attributes;

  if (!text) {
    return null;
  }

  const borderProps = getBorderClassesAndStyles(attributes);
  const colorProps = getColorClassesAndStyles(attributes);
  const spacingProps = getSpacingClassesAndStyles(attributes);
  const buttonClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-button__link', colorProps.className, borderProps.className, {
    'no-border-radius': (style === null || style === void 0 ? void 0 : (_style$border = style.border) === null || _style$border === void 0 ? void 0 : _style$border.radius) === 0
  });
  const buttonStyle = { ...borderProps.style,
    ...colorProps.style,
    ...spacingProps.style
  }; // The use of a `title` attribute here is soft-deprecated, but still applied
  // if it had already been assigned, for the sake of backward-compatibility.
  // A title will no longer be assigned for new or updated button block links.

  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-custom-width wp-block-button__width-${width}`]: width,
    [`has-custom-font-size`]: fontSize || (style === null || style === void 0 ? void 0 : (_style$typography = style.typography) === null || _style$typography === void 0 ? void 0 : _style$typography.fontSize)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save({
    className: wrapperClasses
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    tagName: "a",
    className: buttonClasses,
    href: url,
    title: title,
    style: buttonStyle,
    value: text,
    target: linkTarget,
    rel: rel
  }));
}

/***/ }),

/***/ "./src/blocks/buttons/deprecated.js":
/*!******************************************!*\
  !*** ./src/blocks/buttons/deprecated.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  InnerBlocks,
  useBlockProps
} = wp.blockEditor;
/**
 * @param {Object} attributes Block's attributes.
 */

const migrateWithLayout = attributes => {
  if (!!attributes.layout) {
    return attributes;
  }

  const {
    contentJustification,
    orientation,
    ...updatedAttributes
  } = attributes;

  if (contentJustification || orientation) {
    Object.assign(updatedAttributes, {
      layout: {
        type: 'flex',
        ...(contentJustification && {
          justifyContent: contentJustification
        }),
        ...(orientation && {
          orientation
        })
      }
    });
  }

  return updatedAttributes;
};

const deprecated = [{
  attributes: {
    contentJustification: {
      type: 'string'
    },
    orientation: {
      type: 'string',
      default: 'horizontal'
    }
  },
  supports: {
    anchor: true,
    align: ['wide', 'full'],
    __experimentalExposeControlsToChildren: true,
    spacing: {
      blockGap: true,
      margin: ['top', 'bottom'],
      __experimentalDefaultControls: {
        blockGap: true
      }
    }
  },
  isEligible: _ref => {
    let {
      contentJustification,
      orientation
    } = _ref;
    return !!contentJustification || !!orientation;
  },
  migrate: migrateWithLayout,

  save(_ref2) {
    let {
      attributes: {
        contentJustification,
        orientation
      }
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        [`is-content-justification-${contentJustification}`]: contentJustification,
        'is-vertical': orientation === 'vertical'
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }

}, {
  supports: {
    align: ['center', 'left', 'right'],
    anchor: true
  },

  save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  },

  isEligible(_ref3) {
    let {
      align
    } = _ref3;
    return align && ['center', 'left', 'right'].includes(align);
  },

  migrate(attributes) {
    return migrateWithLayout({ ...attributes,
      align: undefined,
      // Floating Buttons blocks shouldn't have been supported in the
      // first place. Most users using them probably expected them to
      // act like content justification controls, so these blocks are
      // migrated to use content justification.
      // As for center-aligned Buttons blocks, the content justification
      // equivalent will create an identical end result in most cases.
      contentJustification: attributes.align
    });
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/buttons/edit.js":
/*!************************************!*\
  !*** ./src/blocks/buttons/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./src/blocks/button/index.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  useBlockProps,
  useInnerBlocksProps,
  store: blockEditorStore
} = wp.blockEditor;
const {
  useSelect
} = wp.data;
/**
 * Internal dependencies
 */


const ALLOWED_BLOCKS = [_button__WEBPACK_IMPORTED_MODULE_2__.name];

function ButtonsEdit(props) {
  const {
    attributes: {
      layout = {}
    },
    className
  } = props;
  const {
    orientation,
    justifyContent
  } = layout;
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`is-content-justification-${justifyContent}`]: justifyContent,
    [`is-${orientation}`]: orientation
  });
  const blockProps = useBlockProps({
    className: wrapperClasses
  });
  const preferredStyle = useSelect(select => {
    var _preferredStyleVariat;

    const preferredStyleVariations = select(blockEditorStore).getSettings().__experimentalPreferredStyleVariations;

    return preferredStyleVariations === null || preferredStyleVariations === void 0 ? void 0 : (_preferredStyleVariat = preferredStyleVariations.value) === null || _preferredStyleVariat === void 0 ? void 0 : _preferredStyleVariat[_button__WEBPACK_IMPORTED_MODULE_2__.name];
  }, []);
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: [[_button__WEBPACK_IMPORTED_MODULE_2__.name, {
      className: preferredStyle && `is-style-${preferredStyle}`
    }]],
    __experimentalLayout: layout,
    templateInsertUpdatesSelection: true
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonsEdit);

/***/ }),

/***/ "./src/blocks/buttons/icons.js":
/*!*************************************!*\
  !*** ./src/blocks/buttons/icons.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttons": function() { return /* binding */ buttons; },
/* harmony export */   "justifyCenter": function() { return /* binding */ justifyCenter; },
/* harmony export */   "justifyLeft": function() { return /* binding */ justifyLeft; },
/* harmony export */   "justifyRight": function() { return /* binding */ justifyRight; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.primitives;
const buttons = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M17 3H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5V6.2h-5v1.6zM17 13H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5v-1.5h-5v1.5z"
}));
const justifyCenter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"
}));
const justifyLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M9 9v6h11V9H9zM4 20h1.5V4H4v16z"
}));
const justifyRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"
}));

/***/ }),

/***/ "./src/blocks/buttons/index.js":
/*!*************************************!*\
  !*** ./src/blocks/buttons/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/buttons/deprecated.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transforms */ "./src/blocks/buttons/transforms.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/buttons/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/buttons/save.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/blocks/buttons/icons.js");
/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
/**
 * Internal dependencies
 */







const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;

const settings = {
  icon: _icons__WEBPACK_IMPORTED_MODULE_5__.buttons,
  example: {
    innerBlocks: [{
      name: 'hrswp/button',
      attributes: {
        text: __('Find out more')
      }
    }, {
      name: 'hrswp/button',
      attributes: {
        text: __('Contact us')
      }
    }]
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_0__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
};

/***/ }),

/***/ "./src/blocks/buttons/save.js":
/*!************************************!*\
  !*** ./src/blocks/buttons/save.js ***!
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
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  useBlockProps,
  useInnerBlocksProps
} = wp.blockEditor;
function save(props) {
  const {
    attributes: {
      layout = {}
    },
    className
  } = props;
  const {
    orientation,
    justifyContent
  } = layout;
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`is-content-justification-${justifyContent}`]: justifyContent,
    [`is-${orientation}`]: orientation
  });
  const blockProps = useBlockProps.save({
    className: wrapperClasses
  });
  const innerBlocksProps = useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "./src/blocks/buttons/transforms.js":
/*!******************************************!*\
  !*** ./src/blocks/buttons/transforms.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/buttons/block.json");
/**
 * WordPress dependencies
 */
const {
  createBlock
} = wp.blocks;
/**
 * Internal dependencies
 */


const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const transforms = {
  from: [{
    type: 'block',
    blocks: ['core/buttons'],
    transform: (attributes, innerBlocks) => // Creates the buttons block
    createBlock(name, attributes, // Convert the inner buttons as well
    innerBlocks.map(block => createBlock('hrswp/button', block.attributes)))
  }, {
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/button'],
    transform: buttons => // Creates the buttons block
    createBlock(name, {}, // Loop the selected buttons
    buttons.map(attributes => // Create singular button in the buttons block
    createBlock('hrswp/button', attributes)))
  }, {
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: buttons => // Creates the buttons block
    createBlock(name, {}, // Loop the selected buttons
    buttons.map(attributes => {
      // Remove any HTML tags
      const div = document.createElement('div');
      div.innerHTML = attributes.content;
      const text = div.innerText || ''; // Get first url

      const link = div.querySelector('a');
      const url = link === null || link === void 0 ? void 0 : link.getAttribute('href'); // Create singular button in the buttons block

      return createBlock('core/button', {
        text,
        url
      });
    })),
    isMatch: paragraphs => {
      return paragraphs.every(attributes => {
        const div = document.createElement('div');
        div.innerHTML = attributes.content;
        const text = div.innerText || '';
        const links = div.querySelectorAll('a');
        return text.length <= 30 && links.length <= 1;
      });
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/blocks/callout/edit.js":
/*!************************************!*\
  !*** ./src/blocks/callout/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CalloutEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */

const TEMPLATE = [['core/paragraph', {
  fontSize: 'large',
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Callout title…')
}], ['core/paragraph', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the callout message or replace…')
}]];
function CalloutEdit() {
  const blocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blocksProps, {
    template: TEMPLATE
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
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
const {
  Path,
  SVG
} = wp.components;
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
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/callout/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/callout/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/callout/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/callout/icon.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

const settings = {
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        fontSize: 'large',

        /* translators: example text. */
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Riverside Wren (Cantorchilus semibadius)')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        /* translators: example text. */
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The wren<br>Earns his living<br>Noiselessly.')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        /* translators: example text. */
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('— Kobayashi Issa (一茶)')
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

function save() {
  const blocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blocksProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "./src/blocks/filter-section/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/filter-section/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  sprintf,
  __
} = wp.i18n;
const {
  useSelect
} = wp.data;
const {
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
  store: blockEditorStore
} = wp.blockEditor;

function SearchFilterSectionEdit(_ref) {
  let {
    clientId
  } = _ref;
  const {
    searchSectionIds,
    hasChildBlocks
  } = useSelect(select => {
    const {
      getBlockOrder,
      getBlockRootClientId
    } = select(blockEditorStore);
    const rootId = getBlockRootClientId(clientId);
    return {
      hasChildBlocks: getBlockOrder(clientId).length > 0,
      searchSectionIds: getBlockOrder(rootId)
    };
  }, [clientId]);
  const blockProps = useBlockProps();
  const sectionsCount = searchSectionIds.length;
  const currentSectionPosition = searchSectionIds.indexOf(clientId) + 1;
  const label = sprintf(
  /* translators: 1: Block label (i.e. "Block: Search Filter"), 2: Position of the selected block, 3: Total number of sibling blocks of the same type */
  __('%1$s (%2$s of %3$s)'), blockProps['aria-label'], currentSectionPosition, sectionsCount);
  const innerBlocksProps = useInnerBlocksProps({ ...blockProps,
    'aria-label': label
  }, {
    templateLock: false,
    renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/* harmony default export */ __webpack_exports__["default"] = (SearchFilterSectionEdit);

/***/ }),

/***/ "./src/blocks/filter-section/icon.js":
/*!*******************************************!*\
  !*** ./src/blocks/filter-section/icon.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.components;
const search = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/blocks/filter-section/index.js":
/*!********************************************!*\
  !*** ./src/blocks/filter-section/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/filter-section/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/filter-section/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/filter-section/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/filter-section/icon.js");
/**
 * WordPress dependencies
 */
const {
  __,
  _x
} = wp.i18n;
/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  title: _x('Filter Section', 'block title'),
  description: __('A single section of content to search within.'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/filter-section/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/filter-section/save.js ***!
  \*******************************************/
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
const {
  useInnerBlocksProps,
  useBlockProps
} = wp.blockEditor;
function save() {
  const blockProps = useBlockProps.save();
  const innerBlocksProps = useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "./src/blocks/filter/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/filter/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  PanelBody,
  ToggleControl
} = wp.components;
const {
  InspectorControls,
  useInnerBlocksProps,
  useBlockProps
} = wp.blockEditor;
/**
 * The Allowed Blocks.
 *
 * The allowed blocks constant is passed to InnerBlocks as specified here.
 * The only block allowed in the Search Filter block is the Search Filter
 * Section block (hrswp/filter-section).
 *
 * @constant
 * @type {string[]}
 */

const ALLOWED_BLOCKS = ['hrswp/filter-section'];
/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */

const TEMPLATE = [['hrswp/filter-section']];

function SearchFilterEdit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    retainHeadings
  } = attributes;
  const blockProps = useBlockProps();
  const innerBlockProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: 'all',
    orientation: 'vertical',
    renderAppender: false
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Filter Settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Retain Headings'),
    checked: !!retainHeadings,
    onChange: () => setAttributes({
      retainHeadings: !retainHeadings
    }),
    help: retainHeadings ? __('Headings not matching search term will not be hidden.') : __('Toggle to always show headings.')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlockProps));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchFilterEdit);

/***/ }),

/***/ "./src/blocks/filter/index.js":
/*!************************************!*\
  !*** ./src/blocks/filter/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/filter/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/filter/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/filter/save.js");
/**
 * WordPress dependencies
 */
const {
  __,
  _x
} = wp.i18n;
/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  title: _x('Filter', 'block title'),
  icon: 'filter',
  description: __('Search and filter a section of content by full text.'),
  keywords: [__('filter search')],
  example: {
    innerBlocks: [{
      name: 'hrswp/filter-section',
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

/***/ "./src/blocks/filter/save.js":
/*!***********************************!*\
  !*** ./src/blocks/filter/save.js ***!
  \***********************************/
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
const {
  useInnerBlocksProps,
  useBlockProps
} = wp.blockEditor;
function save() {
  const blockProps = useBlockProps.save();
  const innerBlocksProps = useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
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
/* harmony export */   "hideBlocks": function() { return /* binding */ hideBlocks; },
/* harmony export */   "registerBlocks": function() { return /* binding */ registerBlocks; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accordion_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion-heading */ "./src/blocks/accordion-heading/index.js");
/* harmony import */ var _accordion_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion-section */ "./src/blocks/accordion-section/index.js");
/* harmony import */ var _accordions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordions */ "./src/blocks/accordions/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button */ "./src/blocks/button/index.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons */ "./src/blocks/buttons/index.js");
/* harmony import */ var _posts_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts-list */ "./src/blocks/posts-list/index.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter */ "./src/blocks/filter/index.js");
/* harmony import */ var _filter_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-section */ "./src/blocks/filter-section/index.js");
/* harmony import */ var _callout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./callout */ "./src/blocks/callout/index.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification */ "./src/blocks/notification/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar */ "./src/blocks/sidebar/index.js");
/* harmony import */ var _spacer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spacer */ "./src/blocks/spacer/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */













const hrsBlocks = [_accordion_heading__WEBPACK_IMPORTED_MODULE_2__, _accordion_section__WEBPACK_IMPORTED_MODULE_3__, _accordions__WEBPACK_IMPORTED_MODULE_4__, _button__WEBPACK_IMPORTED_MODULE_5__, _buttons__WEBPACK_IMPORTED_MODULE_6__, _posts_list__WEBPACK_IMPORTED_MODULE_7__, _filter__WEBPACK_IMPORTED_MODULE_8__, _filter_section__WEBPACK_IMPORTED_MODULE_9__, _callout__WEBPACK_IMPORTED_MODULE_10__, _notification__WEBPACK_IMPORTED_MODULE_11__, _sidebar__WEBPACK_IMPORTED_MODULE_12__, _spacer__WEBPACK_IMPORTED_MODULE_13__];
const hiddenBlocks = ['core/button', 'core/buttons', 'core/code', 'core/preformatted', 'core/spacer', 'core/verse'];
/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

const registerBlock = block => {
  if (!block) {
    return;
  }

  const {
    metadata,
    settings,
    name
  } = block;
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, { ...metadata,
    ...settings
  });
};
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


const registerBlocks = () => {
  hrsBlocks.forEach(registerBlock);
};
const hideBlocks = () => {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/edit-post').hideBlockTypes(hiddenBlocks);
};

/***/ }),

/***/ "./src/blocks/notification/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/notification/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);


/**
 * External dependencies.
 */


/**
 * WordPress dependencies
 */






/**
 * The allowed blocks.
 *
 * @constant
 * @type {string[]}
 */

const ALLOWED_BLOCKS = ['core/paragraph', 'hrswp/button'];
/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */

const TEMPLATE = [['core/paragraph', {
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Write message…')
}], ['hrswp/button']];

function NotificationEditContainer(_ref) {
  let {
    className,
    attributes,
    updateBlocks
  } = _ref;
  const {
    showActionButton
  } = attributes;
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'has-action-button': showActionButton
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)({
    className: wrapperClasses
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "insert"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Action Button Settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Action Button'),
    checked: !!showActionButton,
    onChange: value => updateBlocks(value),
    help: showActionButton ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Use the action button to call users to action.') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle to include an action button.')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
}

const NotificationEdit = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)((dispatch, ownProps, registry) => ({
  updateBlocks(showActionButton) {
    const {
      clientId,
      setAttributes
    } = ownProps;
    const {
      replaceInnerBlocks
    } = dispatch('core/block-editor');
    const {
      getBlocks
    } = registry.select('core/block-editor');
    let innerBlocks = getBlocks(clientId); // Set the block's own attribute.

    setAttributes({
      showActionButton
    });

    if (true === showActionButton) {
      // Add the action button.
      innerBlocks = [...innerBlocks, ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.times)(1, () => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)('hrswp/button');
      })];
    } else {
      // Remove the action button.
      innerBlocks = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.dropRight)(innerBlocks, 1);
    }

    replaceInnerBlocks(clientId, innerBlocks, false);
  }

}))(NotificationEditContainer);
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
const {
  Path,
  SVG,
  Circle
} = wp.components;
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
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/notification/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/notification/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/notification/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/notification/icon.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

const settings = {
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        /* translators: example text. */
        content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('At length, however, Mrs. Bennet had no more to say; and Lady Lucas … was left to the comforts of cold ham and chicken.')
      }
    }, {
      name: 'hrswp/button',
      attributes: {
        /* translators: example text. */
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Jane Austen')
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies.
 */

/**
 * WordPress dependencies
 */


function save(_ref) {
  let {
    attributes,
    className
  } = _ref;
  const {
    showActionButton
  } = attributes;
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'has-action-button': showActionButton
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: wrapperClasses
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "./src/blocks/posts-list/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/posts-list/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/blocks/posts-list/icons.js");
/* harmony import */ var _post_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-meta */ "./src/blocks/posts-list/post-meta.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./src/blocks/posts-list/shared.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  Component,
  RawHTML
} = wp.element;
const {
  BaseControl,
  CheckboxControl,
  PanelBody,
  Placeholder,
  QueryControls,
  RadioControl,
  RangeControl,
  Spinner,
  ToggleControl,
  ToolbarGroup
} = wp.components;
const {
  __
} = wp.i18n;
const {
  InspectorControls,
  BlockAlignmentToolbar,
  BlockControls,
  __experimentalImageSizeControl
} = wp.blockEditor;
const {
  withSelect
} = wp.data;
/**
 * Internal dependencies
 */





class PostsListEdit extends Component {
  /**
   * Adds or removes a taxonomy term from the selected terms attribute.
   *
   * @param {string} taxonomy A WP taxonomy `rest_base` value.
   * @param {Object} term     The selected term to add or remove.
   */
  toggleSelectedTerms(taxonomy, term) {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      selectedTermLists
    } = attributes;
    const allTerms = !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(selectedTermLists) ? selectedTermLists : {};
    const taxonomyTerms = !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(allTerms[taxonomy]) ? allTerms[taxonomy] : allTerms[taxonomy] = [];
    const hasTerm = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)((0,_shared__WEBPACK_IMPORTED_MODULE_5__.taxonomyListToIds)(allTerms, taxonomy), term.id);
    const newTerms = hasTerm ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.remove)(taxonomyTerms, value => {
      return value.id !== term.id;
    }) : [...taxonomyTerms, term];
    allTerms[taxonomy] = newTerms;
    setAttributes({
      selectedTermLists: allTerms
    });
  }

  render() {
    const {
      attributes,
      setAttributes,
      className,
      imageSizeOptions,
      postsList,
      taxonomies,
      termLists,
      defaultImageWidth,
      defaultImageHeight
    } = this.props;
    const {
      displayFeaturedImage,
      displayPostContentRadio,
      displayPostContent,
      displayPostDate,
      displayPostCategory,
      displayPostTag,
      displayPostTaxonomy,
      postLayout,
      columns,
      order,
      orderBy,
      selectedTermLists,
      postsToShow,
      excerptLength,
      featuredImageAlign,
      featuredImageSizeSlug,
      featuredImageSizeWidth,
      featuredImageSizeHeight
    } = attributes;
    const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Post content settings')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Post content'),
      checked: displayPostContent,
      onChange: value => setAttributes({
        displayPostContent: value
      })
    }), displayPostContent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: __('Show:'),
      selected: displayPostContentRadio,
      options: [{
        label: __('Excerpt'),
        value: 'excerpt'
      }, {
        label: __('Full post'),
        value: 'full_post'
      }],
      onChange: value => setAttributes({
        displayPostContentRadio: value
      })
    }), displayPostContent && displayPostContentRadio === 'excerpt' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Max number of words in excerpt'),
      value: excerptLength,
      onChange: value => setAttributes({
        excerptLength: value
      }),
      min: _shared__WEBPACK_IMPORTED_MODULE_5__.MIN_EXCERPT_LENGTH,
      max: _shared__WEBPACK_IMPORTED_MODULE_5__.MAX_EXCERPT_LENGTH
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Post meta settings')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Display post date'),
      checked: displayPostDate,
      onChange: value => setAttributes({
        displayPostDate: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Display post category'),
      checked: displayPostCategory,
      onChange: value => setAttributes({
        displayPostCategory: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Display post tag'),
      checked: displayPostTag,
      onChange: value => setAttributes({
        displayPostTag: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Display post taxonomy'),
      checked: displayPostTaxonomy,
      onChange: value => setAttributes({
        displayPostTaxonomy: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Featured image settings')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Display featured image'),
      checked: displayFeaturedImage,
      onChange: value => setAttributes({
        displayFeaturedImage: value
      })
    }), displayFeaturedImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(__experimentalImageSizeControl, {
      onChange: value => {
        const newAttrs = {};

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
      onChangeImage: value => setAttributes({
        featuredImageSizeSlug: value,
        featuredImageSizeWidth: undefined,
        featuredImageSizeHeight: undefined
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl.VisualLabel, null, __('Image alignment')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAlignmentToolbar, {
      value: featuredImageAlign,
      onChange: value => setAttributes({
        featuredImageAlign: value
      }),
      controls: ['left', 'center', 'right'],
      isCollapsed: false
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      className: `${className} taxonomy-filter`,
      title: __('Filtering'),
      initialOpen: false
    }, taxonomies.map(taxonomy => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      className: 'taxonomy-filter--body',
      key: taxonomy.slug,
      title: taxonomy.name,
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "edit__checklist"
    }, termLists[taxonomy.slug] && termLists[taxonomy.slug].map(term => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: term.id,
      className: "components-checkbox-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: term.name,
      checked: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)((0,_shared__WEBPACK_IMPORTED_MODULE_5__.taxonomyListToIds)(selectedTermLists, taxonomy.rest_base), term.id),
      onChange: () => {
        this.toggleSelectedTerms(taxonomy.rest_base, term);
      }
    }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Order and number'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(QueryControls, {
      order,
      orderBy,
      numberOfItems: postsToShow,
      onOrderChange: value => setAttributes({
        order: value
      }),
      onOrderByChange: value => setAttributes({
        orderBy: value
      }),
      onNumberOfItemsChange: value => setAttributes({
        postsToShow: value
      })
    }), postLayout === 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Maximum columns'),
      value: columns,
      onChange: value => setAttributes({
        columns: value
      }),
      min: 2,
      max: !hasPosts ? _shared__WEBPACK_IMPORTED_MODULE_5__.MAX_POSTS_COLUMNS : Math.min(_shared__WEBPACK_IMPORTED_MODULE_5__.MAX_POSTS_COLUMNS, postsList.length),
      required: true
    })));
    const hasPosts = Array.isArray(postsList) && postsList.length;

    if (!hasPosts) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_3__.pin,
        label: __('Posts')
      }, !Array.isArray(postsList) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null) : __('No posts found.')));
    } // Removing posts from display should be instant.


    const displayPosts = postsList.length > postsToShow ? postsList.slice(0, postsToShow) : postsList;
    const layoutControls = [{
      icon: _icons__WEBPACK_IMPORTED_MODULE_3__.list,
      title: __('List view'),
      onClick: () => setAttributes({
        postLayout: 'list'
      }),
      isActive: postLayout === 'list'
    }, {
      icon: _icons__WEBPACK_IMPORTED_MODULE_3__.grid,
      title: __('Grid view'),
      onClick: () => setAttributes({
        postLayout: 'grid'
      }),
      isActive: postLayout === 'grid'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarGroup, {
      controls: layoutControls
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
        'is-grid': postLayout === 'grid',
        'has-feature-image': displayFeaturedImage,
        'has-date': displayPostDate,
        'has-full-content': displayPostContent && displayPostContentRadio === 'full_post',
        'has-excerpt': displayPostContent && displayPostContentRadio === 'excerpt',
        [`columns-${columns}`]: postLayout === 'grid'
      })
    }, displayPosts.map((post, i) => {
      const titleTrimmed = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.invoke)(post, ['title', 'rendered', 'trim']);
      let excerpt = post.content.rendered;
      const excerptElement = document.createElement('div');
      excerptElement.innerHTML = excerpt;
      excerpt = excerptElement.textContent || excerptElement.innerText || '';
      const imageSourceUrl = post.featuredImageSourceUrl;
      const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        'wp-block-hrswp-posts-list--featured-image': true,
        [`size-${featuredImageSizeSlug}`]: !!featuredImageSizeSlug,
        [`align${featuredImageAlign}`]: !!featuredImageAlign
      });
      const hasPostMeta = displayPostDate || displayPostCategory || displayPostTag || displayPostTaxonomy;
      const needsReadMore = excerptLength < excerpt.trim().split(' ').length && post.excerpt.raw === '';
      const postExcerpt = needsReadMore ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, excerpt.trim().split(' ', excerptLength).join(' '), __(' … ')) : excerpt;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-block-hrswp-posts-list--list-item",
        key: i
      }, displayFeaturedImage && imageSourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
        className: imageClasses
      }, imageSourceUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: imageSourceUrl,
        alt: "",
        style: {
          maxWidth: featuredImageSizeWidth,
          maxHeight: featuredImageSizeHeight
        }
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-block-hrswp-posts-list--body"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
        className: "wp-block-hrswp-posts-list--heading"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: post.link,
        target: "_blank",
        rel: "noreferrer noopener"
      }, titleTrimmed ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, titleTrimmed) : __('(no title)'))), displayPostContent && displayPostContentRadio === 'excerpt' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "wp-block-hrswp-posts-list--post-excerpt"
      }, postExcerpt), displayPostContent && displayPostContentRadio === 'full_post' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-block-hrswp-posts-list--post-full-content"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, {
        key: "html"
      }, post.content.raw.trim())), hasPostMeta && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_post_meta__WEBPACK_IMPORTED_MODULE_4__.PostMeta, {
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

}

/* harmony default export */ __webpack_exports__["default"] = (withSelect((select, props) => {
  const {
    featuredImageSizeSlug,
    postsToShow,
    order,
    orderBy,
    selectedTermLists
  } = props.attributes;
  const {
    getEntityRecords,
    getMedia,
    getTaxonomies
  } = select('core');
  const {
    getSettings
  } = select('core/block-editor');
  const {
    imageSizes,
    imageDimensions
  } = getSettings();
  const postsListQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)({
    order,
    orderby: orderBy,
    per_page: postsToShow
  }, value => !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(value));

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(selectedTermLists)) {
    Object.entries(selectedTermLists).forEach(_ref => {
      let [slug, terms] = _ref;
      postsListQuery[slug] = terms.map(term => term.id);
    });
  }

  const posts = getEntityRecords('postType', 'post', postsListQuery);
  const allTaxonomies = getTaxonomies(_shared__WEBPACK_IMPORTED_MODULE_5__.TERMS_LIST_QUERY);
  const taxonomies = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(allTaxonomies, taxonomy => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(taxonomy.types, 'post'));
  const termLists = {};
  taxonomies.forEach(_ref2 => {
    let {
      slug
    } = _ref2;
    Object.defineProperty(termLists, slug, {
      value: getEntityRecords('taxonomy', slug, _shared__WEBPACK_IMPORTED_MODULE_5__.TERMS_LIST_QUERY)
    });
  });
  const imageSizeOptions = imageSizes.filter(_ref3 => {
    let {
      slug
    } = _ref3;
    return slug !== 'full';
  }).map(_ref4 => {
    let {
      name,
      slug
    } = _ref4;
    return {
      value: slug,
      label: name
    };
  });
  return {
    defaultImageWidth: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(imageDimensions, [featuredImageSizeSlug, 'width'], 0),
    defaultImageHeight: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(imageDimensions, [featuredImageSizeSlug, 'height'], 0),
    imageSizeOptions,
    taxonomies,
    termLists,
    postsList: !Array.isArray(posts) ? posts : posts.map(post => {
      if (post.featured_media) {
        const image = getMedia(post.featured_media);
        let url = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['media_details', 'sizes', featuredImageSizeSlug, 'source_url'], null);

        if (!url) {
          url = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, 'source_url', null);
        }

        return { ...post,
          featuredImageSourceUrl: url
        };
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
/* harmony export */   "grid": function() { return /* binding */ grid; },
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "list": function() { return /* binding */ list; },
/* harmony export */   "pin": function() { return /* binding */ pin; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  SVG,
  Path
} = wp.primitives;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M19 18V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6V3h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6v-6h11z"
}));
const grid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z"
}));
const pin = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"
}));
const list = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
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
const {
  __
} = wp.i18n;
/**
 * Internal dependencies
 */




const {
  name,
  category,
  supports
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  title: __('Posts List'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__.icon,
  category,
  description: __('Display a list of posts.'),
  keywords: [__('posts'), __('latest posts')],
  supports,
  example: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"]
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

const {
  Fragment
} = wp.element;
const ListTerms = props => {
  const {
    terms,
    taxonomySlug,
    post,
    prefix
  } = props; // Compat check for WP mismatched slugs.

  let slug;

  if ('category' === taxonomySlug || 'post_tag' === taxonomySlug) {
    slug = 'category' === taxonomySlug ? 'categories' : 'tags';
  } else {
    slug = taxonomySlug;
  }

  const postTerms = post[slug];
  const hasTerms = Array.isArray(postTerms) && postTerms.length;

  if (!hasTerms) {
    return null;
  }

  const listTerms = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(terms[taxonomySlug], i => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(postTerms, i.id));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `wp-block-hrswp-posts-list--${taxonomySlug}-list`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, prefix), listTerms.map((term, i) => {
    const sep = i > 0 ? ', ' : '';
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
const {
  __
} = wp.i18n;
const {
  dateI18n,
  format,
  __experimentalGetSettings
} = wp.date;
/**
 * Internal dependencies
 */


const PostMeta = props => {
  const {
    displayPostCategory,
    displayPostDate,
    displayPostTag,
    displayPostTaxonomy,
    post,
    taxonomies,
    termLists
  } = props;

  const dateFormat = __experimentalGetSettings().formats.date;

  const hasPostTerms = displayPostCategory || displayPostTag || displayPostTaxonomy; // Move `post_tags` to the end.

  if (hasPostTerms && taxonomies) {
    taxonomies.push(taxonomies.splice(taxonomies.findIndex(i => i.slug === 'post_tag'), 1)[0]);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-hrswp-posts-list--meta"
  }, hasPostTerms && taxonomies.map(taxonomy => {
    let prefix;

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

      prefix = `${taxonomy.labels.singular_name}: `;
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
/* harmony export */   "MAX_EXCERPT_LENGTH": function() { return /* binding */ MAX_EXCERPT_LENGTH; },
/* harmony export */   "MAX_POSTS_COLUMNS": function() { return /* binding */ MAX_POSTS_COLUMNS; },
/* harmony export */   "MIN_EXCERPT_LENGTH": function() { return /* binding */ MIN_EXCERPT_LENGTH; },
/* harmony export */   "TERMS_LIST_QUERY": function() { return /* binding */ TERMS_LIST_QUERY; },
/* harmony export */   "taxonomyListToIds": function() { return /* binding */ taxonomyListToIds; }
/* harmony export */ });
const MIN_EXCERPT_LENGTH = 10;
const MAX_EXCERPT_LENGTH = 100;
const MAX_POSTS_COLUMNS = 6;
const TERMS_LIST_QUERY = {
  per_page: -1
};
/**
 * Converts an array of taxonomy terms into an array of IDs.
 *
 * @param {Object[]} terms    An array of taxonomy term objects.
 * @param {string}   taxonomy The name of the taxonomy the terms belong to.
 */

function taxonomyListToIds(terms, taxonomy) {
  if (!terms) {
    return null;
  }

  const ids = terms[taxonomy] && terms[taxonomy].length > 0 ? terms[taxonomy].map(term => term.id) : [];
  return ids;
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


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  useInnerBlocksProps,
  useBlockProps
} = wp.blockEditor;
/**
 * The block template.
 *
 * @constant
 * @type {string[]}
 */

const TEMPLATE = [['core/column', {
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

const ALLOWED_BLOCKS = ['core/column'];

function SidebarEdit() {
  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: 'all',
    orientation: 'horizontal',
    renderAppender: false
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
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
const {
  Path,
  SVG
} = wp.components;
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
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
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
const {
  __,
  _x
} = wp.i18n;
/**
 * Internal dependencies
 */






const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  title: _x('Sidebar', 'block title'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  description: __('Display content in a sidebar-style layout (two-thirds and one-third).'),
  keywords: [__('sidebar'), __('columns')],
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
const {
  useBlockProps,
  useInnerBlocksProps
} = wp.blockEditor;
function save() {
  const blockProps = useBlockProps.save();
  const innerBlocksProps = useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
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
const {
  createBlock
} = wp.blocks;
const transforms = {
  from: [{
    type: 'block',
    blocks: ['hrs-wsu-edu/sidebar'],
    transform: (attributes, innerBlocks) => {
      return createBlock('hrswp/sidebar', attributes, innerBlocks);
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/blocks/spacer/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/spacer/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  InspectorControls,
  useBlockProps,
  store: blockEditorStore
} = wp.blockEditor;
const {
  PanelBody,
  ResizableBox,
  RangeControl
} = wp.components;
const {
  compose,
  withInstanceId
} = wp.compose;
const {
  withDispatch
} = wp.data;
const {
  useState,
  useEffect
} = wp.element;
const {
  View
} = wp.primitives;
const MIN_SPACER_HEIGHT = 18;
const MAX_SPACER_HEIGHT = 540;
const MIN_SPACER_WIDTH = 1;
const MAX_SPACER_WIDTH = 500;

const SpacerEdit = _ref => {
  let {
    attributes,
    isSelected,
    setAttributes,
    onResizeStart,
    onResizeStop,
    context
  } = _ref;
  const {
    orientation
  } = context;
  const [isResizing, setIsResizing] = useState(false);
  const {
    height,
    width
  } = attributes;

  const updateHeight = value => {
    setAttributes({
      height: value
    });
  };

  const updateWidth = value => {
    setAttributes({
      width: value
    });
  };

  const handleOnResizeStart = function () {
    onResizeStart(...arguments);
    setIsResizing(true);
  };

  const handleOnVerticalResizeStop = (event, direction, elt, delta) => {
    onResizeStop();
    const spacerHeight = Math.min(parseInt(height + delta.height, 10), MAX_SPACER_HEIGHT);
    updateHeight(spacerHeight);
    setIsResizing(false);
  };

  const handleOnHorizontalResizeStop = (event, direction, elt, delta) => {
    onResizeStop();
    const spacerWidth = Math.min(parseInt(width + delta.width, 10), MAX_SPACER_WIDTH);
    updateWidth(spacerWidth);
    setIsResizing(false);
  };

  const resizableBoxWithOrientation = blockOrientation => {
    if (blockOrientation === 'horizontal') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResizableBox, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-library-spacer__resize-container', 'resize-horizontal', {
          'is-selected': isSelected
        }),
        size: {
          width,
          height: 24
        },
        minWidth: MIN_SPACER_WIDTH,
        enable: {
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        },
        onResizeStart: handleOnResizeStart,
        onResizeStop: handleOnHorizontalResizeStop,
        showHandle: isSelected,
        __experimentalShowTooltip: true,
        __experimentalTooltipProps: {
          axis: 'x',
          position: 'corner',
          isVisible: isResizing
        }
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResizableBox, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-library-spacer__resize-container', {
        'is-selected': isSelected
      }),
      size: {
        height
      },
      minHeight: MIN_SPACER_HEIGHT,
      enable: {
        top: false,
        right: false,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      },
      onResizeStart: handleOnResizeStart,
      onResizeStop: handleOnVerticalResizeStop,
      showHandle: isSelected,
      __experimentalShowTooltip: true,
      __experimentalTooltipProps: {
        axis: 'y',
        position: 'bottom',
        isVisible: isResizing
      }
    });
  };

  useEffect(() => {
    if (orientation === 'horizontal' && !width) {
      updateWidth(72);
      updateHeight(0);
    }
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(View, useBlockProps(), resizableBoxWithOrientation(orientation)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Spacer settings')
  }, orientation === 'horizontal' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: __('Width in pixels'),
    min: MIN_SPACER_WIDTH,
    max: Math.max(MAX_SPACER_WIDTH, width),
    value: width,
    onChange: updateWidth
  }), orientation !== 'horizontal' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: __('Height in pixels'),
    min: MIN_SPACER_HEIGHT,
    max: Math.max(MAX_SPACER_HEIGHT, height),
    step: 18,
    value: height,
    onChange: updateHeight
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const {
    toggleSelection
  } = dispatch(blockEditorStore);
  return {
    onResizeStart: () => toggleSelection(false),
    onResizeStop: () => toggleSelection(true)
  };
}), withInstanceId])(SpacerEdit));

/***/ }),

/***/ "./src/blocks/spacer/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/spacer/icon.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  SVG,
  Path
} = wp.primitives;
const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/spacer/index.js":
/*!************************************!*\
  !*** ./src/blocks/spacer/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/spacer/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/spacer/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/spacer/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/spacer/save.js");
/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;

const settings = {
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/blocks/spacer/save.js":
/*!***********************************!*\
  !*** ./src/blocks/spacer/save.js ***!
  \***********************************/
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
const {
  useBlockProps
} = wp.blockEditor;
function save(_ref) {
  let {
    attributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps.save({
    style: {
      height: attributes.height,
      width: attributes.width
    },
    'aria-hidden': true
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.css */ "./src/editor.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/**
 * Internal dependencies
 */



(0,_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlocks)();
(0,_blocks__WEBPACK_IMPORTED_MODULE_0__.hideBlocks)();

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
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

/***/ "./src/editor.css":
/*!************************!*\
  !*** ./src/editor.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),

/***/ "./src/blocks/accordion-heading/block.json":
/*!*************************************************!*\
  !*** ./src/blocks/accordion-heading/block.json ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/accordion-heading","parent":["hrswp/accordion-section"],"category":"text","attributes":{"content":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6","default":""},"level":{"type":"number","default":2},"placeholder":{"type":"string"}},"supports":{"reusable":false,"className":false,"__experimentalSelector":{"hrswp/accordion-heading/h1":{"selector":"h1","title":"h1","attributes":{"level":1}},"hrswp/accordion-heading/h2":{"selector":"h2","title":"h2","attributes":{"level":2}},"hrswp/accordion-heading/h3":{"selector":"h3","title":"h3","attributes":{"level":3}},"hrswp/accordion-heading/h4":{"selector":"h4","title":"h4","attributes":{"level":4}},"hrswp/accordion-heading/h5":{"selector":"h5","title":"h5","attributes":{"level":5}},"hrswp/accordion-heading/h6":{"selector":"h6","title":"h6","attributes":{"level":6}}},"__unstablePasteTextInline":true}}');

/***/ }),

/***/ "./src/blocks/accordion-section/block.json":
/*!*************************************************!*\
  !*** ./src/blocks/accordion-section/block.json ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/accordion-section","title":"Accordion Panel","category":"layout","parent":["hrswp/accordions"],"attributes":{"headingContent":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6","default":""},"elementId":{"type":"int","default":0},"level":{"type":"number","default":2},"placeholder":{"type":"string"}},"supports":{"reusable":false}}');

/***/ }),

/***/ "./src/blocks/accordions/block.json":
/*!******************************************!*\
  !*** ./src/blocks/accordions/block.json ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/accordions","title":"Accordion","category":"layout","description":"Display content in an accordion.","attributes":{"level":{"type":"number","default":2}},"supports":{"align":true,"html":false},"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

/***/ }),

/***/ "./src/blocks/button/block.json":
/*!**************************************!*\
  !*** ./src/blocks/button/block.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/button","title":"Button","category":"design","parent":["hrswp/buttons"],"description":"Prompt visitors to take action.","keywords":["link"],"textdomain":"default","attributes":{"url":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"title":{"type":"string","source":"attribute","selector":"a","attribute":"title"},"text":{"type":"string","source":"html","selector":"a"},"linkTarget":{"type":"string","source":"attribute","selector":"a","attribute":"target"},"rel":{"type":"string","source":"attribute","selector":"a","attribute":"rel"},"placeholder":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"gradient":{"type":"string"},"width":{"type":"number"}},"supports":{"anchor":true,"align":true,"alignWide":false,"color":false,"typography":false,"reusable":false,"spacing":false,"__experimentalBorder":false,"__experimentalSelector":".wp-block-button__link"},"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"},{"name":"text","label":"Text"}],"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

/***/ }),

/***/ "./src/blocks/buttons/block.json":
/*!***************************************!*\
  !*** ./src/blocks/buttons/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/buttons","title":"Buttons","category":"design","description":"Prompt visitors to take action with one or more buttons.","keywords":["link"],"textdomain":"default","supports":{"anchor":true,"align":["wide","full"],"__experimentalExposeControlsToChildren":true,"spacing":{"blockGap":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"blockGap":true}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex"}}},"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

/***/ }),

/***/ "./src/blocks/callout/block.json":
/*!***************************************!*\
  !*** ./src/blocks/callout/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hrswp/callout","title":"Callout","category":"layout","description":"Display content in a callout module.","keywords":["callout","message"],"textdomain":"default","supports":{"align":true},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"positive","label":"Positive"},{"name":"caution","label":"Caution"},{"name":"warning","label":"Warning"}],"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

/***/ }),

/***/ "./src/blocks/filter-section/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/filter-section/block.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/filter-section","category":"widgets","parent":["hrswp/filter"],"supports":{"reusable":false}}');

/***/ }),

/***/ "./src/blocks/filter/block.json":
/*!**************************************!*\
  !*** ./src/blocks/filter/block.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/filter","category":"widgets","attributes":{"retainHeadings":{"type":"boolean","default":false}},"supports":{"align":true,"html":false},"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

/***/ }),

/***/ "./src/blocks/notification/block.json":
/*!********************************************!*\
  !*** ./src/blocks/notification/block.json ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hrswp/notification","title":"Notification","category":"layout","description":"Show a brief notification message with optional action button.","keywords":["callout","message","link"],"textdomain":"default","supports":{"align":true},"attributes":{"showActionButton":{"type":"boolean","default":true}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"positive","label":"Positive"},{"name":"caution","label":"Caution"},{"name":"warning","label":"Warning"}],"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

/***/ }),

/***/ "./src/blocks/posts-list/block.json":
/*!******************************************!*\
  !*** ./src/blocks/posts-list/block.json ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"hrswp/posts-list","category":"widgets","supports":{"align":true,"html":false}}');

/***/ }),

/***/ "./src/blocks/sidebar/block.json":
/*!***************************************!*\
  !*** ./src/blocks/sidebar/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/sidebar","category":"layout","supports":{"align":true},"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

/***/ }),

/***/ "./src/blocks/spacer/block.json":
/*!**************************************!*\
  !*** ./src/blocks/spacer/block.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"hrswp/spacer","title":"Spacer","category":"design","description":"Add white space between blocks and customize its height in increments.","textdomain":"default","attributes":{"height":{"type":"number","default":36},"width":{"type":"number"}},"usesContext":["orientation"],"supports":{"anchor":true},"editorScript":"hrswp_blocks_script","editorStyle":"hrswp_blocks_editor_style"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_washingtonstateuniversity_hrswp_plugin_blocks"] = self["webpackChunk_washingtonstateuniversity_hrswp_plugin_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map