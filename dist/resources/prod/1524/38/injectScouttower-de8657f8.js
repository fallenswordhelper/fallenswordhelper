import{c as t}from"./createAnchor-445d48b4.js"
import{d as n}from"./dataRows-317004f0.js"
import{c as e}from"./createTBody-e7b06bb7.js"
import{c as o}from"./createTable-cbb1ed54.js"
import{h as s,i as r,e as a,a7 as c,N as l,o as i,l as f,aA as u,C as m,y as d,b as h,p,d as b,t as T,aB as g,B as j}from"./calfSystem-7a1cce43.js"
import{g as w,a as C}from"./getTitanString-420472ae.js"
import{g as N}from"./getTitle-8183f0a8.js"
import{o as $}from"./openQuickBuffByName-18faab75.js"
import{p as B}from"./parseDateAsTimestamp-2c281d66.js"
import{r as S}from"./roundToString-a20f2465.js"
import{g as x,s as E}from"./idb-c572d898.js"
import"./fshOpen-ec83b065.js"
import"./numberIsNaN-30cde299.js"
function _(t){return[t[0],t[1].cooldownText,t[1].coolTime,t[1].seen]}function y(t){return t[2]>c}function k(t,n){return t[2]-n[2]}function v(t){return`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${t[1]}</td><td class="fshCenter">${t[3]}</td></tr>`}function A(t){const n=o({className:"fshTTracker"}),c=e({innerHTML:'<tr><td class="header fshCenter">Titan</td><td class="header fshCenter">Cooldown</td><td class="header fshCenter">Visible</td></tr>'})
return s(n,c),r(c,function(t){return a(t).map(_).filter(y).sort(k).map(v).join("")}(t)),n}function R(t){return m(t.cells[0].children[0].children[0])}function I(t){const{target:e}=t
u("[b]",e)&&function(t){t.previousElementSibling&&$(m(t.previousElementSibling))}(e),u("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,o=n(e.rows,3,0).map(R)
$(o.join())}(e)}function O(t){f("fshBl",t.target)&&I(t)}function X(t){r(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function D(t){n(t.rows,3,0).forEach(X),r(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function H(t,n){return t.rows.length>1&&n>1}function L(t){t.length>2&&function(t){l(t).filter(H).forEach(D),i(t[1],O)}(t)}function M(t){return N(t.cells[0].children[0])}function Q(t,n){t[n[0]]||n[1].coolTime<=c||(t[n[0]]={cooldownText:n[1].cooldownText,coolTime:n[1].coolTime,seen:"no"})}function U(t,n){const e=n.split("/")
var o,s,a
r(t.cells[3],(o=Number(m(t.cells[3])),s=Number(e[0]),a=Number(e[1]),`<br><span class="fshBlue"> (${S(w(a-s,o),2)}% Current <br>${S(100*o/a,2)}% Total<br>${C(o,a,s)})`))}function V(n,e){!function(t){const n=m(t.cells[2]);-1===n.indexOf("-")&&U(t,n)}(e),function(t,n){const e=M(n).replace(" (Titan)","")
if(!t[e]){const o=m(n.nextElementSibling.cells[0])
let s=0
o.includes("until")&&(s=B(o.replace("Cooldown until: ",""))),t[e]={cooldownText:o,coolTime:s,seen:"yes"}}}(n,e),function(n){const e=encodeURIComponent(M(n)),o=n.cells[0].children[0],r=t({href:`${g}creatures&search_name=${e}`,target:"_blank"})
s(r,o),s(n.cells[0],r)
const a=n.cells[1],c=m(a)
j(`<a href="${g}realms&search_name=${c}" target="_blank">${c}</a>`,a)}(e)}function q(t){const e=h(b,p)
L(e)
const o={}
!function(t,e){n(t.rows,4,0).forEach(T(V,e))}(e[1],o),function(t,n){t&&a(t).forEach(T(Q,n))}(t,o),function(t,n){if(t.rows.length>5){const e=A(n),o=t.insertRow(5).insertCell(-1)
o.colSpan=3,s(o,e)}}(e[0],o),E("fsh_titans",o)}function z(){d()||x("fsh_titans").then(q)}export default z
//# sourceMappingURL=injectScouttower-de8657f8.js.map