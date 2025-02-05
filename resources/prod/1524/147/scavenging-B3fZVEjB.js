import{g as n,d as t,c as s,aF as e,i as o,s as a,e as c,am as i,aC as r,ad as u,al as f,dx as l,bm as g,n as d,p as m,F as p,bX as b}from"./calfSystem-BAeDn21M.js"
import{c as v}from"./closestTable-MoRx7kRV.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function x(a){!function(n){v(n).removeAttribute("width")}(a),function(n,e,o){const a=t(h,n,e,o)
a(),s(o,"keyup",a)}(function(n){const t=e()
return o(n.parentNode,t),t}(a),n("statbar-gold"),n("gold"))}let M=0
function S(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function j(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function q([n],[t]){return b(n,t)}function R([n,t]){return`<br>${t} ${n}(s), `}function T(n){const t=function(n){return n.reduce(j,{})}(n)
return`<br>${n.length} item(s):${p(t).sort(q).map(R).join("")}`}function _(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=S(n,/victorious/g,"Victories"),t+=S(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?T(t):""}(n)}return t}function w(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${l}scavenging&cave_id=${e}&gold=${s}`),c(_(),(M||(M=d(),o(m(),M)),c("",M),M))}}function y(){!function(){if(!sendRequest)return
const n=sendRequest
g(n)&&(sendRequest=w(n))}(),function(){const t=n("multiplier_count")
t&&x(t)}()}export{y as default}
//# sourceMappingURL=scavenging-B3fZVEjB.js.map
