import{t as e,U as t,a3 as n,c as i,aj as s,ai as a,y as o,a as f,m as l,i as c,bN as r,o as u,a4 as d,bP as m,z as p,B as h,C as b}from"./calfSystem-a2fd9017.js"
import{f as y}from"./formatLastActivity-3f361e8e.js"
import{g}from"./getArrayByClassName-44af3bfd.js"
import{i as j}from"./insertElementAfterBegin-0945414a.js"
import{m as $}from"./myStats-4434ecd1.js"
import{o as k}from"./openQuickBuffByName-713316ef.js"
import"./outputFormat-aad1c74c.js"
import"./insertElementBefore-165ce171.js"
import"./getProfile-bbee5de2.js"
import"./cmdExport-84fee8d4.js"
import"./indexAjaxJson-9619f1ba.js"
import"./playerName-fab1659b.js"
import"./idb-09e8fa3a.js"
import"./fshOpen-a2455e89.js"
const v=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function B(e,n){return n[0](t-e)}function E(t,i){return`<a class="player-name tip-static ${function(t,n){const i=v.find(e(B,t))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(t.last_login,i)}" data-tipped="<b>${t.username}</b><br><table><tbody><tr><td>Level:</td><td>${t.level}</td></tr><tr><td>Last Activity:</td><td>${y(t.last_login)}</td></tr></tbody></table>" href="${n}${t.id}">${t.username}</a>`}function x(e){return t-e.last_login<1800}function S(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":'<span class="enemy-buff-check-on"></span>'}${E(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":'<span class="enemy-send-message guild-icon left guild-minibox-action tip-static" data-tipped="Send Message"></span>'}${i.hideGuildInfoBuff?"":'<span class="enemy-quickbuff guild-icon left guild-minibox-action tip-static" data-tipped="Quick Buff"></span>'}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade guild-icon left guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade guild-icon left guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function L(t,n){return t.filter(x).map(e(S,n)).join("")}const A=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function C(e,t,n){return 0===n(e,t)}function N(t){const n=d(t._allies,[]),s=d(t._enemies,[]);(function(t,n){return A.every(e(C,t,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=L(e,!0)),i.enableEnemyOnlineList&&(n+=L(t,!1))
const s=p("fshContactList")
h("",s),c(s,n)}(n,s)}function O(e){e.classList.toggle("enemy-buff-check-on"),e.classList.toggle("enemy-buff-check-off")}const G=[["enemy-buff-check-on",O],["enemy-buff-check-off",O],["enemy-send-message",function(e){window.openQuickMsgDialog(b(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quickbuff",function(e){k(b(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quick-buff",function(){const e=g("enemy-buff-check-on",p("fshContactList")).map((e=>b(e.nextElementSibling)))
k(e.join())}]]
function I(e){const{target:t}=e
"fshResetEnemy"!==t.id?m(G)(e):$(!0).then(N)}function P(e){const t=l({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div id="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+='<ul class="enemy-quick-buff">Quick Buff Selected</ul>'),n+="</div></div>",c(t,n),j(r,t),u(t,I),N(e)}function R(e){e&&f(3,P,[e])}function _(){o()||$(!1).then(R)}export default _
//# sourceMappingURL=allyEnemy-9cb68120.js.map