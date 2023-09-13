import{$ as t,G as n,q as a,o as s,cV as e,p as o,c,j as r,ax as i,a6 as u,e as m,b as f,n as l,a8 as d,g as p,cX as g,v as b,ad as v,an as h,ao as j}from"./calfSystem-34913441.js"
import{c as $}from"./closestTable-c0c63085.js"
import{c as y}from"./closestTr-316dea29.js"
import{g as I}from"./guildInventory-ca591da6.js"
import{t as x}from"./takeItem-61ec1dcf.js"
import{h as k}from"./htmlResult-c11d9ef0.js"
import{c as E}from"./createSpan-d7c936c3.js"
import{c as T}from"./chunk-cd03a005.js"
import{r as w}from"./removeRow-80e7ce7f.js"
import"./guild-014ef050.js"
import"./dialog-d1c54012.js"
import"./dialogMsg-7c5fba89.js"
import"./InfoBoxFrom-6333b8b3.js"
function A(t){return I({subcmd2:"takeitem",guildstore_id:t})}async function C(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await x(t))}function N(n){return t(A,C,n)}function R(t,n){return I({subcmd2:t,tagIndex:n})}async function S(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return k(s)}function _(n,a){return t(R,S,n,a)}function F(){return a('[name="subcmd2"]').value}const W=t=>a("input",y(t)),q=t=>m("div",t).dataset.invId
function B(){r('#pCC input[name="tagIndex[]"]').forEach(i)}function H(t,n){const a=q(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(i)}function P(t){const n=E({className:t.className.replace("-btn","")})
t.replaceWith(n)}function V(t,n){const a=E({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){r("button:not(.tag-bp-btn)",t).forEach(P)}(m("div",a)),a}async function X(t,n,a,s){const e=q(s)
W(s)?.remove()
const o=V(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),u(a,o))}function D(t){return _(F(),[t])}function G(t){s(o(),e(function(t){return[["tag-all-custom",B],["tag-bp-btn",c(X,"bp",N,"Taken")],["tag-all-btn",c(H,t)],["tag-add-btn",c(X,"add",D,"Tagged")],["tag-remove-btn",c(X,"remove",D,"Removed")]]}(t)))}const J=()=>r('[name="tagIndex[]"]:checked')
async function L(t,n){const a=await _(t,n.map((t=>t.value)))
a.s?n.forEach(w):d(a.e.message)}function M(t){t.preventDefault(),T(25,J()).forEach(c(L,F())),l("addRemoveTags","Tag by AJAX")}const z=()=>"addtags"===v.subcmd2,K=t=>a("img",y(t)).src.split("/").at(-1).split(".")[0],O=t=>h(y(t).cells[2]),Q=(t,n)=>`<button class="${t}" type="button">${n}</button>`,U=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,Y=t=>`[${Q(U(t),t)}]`,Z=()=>Y("Fast "+(z()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${Y("Check All")}&nbsp;`:"")(n)}${Z()}&nbsp;${Y("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=y(t).cells[2]
b(s,tt(n,a))}function at(t){return[t,t.value,K(t),O(t)]}function st(){const t=(n=r('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!z())return
$(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
z()&&(n=y(t).insertCell(-1)),b(n,Q("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),G(t),f(document.forms[0],"submit",M)}function et(){p("tagging_cost")?st():g()}export{et as default}
//# sourceMappingURL=addRemoveTags-e3546b80.js.map
