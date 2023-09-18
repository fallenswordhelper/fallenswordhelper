import{d as t}from"./dataRows-bd1bd3ba.js"
import{am as r,n as s,r as o,an as a,o as e,ao as i,ae as n,a4 as p,a6 as m,v as f,ap as c,aq as l}from"./calfSystem-abb16b0d.js"
import{a as u,g as d}from"./addLogColoring-58c8c79a.js"
import{a as g}from"./addLogWidgets-c50b3089.js"
import{c as j}from"./closestTr-d0dbc351.js"
import{c as b}from"./csvSplit-cb685270.js"
import{g as h}from"./getPlayerId-10b4174c.js"
import{o as B}from"./openQuickBuffById-d429c2bc.js"
import{b as M}from"./buffObj-18893259.js"
import"./createStyle-deebe923.js"
import"./doBuffLinkClick-7dc66a3f.js"
import"./parseDateAsTimestamp-3a661722.js"
import"./dateUtc-3fa03023.js"
import"./all-414e0607.js"
import"./insertHtmlAfterEnd-06552f87.js"
import"./relatePlayer-e39602a6.js"
import"./myStats-0c66109a.js"
import"./profile-f1cc6452.js"
import"./now-6f22aec9.js"
import"./idb-e719862a.js"
import"./getMembrList-c23778b8.js"
import"./guildMembers-d914b75d.js"
import"./isArray-09a53da7.js"
import"./getId-e4d83057.js"
import"./insertHtmlAfterBegin-eba23bd5.js"
import"./addCommas-47d6aaa1.js"
import"./getCombat-32fbb42c.js"
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
//# sourceMappingURL=privateMsg-3d367301.js.map
