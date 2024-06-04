import{$ as t,G as n,q as a,o as s,d0 as e,p as o,c,s as r,k as i,aA as u,a9 as m,h as d,b as f,E as l,ab as g,g as p,d3 as b,v,ag as h,aq as $,ar as j}from"./calfSystem-wTzwei3t.js"
import{c as y}from"./closestTable-D1tzatJG.js"
import{c as I}from"./closestTr-Cd9iMbp0.js"
import{g as T}from"./guildInventory-DZXfrks_.js"
import{t as k}from"./takeItem-DICxsbkR.js"
import{h as R}from"./htmlResult-m0gx1bEM.js"
import{c as x}from"./createSpan-D9J62kLX.js"
import{r as A}from"./removeRow-BE9TzCxS.js"
import"./guild-BZ--WBHn.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-CbEg_Jt0.js"
function E(t){return T({subcmd2:"takeitem",guildstore_id:t})}async function C(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await k(t))}function N(n){return t(E,C,n)}function w(t,n){return T({subcmd2:t,tagIndex:n})}async function S(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return R(s)}function F(n,a){return t(w,S,n,a)}function _(){return a('[name="subcmd2"]').value}const q=t=>a("input",I(t)),B=t=>d("div",t).dataset.invId
function G(){r("addRemoveTags","doCheckAll"),i('#pCC input[name="tagIndex[]"]').forEach(u)}function W(t,n){r("addRemoveTags","checkType")
const a=B(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function D(t){const n=x({className:t.className.replace("-btn","")})
t.replaceWith(n)}function J(t,n){const a=x({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){i("button:not(.tag-bp-btn)",t).forEach(D)}(d("div",a)),a}async function L(t,n,a,s){r("addRemoveTags",t)
const e=B(s)
q(s)?.remove()
const o=J(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),m(a,o))}function M(t){return F(_(),[t])}function P(t){s(o(),e(function(t){return[["tag-all-custom",G],["tag-bp-btn",c(L,"bp",N,"Taken")],["tag-all-btn",c(W,t)],["tag-add-btn",c(L,"add",M,"Tagged")],["tag-remove-btn",c(L,"remove",M,"Removed")]]}(t)))}const U=()=>i('[name="tagIndex[]"]:checked')
async function X(t,n){const a=await F(t,n.map((t=>t.value)))
a.s?n.forEach(A):g(a.e.message)}function Z(t){t.preventDefault(),l(25,U()).forEach(c(X,_())),r("addRemoveTags","Tag by AJAX")}const z=()=>"addtags"===h.subcmd2,H=t=>a("img",I(t)).src.split("/").at(-1).split(".")[0],K=t=>$(I(t).cells[2]),O=(t,n)=>`<button class="${t}" type="button">${n}</button>`,Q=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,V=t=>`[${O(Q(t),t)}]`,Y=()=>V("Fast "+(z()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${V("Check All")}&nbsp;`:"")(n)}${Y()}&nbsp;${V("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=I(t).cells[2]
v(s,tt(n,a))}function at(t){return[t,t.value,H(t),K(t)]}function st(){const t=(n=i('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!z())return
y(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
z()&&(n=I(t).insertCell(-1)),v(n,O("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),P(t),f(document.forms[0],"submit",Z)}function et(){p("tagging_cost")?st():b()}export{et as default}
//# sourceMappingURL=addRemoveTags-CX6VIK3W.js.map
