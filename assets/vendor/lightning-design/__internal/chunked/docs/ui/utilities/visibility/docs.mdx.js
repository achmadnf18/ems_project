var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/utilities/visibility/docs.mdx.js"]=function(e){function s(s){for(var t,d,l=s[0],o=s[1],h=s[2],c=0,m=[];c<l.length;c++)d=l[c],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&m.push(n[d][0]),n[d]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(r&&r(s);m.length;)m.shift()();return a.push.apply(a,h||[]),i()}function i(){for(var e,s=0;s<a.length;s++){for(var i=a[s],t=!0,l=1;l<i.length;l++){var o=i[l];0!==n[o]&&(t=!1)}t&&(a.splice(s--,1),e=d(d.s=i[0]))}return e}var t={},n={109:0},a=[];function d(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=e,d.c=t,d.d=function(e,s,i){d.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:i})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,s){if(1&s&&(e=d(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)d.d(i,t,function(s){return e[s]}.bind(null,t));return i},d.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(s,"a",s),s},d.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},d.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=l.push.bind(l);l.push=s,l=l.slice();for(var h=0;h<l.length;h++)s(l[h]);var r=o;return a.push([289,0]),i()}({0:function(e,s){e.exports=React},18:function(e,s){e.exports=JSBeautify},19:function(e,s){e.exports=ReactDOM},289:function(e,s,i){"use strict";i.r(s),i.d(s,"getElement",(function(){return S})),i.d(s,"getContents",(function(){return g}));var t=i(0),n=i.n(t),a=i(4),d=i(1),l=i(2),o=[{id:"assistive-text",label:"Assistive Text",element:n.a.createElement("div",{className:"slds-assistive-text"},"I am hidden from sight"),description:"Use the `slds-assistive-text` class to enable a screen reader to read text that is hidden. This class is typically used to accompany icons and other UI elements that show an image instead of text."},{id:"collapsed-expanded",label:"Collapsed / Expanded",element:n.a.createElement("div",{className:"demo-only"},n.a.createElement("div",{className:"slds-is-collapsed"},n.a.createElement("h3",null,"I am collapsed"),n.a.createElement("p",null,"I am a child inside a collapsed element")),n.a.createElement("div",{className:"slds-is-expanded"},n.a.createElement("h3",null,"I am expanded"),n.a.createElement("p",null,"I am a child inside an expanded element"))),description:"The `.slds-is-collapsed` class hides the elements contained inside by controlling the height and overflow properties. Use the `.slds-is-expanded` class to show the elements contained inside in their normal expanded state."},{id:"hidden-visible",label:"Hidden / Visible",element:n.a.createElement("div",{className:"demo-only"},n.a.createElement("div",{className:"slds-hidden"},"I am hidden"),n.a.createElement("div",{className:"slds-visible"},"I am visible")),description:"\nYou can hide an element but reserve the space on the page for when the element is made visible again. To hide the element, use the  `slds-hidden` class. To make it visible again, use the `slds-visible` class.\n\nNote that `.slds-hidden` and any of the `.slds-visible` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.\n    "},{id:"hide-show",label:"Hide / Show",element:n.a.createElement("div",{className:"demo-only"},n.a.createElement("div",{className:"slds-hide"},"I am hidden"),n.a.createElement("div",{className:"slds-show"},"I am shown as a block"),n.a.createElement("div",{className:"slds-show_inline-block"},"I am shown as an inline-block")),description:"\nTo hide any type of element from view and from screen readers, use the `.slds-hide` class. Once hidden, you can display the content by using JavaScript to swap `.slds-hide` with `.slds-show`; This class will set the `display` property to `block`. If you need to display your hidden element as `inline` or `inline-block`, you can use the `.slds-show_inline` or `.slds-show_inline-block` classes, respectively.\n\nNote that `.slds-hide` and any of the `.slds-show-*` utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden.\n    "},{id:"transition-hide-show",label:"Transition Hide / Show",element:n.a.createElement("div",{className:"demo-only"},n.a.createElement("div",{className:"slds-transition-hide"},"I have zero opacity"),n.a.createElement("div",{className:"slds-transition-show"},"I have 100% opacity")),description:"To slowly transition an element from hiding and showing, use the  `slds-transition-hide` and `slds-transition-show` classes . They toggle the element's opacity and also reserve its space. Note: To control the timing of the transition, add an additional `transition` property to control the opacity change."},{id:"responsive",label:"Responsive",element:n.a.createElement("div",{className:"demo-only demo-visibility"},n.a.createElement("div",{className:"slds-show_x-small"},"Hides on 319px and down"),n.a.createElement("div",{className:"slds-hide_x-small"},"Hides on 320px and up"),n.a.createElement("div",{className:"slds-show_small"},"Hides on 479px and down"),n.a.createElement("div",{className:"slds-hide_small"},"Hides on 480px and up"),n.a.createElement("div",{className:"slds-show_medium"},"Hides on 767px and down"),n.a.createElement("div",{className:"slds-hide_medium"},"Hides on 768px and up"),n.a.createElement("div",{className:"slds-show_large"},"Hides on 1023px and down"),n.a.createElement("div",{className:"slds-hide_large"},"Hides on 1024px and up"),n.a.createElement("div",{className:"slds-show_x-large"},"Hides on 1279px and down"),n.a.createElement("div",{className:"slds-hide_x-large"},"Hides on 1280px and up")),description:"\nResponsive visibility classes will hide content on specific breakpoints. `slds-show_[breakpoint]` renders `display: none` when the the view port width is smaller than the breakpoint, and does nothing if it is bigger or equal. `slds-hide_[breakpoint]` does the opposite by rendering `display: none` when the the viewport width is bigger or equal than the breakpoint, and does nothing if it is smaller.\n\n|Class Name|Less than 320px|X-Small (>= 320px)|Small (>= 480px)|Medium (>= 768px)|Large (>= 1024px)|X-Large (>= 1280px)|\n|---|---|---|---|---|---|---|\n|`.slds-hide_x-small`|Show|Hide|Hide|Hide|Hide|Hide|\n|`.slds-show_x-small`|Hide|Show|Show|Show|Show|Show|\n|`.slds-hide_small`|Show|Show|Hide|Hide|Hide|Hide|\n|`.slds-show_small`|Hide|Hide|Show|Show|Show|Show|\n|`.slds-hide_medium`|Show|Show|Show|Hide|Hide|Hide|\n|`.slds-show_medium`|Hide|Hide|Hide|Show|Show|Show|\n|`.slds-hide_large`|Show|Show|Show|Show|Hide|Hide|\n|`.slds-show_large`|Hide|Hide|Hide|Hide|Show|Show|\n|`.slds-hide_x-large`|Show|Show|Show|Show|Show|Hide|\n|`.slds-show_x-large`|Hide|Hide|Hide|Hide|Hide|Show|\n    "}],h=a.c.code,r=a.c.h2,c=a.c.h3,m=a.c.p,p=a.c.table,w=a.c.tbody,u=a.c.td,b=a.c.th,y=a.c.thead,v=a.c.tr,S=function(){return Object(t.createElement)(a.b,{},Object(t.createElement)("div",{className:"doc lead"},"Specify the visibility of elements by showing and hiding. It's best practice to swap the hide and show classes rather than use them concurrently, as this will cause issues."),r({id:"Examples"},"Examples"),c({id:"Assistive-Text"},"Assistive Text"),m({},"Use the ",h({},"slds-assistive-text")," class to enable a screen reader to read text that is hidden. This class is typically used to accompany icons and other UI elements that show an image instead of text."),Object(t.createElement)(d.a,null,Object(l.e)(o,"assistive-text")),c({id:"Collapsed-Expanded"},"Collapsed / Expanded"),m({},"The ",h({},".slds-is-collapsed")," class hides the elements contained inside by controlling the height and overflow properties. Use the ",h({},".slds-is-expanded")," class to show the elements contained inside in their normal expanded state."),Object(t.createElement)(d.a,null,Object(l.e)(o,"collapsed-expanded")),c({id:"Hidden-Visible"},"Hidden / Visible"),m({},"You can hide an element but reserve the space on the page for when the element is made visible again. To hide the element, use the  ",h({},"slds-hidden")," class. To make it visible again, use the ",h({},"slds-visible")," class."),m({},"Note that ",h({},".slds-hidden")," and any of the ",h({},".slds-visible")," utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden."),Object(t.createElement)(d.a,null,Object(l.e)(o,"hidden-visible")),c({id:"Hide-Show"},"Hide / Show"),m({},"To hide any type of element from view and from screen readers, use the ",h({},".slds-hide")," class. Once hidden, you can display the content by using JavaScript to swap ",h({},".slds-hide")," with ",h({},".slds-show"),"; This class will set the ",h({},"display")," property to ",h({},"block"),". If you need to display your hidden element as ",h({},"inline")," or ",h({},"inline-block"),", you can use the ",h({},".slds-show_inline")," or ",h({},".slds-show_inline-block")," classes, respectively."),m({},"Note that ",h({},".slds-hide")," and any of the ",h({},".slds-show-*")," utility classes should not be used together at the same time on the same element; doing so will cause your element to remain hidden."),Object(t.createElement)(d.a,null,Object(l.e)(o,"hide-show")),c({id:"Transition-Hide-Show"},"Transition Hide / Show"),m({},"To slowly transition an element from hiding and showing, use the  ",h({},"slds-transition-hide")," and ",h({},"slds-transition-show")," classes . They toggle the element's opacity and also reserve its space. Note: To control the timing of the transition, add an additional ",h({},"transition")," property to control the opacity change."),Object(t.createElement)(d.a,null,Object(l.e)(o,"transition-hide-show")),c({id:"Responsive"},"Responsive"),m({},"Responsive visibility classes will hide content on specific breakpoints. ",h({},"slds-show_[breakpoint]")," renders ",h({},"display: none")," when the the view port width is smaller than the breakpoint, and does nothing if it is bigger or equal. ",h({},"slds-hide_[breakpoint]")," does the opposite by rendering ",h({},"display: none")," when the the viewport width is bigger or equal than the breakpoint, and does nothing if it is smaller."),p({},y({},v({},b({},"Class Name"),b({},"Less than 320px"),b({},"X-Small (>= 320px)"),b({},"Small (>= 480px)"),b({},"Medium (>= 768px)"),b({},"Large (>= 1024px)"),b({},"X-Large (>= 1280px)"))),w({},v({},u({},h({},".slds-hide_x-small")),u({},"Show"),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Hide")),v({},u({},h({},".slds-show_x-small")),u({},"Hide"),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Show")),v({},u({},h({},".slds-hide_small")),u({},"Show"),u({},"Show"),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Hide")),v({},u({},h({},".slds-show_small")),u({},"Hide"),u({},"Hide"),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Show")),v({},u({},h({},".slds-hide_medium")),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Hide"),u({},"Hide"),u({},"Hide")),v({},u({},h({},".slds-show_medium")),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Show"),u({},"Show"),u({},"Show")),v({},u({},h({},".slds-hide_large")),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Hide"),u({},"Hide")),v({},u({},h({},".slds-show_large")),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Show"),u({},"Show")),v({},u({},h({},".slds-hide_x-large")),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Show"),u({},"Hide")),v({},u({},h({},".slds-show_x-large")),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Hide"),u({},"Show")))),Object(t.createElement)(d.a,null,Object(l.e)(o,"responsive")))},g=function(){return Object(a.a)(S())}}});