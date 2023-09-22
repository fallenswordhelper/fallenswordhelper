import{g as t}from"./guildMembers-7edbe4e6.js"
import{bI as n,ab as r,c as s,f as a,bF as i}from"./calfSystem-4830a18d.js"
import{i as o}from"./isArray-09a53da7.js"
import{n as e,f}from"./now-6f22aec9.js"
import{g as u,s as m}from"./idb-7e56faaa.js"
async function c(t){return function(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}(t,await u("fsh_membrList")),t}async function b(n){return function(t,n){if(!o(n))return
const r=a(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e(),...r}}}(n,await t(n))}async function p(t){const n=await b(t)
return c(n),n}const y=[(t,n)=>n,(t,n)=>i(n),(t,n)=>i(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>f()]
function d(t,n,r){return r(t,n)}function w(t,n){return function(t,n){return y.every(s(d,t,n))}(t,n)?n:p(t)}async function l(t){const s=n()
if(s){const n=await async function(t,n){return t?p(n):w(n,await u("fsh_membrList"))}(t,s)
return function(t,n){if(n)return r.membrList=n[t],r.membrList}(s,n)}throw new Error("no guild id")}export{l as g}
//# sourceMappingURL=getMembrList-d2aebe41.js.map
