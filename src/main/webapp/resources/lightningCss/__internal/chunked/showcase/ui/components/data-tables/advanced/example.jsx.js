var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/data-tables/advanced/example.jsx.js"]=function(e){function t(t){for(var l,c,r=t[0],o=t[1],i=t[2],s=0,m=[];s<r.length;s++)c=r[s],d[c]&&m.push(d[c][0]),d[c]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,r=1;r<a.length;r++){var o=a[r];0!==d[o]&&(l=!1)}l&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var l={},d={143:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},n=[];function c(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=l,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var u=o;return n.push([214,0]),a()}({0:function(e,t){e.exports=React},212:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProductDataTableTr=t.ProductQuantityCell=t.ProductItemDetailsCell=t.ProductPriceCell=t.ProductImage=t.AdvancedDataTableTr=void 0;var l=s(a(0)),d=s(a(3)),n=a(5),c=a(211),r=s(a(23)),o=a(9),i=a(7),u=a(13);function s(e){return e&&e.__esModule?e:{default:e}}var m=t.AdvancedDataTableTr=function(e){return l.default.createElement(u.TBodyTr,{isSelected:e.isSelected},l.default.createElement(u.Td,{isRightAligned:!0,type:"advanced"},l.default.createElement(u.SelectRowCell,{checked:e.isSelected,hasSingleRowSelect:e.hasSingleRowSelect,index:e.index,inputTabIndex:e.actionableMode?"0":"-1"})),l.default.createElement(u.RowTh,{hasFocus:!e.actionableMode&&1===e.index&&e.hasFocus,tabIndex:e.actionableMode||1!==e.index?null:"0"},l.default.createElement(u.ReadOnlyCell,{actionableMode:e.actionableMode,cellLink:"javascript:void(0);",cellText:e.recordName})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.ReadOnlyCell,{cellText:e.accountName})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.ReadOnlyCell,{cellText:e.closeDate})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.ReadOnlyCell,{cellText:e.stage})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.ReadOnlyCell,{cellText:e.confidence})),e.hasScores&&e.amountScore&&e.amountScoreLabel?l.default.createElement(u.Td,{type:"advanced"},l.default.createElement("div",{className:"slds-grid slds-grid_vertical-align-center"},l.default.createElement("div",{className:"slds-truncate",title:e.amount},e.amount),l.default.createElement("div",{className:"slds-icon_container slds-m-left_x-small slds-m-right_xx-small"},l.default.createElement(c.Score,{"data-slds-state":e.amountScore})),l.default.createElement("div",{className:"slds-truncate",title:e.amountScoreLabel},e.amountScoreLabel))):l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.ReadOnlyCell,{cellText:e.amount})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.ReadOnlyCell,{actionableMode:e.actionableMode,cellLink:"javascript:void(0);",cellText:e.contact})),e.hasRowActions&&l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.RowActionsCell,{actionableMode:e.actionableMode,rowName:e.recordName})))};m.displayName="AdvancedDataTableTr",m.propTypes={accountName:d.default.string.isRequired,actionableMode:d.default.bool,amount:d.default.string.isRequired,amountScore:(0,n.IsDependentOn)("amountScoreLabel",d.default.string),amountScoreLabel:(0,n.IsDependentOn)("amountScore",d.default.string),closeDate:d.default.string.isRequired,confidence:d.default.string.isRequired,contact:d.default.string.isRequired,hasFocus:d.default.bool,hasRowActions:d.default.bool,hasScores:d.default.bool,index:d.default.number.isRequired,hasSingleRowSelect:d.default.bool,recordName:d.default.string.isRequired,isSelected:d.default.bool,stage:d.default.string.isRequired},m.defaultProps={hasRowActions:!0};var p=t.ProductImage=function(e){return l.default.createElement("div",{className:"slds-size_xx-small"},l.default.createElement("img",{alt:e.productName,src:e.productImgSrc,title:e.productName}))};p.displayName="ProductImage",p.propTypes={productImgSrc:d.default.string.isRequired,productName:d.default.string.isRequired};var f=t.ProductPriceCell=function(e){return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",null,l.default.createElement("s",null,e.priceOriginal)),l.default.createElement("p",null,e.priceDiscount))};f.displayName="ProductPriceCell",f.propTypes={priceDiscount:d.default.string.isRequired,priceOriginal:d.default.string.isRequired};var b=t.ProductItemDetailsCell=function(e){return l.default.createElement(r.default,{figureLeft:l.default.createElement(p,{productImgSrc:e.productImgSrc,productName:e.productName})},l.default.createElement(u.ReadOnlyCell,{actionableMode:e.actionableMode,cellLink:"javascript:void(0);",cellText:e.productName}),l.default.createElement("ul",null,e.productProperties.map(function(e,t){return l.default.createElement("li",{className:"slds-truncate",key:t,title:e.label+": "+e.value},e.label,": ",l.default.createElement("strong",null,e.value))})),l.default.createElement("p",{className:"slds-text-color_success"},e.labelInventory))};b.displayName="ProductItemDetailsCell",b.propTypes={actionableMode:d.default.bool,labelInventory:d.default.string.isRequired,productImgSrc:d.default.string.isRequired,productName:d.default.string.isRequired,productProperties:d.default.array.isRequired};var y=t.ProductQuantityCell=function(e){return l.default.createElement(i.FormElement,{inputId:e.inputId,labelClassName:"slds-assistive-text",labelContent:e.labelText},l.default.createElement(o.Input,{className:"slds-size_xxx-small slds-text-align_center slds-p-horizontal_x-small",defaultValue:e.quantity,id:e.inputId,placeholder:" ",tabIndex:e.actionableMode?null:"-1"}))};y.displayName="ProductQuantityCell",y.propTypes={actionableMode:d.default.bool,labelText:d.default.string.isRequired,inputId:d.default.string.isRequired,quantity:d.default.string};var T=t.ProductDataTableTr=function(e){return l.default.createElement(u.TBodyTr,{isTopAligned:!0},l.default.createElement(u.RowTh,null,l.default.createElement(b,{actionableMode:e.actionableMode,labelInventory:e.labelInventory,productImgSrc:e.productImgSrc,productName:e.productName,productProperties:e.productProperties})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(y,{actionableMode:e.actionableMode,inputId:"product-quantity-text-input-id-"+e.index,labelText:e.productName+" quantity",quantity:e.quantity})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.ReadOnlyCell,{cellText:e.dateAdded})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(f,{priceDiscount:e.priceDiscount,priceOriginal:e.priceOriginal})),l.default.createElement(u.Td,{type:"advanced"},l.default.createElement(u.RowActionsCell,{actionableMode:e.actionableMode,rowName:e.productName})))};T.displayName="ProductDataTableTr",T.propTypes={actionableMode:d.default.bool,dateAdded:d.default.string.isRequired,index:d.default.number.isRequired,labelInventory:d.default.string.isRequired,priceDiscount:d.default.string.isRequired,priceOriginal:d.default.string.isRequired,productImgSrc:d.default.string.isRequired,productName:d.default.string.isRequired,productProperties:d.default.array.isRequired,quantity:d.default.string}},214:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.productRows=t.productColumns=t.rows=t.columns=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d=function(e){return e&&e.__esModule?e:{default:e}}(a(0)),n=a(213),c=a(11),r=a(13),o=a(212);var i=t.columns=["Name","Account Name","Close Date","Stage","Confidence","Amount","Contact"],u=t.rows=[{recordName:"Acme - 1,200 Widgets",accountName:"Acme",closeDate:"4/10/15",stage:"Value Proposition",confidence:"30%",amount:"$25,000,000",contact:"jrogers@acme.com",amountScore:"positive",amountScoreLabel:"High"},{recordName:"Acme - 200 Widgets",accountName:"Acme",closeDate:"1/31/15",stage:"Prospecting",confidence:"60%",amount:"$5,000,000",contact:"bob@acme.com"},{recordName:"salesforce.com - 1,000 Widgets",accountName:"salesforce.com",closeDate:"1/31/15 3:45PM",stage:"Id. Decision Makers",confidence:"70%",amount:"$25,000",contact:"nathan@salesforce.com",amountScore:"negative",amountScoreLabel:"Low"}],s=[].concat(u).reverse(),m=t.productColumns=["Product","Quantity","Date Added","Price"],p=t.productRows=[{productImgSrc:"/assets/images/product1.jpg",productName:"Baseball Cap",productProperties:[{label:"Size",value:"7 3/4"},{label:"Color",value:"Blue"},{label:"Item No.",value:"1007100"}],labelInventory:"In Stock",quantity:"1",dateAdded:"4/10/17",priceOriginal:"$23.00",priceDiscount:"$20.00"},{productImgSrc:"/assets/images/product2.jpg",productName:"Construction Hat",productProperties:[{label:"Size",value:"One size fits most"},{label:"Color",value:"Yellow"},{label:"Item No.",value:"2800100"}],labelInventory:"In Stock",quantity:"1",dateAdded:"4/10/17",priceOriginal:"$52.00",priceDiscount:"$40.00"},{productImgSrc:"/assets/images/product3.jpg",productName:"Campaign Hat",productProperties:[{label:"Size",value:"Small"},{label:"Color",value:"Tan"},{label:"Item No.",value:"2000100"}],labelInventory:"In Stock",quantity:"1",dateAdded:"4/10/17",priceOriginal:"$79.00",priceDiscount:"$59.00"}],f=[{column:"account name",icon:d.default.createElement(c.StandardIcon,{assistiveText:"Account",className:"slds-icon_x-small",containerClassName:"slds-m-right_xx-small",symbol:"account",title:"Account"})},{column:"confidence",icon:d.default.createElement("div",{className:"slds-icon_container slds-m-right_xx-small"},d.default.createElement(n.Ellie,{assistiveText:"Einstein calculated",className:"slds-is-paused",title:"Einstein calculated"}))}];t.default=d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e))})));t.states=[{id:"cell-focused",label:"Cell Focused",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e,{hasFocus:!0}))})))},{id:"actionable-mode",label:"Actionable Mode",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{actionableMode:!0,columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({actionableMode:!0,index:t+1,isSelected:!1,key:t},e))})))},{id:"row-selected",label:"Row Selected (Actionable mode)",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{actionableMode:!0,columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({actionableMode:!0,index:t+1,isSelected:1===t,key:t},e))})))},{id:"all-row-selected",label:"All Rows Selected (Actionable mode)",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{actionableMode:!0,columns:i,selectAll:!0}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({actionableMode:!0,index:t+1,isSelected:!0,key:t},e))})))},{id:"sorted-column-asc",label:"Sorted Ascending (Actionable mode)",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i,actionableMode:!0,sortDirection:"ascending"}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({actionableMode:!0,index:t+1,isSelected:!1,key:t},e))})))},{id:"sorted-column-desc",label:"Sorted Descending (Actionable mode)",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i,actionableMode:!0,sortDirection:"descending"}),d.default.createElement(r.TBody,null,s.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({actionableMode:!0,index:t+1,isSelected:!1,key:t},e))})))},{id:"resized-column",label:"Column Resized (Actionable mode)",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i,actionableMode:!0,singleColumnWidth:"300px"}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({actionableMode:!0,index:t+1,isSelected:!1,key:t},e))})))}],t.examples=[{id:"header-icon-menu-button",label:"Header Icon and Menu Button",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columnHeaderIcons:f,columns:i,hasMenus:!0}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e))})))},{id:"header-menu-button",label:"Header Menu Button",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i,hasMenus:!0}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e))})))},{id:"cell-icon",label:"Cell Icon",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e,{hasScores:!0}))})))},{id:"product-listing",label:"Product Listing",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:m,actionableMode:!0,hasNoRowSelection:!0}),d.default.createElement(r.TBody,null,p.map(function(e,t){return d.default.createElement(o.ProductDataTableTr,l({isSelected:!1,key:t,index:t+1},e,{actionableMode:!0}))})))},{id:"radio-group",label:"Radio Group",element:d.default.createElement(r.Table,{isBordered:!0,isFixedLayout:!0,isResizable:!0,type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i,hasSingleRowSelect:!0}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({hasSingleRowSelect:!0,index:t+1,key:t},e))})))},{id:"data-table-no-borders",label:"No borders",element:d.default.createElement(r.Table,{isFixedLayout:!0,isResizable:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e))})))},{id:"data-table-headless",label:"Headless",element:d.default.createElement(r.Table,{hasHiddenHeader:!0,isBordered:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{isHidden:!0,columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e))})))},{id:"data-table-headless-no-borders",label:"Headless with no borders",element:d.default.createElement(r.Table,{hasHiddenHeader:!0,selectionType:"multiple",type:"advanced"},d.default.createElement(r.AdvancedDataTableHead,{isHidden:!0,columns:i}),d.default.createElement(r.TBody,null,u.map(function(e,t){return d.default.createElement(o.AdvancedDataTableTr,l({isSelected:!1,key:t,index:t+1},e))})))}]}});