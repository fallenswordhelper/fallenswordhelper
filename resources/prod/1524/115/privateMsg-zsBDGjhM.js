import{d as t}from"./dataRows-dUyoNosq.js"
import{al as r,s,r as o,am as a,o as i,an as e,ad as n,a3 as p,a5 as m,v as f,ao as c,ap as l}from"./calfSystem-dEoRVG2S.js"
import{a as u,g as d}from"./addLogColoring-3rSWndpd.js"
import{a as g}from"./addLogWidgets-i8jNbrwW.js"
import{c as j}from"./closestTr-gWCg9Nqr.js"
import{c as b}from"./csvSplit-jneKbju3.js"
import{g as h}from"./getPlayerId-vBbMBjik.js"
import{o as v}from"./openQuickBuffById-i2DqxNd9.js"
import{b as B}from"./buffObj-QxLUrgH2.js"
import"./createStyle-wQDy0s8x.js"
import"./doBuffLinkClick-8gvw49uK.js"
import"./parseDateAsTimestamp-lUxO2oUp.js"
import"./dateUtc-CUh9sCzN.js"
import"./all-TTLWag-d.js"
import"./insertHtmlAfterEnd-AnxtMwr2.js"
import"./relatePlayer-KYnub-Os.js"
import"./myStats-xSR8mryp.js"
import"./profile-fBK7MiXt.js"
import"./now-pQzGw6vd.js"
import"./idb-ZfKvo_GP.js"
import"./getMembrList-j5wWRkA6.js"
import"./guildMembers-p64Dud-E.js"
import"./isArray-bNviZzJA.js"
import"./getId-f4M3YrQR.js"
import"./insertHtmlAfterBegin-ZV23Iy4F.js"
import"./addCommas-olJWnOGa.js"
import"./getCombat-0t9TxIHr.js"
import"./fshOpen-16hNCxKt.js"
function M(t){return r(j(t).children[3].childNodes[0])}function y(t){const r=B.find((r=>((t,r)=>b(r.nicks).includes(a(t)))(t,r)))
if(r)return r.id}const k=t=>b(t).map(y).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
v((t=>h(j(t).children[2].children[0].href))(r),function(t){const r=o(/`~(?<buffs>.*)~`/,M(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=M(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>e(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){i(t,T)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-zsBDGjhM.js.map
