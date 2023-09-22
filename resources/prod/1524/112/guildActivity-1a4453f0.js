import{g as a}from"./guildManage-3f99b452.js"
import{c as s}from"./closestTr-a662daf2.js"
import{F as t,j as r,k as e,c as m,bI as i,al as n,cM as o,r as l,cU as c,cN as p,bi as u,f,C as d,ct as b}from"./calfSystem-4830a18d.js"
import{l as j}from"./lastActivity-1c838a76.js"
import{r as g}from"./regExpGroups-9a4124f3.js"
import{u as v}from"./uniq-e12b948a.js"
import{k as x}from"./keys-ae03eaa2.js"
import{b as _}from"./now-6f22aec9.js"
import{n as y}from"./numberIsNaN-a40c3bbb.js"
import{s as N}from"./idb-7e56faaa.js"
import{g as k,u as M,f as h,c as U,l as w,m as C,v as D,b as F}from"./utils-47fa698b.js"
import"./guildMembers-7edbe4e6.js"
import"./all-414e0607.js"
import"./formatUtcDateTime-1099acf4.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
const I=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),T=a=>Number(l(c,a.href)),A=a=>n(s(a)?.cells[3]),E=a=>Number(l(p,a))
function q(a){return{guild_xp:I(a),id:T(a),name:n(a),rank:A(a)}}function B(a){const{stam:s,max:t}=g(o,a)
return{current_stamina:Number(s),last_activity:j(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:E(a)}}function G(a){return{guild_id:i(),image_version:0,xp:-1,...q(a),...B(a.dataset.tipped)}}function J(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function K(a){return Math.floor(Math.max(0,_()-a)/86400)}const L=a=>[a.name,[K(a.last_activity),a.current_stamina,a.level,a.max_stamina,_(),a.vl,a.guild_xp]],S=a=>a.members.map(L),V=a=>a.r.flatMap(S),X=[a=>!a,(a,s)=>a[U]!==s[U],(a,s)=>a[w]!==s[w],(a,s)=>a[C]>s[C],(a,s)=>a[D]!==s[D],(a,s)=>a[F]!==s[F]],Z=a=>!a.some(b),z=a=>!a.some(y),H=([,a])=>a.length,O=([a,s])=>[a,s.filter(Z).filter(z)],P=a=>d(a.members||{}).map(O).filter(H),Q=(a,s)=>a[M]>s[M]?a:s,R=([a,s])=>[a,s.reduce(Q)],W=([a,s])=>[a,[s]],Y=a=>([s])=>!a[s]||_()-a[s][M]>=86100,$=(a,s,t)=>{return((a,s,t)=>({lastUpdate:_(),members:f(x({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(f(a.map((a=>([s,t])=>[s,t.filter((t=>t[M]!==a[s][M]))])(s))),f(d(s).filter((r=t,([a,s])=>X.some((t=>t(r[a]?.[0],s))))).map(W)),t)
var r}
function aa(a,s){const t=P(a),r=f(t.map(R)),e=V(s).filter(Y(r))
e.length?function(a,s,t){a&&s&&t&&N(h,$(s,t,f(a.map(W))))}(e,t,r):function(a){a&&N(h,{lastUpdate:_(),members:f(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map(G)
return{r:v(n,"rank").map(m(J,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>_()>u(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await k())}export{ra as default}
//# sourceMappingURL=guildActivity-1a4453f0.js.map
