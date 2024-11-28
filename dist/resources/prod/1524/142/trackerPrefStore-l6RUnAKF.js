import{a,$ as s,C as t,f as e,bp as r,c as n,aQ as c,dO as o,bK as m,aS as i}from"./calfSystem-KuDT30_2.js"
import{u as p}from"./uniq-DDHnmX2G.js"
import{i as l}from"./isArray-eVldfhw1.js"
function u(){return a({cmd:"superelite"})}function f(a){return t(a?.se??{}).flatMap((([s,t])=>l(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),_=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),d=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>e(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),y=a=>e(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),w=a=>({se:j(a),loc:y(a)})
const h=r()
let A=!1,N={},S=0,g=!1
const x=a=>Math.max(0,600-(m()-(a?.lastUpdate??0)),600-(m()-S))
async function E(){S=m()
const a=await s(u)
a?.s&&(N=function(a,s){const t=Number(s.t.split(" ")[1]),e=_(s,t),r=f(a),n=d(e,r)
return{lastUpdate:t,...w(n)}}(N,a),i("fsh_seLog",N),h.set(N))}function L(a,s){g=s,a(g),g&&!A&&async function(){for(A=!0,N=await c("fsh_seLog"),h.set(N);g;)A=!0,await o(1e3*x(N)),g&&await E(),A=!1}()}const M=function(){const{subscribe:a,set:s}=r(0)
return{subscribe:a,set:n(L,s)}}()
var O=Object.freeze({__proto__:null,default:M})
export{O as a,f as p,h as s,M as t}
//# sourceMappingURL=trackerPrefStore-l6RUnAKF.js.map
