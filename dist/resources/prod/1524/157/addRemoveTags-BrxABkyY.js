import{ds as a,$ as t,af as n,q as s,o as e,dP as o,p as c,c as i,s as r,h as m,bk as u,W as d,k as l,j as f,aR as g,b as p,ac as b,m as v,g as h,dR as $,a2 as T,b9 as j,aT as k,ay as y,aX as R}from"./calfSystem-CQOGdqPv.js"
import{c as I}from"./closestTable-Cs7gyt8-.js"
import{d as x}from"./daGsTake-CCH0dm1Y.js"
import{h as A}from"./htmlResult-BYIVInNx.js"
import{r as C}from"./removeRow-9IzwYdof.js"
import"./takeItem-DudDU78F.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-GavcHhIs.js"
function E(t,n){return a({subcmd2:t,tagIndex:n})}async function w(a,t){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:a,tagIndex:t})
return A(s)}function N(a,n){return t(E,w,a,n)}function S(){return s('[name="subcmd2"]').value}const F=a=>d("div",a).dataset.invId
function W(){r("addRemoveTags","doCheckAll"),m('#pCC input[name="tagIndex[]"]').forEach(u)}function B(a,t){r("addRemoveTags","checkType")
const n=F(t),[,,s,e]=a.find(([,a])=>a===n)
a.filter(([,,a,t])=>a===s&&t===e).filter(([a])=>document.body.contains(a)).map(([a])=>a).forEach(u)}function L(a){const t=g({className:a.className.replace("-btn","")})
a.replaceWith(t)}function P(a,t){const n=g({className:`tag-${a} fshSpinner fshSpinner12`})
return t.replaceWith(n),function(a){m("button:not(.tag-bp-btn)",a).forEach(L)}(d("div",n)),n}async function X(a,t,n,e){r("addRemoveTags",a)
const o=F(e);(a=>s("input",f(a)))(e)?.remove()
const c=P(a,e);(await t(o)).s&&(c.classList.remove("fshSpinner"),l(n,c))}function _(a){return N(S(),[a])}function q(a){e(c(),o(function(a){return[["tag-all-custom",W],["tag-bp-btn",i(X,"bp",x,"Taken")],["tag-all-btn",i(B,a)],["tag-add-btn",i(X,"add",_,"Tagged")],["tag-remove-btn",i(X,"remove",_,"Removed")]]}(a)))}async function D(a,t){const n=await N(a,t.map(a=>a.value))
n.s?t.forEach(C):v(n.e.message)}function G(a){a.preventDefault(),b(25,m('[name="tagIndex[]"]:checked')).forEach(i(D,S())),r("addRemoveTags","Tag by AJAX")}const J=()=>"addtags"===y.subcmd2,M=a=>j(s("img",f(a))),O=a=>k(f(a).cells[2]),U=(a,t)=>`<button class="${a}" type="button">${t}</button>`,z=a=>`tag-${(a=>R(a).split(" ").at(-1))(a)}-btn`,H=a=>`[${U(z(a),a)}]`,K=()=>H("Fast "+(J()?"Add":"Remove")),Q=(a,t)=>{return n=a,s=`&nbsp;${(a=>a>1?`${H("Check All")}&nbsp;`:"")(t)}${K()}&nbsp;${H("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function V([a,t,,,n]){const s=f(a).cells[2]
T(s,Q(t,n))}function Y(a){return[a,a.value,M(a),O(a)]}function Z(){const a=(t=m('input[name="tagIndex[]"]',c()).map(Y)).map(a=>[...a,t.filter(([,,t,n])=>t===a[2]&&n===a[3]).length])
var t
if(!a.length)return
const n=h("tagging_cost")
!function(a){if(!J())return
I(a).className="add-remove-tags"}(n),function(a){let t=a.parentNode
J()&&(t=f(a).insertCell(-1)),T(t,U("tag-all-custom custombutton","Check&nbsp;All"))}(n),a.forEach(V),q(a),p(document.forms[0],"submit",G)}function aa(){h("tagging_cost")?Z():$()}export{aa as default}
//# sourceMappingURL=addRemoveTags-BrxABkyY.js.map
