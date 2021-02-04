import{c as t}from"./closestTable-9ab270bd.js"
import{c as n}from"./createSpan-3083d966.js"
import{y as o,h as e,f as s,t as r,A as c,B as a,Z as i,bq as u,ax as f,m,p as b,e as l}from"./calfSystem-0708a9bb.js"
import{i as p}from"./intValue-55d66e09.js"
import{n as d}from"./numberIsNaN-c188f177.js"
import{a as g}from"./alpha-187fa6c5.js"
import"./closest-8b679b7a.js"
import"./toLowerCase-abb30c3b.js"
function h(t,n,o){c("",t)
const e=Number(o.value)
d(e)||0===e||function(t,n,o){const e=p(a(n)),s=Math.floor(e/o).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,o){const e=r($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(c),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function q(t){return`<br>${t[1]} ${t[0]}(s), `}function x(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${l(n).sort(S).map(q).join("")}`}function y(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return x(n)}(o)}return t}function M(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),c(y(),(v||(v=m(),e(b,v)),c("",v),v))}}function _(){!function(){const t=sendRequest
f(t)&&(sendRequest=M(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default _
//# sourceMappingURL=scavenging-76952971.js.map
