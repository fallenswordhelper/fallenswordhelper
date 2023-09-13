import{d as t}from"./dataRows-eebaf35b.js"
import{an as r,n as s,r as o,ao as a,o as e,ap as i,af as n,a5 as p,a7 as m,v as f,aq as c,ar as l}from"./calfSystem-2f15e074.js"
import{a as u,g as d}from"./addLogColoring-fd7d1156.js"
import{a as g}from"./addLogWidgets-a4b47d70.js"
import{c as j}from"./closestTr-ce435b3a.js"
import{c as b}from"./csvSplit-448857a3.js"
import{g as h}from"./getPlayerId-9d2ae5c7.js"
import{o as B}from"./openQuickBuffById-ce43fee8.js"
import{b as v}from"./buffObj-18893259.js"
import"./createStyle-f5197d38.js"
import"./doBuffLinkClick-9c90fdeb.js"
import"./parseDateAsTimestamp-bee9779f.js"
import"./dateUtc-02159818.js"
import"./all-414e0607.js"
import"./insertHtmlAfterEnd-f5410efc.js"
import"./relatePlayer-ecba7c41.js"
import"./myStats-a7e00096.js"
import"./profile-68b6c45b.js"
import"./now-6f22aec9.js"
import"./idb-28aa7d4a.js"
import"./getMembrList-d4c29fb5.js"
import"./guildMembers-1ceac4c8.js"
import"./getId-e4d83057.js"
import"./insertHtmlAfterBegin-3d3b4702.js"
import"./addCommas-47d6aaa1.js"
import"./getCombat-71500234.js"
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
//# sourceMappingURL=privateMsg-851760aa.js.map
