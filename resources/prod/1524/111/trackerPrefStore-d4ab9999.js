import{a,$ as s,C as t,f as e,bh as r,c as o,d8 as n}from"./calfSystem-abb16b0d.js"
import{r as m}from"./now-6f22aec9.js"
import{g as i,s as c}from"./idb-e719862a.js"
import{u as p}from"./uniq-d915251c.js"
import{i as l}from"./isArray-09a53da7.js"
function u(){return a({cmd:"superelite"})}function f(a){return t(a?.se??{}).flatMap((([s,t])=>l(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),d=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),_=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>e(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),w=a=>e(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),h=a=>({se:j(a),loc:w(a)})
const y=r()
let g=!1,A={},N=0,x=!1
const C=a=>Math.max(0,600-(m()-(a?.lastUpdate??0)),600-(m()-N))
async function L(){N=m()
const a=await s(u)
a?.s&&(A=function(a,s){const t=Number(s.t.split(" ")[1]),e=d(s,t),r=f(a),o=_(e,r)
return{lastUpdate:t,...h(o)}}(A,a),c("fsh_seLog",A),y.set(A))}function M(a,s){x=s,a(x),x&&!g&&async function(){for(g=!0,A=await i("fsh_seLog"),y.set(A);x;)g=!0,await n(1e3*C(A)),x&&await L(),g=!1}()}const S=function(){const{subscribe:a,set:s}=r(0)
return{subscribe:a,set:o(M,s)}}()
var U=Object.freeze({__proto__:null,default:S})
export{U as a,f as p,y as s,S as t}
//# sourceMappingURL=trackerPrefStore-d4ab9999.js.map
