import{t as e,V as t,a5 as n,c as i,bN as s,bO as a,y as o,a as l,m as f,i as c,bL as r,o as u,a6 as d,bP as m,z as p,B as b,C as h}from"./calfSystem-c464cb1d.js"
import{f as y}from"./formatLastActivity-65c56bb4.js"
import{g}from"./getArrayByClassName-fe0fed4e.js"
import{i as j}from"./insertElementAfterBegin-1e95816f.js"
import{m as $}from"./myStats-259eca05.js"
import{o as k}from"./openQuickBuffByName-3ae950c8.js"
import"./outputFormat-ec830642.js"
import"./splitTime-477b58d3.js"
import"./insertElementBefore-6e80e0ff.js"
import"./getProfile-757b7e26.js"
import"./cmdExport-5edaf067.js"
import"./indexAjaxJson-9476707b.js"
import"./playerName-c64906b6.js"
import"./idb-870991e0.js"
import"./fshOpen-9656868c.js"
const v=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function B(e,n){return n[0](t-e)}function E(t,i){return`<a class="player-name tip-static ${function(t,n){const i=v.find(e(B,t))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(t.last_login,i)}" data-tipped="<b>${t.username}</b><br><table><tbody><tr><td>Level:</td><td>${t.level}</td></tr><tr><td>Last Activity:</td><td>${y(t.last_login)}</td></tr></tbody></table>" href="${n}${t.id}">${t.username}</a>`}function x(e){return t-e.last_login<1800}function L(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":'<span class="enemy-buff-check-on"></span>'}${E(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":'<span class="enemy-send-message guild-icon left guild-minibox-action tip-static" data-tipped="Send Message"></span>'}${i.hideGuildInfoBuff?"":'<span class="enemy-quickbuff guild-icon left guild-minibox-action tip-static" data-tipped="Quick Buff"></span>'}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade guild-icon left guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade guild-icon left guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function S(t,n){return t.filter(x).map(e(L,n)).join("")}const A=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function C(e,t,n){return 0===n(e,t)}function N(t){const n=d(t._allies,[]),s=d(t._enemies,[]);(function(t,n){return A.every(e(C,t,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=S(e,!0)),i.enableEnemyOnlineList&&(n+=S(t,!1))
const s=p("fshContactList")
b("",s),c(s,n)}(n,s)}function O(e){e.classList.toggle("enemy-buff-check-on"),e.classList.toggle("enemy-buff-check-off")}const G=[["enemy-buff-check-on",O],["enemy-buff-check-off",O],["enemy-send-message",function(e){window.openQuickMsgDialog(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quickbuff",function(e){k(h(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quick-buff",function(){const e=g("enemy-buff-check-on",p("fshContactList")).map((e=>h(e.nextElementSibling)))
k(e.join())}]]
function I(e){const{target:t}=e
"fshResetEnemy"!==t.id?m(G)(e):$(!0).then(N)}function P(e){const t=f({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div id="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+='<ul class="enemy-quick-buff">Quick Buff Selected</ul>'),n+="</div></div>",c(t,n),j(r,t),u(t,I),N(e)}function R(e){e&&l(3,P,[e])}function _(){o()||$(!1).then(R)}export default _
//# sourceMappingURL=allyEnemy-eefac5c5.js.map