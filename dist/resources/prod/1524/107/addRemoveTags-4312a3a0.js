import{$ as t,G as n,q as a,o as s,cV as e,p as o,c,j as r,ax as i,a6 as u,e as m,b as f,n as l,a8 as d,g as p,cX as g,v as b,ad as v,an as h,ao as j}from"./calfSystem-2fff342b.js"
import{c as $}from"./closestTable-2060ed27.js"
import{c as I}from"./closestTr-03cebe69.js"
import{g as y}from"./guildInventory-10784200.js"
import{t as x}from"./takeItem-8a1414a8.js"
import{h as k}from"./htmlResult-0a0ff9a0.js"
import{c as E}from"./createSpan-6e19e4f0.js"
import{c as T}from"./chunk-cd03a005.js"
import{r as w}from"./removeRow-f7828630.js"
import"./guild-6c03a6f9.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./InfoBoxFrom-0d967f77.js"
function A(t){return y({subcmd2:"takeitem",guildstore_id:t})}async function C(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await x(t))}function N(n){return t(A,C,n)}function R(t,n){return y({subcmd2:t,tagIndex:n})}async function S(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return k(s)}function F(n,a){return t(R,S,n,a)}function W(){return a('[name="subcmd2"]').value}const X=t=>a("input",I(t)),_=t=>m("div",t).dataset.invId
function B(){r('#pCC input[name="tagIndex[]"]').forEach(i)}function q(t,n){const a=_(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(i)}function D(t){const n=E({className:t.className.replace("-btn","")})
t.replaceWith(n)}function G(t,n){const a=E({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){r("button:not(.tag-bp-btn)",t).forEach(D)}(m("div",a)),a}async function J(t,n,a,s){const e=_(s)
X(s)?.remove()
const o=G(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),u(a,o))}function L(t){return F(W(),[t])}function M(t){s(o(),e(function(t){return[["tag-all-custom",B],["tag-bp-btn",c(J,"bp",N,"Taken")],["tag-all-btn",c(q,t)],["tag-add-btn",c(J,"add",L,"Tagged")],["tag-remove-btn",c(J,"remove",L,"Removed")]]}(t)))}const P=()=>r('[name="tagIndex[]"]:checked')
async function Q(t,n){const a=await F(t,n.map((t=>t.value)))
a.s?n.forEach(w):d(a.e.message)}function V(t){t.preventDefault(),T(25,P()).forEach(c(Q,W())),l("addRemoveTags","Tag by AJAX")}const z=()=>"addtags"===v.subcmd2,H=t=>a("img",I(t)).src.split("/").at(-1).split(".")[0],K=t=>h(I(t).cells[2]),O=(t,n)=>`<button class="${t}" type="button">${n}</button>`,U=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,Y=t=>`[${O(U(t),t)}]`,Z=()=>Y("Fast "+(z()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${Y("Check All")}&nbsp;`:"")(n)}${Z()}&nbsp;${Y("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=I(t).cells[2]
b(s,tt(n,a))}function at(t){return[t,t.value,H(t),K(t)]}function st(){const t=(n=r('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!z())return
$(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
z()&&(n=I(t).insertCell(-1)),b(n,O("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),M(t),f(document.forms[0],"submit",V)}function et(){p("tagging_cost")?st():g()}export{et as default}
//# sourceMappingURL=addRemoveTags-4312a3a0.js.map
