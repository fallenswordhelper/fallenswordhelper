import{a,$ as s,C as t,f as e,bf as r,c as o,d9 as n}from"./calfSystem-rn9Rc_nF.js"
import{r as m}from"./now-pQzGw6vd.js"
import{g as i,s as c}from"./idb-1b6_RJN1.js"
import{u as p}from"./uniq-rEURYuE3.js"
import{i as l}from"./isArray-bNviZzJA.js"
function f(){return a({cmd:"superelite"})}function u(a){return t(a?.se??{}).flatMap((([s,t])=>l(t)?t.map((([t,e])=>[t,s,e,a?.loc[e]])):[[t,s.replaceAll(" ","_"),0,""]]))}const b=a=>a.join("|"),d=(a,s)=>a.r.map((a=>[s-a.time,a.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),a.realm.realm.id,a.realm.realm.name])),_=(a,s)=>p(a.map(b).concat(s.map(b))).map((a=>a.split("|"))).map((([a,s,t,e])=>[Number(a),s,Number(t),e])).sort((([a],[s])=>s-a)),j=a=>e(p(a.map((([,a])=>a))).map((s=>[s,a.filter((([,a])=>a===s)).map((([a,,s])=>[a,s])).slice(0,10)]))),w=a=>e(p(a.map((([,,a])=>a))).map((s=>[s,a.find((([,,a])=>a===s))[3]]))),y=a=>({se:j(a),loc:w(a)})
const g=r()
let h=!1,A={},N=0,x=!1
const E=a=>Math.max(0,600-(m()-(a?.lastUpdate??0)),600-(m()-N))
async function L(){N=m()
const a=await s(f)
a?.s&&(A=function(a,s){const t=Number(s.t.split(" ")[1]),e=d(s,t),r=u(a),o=_(e,r)
return{lastUpdate:t,...y(o)}}(A,a),c("fsh_seLog",A),g.set(A))}function M(a,s){x=s,a(x),x&&!h&&async function(){for(h=!0,A=await i("fsh_seLog"),g.set(A);x;)h=!0,await n(1e3*E(A)),x&&await L(),h=!1}()}const S=function(){const{subscribe:a,set:s}=r(0)
return{subscribe:a,set:o(M,s)}}()
var U=Object.freeze({__proto__:null,default:S})
export{U as a,u as p,g as s,S as t}
//# sourceMappingURL=trackerPrefStore-6bdYUAu6.js.map
