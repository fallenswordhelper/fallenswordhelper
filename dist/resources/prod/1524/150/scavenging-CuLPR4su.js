import{g as n,e as t,c as s,aF as e,i as o,s as a,h as c,ak as i,aC as r,aa as u,aj as f,dG as g,bm as l,u as m,p as d,H as p,bS as b}from"./calfSystem-BGOTz8de.js"
import{c as v}from"./closestTable-DjvmqHiL.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
i(e)||0===e||function(n,t,s){const e=r(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function S(a){!function(n){v(n).removeAttribute("width")}(a),function(n,e,o){const a=t(h,n,e,o)
a(),s(o,"keyup",a)}(function(n){const t=e()
return o(n.parentNode,t),t}(a),n("statbar-gold"),n("gold"))}let j=0
function M(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function q(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function x([n],[t]){return b(n,t)}function R([n,t]){return`<br>${t} ${n}(s), `}function T(n){const t=function(n){return n.reduce(q,{})}(n)
return`<br>${n.length} item(s):${p(t).sort(x).map(R).join("")}`}function _(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=M(n,/victorious/g,"Victories"),t+=M(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?T(t):""}(n)}return t}function k(n){return function(t,s,e){n(t,s,e),f("lastScavPage",`${g}scavenging&cave_id=${e}&gold=${s}`),c(_(),(j||(j=m(),o(d(),j)),c("",j),j))}}function w(){!function(){if(!sendRequest)return
const n=sendRequest
l(n)&&(sendRequest=k(n))}(),function(){const t=n("multiplier_count")
t&&S(t)}()}export{w as default}
//# sourceMappingURL=scavenging-CuLPR4su.js.map
