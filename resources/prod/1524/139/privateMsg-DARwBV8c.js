import{d as t}from"./dataRows-CqEIMTFB.js"
import{as as r,s,r as a,at as e,o as i,au as o,ai as n,a8 as p,aa as m,v as f,av as c,aw as l}from"./calfSystem-B_VkFJhM.js"
import{a as u,g as d}from"./addLogColoring-DdAWMQh-.js"
import{a as g}from"./addLogWidgets-C0qPMYlN.js"
import{c as j}from"./closestTr-y9xuFdp6.js"
import{c as h}from"./csvSplit-wR_rfRRJ.js"
import{g as b}from"./getPlayerId-pYa4oQOK.js"
import{o as v}from"./openQuickBuffById-DWitabpA.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-DRbkdPrg.js"
import"./doBuffLinkClick-AEBWv7KA.js"
import"./parseDateAsTimestamp-C-4VhbQJ.js"
import"./dateUtc-CM__qdXA.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-CtRih9cR.js"
import"./relatePlayer-CfKbMXiC.js"
import"./myStats-Bi0k_kUx.js"
import"./profile-CY7a6G36.js"
import"./getMembrList-DcTiQz5B.js"
import"./guildMembers-DQGIJRyS.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-iL5Ohz2P.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-CTeFhTea.js"
import"./getLogTime-0NZYJOkh.js"
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
//# sourceMappingURL=privateMsg-DARwBV8c.js.map
