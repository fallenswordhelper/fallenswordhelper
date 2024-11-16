import{$ as t,G as a,q as n,e as s,d7 as e,s as o,n as c,aP as r,b as i,h as u,a9 as m,p as d,o as l,E as f,ae as g,g as p,as as b,ag as v,v as h,at as j,da as $}from"./calfSystem-Blt4DbaE.js"
import{c as y}from"./closestTable-Ddgm5m0P.js"
import{c as T}from"./closestTr-BGA5O97h.js"
import{g as I}from"./guildInventory-6KpNnrkd.js"
import{t as k}from"./takeItem-BBaJv0gg.js"
import{h as R}from"./htmlResult-CMCcQMTR.js"
import{c as x}from"./createSpan-qOSQqjTl.js"
import{r as C}from"./removeRow-fZEFolwL.js"
import"./guild-hKlLzHll.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./InfoBoxFrom-CMB3qrKm.js"
function E(t){return I({subcmd2:"takeitem",guildstore_id:t})}async function A(t){return function(t){return 0===t.r?{s:!0}:{e:{message:t.m},s:!1}}(await k(t))}function w(a){return t(E,A,a)}function N(t,a){return I({subcmd2:t,tagIndex:a})}async function S(t,n){const s=await a({cmd:"guild",subcmd:"inventory",subcmd2:t,tagIndex:n})
return R(s)}function _(a,n){return t(N,S,a,n)}function F(){return n('[name="subcmd2"]').value}const X=t=>n("input",T(t)),B=t=>u("div",t).dataset.invId
function G(){o("addRemoveTags","doCheckAll"),c('#pCC input[name="tagIndex[]"]').forEach(r)}function P(t,a){o("addRemoveTags","checkType")
const n=B(a),[,,s,e]=t.find((([,t])=>t===n))
t.filter((([,,t,a])=>t===s&&a===e)).filter((([t])=>document.body.contains(t))).map((([t])=>t)).forEach(r)}function W(t){const a=x({className:t.className.replace("-btn","")})
t.replaceWith(a)}function q(t,a){const n=x({className:`tag-${t} fshSpinner fshSpinner12`})
return a.replaceWith(n),function(t){c("button:not(.tag-bp-btn)",t).forEach(W)}(u("div",n)),n}async function D(t,a,n,s){o("addRemoveTags",t)
const e=B(s)
X(s)?.remove()
const c=q(t,s);(await a(e)).s&&(c.classList.remove("fshSpinner"),m(n,c))}function J(t){return _(F(),[t])}function K(t){s(d(),e(function(t){return[["tag-all-custom",G],["tag-bp-btn",i(D,"bp",w,"Taken")],["tag-all-btn",i(P,t)],["tag-add-btn",i(D,"add",J,"Tagged")],["tag-remove-btn",i(D,"remove",J,"Removed")]]}(t)))}const L=()=>c('[name="tagIndex[]"]:checked')
async function M(t,a){const n=await _(t,a.map((t=>t.value)))
n.s?a.forEach(C):g(n.e.message)}function Q(t){t.preventDefault(),f(25,L()).forEach(i(M,F())),o("addRemoveTags","Tag by AJAX")}const Z=()=>"addtags"===v.subcmd2,z=t=>n("img",T(t)).src.split("/").at(-1).split(".")[0],H=t=>b(T(t).cells[2]),O=(t,a)=>`<button class="${t}" type="button">${a}</button>`,U=t=>`tag-${(t=>j(t).split(" ").at(-1))(t)}-btn`,V=t=>`[${O(U(t),t)}]`,Y=()=>V("Fast "+(Z()?"Add":"Remove")),tt=(t,a)=>{return n=t,s=`&nbsp;${(t=>t>1?`${V("Check All")}&nbsp;`:"")(a)}${Y()}&nbsp;${V("Fast BP")}`,`<div class="btn-div" data-inv-id="${n}">${s}</div>`
var n,s}
function at([t,a,,,n]){const s=T(t).cells[2]
h(s,tt(a,n))}function nt(t){return[t,t.value,z(t),H(t)]}function st(){const t=(a=c('input[name="tagIndex[]"]',d()).map(nt)).map((t=>[...t,a.filter((([,,a,n])=>a===t[2]&&n===t[3])).length]))
var a
if(!t.length)return
const n=p("tagging_cost")
!function(t){if(!Z())return
y(t).className="add-remove-tags"}(n),function(t){let a=t.parentNode
Z()&&(a=T(t).insertCell(-1)),h(a,O("tag-all-custom custombutton","Check&nbsp;All"))}(n),t.forEach(at),K(t),l(document.forms[0],"submit",Q)}function et(){p("tagging_cost")?st():$()}export{et as default}
//# sourceMappingURL=addRemoveTags-CduZ368w.js.map
