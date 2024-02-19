import{g as t}from"./guildMembers-lKyL-vXF.js"
import{bP as n,aO as r,ag as s,c as a,aQ as i,f as e,bM as o}from"./calfSystem-hszmVKJw.js"
import{i as u}from"./isArray-eVldfhw1.js"
import{n as f,f as c}from"./now-Cx4PsKjI.js"
async function m(t){return function(t,n){const r=n||{}
i("fsh_membrList",$.extend(r,t))}(t,await r("fsh_membrList")),t}async function p(n){return function(t,n){if(!u(n))return
const r=e(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:f(),...r}}}(n,await t(n))}async function b(t){const n=await p(t)
return m(n),n}const y=[(t,n)=>n,(t,n)=>o(n),(t,n)=>o(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>c()]
function w(t,n,r){return r(t,n)}function d(t,n){return function(t,n){return y.every(a(w,t,n))}(t,n)?n:b(t)}async function l(t){const a=n()
if(a){const n=await async function(t,n){return t?b(n):d(n,await r("fsh_membrList"))}(t,a)
return function(t,n){if(n)return s.membrList=n[t],s.membrList}(a,n)}throw new Error("no guild id")}export{l as g}
//# sourceMappingURL=getMembrList-C1pmDX8O.js.map
