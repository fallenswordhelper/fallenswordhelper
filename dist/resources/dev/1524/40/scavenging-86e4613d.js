import{c as t}from"./closestTable-e6163be9.js"
import{c as n}from"./createSpan-79ff8b4f.js"
import{z as e,h as o,f as s,t as c,B as r,C as a,a0 as i,bw as u,aI as f,m,p as l,e as b}from"./calfSystem-c464cb1d.js"
import{i as p}from"./intValue-e485889b.js"
import{n as d}from"./numberIsNaN-2764ce9c.js"
import{a as g}from"./alpha-9ef10f70.js"
import"./closest-abbeba17.js"
import"./toLowerCase-d053e281.js"
function h(t,n,e){r("",t)
const o=Number(e.value)
d(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,e){const o=c($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(r),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function w(t){return`<br>${t[1]} ${t[0]}(s), `}function I(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${b(n).sort(S).map(w).join("")}`}function M(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?I(n):""}(e)}return t}function _(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),r(M(),(v||(v=m(),o(l,v)),r("",v),v))}}function q(){!function(){const t=sendRequest
f(t)&&(sendRequest=_(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default q
//# sourceMappingURL=scavenging-86e4613d.js.map