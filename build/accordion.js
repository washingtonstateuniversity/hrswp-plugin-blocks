!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}({3:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},31:function(e,t,n){"use strict";n.r(t);var i=n(3),r=n.n(i),a=n(4),l=n.n(a),s=function(){function e(t){r()(this,e),this._parent=t,this._panels=this._parent.querySelectorAll(".accordion-panel"),this._headings=this._parent.querySelectorAll(".accordion-panel-heading"),this._expandAllTrigger=this._parent.querySelector("#open-all-panels"),this._collapseAllTrigger=this._parent.querySelector("#close-all-panels"),this.expand=this.expand.bind(this),this.expandAll=this.expandAll.bind(this),this.collapse=this.collapse.bind(this),this.collapseAll=this.collapseAll.bind(this),this.toggle=this.toggle.bind(this),this._setupPanels(),this._setupHeadingButtons(),this._triggers=this._parent.querySelectorAll(".accordion-panel-trigger"),this._addEventListeners(),this.activate()}return l()(e,[{key:"activate",value:function(){this._parent.classList.add("accordion-active")}},{key:"expand",value:function(e,t){this._setAriaExpanded(e,"true"),this._setAriaHidden(t,"false")}},{key:"expandAll",value:function(){var e=this;this._panels.forEach((function(t){e._setAriaHidden(t,"false")})),this._triggers.forEach((function(t){e._setAriaExpanded(t,"true")}))}},{key:"collapse",value:function(e,t){this._setAriaExpanded(e,"false"),this._setAriaHidden(t,"true")}},{key:"collapseAll",value:function(){var e=this;this._panels.forEach((function(t){e._setAriaHidden(t,"true")})),this._triggers.forEach((function(t){e._setAriaExpanded(t,"false")}))}},{key:"toggle",value:function(e){var t=e.target,n=document.getElementById(t.getAttribute("aria-controls"));e.preventDefault(),this._isExpanded(t)?this.collapse(t,n):this.expand(t,n)}},{key:"_setupPanels",value:function(){this._panels.forEach((function(e){e.setAttribute("aria-hidden",!0)}))}},{key:"_setupHeadingButtons",value:function(){this._headings.forEach((function(e){var t=e.nextElementSibling.id,n=document.createElement("button"),i=e.textContent;e.innerHTML="",n.setAttribute("type","button"),n.setAttribute("aria-controls",t),n.setAttribute("id","".concat(t,"-trigger")),n.classList.add("accordion-panel-trigger"),e.appendChild(n),n.appendChild(document.createTextNode(i))}))}},{key:"_addEventListeners",value:function(){var e=this;this._triggers.forEach((function(t){t.addEventListener("click",e.toggle)})),this._expandAllTrigger.addEventListener("click",this.expandAll),this._collapseAllTrigger.addEventListener("click",this.collapseAll)}},{key:"_isExpanded",value:function(e){return"true"===e.getAttribute("aria-expanded")}},{key:"_setAriaHidden",value:function(e,t){return e.setAttribute("aria-hidden",t)}},{key:"_setAriaExpanded",value:function(e,t){return e.setAttribute("aria-expanded",t)}}]),e}();document.querySelectorAll(".wp-block-hrswp-accordion").forEach((function(e){new s(e)}))},4:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}});