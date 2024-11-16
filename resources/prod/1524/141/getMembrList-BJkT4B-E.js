import{g as t}from"./guildMembers-B5MxM4J7.js"
import{bW as n,aQ as r,bT as a,cu as s,b as e,f as i,ap as o,aS as u,ag as c}from"./calfSystem-Blt4DbaE.js"
import{i as f}from"./isArray-eVldfhw1.js"
async function m(t){return function(t,n){const r=n||{}
u("fsh_membrList",$.extend(r,t))}(t,await r("fsh_membrList")),t}async function b(n){return function(t,n){if(!f(n))return
const r=i(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:o(),...r}}}(n,await t(n))}const p=[(t,n)=>n,(t,n)=>a(n),(t,n)=>a(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>s()]
function y(t,n,r){return r(t,n)}function d(t,n){return function(t,n){return p.every(e(y,t,n))}(t,n)?n:async function(t){const n=await b(t)
return m(n),n}(t)}async function w(t){const a=n()
if(a){const t=await async function(t,n){return d(n,await r("fsh_membrList"))}(0,a)
return function(t,n){if(n)return c.membrList=n[t],c.membrList}(a,t)}throw new Error("no guild id")}export{w as g}
//# sourceMappingURL=getMembrList-BJkT4B-E.js.map
