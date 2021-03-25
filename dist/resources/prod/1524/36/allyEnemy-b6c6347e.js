import{t as e,U as t,a4 as n,c as i,bK as s,bL as a,y as o,a as l,m as f,i as c,bI as r,o as d,a5 as u,bM as m,z as p,B as b,C as h}from"./calfSystem-e7bde0c3.js"
import{f as y}from"./formatLastActivity-75a95d55.js"
import{g}from"./getArrayByClassName-7d00a4d5.js"
import{i as j}from"./insertElementAfterBegin-9b535417.js"
import{m as $}from"./myStats-5144aded.js"
import{o as k}from"./openQuickBuffByName-e9ad8a96.js"
import"./outputFormat-01edbae6.js"
import"./insertElementBefore-42a90ba9.js"
import"./getProfile-74316bba.js"
import"./cmdExport-073f9de0.js"
import"./indexAjaxJson-9da74e49.js"
import"./playerName-523ac3f3.js"
import"./idb-47978eaa.js"
import"./fshOpen-6a6a1b65.js"
const v=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function B(e,n){return n[0](t-e)}function E(t,i){return`<a class="player-name tip-static ${function(t,n){const i=v.find(e(B,t))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(t.last_login,i)}" data-tipped="<b>${t.username}</b><br><table><tbody><tr><td>Level:</td><td>${t.level}</td></tr><tr><td>Last Activity:</td><td>${y(t.last_login)}</td></tr></tbody></table>" href="${n}${t.id}">${t.username}</a>`}function x(e){return t-e.last_login<1800}function L(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":'<span class="enemy-buff-check-on"></span>'}${E(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":'<span class="enemy-send-message guild-icon left guild-minibox-action tip-static" data-tipped="Send Message"></span>'}${i.hideGuildInfoBuff?"":'<span class="enemy-quickbuff guild-icon left guild-minibox-action tip-static" data-tipped="Quick Buff"></span>'}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade guild-icon left guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade guild-icon left guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function S(t,n){return t.filter(x).map(e(L,n)).join("")}const A=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function C(e,t,n){return 0===n(e,t)}function I(t){const n=u(t._allies,[]),s=u(t._enemies,[]);(function(t,n){return A.every(e(C,t,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=S(e,!0)),i.enableEnemyOnlineList&&(n+=S(t,!1))
const s=p("fshContactList")
b("",s),c(s,n)}(n,s)}function N(e){e.classList.toggle("enemy-buff-check-on"),e.classList.toggle("enemy-buff-check-off")}const O=[["enemy-buff-check-on",N],["enemy-buff-check-off",N],["enemy-send-message",function(e){window.openQuickMsgDialog(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quickbuff",function(e){k(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quick-buff",function(){const e=g("enemy-buff-check-on",p("fshContactList")).map((e=>h(e.nextElementSibling)))
k(e.join())}]]
function G(e){const{target:t}=e
"fshResetEnemy"!==t.id?m(O)(e):$(!0).then(I)}function R(e){const t=f({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div id="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+='<ul class="enemy-quick-buff">Quick Buff Selected</ul>'),n+="</div></div>",c(t,n),j(r,t),d(t,G),I(e)}function _(e){e&&l(3,R,[e])}function q(){o()||$(!1).then(_)}export default q
//# sourceMappingURL=allyEnemy-b6c6347e.js.map
