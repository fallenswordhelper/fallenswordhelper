import{g as a}from"./guildManage-rZ5WMs6q.js"
import{c as s}from"./closestTr-ewZQ2axu.js"
import{H as t,k as r,l as e,c as m,bP as i,aq as n,cX as o,r as l,d2 as c,cY as p,bp as u,f,C as d,aQ as b,cy as j}from"./calfSystem-G1dN925O.js"
import{l as g}from"./lastActivity-AD7TXVQF.js"
import{r as v}from"./regExpGroups-4702yhMp.js"
import{u as _}from"./uniq-GAsQHoVb.js"
import{k as x}from"./keys-fO1nQfVO.js"
import{b as y}from"./now-pQzGw6vd.js"
import{n as k}from"./numberIsNaN--k2kVli9.js"
import{g as N,u as h,f as M,c as w,l as U,m as A,v as C,a as E}from"./utils-3lEGffNh.js"
import"./guildMembers-4GuRAnc8.js"
import"./all-TTLWag-d.js"
import"./formatUtcDateTime-nEhiH8fM.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
const I=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),T=a=>Number(l(c,a.href)),q=a=>n(s(a)?.cells[3]),D=a=>Number(l(p,a))
function H(a){return{guild_xp:I(a),id:T(a),name:n(a),rank:q(a)}}function B(a){const{stam:s,max:t}=v(o,a)
return{current_stamina:Number(s),last_activity:g(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:D(a)}}function F(a){return{guild_id:i(),image_version:0,xp:-1,...H(a),...B(a.dataset.tipped)}}function G(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function L(a){return Math.floor(Math.max(0,y()-a)/86400)}const P=a=>[a.name,[L(a.last_activity),a.current_stamina,a.level,a.max_stamina,y(),a.vl,a.guild_xp]],Q=a=>a.members.map(P),S=a=>a.r.flatMap(Q),V=[a=>!a,(a,s)=>a[w]!==s[w],(a,s)=>a[U]!==s[U],(a,s)=>a[A]>s[A],(a,s)=>a[C]!==s[C],(a,s)=>a[E]!==s[E]],W=a=>!a.some(j),X=a=>!a.some(k),Y=([,a])=>a.length,Z=([a,s])=>[a,s.filter(W).filter(X)],z=a=>d(a.members||{}).map(Z).filter(Y),J=(a,s)=>a[h]>s[h]?a:s,K=([a,s])=>[a,s.reduce(J)],O=([a,s])=>[a,[s]],R=a=>([s])=>!a[s]||y()-a[s][h]>=86100,$=(a,s,t)=>{return((a,s,t)=>({lastUpdate:y(),members:f(x({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(f(a.map((a=>([s,t])=>[s,t.filter((t=>t[h]!==a[s][h]))])(s))),f(d(s).filter((r=t,([a,s])=>V.some((t=>t(r[a]?.[0],s))))).map(O)),t)
var r}
function aa(a,s){const t=z(a),r=f(t.map(K)),e=S(s).filter(R(r))
e.length?function(a,s,t){a&&s&&t&&b(M,$(s,t,f(a.map(O))))}(e,t,r):function(a){a&&b(M,{lastUpdate:y(),members:f(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map(F)
return{r:_(n,"rank").map(m(G,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>y()>u(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await N())}export{ra as default}
//# sourceMappingURL=guildActivity-cEPNZcZM.js.map
