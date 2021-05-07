import{c as t}from"./closestTable-ad98a9cf.js"
import{c as n}from"./createSpan-84310061.js"
import{z as o,h as e,f as s,t as r,B as c,C as a,_ as i,bt as u,aG as f,m,p as l,e as p}from"./calfSystem-9942149b.js"
import{i as b}from"./intValue-fefb28df.js"
import{n as d}from"./numberIsNaN-885a5556.js"
import{a as g}from"./alpha-b51f7102.js"
import"./closest-bc1fafe7.js"
import"./toLowerCase-999f3196.js"
function h(t,n,o){c("",t)
const e=Number(o.value)
d(e)||0===e||function(t,n,o){const e=b(a(n)),s=Math.floor(e/o).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,o){const e=r($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(c),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${p(n).sort(S).map(_).join("")}`}function q(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?M(n):""}(o)}return t}function w(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),c(q(),(v||(v=m(),e(l,v)),c("",v),v))}}function x(){!function(){const t=sendRequest
f(t)&&(sendRequest=w(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default x
//# sourceMappingURL=scavenging-e867f7eb.js.map
