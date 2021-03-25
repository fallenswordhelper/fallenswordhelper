import{t,c as n,aC as r,a8 as e,ag as s}from"./calfSystem-5d0c721b.js"
import{c as u}from"./currentGuildId-01b0f97a.js"
import{c as o}from"./cmdExport-09ebfe19.js"
import{g as i,s as c}from"./idb-a2aaccdb.js"
function m(t,n){const r=n||{}
c("fsh_membrList",$.extend(r,t))}function a(n){return i("fsh_membrList").then(t(m,n)),n}function f(t,n){const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return o({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function b(t){return d(t).then(a)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):i("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-adbb0514.js.map
