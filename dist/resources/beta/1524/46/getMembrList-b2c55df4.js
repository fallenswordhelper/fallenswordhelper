import{t,c as n,am as r,a6 as e,ai as s}from"./calfSystem-cbf77dd7.js"
import{c as i}from"./currentGuildId-96726c8f.js"
import{c as u}from"./cmdExport-cd0ba453.js"
import{g as o,s as m}from"./idb-82a91df1.js"
function c(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function f(n){return o("fsh_membrList").then(t(c,n)),n}function a(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return u({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function b(t){return d(t).then(f)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=i()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-b2c55df4.js.map
