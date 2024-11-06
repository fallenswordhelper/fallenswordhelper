import{g as t}from"./getMembrList-BFKamHpX.js"
import{r as s,o as n,d7 as e,aB as a,p as o,c as r,au as i,d as l,s as c,aP as p,d8 as u,aK as f,m,K as d,i as b,q as g,b_ as h,d9 as j,a8 as L,ag as y,aa as C,k,c3 as N,cE as R,w,bW as B,aV as H}from"./calfSystem-BhNMi9iJ.js"
import{e as M}from"./useItem-CVDRrc5h.js"
import{a as S}from"./queue-BWsme6Nu.js"
import{c as x}from"./closestTr-BZl8N8NR.js"
import{b as E}from"./batch-CkHJeKB_.js"
import{c as G}from"./createButton-C87MLSOc.js"
import{c as A}from"./createSpan-BVUFu3aw.js"
import{c as F}from"./closestTable-CoKDvQ84.js"
import{c as T}from"./closestTd-DVhh8GSx.js"
import{o as P}from"./onlineDot-Cm6qAKSO.js"
import{p as v}from"./playerLink-Cy0nLaUT.js"
import"./guildMembers-BLBvY8oa.js"
import"./isArray-eVldfhw1.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-ALum3aZH.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-DsgM7vDT.js"
import"./guild-ZM8GVeJm.js"
import"./htmlResult-CrTu8R1v.js"
import"./InfoBoxFrom-CZrnEVKz.js"
import"./backpackOk-BGYTi_Bi.js"
import"./takeItem-Bh0Dc2HW.js"
function D(t){return s(/&id=(?<id>\d+)/,t)}const W=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function _(t){l('<span class="fastWorn">Worn</span>',t)}function I(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):_(s))}async function $(t,n,e,a){I(a,t,await S(D(n),s(u,n),e,a))}function K(t,s,n){$(t,s,n,"recall")}const X=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),K(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),K(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(u,n))===f()?(await M(D(n)),_(t)):$(t,n,0,"wear")}]]
const q=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(X.find(r(i,t))[1](s,n),l(W,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=x(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const J='<span class="sendLink fast-bp">Fast BP</span> | ',O='<span class="sendLink fast-gs">Fast GS</span>',Q=' | <span class="sendLink fast-wear">Fast Wear</span>'
let Y=0,U=0,V=0,Z=0,z=0
const tt=[[!0,!0,function(){return Z||(Z=m({innerHTML:J+O+Q})),Z.cloneNode(!0)}],[!0,!1,function(){return z||(z=m({innerHTML:O+Q})),z.cloneNode(!0)}],[!1,!0,function(){return V||(V=m({innerHTML:J+O})),V.cloneNode(!0)}],[!1,!1,function(){return U||(U=m({innerHTML:O})),U.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(Y||(Y=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),Y).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(r(st,s,n))[2]()}let et=null,at=[]
function ot(t,s){const n=et[s]
b(n,t)}function rt(t){at.push(nt(t))}function it(){const t=F(g("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=G({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),j()})),t}(),e=A({className:"pot-report-moved",textContent:" moved to Helper Menu"})
h(e,t),b(s,e)}}function lt(){E([3,at,0,ot,it])}function ct(){o()&&(et=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],E([3,et,0,rt,lt]))}function pt(t){const s=L(t)
y.membrList?.[s]&&l(function(t){return`${P({last_login:y.membrList[t].last_login})}${v(y.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',T(t).nextElementSibling)}function ut(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
E([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=R(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=C("user"),!ft)return
if(!k('#pCC table table td[bgcolor="#DAA534"] b').some(N(ft)))return
const t=d("#pCC table table tr")
E([2,t,0,dt])}function gt(){!w()&&B()&&(!async function(){await t(!1),H(3,ut)}(),H(2,bt),H(3,ct),n(a("table",o())[1],e(q)))}export{gt as default}
//# sourceMappingURL=guildReport-CglzD1eW.js.map
