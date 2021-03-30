/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/lib/accordion.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * Accordion (Collapsible Panels)
 *
 */
var Accordion = /*#__PURE__*/function () {
  /**
   * Instantiates an accordion on a given accordion block.
   *
   * @param {Node} accordionBlock An accordion block to make interactive.
   */
  function Accordion(accordionBlock) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Accordion);

    this._parent = accordionBlock;
    this._panels = this._parent.querySelectorAll('.accordion-panel');
    this._headings = this._parent.querySelectorAll('.accordion-panel-heading');
    this._expandAllTrigger = this._parent.querySelector('#open-all-panels');
    this._collapseAllTrigger = this._parent.querySelector('#close-all-panels');
    this.expand = this.expand.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapse = this.collapse.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
    this.toggle = this.toggle.bind(this);

    this._setupPanels();

    this._setupHeadingButtons();

    this._triggers = this._parent.querySelectorAll('.accordion-panel-trigger');

    this._addEventListeners();

    this.activate();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Accordion, [{
    key: "activate",
    value: function activate() {
      this._parent.classList.add('accordion-active');
    }
  }, {
    key: "expand",
    value: function expand(trigger, targetPanel) {
      this._setAriaExpanded(trigger, 'true');

      this._setAriaHidden(targetPanel, 'false');
    }
  }, {
    key: "expandAll",
    value: function expandAll() {
      var _this = this;

      this._panels.forEach(function (panel) {
        _this._setAriaHidden(panel, 'false');
      });

      this._triggers.forEach(function (trigger) {
        _this._setAriaExpanded(trigger, 'true');
      });
    }
  }, {
    key: "collapse",
    value: function collapse(trigger, targetPanel) {
      this._setAriaExpanded(trigger, 'false');

      this._setAriaHidden(targetPanel, 'true');
    }
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      var _this2 = this;

      this._panels.forEach(function (panel) {
        _this2._setAriaHidden(panel, 'true');
      });

      this._triggers.forEach(function (trigger) {
        _this2._setAriaExpanded(trigger, 'false');
      });
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      var trigger = e.target;
      var targetPanel = document.getElementById(trigger.getAttribute('aria-controls'));
      e.preventDefault();

      if (this._isExpanded(trigger)) {
        this.collapse(trigger, targetPanel);
        return;
      }

      this.expand(trigger, targetPanel);
    }
  }, {
    key: "_setupPanels",
    value: function _setupPanels() {
      this._panels.forEach(function (panel) {
        panel.setAttribute('aria-hidden', true);
      });
    }
  }, {
    key: "_setupHeadingButtons",
    value: function _setupHeadingButtons() {
      this._headings.forEach(function (heading) {
        var targetId = heading.nextElementSibling.id;
        var Button = document.createElement('button');
        var ButtonText = heading.textContent;
        heading.innerHTML = '';
        Button.setAttribute('type', 'button');
        Button.setAttribute('aria-controls', targetId);
        Button.setAttribute('id', "".concat(targetId, "-trigger"));
        Button.classList.add('accordion-panel-trigger');
        heading.appendChild(Button);
        Button.appendChild(document.createTextNode(ButtonText));
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this3 = this;

      this._triggers.forEach(function (trigger) {
        trigger.addEventListener('click', _this3.toggle);
      });

      this._expandAllTrigger.addEventListener('click', this.expandAll);

      this._collapseAllTrigger.addEventListener('click', this.collapseAll);
    }
  }, {
    key: "_isExpanded",
    value: function _isExpanded(trigger) {
      return trigger.getAttribute('aria-expanded') === 'true';
    }
  }, {
    key: "_setAriaHidden",
    value: function _setAriaHidden(element, state) {
      return element.setAttribute('aria-hidden', state);
    }
  }, {
    key: "_setAriaExpanded",
    value: function _setAriaExpanded(element, state) {
      return element.setAttribute('aria-expanded', state);
    }
  }]);

  return Accordion;
}();
/**
 * Initializes all accordion blocks on the page.
 */


function init() {
  var accordionBlocks =
  /** @type {NodeList} */
  document.querySelectorAll('.wp-block-hrswp-accordion');
  accordionBlocks.forEach(function (accordionBlock) {
    new Accordion(accordionBlock);
  });
}

init();
}();
/******/ })()
;
//# sourceMappingURL=accordion.js.map