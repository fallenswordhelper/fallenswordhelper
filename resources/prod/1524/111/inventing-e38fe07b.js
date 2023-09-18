import{i as e}from"./inventing-6278bad8.js"
import{$ as t,q as s,ae as n,b as o,v as r,ar as a,aa as i,n as c,a7 as f}from"./calfSystem-abb16b0d.js"
import{a as m}from"./aGenericFallback-b6993a54.js"
import{a as d}from"./arrayFromRadioNodeList-cc7c3968.js"
import{c as l}from"./createSpan-b6e6b8c0.js"
import{c as p}from"./closestTr-d0dbc351.js"
import{e as u,s as v}from"./selfIdIs-0c5cdb3d.js"
import{i as h}from"./insertElementAfter-33ec0427.js"
import{s as b}from"./simpleCheckbox-937a8f73.js"
import"./isChecked-3968d2ec.js"
function g(t,s){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:s})}function _(e,t){return m({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const j="ajaxifyMoveRecipe"
let k=0
const x=[[v(j),function(){k=!k,i(j,k)}]]
function N(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),h(l({className:"fshSpinner fshSpinner12"}),e)}function S(e){const t=p(e)
t.nextElementSibling.remove(),t.remove()}function C(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function E(e,s){c("inventing","Move recipes by AJAX"),s.forEach(N)
const n=await(o=e,r=s.map((e=>Number(e.value))),t(g,_,o,r))
var o,r
!function(e,t){t.s?e.forEach(S):(f(t.e.message),e.forEach(C))}(s,n)}function y(e){if(!k)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return a(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const s=e["recipe_selected[]"]
if(!s)return
const n=d(s).filter((e=>e.checked))
n.length&&E(t,n)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
!function(e){r(e.parentNode,`&nbsp;&nbsp;${b(j)}`),o(e.parentNode,"change",u(x))}(e),k=n(j),o(e.form,"submit",y)}export{L as default}
//# sourceMappingURL=inventing-e38fe07b.js.map
