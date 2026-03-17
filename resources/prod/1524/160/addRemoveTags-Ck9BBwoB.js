import{dt as t,$ as a,af as n,q as s,o as e,dO as o,p as c,c as i,s as r,h as m,bl as u,X as d,l,k as f,aR as g,b as p,n as b,g as v,dQ as h,a3 as $,ba as j,aT as T,ay as k,aX as y}from"./calfSystem-HVCiy-VV.js"
import{c as R}from"./closestTable-Cl0v-0VU.js"
import{d as x}from"./daGsTake-DIbHEDyg.js"
import{h as I}from"./htmlResult-BVV0RUGi.js"
import{c as A}from"./chunk-zr9rAXvK.js"
import{r as C}from"./removeRow-CDVskRDs.js"
import"./takeItem-ehzRoq47.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-Zar6WCPQ.js"
function E(a,n){return t({subcmd2:a,tagIndex:n})}async function N(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return I(s)}function w(t,n){return a(E,N,t,n)}function S(){return s('[name="subcmd2"]').value}const X=t=>d("div",t).dataset.invId
function F(){r("addRemoveTags","doCheckAll"),m('#pCC input[name="tagIndex[]"]').forEach(u)}function B(t,a){r("addRemoveTags","checkType")
const n=X(a),[,,s,e]=t.find(([,t])=>t===n)
t.filter(([,,t,a])=>t===s&&a===e).filter(([t])=>document.body.contains(t)).map(([t])=>t).forEach(u)}function Q(t){const a=g({className:t.className.replace("-btn","")})
t.replaceWith(a)}function W(t,a){const n=g({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){m("button:not(.tag-bp-btn)",t).forEach(Q)}(d("div",n)),n}async function _(t,a,n,e){r("addRemoveTags",t)
const o=X(e);(t=>s("input",f(t)))(e)?.remove()
const c=W(t,e);(await a(o)).s&&(c.classList.remove("fshSpinner"),l(n,c))}function q(t){return w(S(),[t])}function D(t){e(c(),o(function(t){return[["tag-all-custom",F],["tag-bp-btn",i(_,"bp",x,"Taken")],["tag-all-btn",i(B,t)],["tag-add-btn",i(_,"add",q,"Tagged")],["tag-remove-btn",i(_,"remove",q,"Removed")]]}(t)))}async function G(t,a){const n=await w(t,a.map(t=>t.value))
n.s?a.forEach(C):b(n.e.message)}function J(t){t.preventDefault(),A(25,m('[name="tagIndex[]"]:checked')).forEach(i(G,S())),r("addRemoveTags","Tag by AJAX")}const L=()=>"addtags"===k.subcmd2,M=t=>j(s("img",f(t))),O=t=>T(f(t).cells[2]),P=(t,a)=>`<button class="${t}" type="button">${a}</button>`,z=t=>`tag-${(t=>y(t).split(" ").at(-1))(t)}-btn`,H=t=>`[${P(z(t),t)}]`,K=()=>H("Fast "+(L()?"Add":"Remove")),U=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${H("Check All")}&nbsp;`:"")(a)}${K()}&nbsp;${H("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function V([t,a,,,n]){const s=f(t).cells[2]
$(s,U(a,n))}function Y(t){return[t,t.value,M(t),O(t)]}function Z(){const t=(a=m('input[name="tagIndex[]"]',c()).map(Y)).map(t=>[...t,a.filter(([,,a,n])=>a===t[2]&&n===t[3]).length])
var a
if(!t.length)return
const n=v("tagging_cost")
!function(t){if(!L())return
R(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
L()&&(a=f(t).insertCell(-1)),$(a,P("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(V),D(t),p(document.forms[0],"submit",J)}function tt(){v("tagging_cost")?Z():h()}export{tt as default}
//# sourceMappingURL=addRemoveTags-Ck9BBwoB.js.map
