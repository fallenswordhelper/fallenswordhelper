import{$ as t,G as n,q as a,o as s,d1 as e,p as o,c,s as r,k as i,aA as u,a9 as m,h as d,b as f,E as l,ab as g,g as p,d4 as b,v,ag as h,aq as $,ar as j}from"./calfSystem-hszmVKJw.js"
import{c as y}from"./closestTable-9-1B-9Xo.js"
import{c as I}from"./closestTr-B6tzN2bs.js"
import{g as T}from"./guildInventory-D3zjLchZ.js"
import{t as k}from"./takeItem-Dzbechhg.js"
import{h as R}from"./htmlResult-BpC2-KeU.js"
import{c as x}from"./createSpan-CnsAZiOU.js"
import{r as A}from"./removeRow-DXylJd4c.js"
import"./guild-tb65ZdUy.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-DWSB3MVV.js"
function E(t){return T({subcmd2:"takeitem",guildstore_id:t})}async function C(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await k(t))}function w(n){return t(E,C,n)}function N(t,n){return T({subcmd2:t,tagIndex:n})}async function S(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return R(s)}function F(n,a){return t(N,S,n,a)}function _(){return a('[name="subcmd2"]').value}const q=t=>a("input",I(t)),B=t=>d("div",t).dataset.invId
function W(){r("addRemoveTags","doCheckAll"),i('#pCC input[name="tagIndex[]"]').forEach(u)}function D(t,n){r("addRemoveTags","checkType")
const a=B(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function G(t){const n=x({className:t.className.replace("-btn","")})
t.replaceWith(n)}function J(t,n){const a=x({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){i("button:not(.tag-bp-btn)",t).forEach(G)}(d("div",a)),a}async function L(t,n,a,s){r("addRemoveTags",t)
const e=B(s)
q(s)?.remove()
const o=J(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),m(a,o))}function M(t){return F(_(),[t])}function O(t){s(o(),e(function(t){return[["tag-all-custom",W],["tag-bp-btn",c(L,"bp",w,"Taken")],["tag-all-btn",c(D,t)],["tag-add-btn",c(L,"add",M,"Tagged")],["tag-remove-btn",c(L,"remove",M,"Removed")]]}(t)))}const P=()=>i('[name="tagIndex[]"]:checked')
async function V(t,n){const a=await F(t,n.map((t=>t.value)))
a.s?n.forEach(A):g(a.e.message)}function X(t){t.preventDefault(),l(25,P()).forEach(c(V,_())),r("addRemoveTags","Tag by AJAX")}const Z=()=>"addtags"===h.subcmd2,z=t=>a("img",I(t)).src.split("/").at(-1).split(".")[0],H=t=>$(I(t).cells[2]),K=(t,n)=>`<button class="${t}" type="button">${n}</button>`,Q=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,U=t=>`[${K(Q(t),t)}]`,Y=()=>U("Fast "+(Z()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${U("Check All")}&nbsp;`:"")(n)}${Y()}&nbsp;${U("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=I(t).cells[2]
v(s,tt(n,a))}function at(t){return[t,t.value,z(t),H(t)]}function st(){const t=(n=i('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!Z())return
y(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
Z()&&(n=I(t).insertCell(-1)),v(n,K("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),O(t),f(document.forms[0],"submit",X)}function et(){p("tagging_cost")?st():b()}export{et as default}
//# sourceMappingURL=addRemoveTags-5ES3-CFd.js.map
