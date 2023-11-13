import{g as a}from"./guildManage-XPYfWOqK.js"
import{c as s}from"./closestTr-Vv3gA4eP.js"
import{F as t,k as r,l as e,c as m,bH as i,al as n,cL as o,r as l,cS as c,cM as p,bh as u,f,C as d,cs as b}from"./calfSystem-rn9Rc_nF.js"
import{l as j}from"./lastActivity-LZrHkUax.js"
import{r as g}from"./regExpGroups-aNVGlRVi.js"
import{u as v}from"./uniq-rEURYuE3.js"
import{k as x}from"./keys-fO1nQfVO.js"
import{b as _}from"./now-pQzGw6vd.js"
import{n as y}from"./numberIsNaN--k2kVli9.js"
import{s as k}from"./idb-1b6_RJN1.js"
import{g as N,u as M,f as h,c as w,l as U,m as C,v as E,b as L}from"./utils-kRntK1xM.js"
import"./guildMembers-q4YutUVF.js"
import"./all-TTLWag-d.js"
import"./formatUtcDateTime-nEhiH8fM.js"
import"./padZ-zYXZ2AFi.js"
import"./isDate-_f6F_mjJ.js"
const T=a=>Number(n(s(a)?.cells[4])?.replaceAll(",","")),A=a=>Number(l(c,a.href)),D=a=>n(s(a)?.cells[3]),F=a=>Number(l(p,a))
function H(a){return{guild_xp:T(a),id:A(a),name:n(a),rank:D(a)}}function I(a){const{stam:s,max:t}=g(o,a)
return{current_stamina:Number(s),last_activity:j(a).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,a)),max_stamina:Number(t),vl:F(a)}}function S(a){return{guild_id:i(),image_version:0,xp:-1,...H(a),...I(a.dataset.tipped)}}function q(a,s,t){return{id:t,members:a.filter((a=>a.rank===s.rank)),name:s.rank,permissions:0,tax:-1}}function B(a){return Math.floor(Math.max(0,_()-a)/86400)}const G=a=>[a.name,[B(a.last_activity),a.current_stamina,a.level,a.max_stamina,_(),a.vl,a.guild_xp]],X=a=>a.members.map(G),Y=a=>a.r.flatMap(X),Z=[a=>!a,(a,s)=>a[w]!==s[w],(a,s)=>a[U]!==s[U],(a,s)=>a[C]>s[C],(a,s)=>a[E]!==s[E],(a,s)=>a[L]!==s[L]],z=a=>!a.some(b),J=a=>!a.some(y),K=([,a])=>a.length,O=([a,s])=>[a,s.filter(z).filter(J)],P=a=>d(a.members||{}).map(O).filter(K),Q=(a,s)=>a[M]>s[M]?a:s,R=([a,s])=>[a,s.reduce(Q)],V=([a,s])=>[a,[s]],W=a=>([s])=>!a[s]||_()-a[s][M]>=86100,$=(a,s,t)=>{return((a,s,t)=>({lastUpdate:_(),members:f(x({...a,...s,...t}).map((r=>[r,[...a[r]??[],...s[r]??[],...t[r]??[]]])))}))(f(a.map((a=>([s,t])=>[s,t.filter((t=>t[M]!==a[s][M]))])(s))),f(d(s).filter((r=t,([a,s])=>Z.some((t=>t(r[a]?.[0],s))))).map(V)),t)
var r}
function aa(a,s){const t=P(a),r=f(t.map(R)),e=Y(s).filter(W(r))
e.length?function(a,s,t){a&&s&&t&&k(h,$(s,t,f(a.map(V))))}(e,t,r):function(a){a&&k(h,{lastUpdate:_(),members:f(a)})}(t)}async function sa(s){const i=await async function(){const s=await a(),i=t(s).getElementById("pCC")
if(!i)return{e:{code:0,message:"Failure"},s:!1}
const n=r(e,i).map(S)
return{r:v(n,"rank").map(m(q,n)),s:!0}}()
i.s&&aa(s,i)}const ta=a=>_()>u(a.lastUpdate,0)+300
async function ra(){!function(a){ta(a)&&sa(a)}(await N())}export{ra as default}
//# sourceMappingURL=guildActivity-Kc0JFtwf.js.map
