import{m as e}from"./myStats-CvMZnTQn.js"
import{c as t,bO as n,bt as i,ag as s,aw as a,av as l,w as o,aV as c,m as f,v as r,i as u,dF as d,o as m,br as p,d7 as h,g as y,d as g,s as b,a8 as $,aj as v}from"./calfSystem-Dh7h0wep.js"
import{g as S}from"./getPlayerId-CXL5hEJJ.js"
import{o as L}from"./openQuickBuffById-D8hqbsLO.js"
import{f as j}from"./formatLastActivity-DvWCcb4q.js"
import"./profile-pmmP_ThH.js"
import"./fshOpen-AuKioUPF.js"
import"./splitTime-kNw-s-eH.js"
import"./outputFormat-CxYfzxHE.js"
const B="enemy-buff-check-on",E="enemy-buff-check-off",x="enemy-send-message",k="enemy-quickbuff",w="enemy-quick-buff",O=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function I(e,t){return t[0](n()-e)}function P(e,n){return`<a class="player-name tip-static ${function(e,n){const i=O.find(t(I,e))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(e.last_login,n)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${j(e.last_login)}</td></tr></tbody></table>" href="${i}${e.id}">${e.username}</a>`}function A(e){return n()-e.last_login<1800}function C(e,t){return`<li class="player"><div class="player-row">${s.hideBuffSelected?"":`<span class="${B}"></span>`}${P(t,e)}</div><div class="guild-minibox-actions">${s.hideGuildInfoMessage?"":`<span class="${x} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${s.hideGuildInfoBuff?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return s.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return s.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${l}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,n){return e.filter(A).map(t(C,n)).join("")}const R=[(e,t)=>e.length+t.length,(e,t)=>{if(!s.enableAllyOnlineList)return t.length},e=>{if(!s.enableEnemyOnlineList)return e.length}]
function _(e){b("allyEnemy",e)}function N(e,t,n){return 0===n(e,t)}function Q(e){const n=p(e._allies,[]),i=p(e._enemies,[]);(function(e,n){return R.every(t(N,e,n))})(n,i)||function(e,t){let n=""
s.enableAllyOnlineList&&(n+=G(e,!0)),s.enableEnemyOnlineList&&(n+=G(t,!1))
const i=y("fshContactList")
g("",i),r(i,n)}(n,i)}function T(e){_("toggleBuffSelected"),e.classList.toggle(B),e.classList.toggle(E)}const D=[[B,T],[E,T],[x,function(e){_("msgPlayer"),window.openQuickMsgDialog($(e.parentNode.previousElementSibling.lastElementChild))}],[k,function(e){_("buffPlayer"),L(S(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){_("selectedBuff")
const e=v(B,y("fshContactList")).map((e=>S(e.nextElementSibling.href))).join(",")
L(e)}]]
function F(t){const{target:n}=t
"fshResetEnemy"!==n.id?h(D)(t):async function(){_("resetList"),Q(await e(!0))}()}function M(e){const t=f({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
s.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",r(t,n),u(d(),t),m(t,F),Q(e)}async function q(){if(o())return
!function(e){e&&c(3,M,[e])}(await e(!1))}export{q as default}
//# sourceMappingURL=allyEnemy-LWJCIX7K.js.map
