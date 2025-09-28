import{aB as t,bI as n,ax as a,cv as r,c as s,cY as e,b$ as c,ac as i,f as u,aJ as o,bJ as f}from"./calfSystem-CIuUjh4H.js"
async function m(t){return function(t,n){const a=n||{}
f("fsh_membrList",$.extend(a,t))}(t,await n("fsh_membrList")),t}async function b(t){return function(t,n){if(!i(n))return
const a=u(n.map(t=>[t.username,t]))
return{[t]:{lastUpdate:o(),...a}}}(t,await c(t))}const y=[(t,n)=>n,(t,n)=>r(n),(t,n)=>r(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e()]
function p(t,n,a){return a(t,n)}function w(t,n){return function(t,n){return y.every(s(p,t,n))}(t,n)?n:async function(t){const n=await b(t)
return m(n),n}(t)}async function d(r){const s=t()
if(s){const t=await async function(t,a){return w(a,await n("fsh_membrList"))}(0,s)
return function(t,n){if(n)return a.membrList=n[t],a.membrList}(s,t)}throw new Error("no guild id")}export{d as g}
//# sourceMappingURL=getMembrList-DhTWubx9.js.map
