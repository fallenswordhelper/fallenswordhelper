import{c as t}from"./closestTable-305a5f02.js"
import{c as n}from"./createSpan-a6b61f47.js"
import{z as e,h as o,f as s,t as c,B as r,C as a,_ as i,bA as u,aM as f,m,p as l,e as d,bB as b}from"./calfSystem-6a3c85e0.js"
import{i as p}from"./intValue-a6f9b475.js"
import{n as g}from"./numberIsNaN-c7db67d0.js"
import"./closest-8e46d454.js"
function h(t,n,e){r("",t)
const o=Number(e.value)
g(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,e){const o=c($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(r),e("statbar-gold"),e("gold"))}let v
function M(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function N(t,n){return b(t[0],n[0])}function S(t){return`<br>${t[1]} ${t[0]}(s), `}function _(t){const n=function(t){return t.reduce(M,{})}(t)
return`<br>${t.length} item(s):${d(n).sort(N).map(S).join("")}`}function q(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?_(n):""}(e)}return t}function x(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),r(q(),(v||(v=m(),o(l,v)),r("",v),v))}}function y(){!function(){const t=sendRequest
f(t)&&(sendRequest=x(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default y
//# sourceMappingURL=scavenging-780d3c30.js.map
