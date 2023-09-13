import{r as s,l as t}from"./lastActivityToDays-2b210b69.js"
import{bn as a,f as m,C as r,cw as i}from"./calfSystem-2f15e074.js"
import{k as o}from"./keys-ae03eaa2.js"
import{n as e}from"./numberIsNaN-a40c3bbb.js"
import{b as p}from"./now-6f22aec9.js"
import{s as n}from"./idb-28aa7d4a.js"
import{g as l,u as f,f as c,c as u,l as j,m as b,v as d,b as g}from"./utils-b4fa7dde.js"
import"./guildManage-9b6c7211.js"
import"./closestTr-ce435b3a.js"
import"./lastActivity-f32257d7.js"
import"./regExpGroups-54cf6a6f.js"
import"./uniq-9cddbf0f.js"
import"./guildMembers-1ceac4c8.js"
import"./all-414e0607.js"
import"./formatUtcDateTime-1099acf4.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
const y=s=>[s.name,[t(s.last_activity),s.current_stamina,s.level,s.max_stamina,p(),s.vl,s.guild_xp]],v=s=>s.members.map(y),U=s=>s.r.flatMap(v),w=[s=>!s,(s,t)=>s[u]!==t[u],(s,t)=>s[j]!==t[j],(s,t)=>s[b]>t[b],(s,t)=>s[d]!==t[d],(s,t)=>s[g]!==t[g]],x=s=>!s.some(i),D=s=>!s.some(e),_=([,s])=>s.length,M=([s,t])=>[s,t.filter(x).filter(D)],T=s=>r(s.members||{}).map(M).filter(_),h=(s,t)=>s[f]>t[f]?s:t,k=([s,t])=>[s,t.reduce(h)],A=([s,t])=>[s,[t]],L=s=>([t])=>!s[t]||p()-s[t][f]>=86100,N=(s,t,a)=>{return((s,t,a)=>({lastUpdate:p(),members:m(o({...s,...t,...a}).map((m=>[m,[...s[m]??[],...t[m]??[],...a[m]??[]]])))}))(m(s.map((s=>([t,a])=>[t,a.filter((a=>a[f]!==s[t][f]))])(t))),m(r(t).filter((i=a,([s,t])=>w.some((a=>a(i[s]?.[0],t))))).map(A)),a)
var i}
function Y(s,t){const a=T(s),r=m(a.map(k)),i=U(t).filter(L(r))
i.length?function(s,t,a){s&&t&&a&&n(c,N(t,a,m(s.map(A))))}(i,a,r):function(s){s&&n(c,{lastUpdate:p(),members:m(s)})}(a)}const Z=s=>p()>a(s.lastUpdate,0)+300
function q(t){Z(t)&&async function(t){const a=await s()
a.s&&Y(t,a)}(t)}async function C(){q(await l())}export{C as default}
//# sourceMappingURL=guildActivity-6ee9ea23.js.map
