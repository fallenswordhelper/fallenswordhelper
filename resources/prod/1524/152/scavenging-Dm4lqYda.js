import{g as n,c as t,b as s,b2 as e,i as o,s as c,e as a,ax as i,ct as r,n as u,aw as f,dM as g,bv as l,w as d,p as m,ab as b,bZ as p}from"./calfSystem-BlPuMQGT.js"
import{c as v}from"./closestTable-gY6pXvyq.js"
function $(n,t,s){c("scavenging","redrawMaxTimes"),a("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
a(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function M(c){!function(n){v(n).removeAttribute("width")}(c),function(n,e,o){const c=t(h,n,e,o)
c(),s(o,"keyup",c)}(function(n){const t=e()
return o(n.parentNode,t),t}(c),n("statbar-gold"),n("gold"))}let j=0
function w(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function x(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function S([n],[t]){return p(n,t)}function q([n,t]){return`<br>${t} ${n}(s), `}function R(n){const t=function(n){return n.reduce(x,{})}(n)
return`<br>${n.length} item(s):${b(t).sort(S).map(q).join("")}`}function T(){c("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=w(n,/victorious/g,"Victories"),t+=w(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?R(t):""}(n)}return t}function _(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${g}scavenging&cave_id=${e}&gold=${s}`),a(T(),(j||(j=d(),o(m(),j)),a("",j),j))}}function y(){!function(){if(!sendRequest)return
const n=sendRequest
l(n)&&(sendRequest=_(n))}(),function(){const t=n("multiplier_count")
t&&M(t)}()}export{y as default}
//# sourceMappingURL=scavenging-Dm4lqYda.js.map
