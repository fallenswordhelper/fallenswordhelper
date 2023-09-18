import{$ as t,F as n,q as a,o as s,cT as e,p as o,c,j as r,aw as i,a5 as u,e as m,b as f,n as l,a7 as d,g as p,cW as g,v as b,ac as v,am as h,an as j}from"./calfSystem-abb16b0d.js"
import{c as $}from"./closestTable-deb533c1.js"
import{c as y}from"./closestTr-d0dbc351.js"
import{g as I}from"./guildInventory-285cf47e.js"
import{t as k}from"./takeItem-08215f5b.js"
import{h as x}from"./htmlResult-6b7c7e7e.js"
import{c as T}from"./createSpan-b6e6b8c0.js"
import{c as w}from"./chunk-cd03a005.js"
import{r as E}from"./removeRow-3c6baa90.js"
import"./guild-9354fe8b.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./InfoBoxFrom-2b40207c.js"
function S(t){return I({subcmd2:"takeitem",guildstore_id:t})}async function A(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await k(t))}function C(n){return t(S,A,n)}function N(t,n){return I({subcmd2:t,tagIndex:n})}async function R(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return x(s)}function F(n,a){return t(N,R,n,a)}function W(){return a('[name="subcmd2"]').value}const _=t=>a("input",y(t)),q=t=>m("div",t).dataset.invId
function B(){r('#pCC input[name="tagIndex[]"]').forEach(i)}function M(t,n){const a=q(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(i)}function D(t){const n=T({className:t.className.replace("-btn","")})
t.replaceWith(n)}function G(t,n){const a=T({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){r("button:not(.tag-bp-btn)",t).forEach(D)}(m("div",a)),a}async function H(t,n,a,s){const e=q(s)
_(s)?.remove()
const o=G(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),u(a,o))}function J(t){return F(W(),[t])}function L(t){s(o(),e(function(t){return[["tag-all-custom",B],["tag-bp-btn",c(H,"bp",C,"Taken")],["tag-all-btn",c(M,t)],["tag-add-btn",c(H,"add",J,"Tagged")],["tag-remove-btn",c(H,"remove",J,"Removed")]]}(t)))}const P=()=>r('[name="tagIndex[]"]:checked')
async function X(t,n){const a=await F(t,n.map((t=>t.value)))
a.s?n.forEach(E):d(a.e.message)}function Z(t){t.preventDefault(),w(25,P()).forEach(c(X,W())),l("addRemoveTags","Tag by AJAX")}const z=()=>"addtags"===v.subcmd2,K=t=>a("img",y(t)).src.split("/").at(-1).split(".")[0],O=t=>h(y(t).cells[2]),Q=(t,n)=>`<button class="${t}" type="button">${n}</button>`,U=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,V=t=>`[${Q(U(t),t)}]`,Y=()=>V("Fast "+(z()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${V("Check All")}&nbsp;`:"")(n)}${Y()}&nbsp;${V("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=y(t).cells[2]
b(s,tt(n,a))}function at(t){return[t,t.value,K(t),O(t)]}function st(){const t=(n=r('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!z())return
$(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
z()&&(n=y(t).insertCell(-1)),b(n,Q("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),L(t),f(document.forms[0],"submit",Z)}function et(){p("tagging_cost")?st():g()}export{et as default}
//# sourceMappingURL=addRemoveTags-8dc92727.js.map
