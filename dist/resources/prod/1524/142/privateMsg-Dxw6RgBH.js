import{d as t}from"./dataRows-BlfZfFsN.js"
import{as as r,s,r as a,at as e,o as i,au as o,ai as n,a8 as p,aa as m,v as f,av as c,aw as l}from"./calfSystem-KuDT30_2.js"
import{a as u,g as d}from"./addLogColoring-5YDvw7XN.js"
import{a as g}from"./addLogWidgets-DBb98TFj.js"
import{c as j}from"./closestTr-DrJ2puOz.js"
import{c as h}from"./csvSplit-4xUWBldR.js"
import{g as b}from"./getPlayerId-BYtt9UT6.js"
import{o as v}from"./openQuickBuffById-BBkCBFOh.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-DFJFrzGF.js"
import"./doBuffLinkClick-D_VOhxyN.js"
import"./parseDateAsTimestamp-C2YCs8SF.js"
import"./dateUtc-DPbX6ZZE.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-B4PNK02o.js"
import"./relatePlayer-sk4zSoup.js"
import"./myStats-D85E22gh.js"
import"./profile-fEGJmCcT.js"
import"./getMembrList-BHN_igCX.js"
import"./guildMembers-BI7B-WBZ.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-CxpRhMr7.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-C4Xcm4-i.js"
import"./getLogTime-C4xwDd3z.js"
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
//# sourceMappingURL=privateMsg-Dxw6RgBH.js.map
