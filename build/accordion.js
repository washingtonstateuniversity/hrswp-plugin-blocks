!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}({19:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(3),o=n.n(a),u=function(){function e(t){i()(this,e),this._parent=t,this._panels=this._parent.querySelectorAll(".accordion-panel"),this._headings=this._parent.querySelectorAll(".accordion-panel-heading"),this.expand=this.expand.bind(this),this.collapse=this.collapse.bind(this),this.toggle=this.toggle.bind(this),this._setupPanels(),this._setupHeadingButtons(),this._triggers=this._parent.querySelectorAll(".accordion-panel-trigger"),this._addEventListeners(),this.activate()}return o()(e,[{key:"activate",value:function(){this._parent.classList.add("accordion-active")}},{key:"expand",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];r.forEach((function(n){t._setAriaExpanded(e,"true"),t._setAriaHidden(n,"false")}))}},{key:"collapse",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];r.forEach((function(n){t._setAriaExpanded(e,"false"),t._setAriaHidden(n,"true")}))}},{key:"toggle",value:function(e){var t=e.target,n=document.getElementById(t.getAttribute("aria-controls"));e.preventDefault(),this._isExpanded(t)?this.collapse(t,n):this.expand(t,n)}},{key:"_setupPanels",value:function(){this._panels.forEach((function(e){e.setAttribute("aria-hidden",!0)}))}},{key:"_setupHeadingButtons",value:function(){this._headings.forEach((function(e){var t=e.nextElementSibling.id,n=document.createElement("button"),r=e.textContent;e.innerHTML="",n.setAttribute("type","button"),n.setAttribute("aria-controls",t),n.setAttribute("id","".concat(t,"-trigger")),n.classList.add("accordion-panel-trigger"),e.appendChild(n),n.appendChild(document.createTextNode(r))}))}},{key:"_addEventListeners",value:function(){var e=this;this._triggers.forEach((function(t){t.addEventListener("click",e.toggle)}))}},{key:"_isExpanded",value:function(e){return"true"===e.getAttribute("aria-expanded")}},{key:"_setAriaHidden",value:function(e,t){return e.setAttribute("aria-hidden",t)}},{key:"_setAriaExpanded",value:function(e,t){return e.setAttribute("aria-expanded",t)}}]),e}();document.querySelectorAll(".wp-block-hrswp-accordion").forEach((function(e){new u(e)}))},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}});