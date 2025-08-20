import{g as t}from"./getMembrList-BDWCwZT8.js"
import{r as n,o as s,dU as a,b4 as e,p as o,c as i,aW as r,d as l,s as c,j as u,dV as f,bd as p,bi as m,u as d,ai as b,i as g,l as h,ax as j,cJ as L,aq as y,h as k,cD as H,dc as N,a2 as S,ct as w,bm as x}from"./calfSystem-UyQ_FKFu.js"
import{e as C}from"./useItem-DxRiNkQy.js"
import{q as F}from"./queue-B8Mbl3u0.js"
import{b as R}from"./batch-Ck9KyLhG.js"
import{c as B}from"./closestTd-BatBmXR3.js"
import{o as D}from"./onlineDot-xSbq-_XS.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-C3r5PHKK.js"
import"./InfoBoxFrom-B2WmDuDa.js"
import"./backpackOk-CPMw1ST_.js"
import"./takeItem-DjmeaFjX.js"
function M(t){return n(/&id=(?<id>\d+)/,t)}const A=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function E(t){l('<span class="fastWorn">Worn</span>',t)}function G(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):E(n))}async function T(t,s,a,e){G(e,t,await F(M(s),n(f,s),a,e))}function W(t,n,s){T(t,n,s,"recall")}const I=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),W(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),W(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await C(M(s)),E(t)):T(t,s,0,"wear")}]]
const $=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(I.find(i(r,t))[1](n,s),l(A,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const _='<span class="sendLink fast-bp">Fast BP</span> | ',q='<span class="sendLink fast-gs">Fast GS</span>',J=' | <span class="sendLink fast-wear">Fast Wear</span>'
let P=0,O=0,X=0,v=0,K=0
const Q=[[!0,!0,function(){return v||(v=d({innerHTML:_+q+J})),v.cloneNode(!0)}],[!0,!1,function(){return K||(K=d({innerHTML:q+J})),K.cloneNode(!0)}],[!1,!0,function(){return X||(X=d({innerHTML:_+q})),X.cloneNode(!0)}],[!1,!1,function(){return O||(O=d({innerHTML:q})),O.cloneNode(!0)}]]
function U(t,n,s){return s[0]===t&&s[1]===n}function V(t){const n=!(P||(P=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),P).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return Q.find(i(U,n,s))[2]()}let Y=null,z=[]
function Z(t,n){const s=Y[n]
g(s,t)}function tt(t){z.push(V(t))}function nt(){R([3,z,0,Z])}function st(){o()&&(Y=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),z=[],R([3,Y,0,tt,nt]))}function at(t){const n=h(t)
j.membrList?.[n]&&l(function(t){return`${D({last_login:j.membrList[t].last_login})}${L(j.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',B(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
R([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=N(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=y("user"),!ot)return
if(!k('#pCC table table td[bgcolor="#DAA534"] b').some(H(ot)))return
const t=b("#pCC table table tr")
R([2,t,0,rt])}function ct(){!S()&&w()&&(!async function(){await t(!1),x(3,et)}(),x(2,lt),x(3,st),s(e("table",o())[1],a($)))}export{ct as default}
//# sourceMappingURL=guildReport-zFpA4yDa.js.map
