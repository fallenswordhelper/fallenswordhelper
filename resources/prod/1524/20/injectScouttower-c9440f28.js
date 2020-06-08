import{f as t,i as n,m as e,a4 as o,M as s,o as r,k as a,b3 as c,B as l,x as i,b as f,p as u,d as m,t as d,ap as h,A as p}from"./calfSystem-03970067.js"
import"./numberIsNaN-b19dc958.js"
import{a as b}from"./roundToString-0800d627.js"
import"./fshOpen-526cc69f.js"
import{o as T}from"./openQuickBuffByName-d2028079.js"
import{d as g}from"./dataRows-6f4f327f.js"
import{g as j,s as w}from"./idb-3dad9172.js"
import{c as C}from"./createTBody-63c3fb8b.js"
import{c as N}from"./createTable-fdc4e68e.js"
import{c as $}from"./createAnchor-30244aeb.js"
import{g as B}from"./getTitle-788ea5a5.js"
import{p as S}from"./parseDateAsTimestamp-375eca5d.js"
import{g as x,a as E}from"./getTitanString-23c2219d.js"
function _(t){return[t[0],t[1].cooldownText,t[1].coolTime,t[1].seen]}function k(t){return t[2]>o}function y(t,n){return t[2]-n[2]}function v(t){return`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${t[1]}</td><td class="fshCenter">${t[3]}</td></tr>`}function A(o){const s=N({className:"fshTTracker"}),r=C({innerHTML:'<tr><td class="header fshCenter">Titan</td><td class="header fshCenter">Cooldown</td><td class="header fshCenter">Visible</td></tr>'})
return t(s,r),n(r,function(t){return e(t).map(_).filter(k).sort(y).map(v).join("")}(o)),s}function R(t){return l(t.cells[0].children[0].children[0])}function I(t){const{target:n}=t
c("[b]",n)&&function(t){t.previousElementSibling&&T(l(t.previousElementSibling))}(n),c("all",n)&&function(t){const n=t.parentNode.parentNode.parentNode.parentNode,e=g(n.rows,3,0).map(R)
T(e.join())}(n)}function M(t){a("fshBl",t.target)&&I(t)}function O(t){n(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function X(t){g(t.rows,3,0).forEach(O),n(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function D(t,n){return t.rows.length>1&&n>1}function H(t){t.length>2&&function(t){s(t).filter(D).forEach(X),r(t[1],M)}(t)}function L(t){return B(t.cells[0].children[0])}function Q(t,n){t[n[0]]||n[1].coolTime<=o||(t[n[0]]={cooldownText:n[1].cooldownText,coolTime:n[1].coolTime,seen:"no"})}function U(t,e){const o=e.split("/")
var s,r,a
n(t.cells[3],(s=Number(l(t.cells[3])),r=Number(o[0]),a=Number(o[1]),`<br><span class="fshBlue"> (${b(x(a-r,s),2)}% Current <br>${b(100*s/a,2)}% Total<br>${E(s,a,r)})`))}function V(n,e){!function(t){const n=l(t.cells[2]);-1===n.indexOf("-")&&U(t,n)}(e),function(t,n){const e=L(n).replace(" (Titan)","")
if(!t[e]){const o=l(n.nextElementSibling.cells[0])
let s=0
o.includes("until")&&(s=S(o.replace("Cooldown until: ",""))),t[e]={cooldownText:o,coolTime:s,seen:"yes"}}}(n,e),function(n){const e=encodeURIComponent(L(n)),o=n.cells[0].children[0],s=$({href:`${h}creatures&search_name=${e}`,target:"_blank"})
t(s,o),t(n.cells[0],s)
const r=n.cells[1],a=l(r)
p(`<a href="${h}realms&search_name=${a}" target="_blank">${a}</a>`,r)}(e)}function q(n){const o=f(m,u)
H(o)
const s={}
!function(t,n){g(t.rows,4,0).forEach(d(V,n))}(o[1],s),function(t,n){t&&e(t).forEach(d(Q,n))}(n,s),function(n,e){if(n.rows.length>5){const o=A(e),s=n.insertRow(5).insertCell(-1)
s.colSpan=3,t(s,o)}}(o[0],s),w("fsh_titans",s)}export default function(){i()||j("fsh_titans").then(q)}
//# sourceMappingURL=injectScouttower-c9440f28.js.map
