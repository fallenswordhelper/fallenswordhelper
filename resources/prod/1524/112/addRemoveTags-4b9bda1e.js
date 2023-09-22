import{$ as t,E as n,q as a,o as s,cT as e,p as o,c,j as r,av as i,a4 as u,e as m,b as f,n as l,a6 as d,g as p,cW as g,v as b,ab as v,al as h,am as j}from"./calfSystem-4830a18d.js"
import{c as $}from"./closestTable-082cc634.js"
import{c as y}from"./closestTr-a662daf2.js"
import{g as I}from"./guildInventory-734d12f3.js"
import{t as T}from"./takeItem-de2d7599.js"
import{h as k}from"./htmlResult-7fa1a7c5.js"
import{c as x}from"./createSpan-0da7a190.js"
import{c as E}from"./chunk-cd03a005.js"
import{r as N}from"./removeRow-2b7fbdc8.js"
import"./guild-8e58b9bf.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./InfoBoxFrom-29ddbf6c.js"
function w(t){return I({subcmd2:"takeitem",guildstore_id:t})}async function A(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await T(t))}function C(n){return t(w,A,n)}function R(t,n){return I({subcmd2:t,tagIndex:n})}async function S(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return k(s)}function W(n,a){return t(R,S,n,a)}function _(){return a('[name="subcmd2"]').value}const F=t=>a("input",y(t)),B=t=>m("div",t).dataset.invId
function H(){r('#pCC input[name="tagIndex[]"]').forEach(i)}function q(t,n){const a=B(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(i)}function D(t){const n=x({className:t.className.replace("-btn","")})
t.replaceWith(n)}function J(t,n){const a=x({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){r("button:not(.tag-bp-btn)",t).forEach(D)}(m("div",a)),a}async function L(t,n,a,s){const e=B(s)
F(s)?.remove()
const o=J(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),u(a,o))}function M(t){return W(_(),[t])}function P(t){s(o(),e(function(t){return[["tag-all-custom",H],["tag-bp-btn",c(L,"bp",C,"Taken")],["tag-all-btn",c(q,t)],["tag-add-btn",c(L,"add",M,"Tagged")],["tag-remove-btn",c(L,"remove",M,"Removed")]]}(t)))}const X=()=>r('[name="tagIndex[]"]:checked')
async function z(t,n){const a=await W(t,n.map((t=>t.value)))
a.s?n.forEach(N):d(a.e.message)}function G(t){t.preventDefault(),E(25,X()).forEach(c(z,_())),l("addRemoveTags","Tag by AJAX")}const K=()=>"addtags"===v.subcmd2,O=t=>a("img",y(t)).src.split("/").at(-1).split(".")[0],Q=t=>h(y(t).cells[2]),U=(t,n)=>`<button class="${t}" type="button">${n}</button>`,V=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,Y=t=>`[${U(V(t),t)}]`,Z=()=>Y("Fast "+(K()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${Y("Check All")}&nbsp;`:"")(n)}${Z()}&nbsp;${Y("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=y(t).cells[2]
b(s,tt(n,a))}function at(t){return[t,t.value,O(t),Q(t)]}function st(){const t=(n=r('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!K())return
$(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
K()&&(n=y(t).insertCell(-1)),b(n,U("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),P(t),f(document.forms[0],"submit",G)}function et(){p("tagging_cost")?st():g()}export{et as default}
//# sourceMappingURL=addRemoveTags-4b9bda1e.js.map
