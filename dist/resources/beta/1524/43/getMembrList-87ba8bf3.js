import{t,c as n,ak as r,a7 as e,ag as s}from"./calfSystem-1d588248.js"
import{c as u}from"./currentGuildId-9fdd6aa9.js"
import{c as i}from"./cmdExport-a5395bb5.js"
import{g as o,s as m}from"./idb-dfc3696a.js"
function a(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function c(n){return o("fsh_membrList").then(t(a,n)),n}function f(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function b(t){return d(t).then(c)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-87ba8bf3.js.map
