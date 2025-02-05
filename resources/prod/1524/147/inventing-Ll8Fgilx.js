import{i as e}from"./inventing-Irlema_1.js"
import{$ as t,b as n,q as s,aq as o,c as a,x as i,s as r,al as c,aQ as f,aW as d,aF as m,aj as l,ak as p}from"./calfSystem-BAeDn21M.js"
import{a as u}from"./arrayFromRadioNodeList-C6bFFPg-.js"
import{e as v,s as h}from"./selfIdIs-BgcX5yEs.js"
import{s as g}from"./simpleCheckbox-BPGp9fPI.js"
import"./isChecked-D_0do7nT.js"
function b(t,n){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:n})}function _(e,t){return n({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const x="ajaxifyMoveRecipe"
let j=0
const N=[[h(x),function(){r("inventing","toggle ajaxify pref"),j=!j,c(x,j)}]]
function k(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),d(m({className:"fshSpinner fshSpinner12"}),e)}function y(e){const t=p(e)
t&&(t.nextElementSibling.remove(),t.remove())}function C(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function S(e,n){r("inventing","Move recipes by AJAX"),n.forEach(k)
const s=await(o=e,a=n.map((e=>Number(e.value))),t(b,_,o,a))
var o,a
!function(e,t){t.s?e.forEach(y):(l(t.e.message),e.forEach(C))}(n,s)}function E(e){if(!j)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return f(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const n=e["recipe_selected[]"]
if(!n)return
const s=u(n).filter((e=>e.checked))
s.length&&S(t,s)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){i(e.parentNode,`&nbsp;&nbsp;${g(x)}`),a(e.parentNode,"change",v(N))}(e),j=o(x),a(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-Ll8Fgilx.js.map
