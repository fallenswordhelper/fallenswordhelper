import{ds as t,$ as a,af as n,q as s,o as e,dO as o,p as c,c as r,s as i,h as m,bm as u,X as d,l,k as f,aR as g,b as p,n as b,g as v,dQ as h,a3 as $,ba as k,aT as y,ay as T,aX as j}from"./calfSystem-Cs6CSxoU.js"
import{c as R}from"./closestTable-CWRa1z_C.js"
import{d as I}from"./daGsTake-C9DNvY2Q.js"
import{h as x}from"./htmlResult-zJJ1KGba.js"
import{c as A}from"./chunk-zr9rAXvK.js"
import{r as C}from"./removeRow-DGR2Oyx6.js"
import"./takeItem-CalkzIVT.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-DFKUvyJC.js"
function E(a,n){return t({subcmd2:a,tagIndex:n})}async function w(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return x(s)}function N(t,n){return a(E,w,t,n)}function S(){return s('[name="subcmd2"]').value}const F=t=>d("div",t).dataset.invId
function X(){i("addRemoveTags","doCheckAll"),m('#pCC input[name="tagIndex[]"]').forEach(u)}function B(t,a){i("addRemoveTags","checkType")
const n=F(a),[,,s,e]=t.find(([,t])=>t===n)
t.filter(([,,t,a])=>t===s&&a===e).filter(([t])=>document.body.contains(t)).map(([t])=>t).forEach(u)}function O(t){const a=g({className:t.className.replace("-btn","")})
t.replaceWith(a)}function W(t,a){const n=g({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){m("button:not(.tag-bp-btn)",t).forEach(O)}(d("div",n)),n}async function _(t,a,n,e){i("addRemoveTags",t)
const o=F(e);(t=>s("input",f(t)))(e)?.remove()
const c=W(t,e);(await a(o)).s&&(c.classList.remove("fshSpinner"),l(n,c))}function q(t){return N(S(),[t])}function D(t){e(c(),o(function(t){return[["tag-all-custom",X],["tag-bp-btn",r(_,"bp",I,"Taken")],["tag-all-btn",r(B,t)],["tag-add-btn",r(_,"add",q,"Tagged")],["tag-remove-btn",r(_,"remove",q,"Removed")]]}(t)))}async function G(t,a){const n=await N(t,a.map(t=>t.value))
n.s?a.forEach(C):b(n.e.message)}function J(t){t.preventDefault(),A(25,m('[name="tagIndex[]"]:checked')).forEach(r(G,S())),i("addRemoveTags","Tag by AJAX")}const L=()=>"addtags"===T.subcmd2,M=t=>k(s("img",f(t))),P=t=>y(f(t).cells[2]),Q=(t,a)=>`<button class="${t}" type="button">${a}</button>`,Y=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,z=t=>`[${Q(Y(t),t)}]`,H=()=>z("Fast "+(L()?"Add":"Remove")),K=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${z("Check All")}&nbsp;`:"")(a)}${H()}&nbsp;${z("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function U([t,a,,,n]){const s=f(t).cells[2]
$(s,K(a,n))}function V(t){return[t,t.value,M(t),P(t)]}function Z(){const t=(a=m('input[name="tagIndex[]"]',c()).map(V)).map(t=>[...t,a.filter(([,,a,n])=>a===t[2]&&n===t[3]).length])
var a
if(!t.length)return
const n=v("tagging_cost")
!function(t){if(!L())return
R(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
L()&&(a=f(t).insertCell(-1)),$(a,Q("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(U),D(t),p(document.forms[0],"submit",J)}function tt(){v("tagging_cost")?Z():h()}export{tt as default}
//# sourceMappingURL=addRemoveTags-erMBLQTy.js.map
