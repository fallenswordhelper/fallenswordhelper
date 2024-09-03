import{g as a}from"./guildManage-Dyy-lxHt.js"
import{c as s}from"./closestTr-BkvkFNg4.js"
import{H as t,k as r,l as e,c as m,bQ as i,aq as n,cU as o,r as l,c$ as c,cV as p,bp as u,f,C as d,aQ as b,cx as j}from"./calfSystem-CgXU6vdM.js"
import{l as g}from"./lastActivity-Cym2cdjL.js"
import{r as v}from"./regExpGroups-Cu71YNpe.js"
import{u as x}from"./uniq-BYorpzeb.js"
import{k as _}from"./keys-CFr_h3Bx.js"
import{b as k}from"./now-Cx4PsKjI.js"
import{n as y}from"./numberIsNaN-CGkd1jiA.js"
import{g as N,u as U,f as h,c as M,l as w,m as C,v as E,a as I}from"./utils-BXBwaxop.js"
import"./guildMembers-nhFgcKPE.js"
import"./all-YfMtr2SN.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const q=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),A=a=>Number(l(c,a.href)),D=a=>n(s(a)?.cells[3]),Q=a=>Number(l(p,a))
function T(a){return{guild_xp:q(a),id:A(a),name:n(a),rank:D(a)}}function V(a){const{stam:s,max:t}=v(o,a)
return{current_stamina:Number(s),last_activity:g(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:Q(a)}}function $(a){return{guild_id:i(),image_version:0,xp:-1,...T(a),...V(a.dataset.tipped)}}function B(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function F(a){return Math.floor(Math.max(0,k()-a)/86400)}const G=a=>[a.name,[F(a.last_activity),a.current_stamina,a.level,a.max_stamina,k(),a.vl,a.guild_xp]],H=a=>a.members.map(G),J=a=>a.r.flatMap(H),L=[a=>!a,(a,s)=>a[M]!==s[M],(a,s)=>a[w]!==s[w],(a,s)=>a[C]>s[C],(a,s)=>a[E]!==s[E],(a,s)=>a[I]!==s[I]],S=a=>!a.some(j),X=a=>!a.some(y),Z=([,a])=>a.length,z=([a,s])=>[a,s.filter(S).filter(X)],K=a=>d(a.members||{}).map(z).filter(Z),O=(a,s)=>a[U]>s[U]?a:s,P=([a,s])=>[a,s.reduce(O)],R=([a,s])=>[a,[s]],W=a=>([s])=>!a[s]||k()-a[s][U]>=86100,Y=(a,s,t)=>{return((a,s,t)=>({lastUpdate:k(),members:f(_({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(f(a.map((a=>([s,t])=>[s,t.filter((t=>t[U]!==a[s][U]))])(s))),f(d(s).filter((r=t,([a,s])=>L.some((t=>t(r[a]?.[0],s))))).map(R)),t)
var r}
function aa(a,s){const t=K(a),r=f(t.map(P)),e=J(s).filter(W(r))
e.length?function(a,s,t){a&&s&&t&&b(h,Y(s,t,f(a.map(R))))}(e,t,r):function(a){a&&b(h,{lastUpdate:k(),members:f(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map($)
return{r:x(n,"rank").map(m(B,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>k()>u(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await N())}export{ra as default}
//# sourceMappingURL=guildActivity-CVt4vmXN.js.map
