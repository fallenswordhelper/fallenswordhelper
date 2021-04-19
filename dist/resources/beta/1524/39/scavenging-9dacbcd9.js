import{c as t}from"./closestTable-0d8adda0.js"
import{c as n}from"./createSpan-2c557b8b.js"
import{z as e,h as o,f as s,t as c,B as r,C as a,_ as i,bv as u,aH as f,m,p as l,e as d}from"./calfSystem-26fbeaeb.js"
import{i as p}from"./intValue-f6303c59.js"
import{n as b}from"./numberIsNaN-d0e4b349.js"
import{a as g}from"./alpha-9f4f77c3.js"
import"./closest-97a04dcf.js"
import"./toLowerCase-179aa35f.js"
function h(t,n,e){r("",t)
const o=Number(e.value)
b(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,e){const o=c($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(r),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${d(n).sort(S).map(_).join("")}`}function q(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?M(n):""}(e)}return t}function w(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),r(q(),(v||(v=m(),o(l,v)),r("",v),v))}}function x(){!function(){const t=sendRequest
f(t)&&(sendRequest=w(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default x
//# sourceMappingURL=scavenging-9dacbcd9.js.map
