import{d as t,l as a}from"./lastActivityToDays-d3281ec6.js"
import{V as s,a6 as n,t as e}from"./calfSystem-b31aba65.js"
import{u as m,a as i,c as r,m as c,l as o,v as l,g as u}from"./indexConstants-91c1487d.js"
import{g as f,s as d}from"./idb-71729176.js"
import"./guild-c7514cf3.js"
let b,p
function v(t){b.members[t.name].push([a(t.last_activity),t.current_stamina,t.level,t.max_stamina,s,t.vl,t.guild_xp])}const _=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[c],(t,a)=>a.level!==t[o],(t,a)=>a.vl!==t[l],(t,a)=>a.guild_xp!==t[u]]
function g(t,a,s){return s(t,a)}function h(t,n){!function(t,a){return _.some(e(g,t,a))}(t,n)?(t[i]=a(n.last_activity),t[m]=s):v(n)}function y(t,a){!function(t){b.members[t.name]||(b.members[t.name]=[],v(t))}(a)
const n=b.members[a.name],e=n[n.length-1]
s-e[m]>=86100&&h(e,a),t.members[a.name]=b.members[a.name]}function x(t,a){a.members.forEach(e(y,t))}function j(t){t&&t.r&&(p=t,function(){const t={lastUpdate:s,members:{}}
p.r.ranks.forEach(e(x,t)),d("fsh_guildActivity",t)}())}function A(a){b=a||{lastUpdate:0,members:{}},s>n(b.lastUpdate,0)+300&&t().then(j)}function U(){f("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-598d1823.js.map
