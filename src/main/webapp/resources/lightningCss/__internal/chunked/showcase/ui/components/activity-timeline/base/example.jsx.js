var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/activity-timeline/base/example.jsx.js"]=function(e){function t(t){for(var a,i,r=t[0],d=t[1],o=t[2],m=0,u=[];m<r.length;m++)i=r[m],s[i]&&u.push(s[i][0]),s[i]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(c&&c(t);u.length;)u.shift()();return n.push.apply(n,o||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,r=1;r<l.length;r++){var d=l[r];0!==s[d]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=l[0]))}return e}var a={},s={94:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},n=[];function i(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=a,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var c=d;return n.push([161,0]),l()}({0:function(e,t){e.exports=React},161:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.examples=t.BaseExample=t.NarrowContext=t.DescriptionCard=t.FieldInfoList=t.FieldInfoListItem=t.TimelineItem=t.TimelineError=t.TimelineSubtext=t.TimelineTrigger=t.TimelineMediaBody=t.TimelineMediaFigure=t.TimelineActions=t.TimelineIcon=void 0;var a=c(l(0)),s=c(l(2)),n=l(14),i=c(l(4)),r=l(6),d=l(8),o=c(l(1));function c(e){return e&&e.__esModule?e:{default:e}}var m=[a.default.createElement(r.UtilityIcon,{key:"groups",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"groups",title:"Group email",assistiveText:"Group email"}),a.default.createElement(r.UtilityIcon,{key:"attach",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"attach",title:"Has attachments",assistiveText:"Has attachments"})],u=[a.default.createElement(r.UtilityIcon,{key:"rotate",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"rotate",title:"Recurring Task",assistiveText:"Recurring Task"})],f=[a.default.createElement(r.UtilityIcon,{key:"world",className:"slds-icon_xx-small slds-icon-text-default slds-m-left_x-small",symbol:"world",title:"Public sharing",assistiveText:"Public sharing"})],p=t.TimelineIcon=function(e){return a.default.createElement("div",{className:(0,o.default)("slds-icon_container","log_a_call"===e.symbol?"slds-icon-standard-log-a-call":"slds-icon-standard-"+e.symbol,e.className),title:"log_a_call"===e.symbol?"call":e.symbol},a.default.createElement(i.default,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:e.symbol}))},x=t.TimelineActions=function(e){return a.default.createElement("div",{className:(0,o.default)("slds-timeline__actions",{"slds-timeline__actions_inline":e.inline})},a.default.createElement("p",{className:"slds-timeline__date"},e.date||"Feb 24"),a.default.createElement(s.default,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"down",assistiveText:e.assistiveText||"More Options","aria-haspopup":"true",title:e.title||"More Options"}))},E=t.TimelineMediaFigure=function(e){return a.default.createElement("div",{className:"slds-media__figure"},a.default.createElement(s.default,{iconClassName:"slds-timeline__details-action-icon",symbol:"switch",title:"Toggle details for "+e.title,assistiveText:"Toggle details for "+e.title,"aria-controls":e.id,"aria-expanded":e.isExpanded}),a.default.createElement(p,{symbol:e.type,className:"slds-timeline__icon"}))},_=t.TimelineMediaBody=function(e){return a.default.createElement("div",{className:"slds-media__body"},e.children)},b=t.TimelineTrigger=function(e){return a.default.createElement("div",{className:"slds-grid slds-grid_align-spread slds-timeline__trigger"},a.default.createElement("div",{className:"slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space"},"task"===e.type&&a.default.createElement(n.Checkbox,{hideLabel:!0,label:"Mark "+e.title+" complete"}),a.default.createElement("h3",{className:"slds-truncate",title:e.title},a.default.createElement("a",{href:"javascript:void(0);"},a.default.createElement("strong",null,e.title))),e.iconSet&&a.default.createElement("div",{className:"slds-no-flex"},e.iconSet)),a.default.createElement(x,{inline:!0,date:e.date,title:"More Options for this item",assistiveText:"More Options for this item"}))},h=t.TimelineSubtext=function(e){return a.default.createElement("p",{className:"slds-m-horizontal_xx-small"},a.default.createElement("a",{href:"javascript:void(0);"},e.subtext.you)," ",e.subtext.action," ",a.default.createElement("a",{href:"javascript:void(0);"},e.subtext.to)," ",e.subtext.extra)},y=t.TimelineError=function(e){return a.default.createElement("div",{className:"slds-grid slds-text-color_error slds-m-top_x-small slds-m-horizontal_xx-small",id:e.id},a.default.createElement(r.UtilityIcon,{key:"attach",className:"slds-icon-text-error slds-icon_x-small slds-m-right_xx-small",symbol:"error",title:"Error Occurred",assistiveText:"Error Occurred"}),a.default.createElement("p",null,"There was an error loading the details"))},v=t.TimelineItem=function(e){return a.default.createElement("div",{className:(0,o.default)("slds-timeline__item_expandable","log_a_call"===e.type?"slds-timeline__item_call":"slds-timeline__item_"+e.type,{"slds-is-open":"true"===e.isExpanded},e.className)},a.default.createElement("span",{className:"slds-assistive-text"},e.type),a.default.createElement("div",{className:(0,o.default)("slds-media")},a.default.createElement(E,e),a.default.createElement(_,null,a.default.createElement(b,e),a.default.createElement(h,e),e.hasError?a.default.createElement(y,e):a.default.createElement(w,{id:e.id,isExpanded:e.isExpanded,fields:e.fields,bodyLabel:e.bodyLabel,footerButtons:e.footerButtons},e.children))))},g=t.FieldInfoListItem=function(e){return a.default.createElement("li",{className:"slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small"},a.default.createElement("span",{className:"slds-text-title slds-p-bottom_x-small"},e.label),a.default.createElement("span",{className:"slds-text-body_medium slds-truncate",title:e.content},a.default.createElement("a",{href:"javascript:void(0);"},e.content)))},N=t.FieldInfoList=function(e){return a.default.createElement("ul",{className:"slds-list_horizontal slds-wrap"},e.fields.map(function(e,t){return a.default.createElement(g,{key:t,label:e.label,content:e.content})}))},w=t.DescriptionCard=function(e){return a.default.createElement("article",{className:(0,o.default)("slds-box","slds-timeline__item_details","slds-theme_shade","slds-m-top_x-small","slds-m-horizontal_xx-small",{"slds-p-around_medium":"true"===e.isExpanded},e.className),id:e.id,"aria-hidden":"false"===e.isExpanded},e.fields&&a.default.createElement(N,e),e.children&&a.default.createElement("div",null,a.default.createElement("span",{className:"slds-text-title"},e.bodyLabel),a.default.createElement("p",{className:"slds-p-top_x-small"},e.children)),e.footerButtons&&a.default.createElement(d.Button,{isNeutral:!0,className:"slds-m-top_small"},a.default.createElement(i.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"world"}),"Public Sharing"))},T=t.NarrowContext=function(e){return a.default.createElement("div",{className:"demo-only",style:{width:"400px"}},e.children)},k=t.BaseExample=function(e){return a.default.createElement("ul",{className:"slds-timeline"},a.default.createElement("li",null,a.default.createElement(v,{id:"task-item-"+e.id,type:"task",title:"Review proposals for EBC deck with larger team and have marketing review this",date:"9:00am | 3/20/17",subtext:{you:"You",action:"created a task with",to:"Charlie Gomez"},iconSet:u,fields:[{label:"Name",content:"Charlie Gomez"},{label:"Related To",content:"Tesla Cloudhub + Anypoint Connectors"}],bodyLabel:"Description",isExpanded:e.isExpanded,isNarrow:e.isNarrow,hasError:e.hasError},"Need to finalize proposals and brand details before the meeting")),a.default.createElement("li",null,a.default.createElement(v,{id:"call-item-"+e.id,type:"log_a_call",title:"Mobile conversation on Monday",date:"10:00am | 3/23/17",subtext:{you:"You",action:"logged a call with",to:"Adam Chan"},fields:[{label:"Name",content:"Adam Chan"},{label:"Related To",content:"Tesla Cloudhub + Anypoint Connectors"}],bodyLabel:"Description",isExpanded:e.isExpanded,isNarrow:e.isNarrow},"Adam seemed interested in closing this deal quickly! Let’s move.")),a.default.createElement("li",null,a.default.createElement(v,{id:"email-item-"+e.id,type:"email",title:"Re: Mobile conversation on Monday with the new global team",date:"10:00am | 3/24/17",subtext:{you:"You",action:"emailed",to:"Lea Chan"},iconSet:m,fields:[{label:"From Address",content:"Jackie Dewar"},{label:"To Address",content:"Lea Chan"}],bodyLabel:"Text Body",isExpanded:e.isExpanded,isNarrow:e.isNarrow,footerButtons:e.footerButtons},"Hi everyone, Thanks for meeting with the team today and going through the proposals we saw. This goes on and wraps if needed.")),a.default.createElement("li",null,a.default.createElement(v,{id:"event-item-"+e.id,type:"event",title:"EBC Follow up call",date:"10:30am | 3/24/17",subtext:{you:"You",action:"created an event with",to:"Aida Lee",extra:"and 5 others"},iconSet:f,fields:[{label:"Location",content:"Westen St. Francis, San Francisco, CA, 94622"},{label:"Attendees",content:"Jason Dewar (Organizer) + 5 others"},{label:"When",content:"March 26, 10:00 AM - 11:00 AM"}],bodyLabel:"Description",isExpanded:e.isExpanded,isNarrow:e.isNarrow,footerButtons:e.footerButtons},"Let's discuss the 2017 product roadmap and address any questions")))};t.default=a.default.createElement(k,{id:"base",isExpanded:"false"});t.examples=[{id:"narrow",label:"Narrow",element:a.default.createElement(T,null,a.default.createElement(k,{id:"narrow",isExpanded:"true",isNarrow:!0,footerButtons:!0}))}],t.states=[{id:"expanded",label:"Expanded",element:a.default.createElement(k,{id:"expanded",isExpanded:"true",footerButtons:!0})},{id:"error",label:"Error",element:a.default.createElement(k,{id:"error",isExpanded:"true",hasError:!0,footerButtons:!0})}]}});