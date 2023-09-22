import{a,$ as s,C as t,f as e,bg as r,c as o,d8 as n}from"./calfSystem-4830a18d.js"
import{r as m}from"./now-6f22aec9.js"
import{g as i,s as c}from"./idb-7e56faaa.js"
import{u as p}from"./uniq-e12b948a.js"
import{i as l}from"./isArray-09a53da7.js"
function u(){return a({cmd:"superelite"})}function f(a){return t(a?.se??{}).flatMap((([s,t])=>l(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),d=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),_=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>e(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),w=a=>e(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),g=a=>({se:j(a),loc:w(a)})
const y=r()
let h=!1,A={},N=0,x=!1
const L=a=>Math.max(0,600-(m()-(a?.lastUpdate??0)),600-(m()-N))
async function M(){N=m()
const a=await s(u)
a?.s&&(A=function(a,s){const t=Number(s.t.split(" ")[1]),e=d(s,t),r=f(a),o=_(e,r)
return{lastUpdate:t,...g(o)}}(A,a),c("fsh_seLog",A),y.set(A))}function S(a,s){x=s,a(x),x&&!h&&async function(){for(h=!0,A=await i("fsh_seLog"),y.set(A);x;)h=!0,await n(1e3*L(A)),x&&await M(),h=!1}()}const U=function(){const{subscribe:a,set:s}=r(0)
return{subscribe:a,set:o(S,s)}}()
var q=Object.freeze({__proto__:null,default:U})
export{q as a,f as p,y as s,U as t}
//# sourceMappingURL=trackerPrefStore-28cd1151.js.map
