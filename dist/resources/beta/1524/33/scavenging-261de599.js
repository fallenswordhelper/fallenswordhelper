import{c as t}from"./closestTable-2e6fd7b0.js"
import{c as n}from"./createSpan-1ad5cfdb.js"
import{y as o,h as e,f as s,t as c,A as r,B as a,Z as i,bt as u,az as f,m,p as l,e as b}from"./calfSystem-c91a5c89.js"
import{i as d}from"./intValue-55d66e09.js"
import{n as p}from"./numberIsNaN-c188f177.js"
import{a as g}from"./alpha-187fa6c5.js"
import"./closest-8b679b7a.js"
import"./toLowerCase-abb30c3b.js"
function h(t,n,o){r("",t)
const e=Number(o.value)
p(e)||0===e||function(t,n,o){const e=d(a(n)),s=Math.floor(e/o).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,o){const e=c($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(r),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function y(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${b(n).sort(S).map(y).join("")}`}function _(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return M(n)}(o)}return t}function q(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),r(_(),(v||(v=m(),e(l,v)),r("",v),v))}}function w(){!function(){const t=sendRequest
f(t)&&(sendRequest=q(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default w
//# sourceMappingURL=scavenging-261de599.js.map
