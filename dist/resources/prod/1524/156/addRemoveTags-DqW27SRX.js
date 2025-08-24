import{dq as a,$ as t,af as n,q as s,o as e,dN as o,p as c,c as i,s as r,h as u,bi as m,W as d,k as l,j as f,aQ as g,b as p,ac as b,m as v,g as h,dP as $,a2 as j,dQ as k,aS as y,ay as T,aW as I}from"./calfSystem-79LsojAC.js"
import{c as R}from"./closestTable-BuyyntoH.js"
import{d as x}from"./daGsTake-aFle4w95.js"
import{h as A}from"./htmlResult-VfRQZiiv.js"
import{r as C}from"./removeRow-C6t9ORh1.js"
import"./takeItem-wb0j2Een.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-Du-lP_up.js"
function E(t,n){return a({subcmd2:t,tagIndex:n})}async function N(a,t){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:a,tagIndex:t})
return A(s)}function S(a,n){return t(E,N,a,n)}function w(){return s('[name="subcmd2"]').value}const W=a=>d("div",a).dataset.invId
function F(){r("addRemoveTags","doCheckAll"),u('#pCC input[name="tagIndex[]"]').forEach(m)}function P(a,t){r("addRemoveTags","checkType")
const n=W(t),[,,s,e]=a.find(([,a])=>a===n)
a.filter(([,,a,t])=>a===s&&t===e).filter(([a])=>document.body.contains(a)).map(([a])=>a).forEach(m)}function q(a){const t=g({className:a.className.replace("-btn","")})
a.replaceWith(t)}function B(a,t){const n=g({className:`tag-${a} fshSpinner fshSpinner12`})
return t.replaceWith(n),function(a){u("button:not(.tag-bp-btn)",a).forEach(q)}(d("div",n)),n}async function G(a,t,n,e){r("addRemoveTags",a)
const o=W(e);(a=>s("input",f(a)))(e)?.remove()
const c=B(a,e);(await t(o)).s&&(c.classList.remove("fshSpinner"),l(n,c))}function J(a){return S(w(),[a])}function Q(a){e(c(),o(function(a){return[["tag-all-custom",F],["tag-bp-btn",i(G,"bp",x,"Taken")],["tag-all-btn",i(P,a)],["tag-add-btn",i(G,"add",J,"Tagged")],["tag-remove-btn",i(G,"remove",J,"Removed")]]}(a)))}async function _(a,t){const n=await S(a,t.map(a=>a.value))
n.s?t.forEach(C):v(n.e.message)}function D(a){a.preventDefault(),b(25,u('[name="tagIndex[]"]:checked')).forEach(i(_,w())),r("addRemoveTags","Tag by AJAX")}const L=()=>"addtags"===T.subcmd2,M=a=>k(s("img",f(a))),X=a=>y(f(a).cells[2]),z=(a,t)=>`<button class="${a}" type="button">${t}</button>`,H=a=>`tag-${(a=>I(a).split(" ").at(-1))(a)}-btn`,K=a=>`[${z(H(a),a)}]`,O=()=>K("Fast "+(L()?"Add":"Remove")),U=(a,t)=>{return n=a,s=`&nbsp;${(a=>a>1?`${K("Check All")}&nbsp;`:"")(t)}${O()}&nbsp;${K("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function V([a,t,,,n]){const s=f(a).cells[2]
j(s,U(t,n))}function Y(a){return[a,a.value,M(a),X(a)]}function Z(){const a=(t=u('input[name="tagIndex[]"]',c()).map(Y)).map(a=>[...a,t.filter(([,,t,n])=>t===a[2]&&n===a[3]).length])
var t
if(!a.length)return
const n=h("tagging_cost")
!function(a){if(!L())return
R(a).className="add-remove-tags"}(n),function(a){let t=a.parentNode
L()&&(t=f(a).insertCell(-1)),j(t,z("tag-all-custom custombutton","Check&nbsp;All"))}(n),a.forEach(V),Q(a),p(document.forms[0],"submit",D)}function aa(){h("tagging_cost")?Z():$()}export{aa as default}
//# sourceMappingURL=addRemoveTags-DqW27SRX.js.map
