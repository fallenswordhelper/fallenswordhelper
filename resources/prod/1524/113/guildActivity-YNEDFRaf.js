import{g as a}from"./guildManage-aUBdrOrY.js"
import{c as s}from"./closestTr-MR2B7Xci.js"
import{F as t,k as r,l as e,c as m,bH as i,al as n,cM as o,r as l,cT as c,cN as p,bh as u,f,C as d,ct as b}from"./calfSystem-VUa7wwu1.js"
import{l as j}from"./lastActivity-SSyND1j3.js"
import{r as g}from"./regExpGroups-Qkm3EIP8.js"
import{u as v}from"./uniq-zrnDDej-.js"
import{k as x}from"./keys-fO1nQfVO.js"
import{b as _}from"./now-pQzGw6vd.js"
import{n as y}from"./numberIsNaN--k2kVli9.js"
import{s as N}from"./idb-gpu32B-C.js"
import{g as k,u as M,f as h,c as w,l as T,m as U,v as C,b as E}from"./utils-xzcss8PR.js"
import"./guildMembers-hej1TkS-.js"
import"./all-TTLWag-d.js"
import"./formatUtcDateTime-nEhiH8fM.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
const A=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),D=a=>Number(l(c,a.href)),F=a=>n(s(a)?.cells[3]),H=a=>Number(l(p,a))
function I(a){return{guild_xp:A(a),id:D(a),name:n(a),rank:F(a)}}function L(a){const{stam:s,max:t}=g(o,a)
return{current_stamina:Number(s),last_activity:j(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:H(a)}}function q(a){return{guild_id:i(),image_version:0,xp:-1,...I(a),...L(a.dataset.tipped)}}function B(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function G(a){return Math.floor(Math.max(0,_()-a)/86400)}const S=a=>[a.name,[G(a.last_activity),a.current_stamina,a.level,a.max_stamina,_(),a.vl,a.guild_xp]],X=a=>a.members.map(S),Y=a=>a.r.flatMap(X),Z=[a=>!a,(a,s)=>a[w]!==s[w],(a,s)=>a[T]!==s[T],(a,s)=>a[U]>s[U],(a,s)=>a[C]!==s[C],(a,s)=>a[E]!==s[E]],z=a=>!a.some(b),J=a=>!a.some(y),K=([,a])=>a.length,O=([a,s])=>[a,s.filter(z).filter(J)],P=a=>d(a.members||{}).map(O).filter(K),Q=(a,s)=>a[M]>s[M]?a:s,R=([a,s])=>[a,s.reduce(Q)],V=([a,s])=>[a,[s]],W=a=>([s])=>!a[s]||_()-a[s][M]>=86100,$=(a,s,t)=>{return((a,s,t)=>({lastUpdate:_(),members:f(x({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(f(a.map((a=>([s,t])=>[s,t.filter((t=>t[M]!==a[s][M]))])(s))),f(d(s).filter((r=t,([a,s])=>Z.some((t=>t(r[a]?.[0],s))))).map(V)),t)
var r}
function aa(a,s){const t=P(a),r=f(t.map(R)),e=Y(s).filter(W(r))
e.length?function(a,s,t){a&&s&&t&&N(h,$(s,t,f(a.map(V))))}(e,t,r):function(a){a&&N(h,{lastUpdate:_(),members:f(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map(q)
return{r:v(n,"rank").map(m(B,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>_()>u(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await k())}export{ra as default}
//# sourceMappingURL=guildActivity-YNEDFRaf.js.map
