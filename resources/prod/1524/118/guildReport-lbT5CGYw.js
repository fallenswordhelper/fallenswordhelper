import{g as t}from"./getMembrList-C1pmDX8O.js"
import{r as s,o as n,d1 as e,az as a,p as o,c as r,as as i,d as l,s as c,aN as p,d2 as u,aJ as f,m,K as d,i as b,q as g,bV as h,d3 as j,a8 as k,ag as L,aa as y,k as N,b_ as w,cw as C,w as R,bP as S,aT as H}from"./calfSystem-hszmVKJw.js"
import{e as M}from"./useItem-WfjLlAwE.js"
import{a as B}from"./queue-DSdrafD8.js"
import{c as G}from"./closestTr-B6tzN2bs.js"
import{b as T}from"./batch-DXYI5I4-.js"
import{c as x}from"./createButton-DqqWSsC_.js"
import{c as F}from"./createSpan-CnsAZiOU.js"
import{c as A}from"./closestTable-9-1B-9Xo.js"
import{c as E}from"./closestTd-_kDGoZaB.js"
import{o as P}from"./onlineDot-Br8UW8F5.js"
import{p as v}from"./playerLink-v-cOOjJJ.js"
import"./guildMembers-lKyL-vXF.js"
import"./isArray-eVldfhw1.js"
import"./now-Cx4PsKjI.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-DyCWucsM.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-D3zjLchZ.js"
import"./guild-tb65ZdUy.js"
import"./htmlResult-BpC2-KeU.js"
import"./InfoBoxFrom-DWSB3MVV.js"
import"./backpack-DBf-i_4h.js"
import"./backpackOk-CagcATOI.js"
import"./takeItem-Dzbechhg.js"
function D(t){return s(/&id=(?<id>\d+)/,t)}const I=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function _(t){l('<span class="fastWorn">Worn</span>',t)}function W(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):_(s))}async function $(t,n,e,a){W(a,t,await B(D(n),s(u,n),e,a))}function q(t,s,n){$(t,s,n,"recall")}const J=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),q(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),q(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(u,n))===f()?(await M(D(n)),_(t)):$(t,n,0,"wear")}]]
const O=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(J.find(r(i,t))[1](s,n),l(I,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=G(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const Q='<span class="sendLink fast-bp">Fast BP</span> | ',U='<span class="sendLink fast-gs">Fast GS</span>',V=' | <span class="sendLink fast-wear">Fast Wear</span>'
let X,z,K,Y,Z
const tt=[[!0,!0,function(){return Y||(Y=m({innerHTML:Q+U+V})),Y.cloneNode(!0)}],[!0,!1,function(){return Z||(Z=m({innerHTML:U+V})),Z.cloneNode(!0)}],[!1,!0,function(){return K||(K=m({innerHTML:Q+U})),K.cloneNode(!0)}],[!1,!1,function(){return z||(z=m({innerHTML:U})),z.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(X||(X=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),X).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(r(st,s,n))[2]()}let et=null,at=[]
function ot(t,s){const n=et[s]
b(n,t)}function rt(t){at.push(nt(t))}function it(){const t=A(g("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=x({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),j()})),t}(),e=F({className:"pot-report-moved",textContent:" moved to Helper Menu"})
h(e,t),b(s,e)}}function lt(){T([3,at,0,ot,it])}function ct(){o()&&(et=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],T([3,et,0,rt,lt]))}function pt(t){const s=k(t)
L.membrList?.[s]&&l(function(t){return`${P({last_login:L.membrList[t].last_login})}${v(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',E(t).nextElementSibling)}function ut(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
T([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=C(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=y("user"),!ft)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(w(ft)))return
const t=d("#pCC table table tr")
T([2,t,0,dt])}function gt(){!R()&&S()&&(!async function(){await t(!1),H(3,ut)}(),H(2,bt),H(3,ct),n(a("table",o())[1],e(O)))}export{gt as default}
//# sourceMappingURL=guildReport-lbT5CGYw.js.map
