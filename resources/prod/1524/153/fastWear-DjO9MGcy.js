import{aa as a,s as t,k as n,d as s,h as e,c,u as o,i,bw as r,g as f,aw as p,l,bm as u,o as b}from"./calfSystem-CT1aM4VG.js"
import{e as k,u as d}from"./useItem-CEP4zgNs.js"
import"./dialog-CiSCF2So.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
async function m(a,e,c,o){t("profile",`fastAction - ${o}`)
const{target:i}=e,r=i.parentNode.parentNode.children[0].dataset.inv
n("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const f=await c(r)
f&&function([a,t,n,e,c]){0===c.r?(function(a,t){const n=a.srcData.findIndex((a=>a.a===t));-1!==n&&a.srcData.splice(n,1)}(a,e),n.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,n.parentNode)):n.remove()}([a,o,i,r,f])}function h(t,n){a("fastWear",n.target)&&m(t,n,k,"Worn"),a("fastUse",n.target)&&m(t,n,d,"Used")}function g(a){return a?"Use":"Wear"}function N(t,n){const s=a("backpackContextMenuUsable",n),e=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${c=s,c?"fastUse":"fastWear"}">${g(s)}</button>`})
var c
t.options.checkboxesEnabled&&i(e,n.parentNode.nextElementSibling.nextElementSibling),i(n.parentNode.parentNode,e)}function x(a){e(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(c(N,a))}const S=[]
let v=0
function w(a){const t=a._showPage
a._showPage=function(n,s){a.tabData&&(t.call(a,n,s),function(a){S.length>0&&S.forEach((t=>t(a)))}(a))},v=!0}function y(a){!function(){const a=f("backpack")
a&&(a.className="fshBackpack",a.removeAttribute("style"))}(),function(a,t){S.includes(t)||(v||w(a),r(t)&&S.push(t))}(a,x),0!==l(f("backpack_current")).length&&u(3,x,[a]),b(f("backpackContainer"),c(h,a))}async function E(){const a=await p(f("backpackContainer"),"Backpack","hcs")
a&&y(a)}export{E as default}
//# sourceMappingURL=fastWear-DjO9MGcy.js.map
