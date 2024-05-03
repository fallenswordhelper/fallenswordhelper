import{g as t}from"./getMembrList-BlkqWvC9.js"
import{r as s,o as n,d0 as e,az as a,p as o,c as r,as as i,d as l,s as c,aN as p,d1 as u,aJ as f,m,K as d,i as b,q as g,bW as h,d2 as j,a8 as k,ag as L,aa as y,k as N,b$ as R,cx as w,w as C,bQ as S,aT as H}from"./calfSystem-BtgQSp8m.js"
import{e as M}from"./useItem-CENSGYhV.js"
import{a as x}from"./queue-BfqUPfbP.js"
import{c as B}from"./closestTr-D53dAuOz.js"
import{b as G}from"./batch-CfE5wARI.js"
import{c as T}from"./createButton-YviCBxxu.js"
import{c as F}from"./createSpan-BNuEMmn6.js"
import{c as A}from"./closestTable-BvsYZrmt.js"
import{c as E}from"./closestTd-par-1GhZ.js"
import{o as v}from"./onlineDot-BQqsyz3I.js"
import{p as D}from"./playerLink-VzRo9SJ7.js"
import"./guildMembers-CFZ5CYds.js"
import"./isArray-eVldfhw1.js"
import"./now-Cx4PsKjI.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-DLI0ErjV.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-CoFmh4WB.js"
import"./guild-N285fFr-.js"
import"./htmlResult-1LmLBpMt.js"
import"./InfoBoxFrom-DV7nQoQq.js"
import"./backpack-DFK0z4Ny.js"
import"./backpackOk-CagcATOI.js"
import"./takeItem-B0vPxWzX.js"
function I(t){return s(/&id=(?<id>\d+)/,t)}const P=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function W(t){l('<span class="fastWorn">Worn</span>',t)}function $(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):W(s))}async function _(t,n,e,a){$(a,t,await x(I(n),s(u,n),e,a))}function q(t,s,n){_(t,s,n,"recall")}const J=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),q(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),q(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(u,n))===f()?(await M(I(n)),W(t)):_(t,n,0,"wear")}]]
const O=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(J.find(r(i,t))[1](s,n),l(P,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=B(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const Q='<span class="sendLink fast-bp">Fast BP</span> | ',U='<span class="sendLink fast-gs">Fast GS</span>',X=' | <span class="sendLink fast-wear">Fast Wear</span>'
let z,K,Y,Z,V
const tt=[[!0,!0,function(){return Z||(Z=m({innerHTML:Q+U+X})),Z.cloneNode(!0)}],[!0,!1,function(){return V||(V=m({innerHTML:U+X})),V.cloneNode(!0)}],[!1,!0,function(){return Y||(Y=m({innerHTML:Q+U})),Y.cloneNode(!0)}],[!1,!1,function(){return K||(K=m({innerHTML:U})),K.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(z||(z=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),z).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(r(st,s,n))[2]()}let et=null,at=[]
function ot(t,s){const n=et[s]
b(n,t)}function rt(t){at.push(nt(t))}function it(){const t=A(g("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=T({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),j()})),t}(),e=F({className:"pot-report-moved",textContent:" moved to Helper Menu"})
h(e,t),b(s,e)}}function lt(){G([3,at,0,ot,it])}function ct(){o()&&(et=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],G([3,et,0,rt,lt]))}function pt(t){const s=k(t)
L.membrList?.[s]&&l(function(t){return`${v({last_login:L.membrList[t].last_login})}${D(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',E(t).nextElementSibling)}function ut(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
G([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=w(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=y("user"),!ft)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(R(ft)))return
const t=d("#pCC table table tr")
G([2,t,0,dt])}function gt(){!C()&&S()&&(!async function(){await t(!1),H(3,ut)}(),H(2,bt),H(3,ct),n(a("table",o())[1],e(O)))}export{gt as default}
//# sourceMappingURL=guildReport-DRBBCwNE.js.map
