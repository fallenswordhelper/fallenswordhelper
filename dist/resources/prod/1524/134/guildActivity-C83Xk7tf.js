import{g as a}from"./guildManage-XoowwLzs.js"
import{c as s}from"./closestTr-BHr42g8T.js"
import{H as t,k as r,l as e,c as m,bW as i,as as n,d1 as o,r as l,d8 as u,d2 as c,bO as p,br as f,f as d,C as b,aS as j,cG as g}from"./calfSystem-CyLCrHqa.js"
import{l as v}from"./lastActivity-CmZHrtR_.js"
import{r as x}from"./regExpGroups-mnVKS3rG.js"
import{u as _}from"./uniq-DXRxPJJ2.js"
import{k as y}from"./keys-CFr_h3Bx.js"
import{n as k}from"./numberIsNaN-CGkd1jiA.js"
import{g as N,u as U,f as h,c as M,l as w,m as C,v as D,a as I}from"./utils-DihWmDYf.js"
import"./guildMembers-C3YZ3Xen.js"
import"./all-YfMtr2SN.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const A=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),B=a=>Number(l(u,a.href)),E=a=>n(s(a)?.cells[3]),G=a=>Number(l(c,a))
function H(a){return{guild_xp:A(a),id:B(a),name:n(a),rank:E(a)}}function S(a){const{stam:s,max:t}=x(o,a)
return{current_stamina:Number(s),last_activity:v(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:G(a)}}function T(a){return{guild_id:i(),image_version:0,xp:-1,...H(a),...S(a.dataset.tipped)}}function q(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function F(a){return Math.floor(Math.max(0,p()-a)/86400)}const L=a=>[a.name,[F(a.last_activity),a.current_stamina,a.level,a.max_stamina,p(),a.vl,a.guild_xp]],O=a=>a.members.map(L),W=a=>a.r.flatMap(O),X=[a=>!a,(a,s)=>a[M]!==s[M],(a,s)=>a[w]!==s[w],(a,s)=>a[C]>s[C],(a,s)=>a[D]!==s[D],(a,s)=>a[I]!==s[I]],Z=a=>!a.some(g),$=a=>!a.some(k),z=([,a])=>a.length,J=([a,s])=>[a,s.filter(Z).filter($)],K=a=>b(a.members||{}).map(J).filter(z),P=(a,s)=>a[U]>s[U]?a:s,Q=([a,s])=>[a,s.reduce(P)],R=([a,s])=>[a,[s]],V=a=>([s])=>!a[s]||p()-a[s][U]>=86100,Y=(a,s,t)=>{return((a,s,t)=>({lastUpdate:p(),members:d(y({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(d(a.map((a=>([s,t])=>[s,t.filter((t=>t[U]!==a[s][U]))])(s))),d(b(s).filter((r=t,([a,s])=>X.some((t=>t(r[a]?.[0],s))))).map(R)),t)
var r}
function aa(a,s){const t=K(a),r=d(t.map(Q)),e=W(s).filter(V(r))
e.length?function(a,s,t){a&&s&&t&&j(h,Y(s,t,d(a.map(R))))}(e,t,r):function(a){a&&j(h,{lastUpdate:p(),members:d(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map(T)
return{r:_(n,"rank").map(m(q,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>p()>f(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await N())}export{ra as default}
//# sourceMappingURL=guildActivity-C83Xk7tf.js.map
