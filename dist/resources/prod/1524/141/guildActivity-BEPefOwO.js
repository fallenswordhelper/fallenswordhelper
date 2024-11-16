import{r as s,l as a}from"./lastActivityToDays-BjoCXjnn.js"
import{bO as t,br as m,C as r,cG as i,f as e,aS as o}from"./calfSystem-Blt4DbaE.js"
import{k as p}from"./keys-CFr_h3Bx.js"
import{n as l}from"./numberIsNaN-CGkd1jiA.js"
import{g as n,u as f,c,l as u,m as j,v as d,a as g,f as y}from"./utils-Cm-ANkTn.js"
import"./guildManage-BUhvojtx.js"
import"./closestTr-BGA5O97h.js"
import"./lastActivity-E8nkj_ho.js"
import"./regExpGroups-B7iOxfb4.js"
import"./uniq-D422dDMJ.js"
import"./guildMembers-B5MxM4J7.js"
import"./all-YfMtr2SN.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const b=s=>[s.name,[a(s.last_activity),s.current_stamina,s.level,s.max_stamina,t(),s.vl,s.guild_xp]],v=s=>s.members.map(b),x=s=>s.r.flatMap(v),U=[s=>!s,(s,a)=>s[c]!==a[c],(s,a)=>s[u]!==a[u],(s,a)=>s[j]>a[j],(s,a)=>s[d]!==a[d],(s,a)=>s[g]!==a[g]],_=s=>!s.some(i),A=s=>!s.some(l),D=([,s])=>s.length,M=([s,a])=>[s,a.filter(_).filter(A)],S=s=>r(s.members||{}).map(M).filter(D),T=(s,a)=>s[f]>a[f]?s:a,h=([s,a])=>[s,a.reduce(T)],k=([s,a])=>[s,[a]],w=s=>([a])=>!s[a]||t()-s[a][f]>=86100,E=(s,a,m)=>{return((s,a,m)=>({lastUpdate:t(),members:e(p({...s,...a,...m}).map((t=>[t,[...s[t]??[],...a[t]??[],...m[t]??[]]])))}))(e(s.map((s=>([a,t])=>[a,t.filter((t=>t[f]!==s[a][f]))])(a))),e(r(a).filter((i=m,([s,a])=>U.some((t=>t(i[s]?.[0],a))))).map(k)),m)
var i}
function G(s,a){const m=S(s),r=e(m.map(h)),i=x(a).filter(w(r))
i.length?function(s,a,t){s&&a&&t&&o(y,E(a,t,e(s.map(k))))}(i,m,r):function(s){s&&o(y,{lastUpdate:t(),members:e(s)})}(m)}const N=s=>t()>m(s.lastUpdate,0)+300
function Z(a){N(a)&&async function(a){const t=await s()
t.s&&G(a,t)}(a)}async function q(){Z(await n())}export{q as default}
//# sourceMappingURL=guildActivity-BEPefOwO.js.map
