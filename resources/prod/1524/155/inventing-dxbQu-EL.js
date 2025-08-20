import{i as e}from"./inventing-C-TY-AKa.js"
import{$ as t,a as n,q as s,az as o,b as a,a1 as i,s as r,au as c,a_ as f,b5 as d,aP as m,m as l,j as p}from"./calfSystem-UyQ_FKFu.js"
import{a as u}from"./arrayFromRadioNodeList-ExIELqpW.js"
import{e as v,s as h}from"./selfIdIs-CwDtrHCy.js"
import{s as g}from"./simpleCheckbox-C_yEWmPy.js"
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
s.length&&S(t,s)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){i(e.parentNode,`&nbsp;&nbsp;${g(j)}`),a(e.parentNode,"change",v(y))}(e),x=o(j),a(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-dxbQu-EL.js.map
