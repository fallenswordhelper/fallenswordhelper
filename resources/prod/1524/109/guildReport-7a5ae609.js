import{g as t}from"./getMembrList-d4c29fb5.js"
import{r as s,o as n,cV as e,aw as o,p as a,c as r,ap as i,s as l,n as c,aL as u,cK as p,aH as f,l as m,K as d,i as b,bR as g,cW as h,a5 as j,ad as L,ct as R,a7 as w,j as y,bW as H,cu as k,w as N,bL as S,aP as C}from"./calfSystem-2f15e074.js"
import{e as M}from"./useItem-3c9450a6.js"
import{a as B}from"./queue-6dcea712.js"
import{c as x}from"./closestTr-ce435b3a.js"
import{b as F}from"./batch-70cc157a.js"
import{c as G}from"./createButton-afda5474.js"
import{c as T}from"./createSpan-14f0ab30.js"
import{c as A}from"./closestTd-a4c2089f.js"
import{o as E}from"./onlineDot-5faca2a7.js"
import"./guildMembers-1ceac4c8.js"
import"./now-6f22aec9.js"
import"./idb-28aa7d4a.js"
import"./dialog-d1c54012.js"
import"./dialogMsg-7c5fba89.js"
import"./daUseItem-8fe78981.js"
import"./errorDialog-91872536.js"
import"./guildInventory-6e6e1d3b.js"
import"./guild-07edae00.js"
import"./htmlResult-27fd54be.js"
import"./InfoBoxFrom-20286709.js"
import"./backpackOk-1c7c221b.js"
import"./takeItem-197be5eb.js"
function I(t){return s(/&id=(?<id>\d+)/,t)}const P=`<span class="guildReportSpinner" style="background-image: url('${u}ui/misc/spinner.gif');"></span>`
function W(t){l('<span class="fastWorn">Worn</span>',t)}function v(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):W(s))}async function D(t,n,e,o){v(o,t,await B(I(n),s(p,n),e,o))}function $(t,s,n){D(t,s,n,"recall")}const _=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),$(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),$(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(p,n))===f()?(await M(I(n)),W(t)):D(t,n,0,"wear")}]]
const K=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(_.find(r(i,t))[1](s,n),l(P,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=x(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const O='<span class="sendLink fast-bp">Fast BP</span> | ',Q='<span class="sendLink fast-gs">Fast GS</span>',U=' | <span class="sendLink fast-wear">Fast Wear</span>'
let V,X,q,J,Y
const z=[[!0,!0,function(){return J||(J=m({innerHTML:O+Q+U})),J.cloneNode(!0)}],[!0,!1,function(){return Y||(Y=m({innerHTML:Q+U})),Y.cloneNode(!0)}],[!1,!0,function(){return q||(q=m({innerHTML:O+Q})),q.cloneNode(!0)}],[!1,!1,function(){return X||(X=m({innerHTML:Q})),X.cloneNode(!0)}]]
function Z(t,s,n){return n[0]===t&&n[1]===s}function tt(t){const s=!(V||(V=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),V).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return z.find(r(Z,s,n))[2]()}let st=null,nt=[]
function et(t,s){const n=st[s]
b(n,t)}function ot(t){nt.push(tt(t))}function at(){const t=a().children?.[0]?.rows?.[0]?.cells?.[0]
if(t){t.classList.add("fshRelative")
const s=function(){const t=G({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),h()})),t}(),e=T({className:"pot-report-moved",textContent:" moved to Helper Menu"})
g(e,s),b(t,e)}}function rt(){F([3,nt,0,et,at])}function it(){a()&&(st=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),nt=[],F([3,st,0,ot,rt]))}function lt(t){const s=j(t)
L.membrList?.[s]&&l(function(t){return`${E({last_login:L.membrList[t].last_login})}${R(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',A(t).nextElementSibling)}function ct(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
F([3,t,0,lt])}let ut=0,pt=0
function ft(t){t.children[0].hasAttribute("bgcolor")&&(pt=k(ut,t.children[0].children[0])),pt||(t.className="fshHide")}function mt(){if(ut=w("user"),!ut)return
if(!y('#pCC table table td[bgcolor="#DAA534"] b').some(H(ut)))return
const t=d("#pCC table table tr")
F([2,t,0,ft])}function dt(){!N()&&S()&&(!async function(){await t(!1),C(3,ct)}(),C(2,mt),C(3,it),n(o("table",a())[1],e(K)))}export{dt as default}
//# sourceMappingURL=guildReport-7a5ae609.js.map
