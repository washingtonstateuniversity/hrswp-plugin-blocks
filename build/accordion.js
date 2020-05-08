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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/accordion.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/lib/accordion.js":
/*!******************************!*\
  !*** ./src/lib/accordion.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



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
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Accordion);

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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Accordion, [{
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

/***/ })

/******/ });
//# sourceMappingURL=accordion.js.map