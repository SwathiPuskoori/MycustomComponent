(()=>{"use strict";var e={102:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,".custom-panel-header {\n    padding: 10px;\n    background-color: #f5f5f5;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n\n.step-label {\n    display: flex;\n    align-items: center;\n    width: 100%; /* Ensure full width */\n}\n\n.step-label.justify-content-between {\n    justify-content: space-between;\n}\n\n.step-number {\n    background-color: green;\n    color: white;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n    font-size: 14px;\n}\n\n.toggle-icon {\n    font-size: 12px;\n    transition: transform 0.3s;\n    margin-left: auto; /* Push the icon to the far right */\n}\n\n.panel-content {\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-top: none;\n    border-radius: 0 0 5px 5px;\n}\n",""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var p=t(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;const o=[{weight:1,type:"textfield",label:"Step Number",tooltip:"Step Number to be displayed on Panel Header",key:"stepNumber",input:!0,defaultValue:1}],r=Formio.Components.components.panel.editForm;function a(...e){return r([{key:"display",components:o}],...e)}var i=t(72),s=t.n(i),c=t(825),l=t.n(c),p=t(659),d=t.n(p),u=t(56),m=t.n(u),f=t(540),v=t.n(f),b=t(113),h=t.n(b),y=t(102),g={};g.styleTagTransform=h(),g.setAttributes=m(),g.insert=d().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=v(),s()(y.A,g),y.A&&y.A.locals&&y.A.locals;const x=Formio.Components.components.panel;Formio.Templates.defaultTemplates.myTemplate={form:function(e){console.log("Rendering Custom Panel Template with Context:",e);var n="";return Array.prototype.join,n+`\n    <div class="mb-2 card border panel-with-step">\n      ${!e.component.hideLabel||e.builder||e.component.collapsible||e.component.tooltip?`\n        <div \n          class="custom-panel-header ${e.transform("class","bg-"+e.component.theme)||""}"\n          ${e.component.collapsible?'tabindex="0"':""}\n          role="button"\n          aria-expanded="${!e.component.collapsible||!e.collapsed}"\n          aria-controls="${e.instance?.id}-${e.component.key}"\n          ref="header"\n        >\n          <div class="step-label d-flex align-items-center ${e.component.collapsible?"justify-content-between":""}">\n            <div class="step-number">\n              ${e.component.stepNumber||""}\n            </div>\n            <span class="ml-2">\n              ${e.component.title||"Step Panel"}\n            </span>\n            ${e.component.collapsible?`\n              <div class="toggle-icon" style="transform: ${e.collapsed?"rotate(180deg)":"rotate(0deg)"};">\n                ▼\n              </div>\n            `:""}\n          </div>\n        </div>\n      `:""}\n      ${!e.collapsed||e.builder?`\n        <div \n          class="card-body" \n          ref="${e.nestedKey}" \n          id="${e.instance?.id}-${e.component.key}"\n        >\n          ${e.children}\n        </div>\n      `:""}\n    </div>\n  `}};class w extends x{static editForm=a;static schema(...e){return x.schema({type:"customPanel",label:"Custom Panel",key:"customPanel",stepNumber:"1",title:"Custom Panel",theme:"default",breadcrumb:"default",components:[],clearOnHide:!1,input:!1,tableView:!1,persistent:!1})}static get builderInfo(){return{title:"Custom Panel",icon:"list-alt",group:"layout",documentation:"/userguide/form-building/layout-components#panel",showPreview:!1,weight:20,schema:w.schema()}}get templateName(){return"myTemplate"}}Formio.use([{components:{customPanel:w}}])})();