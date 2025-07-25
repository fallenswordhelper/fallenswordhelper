import{dC as t,$ as a,ag as n,q as s,o as e,dZ as o,p as c,c as i,s as r,k as d,bj as m,X as u,m as l,l as f,aR as g,b as p,ad as b,t as v,g as h,d$ as $,a3 as T,aT as j,az as k,aX as y}from"./calfSystem-C1X5YxJZ.js"
import{c as R}from"./closestTable-STrxtv_E.js"
import{d as I}from"./daGsTake-78DHHyAV.js"
import{h as x}from"./htmlResult-Btqom80J.js"
import{r as C}from"./removeRow-DK0NC7vS.js"
import"./takeItem-Bx0kcXjg.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-CALdsMkd.js"
function A(a,n){return t({subcmd2:a,tagIndex:n})}async function E(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return x(s)}function N(t,n){return a(A,E,t,n)}function w(){return s('[name="subcmd2"]').value}const S=t=>s("input",f(t)),F=t=>u("div",t).dataset.invId
function X(){r("addRemoveTags","doCheckAll"),d('#pCC input[name="tagIndex[]"]').forEach(m)}function B(t,a){r("addRemoveTags","checkType")
const n=F(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(m)}function W(t){const a=g({className:t.className.replace("-btn","")})
t.replaceWith(a)}function _(t,a){const n=g({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){d("button:not(.tag-bp-btn)",t).forEach(W)}(u("div",n)),n}async function q(t,a,n,s){r("addRemoveTags",t)
const e=F(s)
S(s)?.remove()
const o=_(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),l(n,o))}function z(t){return N(w(),[t])}function D(t){e(c(),o(function(t){return[["tag-all-custom",X],["tag-bp-btn",i(q,"bp",I,"Taken")],["tag-all-btn",i(B,t)],["tag-add-btn",i(q,"add",z,"Tagged")],["tag-remove-btn",i(q,"remove",z,"Removed")]]}(t)))}const G=()=>d('[name="tagIndex[]"]:checked')
async function J(t,a){const n=await N(t,a.map((t=>t.value)))
n.s?a.forEach(C):v(n.e.message)}function K(t){t.preventDefault(),b(25,G()).forEach(i(J,w())),r("addRemoveTags","Tag by AJAX")}const L=()=>"addtags"===k.subcmd2,M=t=>s("img",f(t)).src.split("/").at(-1).split(".")[0],P=t=>j(f(t).cells[2]),Z=(t,a)=>`<button class="${t}" type="button">${a}</button>`,H=t=>`tag-${(t=>y(t).split(" ").at(-1))(t)}-btn`,O=t=>`[${Z(H(t),t)}]`,Q=()=>O("Fast "+(L()?"Add":"Remove")),U=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${O("Check All")}&nbsp;`:"")(a)}${Q()}&nbsp;${O("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function V([t,a,,,n]){const s=f(t).cells[2]
T(s,U(a,n))}function Y(t){return[t,t.value,M(t),P(t)]}function tt(){const t=(a=d('input[name="tagIndex[]"]',c()).map(Y)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=h("tagging_cost")
!function(t){if(!L())return
R(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
L()&&(a=f(t).insertCell(-1)),T(a,Z("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(V),D(t),p(document.forms[0],"submit",K)}function at(){h("tagging_cost")?tt():$()}export{at as default}
//# sourceMappingURL=addRemoveTags-DXKQ6YTB.js.map
