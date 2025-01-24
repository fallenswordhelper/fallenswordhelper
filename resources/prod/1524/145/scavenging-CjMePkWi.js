import{g as n,aD as t,i as s,b as e,c as o,s as a,d as c,ak as r,aA as i,ac as u,aj as f,dr as g,bm as l,m,p as d,E as p,bU as b}from"./calfSystem-CvwhhJv4.js"
import{c as v}from"./closestTable-DA5PEIxg.js"
function $(n,t,s){a("scavenging","redrawMaxTimes"),c("",n)
const e=Number(s.value)
r(e)||0===e||function(n,t,s){const e=i(u(t)),o=Math.floor(e/s).toString()
c(`&nbsp;&nbsp;Max: ${o} times`,n)}(n,t,e)}function h(n,t,s){n&&$(n,t,s)}function j(a){!function(n){v(n).removeAttribute("width")}(a),function(n,t,s){const a=o(h,n,t,s)
a(),e(s,"keyup",a)}(function(n){const e=t()
return s(n.parentNode,e),e}(a),n("statbar-gold"),n("gold"))}let M=0
function S(n,t,s){const e=n.match(t)
return e?`${s}: ${e.length}`:""}function q(n,t){const s=t.split(">")[1].split("<")[0]
return n[s]=(n[s]??0)+1,n}function x([n],[t]){return b(n,t)}function R([n,t]){return`<br>${t} ${n}(s), `}function T(n){const t=function(n){return n.reduce(q,{})}(n)
return`<br>${n.length} item(s):${p(t).sort(x).map(R).join("")}`}function _(){a("scavenging","multiScav")
let t=""
const s=n("scavenge_results")
if(s){const n=s.innerHTML
t+=S(n,/victorious/g,"Victories"),t+=S(n,/defeated/g,", Defeats"),t+=function(n){const t=n.match(/Item Gained: <strong>[^<]+<\/strong>/g)
return t?T(t):""}(n)}return t}function k(n){return function(t,e,o){n(t,e,o),f("lastScavPage",`${g}scavenging&cave_id=${o}&gold=${e}`),c(_(),(M||(M=m(),s(d(),M)),c("",M),M))}}function w(){!function(){if(!sendRequest)return
const n=sendRequest
l(n)&&(sendRequest=k(n))}(),function(){const t=n("multiplier_count")
t&&j(t)}()}export{w as default}
//# sourceMappingURL=scavenging-CjMePkWi.js.map
