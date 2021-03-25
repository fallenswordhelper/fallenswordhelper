import{d as t,l as e}from"./lastActivityToDays-df0afbee.js"
import{V as a,a6 as s,t as n}from"./calfSystem-eeb1d862.js"
import{u as m,a as i,c as r,m as o,l as c,v as f,g as l}from"./indexConstants-d9e5e5ed.js"
import{g as u,s as d}from"./idb-874d144e.js"
import"./guild-9a62ed17.js"
let b,p
function v(t){b.members[t.name].push([e(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const _=[(t,e)=>e.current_stamina!==t[r],(t,e)=>e.max_stamina>t[o],(t,e)=>e.level!==t[c],(t,e)=>e.vl!==t[f],(t,e)=>e.guild_xp!==t[l]]
function g(t,e,a){return a(t,e)}function h(t,s){!function(t,e){return _.some(n(g,t,e))}(t,s)?(t[i]=e(s.last_activity),t[m]=a):v(s)}function y(t,e){!function(t){b.members[t.name]||(b.members[t.name]=[],v(t))}(e)
const s=b.members[e.name],n=s[s.length-1]
a-n[m]>=86100&&h(n,e),t.members[e.name]=b.members[e.name]}function x(t,e){e.members.forEach(n(y,t))}function j(t){t&&t.r&&(p=t,function(){const t={lastUpdate:a,members:{}}
p.r.ranks.forEach(n(x,t)),d("fsh_guildActivity",t)}())}function A(e){b=e||{lastUpdate:0,members:{}},a>s(b.lastUpdate,0)+300&&t().then(j)}function U(){u("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-b860f139.js.map
