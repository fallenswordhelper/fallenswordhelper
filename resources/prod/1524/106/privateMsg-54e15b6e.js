import{d as t}from"./dataRows-85549af1.js"
import{an as r,n as s,r as o,ao as a,o as e,ap as i,af as n,a5 as p,a7 as m,v as f,aq as c,ar as l}from"./calfSystem-076d7a01.js"
import{a as u,g as d}from"./addLogColoring-7b865162.js"
import{a as g}from"./addLogWidgets-1fd30c1b.js"
import{c as j}from"./closestTr-efa2e666.js"
import{c as b}from"./csvSplit-e532e3e9.js"
import{g as h}from"./getPlayerId-118cd313.js"
import{o as B}from"./openQuickBuffById-6facec14.js"
import{b as v}from"./buffObj-18893259.js"
import"./createStyle-817f1cf1.js"
import"./doBuffLinkClick-b25be848.js"
import"./parseDateAsTimestamp-950daf66.js"
import"./dateUtc-ef343dff.js"
import"./all-414e0607.js"
import"./insertHtmlAfterEnd-69c1ccf1.js"
import"./relatePlayer-c663a3a1.js"
import"./myStats-ce4a0fe3.js"
import"./profile-5e6aaa06.js"
import"./now-6f22aec9.js"
import"./idb-807cd422.js"
import"./getMembrList-4c9f1480.js"
import"./guildMembers-d716b976.js"
import"./getId-e4d83057.js"
import"./insertHtmlAfterBegin-19f56bcb.js"
import"./addCommas-47d6aaa1.js"
import"./getCombat-ae9b05b4.js"
import"./fshOpen-c0e91392.js"
function M(t){return r(j(t).children[3].childNodes[0])}function y(t){const r=v.find((r=>((t,r)=>b(r.nicks).includes(a(t)))(t,r)))
if(r)return r.id}const k=t=>b(t).map(y).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
B((t=>h(j(t).children[2].children[0].href))(r),function(t){const r=o(/`~(?<buffs>.*)~`/,M(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=M(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function U(t){const{target:r}=t,s=S.find((t=>i(r,t)))
s&&s[1](t)}const T=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(T).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){e(t,U)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-54e15b6e.js.map
