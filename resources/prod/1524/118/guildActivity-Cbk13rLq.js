import{g as a}from"./guildManage-C30GE_1p.js"
import{c as s}from"./closestTr-B6tzN2bs.js"
import{H as t,k as r,l as e,c as m,bP as i,aq as n,cX as o,r as l,d2 as c,cY as p,bp as u,f,C as d,aQ as b,cy as j}from"./calfSystem-hszmVKJw.js"
import{l as g}from"./lastActivity-BB2E-IkS.js"
import{r as v}from"./regExpGroups-DzwffQY2.js"
import{u as x}from"./uniq-mEfy13BU.js"
import{k as y}from"./keys-CFr_h3Bx.js"
import{b as _}from"./now-Cx4PsKjI.js"
import{n as k}from"./numberIsNaN-CGkd1jiA.js"
import{g as N,u as h,f as M,c as U,l as w,m as C,v as I,a as X}from"./utils-pr1lKyZi.js"
import"./guildMembers-lKyL-vXF.js"
import"./all-YfMtr2SN.js"
import"./formatUtcDateTime-DUH5p_s6.js"
import"./padZ-DFV6JBPu.js"
import"./isDate-BKJblKvH.js"
const q=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),A=a=>Number(l(c,a.href)),B=a=>n(s(a)?.cells[3]),D=a=>Number(l(p,a))
function E(a){return{guild_xp:q(a),id:A(a),name:n(a),rank:B(a)}}function F(a){const{stam:s,max:t}=v(o,a)
return{current_stamina:Number(s),last_activity:g(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:D(a)}}function T(a){return{guild_id:i(),image_version:0,xp:-1,...E(a),...F(a.dataset.tipped)}}function G(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function H(a){return Math.floor(Math.max(0,_()-a)/86400)}const J=a=>[a.name,[H(a.last_activity),a.current_stamina,a.level,a.max_stamina,_(),a.vl,a.guild_xp]],L=a=>a.members.map(J),P=a=>a.r.flatMap(L),Q=[a=>!a,(a,s)=>a[U]!==s[U],(a,s)=>a[w]!==s[w],(a,s)=>a[C]>s[C],(a,s)=>a[I]!==s[I],(a,s)=>a[X]!==s[X]],S=a=>!a.some(j),Y=a=>!a.some(k),Z=([,a])=>a.length,$=([a,s])=>[a,s.filter(S).filter(Y)],z=a=>d(a.members||{}).map($).filter(Z),K=(a,s)=>a[h]>s[h]?a:s,O=([a,s])=>[a,s.reduce(K)],R=([a,s])=>[a,[s]],V=a=>([s])=>!a[s]||_()-a[s][h]>=86100,W=(a,s,t)=>{return((a,s,t)=>({lastUpdate:_(),members:f(y({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(f(a.map((a=>([s,t])=>[s,t.filter((t=>t[h]!==a[s][h]))])(s))),f(d(s).filter((r=t,([a,s])=>Q.some((t=>t(r[a]?.[0],s))))).map(R)),t)
var r}
function aa(a,s){const t=z(a),r=f(t.map(O)),e=P(s).filter(V(r))
e.length?function(a,s,t){a&&s&&t&&b(M,W(s,t,f(a.map(R))))}(e,t,r):function(a){a&&b(M,{lastUpdate:_(),members:f(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map(T)
return{r:x(n,"rank").map(m(G,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>_()>u(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await N())}export{ra as default}
//# sourceMappingURL=guildActivity-Cbk13rLq.js.map
