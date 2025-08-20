import{dx as t,$ as a,ae as n,q as s,o as e,dU as o,p as c,c as i,s as r,h as m,bh as u,V as d,k as l,j as f,aP as p,b as g,ab as b,m as v,g as h,dW as $,a1 as j,aR as x,ax as T,aV as k}from"./calfSystem-UyQ_FKFu.js"
import{c as y}from"./closestTable-DwwUFwTi.js"
import{d as R}from"./daGsTake-CRUGGR_j.js"
import{h as I}from"./htmlResult-C3r5PHKK.js"
import{r as A}from"./removeRow-CM76VQ7c.js"
import"./takeItem-DjmeaFjX.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-B2WmDuDa.js"
function C(a,n){return t({subcmd2:a,tagIndex:n})}async function E(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return I(s)}function N(t,n){return a(C,E,t,n)}function w(){return s('[name="subcmd2"]').value}const S=t=>d("div",t).dataset.invId
function F(){r("addRemoveTags","doCheckAll"),m('#pCC input[name="tagIndex[]"]').forEach(u)}function W(t,a){r("addRemoveTags","checkType")
const n=S(a),[,,s,e]=t.find(([,t])=>t===n)
t.filter(([,,t,a])=>t===s&&a===e).filter(([t])=>document.body.contains(t)).map(([t])=>t).forEach(u)}function B(t){const a=p({className:t.className.replace("-btn","")})
t.replaceWith(a)}function L(t,a){const n=p({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){m("button:not(.tag-bp-btn)",t).forEach(B)}(d("div",n)),n}async function P(t,a,n,e){r("addRemoveTags",t)
const o=S(e);(t=>s("input",f(t)))(e)?.remove()
const c=L(t,e);(await a(o)).s&&(c.classList.remove("fshSpinner"),l(n,c))}function U(t){return N(w(),[t])}function V(t){e(c(),o(function(t){return[["tag-all-custom",F],["tag-bp-btn",i(P,"bp",R,"Taken")],["tag-all-btn",i(W,t)],["tag-add-btn",i(P,"add",U,"Tagged")],["tag-remove-btn",i(P,"remove",U,"Removed")]]}(t)))}async function _(t,a){const n=await N(t,a.map(t=>t.value))
n.s?a.forEach(A):v(n.e.message)}function q(t){t.preventDefault(),b(25,m('[name="tagIndex[]"]:checked')).forEach(i(_,w())),r("addRemoveTags","Tag by AJAX")}const D=()=>"addtags"===T.subcmd2,G=t=>s("img",f(t)).src.split("/").at(-1).split(".")[0],J=t=>x(f(t).cells[2]),M=(t,a)=>`<button class="${t}" type="button">${a}</button>`,O=t=>`tag-${(t=>k(t).split(" ").at(-1))(t)}-btn`,X=t=>`[${M(O(t),t)}]`,z=()=>X("Fast "+(D()?"Add":"Remove")),H=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${X("Check All")}&nbsp;`:"")(a)}${z()}&nbsp;${X("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function K([t,a,,,n]){const s=f(t).cells[2]
j(s,H(a,n))}function Q(t){return[t,t.value,G(t),J(t)]}function Y(){const t=(a=m('input[name="tagIndex[]"]',c()).map(Q)).map(t=>[...t,a.filter(([,,a,n])=>a===t[2]&&n===t[3]).length])
var a
if(!t.length)return
const n=h("tagging_cost")
!function(t){if(!D())return
y(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
D()&&(a=f(t).insertCell(-1)),j(a,M("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(K),V(t),g(document.forms[0],"submit",q)}function Z(){h("tagging_cost")?Y():$()}export{Z as default}
//# sourceMappingURL=addRemoveTags-BWTLgTkl.js.map
