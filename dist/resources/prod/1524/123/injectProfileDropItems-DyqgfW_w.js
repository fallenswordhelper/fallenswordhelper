import{k as o,av as t,a8 as s,s as e,E as r,c as n,q as a,ai as i,b as m,v as c,ae as p,w as f,dm as d}from"./calfSystem-wTzwei3t.js"
import{M as u,d as l,g as j,c as h,e as y,i as b}from"./injectStoreItems-BjnoarIn.js"
import{c as g}from"./closestTable-D1tzatJG.js"
import{c as w}from"./closestTr-Cd9iMbp0.js"
import{r as I}from"./removeRow-BE9TzCxS.js"
import{e as v}from"./errorDialog-B4_TjdGG.js"
import{e as D,s as k}from"./selfIdIs-BRou5IMG.js"
import{s as E}from"./simpleCheckbox-o27N70bG.js"
import"./dropItem-Ft0uR3YN.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-DxBWpXb4.js"
import"./basicItem-SrvrR49K.js"
import"./htmlResult-m0gx1bEM.js"
import"./InfoBoxFrom-CbEg_Jt0.js"
import"./doStatTotal-D5BIInIA.js"
import"./arrayFromRadioNodeList-CJ3Tr0Fj.js"
import"./daLoadInventory--DugNLq5.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-B_e7MAq0.js"
import"./LinkButton-CJ-gy4K4.js"
import"./batch-B2xhIuNE.js"
import"./isChecked-D_0do7nT.js"
function x(){return o('[name="removeIndex[]"]:checked')}const N=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function $(o,t){const s=await l(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function B(o){e("dropitems","Move to Folder"),r(30,x()).forEach(n($,o.detail))}function A(o){j().forEach((t=>{t.checked=Boolean(o)}))}const C="ajaxifyDestroy",L="disableDestroyPrompts"
let S=0,F=1,M=0
async function P(o){const t=await h(o.map((o=>o.value)))
v(t),t.s&&o.forEach(I)}function R(o){o.returnValue&&S&&(o.preventDefault(),r(30,x()).forEach(P),e("dropitems","Destroy by AJAX"))}function T(){return e("dropitems","Destroy without prompts"),!0}function K(){window.confirmDestroy=F?T:M}function Z(){e("dropitems","handleAjaxifyPref"),S=!S,p(C,S)}function q(){e("dropitems","handleDestroyPref"),F=!F,p(L,F),K()}const G=()=>D([[k(C),Z],[k(L),q]])
const J=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new u({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(N),s).$on("move",B)},b,function(){const o=a('input[type="submit"]')
o&&(!function(o){c(o.parentNode,`&nbsp;&nbsp;${E(C)}&nbsp;&nbsp;${E(L)}`),m(o.parentNode,"change",G())}(o),F=i(L),M=window.confirmDestroy,K(),S=i(C),m(document.forms[0],"submit",R),window.check=A)}]
function O(){!f()&&y()&&d(J)}export{O as default}
//# sourceMappingURL=injectProfileDropItems-DyqgfW_w.js.map
