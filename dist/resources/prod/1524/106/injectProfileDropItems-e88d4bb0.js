import{j as o,as as t,a5 as s,n as r,c as e,q as n,af as a,b as i,v as m,ab as c,w as p,d6 as f}from"./calfSystem-076d7a01.js"
import{M as d,d as u,g as j,c as l,e as h,i as y}from"./injectStoreItems-f55a9521.js"
import{c as b}from"./chunk-cd03a005.js"
import{c as g}from"./closestTable-3ad39b1c.js"
import{c as w}from"./closestTr-efa2e666.js"
import{r as v}from"./removeRow-e9174353.js"
import{e as I}from"./errorDialog-91872536.js"
import{e as k,s as D}from"./selfIdIs-d4f625f7.js"
import{s as N}from"./simpleCheckbox-fd13ef54.js"
import"./dropItem-2080adb1.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-e8b1b119.js"
import"./htmlResult-0d37532a.js"
import"./InfoBoxFrom-3af9d1fa.js"
import"./each-d53d627d.js"
import"./doStatTotal-5f1c8221.js"
import"./arrayFromRadioNodeList-428f39fd.js"
import"./getInventoryById-83dceb0e.js"
import"./getInventory-f6a60dce.js"
import"./inventory-c0d6c5e3.js"
import"./LinkButtonBracketed-430703c5.js"
import"./LinkButton-9974bf66.js"
import"./batch-87a59312.js"
import"./isChecked-3968d2ec.js"
function x(){return o('[name="removeIndex[]"]:checked')}const B=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function E(o,t){const s=await u(o,t.map((o=>o.value)))
s?.s&&t.forEach(v)}function $(o){r("dropitems","Move to Folder"),b(30,x()).forEach(e(E,o.detail))}function C(o){j().forEach((t=>{t.checked=Boolean(o)}))}const F="ajaxifyDestroy",M="disableDestroyPrompts"
let R=0,S=1,T=0
async function L(o){const t=await l(o.map((o=>o.value)))
I(t),t.s&&o.forEach(v)}function X(o){o.returnValue&&R&&(o.preventDefault(),b(30,x()).forEach(L),r("dropitems","Destroy by AJAX"))}function A(){return r("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=S?A:T}function J(){R=!R,c(F,R)}function O(){S=!S,c(M,S),q()}const P=()=>k([[D(F),J],[D(M),O]])
const V=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new d({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(B),s).$on("move",$)},y,function(){const o=n('input[type="submit"]')
o&&(!function(o){m(o.parentNode,`&nbsp;&nbsp;${N(F)}&nbsp;&nbsp;${N(M)}`),i(o.parentNode,"change",P())}(o),S=a(M),T=window.confirmDestroy,q(),R=a(F),i(document.forms[0],"submit",X),window.check=C)}]
function Z(){!p()&&h()&&f(V)}export{Z as default}
//# sourceMappingURL=injectProfileDropItems-e88d4bb0.js.map
