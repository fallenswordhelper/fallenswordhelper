import{k as o,av as t,a8 as s,s as e,E as r,c as n,q as a,ai as i,b as m,v as c,ae as p,w as f,dm as d}from"./calfSystem-C4gAE-9q.js"
import{M as u,d as l,g as j,c as h,e as y,i as b}from"./injectStoreItems-DEuKG-Jp.js"
import{c as g}from"./closestTable-C3mvinmA.js"
import{c as w}from"./closestTr-DcbdgdML.js"
import{r as I}from"./removeRow-C0g020lu.js"
import{e as v}from"./errorDialog-B4_TjdGG.js"
import{e as D,s as k}from"./selfIdIs-BmLkLwKv.js"
import{s as E}from"./simpleCheckbox-D5LhvHMv.js"
import"./dropItem-C7rgTn_j.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-DMntVevw.js"
import"./basicItem-CQKM8zr0.js"
import"./htmlResult-Bgd43XFN.js"
import"./InfoBoxFrom-KbUnR7SN.js"
import"./doStatTotal-Bhm6O3Og.js"
import"./arrayFromRadioNodeList-BEK7MItB.js"
import"./daLoadInventory-CrkuA4Ey.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-jMU7wdWi.js"
import"./LinkButton-Ccne2AMZ.js"
import"./batch-CkGMyLju.js"
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
//# sourceMappingURL=injectProfileDropItems-CPhKx3Pi.js.map
