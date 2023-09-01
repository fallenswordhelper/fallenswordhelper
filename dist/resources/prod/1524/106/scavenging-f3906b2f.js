import{c as t}from"./createSpan-3211c164.js"
import{c as n}from"./closestTable-3ad39b1c.js"
import{g as s,i as o,b as e,c as r,s as c,a5 as i,ab as a,cO as u,aZ as f,l,p as m,C as g,bq as p}from"./calfSystem-076d7a01.js"
import{n as d}from"./numberIsNaN-a40c3bbb.js"
import{i as b}from"./intValue-e1798d0a.js"
function $(t,n,s){c("",t)
const o=Number(s.value)
d(o)||0===o||function(t,n,s){const o=b(i(n)),e=Math.floor(o/s).toString()
c(`&nbsp;&nbsp;Max: ${e} times`,t)}(t,n,o)}function v(t,n,s){t&&$(t,n,s)}function h(c){!function(t){n(t).removeAttribute("width")}(c),function(t,n,s){const o=r(v,t,n,s)
o(),e(s,"keyup",o)}(function(n){const s=t()
return o(n.parentNode,s),s}(c),s("statbar-gold"),s("gold"))}let j=0
function N(t,n,s){const o=t.match(n)
return o?`${s}: ${o.length}`:""}function S(t,n){const s=n.split(">")[1].split("<")[0]
return t[s]=(t[s]||0)+1,t}function q([t],[n]){return p(t,n)}function I([t,n]){return`<br>${n} ${t}(s), `}function M(t){const n=function(t){return t.reduce(S,{})}(t)
return`<br>${t.length} item(s):${g(n).sort(q).map(I).join("")}`}function T(){let t=""
const n=s("scavenge_results")
if(n){const s=n.innerHTML
t+=N(s,/victorious/g,"Victories"),t+=N(s,/defeated/g,", Defeats"),t+=function(t){const n=t.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return n?M(n):""}(s)}return t}function _(t){return function(n,s,e){t(n,s,e),a("lastScavPage",`${u}scavenging&cave_id=${e}&gold=${s}`),c(T(),(j||(j=l(),o(m(),j)),c("",j),j))}}function x(){!function(){const t=sendRequest
f(t)&&(sendRequest=_(t))}(),function(){const t=s("multiplier_count")
t&&h(t)}()}export{x as default}
//# sourceMappingURL=scavenging-f3906b2f.js.map
