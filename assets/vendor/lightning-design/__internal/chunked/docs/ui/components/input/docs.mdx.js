var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/input/docs.mdx.js"]=function(e){function t(t){for(var a,r,o=t[0],s=t[1],c=t[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&p.push(l[r][0]),l[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={44:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return i.push([280,0]),n()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},280:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return D})),n.d(t,"getContents",(function(){return B}));var a=n(0),l=n.n(a),i=n(4),r=n(1),o=(n(23),n(15)),s=n(16),c=n(10),d=n(7),u=n(50),p=n(8),b="Input Label",m="text-input-id-1",h="error-message-unique-id",f="Placeholder text…",E=function(e){return l.a.createElement(p.b,{labelContent:b,inputId:m,isRequired:!0},l.a.createElement(s.a,{id:m,placeholder:f,required:!0}))},y=function(e){return l.a.createElement(p.b,{hasError:!0,labelContent:b,inputId:m,errorId:e.errorId,isRequired:!0,inlineMessage:"Enter a value."},l.a.createElement(s.a,{id:m,placeholder:f,required:!0,"aria-describedby":e.errorId}))},I=function(e){return l.a.createElement(p.b,{hasError:!0,labelContent:b,inputId:m,hasLeftIcon:!0,errorId:e.errorId,isRequired:!0,inlineMessage:"Enter a value."},l.a.createElement(c.a,{className:"slds-input__icon",sprite:"utility",symbol:"error"}),l.a.createElement(s.a,{id:m,required:!0,placeholder:f,"aria-describedby":e.errorId}))},_=function(e){return l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,placeholder:f,disabled:!0}))},x=function(e){return l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,readOnly:!0,hasBorders:e.hasBorders,defaultValue:"Read Only",placeholder:""}))},g=l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,placeholder:f})),v=[{id:"input-required",label:"Required",element:l.a.createElement(E,null)},{id:"input-disabled",label:"Disabled",element:l.a.createElement(_,null)},{id:"input-error",label:"Error",element:l.a.createElement(y,{errorId:h})},{id:"input-error-icon",label:"Error with icon",element:l.a.createElement(I,{errorId:h})},{id:"read-only",label:"Readonly",element:l.a.createElement(x,null)},{id:"read-only-borders",label:"Readonly with borders",element:l.a.createElement(x,{hasBorders:!0})},{id:"static",label:"Static",element:l.a.createElement(p.h,null,l.a.createElement("span",{className:"slds-form-element__label"},"Input Label"),l.a.createElement(p.c,null,l.a.createElement("span",{className:"slds-form-element__static"},"Read Only")))}],O=[{id:"left-icon",label:"Left Icon",element:l.a.createElement(p.b,{labelContent:b,inputId:m,hasLeftIcon:!0},l.a.createElement(c.a,{className:"slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:m,placeholder:f}))},{id:"right-icon",label:"Right Icon",element:l.a.createElement(p.b,{labelContent:b,inputId:m,hasRightIcon:!0},l.a.createElement(c.a,{className:"slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:m,placeholder:f}))},{id:"double-icon",label:"Left Icon & Clear Button",element:l.a.createElement(p.b,{labelContent:b,inputId:m,hasLeftIcon:!0,hasRightIcon:!0},l.a.createElement(c.a,{className:"slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:m,placeholder:f}),l.a.createElement(d.b,{symbol:"clear",className:"slds-input__icon slds-input__icon_right",iconClassName:"slds-icon-text-light",assistiveText:"Clear",title:"Clear"}))},{id:"double-icon-spinner",label:"Clear Button with Spinner",element:l.a.createElement(p.b,{labelContent:b,inputId:m,hasLeftIcon:!0,hasRightIcon:!0,hasRightIconGroup:!0},l.a.createElement(c.a,{className:"slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:m,placeholder:f}),l.a.createElement("div",{className:"slds-input__icon-group slds-input__icon-group_right"},l.a.createElement(u.a,{className:"slds-spinner_brand slds-spinner_x-small slds-input__spinner"}),l.a.createElement(d.b,{symbol:"clear",className:"slds-input__icon slds-input__icon_right",iconClassName:"slds-icon-text-light",assistiveText:"Clear",title:"Clear"})))},{id:"email-input",label:"Email Input",element:l.a.createElement(p.b,{labelContent:"Email",inputId:"input-email"},l.a.createElement(s.a,{id:"input-email",type:"email",placeholder:"E-Mail"}))},{id:"date-input",label:"Date Input",element:l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,type:"date"}))},{id:"search-input",label:"Search Input",element:l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,type:"search"}))},{id:"url-input",label:"URL Input",element:l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,type:"url"}))},{id:"tel-input",label:"Telephone Input",element:l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,type:"tel"}))},{id:"fixed-text",label:"Fixed text",element:l.a.createElement(p.b,{labelContent:b,inputId:m,formControlClassName:"slds-input-has-fixed-addon",labelId:"fixed-text-label"},l.a.createElement("span",{className:"slds-form-element__addon",id:"fixed-text-addon-pre"},"$"),l.a.createElement(s.a,{id:m,placeholder:f,"aria-labelledby":"fixed-text-label fixed-text-addon-pre fixed-text-addon-post"}),l.a.createElement("span",{className:"slds-form-element__addon",id:"fixed-text-addon-post"},"euro"))},{id:"inline-help",label:"Inline Help",element:l.a.createElement(p.b,{labelId:"inline-text-label",labelContent:b,inputId:m,errorId:h,inlineMessage:"ex: (415)111-2222"},l.a.createElement(s.a,{id:m,placeholder:f,"aria-describedby":h}))},{id:"field-level-help",label:"Field level help",element:l.a.createElement("div",{style:{paddingTop:"3rem",position:"relative"}},l.a.createElement(p.b,{labelContent:b,inputId:m,hasTooltip:!0,showTooltip:!0},l.a.createElement(s.a,{id:m,placeholder:f})))},{id:"bare",label:"Bare",element:l.a.createElement(p.b,{labelContent:b,inputId:m},l.a.createElement(s.a,{id:m,isBare:!0,placeholder:f}))}],j=n(2),w=n(37),C=n(38),S=i.c.a,T=i.c.code,L=i.c.h2,R=i.c.h3,N=i.c.h4,k=i.c.li,M=i.c.ol,q=i.c.p,D=function(){return Object(a.createElement)(i.b,{},Object(a.createElement)("div",{className:"doc lead"},"Text inputs are used for freeform data entry"),Object(a.createElement)(r.a,{exampleOnly:!0},g),L({id:"About-Inputs"},"About Inputs"),q({},"You can style the HTML ",T({},"<input>")," element to align with the Salesforce brand by using the ",T({},".slds-input")," class on the ",T({},"<input>")," element."),q({},"The ",T({},"<input>")," element includes support for all HTML5 types: ",T({},"text"),",\n",T({},"password"),", ",T({},"datetime"),", ",T({},"datetime-local"),", ",T({},"date"),", ",T({},"month"),", ",T({},"time"),", ",T({},"week"),",\n",T({},"number"),", ",T({},"email"),", ",T({},"url"),", ",T({},"search"),", ",T({},"tel"),", and ",T({},"color"),"."),q({},"The static state is for form elements that can’t be modified by the user. It is used for small, non-editable form fields that sit next to inputs and allows the size and height to align. It is not meant for large paragraphs of text."),R({id:"Pointer-Events"},"Pointer Events"),q({},"In order to have an actionable SVG within the input, like a clear or increment/decrement button, the icon must be contained within a button, not an anchor ",T({},"<a>"),", in order for pointer events to work properly."),q({},"You can see examples of the correct markup in the ",S({href:"/components/input/?example=double-icon&variant=base"},"Left Icon & Clear Button example")," or the ",S({href:"/components/input/?example=increment-decrement-counter&variant=base"},"Counter example"),"."),R({id:"Accessibility"},"Accessibility"),q({},"Inputs with errors should have ",T({},"aria-describedby")," to insure that the associated field level error message is read by assistive technology."),q({},"If the error message has an ",T({},'id="my-error-message"'),", then the input should have ",T({},'aria-describedby="my-error-message"')," and ",T({},'aria-invalid="true"'),"."),q({},"If you need some type of field level help and if your tooltips are available on hover, make sure they’re also available on keyboard focus. The help icon needs to be associated to the tooltip so that when the user focuses\non the icon, assistive technology reads out the content of the tooltip. If the tooltip has an ",T({},'id="help"'),", then the ",T({},"<button>")," containing the icon should have ",T({},'aria-describedby="help"'),"."),q({},"In some cases, the read-only field state is swapped and has no ",T({},"<input>"),". This is called ",T({},"static")," in the examples. In that case, don’t use a ",T({},"<label>"),". This provides better accessibility for screen readers and keyboard navigators. Instead, use a ",T({},"<span>")," with the ",T({},".slds-form-element__label")," class. Instead of an ",T({},"<input>"),", use the ",T({},".slds-form-element__static")," class inside the ",T({},".slds-form-element__control")," wrapper."),R({id:"Mobile"},"Mobile"),Object(a.createElement)(w.a,{patternSpecificText:"inputs will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor"}),Object(a.createElement)(r.a,{frameOnly:!0},g),L({id:"States"},"States"),R({id:"Required"},"Required"),Object(a.createElement)(r.a,null,Object(j.e)(v,"input-required")),R({id:"Disabled"},"Disabled"),Object(a.createElement)(r.a,null,Object(j.e)(v,"input-disabled")),R({id:"Error"},"Error"),Object(a.createElement)(r.a,null,Object(j.e)(v,"input-error")),R({id:"Error-with-icon"},"Error with icon"),Object(a.createElement)(r.a,null,Object(j.e)(v,"input-error-icon")),R({id:"Read-Only"},"Read Only"),Object(a.createElement)(r.a,null,Object(j.e)(v,"read-only")),L({id:"Examples"},"Examples"),R({id:"With-Icons"},"With Icons"),N({id:"Icon-on-the-left"},"Icon on the left"),Object(a.createElement)(o.a,{type:"warning"},Object(a.createElement)("p",null,"A left aligned icon cannot be paired with fixed text.")),Object(a.createElement)(r.a,null,Object(j.e)(O,"left-icon")),N({id:"Icon-on-the-right"},"Icon on the right"),Object(a.createElement)(r.a,null,Object(j.e)(O,"right-icon")),N({id:"Icon-and-clear-button"},"Icon and clear button"),Object(a.createElement)(r.a,null,Object(j.e)(O,"double-icon")),N({id:"Icon-and-clear-button-with-loading-spinner"},"Icon and clear button, with loading spinner"),Object(a.createElement)(r.a,null,Object(j.e)(O,"double-icon-spinner")),R({id:"Fixed-Text"},"Fixed Text"),Object(a.createElement)(o.a,{type:"warning"},Object(a.createElement)("p",null,"Fixed text cannot be paired with an icon that is aligned left.")),q({},"When using the fixed text variants for prepending or appending symbols to inputs, please be sure to use ",T({},"aria-labelledby")," on the input, that points to the ids of the label, prepended text and appended text as a space separated list."),q({},"The IDs must appear in that order:"),M({},k({},"label,"),k({},"prepended"),k({},"then appended.")),q({},"The reason we do this is to create a better association between the input and the supporting labels around it."),q({},"By only using the traditional ",T({},"label[for]")," method, the fixed text is never read out in the context of editing the input value. With using the ",T({},"aria-labelledby")," attribute we can create a better label with all the visual labels associated with it, in a relevant order, that is read by assistive technology when the user needs it; when they're editing the value."),Object(a.createElement)(r.a,null,Object(j.e)(O,"fixed-text")),R({id:"Inline-Help"},"Inline Help"),Object(a.createElement)(r.a,null,Object(j.e)(O,"inline-help")),R({id:"Field-Level-Help"},"Field Level Help"),Object(a.createElement)(r.a,null,Object(j.e)(O,"field-level-help")),L({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(a.createElement)(C.a,{name:"input",type:"component"}))},B=function(){return Object(i.a)(D())}}});