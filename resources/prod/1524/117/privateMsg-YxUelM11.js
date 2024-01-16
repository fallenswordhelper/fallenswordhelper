import{d as t}from"./dataRows-o1cWPBFh.js"
import{aq as r,s,r as a,ar as e,o as i,as as o,ai as n,a8 as p,aa as m,v as f,at as c,au as l}from"./calfSystem-G1dN925O.js"
import{a as u,g as d}from"./addLogColoring-B-h0naQa.js"
import{a as g}from"./addLogWidgets-f8yaomiF.js"
import{c as j}from"./closestTr-ewZQ2axu.js"
import{c as h}from"./csvSplit-SWeoixMs.js"
import{g as b}from"./getPlayerId-E_vX5Gmd.js"
import{o as B}from"./openQuickBuffById-thDk1sOL.js"
import{b as M}from"./buffObj-QxLUrgH2.js"
import"./createStyle-kdSx2xlE.js"
import"./doBuffLinkClick-6tcvCVMK.js"
import"./parseDateAsTimestamp-XLvjzemG.js"
import"./dateUtc-7iQbgp_T.js"
import"./all-TTLWag-d.js"
import"./insertHtmlAfterEnd-s8cbAmD-.js"
import"./relatePlayer-17ysHdFJ.js"
import"./myStats--KJiIj1a.js"
import"./profile-YuJ83wb9.js"
import"./now-pQzGw6vd.js"
import"./getMembrList-AgfQvkLG.js"
import"./guildMembers-4GuRAnc8.js"
import"./isArray-bNviZzJA.js"
import"./getId-f4M3YrQR.js"
import"./insertHtmlAfterBegin-lQu1LWMD.js"
import"./addCommas-olJWnOGa.js"
import"./getCombat-fqq7tGyf.js"
import"./fshOpen-16hNCxKt.js"
function v(t){return r(j(t).children[3].childNodes[0])}function y(t){const r=M.find((r=>((t,r)=>h(r.nicks).includes(e(t)))(t,r)))
if(r)return r.id}const k=t=>h(t).map(y).filter((t=>t)).join(";")
const S=[["pmBuffBtn",function(t){const{target:r}=t
B((t=>b(j(t).children[2].children[0].href))(r),function(t){const r=a(/`~(?<buffs>.*)~`/,v(t))
return r?k(r):""}(r)),s("privateMsg","Buff")}],["fa-reply",function(t){if(!n("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>p(j(t).children[2].children[0]))(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),s("privateMsg","parseReply")}],["pmTradeUrl",()=>s("privateMsg","Trade")],["pmSecureUrl",()=>s("privateMsg","ST")],["pmAttackUrl",()=>s("privateMsg","Attack")],["pmIgnoreUrl",()=>s("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>o(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!n("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){i(t,T)}(r))}function C(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{C as default}
//# sourceMappingURL=privateMsg-YxUelM11.js.map
