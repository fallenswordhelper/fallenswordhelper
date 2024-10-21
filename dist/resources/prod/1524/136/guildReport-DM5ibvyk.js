import{g as t}from"./getMembrList-Dhy_61iv.js"
import{r as s,o as n,d7 as e,aB as a,p as o,c as r,au as i,d as l,s as c,aP as p,d8 as u,aK as f,m,K as d,i as b,q as g,b_ as h,d9 as j,a8 as L,ag as k,aa as y,k as N,c3 as R,cE as C,w as S,bW as w,aV as H}from"./calfSystem-CUgWHLtG.js"
import{e as M}from"./useItem-BVMCFPun.js"
import{a as B}from"./queue-Df6nGehR.js"
import{c as x}from"./closestTr-DV47NliD.js"
import{b as E}from"./batch-DgzuJJDl.js"
import{c as F}from"./createButton-CMC5towu.js"
import{c as G}from"./createSpan-C6zT5DkE.js"
import{c as T}from"./closestTable-M5sbjYB3.js"
import{c as A}from"./closestTd-IOzr_DXg.js"
import{o as v}from"./onlineDot-Clfoju52.js"
import{p as D}from"./playerLink-LRy-v2SX.js"
import"./guildMembers-xW-R9y84.js"
import"./isArray-eVldfhw1.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-CTwyEHy8.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-B2V5COKS.js"
import"./guild-CuLUwg__.js"
import"./htmlResult-DtReQ2Pu.js"
import"./InfoBoxFrom-Ba18CawN.js"
import"./backpack-mnBNyiwV.js"
import"./backpackOk-CagcATOI.js"
import"./takeItem-BJea1x43.js"
function I(t){return s(/&id=(?<id>\d+)/,t)}const P=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function W(t){l('<span class="fastWorn">Worn</span>',t)}function _(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):W(s))}async function $(t,n,e,a){_(a,t,await B(I(n),s(u,n),e,a))}function q(t,s,n){$(t,s,n,"recall")}const K=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),q(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),q(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(u,n))===f()?(await M(I(n)),W(t)):$(t,n,0,"wear")}]]
const O=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(K.find(r(i,t))[1](s,n),l(P,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=x(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const Q='<span class="sendLink fast-bp">Fast BP</span> | ',X='<span class="sendLink fast-gs">Fast GS</span>',J=' | <span class="sendLink fast-wear">Fast Wear</span>'
let U=0,V=0,Y=0,Z=0,z=0
const tt=[[!0,!0,function(){return Z||(Z=m({innerHTML:Q+X+J})),Z.cloneNode(!0)}],[!0,!1,function(){return z||(z=m({innerHTML:X+J})),z.cloneNode(!0)}],[!1,!0,function(){return Y||(Y=m({innerHTML:Q+X})),Y.cloneNode(!0)}],[!1,!1,function(){return V||(V=m({innerHTML:X})),V.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(U||(U=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),U).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(r(st,s,n))[2]()}let et=null,at=[]
function ot(t,s){const n=et[s]
b(n,t)}function rt(t){at.push(nt(t))}function it(){const t=T(g("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=F({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),j()})),t}(),e=G({className:"pot-report-moved",textContent:" moved to Helper Menu"})
h(e,t),b(s,e)}}function lt(){E([3,at,0,ot,it])}function ct(){o()&&(et=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],E([3,et,0,rt,lt]))}function pt(t){const s=L(t)
k.membrList?.[s]&&l(function(t){return`${v({last_login:k.membrList[t].last_login})}${D(k.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',A(t).nextElementSibling)}function ut(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
E([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=C(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=y("user"),!ft)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(R(ft)))return
const t=d("#pCC table table tr")
E([2,t,0,dt])}function gt(){!S()&&w()&&(!async function(){await t(!1),H(3,ut)}(),H(2,bt),H(3,ct),n(a("table",o())[1],e(O)))}export{gt as default}
//# sourceMappingURL=guildReport-DM5ibvyk.js.map
