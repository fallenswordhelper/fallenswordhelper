import{y as t,h as n,f as e,t as o,A as s,B as r,Y as c,bx as a,ah as i,m as u,p as f,e as m}from"./calfSystem-a5da5210.js"
import{n as l}from"./numberIsNaN-91041dcf.js"
import"./toLowerCase-27ea448e.js"
import{i as p}from"./intValue-f4d85578.js"
import{a as d}from"./alpha-08ee6ec8.js"
import{c as b}from"./createSpan-8b1ff67f.js"
import"./closest-9ef1a6fc.js"
import{c as g}from"./closestTable-5b922600.js"
function h(t,n,e){s("",t)
const o=Number(e.value)
l(o)||0===o||function(t,n,e){const o=p(r(n)),c=Math.floor(o/e).toString()
s(`&nbsp;&nbsp;Max: ${c} times`,t)}(t,n,o)}function j(t,n,e){t&&h(t,n,e)}function $(s){!function(t){g(t).removeAttribute("width")}(s),function(t,n,s){const r=o(j,t,n,s)
r(),e(s,"keyup",r)}(function(t){const e=b()
return n(t.parentNode,e),e}(s),t("statbar-gold"),t("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return d(t[0],n[0])}function x(t){return`<br>${t[1]} ${t[0]}(s), `}function y(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${m(n).sort(S).map(x).join("")}`}function M(){let n=""
const e=t("scavenge_results")
if(e){const t=e.innerHTML
n+=function(t){const n=t.match(/victorious/g)
return n?"Victories: "+n.length:""}(t),n+=function(t){const n=t.match(/defeated/g)
return n?", Defeated: "+n.length:""}(t),n+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return y(n)}(t)}return n}function _(t){return function(e,o,r){t(e,o,r),c("lastScavPage",`${a}scavenging&cave_id=${r}&gold=${o}`),s(M(),(v||(v=u(),n(f,v)),s("",v),v))}}function q(){!function(){const t=sendRequest
i(t)&&(sendRequest=_(t))}(),function(){const n=t("multiplier_count")
n&&$(n)}()}export default q
//# sourceMappingURL=scavenging-ac565345.js.map
