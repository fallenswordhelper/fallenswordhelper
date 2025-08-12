import{dA as t,$ as a,ag as n,q as s,o as e,dY as o,p as c,c as i,s as r,k as d,bg as m,X as u,m as l,l as f,b2 as g,b as p,ad as b,t as v,g as h,d_ as T,a3 as $,aP as j,az as k,aT as y}from"./calfSystem-BlPuMQGT.js"
import{c as I}from"./closestTable-gY6pXvyq.js"
import{d as R}from"./daGsTake-Dklz9fgo.js"
import{h as x}from"./htmlResult-DY3V3Ki7.js"
import{r as A}from"./removeRow-CNDwh27I.js"
import"./takeItem-CHURKBir.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-BDWFjNv_.js"
function C(a,n){return t({subcmd2:a,tagIndex:n})}async function E(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return x(s)}function N(t,n){return a(C,E,t,n)}function w(){return s('[name="subcmd2"]').value}const S=t=>s("input",f(t)),F=t=>u("div",t).dataset.invId
function _(){r("addRemoveTags","doCheckAll"),d('#pCC input[name="tagIndex[]"]').forEach(m)}function B(t,a){r("addRemoveTags","checkType")
const n=F(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(m)}function P(t){const a=g({className:t.className.replace("-btn","")})
t.replaceWith(a)}function W(t,a){const n=g({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){d("button:not(.tag-bp-btn)",t).forEach(P)}(u("div",n)),n}async function X(t,a,n,s){r("addRemoveTags",t)
const e=F(s)
S(s)?.remove()
const o=W(t,s);(await a(e)).s&&(o.classList.remove("fshSpinner"),l(n,o))}function q(t){return N(w(),[t])}function z(t){e(c(),o(function(t){return[["tag-all-custom",_],["tag-bp-btn",i(X,"bp",R,"Taken")],["tag-all-btn",i(B,t)],["tag-add-btn",i(X,"add",q,"Tagged")],["tag-remove-btn",i(X,"remove",q,"Removed")]]}(t)))}const D=()=>d('[name="tagIndex[]"]:checked')
async function G(t,a){const n=await N(t,a.map((t=>t.value)))
n.s?a.forEach(A):v(n.e.message)}function J(t){t.preventDefault(),b(25,D()).forEach(i(G,w())),r("addRemoveTags","Tag by AJAX")}const K=()=>"addtags"===k.subcmd2,L=t=>s("img",f(t)).src.split("/").at(-1).split(".")[0],M=t=>j(f(t).cells[2]),Y=(t,a)=>`<button class="${t}" type="button">${a}</button>`,H=t=>`tag-${(t=>y(t).split(" ").at(-1))(t)}-btn`,O=t=>`[${Y(H(t),t)}]`,Q=()=>O("Fast "+(K()?"Add":"Remove")),U=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${O("Check All")}&nbsp;`:"")(a)}${Q()}&nbsp;${O("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function V([t,a,,,n]){const s=f(t).cells[2]
$(s,U(a,n))}function Z(t){return[t,t.value,L(t),M(t)]}function tt(){const t=(a=d('input[name="tagIndex[]"]',c()).map(Z)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=h("tagging_cost")
!function(t){if(!K())return
I(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
K()&&(a=f(t).insertCell(-1)),$(a,Y("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(V),z(t),p(document.forms[0],"submit",J)}function at(){h("tagging_cost")?tt():T()}export{at as default}
//# sourceMappingURL=addRemoveTags-BzA8VqQm.js.map
