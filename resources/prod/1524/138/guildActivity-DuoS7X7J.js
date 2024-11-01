import{r as s,l as a}from"./lastActivityToDays-DO9xJNLU.js"
import{bO as t,br as m,f as r,C as i,aS as e,cG as o}from"./calfSystem-BjarbvkO.js"
import{k as p}from"./keys-CFr_h3Bx.js"
import{n as l}from"./numberIsNaN-CGkd1jiA.js"
import{g as n,u as f,f as c,c as u,l as j,m as d,v as g,a as y}from"./utils-DnDlh8Bz.js"
import"./guildManage-CbtZsm2m.js"
import"./closestTr-BDCF6M_H.js"
import"./lastActivity-D4KeqlKY.js"
import"./regExpGroups-DF34eiOE.js"
import"./uniq-CMbuE8hS.js"
import"./guildMembers-CCBJ9tp8.js"
import"./all-YfMtr2SN.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const b=s=>[s.name,[a(s.last_activity),s.current_stamina,s.level,s.max_stamina,t(),s.vl,s.guild_xp]],v=s=>s.members.map(b),x=s=>s.r.flatMap(v),U=[s=>!s,(s,a)=>s[u]!==a[u],(s,a)=>s[j]!==a[j],(s,a)=>s[d]>a[d],(s,a)=>s[g]!==a[g],(s,a)=>s[y]!==a[y]],_=s=>!s.some(o),A=s=>!s.some(l),D=([,s])=>s.length,M=([s,a])=>[s,a.filter(_).filter(A)],S=s=>i(s.members||{}).map(M).filter(D),T=(s,a)=>s[f]>a[f]?s:a,h=([s,a])=>[s,a.reduce(T)],k=([s,a])=>[s,[a]],w=s=>([a])=>!s[a]||t()-s[a][f]>=86100,E=(s,a,m)=>{return((s,a,m)=>({lastUpdate:t(),members:r(p({...s,...a,...m}).map((t=>[t,[...s[t]??[],...a[t]??[],...m[t]??[]]])))}))(r(s.map((s=>([a,t])=>[a,t.filter((t=>t[f]!==s[a][f]))])(a))),r(i(a).filter((e=m,([s,a])=>U.some((t=>t(e[s]?.[0],a))))).map(k)),m)
var e}
function G(s,a){const m=S(s),i=r(m.map(h)),o=x(a).filter(w(i))
o.length?function(s,a,t){s&&a&&t&&e(c,E(a,t,r(s.map(k))))}(o,m,i):function(s){s&&e(c,{lastUpdate:t(),members:r(s)})}(m)}const N=s=>t()>m(s.lastUpdate,0)+300
function Z(a){N(a)&&async function(a){const t=await s()
t.s&&G(a,t)}(a)}async function q(){Z(await n())}export{q as default}
//# sourceMappingURL=guildActivity-DuoS7X7J.js.map
