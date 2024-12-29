import{$ as t,J as n,q as a,o as s,dB as e,p as o,c,s as r,k as i,b4 as u,ad as m,ai as d,h as f,aD as l,b as g,G as p,af as b,g as v,dE as h,w as $,am as y,aF as j,aJ as k}from"./calfSystem-ChzN4Q-P.js"
import{c as I}from"./closestTable-DvVVJKGM.js"
import{g as T}from"./guildInventory-CQgC-W80.js"
import{t as R}from"./takeItem-DWGwsz0B.js"
import{h as w}from"./htmlResult-BuU0L_lS.js"
import{r as x}from"./removeRow-PLa4t2mP.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-C34rFa80.js"
function E(t){return T({subcmd2:"takeitem",guildstore_id:t})}async function A(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await R(t))}function C(n){return t(E,A,n)}function N(t,n){return T({subcmd2:t,tagIndex:n})}async function F(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return w(s)}function S(n,a){return t(N,F,n,a)}function B(){return a('[name="subcmd2"]').value}const J=t=>a("input",d(t)),W=t=>f("div",t).dataset.invId
function _(){r("addRemoveTags","doCheckAll"),i('#pCC input[name="tagIndex[]"]').forEach(u)}function D(t,n){r("addRemoveTags","checkType")
const a=W(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function q(t){const n=l({className:t.className.replace("-btn","")})
t.replaceWith(n)}function G(t,n){const a=l({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){i("button:not(.tag-bp-btn)",t).forEach(q)}(f("div",a)),a}async function L(t,n,a,s){r("addRemoveTags",t)
const e=W(s)
J(s)?.remove()
const o=G(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),m(a,o))}function M(t){return S(B(),[t])}function P(t){s(o(),e(function(t){return[["tag-all-custom",_],["tag-bp-btn",c(L,"bp",C,"Taken")],["tag-all-btn",c(D,t)],["tag-add-btn",c(L,"add",M,"Tagged")],["tag-remove-btn",c(L,"remove",M,"Removed")]]}(t)))}const X=()=>i('[name="tagIndex[]"]:checked')
async function z(t,n){const a=await S(t,n.map((t=>t.value)))
a.s?n.forEach(x):b(a.e.message)}function H(t){t.preventDefault(),p(25,X()).forEach(c(z,B())),r("addRemoveTags","Tag by AJAX")}const K=()=>"addtags"===y.subcmd2,O=t=>a("img",d(t)).src.split("/").at(-1).split(".")[0],Q=t=>j(d(t).cells[2]),U=(t,n)=>`<button class="${t}" type="button">${n}</button>`,V=t=>`tag-${(t=>k(t).split(" ").at(-1))(t)}-btn`,Y=t=>`[${U(V(t),t)}]`,Z=()=>Y("Fast "+(K()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${Y("Check All")}&nbsp;`:"")(n)}${Z()}&nbsp;${Y("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=d(t).cells[2]
$(s,tt(n,a))}function at(t){return[t,t.value,O(t),Q(t)]}function st(){const t=(n=i('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=v("tagging_cost")
!function(t){if(!K())return
I(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
K()&&(n=d(t).insertCell(-1)),$(n,U("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),P(t),g(document.forms[0],"submit",H)}function et(){v("tagging_cost")?st():h()}export{et as default}
//# sourceMappingURL=addRemoveTags-BnwYt5jC.js.map
