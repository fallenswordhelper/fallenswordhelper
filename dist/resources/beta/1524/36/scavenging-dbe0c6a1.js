import{c as t}from"./closestTable-d46cf6db.js"
import{c as n}from"./createSpan-3ab35394.js"
import{z as o,h as e,f as s,t as a,B as c,C as r,_ as i,bv as u,aA as f,m,p as l,e as p}from"./calfSystem-4a40365f.js"
import{i as d}from"./intValue-ca51a3c0.js"
import{n as b}from"./numberIsNaN-891c59d9.js"
import{a as g}from"./alpha-a79afe3b.js"
import"./closest-7968af48.js"
import"./toLowerCase-fa335220.js"
function h(t,n,o){c("",t)
const e=Number(o.value)
b(e)||0===e||function(t,n,o){const e=d(r(n)),s=Math.floor(e/o).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,o){const e=a($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(c),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${p(n).sort(S).map(_).join("")}`}function q(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return M(n)}(o)}return t}function w(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),c(q(),(v||(v=m(),e(l,v)),c("",v),v))}}function x(){!function(){const t=sendRequest
f(t)&&(sendRequest=w(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default x
//# sourceMappingURL=scavenging-dbe0c6a1.js.map
