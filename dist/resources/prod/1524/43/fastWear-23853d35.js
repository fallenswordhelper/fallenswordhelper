import{l as a,T as t,A as e,t as n,B as s,E as o,m as c,h as r,z as i,C as f,a as p,o as b}from"./calfSystem-9942149b.js"
import{e as l,u as m}from"./useItem-850b93fa.js"
import{g as u,m as k}from"./monkeyBp-7ba1191e.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./daUseItem-46bcfe13.js"
import"./errorDialog-0f2ff56e.js"
function d([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function g(a,s,o,c){t("profile",`fastAction - ${c}`)
const{target:r}=s,i=r.parentNode.parentNode.children[0].dataset.inv
e("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(d,[a,c,r,i]))}function h(t,e){a("fastWear",e.target)&&g(t,e,l,"Worn"),a("fastUse",e.target)&&g(t,e,m,"Used")}function x(a){return a?"Use":"Wear"}function j(t,e){const n=a("backpackContextMenuUsable",e),s=c({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&r(s,e.parentNode.nextElementSibling.nextElementSibling),r(e.parentNode.parentNode,s)}function N(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(j,a))}function S(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),k(a,N),0!==f(i("backpack_current")).length&&p(3,N,[a]),b(i("backpackContainer"),n(h,a))}function U(){const a=u()
a&&S(a)}export default U
//# sourceMappingURL=fastWear-23853d35.js.map
