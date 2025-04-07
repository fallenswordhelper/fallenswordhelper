import{du as t,$ as a,M as n,q as s,o as e,dR as o,p as c,e as i,s as r,n as u,b7 as m,l as d,ab as l,ai as f,aF as p,c as g,J as b,ah as v,g as h,dT as $,z as T,aH as j,am as y,aL as I}from"./calfSystem-BGW9cdWN.js"
import{c as R}from"./closestTable-D6SfkiIx.js"
import{d as k}from"./daGsTake-Cq39fTue.js"
import{h as x}from"./htmlResult-CAxknWPj.js"
import{r as A}from"./removeRow-Cf8zgJjF.js"
import"./takeItem-CUUDWIGs.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-C9V8YYki.js"
function C(a,n){return t({subcmd2:a,tagIndex:n})}async function E(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return x(s)}function N(t,n){return a(C,E,t,n)}function w(){return s('[name="subcmd2"]').value}const F=t=>s("input",f(t)),S=t=>d("div",t).dataset.invId
function L(){r("addRemoveTags","doCheckAll"),u('#pCC input[name="tagIndex[]"]').forEach(m)}function B(t,a){r("addRemoveTags","checkType")
const n=S(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(m)}function J(t){const a=p({className:t.className.replace("-btn","")})
t.replaceWith(a)}function M(t,a){const n=p({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){u("button:not(.tag-bp-btn)",t).forEach(J)}(d("div",n)),n}async function W(t,a,n,s){r("addRemoveTags",t)
const e=S(s)
F(s)?.remove()
const o=M(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),l(n,o))}function _(t){return N(w(),[t])}function q(t){e(c(),o(function(t){return[["tag-all-custom",L],["tag-bp-btn",i(W,"bp",k,"Taken")],["tag-all-btn",i(B,t)],["tag-add-btn",i(W,"add",_,"Tagged")],["tag-remove-btn",i(W,"remove",_,"Removed")]]}(t)))}const z=()=>u('[name="tagIndex[]"]:checked')
async function D(t,a){const n=await N(t,a.map((t=>t.value)))
n.s?a.forEach(A):v(n.e.message)}function G(t){t.preventDefault(),b(25,z()).forEach(i(D,w())),r("addRemoveTags","Tag by AJAX")}const H=()=>"addtags"===y.subcmd2,P=t=>s("img",f(t)).src.split("/").at(-1).split(".")[0],Q=t=>j(f(t).cells[2]),X=(t,a)=>`<button class="${t}" type="button">${a}</button>`,K=t=>`tag-${(t=>I(t).split(" ").at(-1))(t)}-btn`,O=t=>`[${X(K(t),t)}]`,U=()=>O("Fast "+(H()?"Add":"Remove")),V=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${O("Check All")}&nbsp;`:"")(a)}${U()}&nbsp;${O("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function Y([t,a,,,n]){const s=f(t).cells[2]
T(s,V(a,n))}function Z(t){return[t,t.value,P(t),Q(t)]}function tt(){const t=(a=u('input[name="tagIndex[]"]',c()).map(Z)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=h("tagging_cost")
!function(t){if(!H())return
R(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
H()&&(a=f(t).insertCell(-1)),T(a,X("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(Y),q(t),g(document.forms[0],"submit",G)}function at(){h("tagging_cost")?tt():$()}export{at as default}
//# sourceMappingURL=addRemoveTags-DvpDVj8l.js.map
