import{d as t}from"./dataRows-DfKHja_m.js"
import{as as r,s,r as a,at as e,o as i,au as o,ai as n,a8 as p,aa as m,v as f,av as c,aw as l}from"./calfSystem-Dh7h0wep.js"
import{a as u,g as d}from"./addLogColoring-BJSVYaIC.js"
import{a as g}from"./addLogWidgets-DihG3dn6.js"
import{c as j}from"./closestTr-DzGaHJWa.js"
import{c as h}from"./csvSplit-Cunw4Oqp.js"
import{g as b}from"./getPlayerId-CXL5hEJJ.js"
import{o as v}from"./openQuickBuffById-D8hqbsLO.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-BWnfhOi_.js"
import"./doBuffLinkClick-BuLH1amZ.js"
import"./parseDateAsTimestamp-BEDXY1VW.js"
import"./dateUtc-C5pIP8it.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-DvHgM7lv.js"
import"./relatePlayer-7DsBHG_n.js"
import"./myStats-CvMZnTQn.js"
import"./profile-pmmP_ThH.js"
import"./getMembrList-Ge_stq33.js"
import"./guildMembers-CJo5h_tc.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-55sQ_pC9.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-BxuuocVi.js"
import"./getLogTime-Bt9s4pQo.js"
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
//# sourceMappingURL=privateMsg-D8g6pamw.js.map
