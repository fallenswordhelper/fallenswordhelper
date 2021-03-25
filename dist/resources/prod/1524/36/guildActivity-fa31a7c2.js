import{$ as t,U as a,a5 as e,t as n}from"./calfSystem-e7bde0c3.js"
import{g as s}from"./guild-e896510a.js"
import{u as m,a as i,c as r,m as o,l as c,v as u,g as f}from"./indexConstants-d9e5e5ed.js"
import{g as l,s as d}from"./idb-47978eaa.js"
let b,p,g
function h(){return b||(b=s({subcmd:"manage"})),b}function _(t){return Math.floor(Math.max(0,a-t)/86400)}function v(t){p.members[t.name].push([_(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const x=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[c],(t,a)=>a.vl!==t[u],(t,a)=>a.guild_xp!==t[f]]
function y(t,a,e){return e(t,a)}function j(t,e){!function(t,a){return x.some(n(y,t,a))}(t,e)?(t[i]=_(e.last_activity),t[m]=a):v(e)}function U(t,e){!function(t){p.members[t.name]||(p.members[t.name]=[],v(t))}(e)
const n=p.members[e.name],s=n[n.length-1]
a-s[m]>=86100&&j(s,e),t.members[e.name]=p.members[e.name]}function A(t,a){a.members.forEach(n(U,t))}function E(t){t&&t.r&&(g=t,function(){const t={lastUpdate:a,members:{}}
g.r.ranks.forEach(n(A,t)),d("fsh_guildActivity",t)}())}function M(n){p=n||{lastUpdate:0,members:{}},a>e(p.lastUpdate,0)+300&&t(h).then(E)}function k(){l("fsh_guildActivity").then(M)}export default k
//# sourceMappingURL=guildActivity-fa31a7c2.js.map
