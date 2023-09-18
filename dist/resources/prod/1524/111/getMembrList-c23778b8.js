import{g as t}from"./guildMembers-d914b75d.js"
import{bJ as n,ac as r,c as s,f as a,bG as i}from"./calfSystem-abb16b0d.js"
import{i as o}from"./isArray-09a53da7.js"
import{n as e,f}from"./now-6f22aec9.js"
import{g as m,s as u}from"./idb-e719862a.js"
async function c(t){return function(t,n){const r=n||{}
u("fsh_membrList",$.extend(r,t))}(t,await m("fsh_membrList")),t}async function p(n){return function(t,n){if(!o(n))return
const r=a(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e(),...r}}}(n,await t(n))}async function b(t){const n=await p(t)
return c(n),n}const y=[(t,n)=>n,(t,n)=>i(n),(t,n)=>i(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>f()]
function d(t,n,r){return r(t,n)}function w(t,n){return function(t,n){return y.every(s(d,t,n))}(t,n)?n:b(t)}async function l(t){const s=n()
if(s){const n=await async function(t,n){return t?b(n):w(n,await m("fsh_membrList"))}(t,s)
return function(t,n){if(n)return r.membrList=n[t],r.membrList}(s,n)}throw new Error("no guild id")}export{l as g}
//# sourceMappingURL=getMembrList-c23778b8.js.map
