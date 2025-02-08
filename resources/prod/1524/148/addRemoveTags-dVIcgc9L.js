import{$ as t,K as a,q as n,o as s,dI as e,p as o,d as c,s as i,l as r,b7 as m,j as u,ae as d,ak as l,aF as f,c as g,H as p,aj as b,g as v,dL as h,x as j,aH as $,ao as y,aL as I}from"./calfSystem-BldO1y8X.js"
import{c as T}from"./closestTable-BUebhZUa.js"
import{d as k}from"./daGsTake-DBWt8my9.js"
import{g as x}from"./guildInventory-BTZVy_1P.js"
import{h as R}from"./htmlResult-BVZ0S6D_.js"
import{r as A}from"./removeRow-BUoTPn7s.js"
import"./takeItem-ijFETChH.js"
import"./dialog-nv9HUVDL.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-BaZ8ZoH1.js"
function C(t,a){return x({subcmd2:t,tagIndex:a})}async function E(t,n){const s=await a({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:n})
return R(s)}function w(a,n){return t(C,E,a,n)}function N(){return n('[name="subcmd2"]').value}const F=t=>n("input",l(t)),S=t=>u("div",t).dataset.invId
function L(){i("addRemoveTags","doCheckAll"),r('#pCC input[name="tagIndex[]"]').forEach(m)}function B(t,a){i("addRemoveTags","checkType")
const n=S(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(m)}function H(t){const a=f({className:t.className.replace("-btn","")})
t.replaceWith(a)}function W(t,a){const n=f({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){r("button:not(.tag-bp-btn)",t).forEach(H)}(u("div",n)),n}async function _(t,a,n,s){i("addRemoveTags",t)
const e=S(s)
F(s)?.remove()
const o=W(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),d(n,o))}function q(t){return w(N(),[t])}function D(t){s(o(),e(function(t){return[["tag-all-custom",L],["tag-bp-btn",c(_,"bp",k,"Taken")],["tag-all-btn",c(B,t)],["tag-add-btn",c(_,"add",q,"Tagged")],["tag-remove-btn",c(_,"remove",q,"Removed")]]}(t)))}const G=()=>r('[name="tagIndex[]"]:checked')
async function J(t,a){const n=await w(t,a.map((t=>t.value)))
n.s?a.forEach(A):b(n.e.message)}function K(t){t.preventDefault(),p(25,G()).forEach(c(J,N())),i("addRemoveTags","Tag by AJAX")}const M=()=>"addtags"===y.subcmd2,P=t=>n("img",l(t)).src.split("/").at(-1).split(".")[0],V=t=>$(l(t).cells[2]),X=(t,a)=>`<button class="${t}" type="button">${a}</button>`,Y=t=>`tag-${(t=>I(t).split(" ").at(-1))(t)}-btn`,z=t=>`[${X(Y(t),t)}]`,O=()=>z("Fast "+(M()?"Add":"Remove")),Q=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${z("Check All")}&nbsp;`:"")(a)}${O()}&nbsp;${z("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function U([t,a,,,n]){const s=l(t).cells[2]
j(s,Q(a,n))}function Z(t){return[t,t.value,P(t),V(t)]}function tt(){const t=(a=r('input[name="tagIndex[]"]',o()).map(Z)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=v("tagging_cost")
!function(t){if(!M())return
T(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
M()&&(a=l(t).insertCell(-1)),j(a,X("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(U),D(t),g(document.forms[0],"submit",K)}function at(){v("tagging_cost")?tt():h()}export{at as default}
//# sourceMappingURL=addRemoveTags-dVIcgc9L.js.map
