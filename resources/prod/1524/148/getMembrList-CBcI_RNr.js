import{cp as t,bw as n,ao as a,cm as r,d as s,cN as e,bW as i,I as c,f as o,az as u,bx as f}from"./calfSystem-BldO1y8X.js"
async function m(t){return function(t,n){const a=n||{}
f("fsh_membrList",$.extend(a,t))}(t,await n("fsh_membrList")),t}async function b(t){return function(t,n){if(!c(n))return
const a=o(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:u(),...a}}}(t,await i(t))}const p=[(t,n)=>n,(t,n)=>r(n),(t,n)=>r(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e()]
function w(t,n,a){return a(t,n)}function y(t,n){return function(t,n){return p.every(s(w,t,n))}(t,n)?n:async function(t){const n=await b(t)
return m(n),n}(t)}async function d(r){const s=t()
if(s){const t=await async function(t,a){return y(a,await n("fsh_membrList"))}(0,s)
return function(t,n){if(n)return a.membrList=n[t],a.membrList}(s,t)}throw new Error("no guild id")}export{d as g}
//# sourceMappingURL=getMembrList-CBcI_RNr.js.map
