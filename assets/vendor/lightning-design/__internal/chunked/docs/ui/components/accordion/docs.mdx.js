var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/accordion/docs.mdx.js"]=function(e){function r(r){for(var t,o,i=r[0],d=r[1],s=r[2],m=0,u=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&u.push(c[o][0]),c[o]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);for(l&&l(r);u.length;)u.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],t=!0,i=1;i<n.length;i++){var d=n[i];0!==c[d]&&(t=!1)}t&&(a.splice(r--,1),e=o(o.s=n[0]))}return e}var t={},c={1:0},a=[];function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(n,t,function(r){return e[r]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],d=i.push.bind(i);i.push=r,i=i.slice();for(var s=0;s<i.length;s++)r(i[s]);var l=d;return a.push([254,0]),n()}({0:function(e,r){e.exports=React},18:function(e,r){e.exports=JSBeautify},19:function(e,r){e.exports=ReactDOM},254:function(e,r,n){"use strict";n.r(r),n.d(r,"getElement",(function(){return B})),n.d(r,"getContents",(function(){return T}));var t=n(0),c=n.n(t),a=n(4),o=n(1),i=(n(15),n(2)),d=n(38),s=n(39),l=n.n(s),m=n(3),u=n.n(m),f=n(5),y=n.n(f),p=n(13),h=n(10),b=n(69);function A(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,c=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(e){c=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(c)throw a}}return n}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return I(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var g=function(e){return c.a.createElement("ul",{className:"slds-accordion"},e.children)};g.propTypes={children:u.a.node};var E=function(e){var r=e.isOpen,n=A(Object(t.useState)(r),2),a=n[0],o=n[1],i=!a;return c.a.createElement("li",{className:"slds-accordion__list-item"},c.a.createElement("section",{className:y()("slds-accordion__section",a&&"slds-is-open")},c.a.createElement("div",{className:"slds-accordion__summary"},c.a.createElement(b.a,{level:"2",className:"slds-accordion__summary-heading"},c.a.createElement(p.a,{"aria-controls":e.referenceId,"aria-expanded":a,title:e.summary,isReset:!0,className:"slds-accordion__summary-action",onClick:function(e){e.stopPropagation(),o(!a)}},c.a.createElement(h.a,{className:"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"switch"}),c.a.createElement("span",{className:"slds-accordion__summary-content"},e.summary))),e.actionMenu&&c.a.cloneElement(e.actionMenu)),c.a.createElement("div",{hidden:i,className:"slds-accordion__content",id:e.referenceId},e.children)))};E.propTypes={isOpen:u.a.bool,referenceId:u.a.string,summary:u.a.string,actionMenu:u.a.node,children:u.a.node},E.defaultProps={isOpen:!1};var v=g,O=n(88),_=n(14),S=function(){return c.a.createElement(v,null,c.a.createElement(E,{summary:"Accordion summary",isOpen:!0,referenceId:l()("referenceId-")},"Accordion details - A"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - B"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - C"))},w=c.a.createElement(S,null),j=(l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),l()("referenceId-"),[{id:"long-heading-truncated",label:"Long Section Heading with Truncation for larger screens",demoStyles:"max-width: 500px;",element:c.a.createElement(_.d,null,c.a.createElement(v,null,c.a.createElement(E,{summary:"Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary Accordion summary",isOpen:!0,referenceId:l()("referenceId-")},"Accordion details - A"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - B"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - C")))},{id:"nested-accordions",label:"Nested Accordions",element:c.a.createElement(v,null,c.a.createElement(E,{summary:"Accordion summary",isOpen:!0,referenceId:l()("referenceId-")},c.a.createElement(v,null,c.a.createElement(E,{summary:"Nested accordion summary",isOpen:!0,referenceId:l()("referenceId-")},"Accordion details - A"),c.a.createElement(E,{summary:"Nested accordion summary",referenceId:l()("referenceId-")},"Accordion details - B"))),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - B"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - C"))},{id:"styled",label:"Wrapped in Card",element:c.a.createElement("div",{className:"slds-card"},c.a.createElement(v,null,c.a.createElement(E,{summary:"Accordion summary",isOpen:!0,referenceId:l()("referenceId-")},"Accordion details - A"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - B"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - C")))},{id:"has-action-overflow",label:"Has Action Overflow Menu",element:c.a.createElement(v,null,c.a.createElement(E,{summary:"Accordion summary",actionMenu:c.a.createElement(O.a,{position:"right",dropdownIsOpen:!1}),isOpen:!0,referenceId:l()("referenceId-")},"Accordion details - A"),c.a.createElement(E,{summary:"Accordion summary",actionMenu:c.a.createElement(O.a,{position:"right",dropdownIsOpen:!1}),referenceId:l()("referenceId-")},"Accordion details - B"),c.a.createElement(E,{summary:"Accordion summary",actionMenu:c.a.createElement(O.a,{position:"right",dropdownIsOpen:!1}),referenceId:l()("referenceId-")},"Accordion details - C"))},{id:"section-background-color",label:"Accordion Section - Background Color",demoStyles:"--sds-c-accordion-summary-color-background: lightblue",element:c.a.createElement(v,null,c.a.createElement(E,{summary:"Accordion summary",isOpen:!0,referenceId:l()("referenceId-")},"Accordion details - A"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - B"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - C"))},{id:"section-background-color",label:"Accordion Section - Text Color",demoStyles:"--sds-c-accordion-heading-text-color: green; --sds-c-accordion-heading-text-color-hover: red",element:c.a.createElement(v,null,c.a.createElement(E,{summary:"Accordion summary",isOpen:!0,referenceId:l()("referenceId-")},"Accordion details - A"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - B"),c.a.createElement(E,{summary:"Accordion summary",referenceId:l()("referenceId-")},"Accordion details - C"))}]),x=a.c.a,k=a.c.code,C=a.c.h2,M=a.c.h3,N=a.c.p,B=function(){return Object(t.createElement)(a.b,{},Object(t.createElement)("div",{className:"doc lead"},"An accordion allows a user to toggle the display of a section of content."),Object(t.createElement)(o.a,{exampleOnly:!0},Object(i.e)(j,"styled")),C({id:"About-Accordions"},"About Accordions"),N({},"Accordions are composed of a list of longer blocks of text, with a header button to toggle the visibility of each block."),C({id:"Accessibility"},"Accessibility"),N({},"Availability of accordion content to assistive technology requires the use of ",k({},"aria-controls")," and toggling ",k({},"aria-expanded")," as regions are expanded and collapsed."),N({},"There are additional accessibility considerations within the ",x({href:"/components/buttons"},"Buttons")," and ",x({href:"/components/menus"},"Menus"),"."),C({id:"Default"},"Default"),Object(t.createElement)(o.a,null,w),M({id:"Structure-and-Implementation"},"Structure and Implementation"),N({},"An accordion is implemented as an unordered list with a class of ",k({},"slds-accordion"),". Inside the list, each chunk of content is inside both a list item with class of ",k({},"slds-accordion__list-item")," and a section with a class of ",k({},"slds-accordion__section"),"."),N({},"The content itself is contained within a div with the class ",k({},"slds-accordion__content"),", an ID that corresponds to the ",k({},"aria-control")," on the button and the hidden attribute."),N({},"Content visibility is toggled via a ",x({href:"/components/buttons"},"Button")," in the H3 heading. To make accordion content visible, the section is given the class ",k({},"slds-is-open"),", the button is changed from ",k({},'aria-expanded="false"')," to ",k({},'aria-expanded="true"'),", and the hidden attribute is removed from the content div."),C({id:"Examples"},"Examples"),M({id:"With-Action-Overflow-Menu"},"With Action Overflow Menu"),Object(t.createElement)(o.a,null,Object(i.e)(j,"has-action-overflow")),M({id:"In-a-Card"},"In a Card"),Object(t.createElement)(o.a,null,Object(i.e)(j,"styled")),M({id:"Nested"},"Nested"),Object(t.createElement)(o.a,null,Object(i.e)(j,"nested-accordions")),M({id:"Heading-with-Truncation"},"Heading with Truncation"),Object(t.createElement)(o.a,null,Object(i.e)(j,"long-heading-truncated")),C({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(t.createElement)(d.a,{name:"accordion",type:"component"}))},T=function(){return Object(a.a)(B())}}});