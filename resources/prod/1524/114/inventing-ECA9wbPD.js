import{i as e}from"./inventing-c3PQlQp6.js"
import{$ as t,q as s,ad as n,b as o,v as r,aq as i,s as a,a9 as c,a6 as f}from"./calfSystem-rn9Rc_nF.js"
import{a as m}from"./aGenericFallback-wO4BQ-nw.js"
import{a as d}from"./arrayFromRadioNodeList-NDVhT0zI.js"
import{c as l}from"./createSpan-Q4CQr4i_.js"
import{c as p}from"./closestTr-Vv3gA4eP.js"
import{e as u,s as v}from"./selfIdIs-UTusKVQ8.js"
import{i as h}from"./insertElementAfter-54sPhbo8.js"
import{s as g}from"./simpleCheckbox-lyJmzCW_.js"
import"./isChecked-k2ijSL8v.js"
function b(t,s){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:s})}function j(e,t){return m({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const _="ajaxifyMoveRecipe"
let x=0
const y=[[v(_),function(){a("inventing","toggle ajaxify pref"),x=!x,c(_,x)}]]
function N(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),h(l({className:"fshSpinner fshSpinner12"}),e)}function S(e){const t=p(e)
t.nextElementSibling.remove(),t.remove()}function k(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function C(e,s){a("inventing","Move recipes by AJAX"),s.forEach(N)
const n=await(o=e,r=s.map((e=>Number(e.value))),t(b,j,o,r))
var o,r
!function(e,t){t.s?e.forEach(S):(f(t.e.message),e.forEach(k))}(s,n)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return i(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const s=e["recipe_selected[]"]
if(!s)return
const n=d(s).filter((e=>e.checked))
n.length&&C(t,n)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
!function(e){r(e.parentNode,`&nbsp;&nbsp;${g(_)}`),o(e.parentNode,"change",u(y))}(e),x=n(_),o(e.form,"submit",E)}export{L as default}
//# sourceMappingURL=inventing-ECA9wbPD.js.map
