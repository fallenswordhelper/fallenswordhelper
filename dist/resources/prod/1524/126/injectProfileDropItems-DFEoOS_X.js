import{k as o,av as t,a8 as s,s as e,E as r,c as n,q as a,ai as i,b as m,v as c,ae as p,w as f,dk as d}from"./calfSystem-DG-hTKTe.js"
import{M as u,d as l,g as j,c as h,e as y,i as b}from"./injectStoreItems-Cr55HEoA.js"
import{c as g}from"./closestTable-D7rIDkFm.js"
import{c as w}from"./closestTr-DvNEEcx-.js"
import{r as I}from"./removeRow-BuxJydXV.js"
import{e as k}from"./errorDialog-B4_TjdGG.js"
import{e as v,s as D}from"./selfIdIs-DqqQO7iy.js"
import{s as E}from"./simpleCheckbox-BDRynpVe.js"
import"./dropItem-BmNPHpI-.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-CIBVyXnL.js"
import"./basicItem-D_odB7Bh.js"
import"./htmlResult-C_pD8VRg.js"
import"./InfoBoxFrom-C6g18HtQ.js"
import"./doStatTotal-DL0-MbuC.js"
import"./arrayFromRadioNodeList-DzGV_PGg.js"
import"./daLoadInventory-BotDx7uo.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-DughXCmu.js"
import"./LinkButton-78VHCVdQ.js"
import"./batch--CorDD1V.js"
import"./isChecked-D_0do7nT.js"
function x(){return o('[name="removeIndex[]"]:checked')}const N=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function $(o,t){const s=await l(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function B(o){e("dropitems","Move to Folder"),r(30,x()).forEach(n($,o.detail))}function A(o){j().forEach((t=>{t.checked=Boolean(o)}))}const C="ajaxifyDestroy",L="disableDestroyPrompts"
let S=0,F=1,M=0
async function P(o){const t=await h(o.map((o=>o.value)))
k(t),t.s&&o.forEach(I)}function R(o){o.returnValue&&S&&(o.preventDefault(),r(30,x()).forEach(P),e("dropitems","Destroy by AJAX"))}function T(){return e("dropitems","Destroy without prompts"),!0}function K(){window.confirmDestroy=F?T:M}function Z(){e("dropitems","handleAjaxifyPref"),S=!S,p(C,S)}function q(){e("dropitems","handleDestroyPref"),F=!F,p(L,F),K()}const G=()=>v([[D(C),Z],[D(L),q]])
const J=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new u({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(N),s).$on("move",B)},b,function(){const o=a('input[type="submit"]')
o&&(!function(o){c(o.parentNode,`&nbsp;&nbsp;${E(C)}&nbsp;&nbsp;${E(L)}`),m(o.parentNode,"change",G())}(o),F=i(L),M=window.confirmDestroy,K(),S=i(C),m(document.forms[0],"submit",R),window.check=A)}]
function O(){!f()&&y()&&d(J)}export{O as default}
//# sourceMappingURL=injectProfileDropItems-DFEoOS_X.js.map
