import{c as t}from"./closestTable-255c4693.js"
import{c as n}from"./createSpan-9738bb01.js"
import{y as o,h as e,f as s,t as r,A as c,B as a,_ as i,bu as u,aA as f,m,p as l,e as p}from"./calfSystem-c07e3259.js"
import{i as d}from"./intValue-d2a6f461.js"
import{n as b}from"./numberIsNaN-738f2a3f.js"
import{a as g}from"./alpha-18b53f44.js"
import"./closest-f906514d.js"
import"./toLowerCase-82b2a5d7.js"
function h(t,n,o){c("",t)
const e=Number(o.value)
b(e)||0===e||function(t,n,o){const e=d(a(n)),s=Math.floor(e/o).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,o){const e=r($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(c),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function y(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${p(n).sort(S).map(_).join("")}`}function A(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return y(n)}(o)}return t}function M(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),c(A(),(v||(v=m(),e(l,v)),c("",v),v))}}function q(){!function(){const t=sendRequest
f(t)&&(sendRequest=M(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default q
//# sourceMappingURL=scavenging-79cf962d.js.map
