import{g as t}from"./guildMembers-DswVgOFV.js"
import{aC as n,bK as a,ay as r,cw as s,c as e,cY as i,ad as c,f as o,aK as u,bL as f}from"./calfSystem-HVCiy-VV.js"
async function m(t){return function(t,n){const a=n||{}
f("fsh_membrList",$.extend(a,t))}(t,await a("fsh_membrList")),t}async function b(n){return function(t,n){if(!c(n))return
const a=o(n.map(t=>[t.username,t]))
return{[t]:{lastUpdate:u(),...a}}}(n,await t(n))}const y=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>i()]
function d(t,n,a){return a(t,n)}function p(t,n){return function(t,n){return y.every(e(d,t,n))}(t,n)?n:async function(t){const n=await b(t)
return m(n),n}(t)}async function w(t){const s=n()
if(s){const t=await async function(t,n){return p(n,await a("fsh_membrList"))}(0,s)
return function(t,n){if(n)return r.membrList=n[t],r.membrList}(s,t)}throw new Error("no guild id")}export{w as g}
//# sourceMappingURL=getMembrList-ByvYTXtZ.js.map
