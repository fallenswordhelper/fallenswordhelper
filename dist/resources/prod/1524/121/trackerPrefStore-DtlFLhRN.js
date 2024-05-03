import{a,$ as s,C as t,f as e,bn as r,c as n,aO as o,dG as m,aQ as c}from"./calfSystem-BtgQSp8m.js"
import{r as i}from"./now-Cx4PsKjI.js"
import{u as p}from"./uniq-BenPSo9D.js"
import{i as l}from"./isArray-eVldfhw1.js"
function u(){return a({cmd:"superelite"})}function f(a){return t(a?.se??{}).flatMap((([s,t])=>l(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),_=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),d=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>e(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),w=a=>e(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),y=a=>({se:j(a),loc:w(a)})
const h=r()
let A=!1,N={},g=0,x=!1
const C=a=>Math.max(0,600-(i()-(a?.lastUpdate??0)),600-(i()-g))
async function G(){g=i()
const a=await s(u)
a?.s&&(N=function(a,s){const t=Number(s.t.split(" ")[1]),e=_(s,t),r=f(a),n=d(e,r)
return{lastUpdate:t,...y(n)}}(N,a),c("fsh_seLog",N),h.set(N))}function L(a,s){x=s,a(x),x&&!A&&async function(){for(A=!0,N=await o("fsh_seLog"),h.set(N);x;)A=!0,await m(1e3*C(N)),x&&await G(),A=!1}()}const M=function(){const{subscribe:a,set:s}=r(0)
return{subscribe:a,set:n(L,s)}}()
var O=Object.freeze({__proto__:null,default:M})
export{O as a,f as p,h as s,M as t}
//# sourceMappingURL=trackerPrefStore-DtlFLhRN.js.map
