import{cv as t,bF as n,az as a,cr as r,c as s,d0 as e,bY as i,ae as c,h as u,aK as o,bG as f}from"./calfSystem-BlPuMQGT.js"
async function m(t){return function(t,n){const a=n||{}
f("fsh_membrList",$.extend(a,t))}(t,await n("fsh_membrList")),t}async function b(t){return function(t,n){if(!c(n))return
const a=u(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:o(),...a}}}(t,await i(t))}const y=[(t,n)=>n,(t,n)=>r(n),(t,n)=>r(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e()]
function d(t,n,a){return a(t,n)}function p(t,n){return function(t,n){return y.every(s(d,t,n))}(t,n)?n:async function(t){const n=await b(t)
return m(n),n}(t)}async function w(r){const s=t()
if(s){const t=await async function(t,a){return p(a,await n("fsh_membrList"))}(0,s)
return function(t,n){if(n)return a.membrList=n[t],a.membrList}(s,t)}throw new Error("no guild id")}export{w as g}
//# sourceMappingURL=getMembrList-B8VblWQd.js.map
