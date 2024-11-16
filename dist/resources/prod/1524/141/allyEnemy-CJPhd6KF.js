import{m as e}from"./myStats-CJTu9lO4.js"
import{bO as t,b as n,ag as i,bt as s,aw as a,av as l,w as o,aV as c,k as f,v as r,i as u,dF as d,e as m,s as p,br as h,g as y,c as g,d7 as b,a8 as $,aj as v}from"./calfSystem-Blt4DbaE.js"
import{g as L}from"./getPlayerId-Ck17Fcst.js"
import{o as S}from"./openQuickBuffById-AG7prqnJ.js"
import{f as j}from"./formatLastActivity-DomOheV5.js"
import"./profile-BPaCJRNe.js"
import"./fshOpen-AuKioUPF.js"
import"./splitTime-kNw-s-eH.js"
import"./outputFormat-CxYfzxHE.js"
const B="enemy-buff-check-on",E="enemy-buff-check-off",k="enemy-send-message",x="enemy-quickbuff",w="enemy-quick-buff",I=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function O(e,n){return n[0](t()-e)}function A(e,t){return`<a class="player-name tip-static ${function(e,t){const i=I.find(n(O,e))
return i?function(e,t){return e?t[1]:t[2]}(t,i):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${j(e.last_login)}</td></tr></tbody></table>" href="${s}${e.id}">${e.username}</a>`}function C(e){return t()-e.last_login<1800}function P(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":`<span class="${B}"></span>`}${A(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${i.hideGuildInfoBuff?"":`<span class="${x} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${l}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,t){return e.filter(C).map(n(P,t)).join("")}const R=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function _(e){p("allyEnemy",e)}function M(e,t,n){return 0===n(e,t)}function N(e){const t=h(e._allies,[]),s=h(e._enemies,[]);(function(e,t){return R.every(n(M,e,t))})(t,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=G(e,!0)),i.enableEnemyOnlineList&&(n+=G(t,!1))
const s=y("fshContactList")
g("",s),r(s,n)}(t,s)}function Q(e){_("toggleBuffSelected"),e.classList.toggle(B),e.classList.toggle(E)}const T=[[B,Q],[E,Q],[k,function(e){_("msgPlayer"),window.openQuickMsgDialog($(e.parentNode.previousElementSibling.lastElementChild))}],[x,function(e){_("buffPlayer"),S(L(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){_("selectedBuff")
const e=v(B,y("fshContactList")).map((e=>L(e.nextElementSibling.href))).join(",")
S(e)}]]
function D(t){const{target:n}=t
"fshResetEnemy"!==n.id?b(T)(t):async function(){_("resetList"),N(await e(!0))}()}function F(e){const t=f({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",r(t,n),u(d(),t),m(t,D),N(e)}async function q(){if(o())return
!function(e){e&&c(3,F,[e])}(await e(!1))}export{q as default}
//# sourceMappingURL=allyEnemy-CJPhd6KF.js.map
