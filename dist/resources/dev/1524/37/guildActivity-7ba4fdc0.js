import{d as t,l as a}from"./lastActivityToDays-856fcddf.js"
import{V as s,a6 as n,t as e}from"./calfSystem-5d0c721b.js"
import{u as m,a as i,c as r,m as c,l as o,v as f,g as l}from"./indexConstants-0f60490c.js"
import{g as u,s as d}from"./idb-a2aaccdb.js"
import"./guild-f2d7df88.js"
let b,p
function v(t){b.members[t.name].push([a(t.last_activity),t.current_stamina,t.level,t.max_stamina,s,t.vl,t.guild_xp])}const _=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[c],(t,a)=>a.level!==t[o],(t,a)=>a.vl!==t[f],(t,a)=>a.guild_xp!==t[l]]
function g(t,a,s){return s(t,a)}function h(t,n){!function(t,a){return _.some(e(g,t,a))}(t,n)?(t[i]=a(n.last_activity),t[m]=s):v(n)}function y(t,a){!function(t){b.members[t.name]||(b.members[t.name]=[],v(t))}(a)
const n=b.members[a.name],e=n[n.length-1]
s-e[m]>=86100&&h(e,a),t.members[a.name]=b.members[a.name]}function x(t,a){a.members.forEach(e(y,t))}function j(t){t&&t.r&&(p=t,function(){const t={lastUpdate:s,members:{}}
p.r.ranks.forEach(e(x,t)),d("fsh_guildActivity",t)}())}function A(a){b=a||{lastUpdate:0,members:{}},s>n(b.lastUpdate,0)+300&&t().then(j)}function U(){u("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-7ba4fdc0.js.map
