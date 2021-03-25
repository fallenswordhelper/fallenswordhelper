import{$ as t,U as a,a5 as n,t as e}from"./calfSystem-cb2a6f39.js"
import{g as s}from"./guild-a2e2fb1a.js"
import{u as m,a as i,c as r,m as o,l as c,v as u,g as f}from"./indexConstants-0f60490c.js"
import{g as l,s as b}from"./idb-b27e17a7.js"
let d,p,g
function h(){return d||(d=s({subcmd:"manage"})),d}function _(t){return Math.floor(Math.max(0,a-t)/86400)}function v(t){p.members[t.name].push([_(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const x=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[c],(t,a)=>a.vl!==t[u],(t,a)=>a.guild_xp!==t[f]]
function y(t,a,n){return n(t,a)}function j(t,n){!function(t,a){return x.some(e(y,t,a))}(t,n)?(t[i]=_(n.last_activity),t[m]=a):v(n)}function U(t,n){!function(t){p.members[t.name]||(p.members[t.name]=[],v(t))}(n)
const e=p.members[n.name],s=e[e.length-1]
a-s[m]>=86100&&j(s,n),t.members[n.name]=p.members[n.name]}function A(t,a){a.members.forEach(e(U,t))}function E(t){t&&t.r&&(g=t,function(){const t={lastUpdate:a,members:{}}
g.r.ranks.forEach(e(A,t)),b("fsh_guildActivity",t)}())}function M(e){p=e||{lastUpdate:0,members:{}},a>n(p.lastUpdate,0)+300&&t(h).then(E)}function k(){l("fsh_guildActivity").then(M)}export default k
//# sourceMappingURL=guildActivity-2064186c.js.map
