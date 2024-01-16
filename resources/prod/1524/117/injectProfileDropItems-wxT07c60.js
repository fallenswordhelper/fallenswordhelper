import{k as o,av as t,a8 as s,s as e,E as r,c as n,q as a,ai as i,b as m,v as c,ae as p,w as f,dj as d}from"./calfSystem-G1dN925O.js"
import{M as u,d as l,g as j,c as h,e as y,i as b}from"./injectStoreItems-I0fI8oCm.js"
import{c as g}from"./closestTable-Ggcgditt.js"
import{c as w}from"./closestTr-ewZQ2axu.js"
import{r as I}from"./removeRow-webtcGvz.js"
import{e as v}from"./errorDialog-UVurWbsP.js"
import{e as D,s as k}from"./selfIdIs-htpkhmDE.js"
import{s as x}from"./simpleCheckbox-8V_A9jhn.js"
import"./dropItem-vwbY25QT.js"
import"./dialog-RW6TE77j.js"
import"./dialogMsg-6-T2JNn4.js"
import"./isArray-bNviZzJA.js"
import"./sendItems-PYurMEkJ.js"
import"./basicItem-w_tHNJN5.js"
import"./htmlResult-kLg7g2OU.js"
import"./InfoBoxFrom-T4bMs0ax.js"
import"./doStatTotal-KBtXKxVq.js"
import"./arrayFromRadioNodeList-tL6xxVCt.js"
import"./daLoadInventory-20Qn11vN.js"
import"./flattenItems-OuxkqZMH.js"
import"./LinkButtonBracketed-LziWkhDZ.js"
import"./LinkButton-V4dDaBVi.js"
import"./batch-0zyYgCi-.js"
import"./isChecked-k2ijSL8v.js"
function E(){return o('[name="removeIndex[]"]:checked')}const N=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await l(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function C(o){e("dropitems","Move to Folder"),r(30,E()).forEach(n(B,o.detail))}function $(o){j().forEach((t=>{t.checked=Boolean(o)}))}const A="ajaxifyDestroy",F="disableDestroyPrompts"
let L=0,S=1,T=0
async function M(o){const t=await h(o.map((o=>o.value)))
v(t),t.s&&o.forEach(I)}function P(o){o.returnValue&&L&&(o.preventDefault(),r(30,E()).forEach(M),e("dropitems","Destroy by AJAX"))}function R(){return e("dropitems","Destroy without prompts"),!0}function _(){window.confirmDestroy=S?R:T}function Y(){e("dropitems","handleAjaxifyPref"),L=!L,p(A,L)}function q(){e("dropitems","handleDestroyPref"),S=!S,p(F,S),_()}const H=()=>D([[k(A),Y],[k(F),q]])
const J=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=w(g(t[0]));(function(o,t){return new u({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(N),s).$on("move",C)},b,function(){const o=a('input[type="submit"]')
o&&(!function(o){c(o.parentNode,`&nbsp;&nbsp;${x(A)}&nbsp;&nbsp;${x(F)}`),m(o.parentNode,"change",H())}(o),S=i(F),T=window.confirmDestroy,_(),L=i(A),m(document.forms[0],"submit",P),window.check=$)}]
function K(){!f()&&y()&&d(J)}export{K as default}
//# sourceMappingURL=injectProfileDropItems-wxT07c60.js.map
