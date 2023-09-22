import{j as o,aq as t,a3 as s,n as r,c as e,q as n,ad as a,b as i,v as m,a9 as c,w as p,d5 as f}from"./calfSystem-4830a18d.js"
import{M as d,d as u,g as j,c as l,e as h,i as b}from"./injectStoreItems-bf814ef1.js"
import{c as y}from"./chunk-cd03a005.js"
import{c as g}from"./closestTable-082cc634.js"
import{c as w}from"./closestTr-a662daf2.js"
import{r as k}from"./removeRow-2b7fbdc8.js"
import{e as I}from"./errorDialog-9e633a62.js"
import{e as v,s as D}from"./selfIdIs-5b3a78ee.js"
import{s as N}from"./simpleCheckbox-ed7e63fb.js"
import"./dropItem-09106184.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./isArray-09a53da7.js"
import"./sendItems-2a530a59.js"
import"./basicItem-cb072d2b.js"
import"./htmlResult-7fa1a7c5.js"
import"./InfoBoxFrom-29ddbf6c.js"
import"./each-1f09c43f.js"
import"./doStatTotal-331c56c0.js"
import"./arrayFromRadioNodeList-08483635.js"
import"./daLoadInventory-9c7bd6b5.js"
import"./flattenItems-03659160.js"
import"./LinkButtonBracketed-0fb81602.js"
import"./LinkButton-59368dc4.js"
import"./batch-54067b0c.js"
import"./isChecked-3968d2ec.js"
function x(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function L(o,t){const s=await u(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function $(o){r("dropitems","Move to Folder"),y(30,x()).forEach(e(L,o.detail))}function B(o){j().forEach((t=>{t.checked=Boolean(o)}))}const C="ajaxifyDestroy",F="disableDestroyPrompts"
let S=0,A=1,M=0
async function R(o){const t=await l(o.map((o=>o.value)))
I(t),t.s&&o.forEach(k)}function T(o){o.returnValue&&S&&(o.preventDefault(),y(30,x()).forEach(R),r("dropitems","Destroy by AJAX"))}function q(){return r("dropitems","Destroy without prompts"),!0}function W(){window.confirmDestroy=A?q:M}function _(){S=!S,c(C,S)}function H(){A=!A,c(F,A),W()}const J=()=>v([[D(C),_],[D(F),H]])
const O=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new d({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(E),s).$on("move",$)},b,function(){const o=n('input[type="submit"]')
o&&(!function(o){m(o.parentNode,`&nbsp;&nbsp;${N(C)}&nbsp;&nbsp;${N(F)}`),i(o.parentNode,"change",J())}(o),A=a(F),M=window.confirmDestroy,W(),S=a(C),i(document.forms[0],"submit",T),window.check=B)}]
function P(){!p()&&h()&&f(O)}export{P as default}
//# sourceMappingURL=injectProfileDropItems-0b787bea.js.map
