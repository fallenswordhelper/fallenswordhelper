import{g as t}from"./guildMembers-d716b976.js"
import{bL as n,ad as r,c as s,E as a,f as e,bI as i}from"./calfSystem-076d7a01.js"
import{n as o,f as u}from"./now-6f22aec9.js"
import{g as f,s as c}from"./idb-807cd422.js"
async function m(t){return function(t,n){const r=n||{}
c("fsh_membrList",$.extend(r,t))}(t,await f("fsh_membrList")),t}async function b(n){return function(t,n){if(!a(n))return
const r=e(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:o(),...r}}}(n,await t(n))}async function p(t){const n=await b(t)
return m(n),n}const d=[(t,n)=>n,(t,n)=>i(n),(t,n)=>i(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>u()]
function w(t,n,r){return r(t,n)}function y(t,n){return function(t,n){return d.every(s(w,t,n))}(t,n)?n:p(t)}async function l(t){const s=n()
if(s){const n=await async function(t,n){return t?p(n):y(n,await f("fsh_membrList"))}(t,s)
return function(t,n){if(n)return r.membrList=n[t],r.membrList}(s,n)}throw new Error("no guild id")}export{l as g}
//# sourceMappingURL=getMembrList-4c9f1480.js.map
