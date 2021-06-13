import{t,c as n,am as r,a6 as e,ai as s}from"./calfSystem-ae2e69af.js"
import{c as i}from"./currentGuildId-85358166.js"
import{c as u}from"./cmdExport-aa80361b.js"
import{g as o,s as m}from"./idb-225659e6.js"
function a(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function c(n){return o("fsh_membrList").then(t(a,n)),n}function f(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return u({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function p(t){return d(t).then(c)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return b.every(t(h,n,r))}(n,r)?r:p(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=i()
return r?function(n,r){return n?p(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-7af564d9.js.map
