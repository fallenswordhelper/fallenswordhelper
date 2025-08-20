import{dw as t,$ as a,ae as n,q as s,o as e,dT as o,p as c,c as i,s as r,h as m,bh as u,V as d,k as l,j as f,aP as p,b as g,ab as b,m as v,g as h,dV as T,a1 as $,aR as j,ax as k,aV as y}from"./calfSystem-CT1aM4VG.js"
import{c as R}from"./closestTable-C24mp168.js"
import{d as x}from"./daGsTake-Dpddsv6F.js"
import{h as I}from"./htmlResult-DHLyE8PQ.js"
import{r as w}from"./removeRow-6EOzSfxQ.js"
import"./takeItem-CQgeRFJP.js"
import"./dialog-CiSCF2So.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-Cozeh7z2.js"
function A(a,n){return t({subcmd2:a,tagIndex:n})}async function C(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return I(s)}function E(t,n){return a(A,C,t,n)}function N(){return s('[name="subcmd2"]').value}const S=t=>s("input",f(t)),F=t=>d("div",t).dataset.invId
function V(){r("addRemoveTags","doCheckAll"),m('#pCC input[name="tagIndex[]"]').forEach(u)}function B(t,a){r("addRemoveTags","checkType")
const n=F(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function P(t){const a=p({className:t.className.replace("-btn","")})
t.replaceWith(a)}function W(t,a){const n=p({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){m("button:not(.tag-bp-btn)",t).forEach(P)}(d("div",n)),n}async function _(t,a,n,s){r("addRemoveTags",t)
const e=F(s)
S(s)?.remove()
const o=W(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),l(n,o))}function q(t){return E(N(),[t])}function D(t){e(c(),o(function(t){return[["tag-all-custom",V],["tag-bp-btn",i(_,"bp",x,"Taken")],["tag-all-btn",i(B,t)],["tag-add-btn",i(_,"add",q,"Tagged")],["tag-remove-btn",i(_,"remove",q,"Removed")]]}(t)))}const G=()=>m('[name="tagIndex[]"]:checked')
async function H(t,a){const n=await E(t,a.map((t=>t.value)))
n.s?a.forEach(w):v(n.e.message)}function J(t){t.preventDefault(),b(25,G()).forEach(i(H,N())),r("addRemoveTags","Tag by AJAX")}const K=()=>"addtags"===k.subcmd2,L=t=>s("img",f(t)).src.split("/").at(-1).split(".")[0],M=t=>j(f(t).cells[2]),X=(t,a)=>`<button class="${t}" type="button">${a}</button>`,z=t=>`tag-${(t=>y(t).split(" ").at(-1))(t)}-btn`,O=t=>`[${X(z(t),t)}]`,Q=()=>O("Fast "+(K()?"Add":"Remove")),U=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${O("Check All")}&nbsp;`:"")(a)}${Q()}&nbsp;${O("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function Y([t,a,,,n]){const s=f(t).cells[2]
$(s,U(a,n))}function Z(t){return[t,t.value,L(t),M(t)]}function tt(){const t=(a=m('input[name="tagIndex[]"]',c()).map(Z)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=h("tagging_cost")
!function(t){if(!K())return
R(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
K()&&(a=f(t).insertCell(-1)),$(a,X("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(Y),D(t),g(document.forms[0],"submit",J)}function at(){h("tagging_cost")?tt():T()}export{at as default}
//# sourceMappingURL=addRemoveTags-2bAf-0ZF.js.map
