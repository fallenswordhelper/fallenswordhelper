import{g as n,i as t,b as s,c as e,s as o,d as r,a8 as c,ae as a,cV as i,b1 as u,m as f,p as m,C as l,bs as g}from"./calfSystem-Bit7wh4p.js"
import{c as p}from"./createSpan-Ctesn2Q0.js"
import{c as d}from"./closestTable-CmNjL45D.js"
import{n as b}from"./numberIsNaN-CGkd1jiA.js"
import{i as v}from"./intValue-C7nTQec1.js"
function $(n,t,s){o("scavenging","redrawMaxTimes"),r("",n)
const e=Number(s.value)
b(e)||0===e||function(n,t,s){const e=v(c(t)),o=Math.floor(e/s).toString()
r(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function j(o){!function(n){d(n).removeAttribute("width")}(o),function(n,t,o){const r=e(h,n,t,o)
r(),s(o,"keyup",r)}(function(n){const s=p()
return t(n.parentNode,s),s}(o),n("statbar-gold"),n("gold"))}let S=0
function M(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function N(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function T([n],[t]){return g(n,t)}function x([n,t]){return`<br>${t} ${n}(s), `}function I(n){const t=function(n){return n.reduce(N,{})}(n)
return`<br>${n.length} item(s):${l(t).sort(T).map(x).join("")}`}function V(){o("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=M(n,/victorious/g,"Victories"),t+=M(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?I(t):""}(n)}return t}function _(n){return function(s,e,o){n(s,e,o),a("lastScavPage",`${i}scavenging&cave_id=${o}&gold=${e}`),r(V(),(S||(S=f(),t(m(),S)),r("",S),S))}}function q(){!function(){const n=sendRequest
u(n)&&(sendRequest=_(n))}(),function(){const t=n("multiplier_count")
t&&j(t)}()}export{q as default}
//# sourceMappingURL=scavenging-DjCrQk5R.js.map
