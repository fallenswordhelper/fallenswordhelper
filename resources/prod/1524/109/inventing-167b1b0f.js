import{i as e}from"./inventing-2b0f6ff5.js"
import{$ as t,q as s,af as n,b as o,v as r,as as i,ab as a,n as c,a8 as f}from"./calfSystem-2f15e074.js"
import{a as m}from"./aGenericFallback-9c9f95bf.js"
import{a as d}from"./arrayFromRadioNodeList-fd82689b.js"
import{c as l}from"./createSpan-14f0ab30.js"
import{c as p}from"./closestTr-ce435b3a.js"
import{e as u,s as v}from"./selfIdIs-5290eb66.js"
import{i as h}from"./insertElementAfter-bbee38d9.js"
import{s as b}from"./simpleCheckbox-45958795.js"
import"./isChecked-3968d2ec.js"
function g(t,s){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:s})}function j(e,t){return m({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const _="ajaxifyMoveRecipe"
let x=0
const N=[[v(_),function(){x=!x,a(_,x)}]]
function S(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),h(l({className:"fshSpinner fshSpinner12"}),e)}function k(e){const t=p(e)
t.nextElementSibling.remove(),t.remove()}function C(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function E(e,s){c("inventing","Move recipes by AJAX"),s.forEach(S)
const n=await(o=e,r=s.map((e=>Number(e.value))),t(g,j,o,r))
var o,r
!function(e,t){t.s?e.forEach(k):(f(t.e.message),e.forEach(C))}(s,n)}function y(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return i(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const s=e["recipe_selected[]"]
if(!s)return
const n=d(s).filter((e=>e.checked))
n.length&&E(t,n)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
!function(e){r(e.parentNode,`&nbsp;&nbsp;${b(_)}`),o(e.parentNode,"change",u(N))}(e),x=n(_),o(e.form,"submit",y)}export{L as default}
//# sourceMappingURL=inventing-167b1b0f.js.map
