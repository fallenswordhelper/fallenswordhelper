import{t,c as n,az as r,a7 as e,af as s}from"./calfSystem-60c20ae9.js"
import{c as u}from"./currentGuildId-a7e07ffc.js"
import{c as o}from"./cmdExport-10c01f6a.js"
import{g as i,s as c}from"./idb-a07bf138.js"
function m(t,n){const r=n||{}
c("fsh_membrList",$.extend(r,t))}function a(n){return i("fsh_membrList").then(t(m,n)),n}function f(t,n){const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return o({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function p(t){return d(t).then(a)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return b.every(t(h,n,r))}(n,r)?r:p(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?p(r):i("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-79b20ac2.js.map
