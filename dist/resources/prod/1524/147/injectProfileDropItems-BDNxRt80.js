import{l as o,ak as t,ad as s,aQ as e,s as r,H as n,d as a,q as i,aq as m,c,x as p,al as f,y as d,e7 as u}from"./calfSystem-BAeDn21M.js"
import{M as l,d as j,g as h,c as y,e as b,i as g}from"./injectStoreItems-DUmrq6np.js"
import{c as w}from"./closestTable-MoRx7kRV.js"
import{r as k}from"./removeRow-DpMXictD.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as x,s as D}from"./selfIdIs-BgcX5yEs.js"
import{s as v}from"./simpleCheckbox-BPGp9fPI.js"
import"./dropItem-BQ0Xs17T.js"
import"./dialog-nv9HUVDL.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-DarBfDoS.js"
import"./htmlResult-xgLNUcrb.js"
import"./InfoBoxFrom-B1Ay7uWz.js"
import"./doStatTotal-tZMNla4Z.js"
import"./arrayFromRadioNodeList-C6bFFPg-.js"
import"./daLoadInventory-CO87bGXD.js"
import"./basicItem-jvMH1Iol.js"
import"./flattenItems-BaJ8xXkd.js"
import"./LinkButtonBracketed-BBtbkBtS.js"
import"./LinkButton-DewvBSzv.js"
import"./batch-DC6H1oLU.js"
import"./isChecked-D_0do7nT.js"
function N(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:e(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await j(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function S(o){r("dropitems","Move to Folder"),n(30,N()).forEach(a(B,o.detail))}function C(o){h().forEach((t=>{t.checked=Boolean(o)}))}const L="ajaxifyDestroy",$="disableDestroyPrompts"
let A=0,F=1,M=0
async function P(o){const t=await y(o.map((o=>o.value)))
I(t),t.s&&o.forEach(k)}function R(o){o.returnValue&&A&&(o.preventDefault(),n(30,N()).forEach(P),r("dropitems","Destroy by AJAX"))}function q(){return r("dropitems","Destroy without prompts"),!0}function T(){window.confirmDestroy=F?q:M}function W(){r("dropitems","handleAjaxifyPref"),A=!A,f(L,A)}function H(){r("dropitems","handleDestroyPref"),F=!F,f($,F),T()}const J=()=>x([[D(L),W],[D($),H]])
const Q=[function(){const s=o('#pCC img[src$="/folder.png"]')
if(0===s.length)return
const e=t(w(s[0]));(function(o,t){return new l({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(s.map(E),e).$on("move",S)},g,function(){const o=i('input[type="submit"]')
o&&(!function(o){p(o.parentNode,`&nbsp;&nbsp;${v(L)}&nbsp;&nbsp;${v($)}`),c(o.parentNode,"change",J())}(o),F=m($),M=window.confirmDestroy,T(),A=m(L),c(document.forms[0],"submit",R),window.check=C)}]
function V(){!d()&&b()&&u(Q)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-BDNxRt80.js.map
