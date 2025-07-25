import{k as o,l as s,n as t,b0 as e,u as r,s as a,ad as n,c as i,q as m,aB as c,b as p,a3 as f,aw as d,a4 as l,eg as u}from"./calfSystem-C1X5YxJZ.js"
import{M as j,d as h,g as y,c as b,e as g,i as w}from"./injectStoreItems-CzW59b6O.js"
import{c as D}from"./closestTable-STrxtv_E.js"
import{r as I}from"./removeRow-DK0NC7vS.js"
import{e as v}from"./errorDialog-B4_TjdGG.js"
import{e as x,s as N}from"./selfIdIs-IA5PHYBh.js"
import{s as k}from"./simpleCheckbox-nwywzlgZ.js"
import"./dropItem-C6AxxS-X.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-CnCwTLoU.js"
import"./htmlResult-Btqom80J.js"
import"./InfoBoxFrom-CALdsMkd.js"
import"./doStatTotal-DtCeT0Ju.js"
import"./arrayFromRadioNodeList-BtFcie8u.js"
import"./batch-BNBFzvJw.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const F=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function C(o,s){const t=await h(o,s.map((o=>o.value)))
t?.s&&s.forEach(I)}function S(o){a("dropitems","Move to Folder"),n(30,E()).forEach(i(C,o))}function T(o){y().forEach((s=>{s.checked=Boolean(o)}))}const A="ajaxifyDestroy",B="disableDestroyPrompts"
let M=0,P=1,R=0
async function $(o){const s=await b(o.map((o=>o.value)))
v(s),s.s&&o.forEach(I)}function L(o){o.returnValue&&M&&(o.preventDefault(),n(30,E()).forEach($),a("dropitems","Destroy by AJAX"))}function V(){return a("dropitems","Destroy without prompts"),!0}function _(){window.confirmDestroy=P?V:R}function q(){a("dropitems","handleAjaxifyPref"),M=!M,d(A,M)}function J(){a("dropitems","handleDestroyPref"),P=!P,d(B,P),_()}const X=()=>x([[N(A),q],[N(B),J]])
const z=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(D(t[0])),a=t.map(F)
r(j,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:S},target:e.parentNode})},w,function(){const o=m('input[type="submit"]')
o&&(!function(o){f(o.parentNode,`&nbsp;&nbsp;${k(A)}&nbsp;&nbsp;${k(B)}`),p(o.parentNode,"change",X())}(o),P=c(B),R=window.confirmDestroy,_(),M=c(A),p(document.forms[0],"submit",L),window.check=T)}]
function G(){!l()&&g()&&u(z)}export{G as default}
//# sourceMappingURL=injectProfileDropItems-Vcut43yv.js.map
