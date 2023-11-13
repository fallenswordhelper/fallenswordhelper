import{D as a,s as t,a4 as n,d as s,k as e,c,m as o,i,aV as r,g as f,aa as p,a3 as l,aL as u,o as k}from"./calfSystem-rn9Rc_nF.js"
import{e as b,u as m}from"./useItem-I0vjoV4R.js"
import"./dialog-ewu4mmhi.js"
import"./dialogMsg-6-T2JNn4.js"
import"./daUseItem-s7ltE2Pg.js"
import"./errorDialog-UVurWbsP.js"
async function d(a,e,c,o){t("profile",`fastAction - ${o}`)
const{target:i}=e,r=i.parentNode.parentNode.children[0].dataset.inv
n("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const f=await c(r)
f&&function([a,t,n,e,c]){0===c.r?(function(a,t){const n=a.srcData.findIndex((a=>a.a===t));-1!==n&&a.srcData.splice(n,1)}(a,e),n.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,n.parentNode)):n.remove()}([a,o,i,r,f])}function h(t,n){a("fastWear",n.target)&&d(t,n,b,"Worn"),a("fastUse",n.target)&&d(t,n,m,"Used")}function g(a){return a?"Use":"Wear"}function N(t,n){const s=a("backpackContextMenuUsable",n),e=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${c=s,c?"fastUse":"fastWear"}">${g(s)}</button>`})
var c
t.options.checkboxesEnabled&&i(e,n.parentNode.nextElementSibling.nextElementSibling),i(n.parentNode.parentNode,e)}function x(a){e(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(c(N,a))}const S=[]
let U
function j(a){const t=a._showPage
a._showPage=function(n,s){a.tabData&&(t.call(a,n,s),function(a){S.length>0&&S.forEach((t=>t(a)))}(a))},U=!0}function v(a){!function(){const a=f("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),function(a,t){S.includes(t)||(U||j(a),r(t)&&S.push(t))}(a,x),0!==l(f("backpack_current")).length&&u(3,x,[a]),k(f("backpackContainer"),c(h,a))}async function y(){const a=await p(f("backpackContainer"),"Backpack","hcs")
a&&v(a)}export{y as default}
//# sourceMappingURL=fastWear-mMnWYUbq.js.map
