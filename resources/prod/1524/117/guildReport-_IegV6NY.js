import{g as t}from"./getMembrList-AgfQvkLG.js"
import{r as s,o as n,d1 as e,az as a,p as o,c as r,as as i,d as l,s as c,aN as p,d2 as u,aJ as f,m,K as d,i as b,q as g,bV as h,d3 as j,a8 as L,ag as y,aa as N,k as w,b_ as R,cw as k,w as C,bP as H,aT as S}from"./calfSystem-G1dN925O.js"
import{e as M}from"./useItem-iOIoCAnH.js"
import{a as B}from"./queue-D75-WXbH.js"
import{c as F}from"./closestTr-ewZQ2axu.js"
import{b as T}from"./batch-0zyYgCi-.js"
import{c as x}from"./createButton-LCF-b91n.js"
import{c as A}from"./createSpan-E64hPGZD.js"
import{c as E}from"./closestTable-Ggcgditt.js"
import{c as G}from"./closestTd-YTRUJWIn.js"
import{o as P}from"./onlineDot-BePpx2CP.js"
import{p as v}from"./playerLink-5A3I_32p.js"
import"./guildMembers-4GuRAnc8.js"
import"./isArray-bNviZzJA.js"
import"./now-pQzGw6vd.js"
import"./dialog-RW6TE77j.js"
import"./dialogMsg-6-T2JNn4.js"
import"./daUseItem-swRkhdvl.js"
import"./errorDialog-UVurWbsP.js"
import"./guildInventory-kOrOD2FZ.js"
import"./guild-a4pzzzAR.js"
import"./htmlResult-kLg7g2OU.js"
import"./InfoBoxFrom-T4bMs0ax.js"
import"./backpackOk-yvfjNGgY.js"
import"./takeItem-ltIjN8gc.js"
function D(t){return s(/&id=(?<id>\d+)/,t)}const _=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function I(t){l('<span class="fastWorn">Worn</span>',t)}function W(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):I(s))}async function $(t,n,e,a){W(a,t,await B(D(n),s(u,n),e,a))}function q(t,s,n){$(t,s,n,"recall")}const J=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),q(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),q(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(u,n))===f()?(await M(D(n)),I(t)):$(t,n,0,"wear")}]]
const O=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(J.find(r(i,t))[1](s,n),l(_,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=F(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const X='<span class="sendLink fast-bp">Fast BP</span> | ',Y='<span class="sendLink fast-gs">Fast GS</span>',z=' | <span class="sendLink fast-wear">Fast Wear</span>'
let K,Q,U,V,Z
const tt=[[!0,!0,function(){return V||(V=m({innerHTML:X+Y+z})),V.cloneNode(!0)}],[!0,!1,function(){return Z||(Z=m({innerHTML:Y+z})),Z.cloneNode(!0)}],[!1,!0,function(){return U||(U=m({innerHTML:X+Y})),U.cloneNode(!0)}],[!1,!1,function(){return Q||(Q=m({innerHTML:Y})),Q.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(K||(K=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),K).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(r(st,s,n))[2]()}let et=null,at=[]
function ot(t,s){const n=et[s]
b(n,t)}function rt(t){at.push(nt(t))}function it(){const t=E(g("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=x({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),j()})),t}(),e=A({className:"pot-report-moved",textContent:" moved to Helper Menu"})
h(e,t),b(s,e)}}function lt(){T([3,at,0,ot,it])}function ct(){o()&&(et=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],T([3,et,0,rt,lt]))}function pt(t){const s=L(t)
y.membrList?.[s]&&l(function(t){return`${P({last_login:y.membrList[t].last_login})}${v(y.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',G(t).nextElementSibling)}function ut(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
T([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=k(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=N("user"),!ft)return
if(!w('#pCC table table td[bgcolor="#DAA534"] b').some(R(ft)))return
const t=d("#pCC table table tr")
T([2,t,0,dt])}function gt(){!C()&&H()&&(!async function(){await t(!1),S(3,ut)}(),S(2,bt),S(3,ct),n(a("table",o())[1],e(O)))}export{gt as default}
//# sourceMappingURL=guildReport-_IegV6NY.js.map
