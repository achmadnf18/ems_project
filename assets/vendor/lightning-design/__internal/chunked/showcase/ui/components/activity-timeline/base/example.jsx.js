var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/activity-timeline/base/example.jsx.js"]=function(e){function t(t){for(var n,r,i=t[0],o=t[1],c=t[2],m=0,u=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);u.length;)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==l[o]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},l={2:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;return s.push([175,0]),a()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},175:function(e,t,a){"use strict";a.r(t),a.d(t,"TimelineIcon",(function(){return b})),a.d(t,"TimelineActions",(function(){return x})),a.d(t,"TimelineMediaFigure",(function(){return E})),a.d(t,"TimelineMediaBody",(function(){return _})),a.d(t,"TimelineTrigger",(function(){return h})),a.d(t,"TimelineSubtext",(function(){return y})),a.d(t,"TimelineError",(function(){return g})),a.d(t,"TimelineItem",(function(){return v})),a.d(t,"FieldInfoListItem",(function(){return N})),a.d(t,"FieldInfoList",(function(){return w})),a.d(t,"DescriptionCard",(function(){return T})),a.d(t,"NarrowContext",(function(){return k})),a.d(t,"ActivityTimeline",(function(){return S})),a.d(t,"examples",(function(){return L})),a.d(t,"states",(function(){return C}));var n=a(0),l=a.n(n),s=a(4),r=a(24),i=a(9),o=a(8),c=a(12),d=a(2),m=a.n(d),u=[l.a.createElement(o.UtilityIcon,{key:"groups",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"groups",title:"Group email",assistiveText:"Group email"}),l.a.createElement(o.UtilityIcon,{key:"attach",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"attach",title:"Has attachments",assistiveText:"Has attachments"})],p=[l.a.createElement(o.UtilityIcon,{key:"rotate",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"rotate",title:"Recurring Task",assistiveText:"Recurring Task"})],f=[l.a.createElement(o.UtilityIcon,{key:"world",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"world",title:"Public sharing",assistiveText:"Public sharing"})],b=function(e){return l.a.createElement("div",{className:m()("slds-icon_container","log_a_call"===e.symbol?"slds-icon-standard-log-a-call":"slds-icon-standard-"+e.symbol,e.className),title:"log_a_call"===e.symbol?"call":e.symbol},l.a.createElement(i.a,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:e.symbol}))},x=function(e){return l.a.createElement("div",{className:m()("slds-timeline__actions",{"slds-timeline__actions_inline":e.inline})},l.a.createElement("p",{className:"slds-timeline__date"},e.date||"Feb 24"),l.a.createElement(s.b,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"down",assistiveText:e.assistiveText||"More Options","aria-haspopup":"true",title:e.title||"More Options"}))},E=function(e){return l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement(s.b,{iconClassName:"slds-timeline__details-action-icon",symbol:"switch",title:"Toggle details for ".concat(e.title),assistiveText:"Toggle details for ".concat(e.title),"aria-controls":e.id,"aria-expanded":e.isExpanded}),l.a.createElement(b,{symbol:e.type,className:"slds-timeline__icon"}))},_=function(e){return l.a.createElement("div",{className:"slds-media__body"},e.children)},h=function(e){return l.a.createElement("div",{className:"slds-grid slds-grid_align-spread slds-timeline__trigger"},l.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space"},"task"===e.type&&l.a.createElement(r.Checkbox,{hideLabel:!0,label:"Mark ".concat(e.title," complete")}),l.a.createElement("h3",{className:"slds-truncate",title:e.title},l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},l.a.createElement("strong",null,e.title))),e.iconSet&&l.a.createElement("div",{className:"slds-no-flex"},e.iconSet)),l.a.createElement(x,{inline:!0,date:e.date,title:"More Options for this item",assistiveText:"More Options for this item"}))},y=function(e){return l.a.createElement("p",{className:"slds-m-horizontal_xx-small"},l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},e.subtext.you)," ",e.subtext.action," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},e.subtext.to)," ",e.subtext.extra)},g=function(e){return l.a.createElement("div",{className:"slds-grid slds-text-color_error slds-m-top_x-small slds-m-horizontal_xx-small",id:e.id},l.a.createElement(o.UtilityIcon,{key:"attach",className:"slds-icon-text-error slds-icon_x-small slds-m-right_xx-small",symbol:"error",title:"Error Occurred",assistiveText:"Error Occurred"}),l.a.createElement("p",null,"There was an error loading the details"))},v=function(e){return l.a.createElement("div",{className:m()("slds-timeline__item_expandable","".concat("log_a_call"===e.type?"slds-timeline__item_call":"slds-timeline__item_"+e.type),{"slds-is-open":e.isExpanded},e.className)},l.a.createElement("span",{className:"slds-assistive-text"},e.type),l.a.createElement("div",{className:m()("slds-media")},l.a.createElement(E,e),l.a.createElement(_,null,l.a.createElement(h,e),l.a.createElement(y,e),e.hasError?l.a.createElement(g,e):l.a.createElement(T,{id:e.id,isExpanded:e.isExpanded,fields:e.fields,bodyLabel:e.bodyLabel,footerButtons:e.footerButtons},e.children))))},N=function(e){return l.a.createElement("li",{className:"slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small"},l.a.createElement("span",{className:"slds-text-title slds-p-bottom_x-small"},e.label),l.a.createElement("span",{className:"slds-text-body_medium slds-truncate",title:e.content},l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},e.content)))},w=function(e){return l.a.createElement("ul",{className:"slds-list_horizontal slds-wrap"},e.fields.map((function(e,t){return l.a.createElement(N,{key:t,label:e.label,content:e.content})})))},T=function(e){return l.a.createElement("article",{className:m()("slds-box","slds-timeline__item_details","slds-theme_shade","slds-m-top_x-small","slds-m-horizontal_xx-small",{"slds-p-around_medium":e.isExpanded},e.className),id:e.id,"aria-hidden":!e.isExpanded},e.fields&&l.a.createElement(w,e),e.children&&l.a.createElement("div",null,l.a.createElement("span",{className:"slds-text-title"},e.bodyLabel),l.a.createElement("p",{className:"slds-p-top_x-small"},e.children)),e.footerButtons&&l.a.createElement(c.Button,{isNeutral:!0,className:"slds-m-top_small"},l.a.createElement(i.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"world"}),"Public Sharing"))},k=function(e){return l.a.createElement("div",{className:"demo-only",style:{width:"400px"}},e.children)},S=function(e){var t=function(t){if(e.itemsExpanded)return e.itemsExpanded.includes(t)};return l.a.createElement("ul",{className:"slds-timeline"},l.a.createElement("li",null,l.a.createElement(v,{id:"".concat("task-item-"+e.id),type:"task",title:"Review proposals for EBC deck with larger team and have marketing review this",date:"9:00am | 3/20/17",subtext:{you:"You",action:"created a task with",to:"Charlie Gomez"},iconSet:p,fields:[{label:"Name",content:"Charlie Gomez"},{label:"Related To",content:"Tesla Cloudhub + Anypoint Connectors"}],bodyLabel:"Description",isExpanded:t(1),isNarrow:e.isNarrow,hasError:e.hasError},"Need to finalize proposals and brand details before the meeting")),l.a.createElement("li",null,l.a.createElement(v,{id:"".concat("call-item-"+e.id),type:"log_a_call",title:"Mobile conversation on Monday",date:"10:00am | 3/23/17",subtext:{you:"You",action:"logged a call with",to:"Adam Chan"},fields:[{label:"Name",content:"Adam Chan"},{label:"Related To",content:"Tesla Cloudhub + Anypoint Connectors"}],bodyLabel:"Description",isExpanded:t(2),isNarrow:e.isNarrow},"Adam seemed interested in closing this deal quickly! Let’s move.")),l.a.createElement("li",null,l.a.createElement(v,{id:"".concat("email-item-"+e.id),type:"email",title:"Re: Mobile conversation on Monday with the new global team",date:"10:00am | 3/24/17",subtext:{you:"You",action:"emailed",to:"Lea Chan"},iconSet:u,fields:[{label:"From Address",content:"Jackie Dewar"},{label:"To Address",content:"Lea Chan"}],bodyLabel:"Text Body",isExpanded:t(3),isNarrow:e.isNarrow,footerButtons:e.footerButtons},"Hi everyone, Thanks for meeting with the team today and going through the proposals we saw. This goes on and wraps if needed.")),l.a.createElement("li",null,l.a.createElement(v,{id:"".concat("event-item-"+e.id),type:"event",title:"EBC Follow up call",date:"10:30am | 3/24/17",subtext:{you:"You",action:"created an event with",to:"Aida Lee",extra:"and 5 others"},iconSet:f,fields:[{label:"Location",content:"Westen St. Francis, San Francisco, CA, 94622"},{label:"Attendees",content:"Jason Dewar (Organizer) + 5 others"},{label:"When",content:"March 26, 10:00 AM - 11:00 AM"}],bodyLabel:"Description",isExpanded:t(4),isNarrow:e.isNarrow,footerButtons:e.footerButtons},"Let's discuss the 2017 product roadmap and address any questions")))};t.default=l.a.createElement(S,{id:"base",isExpanded:"false"});var L=[{id:"narrow",label:"Narrow",element:l.a.createElement(k,null,l.a.createElement(S,{id:"narrow",itemsExpanded:[1,2,3,4],isNarrow:!0,footerButtons:!0}))}],C=[{id:"expanded",label:"Expanded",element:l.a.createElement(S,{id:"expanded",itemsExpanded:[1,2,3,4],footerButtons:!0})},{id:"expanded-single",label:"Expanded - Single Item",element:l.a.createElement(S,{id:"expanded",itemsExpanded:[1],footerButtons:!0})},{id:"error",label:"Error",element:l.a.createElement(S,{id:"error",itemsExpanded:[1,2,3,4],hasError:!0,footerButtons:!0})},{id:"error-single",label:"Error - Single Item",element:l.a.createElement(S,{id:"error",itemsExpanded:[1],hasError:!0,footerButtons:!0})}]}});