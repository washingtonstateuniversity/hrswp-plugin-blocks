!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){!function(){e.exports=this.lodash}()},function(e){e.exports=JSON.parse('{"name":"hrswp/accordion","category":"layout","supports":{"align":true},"attributes":{"level":{"type":"number","default":2}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/accordion-panel","category":"layout","supports":{"reusable":false},"attributes":{"panelHeadingContent":{"type":"string","source":"html","selector":"h1,h2,h3,h4,h5,h6","default":""},"elementId":{"type":"int","default":0},"level":{"type":"number","default":2}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/search-filter","category":"widgets","supports":{"align":true,"html":false},"attributes":{"retainHeadings":{"type":"boolean","default":false}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/search-filter-input","category":"common","supports":{"inserter":false,"reusable":false,"html":false},"attributes":{"label":{"type":"string","default":"Search"},"placeholder":{"type":"string","default":""},"buttonText":{"type":"string","default":"Reset"},"elementId":{"type":"int","default":0}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/notification","category":"layout","supports":{"align":true},"attributes":{"showActionButton":{"type":"boolean","default":true}}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/search-filter-section","category":"common","supports":{"inserter":false,"reusable":false,"html":false}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/callout","category":"layout","supports":{"align":true}}')},function(e){e.exports=JSON.parse('{"name":"hrswp/sidebar","category":"layout","supports":{"align":true}}')},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(22),a=n(23),o=n(24),c=n(25);e.exports=function(e){return r(e)||a(e)||o(e)||c()}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(19),a=n(20);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},function(e,t,n){var r=n(21);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},,function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){var r=n(15);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var r=n(15);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"name",(function(){return q})),n.d(r,"settings",(function(){return Y}));var a={};n.r(a),n.d(a,"name",(function(){return se})),n.d(a,"settings",(function(){return me}));var o={};n.r(o),n.d(o,"name",(function(){return Ce})),n.d(o,"settings",(function(){return Ae}));var c={};n.r(c),n.d(c,"name",(function(){return Fe})),n.d(c,"settings",(function(){return De}));var l={};n.r(l),n.d(l,"name",(function(){return Qe})),n.d(l,"settings",(function(){return et}));var i={};n.r(i),n.d(i,"name",(function(){return mt})),n.d(i,"settings",(function(){return ht}));var s={};n.r(s),n.d(s,"name",(function(){return Rt})),n.d(s,"settings",(function(){return Wt}));var u={};n.r(u),n.d(u,"name",(function(){return sn})),n.d(u,"settings",(function(){return bn}));var p=n(0),b=n(2),m=n.n(b),d=n(3),f=n.n(d),h=n(16),v=n.n(h),w=n(13),y=n.n(w),g=n(17),O=n.n(g),k=n(4);function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var j=wp.i18n,_=j.__,x=j.sprintf,N=wp.element.Component,B=wp.components,C=B.ToolbarGroup,S=B.Path,H=B.SVG;function I(e){var t=e.level,n=e.isPressed,r=void 0!==n&&n,a={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return a.hasOwnProperty(t)?Object(p.createElement)(H,{width:"24",height:"24",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",isPressed:r},Object(p.createElement)(S,{d:a[t]})):null}var A=function(e){O()(r,e);var t,n=(t=r,function(){var e,n=y()(t);if(E()){var r=y()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return v()(this,e)});function r(){return m()(this,r),n.apply(this,arguments)}return f()(r,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(p.createElement)(I,{level:e,isPressed:r}),title:x(_("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,a=t.minLevel,o=t.maxLevel,c=t.selectedLevel,l=t.onChange;return Object(p.createElement)(C,{isCollapsed:r,icon:Object(p.createElement)(I,{level:c}),controls:Object(k.range)(a,o).map((function(t){return e.createLevelControl(t,c,l)})),label:_("Change heading level")})}}]),r}(N),V=wp.i18n.__,z=wp.blockEditor,P=z.InnerBlocks,M=z.InspectorControls,T=wp.components,F=T.Disabled,L=T.PanelBody,R=wp.data.withDispatch,D=["hrswp/accordion-panel"],J=[["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"],["hrswp/accordion-panel"]];var G=R((function(e,t,n){return{updateHeadingLevel:function(r){var a=t.clientId,o=t.setAttributes,c=e("core/block-editor").updateBlockAttributes,l=n.select("core/block-editor").getBlockOrder;o({level:r}),l(a).forEach((function(e){c(e,{level:r})}))}}}))((function(e){var t=e.attributes,n=e.className,r=e.updateHeadingLevel,a=t.level;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(M,null,Object(p.createElement)(L,{title:V("Heading level")},Object(p.createElement)(A,{isCollapsed:!1,minLevel:1,maxLevel:7,selectedLevel:a,onChange:function(e){return r(e)}}))),Object(p.createElement)("div",{className:n,"data-accordion-block":!0},Object(p.createElement)(F,null,Object(p.createElement)("div",{className:"wp-block-buttons controls"},Object(p.createElement)("div",{className:"wp-block-button is-style-outline"},Object(p.createElement)("button",{id:"open-all-panels",className:"wp-block-button__link"},"Open all")),Object(p.createElement)("div",{className:"wp-block-button is-style-outline"},Object(p.createElement)("button",{id:"close-all-panels",className:"wp-block-button__link"},"Close All")))),Object(p.createElement)(P,{allowedBlocks:D,templateLock:!1,template:J})))})),W=n(5),U=wp.blockEditor.InnerBlocks;var $=wp.i18n.__,q=W.name,K=W.category,Q=W.supports,X=W.attributes,Y={title:$("Accordion"),icon:"index-card",category:K,description:$("Display content in an accordion."),keywords:[$("layout"),$("accordion")],supports:Q,attributes:X,edit:G,save:function(e){var t=e.className;return Object(p.createElement)("div",{className:t,"data-accordion-block":!0},Object(p.createElement)("div",{className:"wp-block-buttons controls"},Object(p.createElement)("div",{className:"wp-block-button is-style-outline"},Object(p.createElement)("button",{id:"open-all-panels",className:"wp-block-button__link"},"Open all")),Object(p.createElement)("div",{className:"wp-block-button is-style-outline"},Object(p.createElement)("button",{id:"close-all-panels",className:"wp-block-button__link"},"Close All"))),Object(p.createElement)(U.Content,null))}},Z=wp.i18n.__,ee=wp.blockEditor,te=ee.InnerBlocks,ne=ee.RichText;var re=(0,wp.compose.withInstanceId)((function(e){var t=e.attributes,n=e.setAttributes,r=e.instanceId,a=t.panelHeadingContent,o=t.elementId,c="h"+t.level;return n({elementId:"accordion-panel-id-".concat(r)}),Object(p.createElement)(p.Fragment,null,Object(p.createElement)(ne,{tagName:c,className:"accordion-panel-heading",value:a,allowedFormats:["italic"],onChange:function(e){return n({panelHeadingContent:e})},placeholder:Z("Brief panel heading…")}),Object(p.createElement)("div",{className:"accordion-panel",id:o},Object(p.createElement)(te,{templateLock:!1,renderAppender:function(){return Object(p.createElement)(te.ButtonBlockAppender,null)}})))})),ae=n(6),oe=wp.blockEditor,ce=oe.InnerBlocks,le=oe.RichText;var ie=wp.i18n.__,se=ae.name,ue=ae.category,pe=ae.supports,be=ae.attributes,me={title:ie("Accordion Panel"),parent:["hrswp/accordion"],icon:"index-card",category:ue,description:ie("A single panel of accordion content."),keywords:[ie("layout"),ie("accordion")],supports:pe,attributes:be,edit:re,save:function(e){var t=e.attributes,n=t.panelHeadingContent,r=t.elementId,a="h"+t.level;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(le.Content,{tagName:a,className:"accordion-panel-heading",value:n}),Object(p.createElement)("div",{className:"accordion-panel",id:r},Object(p.createElement)(ce.Content,null)))}},de=n(1),fe=n.n(de),he=wp.i18n.__,ve=wp.components,we=ve.PanelBody,ye=ve.ToggleControl,ge=wp.blockEditor,Oe=ge.InspectorControls,ke=ge.InnerBlocks,Ee=["hrswp/search-filter-input","hrswp/search-filter-section"],je=[["hrswp/search-filter-input"],["hrswp/search-filter-section"]];var _e=function(e){var t=e.className,n=e.attributes,r=e.setAttributes,a=n.retainHeadings;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(Oe,null,Object(p.createElement)(we,{title:he("Search Filter Settings")},Object(p.createElement)(ye,{label:he("Retain Headings"),checked:!!a,onChange:function(){return r({retainHeadings:!a})},help:he(a?"Headings not matching search term will not be hidden.":"Toggle to always show headings.")}))),Object(p.createElement)("div",{className:fe()(t,{"has-retain-headings":a})},Object(p.createElement)(ke,{templateLock:"all",template:je,allowedBlocks:Ee})))},xe=n(7),Ne=wp.blockEditor.InnerBlocks;var Be=wp.i18n.__,Ce=xe.name,Se=xe.category,He=xe.supports,Ie=xe.attributes,Ae={title:Be("HRS Search Filter"),icon:"filter",category:Se,description:Be("Search and filter a section of content by full text."),keywords:[Be("filter search")],supports:He,attributes:Ie,edit:_e,save:function(e){var t=e.attributes,n=e.className,r=t.retainHeadings;return Object(p.createElement)("div",{className:fe()(n,{"has-retain-headings":r})},Object(p.createElement)(Ne.Content,null))}},Ve=wp.blockEditor.InnerBlocks;var ze=(0,wp.data.withSelect)((function(e,t){var n=t.clientId;return{hasChildBlocks:(0,e("core/block-editor").getBlockOrder)(n).length>0}}))((function(e){var t=e.className,n=e.hasChildBlocks;return Object(p.createElement)("div",{className:t,"aria-live":"off"},Object(p.createElement)(Ve,{templateLock:!1,renderAppender:n?void 0:function(){return Object(p.createElement)(Ve.ButtonBlockAppender,null)}}))})),Pe=n(10),Me=wp.blockEditor.InnerBlocks;var Te=wp.i18n.__,Fe=Pe.name,Le=Pe.category,Re=Pe.supports,De={title:Te("HRS Search Filter Section"),parent:["hrswp/search-filter"],icon:"filter",category:Le,description:Te("A single section of content to search within."),supports:Re,edit:ze,save:function(e){var t=e.className;return Object(p.createElement)("div",{className:t,"aria-live":"off"},Object(p.createElement)(Me.Content,null))}},Je=wp.i18n.__,Ge=wp.blockEditor.RichText,We=wp.components.Disabled;var Ue=(0,wp.compose.withInstanceId)((function(e){var t=e.attributes,n=e.setAttributes,r=e.className,a=e.instanceId,o=t.label,c=t.buttonText,l=t.elementId;return n({elementId:"search-form-".concat(a)}),Object(p.createElement)("div",{className:r},Object(p.createElement)(Ge,{tagName:"label",className:"wp-block-search__label","aria-label":Je("Label text"),placeholder:Je("Add label…"),withoutInteractiveFormatting:!0,allowedFormats:[],value:o,onChange:function(e){return n({label:e})},htmlFor:l,id:"".concat(l,"-label")}),Object(p.createElement)(We,null,Object(p.createElement)("input",{"aria-labelledby":"".concat(l,"-label"),className:"wp-block-search__input",type:"search",name:"search_form_input",id:l})),Object(p.createElement)("div",{className:"wp-block-button is-style-small"},Object(p.createElement)(Ge,{tagName:"button",className:"wp-block-button__link ".concat(l,"-reset"),"aria-label":Je("Reset search results."),placeholder:Je("Add button text…"),withoutInteractiveFormatting:!0,allowedFormats:[],value:c,onChange:function(e){return n({buttonText:e})}})))})),$e=n(8),qe=wp.blockEditor.RichText;var Ke=wp.i18n.__,Qe=$e.name,Xe=$e.category,Ye=$e.supports,Ze=$e.attributes,et={title:Ke("HRS Search Filter Input"),parent:["hrswp/search-filter"],icon:"filter",category:Xe,description:Ke("A search form for the search filter block."),supports:Ye,attributes:Ze,edit:Ue,save:function(e){var t=e.attributes,n=e.className,r=t.label,a=t.buttonText,o=t.elementId;return Object(p.createElement)("div",{className:n},Object(p.createElement)(qe.Content,{tagName:"label",className:"wp-block-search__label",value:r,htmlFor:o,id:"".concat(o,"-label")}),Object(p.createElement)("input",{"aria-labelledby":"".concat(o,"-label"),className:"wp-block-search__input",type:"search",name:"search_form_input",id:o}),Object(p.createElement)("div",{className:"wp-block-button is-style-small"},Object(p.createElement)(qe.Content,{tagName:"button",className:"wp-block-button__link ".concat(o,"-reset"),value:a})))}},tt=wp.i18n.__,nt=wp.blockEditor.InnerBlocks,rt=[["core/paragraph",{fontSize:"large",placeholder:tt("Callout title…")}],["core/paragraph",{placeholder:tt("Enter the callout message or replace…")}]];var at=n(11),ot=wp.blockEditor.InnerBlocks;var ct=wp.components,lt=ct.Path,it=ct.SVG,st=Object(p.createElement)(it,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(p.createElement)(lt,{d:"M0,0h24v24H0V0z",fill:"none"}),Object(p.createElement)(lt,{d:"M21,3H3C1.9,3,1,3.9,1,5v14c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M21,19H3V5h18V19z M5,6h14v3H5V6z M5,11h14v6.25H5V11z"})),ut=wp.i18n,pt=ut.__,bt=ut._x,mt=at.name,dt=at.category,ft=at.supports,ht={title:pt("Callout"),icon:st,category:dt,description:pt("Display content in a callout module."),keywords:[pt("callout"),pt("message")],supports:ft,styles:[{name:"default",label:bt("Default","block style"),isDefault:!0},{name:"positive",label:bt("Positive","block style")},{name:"caution",label:bt("Caution","block style")},{name:"warning",label:bt("Warning","block style")}],edit:function(e){var t=e.className;return Object(p.createElement)(p.Fragment,null,Object(p.createElement)("div",{className:t},Object(p.createElement)(nt,{template:rt})))},save:function(e){var t=e.className;return Object(p.createElement)("div",{className:t},Object(p.createElement)(ot.Content,null))}},vt=n(14),wt=n.n(vt),yt=wp.i18n.__,gt=wp.blocks.createBlock,Ot=wp.data.withDispatch,kt=wp.components,Et=kt.PanelBody,jt=kt.ToggleControl,_t=wp.blockEditor,xt=_t.InspectorControls,Nt=_t.InnerBlocks,Bt=["core/paragraph","core/button"],Ct=[["core/paragraph",{placeholder:yt("Write message…")}],["core/button"]];var St=Ot((function(e,t,n){return{updateBlocks:function(r){var a=t.clientId,o=t.setAttributes,c=e("core/block-editor").replaceInnerBlocks,l=(0,n.select("core/block-editor").getBlocks)(a);o({showActionButton:r}),c(a,l=!0===r?[].concat(wt()(l),wt()(Object(k.times)(1,(function(){return gt("core/button")})))):Object(k.dropRight)(l,1),!1)}}}))((function(e){var t=e.className,n=e.attributes,r=e.updateBlocks,a=n.showActionButton,o=fe()(t,{"has-action-button":a});return Object(p.createElement)(p.Fragment,null,Object(p.createElement)(xt,null,Object(p.createElement)(Et,{title:yt("Action Button Settings")},Object(p.createElement)(jt,{label:yt("Show Action Button"),checked:!!a,onChange:function(e){return r(e)},help:yt(a?"Use the action button to call users to action.":"Toggle to include an action button.")}))),Object(p.createElement)("div",{className:o},Object(p.createElement)(Nt,{templateLock:"all",allowedBlocks:Bt,template:Ct})))})),Ht=n(9),It=wp.blockEditor.InnerBlocks;var At=wp.components,Vt=At.Path,zt=At.SVG,Pt=At.Circle,Mt=Object(p.createElement)(zt,{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(p.createElement)(Vt,{d:"M0,0h48v48H0V0z",fill:"none"}),Object(p.createElement)(Vt,{d:"M42,12H6c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V16C46,13.8,44.2,12,42,12z M42,32H6V16h36V32z M28,22v4 h12v-4H28z"}),Object(p.createElement)(Pt,{cx:"11",cy:"24",r:"1.5"}),Object(p.createElement)(Pt,{cx:"15",cy:"24",r:"1.5"}),Object(p.createElement)(Pt,{cx:"19",cy:"24",r:"1.5"})),Tt=wp.i18n,Ft=Tt.__,Lt=Tt._x,Rt=Ht.name,Dt=Ht.category,Jt=Ht.supports,Gt=Ht.attributes,Wt={title:Ft("Notification"),icon:Mt,category:Dt,description:Ft("Show a brief notification message with optional action button."),keywords:[Ft("callout"),Ft("message"),Ft("link")],supports:Jt,styles:[{name:"default",label:Lt("Default","block style"),isDefault:!0},{name:"positive",label:Lt("Positive","block style")},{name:"caution",label:Lt("Caution","block style")},{name:"warning",label:Lt("Warning","block style")}],attributes:Gt,edit:St,save:function(e){var t=e.attributes,n=e.className,r=t.showActionButton;return Object(p.createElement)("div",{className:fe()(n,{"has-action-button":r})},Object(p.createElement)(It.Content,null))}},Ut=wp.i18n.__,$t=wp.blockEditor.InnerBlocks,qt=[["core/column",{placeholder:Ut("Enter the main content…")}],["core/column",{placeholder:Ut("Enter the sidebar content…")}]],Kt=["core/column"];var Qt=function(e){var t=e.className,n=fe()(t,{"wp-block-columns":!0});return Object(p.createElement)(p.Fragment,null,Object(p.createElement)("div",{className:n},Object(p.createElement)($t,{template:qt,templateLock:"all",allowedBlocks:Kt})))},Xt=n(12),Yt=wp.blockEditor.InnerBlocks;var Zt=wp.components,en=Zt.Path,tn=Zt.SVG,nn=Object(p.createElement)(tn,{viewBox:"468 268 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(p.createElement)(en,{d:"M468 268h24v24h-24v-24z",fill:"none"}),Object(p.createElement)(en,{d:"M472 272h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-12c0-1.1.9-2 2-2zm0 2v12h10v-12h-10zm12 0v12h4v-12h-4z"})),rn=wp.blocks.createBlock,an={from:[{type:"block",blocks:["hrs-wsu-edu/sidebar"],transform:function(e,t){return rn("hrswp/sidebar",e,t)}}]},on=wp.i18n,cn=on.__,ln=on._x,sn=Xt.name,un=Xt.category,pn=Xt.supports,bn={title:cn("Sidebar"),icon:nn,category:un,description:cn("Display content in a sidebar-style layout (two-thirds and one-third)."),keywords:[cn("sidebar"),cn("columns")],supports:pn,styles:[{name:"sidebar-right",label:ln("Sidebar on right","block style"),isDefault:!0},{name:"sidebar-left",label:ln("Sidebar on left","block style")}],transforms:an,edit:Qt,save:function(e){var t=e.className,n=fe()(t,{"wp-block-columns":!0});return Object(p.createElement)("div",{className:n},Object(p.createElement)(Yt.Content,null))}},mn=wp.blocks.registerBlockType;[r,a,o,c,l,i,s,u].forEach((function(e){if(e){var t=e.settings,n=e.name;mn(n,t)}}))}]);