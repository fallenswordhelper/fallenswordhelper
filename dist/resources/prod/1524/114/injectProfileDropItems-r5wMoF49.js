import{k as o,aq as t,a3 as s,s as r,c as e,q as n,ad as a,b as i,v as m,a9 as c,w as p,d6 as f}from"./calfSystem-rn9Rc_nF.js"
import{M as d,d as u,g as l,c as j,e as h,i as y}from"./injectStoreItems-a9KYGcRV.js"
import{c as b}from"./chunk-joYXv2f3.js"
import{c as w}from"./closestTable-CpAyN3ci.js"
import{c as g}from"./closestTr-Vv3gA4eP.js"
import{r as k}from"./removeRow-jMAxcwz2.js"
import{e as D}from"./errorDialog-UVurWbsP.js"
import{e as I,s as v}from"./selfIdIs-UTusKVQ8.js"
import{s as N}from"./simpleCheckbox-lyJmzCW_.js"
import"./dropItem-W7Fzm9tF.js"
import"./dialog-ewu4mmhi.js"
import"./dialogMsg-6-T2JNn4.js"
import"./isArray-bNviZzJA.js"
import"./sendItems-CQVrjDT-.js"
import"./basicItem-CsFLK93E.js"
import"./htmlResult-nOFsovaK.js"
import"./InfoBoxFrom-rStBtUt6.js"
import"./each-FVHw1i8T.js"
import"./doStatTotal-5BSd8atf.js"
import"./arrayFromRadioNodeList-NDVhT0zI.js"
import"./daLoadInventory-HiTfz646.js"
import"./flattenItems-OuxkqZMH.js"
import"./LinkButtonBracketed-vDzVLYI2.js"
import"./LinkButton-WQXidA0A.js"
import"./batch-Xe3JA1CU.js"
import"./isChecked-k2ijSL8v.js"
function x(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await u(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function C(o){r("dropitems","Move to Folder"),b(30,x()).forEach(e(B,o.detail))}function $(o){l().forEach((t=>{t.checked=Boolean(o)}))}const A="ajaxifyDestroy",F="disableDestroyPrompts"
let L=0,R=1,S=0
async function T(o){const t=await j(o.map((o=>o.value)))
D(t),t.s&&o.forEach(k)}function M(o){o.returnValue&&L&&(o.preventDefault(),b(30,x()).forEach(T),r("dropitems","Destroy by AJAX"))}function P(){return r("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=R?P:S}function Y(){r("dropitems","handleAjaxifyPref"),L=!L,c(A,L)}function H(){r("dropitems","handleDestroyPref"),R=!R,c(F,R),q()}const J=()=>I([[v(A),Y],[v(F),H]])
const V=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=g(w(t[0]));(function(o,t){return new d({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(E),s).$on("move",C)},y,function(){const o=n('input[type="submit"]')
o&&(!function(o){m(o.parentNode,`&nbsp;&nbsp;${N(A)}&nbsp;&nbsp;${N(F)}`),i(o.parentNode,"change",J())}(o),R=a(F),S=window.confirmDestroy,q(),L=a(A),i(document.forms[0],"submit",M),window.check=$)}]
function W(){!p()&&h()&&f(V)}export{W as default}
//# sourceMappingURL=injectProfileDropItems-r5wMoF49.js.map
