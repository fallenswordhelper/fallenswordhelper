import{g as t}from"./getMembrList-BJkT4B-E.js"
import{r as s,e as n,d7 as e,s as a,d8 as o,c as r,aI as i,b as l,au as c,aO as p,aB as u,p as f,k as m,K as d,i as b,q as g,d9 as h,b_ as j,a8 as L,ag as y,aa as C,n as k,c3 as N,cE as R,w,bW as B,aV as H}from"./calfSystem-Blt4DbaE.js"
import{e as M}from"./useItem-Dy_t3WSY.js"
import{q as S}from"./queue-K4uwTWgM.js"
import{c as x}from"./closestTr-BGA5O97h.js"
import{b as E}from"./batch-C_j5R0ng.js"
import{c as G}from"./createButton-BLPmyJcZ.js"
import{c as A}from"./createSpan-qOSQqjTl.js"
import{c as F}from"./closestTable-Ddgm5m0P.js"
import{c as T}from"./closestTd-p6KKSfdv.js"
import{o as v}from"./onlineDot-KmDOLCpD.js"
import{p as D}from"./playerLink-Wzb2L39d.js"
import"./guildMembers-B5MxM4J7.js"
import"./isArray-eVldfhw1.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-CAXQaGUX.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-6KpNnrkd.js"
import"./guild-hKlLzHll.js"
import"./htmlResult-CMCcQMTR.js"
import"./InfoBoxFrom-CMB3qrKm.js"
import"./backpackOk-CZ5Qj0IW.js"
import"./takeItem-BBaJv0gg.js"
function I(t){return s(/&id=(?<id>\d+)/,t)}const P=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function W(t){r('<span class="fastWorn">Worn</span>',t)}function _(t,s,n){1!==n.r&&("recall"===t?function(t){r('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):W(s))}async function $(t,n,e,a){_(a,t,await S(I(n),s(o,n),e,a))}function q(t,s,n){$(t,s,n,"recall")}const O=[["fast-bp",function(t,s){a("GuildReport","Fast BP"),q(t,s,0)}],["fast-gs",function(t,s){a("GuildReport","Fast GS"),q(t,s,1)}],["fast-wear",async function(t,n){a("GuildReport","Fast Wear"),Number(s(o,n))===i()?(await M(I(n)),W(t)):$(t,n,0,"wear")}]]
const X=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(O.find(l(c,t))[1](s,n),r(P,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){a("GuildReport","Collapsible")
let s=x(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const J='<span class="sendLink fast-bp">Fast BP</span> | ',K='<span class="sendLink fast-gs">Fast GS</span>',Q=' | <span class="sendLink fast-wear">Fast Wear</span>'
let Y=0,U=0,V=0,Z=0,z=0
const tt=[[!0,!0,function(){return Z||(Z=m({innerHTML:J+K+Q})),Z.cloneNode(!0)}],[!0,!1,function(){return z||(z=m({innerHTML:K+Q})),z.cloneNode(!0)}],[!1,!0,function(){return V||(V=m({innerHTML:J+K})),V.cloneNode(!0)}],[!1,!1,function(){return U||(U=m({innerHTML:K})),U.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(Y||(Y=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),Y).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(l(st,s,n))[2]()}let et=null,at=[]
function ot(t,s){const n=et[s]
b(n,t)}function rt(t){at.push(nt(t))}function it(){const t=F(g("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=G({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{a("GuildReport","Pot Report Moved"),h()})),t}(),e=A({className:"pot-report-moved",textContent:" moved to Helper Menu"})
j(e,t),b(s,e)}}function lt(){E([3,at,0,ot,it])}function ct(){f()&&(et=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],E([3,et,0,rt,lt]))}function pt(t){const s=L(t)
y.membrList?.[s]&&r(function(t){return`${v({last_login:y.membrList[t].last_login})}${D(y.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),r('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',T(t).nextElementSibling)}function ut(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
E([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=R(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=C("user"),!ft)return
if(!k('#pCC table table td[bgcolor="#DAA534"] b').some(N(ft)))return
const t=d("#pCC table table tr")
E([2,t,0,dt])}function gt(){!w()&&B()&&(!async function(){await t(!1),H(3,ut)}(),H(2,bt),H(3,ct),n(u("table",f())[1],e(X)))}export{gt as default}
//# sourceMappingURL=guildReport-BuxdcS_n.js.map
