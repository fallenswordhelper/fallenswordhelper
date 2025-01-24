import{J as t,$ as a,q as n,o as s,dB as e,p as o,c,s as i,k as r,b4 as m,ad as u,ai as d,h as l,aD as f,b as p,G as g,af as b,g as v,dE as h,w as $,am as j,aF as y,aJ as T}from"./calfSystem-CvwhhJv4.js"
import{c as k}from"./closestTable-DA5PEIxg.js"
import{d as I}from"./daGsTake-CoRFjC9R.js"
import{g as x}from"./guildInventory-mCp60d9Z.js"
import{h as R}from"./htmlResult-CRj7vbsR.js"
import{r as E}from"./removeRow-BV8rREkH.js"
import"./takeItem-t2YovuJh.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-CWtMVvia.js"
function A(t,a){return x({subcmd2:t,tagIndex:a})}async function C(a,n){const s=await t({cmd:"guild",subcmd:"inventory",subcmd2:a,tagIndex:n})
return R(s)}function w(t,n){return a(A,C,t,n)}function N(){return n('[name="subcmd2"]').value}const F=t=>n("input",d(t)),S=t=>l("div",t).dataset.invId
function B(){i("addRemoveTags","doCheckAll"),r('#pCC input[name="tagIndex[]"]').forEach(m)}function J(t,a){i("addRemoveTags","checkType")
const n=S(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(m)}function _(t){const a=f({className:t.className.replace("-btn","")})
t.replaceWith(a)}function q(t,a){const n=f({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){r("button:not(.tag-bp-btn)",t).forEach(_)}(l("div",n)),n}async function D(t,a,n,s){i("addRemoveTags",t)
const e=S(s)
F(s)?.remove()
const o=q(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),u(n,o))}function G(t){return w(N(),[t])}function W(t){s(o(),e(function(t){return[["tag-all-custom",B],["tag-bp-btn",c(D,"bp",I,"Taken")],["tag-all-btn",c(J,t)],["tag-add-btn",c(D,"add",G,"Tagged")],["tag-remove-btn",c(D,"remove",G,"Removed")]]}(t)))}const X=()=>r('[name="tagIndex[]"]:checked')
async function L(t,a){const n=await w(t,a.map((t=>t.value)))
n.s?a.forEach(E):b(n.e.message)}function M(t){t.preventDefault(),g(25,X()).forEach(c(L,N())),i("addRemoveTags","Tag by AJAX")}const P=()=>"addtags"===j.subcmd2,z=t=>n("img",d(t)).src.split("/").at(-1).split(".")[0],H=t=>y(d(t).cells[2]),K=(t,a)=>`<button class="${t}" type="button">${a}</button>`,O=t=>`tag-${(t=>T(t).split(" ").at(-1))(t)}-btn`,Q=t=>`[${K(O(t),t)}]`,U=()=>Q("Fast "+(P()?"Add":"Remove")),V=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${Q("Check All")}&nbsp;`:"")(a)}${U()}&nbsp;${Q("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function Y([t,a,,,n]){const s=d(t).cells[2]
$(s,V(a,n))}function Z(t){return[t,t.value,z(t),H(t)]}function tt(){const t=(a=r('input[name="tagIndex[]"]',o()).map(Z)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=v("tagging_cost")
!function(t){if(!P())return
k(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
P()&&(a=d(t).insertCell(-1)),$(a,K("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(Y),W(t),p(document.forms[0],"submit",M)}function at(){v("tagging_cost")?tt():h()}export{at as default}
//# sourceMappingURL=addRemoveTags-CJTveQPT.js.map
