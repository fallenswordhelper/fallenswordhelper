import{k as o,av as t,a8 as s,s as e,E as r,c as n,q as a,ai as i,b as m,v as c,ae as p,w as f,dj as d}from"./calfSystem-Bit7wh4p.js"
import{M as u,d as l,g as j,c as h,e as y,i as b}from"./injectStoreItems-BccHUCiA.js"
import{c as g}from"./closestTable-CmNjL45D.js"
import{c as w}from"./closestTr-7PFr_dNI.js"
import{r as I}from"./removeRow-CN4whJok.js"
import{e as k}from"./errorDialog-B4_TjdGG.js"
import{e as v,s as D}from"./selfIdIs-b2PKHhPf.js"
import{s as E}from"./simpleCheckbox-B_EbohVT.js"
import"./dropItem-CTgJ-63J.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-LdjNuxgR.js"
import"./basicItem-Dcz7UpP9.js"
import"./htmlResult-cFuEh6cZ.js"
import"./InfoBoxFrom-B7gWwsy_.js"
import"./doStatTotal-BMszkFli.js"
import"./arrayFromRadioNodeList-CsqL6Dd-.js"
import"./daLoadInventory-BRjJiMm5.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-Z7zL1rKJ.js"
import"./LinkButton-DERL_IYP.js"
import"./batch-DXm8fBED.js"
import"./isChecked-D_0do7nT.js"
function x(){return o('[name="removeIndex[]"]:checked')}const N=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await l(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function L(o){e("dropitems","Move to Folder"),r(30,x()).forEach(n(B,o.detail))}function $(o){j().forEach((t=>{t.checked=Boolean(o)}))}const A="ajaxifyDestroy",C="disableDestroyPrompts"
let P=0,R=1,S=0
async function F(o){const t=await h(o.map((o=>o.value)))
k(t),t.s&&o.forEach(I)}function M(o){o.returnValue&&P&&(o.preventDefault(),r(30,x()).forEach(F),e("dropitems","Destroy by AJAX"))}function T(){return e("dropitems","Destroy without prompts"),!0}function J(){window.confirmDestroy=R?T:S}function Z(){e("dropitems","handleAjaxifyPref"),P=!P,p(A,P)}function q(){e("dropitems","handleDestroyPref"),R=!R,p(C,R),J()}const G=()=>v([[D(A),Z],[D(C),q]])
const U=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new u({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(N),s).$on("move",L)},b,function(){const o=a('input[type="submit"]')
o&&(!function(o){c(o.parentNode,`&nbsp;&nbsp;${E(A)}&nbsp;&nbsp;${E(C)}`),m(o.parentNode,"change",G())}(o),R=i(C),S=window.confirmDestroy,J(),P=i(A),m(document.forms[0],"submit",M),window.check=$)}]
function V(){!f()&&y()&&d(U)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-Dv37tgG8.js.map