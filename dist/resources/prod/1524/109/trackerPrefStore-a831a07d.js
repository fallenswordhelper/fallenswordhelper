import{a,$ as s,C as t,E as e,f as r,bl as n,c as o,d9 as m}from"./calfSystem-2f15e074.js"
import{r as c}from"./now-6f22aec9.js"
import{g as i,s as l}from"./idb-28aa7d4a.js"
import{u as p}from"./uniq-9cddbf0f.js"
function u(){return a({cmd:"superelite"})}function f(a){return t(a?.se??{}).flatMap((([s,t])=>e(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),d=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),_=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>r(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),w=a=>r(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),g=a=>({se:j(a),loc:w(a)})
const h=n()
let y=!1,N={},x=0,A=!1
const E=a=>Math.max(0,600-(c()-(a?.lastUpdate??0)),600-(c()-x))
async function L(){x=c()
const a=await s(u)
a?.s&&(N=function(a,s){const t=Number(s.t.split(" ")[1]),e=d(s,t),r=f(a),n=_(e,r)
return{lastUpdate:t,...g(n)}}(N,a),l("fsh_seLog",N),h.set(N))}function M(a,s){A=s,a(A),A&&!y&&async function(){for(y=!0,N=await i("fsh_seLog"),h.set(N);A;)y=!0,await m(1e3*E(N)),A&&await L(),y=!1}()}const S=function(){const{subscribe:a,set:s}=n(0)
return{subscribe:a,set:o(M,s)}}()
var U=Object.freeze({__proto__:null,default:S})
export{U as a,f as p,h as s,S as t}
//# sourceMappingURL=trackerPrefStore-a831a07d.js.map
