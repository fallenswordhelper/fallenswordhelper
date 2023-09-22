import{g as t}from"./getMembrList-d2aebe41.js"
import{r as s,o as n,cT as e,au as o,p as a,c as r,an as i,s as l,n as c,aI as u,cU as p,aE as f,l as m,I as d,i as b,bO as g,cV as h,a3 as j,ab as L,cq as y,a5 as R,j as w,bT as H,cr as M,w as N,bI as S,aM as k}from"./calfSystem-4830a18d.js"
import{e as C}from"./useItem-429514b5.js"
import{a as B}from"./queue-0156e01b.js"
import{c as T}from"./closestTr-a662daf2.js"
import{b as x}from"./batch-54067b0c.js"
import{c as F}from"./createButton-30c5ecee.js"
import{c as G}from"./createSpan-0da7a190.js"
import{c as A}from"./closestTd-18fa66ff.js"
import{o as E}from"./onlineDot-64ef932a.js"
import"./guildMembers-7edbe4e6.js"
import"./isArray-09a53da7.js"
import"./now-6f22aec9.js"
import"./idb-7e56faaa.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./daUseItem-9fccc07b.js"
import"./errorDialog-9e633a62.js"
import"./guildInventory-734d12f3.js"
import"./guild-8e58b9bf.js"
import"./htmlResult-7fa1a7c5.js"
import"./InfoBoxFrom-29ddbf6c.js"
import"./backpackOk-4fcbe3d7.js"
import"./takeItem-de2d7599.js"
function I(t){return s(/&id=(?<id>\d+)/,t)}const v=`<span class="guildReportSpinner" style="background-image: url('${u}ui/misc/spinner.gif');"></span>`
function D(t){l('<span class="fastWorn">Worn</span>',t)}function P(t,s,n){1!==n.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(s):D(s))}async function W(t,n,e,o){P(o,t,await B(I(n),s(p,n),e,o))}function $(t,s,n){W(t,s,n,"recall")}const _=[["fast-bp",function(t,s){c("GuildReport","Fast BP"),$(t,s,0)}],["fast-gs",function(t,s){c("GuildReport","Fast GS"),$(t,s,1)}],["fast-wear",async function(t,n){c("GuildReport","Fast Wear"),Number(s(p,n))===f()?(await C(I(n)),D(t)):W(t,n,0,"wear")}]]
const O=[["sendLink",function(t){const s=t.parentNode.parentNode
if(!s)return
const[{href:n}]=s.children
n&&(_.find(r(i,t))[1](s,n),l(v,s))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let s=T(t).nextElementSibling
const n="fshHide"===s.className?"":"fshHide"
for(;s&&!s.children[0].hasAttribute("bgcolor");)s.className=n,s=s.nextElementSibling}]]
const q='<span class="sendLink fast-bp">Fast BP</span> | ',U='<span class="sendLink fast-gs">Fast GS</span>',X=' | <span class="sendLink fast-wear">Fast Wear</span>'
let J,Q,V,Y,z
const K=[[!0,!0,function(){return Y||(Y=m({innerHTML:q+U+X})),Y.cloneNode(!0)}],[!0,!1,function(){return z||(z=m({innerHTML:U+X})),z.cloneNode(!0)}],[!1,!0,function(){return V||(V=m({innerHTML:q+U})),V.cloneNode(!0)}],[!1,!1,function(){return Q||(Q=m({innerHTML:U})),Q.cloneNode(!0)}]]
function Z(t,s,n){return n[0]===t&&n[1]===s}function tt(t){const s=!(J||(J=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),J).test(t.previousElementSibling.innerHTML),n=2===t.children.length
return K.find(r(Z,s,n))[2]()}let st=null,nt=[]
function et(t,s){const n=st[s]
b(n,t)}function ot(t){nt.push(tt(t))}function at(){const t=a().children?.[0]?.rows?.[0]?.cells?.[0]
if(t){t.classList.add("fshRelative")
const s=function(){const t=F({className:"fshBl pot-report-button",textContent:"Pot Report"})
return n(t,(()=>{c("GuildReport","Pot Report Moved"),h()})),t}(),e=G({className:"pot-report-moved",textContent:" moved to Helper Menu"})
g(e,s),b(t,e)}}function rt(){x([3,nt,0,et,at])}function it(){a()&&(st=d("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),nt=[],x([3,st,0,ot,rt]))}function lt(t){const s=j(t)
L.membrList?.[s]&&l(function(t){return`${E({last_login:L.membrList[t].last_login})}${y(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(s),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',A(t).nextElementSibling)}function ct(){const t=d('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
x([3,t,0,lt])}let ut=0,pt=0
function ft(t){t.children[0].hasAttribute("bgcolor")&&(pt=M(ut,t.children[0].children[0])),pt||(t.className="fshHide")}function mt(){if(ut=R("user"),!ut)return
if(!w('#pCC table table td[bgcolor="#DAA534"] b').some(H(ut)))return
const t=d("#pCC table table tr")
x([2,t,0,ft])}function dt(){!N()&&S()&&(!async function(){await t(!1),k(3,ct)}(),k(2,mt),k(3,it),n(o("table",a())[1],e(O)))}export{dt as default}
//# sourceMappingURL=guildReport-56b74334.js.map
