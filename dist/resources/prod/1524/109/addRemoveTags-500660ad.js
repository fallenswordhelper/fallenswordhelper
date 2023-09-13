import{$ as t,G as n,q as a,o as s,cV as e,p as o,c,j as r,ax as i,a6 as u,e as m,b as f,n as l,a8 as d,g as p,cX as g,v as b,ad as v,an as h,ao as j}from"./calfSystem-2f15e074.js"
import{c as $}from"./closestTable-23acbcda.js"
import{c as I}from"./closestTr-ce435b3a.js"
import{g as y}from"./guildInventory-6e6e1d3b.js"
import{t as x}from"./takeItem-197be5eb.js"
import{h as k}from"./htmlResult-27fd54be.js"
import{c as E}from"./createSpan-14f0ab30.js"
import{c as T}from"./chunk-cd03a005.js"
import{r as w}from"./removeRow-28c95da7.js"
import"./guild-07edae00.js"
import"./dialog-d1c54012.js"
import"./dialogMsg-7c5fba89.js"
import"./InfoBoxFrom-20286709.js"
function A(t){return y({subcmd2:"takeitem",guildstore_id:t})}async function C(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await x(t))}function N(n){return t(A,C,n)}function R(t,n){return y({subcmd2:t,tagIndex:n})}async function S(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return k(s)}function F(n,a){return t(R,S,n,a)}function X(){return a('[name="subcmd2"]').value}const _=t=>a("input",I(t)),B=t=>m("div",t).dataset.invId
function P(){r('#pCC input[name="tagIndex[]"]').forEach(i)}function V(t,n){const a=B(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(i)}function W(t){const n=E({className:t.className.replace("-btn","")})
t.replaceWith(n)}function q(t,n){const a=E({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){r("button:not(.tag-bp-btn)",t).forEach(W)}(m("div",a)),a}async function D(t,n,a,s){const e=B(s)
_(s)?.remove()
const o=q(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),u(a,o))}function G(t){return F(X(),[t])}function J(t){s(o(),e(function(t){return[["tag-all-custom",P],["tag-bp-btn",c(D,"bp",N,"Taken")],["tag-all-btn",c(V,t)],["tag-add-btn",c(D,"add",G,"Tagged")],["tag-remove-btn",c(D,"remove",G,"Removed")]]}(t)))}const L=()=>r('[name="tagIndex[]"]:checked')
async function M(t,n){const a=await F(t,n.map((t=>t.value)))
a.s?n.forEach(w):d(a.e.message)}function z(t){t.preventDefault(),T(25,L()).forEach(c(M,X())),l("addRemoveTags","Tag by AJAX")}const H=()=>"addtags"===v.subcmd2,K=t=>a("img",I(t)).src.split("/").at(-1).split(".")[0],O=t=>h(I(t).cells[2]),Q=(t,n)=>`<button class="${t}" type="button">${n}</button>`,U=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,Y=t=>`[${Q(U(t),t)}]`,Z=()=>Y("Fast "+(H()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${Y("Check All")}&nbsp;`:"")(n)}${Z()}&nbsp;${Y("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=I(t).cells[2]
b(s,tt(n,a))}function at(t){return[t,t.value,K(t),O(t)]}function st(){const t=(n=r('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!H())return
$(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
H()&&(n=I(t).insertCell(-1)),b(n,Q("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),J(t),f(document.forms[0],"submit",z)}function et(){p("tagging_cost")?st():g()}export{et as default}
//# sourceMappingURL=addRemoveTags-500660ad.js.map
