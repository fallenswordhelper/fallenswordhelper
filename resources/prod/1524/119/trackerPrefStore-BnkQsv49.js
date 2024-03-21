import{a,$ as s,C as t,f as e,bn as r,c as n,aO as o,dE as m,aQ as c}from"./calfSystem-Bit7wh4p.js"
import{r as i}from"./now-Cx4PsKjI.js"
import{u as p}from"./uniq-CyVUXBym.js"
import{i as l}from"./isArray-eVldfhw1.js"
function u(){return a({cmd:"superelite"})}function f(a){return t(a?.se??{}).flatMap((([s,t])=>l(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),_=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),d=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>e(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),w=a=>e(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),y=a=>({se:j(a),loc:w(a)})
const h=r()
let A=!1,N={},g=0,x=!1
const E=a=>Math.max(0,600-(i()-(a?.lastUpdate??0)),600-(i()-g))
async function L(){g=i()
const a=await s(u)
a?.s&&(N=function(a,s){const t=Number(s.t.split(" ")[1]),e=_(s,t),r=f(a),n=d(e,r)
return{lastUpdate:t,...y(n)}}(N,a),c("fsh_seLog",N),h.set(N))}function M(a,s){x=s,a(x),x&&!A&&async function(){for(A=!0,N=await o("fsh_seLog"),h.set(N);x;)A=!0,await m(1e3*E(N)),x&&await L(),A=!1}()}const O=function(){const{subscribe:a,set:s}=r(0)
return{subscribe:a,set:n(M,s)}}()
var S=Object.freeze({__proto__:null,default:O})
export{S as a,f as p,h as s,O as t}
//# sourceMappingURL=trackerPrefStore-BnkQsv49.js.map
