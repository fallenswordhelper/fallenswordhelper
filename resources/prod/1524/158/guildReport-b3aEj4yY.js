import{g as t}from"./getMembrList-DhTWubx9.js"
import{r as n,o as s,dI as a,b5 as e,p as o,c as i,aX as r,d as l,s as c,j as u,dJ as f,bh as p,bk as m,u as d,ai as b,i as g,l as h,ax as j,cN as L,aq as k,h as y,cH as H,d9 as N,a3 as S,aB as w,bo as x}from"./calfSystem-CIuUjh4H.js"
import{e as B}from"./useItem-XI9x5qhd.js"
import{q as C}from"./queue-D1dz-f_k.js"
import{b as F}from"./batch-BqkctEiX.js"
import{c as R}from"./closestTd-B7y5yK0X.js"
import{o as E}from"./onlineDot-ixY_oy9C.js"
import"./dialog-DuiKsz8O.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-Cc7d59m8.js"
import"./InfoBoxFrom-BOMuQUn_.js"
import"./backpackOk-Tqyljaqd.js"
import"./takeItem-DZIoXPKq.js"
function M(t){return n(/&id=(?<id>\d+)/,t)}const A=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function G(t){l('<span class="fastWorn">Worn</span>',t)}function D(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):G(n))}async function T(t,s,a,e){D(e,t,await C(M(s),n(f,s),a,e))}function W(t,n,s){T(t,n,s,"recall")}const I=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),W(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),W(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await B(M(s)),G(t)):T(t,s,0,"wear")}]]
const P=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(I.find(i(r,t))[1](n,s),l(A,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const $='<span class="sendLink fast-bp">Fast BP</span> | ',_='<span class="sendLink fast-gs">Fast GS</span>',q=' | <span class="sendLink fast-wear">Fast Wear</span>'
let J=0,X=0,O=0,v=0,K=0
const Q=[[!0,!0,function(){return v||(v=d({innerHTML:$+_+q})),v.cloneNode(!0)}],[!0,!1,function(){return K||(K=d({innerHTML:_+q})),K.cloneNode(!0)}],[!1,!0,function(){return O||(O=d({innerHTML:$+_})),O.cloneNode(!0)}],[!1,!1,function(){return X||(X=d({innerHTML:_})),X.cloneNode(!0)}]]
function Y(t,n,s){return s[0]===t&&s[1]===n}function z(t){const n=!(J||(J=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),J).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return Q.find(i(Y,n,s))[2]()}let U=null,V=[]
function Z(t,n){const s=U[n]
g(s,t)}function tt(t){V.push(z(t))}function nt(){F([3,V,0,Z])}function st(){o()&&(U=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),V=[],F([3,U,0,tt,nt]))}function at(t){const n=h(t)
j.membrList?.[n]&&l(function(t){return`${E({last_login:j.membrList[t].last_login})}${L(j.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',R(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
F([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=N(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=k("user"),!ot)return
if(!y('#pCC table table td[bgcolor="#DAA534"] b').some(H(ot)))return
const t=b("#pCC table table tr")
F([2,t,0,rt])}function ct(){!S()&&w()&&(!async function(){await t(!1),x(3,et)}(),x(2,lt),x(3,st),s(e("table",o())[1],a(P)))}export{ct as default}
//# sourceMappingURL=guildReport-b3aEj4yY.js.map
