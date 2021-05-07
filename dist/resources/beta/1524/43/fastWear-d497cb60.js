import{l as a,T as t,A as e,t as n,B as s,E as o,m as c,h as r,z as i,C as f,a as p,o as l}from"./calfSystem-1d588248.js"
import{e as b,u as m}from"./useItem-7f81d404.js"
import{g as u,m as d}from"./monkeyBp-592a60e9.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./indexAjaxJson-7770951b.js"
import"./daUseItem-310b10b5.js"
import"./errorDialog-0f2ff56e.js"
function k([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function g(a,s,o,c){t("profile",`fastAction - ${c}`)
const{target:r}=s,i=r.parentNode.parentNode.children[0].dataset.inv
e("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(k,[a,c,r,i]))}function h(t,e){a("fastWear",e.target)&&g(t,e,b,"Worn"),a("fastUse",e.target)&&g(t,e,m,"Used")}function x(a){return a?"Use":"Wear"}function j(t,e){const n=a("backpackContextMenuUsable",e),s=c({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&r(s,e.parentNode.nextElementSibling.nextElementSibling),r(e.parentNode.parentNode,s)}function N(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(j,a))}function S(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),d(a,N),0!==f(i("backpack_current")).length&&p(3,N,[a]),l(i("backpackContainer"),n(h,a))}function U(){const a=u()
a&&S(a)}export default U
//# sourceMappingURL=fastWear-d497cb60.js.map
