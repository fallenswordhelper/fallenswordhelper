import{g as n,b as t,s,c as e,a8 as o,o as r,i as c,ad as i,c$ as a,b2 as u,k as f,p as m,C as l,bw as g}from"./calfSystem-Blt4DbaE.js"
import{c as d}from"./createSpan-qOSQqjTl.js"
import{c as p}from"./closestTable-Ddgm5m0P.js"
import{n as b}from"./numberIsNaN-CGkd1jiA.js"
import{i as $}from"./intValue-C7nTQec1.js"
function v(n,t,r){s("scavenging","redrawMaxTimes"),e("",n)
const c=Number(r.value)
b(c)||0===c||function(n,t,s){const r=$(o(t)),c=Math.floor(r/s).toString()
e(`&nbsp;&nbsp;Max: ${c} times`,n)}(n,t,c)}function h(n,t,s){n&&v(n,t,s)}function j(s){!function(n){p(n).removeAttribute("width")}(s),function(n,s,e){const o=t(h,n,s,e)
o(),r(e,"keyup",o)}(function(n){const t=d()
return c(n.parentNode,t),t}(s),n("statbar-gold"),n("gold"))}let S=0
function M(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function N(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function R([n],[t]){return g(n,t)}function q([n,t]){return`<br>${t} ${n}(s), `}function w(n){const t=function(n){return n.reduce(N,{})}(n)
return`<br>${n.length} item(s):${l(t).sort(R).map(q).join("")}`}function x(){s("scavenging","multiScav")
let t=""
const e=n("scavenge_results")
if(e){const n=e.innerHTML
t+=M(n,/victorious/g,"Victories"),t+=M(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?w(t):""}(n)}return t}function T(n){return function(t,s,o){n(t,s,o),i("lastScavPage",`${a}scavenging&cave_id=${o}&gold=${s}`),e(x(),(S||(S=f(),c(m(),S)),e("",S),S))}}function _(){!function(){if(!sendRequest)return
const n=sendRequest
u(n)&&(sendRequest=T(n))}(),function(){const t=n("multiplier_count")
t&&j(t)}()}export{_ as default}
//# sourceMappingURL=scavenging-Bm92xCIo.js.map
