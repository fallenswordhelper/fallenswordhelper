import{c as t}from"./createSpan-d7c936c3.js"
import{c as n}from"./closestTable-c0c63085.js"
import{g as s,i as o,b as e,c as r,s as c,a5 as i,ab as a,cO as u,aZ as f,l,p as m,C as g,bq as p}from"./calfSystem-34913441.js"
import{n as d}from"./numberIsNaN-a40c3bbb.js"
import{i as b}from"./intValue-e1798d0a.js"
function $(t,n,s){c("",t)
const o=Number(s.value)
d(o)||0===o||function(t,n,s){const o=b(i(n)),e=Math.floor(o/s).toString()
c(`&nbsp;&nbsp;Max: ${e} times`,t)}(t,n,o)}function v(t,n,s){t&&$(t,n,s)}function h(c){!function(t){n(t).removeAttribute("width")}(c),function(t,n,s){const o=r(v,t,n,s)
o(),e(s,"keyup",o)}(function(n){const s=t()
return o(n.parentNode,s),s}(c),s("statbar-gold"),s("gold"))}let j=0
function S(t,n,s){const o=t.match(n)
return o?`${s}: ${o.length}`:""}function q(t,n){const s=n.split(">")[1].split("<")[0]
return t[s]=(t[s]||0)+1,t}function N([t],[n]){return p(t,n)}function M([t,n]){return`<br>${n} ${t}(s), `}function _(t){const n=function(t){return t.reduce(q,{})}(t)
return`<br>${t.length} item(s):${g(n).sort(N).map(M).join("")}`}function x(){let t=""
const n=s("scavenge_results")
if(n){const s=n.innerHTML
t+=S(s,/victorious/g,"Victories"),t+=S(s,/defeated/g,", Defeats"),t+=function(t){const n=t.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return n?_(n):""}(s)}return t}function y(t){return function(n,s,e){t(n,s,e),a("lastScavPage",`${u}scavenging&cave_id=${e}&gold=${s}`),c(x(),(j||(j=l(),o(m(),j)),c("",j),j))}}function H(){!function(){const t=sendRequest
f(t)&&(sendRequest=y(t))}(),function(){const t=s("multiplier_count")
t&&h(t)}()}export{H as default}
//# sourceMappingURL=scavenging-dfe929b4.js.map
