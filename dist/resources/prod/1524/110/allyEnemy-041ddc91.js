import{m as e}from"./myStats-439c5e74.js"
import{c as t,bl as n,ac as i,aq as s,ap as a,w as o,aN as l,l as c,v as f,i as r,dj as u,o as d,bj as m,cT as p,g as h,s as y,n as g,a4 as b,af as $}from"./calfSystem-929ac228.js"
import{g as j}from"./getPlayerId-eb8178c0.js"
import{o as v}from"./openQuickBuffById-85e39f39.js"
import{b as S}from"./now-6f22aec9.js"
import{f as L}from"./formatLastActivity-8adc5cb7.js"
import"./profile-ceb86d3e.js"
import"./idb-8fd6b5d1.js"
import"./fshOpen-c0e91392.js"
import"./splitTime-40eb3bf7.js"
import"./outputFormat-b1a8825f.js"
const B="enemy-buff-check-on",E="enemy-buff-check-off",x="enemy-send-message",k="enemy-quickbuff",w="enemy-quick-buff",A=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function I(e,t){return t[0](S()-e)}function O(e,i){return`<a class="player-name tip-static ${function(e,n){const i=A.find(t(I,e))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(e.last_login,i)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${L(e.last_login)}</td></tr></tbody></table>" href="${n}${e.id}">${e.username}</a>`}function C(e){return S()-e.last_login<1800}function P(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":`<span class="${B}"></span>`}${O(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":`<span class="${x} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${i.hideGuildInfoBuff?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,n){return e.filter(C).map(t(P,n)).join("")}const N=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function R(e){g("allyEnemy",e)}function T(e,t,n){return 0===n(e,t)}function _(e){const n=m(e._allies,[]),s=m(e._enemies,[]);(function(e,n){return N.every(t(T,e,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=G(e,!0)),i.enableEnemyOnlineList&&(n+=G(t,!1))
const s=h("fshContactList")
y("",s),f(s,n)}(n,s)}function M(e){R("toggleBuffSelected"),e.classList.toggle(B),e.classList.toggle(E)}const Q=[[B,M],[E,M],[x,function(e){R("msgPlayer"),window.openQuickMsgDialog(b(e.parentNode.previousElementSibling.lastElementChild))}],[k,function(e){R("buffPlayer"),v(j(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){R("selectedBuff")
const e=$(B,h("fshContactList")).map((e=>j(e.nextElementSibling.href))).join(",")
v(e)}]]
function q(t){const{target:n}=t
"fshResetEnemy"!==n.id?p(Q)(t):async function(){R("resetList"),_(await e(!0))}()}function D(e){const t=c({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",f(t,n),r(u(),t),d(t,q),_(e)}async function F(){if(o())return
!function(e){e&&l(3,D,[e])}(await e(!1))}export{F as default}
//# sourceMappingURL=allyEnemy-041ddc91.js.map
