import{d as t}from"./dataRows-BR3SNTuC.js"
import{aq as r,s,r as a,ar as e,o as i,as as o,ai as n,a8 as p,aa as m,v as f,at as c,au as l}from"./calfSystem-hszmVKJw.js"
import{a as u,g as d}from"./addLogColoring-DYC3utnD.js"
import{a as g}from"./addLogWidgets-ZSmRNt7w.js"
import{c as j}from"./closestTr-B6tzN2bs.js"
import{c as h}from"./csvSplit-DqYsaVUL.js"
import{g as b}from"./getPlayerId-5IBnI-6H.js"
import{o as B}from"./openQuickBuffById-Dj7PMgiA.js"
import{b as v}from"./buffObj-BIwiFUIW.js"
import"./createStyle-BBlLUCwo.js"
import"./doBuffLinkClick-DZvO0hqj.js"
import"./parseDateAsTimestamp-BSrGuAIU.js"
import"./dateUtc-CmsH0l2C.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-CaPUNm59.js"
import"./relatePlayer-B1fLSOhF.js"
import"./myStats-BZK5jutV.js"
import"./profile-KpjQBPHy.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-C1pmDX8O.js"
import"./guildMembers-lKyL-vXF.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-x7-Ldj74.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-Cqsa8sof.js"
import"./fshOpen-AuKioUPF.js"
function y(t){return r(j(t).children[3].childNodes[0])}function M(t){const r=v.find((r=>((t,r)=>h(r.nicks).includes(e(t)))(t,r)))
if(r)return r.id}const k=t=>h(t).map(M).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
B((t=>b(j(t).children[2].children[0].href))(r),function(t){const r=a(/`~(?<buffs>.*)~`/,y(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=y(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function U(t){const{target:r}=t,s=S.find((t=>o(r,t)))
s&&s[1](t)}const T=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(T).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){i(t,U)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-DvCXIEj_.js.map
