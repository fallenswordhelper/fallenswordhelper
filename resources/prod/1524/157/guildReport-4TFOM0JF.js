import{g as t}from"./getMembrList-Zu5hjTzC.js"
import{r as n,o as s,dP as a,b6 as e,p as o,c as i,aY as r,d as l,s as c,j as u,dQ as f,bi as p,bl as m,u as d,aj as b,i as g,l as h,ay as j,cO as L,ar as y,h as k,cI as w,da as H,a3 as N,aC as S,bp as C}from"./calfSystem-CQOGdqPv.js"
import{e as R}from"./useItem-BwQBRpxm.js"
import{q as B}from"./queue-BVw6sdIh.js"
import{b as E}from"./batch-ZfzqhoeD.js"
import{c as F}from"./closestTd-dvMT2u7q.js"
import{o as M}from"./onlineDot-DGI5IYJJ.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-BYIVInNx.js"
import"./InfoBoxFrom-GavcHhIs.js"
import"./backpackOk-C1H4HF1d.js"
import"./takeItem-DudDU78F.js"
function x(t){return n(/&id=(?<id>\d+)/,t)}const A=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function D(t){l('<span class="fastWorn">Worn</span>',t)}function G(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):D(n))}async function T(t,s,a,e){G(e,t,await B(x(s),n(f,s),a,e))}function I(t,n,s){T(t,n,s,"recall")}const W=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),I(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),I(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await R(x(s)),D(t)):T(t,s,0,"wear")}]]
const P=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(W.find(i(r,t))[1](n,s),l(A,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const $='<span class="sendLink fast-bp">Fast BP</span> | ',_='<span class="sendLink fast-gs">Fast GS</span>',O=' | <span class="sendLink fast-wear">Fast Wear</span>'
let q=0,J=0,Q=0,X=0,Y=0
const v=[[!0,!0,function(){return X||(X=d({innerHTML:$+_+O})),X.cloneNode(!0)}],[!0,!1,function(){return Y||(Y=d({innerHTML:_+O})),Y.cloneNode(!0)}],[!1,!0,function(){return Q||(Q=d({innerHTML:$+_})),Q.cloneNode(!0)}],[!1,!1,function(){return J||(J=d({innerHTML:_})),J.cloneNode(!0)}]]
function K(t,n,s){return s[0]===t&&s[1]===n}function z(t){const n=!(q||(q=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),q).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return v.find(i(K,n,s))[2]()}let U=null,V=[]
function Z(t,n){const s=U[n]
g(s,t)}function tt(t){V.push(z(t))}function nt(){E([3,V,0,Z])}function st(){o()&&(U=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),V=[],E([3,U,0,tt,nt]))}function at(t){const n=h(t)
j.membrList?.[n]&&l(function(t){return`${M({last_login:j.membrList[t].last_login})}${L(j.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',F(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
E([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=H(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=y("user"),!ot)return
if(!k('#pCC table table td[bgcolor="#DAA534"] b').some(w(ot)))return
const t=b("#pCC table table tr")
E([2,t,0,rt])}function ct(){!N()&&S()&&(!async function(){await t(!1),C(3,et)}(),C(2,lt),C(3,st),s(e("table",o())[1],a(P)))}export{ct as default}
//# sourceMappingURL=guildReport-4TFOM0JF.js.map
