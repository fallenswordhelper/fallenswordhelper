import{g as t}from"./getMembrList-C3ieFZkr.js"
import{r as n,o as s,dI as e,aV as a,p as o,d as r,aM as i,e as l,s as c,ak as p,dJ as f,b3 as u,b8 as m,n as d,O as b,i as g,q as h,aF as j,ct as L,ac as y,dK as N,ad as k,ao as C,af as R,l as w,cz as H,d6 as M,y as S,cp as F,bc as x}from"./calfSystem-DiXGAkgN.js"
import{e as B}from"./useItem-DK7FgyRJ.js"
import{q as G}from"./queue-AS2S_3OW.js"
import{b as A}from"./batch-C8ATbTx-.js"
import{c as E}from"./closestTable-CvmnyUCu.js"
import{c as T}from"./closestTd-BfCcJtlN.js"
import{o as v}from"./onlineDot-B7LbfKGR.js"
import{p as D}from"./playerLink-DUm_mfhe.js"
import"./dialog-nv9HUVDL.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-CtjaoPXk.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-BLMraS_s.js"
import"./htmlResult-Dd8ykCD8.js"
import"./InfoBoxFrom-9BNu4fuB.js"
import"./backpackOk-BZnMIeGH.js"
import"./takeItem-D2TMkktw.js"
function I(t){return n(/&id=(?<id>\d+)/,t)}const W=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function P(t){l('<span class="fastWorn">Worn</span>',t)}function $(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):P(n))}async function _(t,s,e,a){$(a,t,await G(I(s),n(f,s),e,a))}function q(t,n,s){_(t,n,s,"recall")}const X=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),q(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),q(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===u()?(await B(I(s)),P(t)):_(t,s,0,"wear")}]]
const J=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(X.find(r(i,t))[1](n,s),l(W,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=p(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const O='<span class="sendLink fast-bp">Fast BP</span> | ',U='<span class="sendLink fast-gs">Fast GS</span>',V=' | <span class="sendLink fast-wear">Fast Wear</span>'
let z=0,K=0,Q=0,Y=0,Z=0
const tt=[[!0,!0,function(){return Y||(Y=d({innerHTML:O+U+V})),Y.cloneNode(!0)}],[!0,!1,function(){return Z||(Z=d({innerHTML:U+V})),Z.cloneNode(!0)}],[!1,!0,function(){return Q||(Q=d({innerHTML:O+U})),Q.cloneNode(!0)}],[!1,!1,function(){return K||(K=d({innerHTML:U})),K.cloneNode(!0)}]]
function nt(t,n,s){return s[0]===t&&s[1]===n}function st(t){const n=!(z||(z=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),z).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return tt.find(r(nt,n,s))[2]()}let et=null,at=[]
function ot(t,n){const s=et[n]
g(s,t)}function rt(t){at.push(st(t))}function it(){const t=E(h("#pCC table table").parentNode),n=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(n){n.classList.add("fshRelative")
const t=function(){const t=y({className:"fshBl pot-report-button",textContent:"Pot Report"})
return s(t,(()=>{c("GuildReport","Pot Report Moved"),N()})),t}(),e=j({className:"pot-report-moved",textContent:" moved to Helper Menu"})
L(e,t),g(n,e)}}function lt(){A([3,at,0,ot,it])}function ct(){o()&&(et=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],A([3,et,0,rt,lt]))}function pt(t){const n=k(t)
C.membrList?.[n]&&l(function(t){return`${v({last_login:C.membrList[t].last_login})}${D(C.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',T(t).nextElementSibling)}function ft(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
A([3,t,0,pt])}let ut=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=M(ut,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ut=R("user"),!ut)return
if(!w('#pCC table table td[bgcolor="#DAA534"] b').some(H(ut)))return
const t=b("#pCC table table tr")
A([2,t,0,dt])}function gt(){!S()&&F()&&(!async function(){await t(!1),x(3,ft)}(),x(2,bt),x(3,ct),s(a("table",o())[1],e(J)))}export{gt as default}
//# sourceMappingURL=guildReport-D5-oFM8e.js.map
