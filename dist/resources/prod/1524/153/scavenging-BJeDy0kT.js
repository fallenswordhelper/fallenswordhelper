import{g as n,c as t,b as s,aP as e,i as o,s as a,d as c,av as i,aM as r,l as u,au as f,dI as l,bw as g,u as d,p as m,a9 as p,b_ as b}from"./calfSystem-CT1aM4VG.js"
import{c as v}from"./closestTable-C24mp168.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function M(a){!function(n){v(n).removeAttribute("width")}(a),function(n,e,o){const a=t(h,n,e,o)
a(),s(o,"keyup",a)}(function(n){const t=e()
return o(n.parentNode,t),t}(a),n("statbar-gold"),n("gold"))}let S=0
function _(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function j(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function q([n],[t]){return b(n,t)}function w([n,t]){return`<br>${t} ${n}(s), `}function x(n){const t=function(n){return n.reduce(j,{})}(n)
return`<br>${n.length} item(s):${p(t).sort(q).map(w).join("")}`}function R(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=_(n,/victorious/g,"Victories"),t+=_(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?x(t):""}(n)}return t}function T(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${l}scavenging&cave_id=${e}&gold=${s}`),c(R(),(S||(S=d(),o(m(),S)),c("",S),S))}}function k(){!function(){if(!sendRequest)return
const n=sendRequest
g(n)&&(sendRequest=T(n))}(),function(){const t=n("multiplier_count")
t&&M(t)}()}export{k as default}
//# sourceMappingURL=scavenging-BJeDy0kT.js.map
