import{a,$ as s,C as t,E as e,f as r,bl as n,c as o,d9 as m}from"./calfSystem-34913441.js"
import{r as c}from"./now-6f22aec9.js"
import{g as i,s as l}from"./idb-ec5d6344.js"
import{u as p}from"./uniq-a7375dfa.js"
function u(){return a({cmd:"superelite"})}function f(a){return t(a?.se??{}).flatMap((([s,t])=>e(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),d=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),_=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>r(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),w=a=>r(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),g=a=>({se:j(a),loc:w(a)})
const h=n()
let y=!1,N={},x=0,A=!1
const C=a=>Math.max(0,600-(c()-(a?.lastUpdate??0)),600-(c()-x))
async function E(){x=c()
const a=await s(u)
a?.s&&(N=function(a,s){const t=Number(s.t.split(" ")[1]),e=d(s,t),r=f(a),n=_(e,r)
return{lastUpdate:t,...g(n)}}(N,a),l("fsh_seLog",N),h.set(N))}function L(a,s){A=s,a(A),A&&!y&&async function(){for(y=!0,N=await i("fsh_seLog"),h.set(N);A;)y=!0,await m(1e3*C(N)),A&&await E(),y=!1}()}const M=function(){const{subscribe:a,set:s}=n(0)
return{subscribe:a,set:o(L,s)}}()
var S=Object.freeze({__proto__:null,default:M})
export{S as a,f as p,h as s,M as t}
//# sourceMappingURL=trackerPrefStore-7e77e94c.js.map
