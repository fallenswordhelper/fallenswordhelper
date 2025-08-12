import{g as t}from"./getMembrList-B8VblWQd.js"
import{r as n,o as s,dY as a,b3 as e,p as o,c as i,aU as r,e as l,s as c,l as u,dZ as f,bc as p,bh as m,w as d,ak as b,i as g,n as h,az as L,cL as j,as as k,k as y,cF as H,de as w,a4 as N,cv as S,bl as C}from"./calfSystem-BlPuMQGT.js"
import{e as F}from"./useItem-D2iqCFRd.js"
import{q as M}from"./queue-BvxWJW7X.js"
import{b as R}from"./batch-g9WD9nW_.js"
import{c as B}from"./closestTd-BxsEDZOn.js"
import{o as x}from"./onlineDot-BCSSHLUO.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-DY3V3Ki7.js"
import"./InfoBoxFrom-BDWFjNv_.js"
import"./backpackOk-BJB9GIJY.js"
import"./takeItem-CHURKBir.js"
function A(t){return n(/&id=(?<id>\d+)/,t)}const D=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function E(t){l('<span class="fastWorn">Worn</span>',t)}function G(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):E(n))}async function T(t,s,a,e){G(e,t,await M(A(s),n(f,s),a,e))}function W(t,n,s){T(t,n,s,"recall")}const I=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),W(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),W(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await F(A(s)),E(t)):T(t,s,0,"wear")}]]
const $=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(I.find(i(r,t))[1](n,s),l(D,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const _='<span class="sendLink fast-bp">Fast BP</span> | ',v='<span class="sendLink fast-gs">Fast GS</span>',P=' | <span class="sendLink fast-wear">Fast Wear</span>'
let q=0,J=0,X=0,Y=0,z=0
const O=[[!0,!0,function(){return Y||(Y=d({innerHTML:_+v+P})),Y.cloneNode(!0)}],[!0,!1,function(){return z||(z=d({innerHTML:v+P})),z.cloneNode(!0)}],[!1,!0,function(){return X||(X=d({innerHTML:_+v})),X.cloneNode(!0)}],[!1,!1,function(){return J||(J=d({innerHTML:v})),J.cloneNode(!0)}]]
function Q(t,n,s){return s[0]===t&&s[1]===n}function U(t){const n=!(q||(q=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),q).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return O.find(i(Q,n,s))[2]()}let Z=null,K=[]
function V(t,n){const s=Z[n]
g(s,t)}function tt(t){K.push(U(t))}function nt(){R([3,K,0,V])}function st(){o()&&(Z=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),K=[],R([3,Z,0,tt,nt]))}function at(t){const n=h(t)
L.membrList?.[n]&&l(function(t){return`${x({last_login:L.membrList[t].last_login})}${j(L.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',B(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
R([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=w(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=k("user"),!ot)return
if(!y('#pCC table table td[bgcolor="#DAA534"] b').some(H(ot)))return
const t=b("#pCC table table tr")
R([2,t,0,rt])}function ct(){!N()&&S()&&(!async function(){await t(!1),C(3,et)}(),C(2,lt),C(3,st),s(e("table",o())[1],a($)))}export{ct as default}
//# sourceMappingURL=guildReport-CNBsvs2l.js.map
