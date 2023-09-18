import{g as a}from"./guildManage-96b4751a.js"
import{c as s}from"./closestTr-3ee5784f.js"
import{G as t,j as r,k as e,c as m,bJ as i,am as n,cM as o,r as l,cU as c,cN as p,bj as u,f,C as d,ct as b}from"./calfSystem-929ac228.js"
import{l as j}from"./lastActivity-422d41fa.js"
import{r as g}from"./regExpGroups-9d5b9f10.js"
import{u as v}from"./uniq-a9975ce0.js"
import{k as x}from"./keys-ae03eaa2.js"
import{b as _}from"./now-6f22aec9.js"
import{n as k}from"./numberIsNaN-a40c3bbb.js"
import{s as y}from"./idb-8fd6b5d1.js"
import{g as N,u as M,f as U,c as h,l as w,m as C,v as E,b as I}from"./utils-5303e2d8.js"
import"./guildMembers-ec6b013f.js"
import"./all-414e0607.js"
import"./formatUtcDateTime-1099acf4.js"
import"./padZ-e55b66a2.js"
import"./isDate-5b0d282b.js"
const T=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),A=a=>Number(l(c,a.href)),D=a=>n(s(a)?.cells[3]),G=a=>Number(l(p,a))
function J(a){return{guild_xp:T(a),id:A(a),name:n(a),rank:D(a)}}function q(a){const{stam:s,max:t}=g(o,a)
return{current_stamina:Number(s),last_activity:j(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:G(a)}}function B(a){return{guild_id:i(),image_version:0,xp:-1,...J(a),...q(a.dataset.tipped)}}function F(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function L(a){return Math.floor(Math.max(0,_()-a)/86400)}const S=a=>[a.name,[L(a.last_activity),a.current_stamina,a.level,a.max_stamina,_(),a.vl,a.guild_xp]],X=a=>a.members.map(S),Z=a=>a.r.flatMap(X),z=[a=>!a,(a,s)=>a[h]!==s[h],(a,s)=>a[w]!==s[w],(a,s)=>a[C]>s[C],(a,s)=>a[E]!==s[E],(a,s)=>a[I]!==s[I]],H=a=>!a.some(b),K=a=>!a.some(k),O=([,a])=>a.length,P=([a,s])=>[a,s.filter(H).filter(K)],Q=a=>d(a.members||{}).map(P).filter(O),R=(a,s)=>a[M]>s[M]?a:s,V=([a,s])=>[a,s.reduce(R)],W=([a,s])=>[a,[s]],Y=a=>([s])=>!a[s]||_()-a[s][M]>=86100,$=(a,s,t)=>{return((a,s,t)=>({lastUpdate:_(),members:f(x({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(f(a.map((a=>([s,t])=>[s,t.filter((t=>t[M]!==a[s][M]))])(s))),f(d(s).filter((r=t,([a,s])=>z.some((t=>t(r[a]?.[0],s))))).map(W)),t)
var r}
function aa(a,s){const t=Q(a),r=f(t.map(V)),e=Z(s).filter(Y(r))
e.length?function(a,s,t){a&&s&&t&&y(U,$(s,t,f(a.map(W))))}(e,t,r):function(a){a&&y(U,{lastUpdate:_(),members:f(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map(B)
return{r:v(n,"rank").map(m(F,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>_()>u(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await N())}export{ra as default}
//# sourceMappingURL=guildActivity-58b685cd.js.map
