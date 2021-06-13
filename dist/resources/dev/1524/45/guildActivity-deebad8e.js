import{d as t,l as a}from"./lastActivityToDays-5d34266c.js"
import{V as s,a5 as e,t as n}from"./calfSystem-6a3c85e0.js"
import{u as m,a as i,c as r,m as o,l as c,v as l,g as u}from"./indexConstants-718f246e.js"
import{g as f,s as d}from"./idb-66004b57.js"
import"./guild-7eedd9cd.js"
let p,b
function v(t){p.members[t.name].push([a(t.last_activity),t.current_stamina,t.level,t.max_stamina,s,t.vl,t.guild_xp])}const _=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[c],(t,a)=>a.vl!==t[l],(t,a)=>a.guild_xp!==t[u]]
function g(t,a,s){return s(t,a)}function h(t,e){!function(t,a){return _.some(n(g,t,a))}(t,e)?(t[i]=a(e.last_activity),t[m]=s):v(e)}function y(t,a){!function(t){p.members[t.name]||(p.members[t.name]=[],v(t))}(a)
const e=p.members[a.name],n=e[e.length-1]
s-n[m]>=86100&&h(n,a),t.members[a.name]=p.members[a.name]}function x(t,a){a.members.forEach(n(y,t))}function j(t){t&&t.r&&(b=t,function(){const t={lastUpdate:s,members:{}}
b.r.ranks.forEach(n(x,t)),d("fsh_guildActivity",t)}())}function A(a){p=a||{lastUpdate:0,members:{}},s>e(p.lastUpdate,0)+300&&t().then(j)}function U(){f("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-deebad8e.js.map
