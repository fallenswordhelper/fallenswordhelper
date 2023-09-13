import{j as o,as as t,a5 as s,n as r,c as e,q as n,af as a,b as i,v as m,ab as c,w as p,d6 as f}from"./calfSystem-2f15e074.js"
import{M as d,d as u,g as l,c as j,e as h,i as b}from"./injectStoreItems-7478335d.js"
import{c as y}from"./chunk-cd03a005.js"
import{c as w}from"./closestTable-23acbcda.js"
import{c as g}from"./closestTr-ce435b3a.js"
import{r as k}from"./removeRow-28c95da7.js"
import{e as I}from"./errorDialog-91872536.js"
import{e as v,s as D}from"./selfIdIs-5290eb66.js"
import{s as N}from"./simpleCheckbox-45958795.js"
import"./dropItem-e1f6f6f1.js"
import"./dialog-d1c54012.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-fd48f4bf.js"
import"./htmlResult-27fd54be.js"
import"./InfoBoxFrom-20286709.js"
import"./each-d93fc3a2.js"
import"./doStatTotal-86e70b40.js"
import"./arrayFromRadioNodeList-fd82689b.js"
import"./daLoadInventory-d83b540d.js"
import"./flattenItems-d494759a.js"
import"./LinkButtonBracketed-0c040929.js"
import"./LinkButton-5d5c853c.js"
import"./batch-70cc157a.js"
import"./isChecked-3968d2ec.js"
function E(){return o('[name="removeIndex[]"]:checked')}const x=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await u(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function S(o){r("dropitems","Move to Folder"),y(30,E()).forEach(e(B,o.detail))}function $(o){l().forEach((t=>{t.checked=Boolean(o)}))}const C="ajaxifyDestroy",F="disableDestroyPrompts"
let L=0,M=1,R=0
async function T(o){const t=await j(o.map((o=>o.value)))
I(t),t.s&&o.forEach(k)}function X(o){o.returnValue&&L&&(o.preventDefault(),y(30,E()).forEach(T),r("dropitems","Destroy by AJAX"))}function A(){return r("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=M?A:R}function J(){L=!L,c(C,L)}function P(){M=!M,c(F,M),q()}const Q=()=>v([[D(C),J],[D(F),P]])
const V=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=g(w(t[0]));(function(o,t){return new d({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(x),s).$on("move",S)},b,function(){const o=n('input[type="submit"]')
o&&(!function(o){m(o.parentNode,`&nbsp;&nbsp;${N(C)}&nbsp;&nbsp;${N(F)}`),i(o.parentNode,"change",Q())}(o),M=a(F),R=window.confirmDestroy,q(),L=a(C),i(document.forms[0],"submit",X),window.check=$)}]
function Z(){!p()&&h()&&f(V)}export{Z as default}
//# sourceMappingURL=injectProfileDropItems-cb961e12.js.map
