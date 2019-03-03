var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/combobox/multi-entity/example.jsx.js"]=function(e){function t(t){for(var l,a,c=t[0],s=t[1],r=t[2],d=0,m=[];d<c.length;d++)a=c[d],o[a]&&m.push(o[a][0]),o[a]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],l=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(l=!1)}l&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var l={},o={28:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},i=[];function a(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=l,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var u=s;return i.push([96,0]),n()}({0:function(e,t){e.exports=React},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),o=n(11),i=n(15),a=n(19);var c=function(e){return l.default.createElement(i.Listbox,{className:"slds-dropdown slds-dropdown_fluid",vertical:!0},l.default.createElement(i.ListboxItem,null,l.default.createElement(i.EntityOption,{id:"listbox-option-unique-id-01",entityTitle:"Acme",entityMeta:!0,focused:e.focused})),l.default.createElement(i.ListboxItem,null,l.default.createElement(i.EntityOption,{id:"listbox-option-unique-id-02",entityTitle:"Salesforce.com, Inc.",entityMeta:!0})))};t.default=l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(i.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"search",objectSwitcherInline:!0,autocomplete:!0,listbox:l.default.createElement(c,null),objectSwitcher:!0}));t.states=[{id:"focused",label:"Focused",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(i.ComboboxContainer,{containerClassName:"slds-has-input-focus",inputIcon:"right",inputIconRightSymbol:"search",objectSwitcherInline:!0,autocomplete:!0,isOpen:!0,listbox:l.default.createElement(c,null),objectSwitcher:!0})),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "},{id:"open-item-focused",label:"Open - Item Focused",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(i.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"search",objectSwitcherInline:!0,autocomplete:!0,isOpen:!0,listbox:l.default.createElement(c,{focused:!0}),objectSwitcher:!0,"aria-activedescendant":"listbox-option-unique-id-01"}))},{id:"options-selected",label:"Option(s) Selected",element:l.default.createElement(i.ComboboxContainer,{inputIcon:"right",inputIconRightSymbol:"search",objectSwitcherInline:!0,autocomplete:!0,listbox:l.default.createElement(c,null),objectSwitcher:!0},l.default.createElement(a.ListboxPills,{className:"slds-p-top_xxx-small"},l.default.createElement(a.ListboxPillsItem,null,l.default.createElement(a.ListboxPill,{label:"Acme",tabIndex:"0"},l.default.createElement(o.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"}))),l.default.createElement(a.ListboxPillsItem,null,l.default.createElement(a.ListboxPill,{label:"Salesforce.com, Inc."},l.default.createElement(o.StandardIcon,{containerClassName:"slds-pill__icon_container",symbol:"opportunity",title:"Opportunity",assistiveText:"Opportunity"})))))},{id:"focused-options-selected",label:"Focused - Option(s) Selected",element:l.default.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.default.createElement(i.ComboboxContainer,{isOpen:!0,containerClassName:"slds-has-input-focus",inputIcon:"right",inputIconRightSymbol:"search",objectSwitcherInline:!0,autocomplete:!0,listbox:l.default.createElement(c,null),objectSwitcher:!0},l.default.createElement(a.ListboxPills,{className:"slds-p-top_xxx-small"},l.default.createElement(a.ListboxPillsItem,null,l.default.createElement(a.ListboxPill,{label:"Acme",tabIndex:"0"},l.default.createElement(o.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"}))),l.default.createElement(a.ListboxPillsItem,null,l.default.createElement(a.ListboxPill,{label:"Salesforce.com, Inc."},l.default.createElement(o.StandardIcon,{containerClassName:"slds-pill__icon_container",symbol:"opportunity",title:"Opportunity",assistiveText:"Opportunity"})))))),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "}]}});