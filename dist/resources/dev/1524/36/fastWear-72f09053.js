import{l as a,X as t,A as e,t as n,B as s,E as o,m as c,h as r,z as i,C as p,a as f,o as l}from"./calfSystem-eeb1d862.js"
import{e as b,u as m}from"./useItem-1692c1c2.js"
import{g as d,m as u}from"./monkeyBp-a5f3c262.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./indexAjaxJson-2deb257d.js"
import"./daUseItem-44d35487.js"
import"./errorDialog-db13a69a.js"
function k([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function g(a,s,o,c){t("profile",`fastAction - ${c}`)
const{target:r}=s,i=r.parentNode.parentNode.children[0].dataset.inv
e("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(k,[a,c,r,i]))}function h(t,e){a("fastWear",e.target)&&g(t,e,b,"Worn"),a("fastUse",e.target)&&g(t,e,m,"Used")}function x(a){return a?"Use":"Wear"}function j(t,e){const n=a("backpackContextMenuUsable",e),s=c({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&r(s,e.parentNode.nextElementSibling.nextElementSibling),r(e.parentNode.parentNode,s)}function N(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(j,a))}function S(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),u(a,N),0!==p(i("backpack_current")).length&&f(3,N,[a]),l(i("backpackContainer"),n(h,a))}function U(){const a=d()
a&&S(a)}export default U
//# sourceMappingURL=fastWear-72f09053.js.map
