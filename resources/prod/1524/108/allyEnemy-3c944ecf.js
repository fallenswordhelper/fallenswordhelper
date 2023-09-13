import{m as e}from"./myStats-1ab0fda3.js"
import{c as t,bp as n,ad as i,ar as s,aq as a,w as o,aP as l,l as c,v as f,i as r,dk as u,o as d,bn as m,cV as p,g as h,s as y,n as g,a5 as b,ag as $}from"./calfSystem-34913441.js"
import{g as v}from"./getPlayerId-dc3d799c.js"
import{o as j}from"./openQuickBuffById-3914df94.js"
import{b as S}from"./now-6f22aec9.js"
import{f as L}from"./formatLastActivity-8adc5cb7.js"
import"./profile-3aa5b35b.js"
import"./idb-ec5d6344.js"
import"./fshOpen-c0e91392.js"
import"./splitTime-40eb3bf7.js"
import"./outputFormat-b1a8825f.js"
const B="enemy-buff-check-on",E="enemy-buff-check-off",k="enemy-send-message",x="enemy-quickbuff",w="enemy-quick-buff",A=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function I(e,t){return t[0](S()-e)}function O(e,i){return`<a class="player-name tip-static ${function(e,n){const i=A.find(t(I,e))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(e.last_login,i)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${L(e.last_login)}</td></tr></tbody></table>" href="${n}${e.id}">${e.username}</a>`}function P(e){return S()-e.last_login<1800}function C(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":`<span class="${B}"></span>`}${O(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${i.hideGuildInfoBuff?"":`<span class="${x} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,n){return e.filter(P).map(t(C,n)).join("")}const R=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function _(e){g("allyEnemy",e)}function M(e,t,n){return 0===n(e,t)}function N(e){const n=m(e._allies,[]),s=m(e._enemies,[]);(function(e,n){return R.every(t(M,e,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=G(e,!0)),i.enableEnemyOnlineList&&(n+=G(t,!1))
const s=h("fshContactList")
y("",s),f(s,n)}(n,s)}function Q(e){_("toggleBuffSelected"),e.classList.toggle(B),e.classList.toggle(E)}const T=[[B,Q],[E,Q],[k,function(e){_("msgPlayer"),window.openQuickMsgDialog(b(e.parentNode.previousElementSibling.lastElementChild))}],[x,function(e){_("buffPlayer"),j(v(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){_("selectedBuff")
const e=$(B,h("fshContactList")).map((e=>v(e.nextElementSibling.href))).join(",")
j(e)}]]
function q(t){const{target:n}=t
"fshResetEnemy"!==n.id?p(T)(t):async function(){_("resetList"),N(await e(!0))}()}function D(e){const t=c({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",f(t,n),r(u(),t),d(t,q),N(e)}async function F(){if(o())return
!function(e){e&&l(3,D,[e])}(await e(!1))}export{F as default}
//# sourceMappingURL=allyEnemy-3c944ecf.js.map
