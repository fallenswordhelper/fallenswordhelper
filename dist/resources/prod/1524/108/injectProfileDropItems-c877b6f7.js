import{j as o,as as t,a5 as s,n as r,c as e,q as n,af as a,b as i,v as m,ab as c,w as p,d6 as f}from"./calfSystem-34913441.js"
import{M as d,d as u,g as j,c as l,e as h,i as y}from"./injectStoreItems-f610faea.js"
import{c as b}from"./chunk-cd03a005.js"
import{c as g}from"./closestTable-c0c63085.js"
import{c as w}from"./closestTr-316dea29.js"
import{r as v}from"./removeRow-80e7ce7f.js"
import{e as k}from"./errorDialog-91872536.js"
import{e as I,s as D}from"./selfIdIs-b575fb19.js"
import{s as N}from"./simpleCheckbox-7fbdc790.js"
import"./dropItem-5553463c.js"
import"./dialog-d1c54012.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-21d6a040.js"
import"./htmlResult-c11d9ef0.js"
import"./InfoBoxFrom-6333b8b3.js"
import"./each-6f7f5a14.js"
import"./doStatTotal-feca30dd.js"
import"./arrayFromRadioNodeList-3822df5e.js"
import"./getInventoryById-8022c7f6.js"
import"./getInventory-11b76fa4.js"
import"./inventory-ed909da9.js"
import"./LinkButtonBracketed-af66f16e.js"
import"./LinkButton-aabd28ac.js"
import"./batch-868086f2.js"
import"./isChecked-3968d2ec.js"
function E(){return o('[name="removeIndex[]"]:checked')}const x=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await u(o,t.map((o=>o.value)))
s?.s&&t.forEach(v)}function S(o){r("dropitems","Move to Folder"),b(30,E()).forEach(e(B,o.detail))}function $(o){j().forEach((t=>{t.checked=Boolean(o)}))}const C="ajaxifyDestroy",L="disableDestroyPrompts"
let F=0,M=1,R=0
async function T(o){const t=await l(o.map((o=>o.value)))
k(t),t.s&&o.forEach(v)}function A(o){o.returnValue&&F&&(o.preventDefault(),b(30,E()).forEach(T),r("dropitems","Destroy by AJAX"))}function W(){return r("dropitems","Destroy without prompts"),!0}function _(){window.confirmDestroy=M?W:R}function q(){F=!F,c(C,F)}function H(){M=!M,c(L,M),_()}const J=()=>I([[D(C),q],[D(L),H]])
const P=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new d({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(x),s).$on("move",S)},y,function(){const o=n('input[type="submit"]')
o&&(!function(o){m(o.parentNode,`&nbsp;&nbsp;${N(C)}&nbsp;&nbsp;${N(L)}`),i(o.parentNode,"change",J())}(o),M=a(L),R=window.confirmDestroy,_(),F=a(C),i(document.forms[0],"submit",A),window.check=$)}]
function Q(){!p()&&h()&&f(P)}export{Q as default}
//# sourceMappingURL=injectProfileDropItems-c877b6f7.js.map
