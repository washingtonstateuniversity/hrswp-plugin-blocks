!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){!function(){e.exports=this.wp.primitives}()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(31),a=n(32),o=n(20),c=n(33);e.exports=function(e){return r(e)||a(e)||o(e)||c()}},function(e){e.exports=JSON.parse('{"name":"hrswp/accordion","category":"layout","supports":{"align":true},"attributes":{"level":{"type":"number","default":2}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/accordion-panel","category":"layout","supports":{"reusable":false},"attributes":{"panelHeadingContent":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6","default":""},"elementId":{"type":"int","default":0},"level":{"type":"number","default":2}}}')},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e){e.exports=JSON.parse('{"name":"hrswp/search-filter","category":"widgets","supports":{"align":true,"html":false},"attributes":{"retainHeadings":{"type":"boolean","default":false}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/search-filter-input","category":"common","supports":{"inserter":false,"reusable":false,"html":false},"attributes":{"label":{"type":"string","default":"Search"},"placeholder":{"type":"string","default":""},"buttonText":{"type":"string","default":"Reset"},"elementId":{"type":"int","default":0}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/notification","category":"layout","supports":{"align":true},"attributes":{"showActionButton":{"type":"boolean","default":true}}}')},function(e,t,n){var r=n(25);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(26),a=n(27);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},function(e){e.exports=JSON.parse('{"name":"hrswp/posts-list","category":"widgets","supports":{"align":true,"html":false}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/search-filter-section","category":"common","supports":{"inserter":false,"reusable":false,"html":false}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/callout","category":"layout","supports":{"align":true}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/sidebar","category":"layout","supports":{"align":true}}')},function(e,t,n){var r=n(21);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(28),a=n(29),o=n(20),c=n(30);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||c()}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},,function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(21);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"name",(function(){return Z})),n.d(r,"settings",(function(){return re}));var a={};n.r(a),n.d(a,"name",(function(){return de})),n.d(a,"settings",(function(){return ve}));var o={};n.r(o),n.d(o,"name",(function(){return ft})),n.d(o,"settings",(function(){return vt}));var c={};n.r(c),n.d(c,"name",(function(){return It})),n.d(c,"settings",(function(){return Tt}));var l={};n.r(l),n.d(l,"name",(function(){return Ft})),n.d(l,"settings",(function(){return Jt}));var i={};n.r(i),n.d(i,"name",(function(){return Zt})),n.d(i,"settings",(function(){return rn}));var s={};n.r(s),n.d(s,"name",(function(){return gn})),n.d(s,"settings",(function(){return wn}));var u={};n.r(u),n.d(u,"name",(function(){return Wn})),n.d(u,"settings",(function(){return qn}));var p={};n.r(p),n.d(p,"name",(function(){return ur})),n.d(p,"settings",(function(){return br}));var m=n(0),b=n(3),d=n.n(b),f=n(4),h=n.n(f),g=n(14),v=n.n(g),y=n(15),w=n.n(y),O=n(6),j=n.n(O),E=n(1),k=wp.components,x=k.Path,_=k.SVG;function C(e){var t=e.level,n=e.ispressed,r=void 0===n?"false":n,a={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return a.hasOwnProperty(t)?Object(m.createElement)(_,{width:"24",height:"24",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",ispressed:r},Object(m.createElement)(x,{d:a[t]})):null}function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var N=wp.i18n,B=N.__,H=N.sprintf,I=wp.element.Component,z=wp.components.Toolbar,P=function(e){v()(r,e);var t,n=(t=r,function(){var e,n=j()(t);if(S()){var r=j()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return w()(this,e)});function r(){return d()(this,r),n.apply(this,arguments)}return h()(r,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(m.createElement)(C,{level:e,isPressed:r}),title:H(B("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,a=t.minLevel,o=t.maxLevel,c=t.selectedLevel,l=t.onChange;return Object(m.createElement)(z,{isCollapsed:r,icon:Object(m.createElement)(C,{level:c}),controls:Object(E.range)(a,o).map((function(t){return e.createLevelControl(t,c,l)})),label:B("Change heading level")})}}]),r}(I),A=wp.i18n.__,T=wp.blockEditor,M=T.InnerBlocks,V=T.InspectorControls,L=wp.components,R=L.Disabled,D=L.PanelBody,F=wp.data.withDispatch,W=["hrswp/accordion-panel"],G=[["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"]];var J=F((function(e,t,n){return{updateHeadingLevel:function(r){var a=t.clientId,o=t.setAttributes,c=e("core/block-editor").updateBlockAttributes,l=n.select("core/block-editor").getBlockOrder;o({level:r}),l(a).forEach((function(e){c(e,{level:r})}))}}}))((function(e){var t=e.attributes,n=e.className,r=e.updateHeadingLevel,a=t.level;return Object(m.createElement)(m.Fragment,null,Object(m.createElement)(V,null,Object(m.createElement)(D,{title:A("Heading level")},Object(m.createElement)(P,{isCollapsed:!1,minLevel:1,maxLevel:7,selectedLevel:a,onChange:function(e){return r(e)}}))),Object(m.createElement)("div",{className:n,"data-accordion-block":!0},Object(m.createElement)(R,null,Object(m.createElement)("div",{className:"wp-block-buttons controls"},Object(m.createElement)("div",{className:"wp-block-button is-style-outline"},Object(m.createElement)("button",{id:"open-all-panels",className:"wp-block-button__link"},"Open all")),Object(m.createElement)("div",{className:"wp-block-button is-style-outline"},Object(m.createElement)("button",{id:"close-all-panels",className:"wp-block-button__link"},"Close All")))),Object(m.createElement)(M,{allowedBlocks:W,templateLock:!1,template:G})))})),U=n(8),q=wp.blockEditor.InnerBlocks;var K=wp.components,Q=K.Path,$=K.SVG,X=Object(m.createElement)($,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(m.createElement)(Q,{d:"M0 0h24v24H0V0z",fill:"none"}),Object(m.createElement)(Q,{d:"M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1z"})),Y=wp.i18n.__,Z=U.name,ee=U.category,te=U.supports,ne=U.attributes,re={title:Y("Accordion"),icon:X,category:ee,description:Y("Display content in an accordion."),keywords:[Y("layout"),Y("accordion")],supports:te,attributes:ne,example:{innerBlocks:[{name:"hrswp/accordion-panel",attributes:{panelHeadingContent:Y("An accordion panel title"),level:2},innerBlocks:[{name:"core/paragraph",attributes:{content:Y("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.")}}]},{name:"hrswp/accordion-panel",attributes:{panelHeadingContent:Y("Another accordion panel title"),level:2},innerBlocks:[{name:"core/list",attributes:{values:Y("<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li>")}}]}]},edit:J,save:function(e){var t=e.className;return Object(m.createElement)("div",{className:t,"data-accordion-block":!0},Object(m.createElement)("div",{className:"wp-block-buttons controls"},Object(m.createElement)("div",{className:"wp-block-button is-style-outline"},Object(m.createElement)("button",{id:"open-all-panels",className:"wp-block-button__link"},"Open all")),Object(m.createElement)("div",{className:"wp-block-button is-style-outline"},Object(m.createElement)("button",{id:"close-all-panels",className:"wp-block-button__link"},"Close All"))),Object(m.createElement)(q.Content,null))}},ae=wp.i18n.__,oe=wp.blockEditor,ce=oe.InnerBlocks,le=oe.RichText;var ie=(0,wp.compose.withInstanceId)((function(e){var t=e.attributes,n=e.setAttributes,r=e.instanceId,a=t.panelHeadingContent,o=t.elementId,c="h"+t.level;return n({elementId:"accordion-panel-id-".concat(r)}),Object(m.createElement)(m.Fragment,null,Object(m.createElement)(le,{tagName:c,className:"accordion-panel-heading",value:a,allowedFormats:["italic"],onChange:function(e){return n({panelHeadingContent:e})},placeholder:ae("Brief panel heading…")}),Object(m.createElement)("div",{className:"accordion-panel",id:o},Object(m.createElement)(ce,{templateLock:!1,renderAppender:function(){return Object(m.createElement)(ce.ButtonBlockAppender,null)}})))})),se=n(9),ue=wp.blockEditor,pe=ue.InnerBlocks,me=ue.RichText;var be=wp.i18n.__,de=se.name,fe=se.category,he=se.supports,ge=se.attributes,ve={title:be("Accordion Panel"),parent:["hrswp/accordion"],icon:"index-card",category:fe,description:be("A single panel of accordion content."),keywords:[be("layout"),be("accordion")],supports:he,attributes:ge,edit:ie,save:function(e){var t=e.attributes,n=t.panelHeadingContent,r=t.elementId,a="h"+t.level;return Object(m.createElement)(m.Fragment,null,Object(m.createElement)(me.Content,{tagName:a,className:"accordion-panel-heading",value:n}),Object(m.createElement)("div",{className:"accordion-panel",id:r},Object(m.createElement)(pe.Content,null)))}},ye=n(22),we=n.n(ye),Oe=n(10),je=n.n(Oe),Ee=n(23),ke=n.n(Ee),xe=n(7),_e=n.n(xe),Ce=n(2),Se=n.n(Ce),Ne=n(5),Be=Object(m.createElement)(Ne.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(m.createElement)(Ne.Path,{d:"M19 18V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6V3h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6v-6h11z"})),He=Object(m.createElement)(Ne.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(m.createElement)(Ne.Path,{d:"M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z"})),Ie=Object(m.createElement)(Ne.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(m.createElement)(Ne.Path,{d:"M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"})),ze=Object(m.createElement)(Ne.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(m.createElement)(Ne.Path,{d:"M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11z"})),Pe=wp.element.Fragment,Ae=function(e){var t=e.terms,n=e.taxonomySlug,r=e.post,a=e.prefix,o=r["category"===n||"post_tag"===n?"category"===n?"categories":"tags":n];if(!(Array.isArray(o)&&o.length))return null;var c=Object(E.filter)(t[n],(function(e){return Object(E.includes)(o,e.id)}));return Object(m.createElement)("p",{className:"wp-block-hrswp-posts-list--".concat(n,"-list")},a,c.map((function(e,t){var n=t>0?", ":"";return Object(m.createElement)(Pe,{key:t},n,Object(m.createElement)("a",{href:e.link,target:"_blank",rel:"noreferrer noopener"},e.name))})))},Te={per_page:-1};function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Le=wp.element,Re=Le.Component,De=Le.RawHTML,Fe=wp.components,We=Fe.BaseControl,Ge=Fe.CheckboxControl,Je=Fe.PanelBody,Ue=Fe.Placeholder,qe=Fe.QueryControls,Ke=Fe.RadioControl,Qe=Fe.RangeControl,$e=Fe.Spinner,Xe=Fe.ToggleControl,Ye=Fe.ToolbarGroup,Ze=wp.i18n.__,et=wp.date,tt=et.dateI18n,nt=et.format,rt=et.__experimentalGetSettings,at=wp.blockEditor,ot=at.InspectorControls,ct=at.BlockAlignmentToolbar,lt=at.BlockControls,it=at.__experimentalImageSizeControl,st=wp.data.withSelect;function ut(e,t){return e?e[t]&&e[t].length>0?e[t].map((function(e){return e.id})):[]:null}var pt=function(e){v()(r,e);var t,n=(t=r,function(){var e,n=j()(t);if(Ve()){var r=j()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return w()(this,e)});function r(){return d()(this,r),n.apply(this,arguments)}return h()(r,[{key:"toggleSelectedTerms",value:function(e,t){var n=this.props,r=n.attributes,a=n.setAttributes,o=r.selectedTermLists,c=Object(E.isUndefined)(o)?{}:o,l=Object(E.isUndefined)(c[e])?c[e]=[]:c[e],i=Object(E.includes)(ut(c,e),t.id)?Object(E.remove)(l,(function(e){return e.id!==t.id})):[].concat(_e()(l),[t]);c[e]=i,a({selectedTermLists:c})}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,r=t.setAttributes,a=t.className,o=t.imageSizeOptions,c=t.postsList,l=t.taxonomies,i=t.termLists,s=t.defaultImageWidth,u=t.defaultImageHeight,p=n.displayFeaturedImage,b=n.displayPostContentRadio,d=n.displayPostContent,f=n.displayPostDate,h=n.displayPostCategory,g=n.displayPostTag,v=n.displayPostTaxonomy,y=n.postLayout,w=n.columns,O=n.order,j=n.orderBy,k=n.selectedTermLists,x=n.postsToShow,_=n.excerptLength,C=n.featuredImageAlign,S=n.featuredImageSizeSlug,N=n.featuredImageSizeWidth,B=n.featuredImageSizeHeight,H=Object(m.createElement)(ot,null,Object(m.createElement)(Je,{title:Ze("Post content settings")},Object(m.createElement)(Xe,{label:Ze("Post content"),checked:d,onChange:function(e){return r({displayPostContent:e})}}),d&&Object(m.createElement)(Ke,{label:Ze("Show:"),selected:b,options:[{label:Ze("Excerpt"),value:"excerpt"},{label:Ze("Full post"),value:"full_post"}],onChange:function(e){return r({displayPostContentRadio:e})}}),d&&"excerpt"===b&&Object(m.createElement)(Qe,{label:Ze("Max number of words in excerpt"),value:_,onChange:function(e){return r({excerptLength:e})},min:10,max:100})),Object(m.createElement)(Je,{title:Ze("Post meta settings")},Object(m.createElement)(Xe,{label:Ze("Display post date"),checked:f,onChange:function(e){return r({displayPostDate:e})}}),Object(m.createElement)(Xe,{label:Ze("Display post category"),checked:h,onChange:function(e){return r({displayPostCategory:e})}}),Object(m.createElement)(Xe,{label:Ze("Display post tag"),checked:g,onChange:function(e){return r({displayPostTag:e})}}),Object(m.createElement)(Xe,{label:Ze("Display post taxonomy"),checked:v,onChange:function(e){return r({displayPostTaxonomy:e})}})),Object(m.createElement)(Je,{title:Ze("Featured image settings")},Object(m.createElement)(Xe,{label:Ze("Display featured image"),checked:p,onChange:function(e){return r({displayFeaturedImage:e})}}),p&&Object(m.createElement)(m.Fragment,null,Object(m.createElement)(it,{onChange:function(e){var t={};e.hasOwnProperty("width")&&(t.featuredImageSizeWidth=e.width),e.hasOwnProperty("height")&&(t.featuredImageSizeHeight=e.height),r(t)},slug:S,width:N,height:B,imageWidth:s,imageHeight:u,imageSizeOptions:o,onChangeImage:function(e){return r({featuredImageSizeSlug:e,featuredImageSizeWidth:void 0,featuredImageSizeHeight:void 0})}}),Object(m.createElement)(We,null,Object(m.createElement)(We.VisualLabel,null,Ze("Image alignment")),Object(m.createElement)(ct,{value:C,onChange:function(e){return r({featuredImageAlign:e})},controls:["left","center","right"],isCollapsed:!1})))),Object(m.createElement)(Je,{className:"".concat(a," taxonomy-filter"),title:Ze("Filtering"),initialOpen:!1},l.map((function(t){return Object(m.createElement)(Je,{className:"taxonomy-filter--body",key:t.slug,title:t.name,initialOpen:!1},Object(m.createElement)("ul",{className:"edit__checklist"},i[t.slug]&&i[t.slug].map((function(n){return Object(m.createElement)("li",{key:n.id,className:"components-checkbox-control__label"},Object(m.createElement)(Ge,{label:n.name,checked:Object(E.includes)(ut(k,t.rest_base),n.id),onChange:function(){e.toggleSelectedTerms(t.rest_base,n)}}))}))))}))),Object(m.createElement)(Je,{title:Ze("Order and number"),initialOpen:!1},Object(m.createElement)(qe,ke()({order:O,orderBy:j},{numberOfItems:x,onOrderChange:function(e){return r({order:e})},onOrderByChange:function(e){return r({orderBy:e})},onNumberOfItemsChange:function(e){return r({postsToShow:e})}})),"grid"===y&&Object(m.createElement)(Qe,{label:Ze("Columns"),value:w,onChange:function(e){return r({columns:e})},min:2,max:I?Math.min(6,c.length):6,required:!0}))),I=Array.isArray(c)&&c.length;if(!I)return Object(m.createElement)(m.Fragment,null,H,Object(m.createElement)(Ue,{icon:Ie,label:Ze("Posts")},Array.isArray(c)?Ze("No posts found."):Object(m.createElement)($e,null)));var z=c.length>x?c.slice(0,x):c,P=[{icon:ze,title:Ze("List view"),onClick:function(){return r({postLayout:"list"})},isActive:"list"===y},{icon:He,title:Ze("Grid view"),onClick:function(){return r({postLayout:"grid"})},isActive:"grid"===y}],A=rt().formats.date;return Object(m.createElement)(m.Fragment,null,H,Object(m.createElement)(lt,null,Object(m.createElement)(Ye,{controls:P})),Object(m.createElement)("div",{className:Se()(a,je()({"is-grid":"grid"===y,"has-feature-image":p,"has-full-content":d&&"full_post"===b,"has-excerpt":d&&"excerpt"===b},"columns-".concat(w),"grid"===y))},z.map((function(e,t){var n,r=Object(E.invoke)(e,["title","rendered","trim"]),a=e.content.rendered,o=document.createElement("div");o.innerHTML=a,a=o.textContent||o.innerText||"";var c=e.featuredImageSourceUrl,s=Se()((n={"wp-block-hrswp-posts-list--featured-image":!0},je()(n,"size-".concat(S),!!S),je()(n,"align".concat(C),!!C),n)),u=f||h||g||v,y=h||g||v,w=_<a.trim().split(" ").length&&""===e.excerpt.raw?Object(m.createElement)(m.Fragment,null,a.trim().split(" ",_).join(" "),Ze(" … ")):a;return Object(m.createElement)("div",{className:"wp-block-hrswp-posts-list--list-item",key:t},p&&c&&Object(m.createElement)("figure",{className:s},c&&Object(m.createElement)("img",{src:c,alt:"",style:{maxWidth:N,maxHeight:B}})),Object(m.createElement)("div",{className:"wp-block-hrswp-posts-list--body"},Object(m.createElement)("h3",{className:"wp-block-hrswp-posts-list--heading"},Object(m.createElement)("a",{href:e.link,target:"_blank",rel:"noreferrer noopener"},r?Object(m.createElement)(De,null,r):Ze("(no title)"))),d&&"excerpt"===b&&Object(m.createElement)("p",{className:"wp-block-hrswp-posts-list--post-excerpt"},w),d&&"full_post"===b&&Object(m.createElement)("div",{className:"wp-block-hrswp-posts-list--post-full-content"},Object(m.createElement)(De,{key:"html"},e.content.raw.trim())),u&&Object(m.createElement)("div",{className:"wp-block-hrswp-posts-list--meta"},f&&e.date_gmt&&Object(m.createElement)("p",{className:"wp-block-hrswp-posts-list--post-date"},Ze("Published on"),Object(m.createElement)("time",{dateTime:nt("c",e.date_gmt)},tt(A,e.date_gmt))),y&&l.map((function(t){var n;if("category"===t.slug){if(!h)return null;n=Ze("More on: ")}else if("post_tag"===t.slug){if(!g)return null;n=Ze("In: ")}else{if(!v)return null;n="".concat(t.labels.singular_name,": ")}return Object(m.createElement)(Ae,{key:t.slug,post:e,terms:i,taxonomySlug:t.slug,prefix:n})})))))}))))}}]),r}(Re),mt=st((function(e,t){var n=t.attributes,r=n.featuredImageSizeSlug,a=n.postsToShow,o=n.order,c=n.orderBy,l=n.selectedTermLists,i=e("core"),s=i.getEntityRecords,u=i.getMedia,p=i.getTaxonomies,m=(0,e("core/block-editor").getSettings)(),b=m.imageSizes,d=m.imageDimensions,f=Object(E.pickBy)({order:o,orderby:c,per_page:a},(function(e){return!Object(E.isUndefined)(e)}));Object(E.isUndefined)(l)||Object.entries(l).forEach((function(e){var t=we()(e,2),n=t[0],r=t[1];f[n]=r.map((function(e){return e.id}))}));var h=s("postType","post",f),g=p(Te),v=Object(E.filter)(g,(function(e){return Object(E.includes)(e.types,"post")})),y={};v.forEach((function(e){var t=e.slug;Object.defineProperty(y,t,{value:s("taxonomy",t,Te)})}));var w=b.filter((function(e){return"full"!==e.slug})).map((function(e){var t=e.name;return{value:e.slug,label:t}}));return{defaultImageWidth:Object(E.get)(d,[r,"width"],0),defaultImageHeight:Object(E.get)(d,[r,"height"],0),imageSizeOptions:w,taxonomies:v,termLists:y,postsList:Array.isArray(h)?h.map((function(e){if(e.featured_media){var t=u(e.featured_media),n=Object(E.get)(t,["media_details","sizes",r,"source_url"],null);return n||(n=Object(E.get)(t,"source_url",null)),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(n),!0).forEach((function(t){je()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{featuredImageSourceUrl:n})}return e})):h}}))(pt),bt=n(16),dt=wp.i18n.__,ft=bt.name,ht=bt.category,gt=bt.supports,vt={title:dt("Posts List"),icon:Be,category:ht,description:dt("Display a list of posts."),keywords:[dt("posts"),dt("latest posts")],supports:gt,example:{},edit:mt},yt=wp.i18n.__,wt=wp.components,Ot=wt.PanelBody,jt=wt.ToggleControl,Et=wp.blockEditor,kt=Et.InspectorControls,xt=Et.InnerBlocks,_t=["hrswp/search-filter-input","hrswp/search-filter-section"],Ct=[["hrswp/search-filter-input"],["hrswp/search-filter-section"]];var St=function(e){var t=e.className,n=e.attributes,r=e.setAttributes,a=n.retainHeadings;return Object(m.createElement)(m.Fragment,null,Object(m.createElement)(kt,null,Object(m.createElement)(Ot,{title:yt("Search Filter Settings")},Object(m.createElement)(jt,{label:yt("Retain Headings"),checked:!!a,onChange:function(){return r({retainHeadings:!a})},help:yt(a?"Headings not matching search term will not be hidden.":"Toggle to always show headings.")}))),Object(m.createElement)("div",{className:Se()(t,{"has-retain-headings":a})},Object(m.createElement)(xt,{templateLock:"all",template:Ct,allowedBlocks:_t})))},Nt=n(11),Bt=wp.blockEditor.InnerBlocks;var Ht=wp.i18n.__,It=Nt.name,zt=Nt.category,Pt=Nt.supports,At=Nt.attributes,Tt={title:Ht("HRS Search Filter"),icon:"filter",category:zt,description:Ht("Search and filter a section of content by full text."),keywords:[Ht("filter search")],supports:Pt,attributes:At,example:{innerBlocks:[{name:"hrswp/search-filter-input",attributes:{label:Ht("Search"),buttonText:Ht("Reset")}},{name:"hrswp/search-filter-section",innerBlocks:[{name:"core/list",attributes:{values:Ht("<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li>")}}]}]},edit:St,save:function(e){var t=e.attributes,n=e.className,r=t.retainHeadings;return Object(m.createElement)("div",{className:Se()(n,{"has-retain-headings":r})},Object(m.createElement)(Bt.Content,null))}},Mt=wp.blockEditor.InnerBlocks;var Vt=(0,wp.data.withSelect)((function(e,t){var n=t.clientId;return{hasChildBlocks:(0,e("core/block-editor").getBlockOrder)(n).length>0}}))((function(e){var t=e.className,n=e.hasChildBlocks;return Object(m.createElement)("div",{className:t,"aria-live":"off"},Object(m.createElement)(Mt,{templateLock:!1,renderAppender:n?void 0:function(){return Object(m.createElement)(Mt.ButtonBlockAppender,null)}}))})),Lt=n(17),Rt=wp.blockEditor.InnerBlocks;var Dt=wp.i18n.__,Ft=Lt.name,Wt=Lt.category,Gt=Lt.supports,Jt={title:Dt("HRS Search Filter Section"),parent:["hrswp/search-filter"],icon:"filter",category:Wt,description:Dt("A single section of content to search within."),supports:Gt,edit:Vt,save:function(e){var t=e.className;return Object(m.createElement)("div",{className:t,"aria-live":"off"},Object(m.createElement)(Rt.Content,null))}},Ut=wp.i18n.__,qt=wp.blockEditor.RichText,Kt=wp.components.Disabled;var Qt=(0,wp.compose.withInstanceId)((function(e){var t=e.attributes,n=e.setAttributes,r=e.className,a=e.instanceId,o=t.label,c=t.buttonText,l=t.elementId;return n({elementId:"search-form-".concat(a)}),Object(m.createElement)("div",{className:r},Object(m.createElement)(qt,{tagName:"label",className:"wp-block-search__label","aria-label":Ut("Label text"),placeholder:Ut("Add label…"),withoutInteractiveFormatting:!0,allowedFormats:[],value:o,onChange:function(e){return n({label:e})},htmlFor:l,id:"".concat(l,"-label")}),Object(m.createElement)(Kt,null,Object(m.createElement)("input",{"aria-labelledby":"".concat(l,"-label"),className:"wp-block-search__input",type:"search",name:"search_form_input",id:l})),Object(m.createElement)("div",{className:"wp-block-button is-style-small"},Object(m.createElement)(qt,{tagName:"button",className:"wp-block-button__link ".concat(l,"-reset"),"aria-label":Ut("Reset search results."),placeholder:Ut("Add button text…"),withoutInteractiveFormatting:!0,allowedFormats:[],value:c,onChange:function(e){return n({buttonText:e})}})))})),$t=n(12),Xt=wp.blockEditor.RichText;var Yt=wp.i18n.__,Zt=$t.name,en=$t.category,tn=$t.supports,nn=$t.attributes,rn={title:Yt("HRS Search Filter Input"),parent:["hrswp/search-filter"],icon:"filter",category:en,description:Yt("A search form for the search filter block."),supports:tn,attributes:nn,edit:Qt,save:function(e){var t=e.attributes,n=e.className,r=t.label,a=t.buttonText,o=t.elementId;return Object(m.createElement)("div",{className:n},Object(m.createElement)(Xt.Content,{tagName:"label",className:"wp-block-search__label",value:r,htmlFor:o,id:"".concat(o,"-label")}),Object(m.createElement)("input",{"aria-labelledby":"".concat(o,"-label"),className:"wp-block-search__input",type:"search",name:"search_form_input",id:o}),Object(m.createElement)("div",{className:"wp-block-button is-style-small"},Object(m.createElement)(Xt.Content,{tagName:"button",className:"wp-block-button__link ".concat(o,"-reset"),value:a})))}},an=wp.i18n.__,on=wp.blockEditor.InnerBlocks,cn=[["core/paragraph",{fontSize:"large",placeholder:an("Callout title…")}],["core/paragraph",{placeholder:an("Enter the callout message or replace…")}]];var ln=n(18),sn=wp.blockEditor.InnerBlocks;var un=wp.components,pn=un.Path,mn=un.SVG,bn=Object(m.createElement)(mn,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(m.createElement)(pn,{d:"M0,0h24v24H0V0z",fill:"none"}),Object(m.createElement)(pn,{d:"M21,3H3C1.9,3,1,3.9,1,5v14c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M21,19H3V5h18V19z M5,6h14v3H5V6z M5,11h14v6.25H5V11z"})),dn=wp.i18n,fn=dn.__,hn=dn._x,gn=ln.name,vn=ln.category,yn=ln.supports,wn={title:fn("Callout"),icon:bn,category:vn,description:fn("Display content in a callout module."),keywords:[fn("callout"),fn("message")],supports:yn,example:{innerBlocks:[{name:"core/paragraph",attributes:{fontSize:"large",content:fn("Riverside Wren (Cantorchilus semibadius)")}},{name:"core/paragraph",attributes:{content:fn("The wren<br>Earns his living<br>Noiselessly.")}},{name:"core/paragraph",attributes:{content:fn("— Kobayashi Issa (一茶)")}}]},styles:[{name:"default",label:hn("Default","block style"),isDefault:!0},{name:"positive",label:hn("Positive","block style")},{name:"caution",label:hn("Caution","block style")},{name:"warning",label:hn("Warning","block style")}],edit:function(e){var t=e.className;return Object(m.createElement)(m.Fragment,null,Object(m.createElement)("div",{className:t},Object(m.createElement)(on,{template:cn})))},save:function(e){var t=e.className;return Object(m.createElement)("div",{className:t},Object(m.createElement)(sn.Content,null))}},On=wp.i18n.__,jn=wp.blocks.createBlock,En=wp.data.withDispatch,kn=wp.components,xn=kn.PanelBody,_n=kn.ToggleControl,Cn=wp.blockEditor,Sn=Cn.InspectorControls,Nn=Cn.InnerBlocks,Bn=["core/paragraph","core/button"],Hn=[["core/paragraph",{placeholder:On("Write message…")}],["core/button"]];var In=En((function(e,t,n){return{updateBlocks:function(r){var a=t.clientId,o=t.setAttributes,c=e("core/block-editor").replaceInnerBlocks,l=(0,n.select("core/block-editor").getBlocks)(a);o({showActionButton:r}),c(a,l=!0===r?[].concat(_e()(l),_e()(Object(E.times)(1,(function(){return jn("core/button")})))):Object(E.dropRight)(l,1),!1)}}}))((function(e){var t=e.className,n=e.attributes,r=e.updateBlocks,a=n.showActionButton,o=Se()(t,{"has-action-button":a});return Object(m.createElement)(m.Fragment,null,Object(m.createElement)(Sn,null,Object(m.createElement)(xn,{title:On("Action Button Settings")},Object(m.createElement)(_n,{label:On("Show Action Button"),checked:!!a,onChange:function(e){return r(e)},help:On(a?"Use the action button to call users to action.":"Toggle to include an action button.")}))),Object(m.createElement)("div",{className:o},Object(m.createElement)(Nn,{templateLock:"insert",allowedBlocks:Bn,template:Hn})))})),zn=n(13),Pn=wp.blockEditor.InnerBlocks;var An=wp.components,Tn=An.Path,Mn=An.SVG,Vn=An.Circle,Ln=Object(m.createElement)(Mn,{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(m.createElement)(Tn,{d:"M0,0h48v48H0V0z",fill:"none"}),Object(m.createElement)(Tn,{d:"M42,12H6c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V16C46,13.8,44.2,12,42,12z M42,32H6V16h36V32z M28,22v4 h12v-4H28z"}),Object(m.createElement)(Vn,{cx:"11",cy:"24",r:"1.5"}),Object(m.createElement)(Vn,{cx:"15",cy:"24",r:"1.5"}),Object(m.createElement)(Vn,{cx:"19",cy:"24",r:"1.5"})),Rn=wp.i18n,Dn=Rn.__,Fn=Rn._x,Wn=zn.name,Gn=zn.category,Jn=zn.supports,Un=zn.attributes,qn={title:Dn("Notification"),icon:Ln,category:Gn,description:Dn("Show a brief notification message with optional action button."),keywords:[Dn("callout"),Dn("message"),Dn("link")],supports:Jn,example:{innerBlocks:[{name:"core/paragraph",attributes:{content:Dn("At length, however, Mrs. Bennet had no more to say; and Lady Lucas … was left to the comforts of cold ham and chicken.")}},{name:"core/button",attributes:{text:Dn("Jane Austen")}}]},styles:[{name:"default",label:Fn("Default","block style"),isDefault:!0},{name:"positive",label:Fn("Positive","block style")},{name:"caution",label:Fn("Caution","block style")},{name:"warning",label:Fn("Warning","block style")}],attributes:Un,edit:In,save:function(e){var t=e.attributes,n=e.className,r=t.showActionButton;return Object(m.createElement)("div",{className:Se()(n,{"has-action-button":r})},Object(m.createElement)(Pn.Content,null))}},Kn=wp.i18n.__,Qn=wp.blockEditor.InnerBlocks,$n=[["core/column",{placeholder:Kn("Enter the main content…")}],["core/column",{placeholder:Kn("Enter the sidebar content…")}]],Xn=["core/column"];var Yn=function(e){var t=e.className,n=Se()(t,{"wp-block-columns":!0});return Object(m.createElement)(m.Fragment,null,Object(m.createElement)("div",{className:n},Object(m.createElement)(Qn,{template:$n,templateLock:"all",allowedBlocks:Xn})))},Zn=n(19),er=wp.blockEditor.InnerBlocks;var tr=wp.components,nr=tr.Path,rr=tr.SVG,ar=Object(m.createElement)(rr,{viewBox:"468 268 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(m.createElement)(nr,{d:"M468 268h24v24h-24v-24z",fill:"none"}),Object(m.createElement)(nr,{d:"M472 272h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-12c0-1.1.9-2 2-2zm0 2v12h10v-12h-10zm12 0v12h4v-12h-4z"})),or=wp.blocks.createBlock,cr={from:[{type:"block",blocks:["hrs-wsu-edu/sidebar"],transform:function(e,t){return or("hrswp/sidebar",e,t)}}]},lr=wp.i18n,ir=lr.__,sr=lr._x,ur=Zn.name,pr=Zn.category,mr=Zn.supports,br={title:ir("Sidebar"),icon:ar,category:pr,description:ir("Display content in a sidebar-style layout (two-thirds and one-third)."),keywords:[ir("sidebar"),ir("columns")],supports:mr,example:{innerBlocks:[{name:"core/column",innerBlocks:[{name:"core/paragraph",attributes:{content:ir("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.")}},{name:"core/image",attributes:{url:"https://s.w.org/images/core/5.3/Windbuchencom.jpg"}},{name:"core/paragraph",attributes:{content:ir("Suspendisse commodo neque lacus, a dictum orci interdum et.")}}]},{name:"core/column",innerBlocks:[{name:"core/paragraph",attributes:{content:ir("Alice in Wonderland Characters")}},{name:"core/list",attributes:{values:ir("<li>Alice.</li><li>The White Rabbit.</li><li>The Cheshire Cat.</li>")}}]}]},styles:[{name:"sidebar-right",label:sr("Sidebar on right","block style"),isDefault:!0},{name:"sidebar-left",label:sr("Sidebar on left","block style")}],transforms:cr,edit:Yn,save:function(e){var t=e.className,n=Se()(t,{"wp-block-columns":!0});return Object(m.createElement)("div",{className:n},Object(m.createElement)(er.Content,null))}},dr=wp.blocks.registerBlockType;[r,a,o,c,l,i,s,u,p].forEach((function(e){if(e){var t=e.settings,n=e.name;dr(n,t)}}))}]);