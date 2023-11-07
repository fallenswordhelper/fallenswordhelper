import{m as e}from"./myStats-8fU-XIMi.js"
import{c as t,bj as n,ab as i,ap as s,ao as a,w as o,aL as l,m as c,v as f,i as r,di as u,o as d,bh as m,cS as p,g as h,d as y,s as g,a3 as b,ae as $}from"./calfSystem-VUa7wwu1.js"
import{g as v}from"./getPlayerId-xJ0j4Os1.js"
import{o as j}from"./openQuickBuffById-XivPrE3T.js"
import{b as S}from"./now-pQzGw6vd.js"
import{f as L}from"./formatLastActivity-rvlVTtBM.js"
import"./profile-vhoHWGzK.js"
import"./idb-gpu32B-C.js"
import"./fshOpen-16hNCxKt.js"
import"./splitTime-CKaI1q-O.js"
import"./outputFormat-C_39aHaY.js"
const B="enemy-buff-check-on",E="enemy-buff-check-off",k="enemy-send-message",x="enemy-quickbuff",w="enemy-quick-buff",C=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function I(e,t){return t[0](S()-e)}function O(e,i){return`<a class="player-name tip-static ${function(e,n){const i=C.find(t(I,e))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(e.last_login,i)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${L(e.last_login)}</td></tr></tbody></table>" href="${n}${e.id}">${e.username}</a>`}function A(e){return S()-e.last_login<1800}function P(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":`<span class="${B}"></span>`}${O(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${i.hideGuildInfoBuff?"":`<span class="${x} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,n){return e.filter(A).map(t(P,n)).join("")}const R=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function _(e){g("allyEnemy",e)}function M(e,t,n){return 0===n(e,t)}function N(e){const n=m(e._allies,[]),s=m(e._enemies,[]);(function(e,n){return R.every(t(M,e,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=G(e,!0)),i.enableEnemyOnlineList&&(n+=G(t,!1))
const s=h("fshContactList")
y("",s),f(s,n)}(n,s)}function Q(e){_("toggleBuffSelected"),e.classList.toggle(B),e.classList.toggle(E)}const T=[[B,Q],[E,Q],[k,function(e){_("msgPlayer"),window.openQuickMsgDialog(b(e.parentNode.previousElementSibling.lastElementChild))}],[x,function(e){_("buffPlayer"),j(v(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){_("selectedBuff")
const e=$(B,h("fshContactList")).map((e=>v(e.nextElementSibling.href))).join(",")
j(e)}]]
function D(t){const{target:n}=t
"fshResetEnemy"!==n.id?p(T)(t):async function(){_("resetList"),N(await e(!0))}()}function q(e){const t=c({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",f(t,n),r(u(),t),d(t,D),N(e)}async function F(){if(o())return
!function(e){e&&l(3,q,[e])}(await e(!1))}export{F as default}
//# sourceMappingURL=allyEnemy-rJlewyUR.js.map
