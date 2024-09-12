import{d as t}from"./dataRows-nBr68U7I.js"
import{aq as r,s,r as a,ar as o,o as e,as as i,ai as n,a8 as p,aa as m,v as f,at as c,au as l}from"./calfSystem-CXltiP6P.js"
import{a as u,g as d}from"./addLogColoring-D9-1pbcA.js"
import{a as g}from"./addLogWidgets-SjkTw1X9.js"
import{c as j}from"./closestTr-Cbv3yDwp.js"
import{c as h}from"./csvSplit-C4r8hxvX.js"
import{g as b}from"./getPlayerId-BNxb_ahS.js"
import{o as B}from"./openQuickBuffById-CH3mcJpt.js"
import{b as v}from"./buffObj-BIwiFUIW.js"
import"./createStyle-CArGUEY2.js"
import"./doBuffLinkClick-65Gxfv3k.js"
import"./parseDateAsTimestamp-D81NWKlz.js"
import"./dateUtc-BeqHJfdM.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-CgzSs3B4.js"
import"./relatePlayer-BzkQh9ki.js"
import"./myStats-CAlraNth.js"
import"./profile-C07xDebD.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-RdVZ7n1h.js"
import"./guildMembers-BKvHYP7M.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-IboC78Mm.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-DHzm3pZp.js"
import"./getLogTime-D3CUSYLE.js"
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
//# sourceMappingURL=privateMsg-BUXWGhQ8.js.map
