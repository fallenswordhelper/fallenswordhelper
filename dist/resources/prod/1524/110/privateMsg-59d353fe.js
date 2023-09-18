import{d as t}from"./dataRows-65a2024d.js"
import{am as r,n as s,r as o,an as a,o as e,ao as i,ae as n,a4 as p,a6 as m,v as f,ap as c,aq as l}from"./calfSystem-929ac228.js"
import{a as u,g as d}from"./addLogColoring-9a965c15.js"
import{a as g}from"./addLogWidgets-5b4f993c.js"
import{c as j}from"./closestTr-3ee5784f.js"
import{c as b}from"./csvSplit-c32f193d.js"
import{g as h}from"./getPlayerId-eb8178c0.js"
import{o as B}from"./openQuickBuffById-85e39f39.js"
import{b as M}from"./buffObj-18893259.js"
import"./createStyle-ebd85b35.js"
import"./doBuffLinkClick-392873b7.js"
import"./parseDateAsTimestamp-c49e9bdc.js"
import"./dateUtc-0fede27f.js"
import"./all-414e0607.js"
import"./insertHtmlAfterEnd-cbb15ee8.js"
import"./relatePlayer-b132acd9.js"
import"./myStats-439c5e74.js"
import"./profile-ceb86d3e.js"
import"./now-6f22aec9.js"
import"./idb-8fd6b5d1.js"
import"./getMembrList-d370ab65.js"
import"./guildMembers-ec6b013f.js"
import"./isArray-09a53da7.js"
import"./getId-e4d83057.js"
import"./insertHtmlAfterBegin-6347b1ce.js"
import"./addCommas-47d6aaa1.js"
import"./getCombat-a219dc2f.js"
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
//# sourceMappingURL=privateMsg-59d353fe.js.map
