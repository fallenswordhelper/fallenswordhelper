import{c as t}from"./closestTable-756f74a0.js"
import{c as n}from"./createSpan-1160b622.js"
import{z as o,h as e,f as s,t as a,B as r,C as c,a0 as i,bw as u,aI as f,m,p as l,e as p}from"./calfSystem-b31aba65.js"
import{i as b}from"./intValue-f6303c59.js"
import{n as d}from"./numberIsNaN-d0e4b349.js"
import{a as g}from"./alpha-9f4f77c3.js"
import"./closest-97a04dcf.js"
import"./toLowerCase-179aa35f.js"
function h(t,n,o){r("",t)
const e=Number(o.value)
d(e)||0===e||function(t,n,o){const e=b(c(n)),s=Math.floor(e/o).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,o){const e=a($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(r),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function w(t){return`<br>${t[1]} ${t[0]}(s), `}function I(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${p(n).sort(S).map(w).join("")}`}function M(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?I(n):""}(o)}return t}function _(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),r(M(),(v||(v=m(),e(l,v)),r("",v),v))}}function q(){!function(){const t=sendRequest
f(t)&&(sendRequest=_(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default q
//# sourceMappingURL=scavenging-be6e75b8.js.map
