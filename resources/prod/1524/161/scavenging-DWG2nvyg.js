import{g as n,c as t,b as s,aR as e,i as o,s as a,d as c,aw as i,aO as r,m as u,av as f,dx as g,bB as l,v as d,p as m,ab as b,b$ as p}from"./calfSystem-Cs6CSxoU.js"
import{c as v}from"./closestTable-CWRa1z_C.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function x(a){!function(n){v(n).removeAttribute("width")}(a),function(n,e,o){const a=t(h,n,e,o)
a(),s(o,"keyup",a)}(function(n){const t=e()
return o(n.parentNode,t),t}(a),n("statbar-gold"),n("gold"))}let M=0
function R(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function S(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function j([n],[t]){return p(n,t)}function q([n,t]){return`<br>${t} ${n}(s), `}function w(n){const t=function(n){return n.reduce(S,{})}(n)
return`<br>${n.length} item(s):${b(t).sort(j).map(q).join("")}`}function T(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=R(n,/victorious/g,"Victories"),t+=R(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?w(t):""}(n)}return t}function _(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${g}scavenging&cave_id=${e}&gold=${s}`),c(T(),(M||(M=d(),o(m(),M)),c("",M),M))}}function y(){!function(){if(!sendRequest)return
const n=sendRequest
l(n)&&(sendRequest=_(n))}(),function(){const t=n("multiplier_count")
t&&x(t)}()}export{y as default}
//# sourceMappingURL=scavenging-DWG2nvyg.js.map
