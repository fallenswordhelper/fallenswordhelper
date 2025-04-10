import{cn as n,bx as t,am as a,ck as r,e as s,cN as e,bR as i,K as c,j as u,ay as o,by as f}from"./calfSystem-BGOTz8de.js"
async function m(n){return function(n,t){const a=t||{}
f("fsh_membrList",$.extend(a,n))}(n,await t("fsh_membrList")),n}async function y(n){return function(n,t){if(!c(t))return
const a=u(t.map((n=>[n.username,n])))
return{[n]:{lastUpdate:o(),...a}}}(n,await i(n))}const b=[(n,t)=>t,(n,t)=>r(t),(n,t)=>r(t[n]),(n,t)=>"number"==typeof t[n].lastUpdate,(n,t)=>t[n].lastUpdate>e()]
function p(n,t,a){return a(n,t)}function w(n,t){return function(n,t){return b.every(s(p,n,t))}(n,t)?t:async function(n){const t=await y(n)
return m(t),t}(n)}async function d(r){const s=n()
if(s){const n=await async function(n,a){return w(a,await t("fsh_membrList"))}(0,s)
return function(n,t){if(t)return a.membrList=t[n],a.membrList}(s,n)}throw new Error("no guild id")}export{d as g}
//# sourceMappingURL=getMembrList-B5ta0ybw.js.map
