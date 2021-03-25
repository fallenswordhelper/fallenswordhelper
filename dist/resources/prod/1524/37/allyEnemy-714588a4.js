import{t as e,U as t,a4 as n,c as i,bK as s,bL as a,y as o,a as l,m as f,i as c,bI as r,o as u,a5 as d,bM as m,z as p,B as b,C as h}from"./calfSystem-60c20ae9.js"
import{f as y}from"./formatLastActivity-68cbf55c.js"
import{g}from"./getArrayByClassName-0e6e45d9.js"
import{i as j}from"./insertElementAfterBegin-9ee6638a.js"
import{m as $}from"./myStats-6f8e6371.js"
import{o as k}from"./openQuickBuffByName-ed10d0a0.js"
import"./outputFormat-4106761e.js"
import"./insertElementBefore-656c48d5.js"
import"./getProfile-a21f618e.js"
import"./cmdExport-10c01f6a.js"
import"./indexAjaxJson-6bb34fec.js"
import"./playerName-c88ee86b.js"
import"./idb-a07bf138.js"
import"./fshOpen-3161ad53.js"
const v=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function B(e,n){return n[0](t-e)}function E(t,i){return`<a class="player-name tip-static ${function(t,n){const i=v.find(e(B,t))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(t.last_login,i)}" data-tipped="<b>${t.username}</b><br><table><tbody><tr><td>Level:</td><td>${t.level}</td></tr><tr><td>Last Activity:</td><td>${y(t.last_login)}</td></tr></tbody></table>" href="${n}${t.id}">${t.username}</a>`}function x(e){return t-e.last_login<1800}function L(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":'<span class="enemy-buff-check-on"></span>'}${E(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":'<span class="enemy-send-message guild-icon left guild-minibox-action tip-static" data-tipped="Send Message"></span>'}${i.hideGuildInfoBuff?"":'<span class="enemy-quickbuff guild-icon left guild-minibox-action tip-static" data-tipped="Quick Buff"></span>'}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade guild-icon left guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade guild-icon left guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function S(t,n){return t.filter(x).map(e(L,n)).join("")}const A=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function C(e,t,n){return 0===n(e,t)}function I(t){const n=d(t._allies,[]),s=d(t._enemies,[]);(function(t,n){return A.every(e(C,t,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=S(e,!0)),i.enableEnemyOnlineList&&(n+=S(t,!1))
const s=p("fshContactList")
b("",s),c(s,n)}(n,s)}function N(e){e.classList.toggle("enemy-buff-check-on"),e.classList.toggle("enemy-buff-check-off")}const O=[["enemy-buff-check-on",N],["enemy-buff-check-off",N],["enemy-send-message",function(e){window.openQuickMsgDialog(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quickbuff",function(e){k(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quick-buff",function(){const e=g("enemy-buff-check-on",p("fshContactList")).map((e=>h(e.nextElementSibling)))
k(e.join())}]]
function G(e){const{target:t}=e
"fshResetEnemy"!==t.id?m(O)(e):$(!0).then(I)}function R(e){const t=f({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div id="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+='<ul class="enemy-quick-buff">Quick Buff Selected</ul>'),n+="</div></div>",c(t,n),j(r,t),u(t,G),I(e)}function _(e){e&&l(3,R,[e])}function q(){o()||$(!1).then(_)}export default q
//# sourceMappingURL=allyEnemy-714588a4.js.map
