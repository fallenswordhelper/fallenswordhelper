import{$ as t,E as n,q as a,o as s,cS as e,p as o,c,s as r,k as i,av as u,a4 as m,h as d,b as l,a6 as f,g as p,cV as g,v as b,ab as v,al as h,am as j}from"./calfSystem-VUa7wwu1.js"
import{c as $}from"./closestTable-4LPWcjBt.js"
import{c as y}from"./closestTr-MR2B7Xci.js"
import{g as k}from"./guildInventory-oaARvJ08.js"
import{t as T}from"./takeItem-DBmiMHsi.js"
import{h as I}from"./htmlResult-2SClkrBU.js"
import{c as R}from"./createSpan-3W4T-7NF.js"
import{c as x}from"./chunk-joYXv2f3.js"
import{r as E}from"./removeRow-w-f2b8NY.js"
import"./guild-K9OhcFT0.js"
import"./dialog-ewu4mmhi.js"
import"./dialogMsg-6-T2JNn4.js"
import"./InfoBoxFrom-ZDQHMQ-G.js"
function A(t){return k({subcmd2:"takeitem",guildstore_id:t})}async function C(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await T(t))}function S(n){return t(A,C,n)}function w(t,n){return k({subcmd2:t,tagIndex:n})}async function N(t,a){const s=await n({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:a})
return I(s)}function W(n,a){return t(w,N,n,a)}function F(){return a('[name="subcmd2"]').value}const _=t=>a("input",y(t)),B=t=>d("div",t).dataset.invId
function J(){r("addRemoveTags","doCheckAll"),i('#pCC input[name="tagIndex[]"]').forEach(u)}function q(t,n){r("addRemoveTags","checkType")
const a=B(n),[,,s,e]=t.find((([,t])=>t===a))
t.filter((([,,t,n])=>t===s&&n===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(u)}function D(t){const n=R({className:t.className.replace("-btn","")})
t.replaceWith(n)}function H(t,n){const a=R({className:`tag-${t} fshSpinner fshSpinner12`})
return n.replaceWith(a),function(t){i("button:not(.tag-bp-btn)",t).forEach(D)}(d("div",a)),a}async function L(t,n,a,s){r("addRemoveTags",t)
const e=B(s)
_(s)?.remove()
const o=H(t,s);(await n(e)).s&&(o.classList.remove("fshSpinner"),m(a,o))}function M(t){return W(F(),[t])}function P(t){s(o(),e(function(t){return[["tag-all-custom",J],["tag-bp-btn",c(L,"bp",S,"Taken")],["tag-all-btn",c(q,t)],["tag-add-btn",c(L,"add",M,"Tagged")],["tag-remove-btn",c(L,"remove",M,"Removed")]]}(t)))}const Q=()=>i('[name="tagIndex[]"]:checked')
async function V(t,n){const a=await W(t,n.map((t=>t.value)))
a.s?n.forEach(E):f(a.e.message)}function X(t){t.preventDefault(),x(25,Q()).forEach(c(V,F())),r("addRemoveTags","Tag by AJAX")}const z=()=>"addtags"===v.subcmd2,G=t=>a("img",y(t)).src.split("/").at(-1).split(".")[0],K=t=>h(y(t).cells[2]),O=(t,n)=>`<button class="${t}" type="button">${n}</button>`,U=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,Y=t=>`[${O(U(t),t)}]`,Z=()=>Y("Fast "+(z()?"Add":"Remove")),tt=(t,n)=>{return a=t,s=`&nbsp;${(t=>t>1?`${Y("Check All")}&nbsp;`:"")(n)}${Z()}&nbsp;${Y("Fast BP")}`,`<div class="btn-div" data-inv-id="${a}">${s}</div>`
var a,s}
function nt([t,n,,,a]){const s=y(t).cells[2]
b(s,tt(n,a))}function at(t){return[t,t.value,G(t),K(t)]}function st(){const t=(n=i('input[name="tagIndex[]"]',o()).map(at)).map((t=>[...t,n.filter((([,,n,a])=>n===t[2]&&a===t[3])).length]))
var n
if(!t.length)return
const a=p("tagging_cost")
!function(t){if(!z())return
$(t).className="add-remove-tags"}(a),function(t){let n=t.parentNode
z()&&(n=y(t).insertCell(-1)),b(n,O("tag-all-custom custombutton","Check&nbsp;All"))}(a),t.forEach(nt),P(t),l(document.forms[0],"submit",X)}function et(){p("tagging_cost")?st():g()}export{et as default}
//# sourceMappingURL=addRemoveTags-sfcijron.js.map
