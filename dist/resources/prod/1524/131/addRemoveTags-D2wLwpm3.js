import{$ as t,G as a,q as n,o as s,d7 as e,p as o,c,s as r,k as i,aC as u,a9 as m,h as d,b as l,E as f,ab as g,g as p,da as b,v,ag as h,as as $,at as j}from"./calfSystem-Dr91xfiU.js"
import{c as y}from"./closestTable-Dgz0HNuD.js"
import{c as T}from"./closestTr--7unELqC.js"
import{g as I}from"./guildInventory-DKSZOW6b.js"
import{t as k}from"./takeItem-B4A5TuCL.js"
import{h as R}from"./htmlResult-CBDUXsuY.js"
import{c as x}from"./createSpan-DOXOkWJm.js"
import{r as C}from"./removeRow-C3etCc-1.js"
import"./guild-CPwxUxeX.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-B85g3JkL.js"
function E(t){return I({subcmd2:"takeitem",guildstore_id:t})}async function A(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await k(t))}function w(a){return t(E,A,a)}function N(t,a){return I({subcmd2:t,tagIndex:a})}async function S(t,n){const s=await a({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:n})
return R(s)}function F(a,n){return t(N,S,a,n)}function _(){return n('[name="subcmd2"]').value}const B=t=>n("input",T(t)),M=t=>d("div",t).dataset.invId
function W(){r("addRemoveTags","doCheckAll"),i('#pCC input[name="tagIndex[]"]').forEach(u)}function q(t,a){r("addRemoveTags","checkType")
const n=M(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function D(t){const a=x({className:t.className.replace("-btn","")})
t.replaceWith(a)}function G(t,a){const n=x({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){i("button:not(.tag-bp-btn)",t).forEach(D)}(d("div",n)),n}async function J(t,a,n,s){r("addRemoveTags",t)
const e=M(s)
B(s)?.remove()
const o=G(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),m(n,o))}function L(t){return F(_(),[t])}function P(t){s(o(),e(function(t){return[["tag-all-custom",W],["tag-bp-btn",c(J,"bp",w,"Taken")],["tag-all-btn",c(q,t)],["tag-add-btn",c(J,"add",L,"Tagged")],["tag-remove-btn",c(J,"remove",L,"Removed")]]}(t)))}const X=()=>i('[name="tagIndex[]"]:checked')
async function Z(t,a){const n=await F(t,a.map((t=>t.value)))
n.s?a.forEach(C):g(n.e.message)}function z(t){t.preventDefault(),f(25,X()).forEach(c(Z,_())),r("addRemoveTags","Tag by AJAX")}const H=()=>"addtags"===h.subcmd2,K=t=>n("img",T(t)).src.split("/").at(-1).split(".")[0],O=t=>$(T(t).cells[2]),Q=(t,a)=>`<button class="${t}" type="button">${a}</button>`,U=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,V=t=>`[${Q(U(t),t)}]`,Y=()=>V("Fast "+(H()?"Add":"Remove")),tt=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${V("Check All")}&nbsp;`:"")(a)}${Y()}&nbsp;${V("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function at([t,a,,,n]){const s=T(t).cells[2]
v(s,tt(a,n))}function nt(t){return[t,t.value,K(t),O(t)]}function st(){const t=(a=i('input[name="tagIndex[]"]',o()).map(nt)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=p("tagging_cost")
!function(t){if(!H())return
y(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
H()&&(a=T(t).insertCell(-1)),v(a,Q("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(at),P(t),l(document.forms[0],"submit",z)}function et(){p("tagging_cost")?st():b()}export{et as default}
//# sourceMappingURL=addRemoveTags-D2wLwpm3.js.map
