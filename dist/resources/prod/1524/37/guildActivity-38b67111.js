import{$ as t,U as a,a5 as n,t as s}from"./calfSystem-60c20ae9.js"
import{g as e}from"./guild-d3cc9553.js"
import{u as m,a as i,c as r,m as c,l as o,v as u,g as f}from"./indexConstants-0f60490c.js"
import{g as l,s as d}from"./idb-a07bf138.js"
let b,p,g
function h(){return b||(b=e({subcmd:"manage"})),b}function _(t){return Math.floor(Math.max(0,a-t)/86400)}function v(t){p.members[t.name].push([_(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const x=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[c],(t,a)=>a.level!==t[o],(t,a)=>a.vl!==t[u],(t,a)=>a.guild_xp!==t[f]]
function y(t,a,n){return n(t,a)}function j(t,n){!function(t,a){return x.some(s(y,t,a))}(t,n)?(t[i]=_(n.last_activity),t[m]=a):v(n)}function U(t,n){!function(t){p.members[t.name]||(p.members[t.name]=[],v(t))}(n)
const s=p.members[n.name],e=s[s.length-1]
a-e[m]>=86100&&j(e,n),t.members[n.name]=p.members[n.name]}function A(t,a){a.members.forEach(s(U,t))}function E(t){t&&t.r&&(g=t,function(){const t={lastUpdate:a,members:{}}
g.r.ranks.forEach(s(A,t)),d("fsh_guildActivity",t)}())}function M(s){p=s||{lastUpdate:0,members:{}},a>n(p.lastUpdate,0)+300&&t(h).then(E)}function k(){l("fsh_guildActivity").then(M)}export default k
//# sourceMappingURL=guildActivity-38b67111.js.map
