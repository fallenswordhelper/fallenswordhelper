import{g as t}from"./getMembrList-RdVZ7n1h.js"
import{r as s,o as n,c_ as e,az as a,p as o,c as r,as as i,d as l,s as c,aN as p,c$ as u,aJ as f,m,K as d,i as b,q as g,bU as h,d0 as j,a8 as k,ag as L,aa as y,k as N,bZ as R,cv as w,w as C,bQ as S,aT as H}from"./calfSystem-CXltiP6P.js"
import{e as M}from"./useItem-Czdbq3zq.js"
import{a as B}from"./queue-CVUL41dx.js"
import{c as G}from"./closestTr-Cbv3yDwp.js"
import{b as T}from"./batch-BzKlEGTV.js"
import{c as x}from"./createButton-DgZQpWAN.js"
import{c as F}from"./createSpan-WwCihZ86.js"
import{c as A}from"./closestTable-C68YDA4-.js"
import{c as v}from"./closestTd-QaleTUQS.js"
import{o as E}from"./onlineDot-BVm1Bd3m.js"
import{p as D}from"./playerLink-mfZ4fweN.js"
import"./guildMembers-BKvHYP7M.js"
import"./isArray-eVldfhw1.js"
import"./now-Cx4PsKjI.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-CBf8HJcK.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-D5kVm8is.js"
import"./guild-DK9EkcY7.js"
import"./htmlResult-CtzQ03yD.js"
import"./InfoBoxFrom-Dg5t6Jrf.js"
import"./backpack-DoisPhha.js"
import"./backpackOk-CagcATOI.js"
import"./takeItem-DjLor9TV.js"
function I(t){return s(/&id=(?<id>\d+)/,t)}const P=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function $(t){l('<span class="fastWorn">Worn</span>',t)}function _(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):$(s))}async function W(t,n,e,a){_(a,t,await B(I(n),s(u,n),e,a))}function U(t,s,n){W(t,s,n,"recall")}const q=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),U(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),U(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(u,n))===f()?(await M(I(n)),$(t)):W(t,n,0,"wear")}]]
const J=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(q.find(r(i,t))[1](s,n),l(P,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=G(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const O='<span class="sendLink fast-bp">Fast BP</span> | ',Q='<span class="sendLink fast-gs">Fast GS</span>',X=' | <span class="sendLink fast-wear">Fast Wear</span>'
let Z,z,K,Y,V
const tt=[[!0,!0,function(){return Y||(Y=m({innerHTML:O+Q+X})),Y.cloneNode(!0)}],[!0,!1,function(){return V||(V=m({innerHTML:Q+X})),V.cloneNode(!0)}],[!1,!0,function(){return K||(K=m({innerHTML:O+Q})),K.cloneNode(!0)}],[!1,!1,function(){return z||(z=m({innerHTML:Q})),z.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(Z||(Z=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),Z).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(r(st,s,n))[2]()}let et=null,at=[]
function ot(t,s){const n=et[s]
b(n,t)}function rt(t){at.push(nt(t))}function it(){const t=A(g("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=x({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),j()})),t}(),e=F({className:"pot-report-moved",textContent:" moved to Helper Menu"})
h(e,t),b(s,e)}}function lt(){T([3,at,0,ot,it])}function ct(){o()&&(et=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],T([3,et,0,rt,lt]))}function pt(t){const s=k(t)
L.membrList?.[s]&&l(function(t){return`${E({last_login:L.membrList[t].last_login})}${D(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',v(t).nextElementSibling)}function ut(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
T([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=w(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=y("user"),!ft)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(R(ft)))return
const t=d("#pCC table table tr")
T([2,t,0,dt])}function gt(){!C()&&S()&&(!async function(){await t(!1),H(3,ut)}(),H(2,bt),H(3,ct),n(a("table",o())[1],e(J)))}export{gt as default}
//# sourceMappingURL=guildReport-CMhGPz_z.js.map
