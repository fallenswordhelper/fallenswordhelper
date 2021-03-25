import{c as t}from"./closestTable-e4a5702e.js"
import{c as n}from"./createSpan-6854a1c4.js"
import{z as e,h as o,f as s,t as r,B as c,C as a,a0 as i,bw as u,aB as f,m,p as l,e as d}from"./calfSystem-5d0c721b.js"
import{i as p}from"./intValue-0e97c9b9.js"
import{n as b}from"./numberIsNaN-a6723163.js"
import{a as g}from"./alpha-3d8909e7.js"
import"./closest-214539bf.js"
import"./toLowerCase-9d38da0b.js"
function h(t,n,e){c("",t)
const o=Number(e.value)
b(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,e){const o=r($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(c),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function w(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${d(n).sort(S).map(w).join("")}`}function _(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return M(n)}(e)}return t}function q(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),c(_(),(v||(v=m(),o(l,v)),c("",v),v))}}function x(){!function(){const t=sendRequest
f(t)&&(sendRequest=q(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default x
//# sourceMappingURL=scavenging-5dda8450.js.map
