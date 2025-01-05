import{cm as t,b6 as n,am as a,c as r,bT as s,cj as e,cT as c,b8 as i,H as u,f as o,ay as f}from"./calfSystem-fMW-YMyF.js"
async function m(t){return function(t,n){const a=n||{}
i("fsh_membrList",$.extend(a,t))}(t,await n("fsh_membrList")),t}async function b(t){return function(t,n){if(!u(n))return
const a=o(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:f(),...a}}}(t,await s(t))}const y=[(t,n)=>n,(t,n)=>e(n),(t,n)=>e(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>c()]
function p(t,n,a){return a(t,n)}function w(t,n){return function(t,n){return y.every(r(p,t,n))}(t,n)?n:async function(t){const n=await b(t)
return m(n),n}(t)}async function d(r){const s=t()
if(s){const t=await async function(t,a){return w(a,await n("fsh_membrList"))}(0,s)
return function(t,n){if(n)return a.membrList=n[t],a.membrList}(s,t)}throw new Error("no guild id")}export{d as g}
//# sourceMappingURL=getMembrList-FvUbc1-a.js.map
