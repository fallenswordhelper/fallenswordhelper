import{c as t}from"./closestTable-18ec3479.js"
import{c as n}from"./createSpan-256b26cd.js"
import{z as e,h as o,f as s,t as r,B as c,C as a,_ as i,bw as u,aI as f,m,p as l,e as p}from"./calfSystem-1d588248.js"
import{i as d}from"./intValue-fefb28df.js"
import{n as b}from"./numberIsNaN-885a5556.js"
import{a as g}from"./alpha-b51f7102.js"
import"./closest-bc1fafe7.js"
import"./toLowerCase-999f3196.js"
function h(t,n,e){c("",t)
const o=Number(e.value)
b(o)||0===o||function(t,n,e){const o=d(a(n)),s=Math.floor(o/e).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,e){const o=r($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(c),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function w(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${p(n).sort(S).map(_).join("")}`}function I(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?w(n):""}(e)}return t}function M(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),c(I(),(v||(v=m(),o(l,v)),c("",v),v))}}function q(){!function(){const t=sendRequest
f(t)&&(sendRequest=M(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default q
//# sourceMappingURL=scavenging-2a99e1a2.js.map
