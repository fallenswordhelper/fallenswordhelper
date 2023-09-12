import{d as t}from"./dataRows-380aff49.js"
import{an as r,n as s,r as o,ao as a,o as e,ap as i,af as n,a5 as p,a7 as m,v as f,aq as c,ar as l}from"./calfSystem-34913441.js"
import{a as u,g as d}from"./addLogColoring-33fe539a.js"
import{a as g}from"./addLogWidgets-1d324dc0.js"
import{c as j}from"./closestTr-316dea29.js"
import{c as b}from"./csvSplit-21d1e5f2.js"
import{g as h}from"./getPlayerId-dc3d799c.js"
import{o as B}from"./openQuickBuffById-3914df94.js"
import{b as M}from"./buffObj-18893259.js"
import"./createStyle-e8b661d2.js"
import"./doBuffLinkClick-3a734a4b.js"
import"./parseDateAsTimestamp-de53e2f8.js"
import"./dateUtc-5241c4b3.js"
import"./all-414e0607.js"
import"./insertHtmlAfterEnd-feafb00f.js"
import"./relatePlayer-391b35cf.js"
import"./myStats-1ab0fda3.js"
import"./profile-3aa5b35b.js"
import"./now-6f22aec9.js"
import"./idb-ec5d6344.js"
import"./getMembrList-392b991f.js"
import"./guildMembers-3d3812de.js"
import"./getId-e4d83057.js"
import"./insertHtmlAfterBegin-0b693b95.js"
import"./addCommas-47d6aaa1.js"
import"./getCombat-eae4a1fa.js"
import"./fshOpen-c0e91392.js"
function v(t){return r(j(t).children[3].childNodes[0])}function y(t){const r=M.find((r=>((t,r)=>b(r.nicks).includes(a(t)))(t,r)))
if(r)return r.id}const k=t=>b(t).map(y).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
B((t=>h(j(t).children[2].children[0].href))(r),function(t){const r=o(/`~(?<buffs>.*)~`/,v(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>i(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){e(t,T)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-3f326306.js.map
