import{g as t}from"./getMembrList-B5ta0ybw.js"
import{r as n,o as s,dR as a,aW as e,p as o,e as i,aM as r,h as l,s as c,ai as u,dS as f,b3 as p,b8 as m,u as d,Q as b,i as g,aa as h,am as L,cF as j,ac as y,n as H,cy as S,d8 as k,A as w,cn as F,bc as N}from"./calfSystem-BGOTz8de.js"
import{e as R}from"./useItem-C2yp1-3p.js"
import{q as A}from"./queue-DLaL-9_3.js"
import{b as C}from"./batch-DnPGAgm3.js"
import{c as M}from"./closestTd-BESShMmR.js"
import{o as x}from"./onlineDot-K2TYhqz6.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-wAGcD4rm.js"
import"./InfoBoxFrom-BSCsEypB.js"
import"./backpackOk-BsGUVwIm.js"
import"./takeItem-BBHrSFAK.js"
function B(t){return n(/&id=(?<id>\d+)/,t)}const G=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function E(t){l('<span class="fastWorn">Worn</span>',t)}function D(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):E(n))}async function T(t,s,a,e){D(e,t,await A(B(s),n(f,s),a,e))}function W(t,n,s){T(t,n,s,"recall")}const $=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),W(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),W(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await R(B(s)),E(t)):T(t,s,0,"wear")}]]
const _=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&($.find(i(r,t))[1](n,s),l(G,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const I='<span class="sendLink fast-bp">Fast BP</span> | ',P='<span class="sendLink fast-gs">Fast GS</span>',q=' | <span class="sendLink fast-wear">Fast Wear</span>'
let Q=0,X=0,v=0,J=0,K=0
const O=[[!0,!0,function(){return J||(J=d({innerHTML:I+P+q})),J.cloneNode(!0)}],[!0,!1,function(){return K||(K=d({innerHTML:P+q})),K.cloneNode(!0)}],[!1,!0,function(){return v||(v=d({innerHTML:I+P})),v.cloneNode(!0)}],[!1,!1,function(){return X||(X=d({innerHTML:P})),X.cloneNode(!0)}]]
function Y(t,n,s){return s[0]===t&&s[1]===n}function z(t){const n=!(Q||(Q=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),Q).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return O.find(i(Y,n,s))[2]()}let U=null,V=[]
function Z(t,n){const s=U[n]
g(s,t)}function tt(t){V.push(z(t))}function nt(){C([3,V,0,Z])}function st(){o()&&(U=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),V=[],C([3,U,0,tt,nt]))}function at(t){const n=h(t)
L.membrList?.[n]&&l(function(t){return`${x({last_login:L.membrList[t].last_login})}${j(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',M(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
C([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=k(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=y("user"),!ot)return
if(!H('#pCC table table td[bgcolor="#DAA534"] b').some(S(ot)))return
const t=b("#pCC table table tr")
C([2,t,0,rt])}function ct(){!w()&&F()&&(!async function(){await t(!1),N(3,et)}(),N(2,lt),N(3,st),s(e("table",o())[1],a(_)))}export{ct as default}
//# sourceMappingURL=guildReport-By5Czsnv.js.map
