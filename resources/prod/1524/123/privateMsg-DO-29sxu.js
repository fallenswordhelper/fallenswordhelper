import{d as t}from"./dataRows-DqF7itiP.js"
import{aq as r,s,r as a,ar as o,o as e,as as i,ai as n,a8 as p,aa as m,v as f,at as c,au as l}from"./calfSystem-wTzwei3t.js"
import{a as u,g as d}from"./addLogColoring-BXvP7dp_.js"
import{a as g}from"./addLogWidgets-B5Uaflae.js"
import{c as j}from"./closestTr-Cd9iMbp0.js"
import{c as h}from"./csvSplit-DqsViCLn.js"
import{g as b}from"./getPlayerId-DXzgWTxI.js"
import{o as B}from"./openQuickBuffById-BBtUx2eO.js"
import{b as v}from"./buffObj-BIwiFUIW.js"
import"./createStyle-XikBtHtE.js"
import"./doBuffLinkClick-BQ7puGd3.js"
import"./parseDateAsTimestamp-CE0jGIOF.js"
import"./dateUtc-p1OOejM8.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-C7sg9qpO.js"
import"./relatePlayer-B5pdWt_5.js"
import"./myStats-DlPZBYWz.js"
import"./profile-YDP0dIj7.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-D9Ne3e-s.js"
import"./guildMembers-BAg60jqP.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-Bzn5RmGv.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-BMUxoqGn.js"
import"./getLogTime-BIk-wAoE.js"
import"./fshOpen-AuKioUPF.js"
function y(t){return r(j(t).children[3].childNodes[0])}function M(t){const r=v.find((r=>((t,r)=>h(r.nicks).includes(o(t)))(t,r)))
if(r)return r.id}const k=t=>h(t).map(M).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
B((t=>b(j(t).children[2].children[0].href))(r),function(t){const r=a(/`~(?<buffs>.*)~`/,y(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=y(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>i(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){e(t,T)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-DO-29sxu.js.map
