import{d as t}from"./dataRows-DFpYQd_z.js"
import{as as r,s,r as a,at as e,o as i,au as o,ai as n,a8 as p,aa as m,v as f,av as c,aw as l}from"./calfSystem-B-q5dZfX.js"
import{a as u,g as d}from"./addLogColoring-BjJmi1TS.js"
import{a as g}from"./addLogWidgets-CsjVT_ev.js"
import{c as j}from"./closestTr-43FhsCY8.js"
import{c as h}from"./csvSplit-kMaeyE6L.js"
import{g as b}from"./getPlayerId-BA0Wro2c.js"
import{o as v}from"./openQuickBuffById-BbNgOwSb.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-DtnB7kMW.js"
import"./doBuffLinkClick-DHuiVkDR.js"
import"./parseDateAsTimestamp-gruI20kU.js"
import"./dateUtc-CK-gcgbV.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-4JZwncNn.js"
import"./relatePlayer-cXJEA4kM.js"
import"./myStats-z0n4PLh2.js"
import"./profile-BNlVtXYy.js"
import"./getMembrList-Ba2Mt6EJ.js"
import"./guildMembers-B7ko5RTl.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-C0Kfbkvm.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-DVcu6IkX.js"
import"./getLogTime-D7Mo8oA2.js"
import"./fshOpen-AuKioUPF.js"
function y(t){return r(j(t).children[3].childNodes[0])}function M(t){const r=B.find((r=>((t,r)=>h(r.nicks).includes(e(t)))(t,r)))
if(r)return r.id}const k=t=>h(t).map(M).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
v((t=>b(j(t).children[2].children[0].href))(r),function(t){const r=a(/`~(?<buffs>.*)~`/,y(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=y(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>o(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){i(t,T)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-Blw274wU.js.map
