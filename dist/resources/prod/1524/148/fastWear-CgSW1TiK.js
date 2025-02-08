import{G as a,s as t,ae as n,e as s,l as e,d as c,n as o,i,bm as r,g as f,an as p,ad as l,bc as u,o as b}from"./calfSystem-BldO1y8X.js"
import{e as k,u as m}from"./useItem-q9q5aS11.js"
import"./dialog-nv9HUVDL.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-Deu1zmzV.js"
import"./errorDialog-B4_TjdGG.js"
async function d(a,e,c,o){t("profile",`fastAction - ${o}`)
const{target:i}=e,r=i.parentNode.parentNode.children[0].dataset.inv
n("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const f=await c(r)
f&&function([a,t,n,e,c]){0===c.r?(function(a,t){const n=a.srcData.findIndex((a=>a.a===t));-1!==n&&a.srcData.splice(n,1)}(a,e),n.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,n.parentNode)):n.remove()}([a,o,i,r,f])}function g(t,n){a("fastWear",n.target)&&d(t,n,k,"Worn"),a("fastUse",n.target)&&d(t,n,m,"Used")}function h(a){return a?"Use":"Wear"}function N(t,n){const s=a("backpackContextMenuUsable",n),e=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${c=s,c?"fastUse":"fastWear"}">${h(s)}</button>`})
var c
t.options.checkboxesEnabled&&i(e,n.parentNode.nextElementSibling.nextElementSibling),i(n.parentNode.parentNode,e)}function x(a){e(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(c(N,a))}const S=[]
let U=0
function j(a){const t=a._showPage
a._showPage=function(n,s){a.tabData&&(t.call(a,n,s),function(a){S.length>0&&S.forEach((t=>t(a)))}(a))},U=!0}function v(a){!function(){const a=f("backpack")
a&&(a.className="fshBackpack",a.removeAttribute("style"))}(),function(a,t){S.includes(t)||(U||j(a),r(t)&&S.push(t))}(a,x),0!==l(f("backpack_current")).length&&u(3,x,[a]),b(f("backpackContainer"),c(g,a))}async function y(){const a=await p(f("backpackContainer"),"Backpack","hcs")
a&&v(a)}export{y as default}
//# sourceMappingURL=fastWear-CgSW1TiK.js.map
