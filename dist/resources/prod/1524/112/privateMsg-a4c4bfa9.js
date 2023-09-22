import{d as t}from"./dataRows-ab26c2ce.js"
import{al as r,n as s,r as o,am as a,o as i,an as e,ad as n,a3 as p,a5 as m,v as f,ao as c,ap as l}from"./calfSystem-4830a18d.js"
import{a as u,g as d}from"./addLogColoring-7882f531.js"
import{a as g}from"./addLogWidgets-8a981e5f.js"
import{c as j}from"./closestTr-a662daf2.js"
import{c as b}from"./csvSplit-81e99601.js"
import{g as h}from"./getPlayerId-283e8a7a.js"
import{o as B}from"./openQuickBuffById-8cca49b4.js"
import{b as M}from"./buffObj-18893259.js"
import"./createStyle-79b7cdab.js"
import"./doBuffLinkClick-416757d3.js"
import"./parseDateAsTimestamp-2956e520.js"
import"./dateUtc-36fb94b9.js"
import"./all-414e0607.js"
import"./insertHtmlAfterEnd-52cca1f4.js"
import"./relatePlayer-78a9d53c.js"
import"./myStats-e8c505b6.js"
import"./profile-3abe08ab.js"
import"./now-6f22aec9.js"
import"./idb-7e56faaa.js"
import"./getMembrList-d2aebe41.js"
import"./guildMembers-7edbe4e6.js"
import"./isArray-09a53da7.js"
import"./getId-e4d83057.js"
import"./insertHtmlAfterBegin-32e03ae0.js"
import"./addCommas-47d6aaa1.js"
import"./getCombat-dce41474.js"
import"./fshOpen-c0e91392.js"
function v(t){return r(j(t).children[3].childNodes[0])}function y(t){const r=M.find((r=>((t,r)=>b(r.nicks).includes(a(t)))(t,r)))
if(r)return r.id}const k=t=>b(t).map(y).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
B((t=>h(j(t).children[2].children[0].href))(r),function(t){const r=o(/`~(?<buffs>.*)~`/,v(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>e(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){i(t,T)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-a4c4bfa9.js.map
