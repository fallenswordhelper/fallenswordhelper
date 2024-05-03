import{d as t}from"./dataRows-COCTBM12.js"
import{aq as r,s,r as a,ar as o,o as e,as as i,ai as n,a8 as p,aa as m,v as f,at as c,au as l}from"./calfSystem-BtgQSp8m.js"
import{a as u,g as d}from"./addLogColoring-CSO2ylRk.js"
import{a as g}from"./addLogWidgets-CeyQNNiW.js"
import{c as j}from"./closestTr-D53dAuOz.js"
import{c as h}from"./csvSplit-DwRexoZT.js"
import{g as b}from"./getPlayerId-Ca7Vz2Mq.js"
import{o as B}from"./openQuickBuffById-CUYQAkj1.js"
import{b as v}from"./buffObj-BIwiFUIW.js"
import"./createStyle-BYPeZ66Y.js"
import"./doBuffLinkClick-wX7ond58.js"
import"./parseDateAsTimestamp-BWNix1FR.js"
import"./dateUtc-C0o84o64.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-DPYK3VYh.js"
import"./relatePlayer-SVp6Enet.js"
import"./myStats-V6s3HT5k.js"
import"./profile-W3yGNvES.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-BlkqWvC9.js"
import"./guildMembers-CFZ5CYds.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-fU2gx9hU.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-Dt8I0rwo.js"
import"./getLogTime-Dv6Wf9yS.js"
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
//# sourceMappingURL=privateMsg-BMRESkOO.js.map
