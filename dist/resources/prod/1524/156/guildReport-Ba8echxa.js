import{g as t}from"./getMembrList-ClmDoIN3.js"
import{r as n,o as s,dN as a,b5 as e,p as o,c as i,aX as r,d as l,s as c,j as u,dO as f,be as p,bj as m,u as d,aj as b,i as g,l as h,ay as j,cK as y,ar as L,h as k,cE as H,d6 as N,a3 as S,cu as w,bn as B}from"./calfSystem-79LsojAC.js"
import{e as C}from"./useItem-BLNRjwtu.js"
import{q as E}from"./queue-Ci1ii7TB.js"
import{b as F}from"./batch-BGPP456i.js"
import{c as R}from"./closestTd-Cb8gpQCm.js"
import{o as M}from"./onlineDot-XDIE_fQc.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-VfRQZiiv.js"
import"./InfoBoxFrom-Du-lP_up.js"
import"./backpackOk-C2rkhfXB.js"
import"./takeItem-wb0j2Een.js"
function x(t){return n(/&id=(?<id>\d+)/,t)}const A=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function D(t){l('<span class="fastWorn">Worn</span>',t)}function G(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):D(n))}async function T(t,s,a,e){G(e,t,await E(x(s),n(f,s),a,e))}function W(t,n,s){T(t,n,s,"recall")}const I=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),W(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),W(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await C(x(s)),D(t)):T(t,s,0,"wear")}]]
const $=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(I.find(i(r,t))[1](n,s),l(A,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const _='<span class="sendLink fast-bp">Fast BP</span> | ',P='<span class="sendLink fast-gs">Fast GS</span>',X=' | <span class="sendLink fast-wear">Fast Wear</span>'
let q=0,J=0,O=0,v=0,K=0
const Q=[[!0,!0,function(){return v||(v=d({innerHTML:_+P+X})),v.cloneNode(!0)}],[!0,!1,function(){return K||(K=d({innerHTML:P+X})),K.cloneNode(!0)}],[!1,!0,function(){return O||(O=d({innerHTML:_+P})),O.cloneNode(!0)}],[!1,!1,function(){return J||(J=d({innerHTML:P})),J.cloneNode(!0)}]]
function Y(t,n,s){return s[0]===t&&s[1]===n}function z(t){const n=!(q||(q=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),q).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return Q.find(i(Y,n,s))[2]()}let U=null,V=[]
function Z(t,n){const s=U[n]
g(s,t)}function tt(t){V.push(z(t))}function nt(){F([3,V,0,Z])}function st(){o()&&(U=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),V=[],F([3,U,0,tt,nt]))}function at(t){const n=h(t)
j.membrList?.[n]&&l(function(t){return`${M({last_login:j.membrList[t].last_login})}${y(j.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',R(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
F([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=N(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=L("user"),!ot)return
if(!k('#pCC table table td[bgcolor="#DAA534"] b').some(H(ot)))return
const t=b("#pCC table table tr")
F([2,t,0,rt])}function ct(){!S()&&w()&&(!async function(){await t(!1),B(3,et)}(),B(2,lt),B(3,st),s(e("table",o())[1],a($)))}export{ct as default}
//# sourceMappingURL=guildReport-Ba8echxa.js.map
