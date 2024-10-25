import{m as e}from"./myStats-zlyqooKe.js"
import{c as t,bO as n,bt as i,ag as s,aw as a,av as l,w as o,aV as c,m as f,v as r,i as u,dF as d,o as m,br as p,d7 as h,g as y,d as g,s as b,a8 as $,aj as v}from"./calfSystem-DZGU7L1H.js"
import{g as L}from"./getPlayerId-DHEPuklA.js"
import{o as S}from"./openQuickBuffById-o3Ofe8vo.js"
import{f as j}from"./formatLastActivity-BGzaLRZq.js"
import"./profile-BoYBOZ74.js"
import"./fshOpen-AuKioUPF.js"
import"./splitTime-kNw-s-eH.js"
import"./outputFormat-CxYfzxHE.js"
const B="enemy-buff-check-on",E="enemy-buff-check-off",x="enemy-send-message",k="enemy-quickbuff",w="enemy-quick-buff",I=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function O(e,t){return t[0](n()-e)}function A(e,n){return`<a class="player-name tip-static ${function(e,n){const i=I.find(t(O,e))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(e.last_login,n)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${j(e.last_login)}</td></tr></tbody></table>" href="${i}${e.id}">${e.username}</a>`}function C(e){return n()-e.last_login<1800}function P(e,t){return`<li class="player"><div class="player-row">${s.hideBuffSelected?"":`<span class="${B}"></span>`}${A(t,e)}</div><div class="guild-minibox-actions">${s.hideGuildInfoMessage?"":`<span class="${x} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${s.hideGuildInfoBuff?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return s.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return s.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${l}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,n){return e.filter(C).map(t(P,n)).join("")}const R=[(e,t)=>e.length+t.length,(e,t)=>{if(!s.enableAllyOnlineList)return t.length},e=>{if(!s.enableEnemyOnlineList)return e.length}]
function _(e){b("allyEnemy",e)}function M(e,t,n){return 0===n(e,t)}function N(e){const n=p(e._allies,[]),i=p(e._enemies,[]);(function(e,n){return R.every(t(M,e,n))})(n,i)||function(e,t){let n=""
s.enableAllyOnlineList&&(n+=G(e,!0)),s.enableEnemyOnlineList&&(n+=G(t,!1))
const i=y("fshContactList")
g("",i),r(i,n)}(n,i)}function Q(e){_("toggleBuffSelected"),e.classList.toggle(B),e.classList.toggle(E)}const T=[[B,Q],[E,Q],[x,function(e){_("msgPlayer"),window.openQuickMsgDialog($(e.parentNode.previousElementSibling.lastElementChild))}],[k,function(e){_("buffPlayer"),S(L(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){_("selectedBuff")
const e=v(B,y("fshContactList")).map((e=>L(e.nextElementSibling.href))).join(",")
S(e)}]]
function D(t){const{target:n}=t
"fshResetEnemy"!==n.id?h(T)(t):async function(){_("resetList"),N(await e(!0))}()}function F(e){const t=f({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
s.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",r(t,n),u(d(),t),m(t,D),N(e)}async function q(){if(o())return
!function(e){e&&c(3,F,[e])}(await e(!1))}export{q as default}
//# sourceMappingURL=allyEnemy-BPvHn_z2.js.map
