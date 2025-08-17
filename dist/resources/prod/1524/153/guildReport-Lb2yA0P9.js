import{g as t}from"./getMembrList-Ctbnv9ny.js"
import{r as n,o as s,dT as a,b4 as e,p as o,c as i,aW as r,d as l,s as c,j as u,dU as f,bd as p,bi as m,u as d,ai as b,i as g,l as h,ax as j,cH as L,aq as H,h as y,cB as k,db as w,a2 as N,cr as S,bm as B}from"./calfSystem-CT1aM4VG.js"
import{e as C}from"./useItem-CEP4zgNs.js"
import{q as M}from"./queue-Dq9H5mde.js"
import{b as R}from"./batch-CVoa0La2.js"
import{c as x}from"./closestTd-CiNplHBS.js"
import{o as E}from"./onlineDot-rvpUtCt8.js"
import"./dialog-CiSCF2So.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-DHLyE8PQ.js"
import"./InfoBoxFrom-Cozeh7z2.js"
import"./backpackOk-C0Z16PYr.js"
import"./takeItem-CQgeRFJP.js"
function F(t){return n(/&id=(?<id>\d+)/,t)}const G=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function A(t){l('<span class="fastWorn">Worn</span>',t)}function T(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):A(n))}async function D(t,s,a,e){T(e,t,await M(F(s),n(f,s),a,e))}function W(t,n,s){D(t,n,s,"recall")}const I=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),W(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),W(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await C(F(s)),A(t)):D(t,s,0,"wear")}]]
const $=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(I.find(i(r,t))[1](n,s),l(G,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const _='<span class="sendLink fast-bp">Fast BP</span> | ',q='<span class="sendLink fast-gs">Fast GS</span>',P=' | <span class="sendLink fast-wear">Fast Wear</span>'
let J=0,X=0,v=0,O=0,Q=0
const U=[[!0,!0,function(){return O||(O=d({innerHTML:_+q+P})),O.cloneNode(!0)}],[!0,!1,function(){return Q||(Q=d({innerHTML:q+P})),Q.cloneNode(!0)}],[!1,!0,function(){return v||(v=d({innerHTML:_+q})),v.cloneNode(!0)}],[!1,!1,function(){return X||(X=d({innerHTML:q})),X.cloneNode(!0)}]]
function Y(t,n,s){return s[0]===t&&s[1]===n}function z(t){const n=!(J||(J=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),J).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return U.find(i(Y,n,s))[2]()}let K=null,V=[]
function Z(t,n){const s=K[n]
g(s,t)}function tt(t){V.push(z(t))}function nt(){R([3,V,0,Z])}function st(){o()&&(K=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),V=[],R([3,K,0,tt,nt]))}function at(t){const n=h(t)
j.membrList?.[n]&&l(function(t){return`${E({last_login:j.membrList[t].last_login})}${L(j.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',x(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
R([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=w(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=H("user"),!ot)return
if(!y('#pCC table table td[bgcolor="#DAA534"] b').some(k(ot)))return
const t=b("#pCC table table tr")
R([2,t,0,rt])}function ct(){!N()&&S()&&(!async function(){await t(!1),B(3,et)}(),B(2,lt),B(3,st),s(e("table",o())[1],a($)))}export{ct as default}
//# sourceMappingURL=guildReport-Lb2yA0P9.js.map
