import{g as t}from"./guildMembers-BI7B-WBZ.js"
import{bW as n,aQ as r,ag as a,c as s,bT as e,cu as i,aS as o,f as u,ap as c}from"./calfSystem-KuDT30_2.js"
import{i as f}from"./isArray-eVldfhw1.js"
async function m(t){return function(t,n){const r=n||{}
o("fsh_membrList",$.extend(r,t))}(t,await r("fsh_membrList")),t}async function p(n){return function(t,n){if(!f(n))return
const r=u(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:c(),...r}}}(n,await t(n))}const b=[(t,n)=>n,(t,n)=>e(n),(t,n)=>e(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>i()]
function y(t,n,r){return r(t,n)}function d(t,n){return function(t,n){return b.every(s(y,t,n))}(t,n)?n:async function(t){const n=await p(t)
return m(n),n}(t)}async function w(t){const s=n()
if(s){const t=await async function(t,n){return d(n,await r("fsh_membrList"))}(0,s)
return function(t,n){if(n)return a.membrList=n[t],a.membrList}(s,t)}throw new Error("no guild id")}export{w as g}
//# sourceMappingURL=getMembrList-BHN_igCX.js.map
