import{g as n,i as t,b as s,c as e,s as o,d as r,a8 as c,ae as i,c$ as a,b3 as u,m as f,p as m,C as l,bu as g}from"./calfSystem-CyLCrHqa.js"
import{c as d}from"./createSpan-BwBXwdpR.js"
import{c as p}from"./closestTable-DUYDcoD9.js"
import{n as b}from"./numberIsNaN-CGkd1jiA.js"
import{i as $}from"./intValue-C7nTQec1.js"
function v(n,t,s){o("scavenging","redrawMaxTimes"),r("",n)
const e=Number(s.value)
b(e)||0===e||function(n,t,s){const e=$(c(t)),o=Math.floor(e/s).toString()
r(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&v(n,t,s)}function j(o){!function(n){p(n).removeAttribute("width")}(o),function(n,t,o){const r=e(h,n,t,o)
r(),s(o,"keyup",r)}(function(n){const s=d()
return t(n.parentNode,s),s}(o),n("statbar-gold"),n("gold"))}let S=0
function M(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function N(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function T([n],[t]){return g(n,t)}function q([n,t]){return`<br>${t} ${n}(s), `}function x(n){const t=function(n){return n.reduce(N,{})}(n)
return`<br>${n.length} item(s):${l(t).sort(T).map(q).join("")}`}function I(){o("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=M(n,/victorious/g,"Victories"),t+=M(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?x(t):""}(n)}return t}function R(n){return function(s,e,o){n(s,e,o),i("lastScavPage",`${a}scavenging&cave_id=${o}&gold=${e}`),r(I(),(S||(S=f(),t(m(),S)),r("",S),S))}}function _(){!function(){if(!sendRequest)return
const n=sendRequest
u(n)&&(sendRequest=R(n))}(),function(){const t=n("multiplier_count")
t&&j(t)}()}export{_ as default}
//# sourceMappingURL=scavenging-C8eocMqO.js.map
