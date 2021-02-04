import{t,c as n,aA as r,a5 as e,ad as s}from"./calfSystem-c91a5c89.js"
import{c as u}from"./currentGuildId-1acce0c7.js"
import{c as o}from"./cmdExport-6ed03a19.js"
import{g as c,s as i}from"./idb-ba7ef5fa.js"
function a(t,n){const r=n||{}
i("fsh_membrList",$.extend(r,t))}function m(n){return c("fsh_membrList").then(t(a,n)),n}function f(t,n){const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return o({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function p(t){return d(t).then(m)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return b.every(t(h,n,r))}(n,r)?r:p(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?p(r):c("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-fa867d4f.js.map
