import{$ as t,G as a,q as n,o as s,d7 as e,p as o,c,s as r,k as i,aO as u,a9 as m,h as d,b as l,E as f,ab as g,g as p,da as b,v,ag as h,as as j,at as $}from"./calfSystem-KuDT30_2.js"
import{c as y}from"./closestTable-BnyAbylz.js"
import{c as T}from"./closestTr-DrJ2puOz.js"
import{g as k}from"./guildInventory-Bxe3DdWj.js"
import{t as I}from"./takeItem-COQzi4M8.js"
import{h as R}from"./htmlResult-UAWBTbJ2.js"
import{c as x}from"./createSpan-C30Y7sS2.js"
import{r as C}from"./removeRow-CHXTqdve.js"
import"./guild-CXX8zghN.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-C3VQd94d.js"
function E(t){return k({subcmd2:"takeitem",guildstore_id:t})}async function A(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await I(t))}function w(a){return t(E,A,a)}function N(t,a){return k({subcmd2:t,tagIndex:a})}async function S(t,n){const s=await a({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:n})
return R(s)}function _(a,n){return t(N,S,a,n)}function F(){return n('[name="subcmd2"]').value}const X=t=>n("input",T(t)),B=t=>d("div",t).dataset.invId
function G(){r("addRemoveTags","doCheckAll"),i('#pCC input[name="tagIndex[]"]').forEach(u)}function W(t,a){r("addRemoveTags","checkType")
const n=B(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function q(t){const a=x({className:t.className.replace("-btn","")})
t.replaceWith(a)}function D(t,a){const n=x({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){i("button:not(.tag-bp-btn)",t).forEach(q)}(d("div",n)),n}async function J(t,a,n,s){r("addRemoveTags",t)
const e=B(s)
X(s)?.remove()
const o=D(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),m(n,o))}function K(t){return _(F(),[t])}function L(t){s(o(),e(function(t){return[["tag-all-custom",G],["tag-bp-btn",c(J,"bp",w,"Taken")],["tag-all-btn",c(W,t)],["tag-add-btn",c(J,"add",K,"Tagged")],["tag-remove-btn",c(J,"remove",K,"Removed")]]}(t)))}const M=()=>i('[name="tagIndex[]"]:checked')
async function O(t,a){const n=await _(t,a.map((t=>t.value)))
n.s?a.forEach(C):g(n.e.message)}function P(t){t.preventDefault(),f(25,M()).forEach(c(O,F())),r("addRemoveTags","Tag by AJAX")}const Q=()=>"addtags"===h.subcmd2,Z=t=>n("img",T(t)).src.split("/").at(-1).split(".")[0],z=t=>j(T(t).cells[2]),H=(t,a)=>`<button class="${t}" type="button">${a}</button>`,U=t=>`tag-${(t=>$(t).split(" ").at(-1))(t)}-btn`,V=t=>`[${H(U(t),t)}]`,Y=()=>V("Fast "+(Q()?"Add":"Remove")),tt=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${V("Check All")}&nbsp;`:"")(a)}${Y()}&nbsp;${V("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function at([t,a,,,n]){const s=T(t).cells[2]
v(s,tt(a,n))}function nt(t){return[t,t.value,Z(t),z(t)]}function st(){const t=(a=i('input[name="tagIndex[]"]',o()).map(nt)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=p("tagging_cost")
!function(t){if(!Q())return
y(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
Q()&&(a=T(t).insertCell(-1)),v(a,H("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(at),L(t),l(document.forms[0],"submit",P)}function et(){p("tagging_cost")?st():b()}export{et as default}
//# sourceMappingURL=addRemoveTags-CV-7PTsn.js.map
