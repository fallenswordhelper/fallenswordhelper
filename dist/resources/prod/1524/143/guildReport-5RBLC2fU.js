import{g as t}from"./getMembrList-CEPzIObM.js"
import{r as n,o as s,dB as e,aS as a,p as o,c as r,aK as i,d as l,s as c,ai as p,b5 as u,dC as f,b0 as m,m as d,N as b,i as g,q as h,aD as j,cq as L,ab as y,dD as C,ac as N,am as k,ae as w,k as R,cw as H,c$ as S,x,cm as B,bb as M}from"./calfSystem-ChzN4Q-P.js"
import{e as D}from"./useItem-B3dvKtPA.js"
import{a as F}from"./queue-DBcnL3kZ.js"
import{b as G}from"./batch-CcQbYj5o.js"
import{c as A}from"./closestTable-DvVVJKGM.js"
import{c as E}from"./closestTd-DsFPKu28.js"
import{o as T}from"./onlineDot-mqfQV1WG.js"
import{p as v}from"./playerLink-BbHjs098.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-T66yKS27.js"
import"./errorDialog-B4_TjdGG.js"
import"./guildInventory-CQgC-W80.js"
import"./htmlResult-BuU0L_lS.js"
import"./InfoBoxFrom-C34rFa80.js"
import"./backpackOk-51yZhrvU.js"
import"./takeItem-DWGwsz0B.js"
function I(t){return n(/&id=(?<id>\d+)/,t)}const W=`<span class="guildReportSpinner" style="background-image: url('${u}ui/misc/spinner.gif');"></span>`
function $(t){l('<span class="fastWorn">Worn</span>',t)}function P(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):$(n))}async function _(t,s,e,a){P(a,t,await F(I(s),n(f,s),e,a))}function q(t,n,s){_(t,n,s,"recall")}const X=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),q(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),q(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===m()?(await D(I(s)),$(t)):_(t,s,0,"wear")}]]
const O=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(X.find(r(i,t))[1](n,s),l(W,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=p(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const Y='<span class="sendLink fast-bp">Fast BP</span> | ',J='<span class="sendLink fast-gs">Fast GS</span>',K=' | <span class="sendLink fast-wear">Fast Wear</span>'
let Q=0,U=0,V=0,z=0,Z=0
const tt=[[!0,!0,function(){return z||(z=d({innerHTML:Y+J+K})),z.cloneNode(!0)}],[!0,!1,function(){return Z||(Z=d({innerHTML:J+K})),Z.cloneNode(!0)}],[!1,!0,function(){return V||(V=d({innerHTML:Y+J})),V.cloneNode(!0)}],[!1,!1,function(){return U||(U=d({innerHTML:J})),U.cloneNode(!0)}]]
function nt(t,n,s){return s[0]===t&&s[1]===n}function st(t){const n=!(Q||(Q=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),Q).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return tt.find(r(nt,n,s))[2]()}let et=null,at=[]
function ot(t,n){const s=et[n]
g(s,t)}function rt(t){at.push(st(t))}function it(){const t=A(h("#pCC table table").parentNode),n=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(n){n.classList.add("fshRelative")
const t=function(){const t=y({className:"fshBl pot-report-button",textContent:"Pot Report"})
return s(t,(()=>{c("GuildReport","Pot Report Moved"),C()})),t}(),e=j({className:"pot-report-moved",textContent:" moved to Helper Menu"})
L(e,t),g(n,e)}}function lt(){G([3,at,0,ot,it])}function ct(){o()&&(et=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),at=[],G([3,et,0,rt,lt]))}function pt(t){const n=N(t)
k.membrList?.[n]&&l(function(t){return`${T({last_login:k.membrList[t].last_login})}${v(k.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',E(t).nextElementSibling)}function ut(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
G([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=S(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=w("user"),!ft)return
if(!R('#pCC table table td[bgcolor="#DAA534"] b').some(H(ft)))return
const t=b("#pCC table table tr")
G([2,t,0,dt])}function gt(){!x()&&B()&&(!async function(){await t(!1),M(3,ut)}(),M(2,bt),M(3,ct),s(a("table",o())[1],e(O)))}export{gt as default}
//# sourceMappingURL=guildReport-5RBLC2fU.js.map
