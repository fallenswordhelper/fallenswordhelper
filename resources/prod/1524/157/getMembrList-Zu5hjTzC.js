import{aC as t,bJ as n,ay as a,cw as r,c as s,cZ as e,c0 as c,ad as i,f as u,aK as o,bK as f}from"./calfSystem-CQOGdqPv.js"
async function m(t){return function(t,n){const a=n||{}
f("fsh_membrList",$.extend(a,t))}(t,await n("fsh_membrList")),t}async function y(t){return function(t,n){if(!i(n))return
const a=u(n.map(t=>[t.username,t]))
return{[t]:{lastUpdate:o(),...a}}}(t,await c(t))}const b=[(t,n)=>n,(t,n)=>r(n),(t,n)=>r(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e()]
function w(t,n,a){return a(t,n)}function d(t,n){return function(t,n){return b.every(s(w,t,n))}(t,n)?n:async function(t){const n=await y(t)
return m(n),n}(t)}async function p(r){const s=t()
if(s){const t=await async function(t,a){return d(a,await n("fsh_membrList"))}(0,s)
return function(t,n){if(n)return a.membrList=n[t],a.membrList}(s,t)}throw new Error("no guild id")}export{p as g}
//# sourceMappingURL=getMembrList-Zu5hjTzC.js.map
