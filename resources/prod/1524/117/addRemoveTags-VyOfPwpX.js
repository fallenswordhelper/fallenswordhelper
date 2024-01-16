import{$ as t,G as n,q as a,o as s,d1 as e,p as o,c,s as r,k as i,aA as u,a9 as m,h as d,b as f,E as l,ab as g,g as p,d4 as b,v,ag as h,aq as j,ar as $}from"./calfSystem-G1dN925O.js"
import{c as y}from"./closestTable-Ggcgditt.js"
import{c as T}from"./closestTr-ewZQ2axu.js"
import{g as k}from"./guildInventory-kOrOD2FZ.js"
import{t as I}from"./takeItem-ltIjN8gc.js"
import{h as E}from"./htmlResult-kLg7g2OU.js"
import{c as R}from"./createSpan-E64hPGZD.js"
import{r as x}from"./removeRow-webtcGvz.js"
import"./guild-a4pzzzAR.js"
import"./dialog-RW6TE77j.js"
import"./dialogMsg-6-T2JNn4.js"
import"./InfoBoxFrom-T4bMs0ax.js"
function A(t){return k({subcmd2:"takeitem",guildstore_id:t})}async function C(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await I(t))}function N(n){return t(A,C,n)}function w(t,n){return k({subcmd2:t,tagIndex:n})}async function S(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return E(s)}function _(n,a){return t(w,S,n,a)}function F(){return a('[name="subcmd2"]').value}const q=t=>a("input",T(t)),B=t=>d("div",t).dataset.invId
function W(){r("addRemoveTags","doCheckAll"),i('#pCC input[name="tagIndex[]"]').forEach(u)}function D(t,n){r("addRemoveTags","checkType")
const a=B(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function G(t){const n=R({className:t.className.replace("-btn","")})
t.replaceWith(n)}function H(t,n){const a=R({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){i("button:not(.tag-bp-btn)",t).forEach(G)}(d("div",a)),a}async function J(t,n,a,s){r("addRemoveTags",t)
const e=B(s)
q(s)?.remove()
const o=H(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),m(a,o))}function L(t){return _(F(),[t])}function M(t){s(o(),e(function(t){return[["tag-all-custom",W],["tag-bp-btn",c(J,"bp",N,"Taken")],["tag-all-btn",c(D,t)],["tag-add-btn",c(J,"add",L,"Tagged")],["tag-remove-btn",c(J,"remove",L,"Removed")]]}(t)))}const P=()=>i('[name="tagIndex[]"]:checked')
async function X(t,n){const a=await _(t,n.map((t=>t.value)))
a.s?n.forEach(x):g(a.e.message)}function Y(t){t.preventDefault(),l(25,P()).forEach(c(X,F())),r("addRemoveTags","Tag by AJAX")}const z=()=>"addtags"===h.subcmd2,K=t=>a("img",T(t)).src.split("/").at(-1).split(".")[0],O=t=>j(T(t).cells[2]),Q=(t,n)=>`<button class="${t}" type="button">${n}</button>`,U=t=>`tag-${(t=>$(t).split(" ").at(-1))(t)}-btn`,V=t=>`[${Q(U(t),t)}]`,Z=()=>V("Fast "+(z()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${V("Check All")}&nbsp;`:"")(n)}${Z()}&nbsp;${V("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=T(t).cells[2]
v(s,tt(n,a))}function at(t){return[t,t.value,K(t),O(t)]}function st(){const t=(n=i('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!z())return
y(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
z()&&(n=T(t).insertCell(-1)),v(n,Q("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),M(t),f(document.forms[0],"submit",Y)}function et(){p("tagging_cost")?st():b()}export{et as default}
//# sourceMappingURL=addRemoveTags-VyOfPwpX.js.map
