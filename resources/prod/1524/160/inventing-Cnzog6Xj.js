import{i as e}from"./inventing-ByV5ReyL.js"
import{$ as t,a as n,q as s,aA as o,b as a,a3 as i,s as r,av as c,b0 as f,b7 as d,aR as m,n as l,k as p}from"./calfSystem-HVCiy-VV.js"
import{a as u}from"./arrayFromRadioNodeList-CEp2kJt3.js"
import{e as v,s as h}from"./selfIdIs-DjCJFjQp.js"
import{s as g}from"./simpleCheckbox-CEHi-xtc.js"
import"./isChecked-D_0do7nT.js"
function b(t,n){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:n})}function _(e,t){return n({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const j="ajaxifyMoveRecipe"
let x=0
const y=[[h(j),function(){r("inventing","toggle ajaxify pref"),x=!x,c(j,x)}]]
function N(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),d(m({className:"fshSpinner fshSpinner12"}),e)}function k(e){const t=p(e)
t&&(t.nextElementSibling.remove(),t.remove())}function C(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function S(e,n){r("inventing","Move recipes by AJAX"),n.forEach(N)
const s=await(o=e,a=n.map(e=>Number(e.value)),t(b,_,o,a))
var o,a
!function(e,t){t.s?e.forEach(k):(l(t.e.message),e.forEach(C))}(n,s)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return f(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const n=e["recipe_selected[]"]
if(!n)return
const s=u(n).filter(e=>e.checked)
s.length&&S(t,s)}(n,o)}function R(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){i(e.parentNode,`&nbsp;&nbsp;${g(j)}`),a(e.parentNode,"change",v(y))}(e),x=o(j),a(e.form,"submit",E))}export{R as default}
//# sourceMappingURL=inventing-Cnzog6Xj.js.map
