import{g as n,c as t,b as s,aR as e,i as o,s as a,d as c,aw as i,aO as r,l as u,av as f,dE as l,bz as g,u as d,p as m,aa as p,c1 as v}from"./calfSystem-CQOGdqPv.js"
import{c as b}from"./closestTable-Cs7gyt8-.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function M(a){!function(n){b(n).removeAttribute("width")}(a),function(n,e,o){const a=t(h,n,e,o)
a(),s(o,"keyup",a)}(function(n){const t=e()
return o(n.parentNode,t),t}(a),n("statbar-gold"),n("gold"))}let R=0
function S(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function j(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function q([n],[t]){return v(n,t)}function w([n,t]){return`<br>${t} ${n}(s), `}function x(n){const t=function(n){return n.reduce(j,{})}(n)
return`<br>${n.length} item(s):${p(t).sort(q).map(w).join("")}`}function T(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=S(n,/victorious/g,"Victories"),t+=S(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?x(t):""}(n)}return t}function _(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${l}scavenging&cave_id=${e}&gold=${s}`),c(T(),(R||(R=d(),o(m(),R)),c("",R),R))}}function y(){!function(){if(!sendRequest)return
const n=sendRequest
g(n)&&(sendRequest=_(n))}(),function(){const t=n("multiplier_count")
t&&M(t)}()}export{y as default}
//# sourceMappingURL=scavenging-BgGU9Qzj.js.map
