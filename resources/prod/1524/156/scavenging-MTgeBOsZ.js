import{g as n,c as t,b as s,aQ as e,i as o,s as a,d as c,aw as i,aN as r,l as u,av as f,dC as l,bx as g,u as d,p as m,aa as p,b$ as b}from"./calfSystem-79LsojAC.js"
import{c as v}from"./closestTable-BuyyntoH.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function x(a){!function(n){v(n).removeAttribute("width")}(a),function(n,e,o){const a=t(h,n,e,o)
a(),s(o,"keyup",a)}(function(n){const t=e()
return o(n.parentNode,t),t}(a),n("statbar-gold"),n("gold"))}let M=0
function S(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function j(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function q([n],[t]){return b(n,t)}function w([n,t]){return`<br>${t} ${n}(s), `}function N(n){const t=function(n){return n.reduce(j,{})}(n)
return`<br>${n.length} item(s):${p(t).sort(q).map(w).join("")}`}function R(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=S(n,/victorious/g,"Victories"),t+=S(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?N(t):""}(n)}return t}function T(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${l}scavenging&cave_id=${e}&gold=${s}`),c(R(),(M||(M=d(),o(m(),M)),c("",M),M))}}function _(){!function(){if(!sendRequest)return
const n=sendRequest
g(n)&&(sendRequest=T(n))}(),function(){const t=n("multiplier_count")
t&&x(t)}()}export{_ as default}
//# sourceMappingURL=scavenging-MTgeBOsZ.js.map
