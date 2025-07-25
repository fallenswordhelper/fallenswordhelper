import{g as n,c as t,b as s,aR as e,i as o,s as a,e as c,ax as i,aO as r,n as u,aw as f,dO as g,by as l,w as d,p as m,ab as p,c0 as b}from"./calfSystem-C1X5YxJZ.js"
import{c as v}from"./closestTable-STrxtv_E.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function j(a){!function(n){v(n).removeAttribute("width")}(a),function(n,e,o){const a=t(h,n,e,o)
a(),s(o,"keyup",a)}(function(n){const t=e()
return o(n.parentNode,t),t}(a),n("statbar-gold"),n("gold"))}let w=0
function x(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function M(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function R([n],[t]){return b(n,t)}function S([n,t]){return`<br>${t} ${n}(s), `}function q(n){const t=function(n){return n.reduce(M,{})}(n)
return`<br>${n.length} item(s):${p(t).sort(R).map(S).join("")}`}function y(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=x(n,/victorious/g,"Victories"),t+=x(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?q(t):""}(n)}return t}function T(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${g}scavenging&cave_id=${e}&gold=${s}`),c(y(),(w||(w=d(),o(m(),w)),c("",w),w))}}function _(){!function(){if(!sendRequest)return
const n=sendRequest
l(n)&&(sendRequest=T(n))}(),function(){const t=n("multiplier_count")
t&&j(t)}()}export{_ as default}
//# sourceMappingURL=scavenging-nkEsFWRi.js.map
