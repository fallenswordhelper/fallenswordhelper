import{d as t}from"./dataRows-DUhbhXmo.js"
import{as as r,s,r as a,at as e,o as i,au as o,ai as n,a8 as p,aa as m,v as f,av as c,aw as l}from"./calfSystem-CyLCrHqa.js"
import{a as u,g as d}from"./addLogColoring-SgMFu7ED.js"
import{a as g}from"./addLogWidgets-WExKXvpn.js"
import{c as j}from"./closestTr-BHr42g8T.js"
import{c as h}from"./csvSplit-C11e1rAj.js"
import{g as b}from"./getPlayerId-HyP308MI.js"
import{o as v}from"./openQuickBuffById-DWItz6gs.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-pyEHBlBg.js"
import"./doBuffLinkClick-D63PR5zj.js"
import"./parseDateAsTimestamp-CUlScXmd.js"
import"./dateUtc-DyJ0gqjr.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-C4h-p4s1.js"
import"./relatePlayer-eSntuNDA.js"
import"./myStats-BXTzvl2x.js"
import"./profile-ClsH8UEm.js"
import"./getMembrList-CCBve77z.js"
import"./guildMembers-C3YZ3Xen.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-BLgGdU9i.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-BLFNeo0i.js"
import"./getLogTime-DzZU0W-t.js"
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
//# sourceMappingURL=privateMsg-Gw52Ox_N.js.map
