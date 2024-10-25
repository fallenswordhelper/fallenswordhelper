import{k as o,ax as t,a8 as s,s as e,E as r,c as n,q as a,ai as i,b as m,v as c,ae as p,w as f,du as d}from"./calfSystem-DZGU7L1H.js"
import{M as u,d as l,g as j,c as h,e as y,i as b}from"./injectStoreItems-ykILCZpH.js"
import{c as w}from"./closestTable-l_-6Im5S.js"
import{c as g}from"./closestTr-DSuc1sz5.js"
import{r as I}from"./removeRow-xDmaehsN.js"
import{e as k}from"./errorDialog-B4_TjdGG.js"
import{e as v,s as D}from"./selfIdIs-CyoVG24A.js"
import{s as x}from"./simpleCheckbox-BbjKGwmy.js"
import"./dropItem-DumvC7MN.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-mIC5FTeL.js"
import"./basicItem-kqPAOgo-.js"
import"./htmlResult-B3zmpRtx.js"
import"./InfoBoxFrom-Dua7pHNd.js"
import"./doStatTotal-BQCP8rxV.js"
import"./arrayFromRadioNodeList-Bo0z96cc.js"
import"./daLoadInventory-Cqd0pwNg.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-eY5gzHv8.js"
import"./LinkButton-DgLPvByR.js"
import"./batch-C43pMbNt.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const N=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await l(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function C(o){e("dropitems","Move to Folder"),r(30,E()).forEach(n(B,o.detail))}function L(o){j().forEach((t=>{t.checked=Boolean(o)}))}const A="ajaxifyDestroy",S="disableDestroyPrompts"
let $=0,F=1,M=0
async function P(o){const t=await h(o.map((o=>o.value)))
k(t),t.s&&o.forEach(I)}function R(o){o.returnValue&&$&&(o.preventDefault(),r(30,E()).forEach(P),e("dropitems","Destroy by AJAX"))}function T(){return e("dropitems","Destroy without prompts"),!0}function X(){window.confirmDestroy=F?T:M}function _(){e("dropitems","handleAjaxifyPref"),$=!$,p(A,$)}function G(){e("dropitems","handleDestroyPref"),F=!F,p(S,F),X()}const V=()=>v([[D(A),_],[D(S),G]])
const Z=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=g(w(t[0]));(function(o,t){return new u({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(N),s).$on("move",C)},b,function(){const o=a('input[type="submit"]')
o&&(!function(o){c(o.parentNode,`&nbsp;&nbsp;${x(A)}&nbsp;&nbsp;${x(S)}`),m(o.parentNode,"change",V())}(o),F=i(S),M=window.confirmDestroy,X(),$=i(A),m(document.forms[0],"submit",R),window.check=L)}]
function q(){!f()&&y()&&d(Z)}export{q as default}
//# sourceMappingURL=injectProfileDropItems-Cug8sWVL.js.map
