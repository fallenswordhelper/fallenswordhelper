import{g as t}from"./getMembrList-DJNIR1Ub.js"
import{r as n,o as s,dZ as a,b6 as e,p as o,c as i,aY as r,e as l,s as c,l as u,d_ as f,bf as p,bk as m,w as d,ak as b,i as g,n as h,az as j,cN as k,as as L,k as H,cH as y,dg as N,a4 as w,cx as S,bo as C}from"./calfSystem-C1X5YxJZ.js"
import{e as M}from"./useItem-D6H9bhUw.js"
import{q as R}from"./queue-bSYHTvOl.js"
import{b as x}from"./batch-BNBFzvJw.js"
import{c as B}from"./closestTd-IGSqTf-c.js"
import{o as F}from"./onlineDot-D8QnVOid.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-Btqom80J.js"
import"./InfoBoxFrom-CALdsMkd.js"
import"./backpackOk-BjyGHPKD.js"
import"./takeItem-Bx0kcXjg.js"
function A(t){return n(/&id=(?<id>\d+)/,t)}const D=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function E(t){l('<span class="fastWorn">Worn</span>',t)}function G(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):E(n))}async function T(t,s,a,e){G(e,t,await R(A(s),n(f,s),a,e))}function W(t,n,s){T(t,n,s,"recall")}const _=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),W(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),W(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await M(A(s)),E(t)):T(t,s,0,"wear")}]]
const I=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(_.find(i(r,t))[1](n,s),l(D,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const $='<span class="sendLink fast-bp">Fast BP</span> | ',P='<span class="sendLink fast-gs">Fast GS</span>',q=' | <span class="sendLink fast-wear">Fast Wear</span>'
let v=0,J=0,X=0,Y=0,z=0
const O=[[!0,!0,function(){return Y||(Y=d({innerHTML:$+P+q})),Y.cloneNode(!0)}],[!0,!1,function(){return z||(z=d({innerHTML:P+q})),z.cloneNode(!0)}],[!1,!0,function(){return X||(X=d({innerHTML:$+P})),X.cloneNode(!0)}],[!1,!1,function(){return J||(J=d({innerHTML:P})),J.cloneNode(!0)}]]
function Q(t,n,s){return s[0]===t&&s[1]===n}function Z(t){const n=!(v||(v=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),v).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return O.find(i(Q,n,s))[2]()}let K=null,U=[]
function V(t,n){const s=K[n]
g(s,t)}function tt(t){U.push(Z(t))}function nt(){x([3,U,0,V])}function st(){o()&&(K=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),U=[],x([3,K,0,tt,nt]))}function at(t){const n=h(t)
j.membrList?.[n]&&l(function(t){return`${F({last_login:j.membrList[t].last_login})}${k(j.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',B(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
x([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=N(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=L("user"),!ot)return
if(!H('#pCC table table td[bgcolor="#DAA534"] b').some(y(ot)))return
const t=b("#pCC table table tr")
x([2,t,0,rt])}function ct(){!w()&&S()&&(!async function(){await t(!1),C(3,et)}(),C(2,lt),C(3,st),s(e("table",o())[1],a(I)))}export{ct as default}
//# sourceMappingURL=guildReport-BJB02Kp-.js.map
