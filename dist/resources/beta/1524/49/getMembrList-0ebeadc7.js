import{t,c as n,ap as r,a9 as e,al as s}from"./calfSystem-42f137cb.js"
import{c as u}from"./currentGuildId-d1f28a3b.js"
import{c as i}from"./cmdExport-16a19312.js"
import{g as o,s as c}from"./idb-6beadc2c.js"
function m(t,n){const r=n||{}
c("fsh_membrList",$.extend(r,t))}function a(n){return o("fsh_membrList").then(t(m,n)),n}function f(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function b(t){return d(t).then(a)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function l(t,n,r){return r(t,n)}function h(n,r){return function(n,r){return p.every(t(l,n,r))}(n,r)?r:b(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(h,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-0ebeadc7.js.map
