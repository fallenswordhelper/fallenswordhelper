import{t,c as n,an as r,a7 as e,aj as s}from"./calfSystem-d3f0a380.js"
import{c as u}from"./currentGuildId-574c8e9f.js"
import{c as i}from"./cmdExport-2e38b85e.js"
import{g as o,s as m}from"./idb-13440348.js"
function c(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function f(n){return o("fsh_membrList").then(t(c,n)),n}function a(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function p(t){return d(t).then(f)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return b.every(t(h,n,r))}(n,r)?r:p(n)}function j(t,r){if(r)return n.membrList=r[t],n.membrList}function g(n){const r=u()
return r?function(n,r){return n?p(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(j,r)):Promise.reject(new Error("no guild id"))}export{g}
//# sourceMappingURL=getMembrList-a58b1ab2.js.map
