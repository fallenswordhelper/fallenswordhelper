import{g as t}from"./getMembrList-IydSS5c4.js"
import{r as s,o as n,cR as e,au as o,p as a,c as r,an as i,d as l,s as c,aH as p,cS as u,m as f,I as m,i as d,q as b,bN as g,cT as h,a3 as j,ab as H,cp as L,a5 as y,k as R,bS as S,cq as N,w,bH as C,aL as k}from"./calfSystem-rn9Rc_nF.js"
import{e as M}from"./useItem-I0vjoV4R.js"
import{a as B}from"./queue-qMMFF_Ch.js"
import{c as x}from"./closestTr-Vv3gA4eP.js"
import{p as F}from"./playerId-b1mgATJE.js"
import{b as T}from"./batch-Xe3JA1CU.js"
import{c as A}from"./createButton-5RuoZ2dv.js"
import{c as G}from"./createSpan-Q4CQr4i_.js"
import{c as I}from"./closestTable-CpAyN3ci.js"
import{c as E}from"./closestTd-ngwzLM4s.js"
import{o as v}from"./onlineDot-uch9xx6a.js"
import"./guildMembers-q4YutUVF.js"
import"./isArray-bNviZzJA.js"
import"./now-pQzGw6vd.js"
import"./idb-1b6_RJN1.js"
import"./dialog-ewu4mmhi.js"
import"./dialogMsg-6-T2JNn4.js"
import"./daUseItem-s7ltE2Pg.js"
import"./errorDialog-UVurWbsP.js"
import"./guildInventory-QkqpB9hB.js"
import"./guild-CocqjLSv.js"
import"./htmlResult-nOFsovaK.js"
import"./InfoBoxFrom-rStBtUt6.js"
import"./backpackOk-Fmo8_yWJ.js"
import"./takeItem-j9EcOlD2.js"
function D(t){return s(/&id=(?<id>\d+)/,t)}const P=`<span class="guildReportSpinner" style="background-image: url('${p}ui/misc/spinner.gif');"></span>`
function W(t){l('<span class="fastWorn">Worn</span>',t)}function $(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):W(s))}async function _(t,n,e,o){$(o,t,await B(D(n),s(u,n),e,o))}function q(t,s,n){_(t,s,n,"recall")}const J=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),q(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),q(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(u,n))===F()?(await M(D(n)),W(t)):_(t,n,0,"wear")}]]
const Q=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(J.find(r(i,t))[1](s,n),l(P,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=x(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const U='<span class="sendLink fast-bp">Fast BP</span> | ',X='<span class="sendLink fast-gs">Fast GS</span>',O=' | <span class="sendLink fast-wear">Fast Wear</span>'
let V,Y,z,K,Z
const tt=[[!0,!0,function(){return K||(K=f({innerHTML:U+X+O})),K.cloneNode(!0)}],[!0,!1,function(){return Z||(Z=f({innerHTML:X+O})),Z.cloneNode(!0)}],[!1,!0,function(){return z||(z=f({innerHTML:U+X})),z.cloneNode(!0)}],[!1,!1,function(){return Y||(Y=f({innerHTML:X})),Y.cloneNode(!0)}]]
function st(t,s,n){return n[0]===t&&n[1]===s}function nt(t){const s=!(V||(V=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),V).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return tt.find(r(st,s,n))[2]()}let et=null,ot=[]
function at(t,s){const n=et[s]
d(n,t)}function rt(t){ot.push(nt(t))}function it(){const t=I(b("#pCC table table").parentNode),s=t.children?.[0]?.rows?.[0]?.cells?.[0]
if(s){s.classList.add("fshRelative")
const t=function(){const t=A({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),h()})),t}(),e=G({className:"pot-report-moved",textContent:" moved to Helper Menu"})
g(e,t),d(s,e)}}function lt(){T([3,ot,0,at,it])}function ct(){a()&&(et=m("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),ot=[],T([3,et,0,rt,lt]))}function pt(t){const s=j(t)
H.membrList?.[s]&&l(function(t){return`${v({last_login:H.membrList[t].last_login})}${L(H.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',E(t).nextElementSibling)}function ut(){const t=m('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
T([3,t,0,pt])}let ft=0,mt=0
function dt(t){t.children[0].hasAttribute("bgcolor")&&(mt=N(ft,t.children[0].children[0])),mt||(t.className="fshHide")}function bt(){if(ft=y("user"),!ft)return
if(!R('#pCC table table td[bgcolor="#DAA534"] b').some(S(ft)))return
const t=m("#pCC table table tr")
T([2,t,0,dt])}function gt(){!w()&&C()&&(!async function(){await t(!1),k(3,ut)}(),k(2,bt),k(3,ct),n(o("table",a())[1],e(Q)))}export{gt as default}
//# sourceMappingURL=guildReport-M8HN0yRr.js.map
