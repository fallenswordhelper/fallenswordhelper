import{g as t}from"./getMembrList-DRRIgIBb.js"
import{r as n,o as s,dO as a,b6 as e,p as o,c as i,aY as r,d as l,s as c,k as u,dP as f,bj as p,bm as m,v as d,aj as b,i as g,m as h,ay as j,cN as L,ar as k,h as y,cI as H,d9 as N,a4 as S,aC as w,bq as C}from"./calfSystem-CIdPz3EO.js"
import{e as F}from"./useItem-Bf2Ss3q4.js"
import{q as M}from"./queue-CfxiMNXQ.js"
import{b as R}from"./batch-DSFyFccZ.js"
import{c as x}from"./closestTd-Cte_STWk.js"
import{o as B}from"./onlineDot-Cz7JrOQc.js"
import"./guildMembers-BxoIaGju.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
import"./htmlResult-CHYKQLWk.js"
import"./InfoBoxFrom-Dw2yPW9h.js"
import"./backpackOk-CKD5p1Qh.js"
import"./takeItem-BstdzG8-.js"
function G(t){return n(/&id=(?<id>\d+)/,t)}const A=`<span class="guildReportSpinner" style="background-image: url('${m}ui/misc/spinner.gif');"></span>`
function E(t){l('<span class="fastWorn">Worn</span>',t)}function D(t,n,s){1!==s.r&&("recall"===t?function(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):E(n))}async function T(t,s,a,e){D(e,t,await M(G(s),n(f,s),a,e))}function P(t,n,s){T(t,n,s,"recall")}const W=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),P(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),P(t,n,1)}],["fast-wear",async function(t,s){c("GuildReport","Fast Wear"),Number(n(f,s))===p()?(await F(G(s)),E(t)):T(t,s,0,"wear")}]]
const I=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const[{href:s}]=n.children
s&&(W.find(i(r,t))[1](n,s),l(A,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}],["fshBl",function(t){c("GuildReport","Collapsible")
let n=u(t).nextElementSibling
const s="fshHide"===n.className?"":"fshHide"
for(;n&&!n.children[0].hasAttribute("bgcolor");)n.className=s,n=n.nextElementSibling}]]
const $='<span class="sendLink fast-bp">Fast BP</span> | ',_='<span class="sendLink fast-gs">Fast GS</span>',q=' | <span class="sendLink fast-wear">Fast Wear</span>'
let v=0,O=0,Q=0,X=0,Y=0
const J=[[!0,!0,function(){return X||(X=d({innerHTML:$+_+q})),X.cloneNode(!0)}],[!0,!1,function(){return Y||(Y=d({innerHTML:_+q})),Y.cloneNode(!0)}],[!1,!0,function(){return Q||(Q=d({innerHTML:$+_})),Q.cloneNode(!0)}],[!1,!1,function(){return O||(O=d({innerHTML:_})),O.cloneNode(!0)}]]
function K(t,n,s){return s[0]===t&&s[1]===n}function z(t){const n=!(v||(v=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),v).test(t.previousElementSibling.innerHTML),s=2===t.children.length
return J.find(i(K,n,s))[2]()}let U=null,V=[]
function Z(t,n){const s=U[n]
g(s,t)}function tt(t){V.push(z(t))}function nt(){R([3,V,0,Z])}function st(){o()&&(U=b("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),V=[],R([3,U,0,tt,nt]))}function at(t){const n=h(t)
j.membrList?.[n]&&l(function(t){return`${B({last_login:j.membrList[t].last_login})}${L(j.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',x(t).nextElementSibling)}function et(){const t=b('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
R([3,t,0,at])}let ot=0,it=0
function rt(t){t.children[0].hasAttribute("bgcolor")&&(it=N(ot,t.children[0].children[0])),it||(t.className="fshHide")}function lt(){if(ot=k("user"),!ot)return
if(!y('#pCC table table td[bgcolor="#DAA534"] b').some(H(ot)))return
const t=b("#pCC table table tr")
R([2,t,0,rt])}function ct(){!S()&&w()&&(!async function(){await t(!1),C(3,et)}(),C(2,lt),C(3,st),s(e("table",o())[1],a(I)))}export{ct as default}
//# sourceMappingURL=guildReport-DN95izqb.js.map
