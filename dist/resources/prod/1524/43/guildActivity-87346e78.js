import{$ as t,V as a,a5 as n,t as s}from"./calfSystem-9942149b.js"
import{g as e}from"./guild-da1d82bb.js"
import{u as m,a as i,c as r,m as o,l as u,v as c,g as f}from"./indexConstants-772a333b.js"
import{g as l,s as b}from"./idb-6116f2a7.js"
let d,p,g
function h(){return d||(d=e({subcmd:"manage"})),d}function _(t){return Math.floor(Math.max(0,a-t)/86400)}function v(t){p.members[t.name].push([_(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const x=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[u],(t,a)=>a.vl!==t[c],(t,a)=>a.guild_xp!==t[f]]
function y(t,a,n){return n(t,a)}function j(t,n){!function(t,a){return x.some(s(y,t,a))}(t,n)?(t[i]=_(n.last_activity),t[m]=a):v(n)}function U(t,n){!function(t){p.members[t.name]||(p.members[t.name]=[],v(t))}(n)
const s=p.members[n.name],e=s[s.length-1]
a-e[m]>=86100&&j(e,n),t.members[n.name]=p.members[n.name]}function A(t,a){a.members.forEach(s(U,t))}function E(t){t&&t.r&&(g=t,function(){const t={lastUpdate:a,members:{}}
g.r.ranks.forEach(s(A,t)),b("fsh_guildActivity",t)}())}function M(s){p=s||{lastUpdate:0,members:{}},a>n(p.lastUpdate,0)+300&&t(h).then(E)}function k(){l("fsh_guildActivity").then(M)}export default k
//# sourceMappingURL=guildActivity-87346e78.js.map
