import{g as t}from"./guildMembers-TX9z2VMS.js"
import{bH as n,ab as r,c as s,f as a,bE as i}from"./calfSystem-ZGMc097r.js"
import{i as o}from"./isArray-bNviZzJA.js"
import{n as e,f}from"./now-pQzGw6vd.js"
import{g as u,s as m}from"./idb-Asb6LweF.js"
async function c(t){return function(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}(t,await u("fsh_membrList")),t}async function b(n){return function(t,n){if(!o(n))return
const r=a(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e(),...r}}}(n,await t(n))}async function p(t){const n=await b(t)
return c(n),n}const y=[(t,n)=>n,(t,n)=>i(n),(t,n)=>i(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>f()]
function d(t,n,r){return r(t,n)}function w(t,n){return function(t,n){return y.every(s(d,t,n))}(t,n)?n:p(t)}async function l(t){const s=n()
if(s){const n=await async function(t,n){return t?p(n):w(n,await u("fsh_membrList"))}(t,s)
return function(t,n){if(n)return r.membrList=n[t],r.membrList}(s,n)}throw new Error("no guild id")}export{l as g}
//# sourceMappingURL=getMembrList-1mbZxUnr.js.map
