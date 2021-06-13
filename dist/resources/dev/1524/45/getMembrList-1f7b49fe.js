import{t,c as n,an as r,a7 as e,aj as s}from"./calfSystem-6a3c85e0.js"
import{c as u}from"./currentGuildId-3f5ba5ad.js"
import{c as i}from"./cmdExport-cce4a501.js"
import{g as o,s as c}from"./idb-66004b57.js"
function m(t,n){const r=n||{}
c("fsh_membrList",$.extend(r,t))}function a(n){return o("fsh_membrList").then(t(m,n)),n}function f(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function b(t){return d(t).then(a)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function j(t,r){if(r)return n.membrList=r[t],n.membrList}function g(n){const r=u()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(j,r)):Promise.reject(new Error("no guild id"))}export{g}
//# sourceMappingURL=getMembrList-1f7b49fe.js.map
