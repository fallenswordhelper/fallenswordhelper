import{t,c as n,al as r,a8 as e,ah as s}from"./calfSystem-3cb2f93e.js"
import{c as u}from"./currentGuildId-a71d60fb.js"
import{c as i}from"./cmdExport-7784a81f.js"
import{g as o,s as c}from"./idb-c9ce87e3.js"
function m(t,n){const r=n||{}
c("fsh_membrList",$.extend(r,t))}function f(n){return o("fsh_membrList").then(t(m,n)),n}function a(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function b(t){return d(t).then(f)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-8c54d666.js.map
