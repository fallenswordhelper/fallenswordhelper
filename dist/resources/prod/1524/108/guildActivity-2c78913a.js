import{r as s,l as t}from"./lastActivityToDays-2d0afe9f.js"
import{bn as a,f as m,C as r,cw as i}from"./calfSystem-34913441.js"
import{k as o}from"./keys-ae03eaa2.js"
import{n as e}from"./numberIsNaN-a40c3bbb.js"
import{b as p}from"./now-6f22aec9.js"
import{s as n}from"./idb-ec5d6344.js"
import{g as l,u as f,f as c,c as u,l as j,m as b,v as d,b as g}from"./utils-871680a6.js"
import"./guildManage-08277e29.js"
import"./closestTr-316dea29.js"
import"./lastActivity-75095e08.js"
import"./regExpGroups-e9c1f885.js"
import"./uniq-a7375dfa.js"
import"./guildMembers-3d3812de.js"
import"./all-414e0607.js"
import"./formatUtcDateTime-1099acf4.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
const y=s=>[s.name,[t(s.last_activity),s.current_stamina,s.level,s.max_stamina,p(),s.vl,s.guild_xp]],v=s=>s.members.map(y),w=s=>s.r.flatMap(v),x=[s=>!s,(s,t)=>s[u]!==t[u],(s,t)=>s[j]!==t[j],(s,t)=>s[b]>t[b],(s,t)=>s[d]!==t[d],(s,t)=>s[g]!==t[g]],T=s=>!s.some(i),U=s=>!s.some(e),_=([,s])=>s.length,k=([s,t])=>[s,t.filter(T).filter(U)],D=s=>r(s.members||{}).map(k).filter(_),M=(s,t)=>s[f]>t[f]?s:t,h=([s,t])=>[s,t.reduce(M)],A=([s,t])=>[s,[t]],C=s=>([t])=>!s[t]||p()-s[t][f]>=86100,N=(s,t,a)=>{return((s,t,a)=>({lastUpdate:p(),members:m(o({...s,...t,...a}).map((m=>[m,[...s[m]??[],...t[m]??[],...a[m]??[]]])))}))(m(s.map((s=>([t,a])=>[t,a.filter((a=>a[f]!==s[t][f]))])(t))),m(r(t).filter((i=a,([s,t])=>x.some((a=>a(i[s]?.[0],t))))).map(A)),a)
var i}
function X(s,t){const a=D(s),r=m(a.map(h)),i=w(t).filter(C(r))
i.length?function(s,t,a){s&&t&&a&&n(c,N(t,a,m(s.map(A))))}(i,a,r):function(s){s&&n(c,{lastUpdate:p(),members:m(s)})}(a)}const Z=s=>p()>a(s.lastUpdate,0)+300
function q(t){Z(t)&&async function(t){const a=await s()
a.s&&X(t,a)}(t)}async function E(){q(await l())}export{E as default}
//# sourceMappingURL=guildActivity-2c78913a.js.map
