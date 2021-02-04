import{g as t}from"./guild-17d1b334.js"
import{T as a,a3 as n,t as e}from"./calfSystem-0708a9bb.js"
import{u as s,a as m,c as i,m as r,l as o,v as c,g as u}from"./indexConstants-f47734a3.js"
import{g as f,s as l}from"./idb-9ebd251c.js"
let b,d,p
function g(){return b||(b=t({subcmd:"manage"})),b}function h(t){return Math.floor(Math.max(0,a-t)/86400)}function _(t){d.members[t.name].push([h(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const v=[(t,a)=>a.current_stamina!==t[i],(t,a)=>a.max_stamina>t[r],(t,a)=>a.level!==t[o],(t,a)=>a.vl!==t[c],(t,a)=>a.guild_xp!==t[u]]
function x(t,a,n){return n(t,a)}function y(t,n){!function(t,a){return v.some(e(x,t,a))}(t,n)?(t[m]=h(n.last_activity),t[s]=a):_(n)}function j(t,n){!function(t){d.members[t.name]||(d.members[t.name]=[],_(t))}(n)
const e=d.members[n.name],m=e[e.length-1]
a-m[s]>=86100&&y(m,n),t.members[n.name]=d.members[n.name]}function U(t,a){a.members.forEach(e(j,t))}function A(t){t&&t.r&&(p=t,function(){const t={lastUpdate:a,members:{}}
p.r.ranks.forEach(e(U,t)),l("fsh_guildActivity",t)}())}function E(t){d=t||{lastUpdate:0,members:{}},a>n(d.lastUpdate,0)+300&&g().then(A)}function M(){f("fsh_guildActivity").then(E)}export default M
//# sourceMappingURL=guildActivity-c478e106.js.map
