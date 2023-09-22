import{m as e}from"./myStats-e8c505b6.js"
import{c as t,bk as n,ab as i,ap as s,ao as a,w as o,aM as l,l as c,v as f,i as r,dj as u,o as d,bi as m,cT as p,g as y,s as h,n as g,a3 as b,ae as $}from"./calfSystem-4830a18d.js"
import{g as v}from"./getPlayerId-283e8a7a.js"
import{o as j}from"./openQuickBuffById-8cca49b4.js"
import{b as S}from"./now-6f22aec9.js"
import{f as B}from"./formatLastActivity-5a660bfc.js"
import"./profile-3abe08ab.js"
import"./idb-7e56faaa.js"
import"./fshOpen-c0e91392.js"
import"./splitTime-40eb3bf7.js"
import"./outputFormat-b1a8825f.js"
const L="enemy-buff-check-on",E="enemy-buff-check-off",k="enemy-send-message",x="enemy-quickbuff",w="enemy-quick-buff",I=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function O(e,t){return t[0](S()-e)}function A(e,i){return`<a class="player-name tip-static ${function(e,n){const i=I.find(t(O,e))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(e.last_login,i)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${B(e.last_login)}</td></tr></tbody></table>" href="${n}${e.id}">${e.username}</a>`}function C(e){return S()-e.last_login<1800}function P(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":`<span class="${L}"></span>`}${A(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":`<span class="${k} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${i.hideGuildInfoBuff?"":`<span class="${x} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function G(e,n){return e.filter(C).map(t(P,n)).join("")}const M=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function R(e){g("allyEnemy",e)}function T(e,t,n){return 0===n(e,t)}function _(e){const n=m(e._allies,[]),s=m(e._enemies,[]);(function(e,n){return M.every(t(T,e,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=G(e,!0)),i.enableEnemyOnlineList&&(n+=G(t,!1))
const s=y("fshContactList")
h("",s),f(s,n)}(n,s)}function N(e){R("toggleBuffSelected"),e.classList.toggle(L),e.classList.toggle(E)}const Q=[[L,N],[E,N],[k,function(e){R("msgPlayer"),window.openQuickMsgDialog(b(e.parentNode.previousElementSibling.lastElementChild))}],[x,function(e){R("buffPlayer"),j(v(e.parentNode.previousElementSibling.lastElementChild.href))}],[w,function(){R("selectedBuff")
const e=$(L,y("fshContactList")).map((e=>v(e.nextElementSibling.href))).join(",")
j(e)}]]
function D(t){const{target:n}=t
"fshResetEnemy"!==n.id?p(Q)(t):async function(){R("resetList"),_(await e(!0))}()}function q(e){const t=c({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+=`<ul class="${w}">Quick Buff Selected</ul>`),n+="</div></div>",f(t,n),r(u(),t),d(t,D),_(e)}async function F(){if(o())return
!function(e){e&&l(3,q,[e])}(await e(!1))}export{F as default}
//# sourceMappingURL=allyEnemy-10bf286c.js.map
