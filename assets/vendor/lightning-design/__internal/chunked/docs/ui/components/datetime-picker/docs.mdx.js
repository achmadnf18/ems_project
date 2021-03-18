var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/datetime-picker/docs.mdx.js"]=function(e){function t(t){for(var a,r,i=t[0],s=t[1],d=t[2],m=0,u=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(c&&c(t);u.length;)u.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==l[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={26:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=s;return o.push([316,0]),n()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},316:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return T})),n.d(t,"getContents",(function(){return N}));var a=n(0),l=n.n(a),o=n(4),r=n(1),i=n(15),s=n(3),d=n.n(s),c=n(5),m=n.n(c),u=n(2),p=n(21),h=n(36),f=n(7),b=n(8),g=n(16),E=function(e){var t=e.dropdown,n=e.dropdownIsOpen,a=e.listboxIsOpen,o=e.dateDefaultValue,r=e.timeDefaultValue,i=u.c.uniqueId("text-input-unique-id-"),s={"slds-is-open":n};return l.a.createElement("div",{className:"slds-form"},l.a.createElement("fieldset",{className:"slds-form-element slds-form-element_compound"},l.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Date and Time"),l.a.createElement("div",{className:"slds-form-element__control"},l.a.createElement("div",{className:"slds-form-element__group"},l.a.createElement("div",{className:"slds-form-element__row"},l.a.createElement(b.b,{formElementClassName:m()("slds-dropdown-trigger slds-dropdown-trigger_click",s),labelContent:"Date",inputId:i,hasRightIcon:!0,dropdown:t},l.a.createElement(g.a,{id:i,placeholder:" ",defaultValue:o}),l.a.createElement(f.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),l.a.createElement(p.a,{label:"Time",autocomplete:!0,isOpen:a,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:l.a.createElement(y,{optionSelected:!0}),value:r}))))))};E.propTypes={dropdown:d.a.node,dropdownIsOpen:d.a.bool,listboxIsOpen:d.a.bool,dateDefaultValue:d.a.string,timeDefaultValue:d.a.string},E.defaultProps={dropdown:l.a.createElement(h.b,{todayActive:!0}),dropdownIsOpen:!0};var y=function(e){return l.a.createElement(p.c,{listboxClassName:"slds-dropdown slds-dropdown_fluid slds-dropdown_length-5",vertical:!0},l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"6:00am"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"7:00am"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"8:00am",selected:e.optionSelected})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"9:00am"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"10:00am"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"11:00am"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"12:00pm"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"1:00pm"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"2:00pm"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"3:00pm"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"4:00pm"})),l.a.createElement(p.d,null,l.a.createElement(p.e,{title:"5:00pm"})))},v=l.a.createElement(E,null),_=[{id:"date-selection",label:"Date selected",element:l.a.createElement(E,{dropdown:l.a.createElement(h.b,{todayActive:!0,dateSelected:"single",dateRange:"week-4"}),dateDefaultValue:"06/24/2020"})},{id:"time-selection",label:"Time selected",demoStyles:"height: 20rem;",element:l.a.createElement(E,{dropdown:l.a.createElement(h.b,{todayActive:!0,dateSelected:"single",dateRange:"week-4"}),dropdownIsOpen:!1,listboxIsOpen:!0,timeDefaultValue:"8:00am",dateDefaultValue:"06/24/2020"})}],w=o.c.a,O=o.c.code,S=o.c.h2,x=o.c.h3,k=o.c.li,j=o.c.p,D=o.c.strong,I=o.c.ul,T=function(){return Object(a.createElement)(o.b,{},Object(a.createElement)("div",{className:"doc lead"},"A datetime picker is used to select a day and a time."),Object(a.createElement)(r.a,{exampleOnly:!0,demoStyles:"height: 28rem;"},v),S({id:"About-datetime-picker"},"About datetime picker"),x({id:"Implementation"},"Implementation"),j({},"The datetime is two ",w({href:"/components/form-element"},"form elements"),", each containing a label and text ",w({href:"/components/input"},"input"),", and a dropdown ",w({href:"/components/menus"},"menu"),", containing a grid-based calendar and filters. The date form element acts as a trigger for the dropdown."),Object(a.createElement)(i.a,{type:"warning"},Object(a.createElement)("p",null,"Placement of inline form elements inside a data table cell is not supported. Instead, use a button to invoke a popover, which does support form elements.")),j({},"The datetime picker has the following markup requirements:"),j({},D({},"Desktop")),I({},k({},"Add ",O({},".slds-is-open")," to the element with ",O({},".slds-dropdown-trigger")," to invoke the dropdown that contains the datepicker and the list of time options."),k({},"On the timepicker, the ",O({},".slds-has-focus")," modifier class is required on the ",O({},".slds-listbox__option")," element that has focus."),k({},"On the timepicker, the ",O({},".slds-is-selected")," modifier class is required on the ",O({},".slds-listbox__option")," element that has been selected."),k({},"On the datepicker, the ",O({},".slds-is-selected")," modifier class is required on the ",O({},"td")," element that has the selected day."),k({},"On the datepicker, the ",O({},".slds-is-today")," modifier class is required on the ",O({},"td")," element that is the current day.")),j({},D({},"Mobile")),I({},k({},"When on mobile, we want to leverage the native datetime picker by changing the ",O({},"input")," type from ",O({},"text")," to ",O({},"datetime-local")),k({},"The ",O({},'input type="datetime-local"')," will create an input field allowing a date and time to be easily entered — this includes year, month, day, hours, and minutes."),k({},"When switching ",O({},'input type="text"')," to ",O({},'input type="datetime-local"')," for mobile, we need to remove the ARIA attributes. The native rendering doesn't require these.",I({},k({},"On the element with the class ",O({},"slds-combobox"),", please remove ",O({},'role="combobox"'),", ",O({},"aria-expanded"),", and ",O({},"aria-haspopup"),"."),k({},"On the ",O({},"input")," that we just added ",O({},'type="datetime-local"')," to, please remove ",O({},"aria-controls"),", ",O({},"aria-autocomplete"),", and ",O({},'role="textbox"'),".")))),S({id:"Base"},"Base"),Object(a.createElement)(r.a,{demoStyles:"height: 28rem;"},v),S({id:"States"},"States"),x({id:"Date-selection"},"Date selection"),Object(a.createElement)(r.a,{demoStyles:"height: 28rem;"},Object(u.e)(_,"date-selection")),x({id:"Time-selection"},"Time selection"),Object(a.createElement)(r.a,{demoStyles:"height: 28rem;"},Object(u.e)(_,"time-selection")))},N=function(){return Object(o.a)(T())}}});