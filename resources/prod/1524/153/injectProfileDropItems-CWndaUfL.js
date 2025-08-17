import{h as o,j as s,l as t,a_ as e,n as r,s as a,ab as n,c as i,q as m,az as c,b as p,a1 as f,au as d,a2 as l,ea as u}from"./calfSystem-CT1aM4VG.js"
import{M as j,d as h,g as y,c as b,e as g,i as w}from"./injectStoreItems-Bqi_Wg5n.js"
import{c as D}from"./closestTable-C24mp168.js"
import{r as I}from"./removeRow-6EOzSfxQ.js"
import{e as x}from"./errorDialog-B4_TjdGG.js"
import{e as v,s as E}from"./selfIdIs-CyrWimrU.js"
import{s as N}from"./simpleCheckbox-DX3v3qR1.js"
import"./dropItem-n_LbOoQu.js"
import"./dialog-CiSCF2So.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-pa-aKwib.js"
import"./htmlResult-DHLyE8PQ.js"
import"./InfoBoxFrom-Cozeh7z2.js"
import"./doStatTotal--TaVGr_k.js"
import"./arrayFromRadioNodeList-Dl9Rr9JB.js"
import"./batch-CVoa0La2.js"
import"./isChecked-D_0do7nT.js"
function k(){return o('[name="removeIndex[]"]:checked')}const C=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function F(o,s){const t=await h(o,s.map((o=>o.value)))
t?.s&&s.forEach(I)}function S(o){a("dropitems","Move to Folder"),n(30,k()).forEach(i(F,o))}function T(o){y().forEach((s=>{s.checked=Boolean(o)}))}const $="ajaxifyDestroy",A="disableDestroyPrompts"
let M=0,P=1,R=0
async function B(o){const s=await b(o.map((o=>o.value)))
x(s),s.s&&o.forEach(I)}function L(o){o.returnValue&&M&&(o.preventDefault(),n(30,k()).forEach(B),a("dropitems","Destroy by AJAX"))}function V(){return a("dropitems","Destroy without prompts"),!0}function _(){window.confirmDestroy=P?V:R}function q(){a("dropitems","handleAjaxifyPref"),M=!M,d($,M)}function z(){a("dropitems","handleDestroyPref"),P=!P,d(A,P),_()}const H=()=>v([[E($),q],[E(A),z]])
const J=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(D(t[0])),a=t.map(C)
r(j,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:S},target:e.parentNode})},w,function(){const o=m('input[type="submit"]')
o&&(!function(o){f(o.parentNode,`&nbsp;&nbsp;${N($)}&nbsp;&nbsp;${N(A)}`),p(o.parentNode,"change",H())}(o),P=c(A),R=window.confirmDestroy,_(),M=c($),p(document.forms[0],"submit",L),window.check=T)}]
function X(){!l()&&g()&&u(J)}export{X as default}
//# sourceMappingURL=injectProfileDropItems-CWndaUfL.js.map
