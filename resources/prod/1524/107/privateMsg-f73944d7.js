import{d as t}from"./dataRows-1cc13a27.js"
import{an as r,n as s,r as o,ao as a,o as e,ap as i,af as n,a5 as p,a7 as m,v as f,aq as c,ar as l}from"./calfSystem-2fff342b.js"
import{a as u,g as d}from"./addLogColoring-cb056011.js"
import{a as g}from"./addLogWidgets-454951c8.js"
import{c as j}from"./closestTr-03cebe69.js"
import{c as b}from"./csvSplit-130c4743.js"
import{g as h}from"./getPlayerId-1e376753.js"
import{o as B}from"./openQuickBuffById-a2b81ae2.js"
import{b as v}from"./buffObj-18893259.js"
import"./createStyle-c9b61b3f.js"
import"./doBuffLinkClick-91c3425e.js"
import"./parseDateAsTimestamp-2810897e.js"
import"./dateUtc-ae062737.js"
import"./all-414e0607.js"
import"./insertHtmlAfterEnd-d463625c.js"
import"./relatePlayer-d14a103c.js"
import"./myStats-8a5ad298.js"
import"./profile-3c9458c7.js"
import"./now-6f22aec9.js"
import"./idb-0ebea50c.js"
import"./getMembrList-09da0fac.js"
import"./guildMembers-0c31d405.js"
import"./getId-e4d83057.js"
import"./insertHtmlAfterBegin-dd3e6f88.js"
import"./addCommas-47d6aaa1.js"
import"./getCombat-faf84f1f.js"
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
//# sourceMappingURL=privateMsg-f73944d7.js.map
