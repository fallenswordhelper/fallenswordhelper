import{c as t}from"./closestTable-388bd2b6.js"
import{c as n}from"./createSpan-95e4d2e5.js"
import{z as e,h as o,f as s,t as r,B as c,C as a,a0 as i,bx as u,aJ as f,m,p as l,e as b}from"./calfSystem-3cb2f93e.js"
import{i as p}from"./intValue-fefb28df.js"
import{n as d}from"./numberIsNaN-885a5556.js"
import{a as g}from"./alpha-b51f7102.js"
import"./closest-bc1fafe7.js"
import"./toLowerCase-999f3196.js"
function h(t,n,e){c("",t)
const o=Number(e.value)
d(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,e){const o=r($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(c),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function x(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${b(n).sort(S).map(x).join("")}`}function _(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?M(n):""}(e)}return t}function q(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),c(_(),(v||(v=m(),o(l,v)),c("",v),v))}}function w(){!function(){const t=sendRequest
f(t)&&(sendRequest=q(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default w
//# sourceMappingURL=scavenging-9e26aa5b.js.map
