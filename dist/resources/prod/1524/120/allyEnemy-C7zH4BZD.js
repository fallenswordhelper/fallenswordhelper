import{m as e}from"./myStats-m7ki7d5o.js"
import{c as t,br as n,ag as i,au as s,at as a,w as o,aT as l,m as c,v as f,i as r,dx as u,o as d,bp as m,d0 as p,g as h,d as y,s as g,a8 as b,aj as $}from"./calfSystem-BpHkrDYD.js"
import{g as v}from"./getPlayerId-DNrfgLyz.js"
import{o as S}from"./openQuickBuffById-C4DAUFrz.js"
import{b as j}from"./now-Cx4PsKjI.js"
import{f as L}from"./formatLastActivity-C26L42FI.js"
import"./profile-Cr3-9Q7w.js"
import"./fshOpen-AuKioUPF.js"
import"./splitTime-kNw-s-eH.js"
import"./outputFormat-CxYfzxHE.js"
const x="enemy-buff-check-on",B="enemy-buff-check-off",E="enemy-send-message",k="enemy-quickbuff",w="enemy-quick-buff",A=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function I(e,t){return t[0](j()-e)}function O(e,i){return`<a class="player-name tip-static ${function(e,n){const i=A.find(t(I,e))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(e.last_login,i)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${L(e.last_login)}</td></tr></tbody></table>" href="${n}${e.id}">${e.username}</a>`}function P(e){return j()-e.last_login<1800}function C(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":`<span class="${x}"></span>`}${O(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":`<span class="${E} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${i.hideGuildInfoBuff?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,n){return e.filter(P).map(t(C,n)).join("")}const R=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function T(e){g("allyEnemy",e)}function _(e,t,n){return 0===n(e,t)}function N(e){const n=m(e._allies,[]),s=m(e._enemies,[]);(function(e,n){return R.every(t(_,e,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=G(e,!0)),i.enableEnemyOnlineList&&(n+=G(t,!1))
const s=h("fshContactList")
y("",s),f(s,n)}(n,s)}function Q(e){T("toggleBuffSelected"),e.classList.toggle(x),e.classList.toggle(B)}const D=[[x,Q],[B,Q],[E,function(e){T("msgPlayer"),window.openQuickMsgDialog(b(e.parentNode.previousElementSibling.lastElementChild))}],[k,function(e){T("buffPlayer"),S(v(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){T("selectedBuff")
const e=$(x,h("fshContactList")).map((e=>v(e.nextElementSibling.href))).join(",")
S(e)}]]
function M(t){const{target:n}=t
"fshResetEnemy"!==n.id?p(D)(t):async function(){T("resetList"),N(await e(!0))}()}function q(e){const t=c({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",f(t,n),r(u(),t),d(t,M),N(e)}async function F(){if(o())return
!function(e){e&&l(3,q,[e])}(await e(!1))}export{F as default}
//# sourceMappingURL=allyEnemy-C7zH4BZD.js.map
