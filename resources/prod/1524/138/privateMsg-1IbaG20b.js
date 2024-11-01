import{d as t}from"./dataRows-DT_fO1in.js"
import{as as r,s,r as a,at as e,o as i,au as o,ai as n,a8 as p,aa as m,v as f,av as c,aw as l}from"./calfSystem-BjarbvkO.js"
import{a as u,g as d}from"./addLogColoring-DCGmXh-z.js"
import{a as g}from"./addLogWidgets-DNce_Sgz.js"
import{c as j}from"./closestTr-BDCF6M_H.js"
import{c as h}from"./csvSplit-BbgpYa-P.js"
import{g as b}from"./getPlayerId-CzqY3CZe.js"
import{o as v}from"./openQuickBuffById-BQUusfkO.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-CfvDzb4b.js"
import"./doBuffLinkClick-DBS6jRGO.js"
import"./parseDateAsTimestamp-4-aelaqN.js"
import"./dateUtc-CU2Nl9AM.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-Bahtg1AL.js"
import"./relatePlayer-0bOQV2Xn.js"
import"./myStats-B7ZZ_NcE.js"
import"./profile-DL2Vy9w6.js"
import"./getMembrList-CqAFoV-F.js"
import"./guildMembers-CCBJ9tp8.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-Db2hAYHY.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-DWkD58OE.js"
import"./getLogTime-yfyR7WGU.js"
import"./fshOpen-AuKioUPF.js"
function M(t){return r(j(t).children[3].childNodes[0])}function y(t){const r=B.find((r=>((t,r)=>h(r.nicks).includes(e(t)))(t,r)))
if(r)return r.id}const S=t=>h(t).map(y).filter((t=>t)).join(";")
const k=[["pmBuffBtn",function(t){const{target:r}=t
v((t=>b(j(t).children[2].children[0].href))(r),function(t){const r=a(/`~(?<buffs>.*)~`/,M(t))
return r?S(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=M(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=k.find((t=>o(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){i(t,T)}(r))}function I(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{I as default}
//# sourceMappingURL=privateMsg-1IbaG20b.js.map
