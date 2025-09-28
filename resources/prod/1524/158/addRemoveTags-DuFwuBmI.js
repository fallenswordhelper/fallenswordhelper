import{dr as t,$ as a,ae as n,q as s,o as e,dI as o,p as c,c as r,s as i,h as m,bj as u,W as d,k as l,j as f,aQ as g,b as p,m as b,g as v,dK as h,a2 as j,b8 as $,aS as k,ax as T,aW as x}from"./calfSystem-CIuUjh4H.js"
import{c as y}from"./closestTable-CAaKFM8t.js"
import{d as I}from"./daGsTake-hWqYxurl.js"
import{h as R}from"./htmlResult-Cc7d59m8.js"
import{c as A}from"./chunk-zr9rAXvK.js"
import{r as C}from"./removeRow-BDx66EIf.js"
import"./takeItem-DZIoXPKq.js"
import"./dialog-DuiKsz8O.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-BOMuQUn_.js"
function E(a,n){return t({subcmd2:a,tagIndex:n})}async function N(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return R(s)}function S(t,n){return a(E,N,t,n)}function w(){return s('[name="subcmd2"]').value}const W=t=>d("div",t).dataset.invId
function F(){i("addRemoveTags","doCheckAll"),m('#pCC input[name="tagIndex[]"]').forEach(u)}function B(t,a){i("addRemoveTags","checkType")
const n=W(a),[,,s,e]=t.find(([,t])=>t===n)
t.filter(([,,t,a])=>t===s&&a===e).filter(([t])=>document.body.contains(t)).map(([t])=>t).forEach(u)}function M(t){const a=g({className:t.className.replace("-btn","")})
t.replaceWith(a)}function P(t,a){const n=g({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){m("button:not(.tag-bp-btn)",t).forEach(M)}(d("div",n)),n}async function _(t,a,n,e){i("addRemoveTags",t)
const o=W(e);(t=>s("input",f(t)))(e)?.remove()
const c=P(t,e);(await a(o)).s&&(c.classList.remove("fshSpinner"),l(n,c))}function q(t){return S(w(),[t])}function D(t){e(c(),o(function(t){return[["tag-all-custom",F],["tag-bp-btn",r(_,"bp",I,"Taken")],["tag-all-btn",r(B,t)],["tag-add-btn",r(_,"add",q,"Tagged")],["tag-remove-btn",r(_,"remove",q,"Removed")]]}(t)))}async function G(t,a){const n=await S(t,a.map(t=>t.value))
n.s?a.forEach(C):b(n.e.message)}function J(t){t.preventDefault(),A(25,m('[name="tagIndex[]"]:checked')).forEach(r(G,w())),i("addRemoveTags","Tag by AJAX")}const K=()=>"addtags"===T.subcmd2,L=t=>$(s("img",f(t))),Q=t=>k(f(t).cells[2]),V=(t,a)=>`<button class="${t}" type="button">${a}</button>`,X=t=>`tag-${(t=>x(t).split(" ").at(-1))(t)}-btn`,z=t=>`[${V(X(t),t)}]`,H=()=>z("Fast "+(K()?"Add":"Remove")),O=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${z("Check All")}&nbsp;`:"")(a)}${H()}&nbsp;${z("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function U([t,a,,,n]){const s=f(t).cells[2]
j(s,O(a,n))}function Y(t){return[t,t.value,L(t),Q(t)]}function Z(){const t=(a=m('input[name="tagIndex[]"]',c()).map(Y)).map(t=>[...t,a.filter(([,,a,n])=>a===t[2]&&n===t[3]).length])
var a
if(!t.length)return
const n=v("tagging_cost")
!function(t){if(!K())return
y(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
K()&&(a=f(t).insertCell(-1)),j(a,V("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(U),D(t),p(document.forms[0],"submit",J)}function tt(){v("tagging_cost")?Z():h()}export{tt as default}
//# sourceMappingURL=addRemoveTags-DuFwuBmI.js.map
