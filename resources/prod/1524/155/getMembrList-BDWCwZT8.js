import{ct as t,bG as n,ax as a,cq as r,c as s,c_ as e,bZ as c,ac as i,f as u,aI as o,bH as f}from"./calfSystem-UyQ_FKFu.js"
async function m(t){return function(t,n){const a=n||{}
f("fsh_membrList",$.extend(a,t))}(t,await n("fsh_membrList")),t}async function b(t){return function(t,n){if(!i(n))return
const a=u(n.map(t=>[t.username,t]))
return{[t]:{lastUpdate:o(),...a}}}(t,await c(t))}const y=[(t,n)=>n,(t,n)=>r(n),(t,n)=>r(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e()]
function p(t,n,a){return a(t,n)}function w(t,n){return function(t,n){return y.every(s(p,t,n))}(t,n)?n:async function(t){const n=await b(t)
return m(n),n}(t)}async function d(r){const s=t()
if(s){const t=await async function(t,a){return w(a,await n("fsh_membrList"))}(0,s)
return function(t,n){if(n)return a.membrList=n[t],a.membrList}(s,t)}throw new Error("no guild id")}export{d as g}
//# sourceMappingURL=getMembrList-BDWCwZT8.js.map
