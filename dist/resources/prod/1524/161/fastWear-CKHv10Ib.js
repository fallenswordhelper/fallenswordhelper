import{ac as a,s as t,l as s,d as n,h as c,c as e,v as o,i,q as r,bB as f,g as p,ax as l,m as u,br as k,o as b}from"./calfSystem-Cs6CSxoU.js"
import{e as h,u as m}from"./useItem-CVQLApUC.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
async function d(a,c,e,o){t("profile",`fastAction - ${o}`)
const{target:i}=c,r=i.parentNode.parentNode.children[0].dataset.inv
s("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const f=await e(r)
f&&function([a,t,s,c,e]){0===e.r?(function(a,t){const s=a.srcData.findIndex(a=>a.a===t);-1!==s&&a.srcData.splice(s,1)}(a,c),s.classList.remove("fshSpinner"),n(`<span class="fastWorn">${t}</span>`,s.parentNode)):s.remove()}([a,o,i,r,f])}function g(t,s){a("fastWear",s.target)&&d(t,s,h,"Worn"),a("fastUse",s.target)&&d(t,s,m,"Used")}function v(a){return a?"Use":"Wear"}function x(t,s){const n=a("backpackContextMenuUsable",s),c=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${e=n,e?"fastUse":"fastWear"}">${v(n)}</button>`})
var e
const f=s.closest("div")
t.options.checkboxesEnabled&&i(c,r("input",f)),i(f,c)}function y(a){c(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(e(x,a))}const M=[]
let N=0
function S(a){const t=a._showPage
a._showPage=function(s,n){a.tabData&&(t.call(a,s,n),function(a){M.length>0&&M.forEach(t=>t(a))}(a))},N=!0}function U(a){!function(){const a=p("backpack")
a&&(a.className="fshBackpack",a.removeAttribute("style"))}(),function(a,t){M.includes(t)||(N||S(a),f(t)&&M.push(t))}(a,y),0!==u(p("backpack_current")).length&&k(3,y,[a]),b(p("backpackContainer"),e(g,a))}async function $(){const a=await l(p("backpackContainer"),"Backpack","hcs")
a&&U(a)}export{$ as default}
//# sourceMappingURL=fastWear-CKHv10Ib.js.map
