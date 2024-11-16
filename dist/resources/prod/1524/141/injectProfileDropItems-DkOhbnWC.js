import{n as o,a8 as t,ax as s,s as e,E as r,b as n,q as a,v as i,o as m,ad as c,ai as p,w as f,du as d}from"./calfSystem-Blt4DbaE.js"
import{M as u,d as l,c as j,g as h,e as y,i as b}from"./injectStoreItems-DinmFb6T.js"
import{c as w}from"./closestTable-Ddgm5m0P.js"
import{c as g}from"./closestTr-BGA5O97h.js"
import{r as I}from"./removeRow-fZEFolwL.js"
import{e as v}from"./errorDialog-B4_TjdGG.js"
import{e as D,s as k}from"./selfIdIs-B-6Z33Zn.js"
import{s as x}from"./simpleCheckbox-CjFtWivg.js"
import"./dropItem-B8Cjt0uN.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-C0afaFYQ.js"
import"./basicItem-B4VQEJwm.js"
import"./htmlResult-CMCcQMTR.js"
import"./InfoBoxFrom-CMB3qrKm.js"
import"./doStatTotal-CybaE_J0.js"
import"./arrayFromRadioNodeList-Cz0XwDMw.js"
import"./daLoadInventory-XbR6QBDO.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-C9l9Kpoo.js"
import"./LinkButton-CTQrdC0s.js"
import"./batch-C_j5R0ng.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const N=o=>({id:s(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function B(o,t){const s=await l(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function C(o){e("dropitems","Move to Folder"),r(30,E()).forEach(n(B,o.detail))}function L(o){h().forEach((t=>{t.checked=Boolean(o)}))}const A="ajaxifyDestroy",S="disableDestroyPrompts"
let $=0,F=1,M=0
async function P(o){const t=await j(o.map((o=>o.value)))
v(t),t.s&&o.forEach(I)}function R(o){o.returnValue&&$&&(o.preventDefault(),r(30,E()).forEach(P),e("dropitems","Destroy by AJAX"))}function T(){return e("dropitems","Destroy without prompts"),!0}function X(){window.confirmDestroy=F?T:M}function _(){e("dropitems","handleAjaxifyPref"),$=!$,c(A,$)}function G(){e("dropitems","handleDestroyPref"),F=!F,c(S,F),X()}const V=()=>D([[k(A),_],[k(S),G]])
const Z=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=g(w(t[0]));(function(o,t){return new u({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(N),s).$on("move",C)},b,function(){const o=a('input[type="submit"]')
o&&(!function(o){i(o.parentNode,`&nbsp;&nbsp;${x(A)}&nbsp;&nbsp;${x(S)}`),m(o.parentNode,"change",V())}(o),F=p(S),M=window.confirmDestroy,X(),$=p(A),m(document.forms[0],"submit",R),window.check=L)}]
function q(){!f()&&y()&&d(Z)}export{q as default}
//# sourceMappingURL=injectProfileDropItems-DkOhbnWC.js.map
