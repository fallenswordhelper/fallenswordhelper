import{h as o,j as s,l as t,a$ as e,n as r,s as a,c as n,q as i,az as m,b as c,a2 as p,au as f,a3 as d,e1 as l}from"./calfSystem-CIuUjh4H.js"
import{M as u,d as j,g as h,c as y,e as b,i as g}from"./injectStoreItems-gGhukT34.js"
import{c as w}from"./chunk-zr9rAXvK.js"
import{c as D}from"./closestTable-CAaKFM8t.js"
import{r as v}from"./removeRow-BDx66EIf.js"
import{e as x}from"./errorDialog-B4_TjdGG.js"
import{e as I,s as N}from"./selfIdIs-BaGxtKvW.js"
import{s as k}from"./simpleCheckbox-D1e9ej5E.js"
import"./dropItem-DR1RMM8e.js"
import"./dialog-DuiKsz8O.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Bk-KVFC4.js"
import"./htmlResult-Cc7d59m8.js"
import"./InfoBoxFrom-BOMuQUn_.js"
import"./doStatTotal-CiVM0LYo.js"
import"./arrayFromRadioNodeList-C1e_UvkY.js"
import"./batch-BqkctEiX.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const C=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function F(o,s){const t=await j(o,s.map(o=>o.value))
t?.s&&s.forEach(v)}function S(o){a("dropitems","Move to Folder"),w(30,E()).forEach(n(F,o))}function $(o){h().forEach(s=>{s.checked=Boolean(o)})}const A="ajaxifyDestroy",M="disableDestroyPrompts"
let P=0,R=1,T=0
async function B(o){const s=await y(o.map(o=>o.value))
x(s),s.s&&o.forEach(v)}function V(o){o.returnValue&&P&&(o.preventDefault(),w(30,E()).forEach(B),a("dropitems","Destroy by AJAX"))}function X(){return a("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=R?X:T}function z(){a("dropitems","handleAjaxifyPref"),P=!P,f(A,P)}function H(){a("dropitems","handleDestroyPref"),R=!R,f(M,R),q()}function J(o){p(o.parentNode,`&nbsp;&nbsp;${k(A)}&nbsp;&nbsp;${k(M)}`),c(o.parentNode,"change",I([[N(A),z],[N(M),H]]))}const K=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(D(t[0])),a=t.map(C)
r(u,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:S},target:e.parentNode})},g,function(){const o=i('input[type="submit"]')
o&&(J(o),R=m(M),T=window.confirmDestroy,q(),P=m(A),c(document.forms[0],"submit",V),window.check=$)}]
function L(){!d()&&b()&&l(K)}export{L as default}
//# sourceMappingURL=injectProfileDropItems-BXUuAQNO.js.map
