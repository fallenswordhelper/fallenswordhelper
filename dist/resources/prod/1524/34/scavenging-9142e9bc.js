import{c as t}from"./closestTable-90fad5df.js"
import{c as n}from"./createSpan-2b6fe10e.js"
import{y as o,h as e,f as s,t as r,A as a,B as c,Z as i,bq as u,ax as f,m,p as l,e as d}from"./calfSystem-793da633.js"
import{i as p}from"./intValue-d2a6f461.js"
import{n as b}from"./numberIsNaN-738f2a3f.js"
import{a as g}from"./alpha-18b53f44.js"
import"./closest-f906514d.js"
import"./toLowerCase-82b2a5d7.js"
function h(t,n,o){a("",t)
const e=Number(o.value)
b(e)||0===e||function(t,n,o){const e=p(c(n)),s=Math.floor(e/o).toString()
a(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(a){!function(n){t(n).removeAttribute("width")}(a),function(t,n,o){const e=r($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(a),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function q(t){return`<br>${t[1]} ${t[0]}(s), `}function x(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${d(n).sort(S).map(q).join("")}`}function y(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return x(n)}(o)}return t}function M(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),a(y(),(v||(v=m(),e(l,v)),a("",v),v))}}function _(){!function(){const t=sendRequest
f(t)&&(sendRequest=M(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default _
//# sourceMappingURL=scavenging-9142e9bc.js.map
