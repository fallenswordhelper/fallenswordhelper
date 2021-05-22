import{c as t}from"./createAnchor-c5a7440e.js"
import{d as n}from"./dataRows-34f45ad8.js"
import{c as e}from"./createTBody-6145b77d.js"
import{c as o}from"./createTable-edb24c5b.js"
import{h as s,i as r,e as a,a6 as c,ao as l,o as i,l as f,aJ as u,C as m,y as d,b as h,p,d as b,t as T,aK as g,B as j}from"./calfSystem-6ad077b7.js"
import{g as w,a as C}from"./getTitanString-e08d7584.js"
import{g as N}from"./getTitle-f39367a1.js"
import{o as $}from"./openQuickBuffByName-f16a58eb.js"
import{p as B}from"./parseDateAsTimestamp-512975e0.js"
import{r as S}from"./roundToString-8b06d154.js"
import{g as x,s as E}from"./idb-9caca870.js"
import"./fshOpen-d480412d.js"
import"./numberIsNaN-11f99b26.js"
function _(t){return[t[0],t[1].cooldownText,t[1].coolTime,t[1].seen]}function y(t){return t[2]>c}function k(t,n){return t[2]-n[2]}function v(t){return`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${t[1]}</td><td class="fshCenter">${t[3]}</td></tr>`}function R(t){const n=o({className:"fshTTracker"}),c=e({innerHTML:'<tr><td class="header fshCenter">Titan</td><td class="header fshCenter">Cooldown</td><td class="header fshCenter">Visible</td></tr>'})
return s(n,c),r(c,function(t){return a(t).map(_).filter(y).sort(k).map(v).join("")}(t)),n}function A(t){return m(t.cells[0].children[0].children[0])}function I(t){const{target:e}=t
u("[b]",e)&&function(t){t.previousElementSibling&&$(m(t.previousElementSibling))}(e),u("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,o=n(e.rows,3,0).map(A)
$(o.join())}(e)}function O(t){f("fshBl",t.target)&&I(t)}function X(t){r(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function D(t){n(t.rows,3,0).forEach(X),r(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function H(t,n){return t.rows.length>1&&n>1}function J(t){t.length>2&&function(t){l(t).filter(H).forEach(D),i(t[1],O)}(t)}function K(t){return N(t.cells[0].children[0])}function L(t,n){t[n[0]]||n[1].coolTime<=c||(t[n[0]]={cooldownText:n[1].cooldownText,coolTime:n[1].coolTime,seen:"no"})}function M(t,n){const e=n.split("/")
var o,s,a
r(t.cells[3],(o=Number(m(t.cells[3])),s=Number(e[0]),a=Number(e[1]),`<br><span class="fshBlue"> (${S(w(a-s,o),2)}% Current <br>${S(100*o/a,2)}% Total<br>${C(o,a,s)})`))}function Q(n,e){!function(t){const n=m(t.cells[2]);-1===n.indexOf("-")&&M(t,n)}(e),function(t,n){const e=K(n).replace(" (Titan)","")
if(!t[e]){const o=m(n.nextElementSibling.cells[0])
let s=0
o.includes("until")&&(s=B(o.replace("Cooldown until: ",""))),t[e]={cooldownText:o,coolTime:s,seen:"yes"}}}(n,e),function(n){const e=encodeURIComponent(K(n)),o=n.cells[0].children[0],r=t({href:`${g}creatures&search_name=${e}`,target:"_blank"})
s(r,o),s(n.cells[0],r)
const a=n.cells[1],c=m(a)
j(`<a href="${g}realms&search_name=${c}" target="_blank">${c}</a>`,a)}(e)}function U(t){const e=h(b,p)
J(e)
const o={}
!function(t,e){n(t.rows,4,0).forEach(T(Q,e))}(e[1],o),function(t,n){t&&a(t).forEach(T(L,n))}(t,o),function(t,n){if(t.rows.length>5){const e=R(n),o=t.insertRow(5).insertCell(-1)
o.colSpan=3,s(o,e)}}(e[0],o),E("fsh_titans",o)}function V(){d()||x("fsh_titans").then(U)}export default V
//# sourceMappingURL=injectScouttower-bcab9e37.js.map
