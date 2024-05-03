import{g as t}from"./guildMembers-DLy8NRhL.js"
import{bQ as n,aO as r,ag as s,c as a,bN as i,aQ as e,f as o}from"./calfSystem-C4gAE-9q.js"
import{i as u}from"./isArray-eVldfhw1.js"
import{f,n as c}from"./now-Cx4PsKjI.js"
async function m(t){return function(t,n){const r=n||{}
e("fsh_membrList",$.extend(r,t))}(t,await r("fsh_membrList")),t}async function p(n){return function(t,n){if(!u(n))return
const r=o(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:c(),...r}}}(n,await t(n))}const b=[(t,n)=>n,(t,n)=>i(n),(t,n)=>i(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>f()]
function y(t,n,r){return r(t,n)}function w(t,n){return function(t,n){return b.every(a(y,t,n))}(t,n)?n:async function(t){const n=await p(t)
return m(n),n}(t)}async function d(t){const a=n()
if(a){const t=await async function(t,n){return w(n,await r("fsh_membrList"))}(0,a)
return function(t,n){if(n)return s.membrList=n[t],s.membrList}(a,t)}throw new Error("no guild id")}export{d as g}
//# sourceMappingURL=getMembrList-Bq_OvPB2.js.map
