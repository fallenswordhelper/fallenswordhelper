import{d as t}from"./dataRows-B3xlTlPD.js"
import{aq as r,s,r as a,ar as e,o as i,as as o,ai as n,a8 as p,aa as m,v as f,at as c,au as l}from"./calfSystem-Bit7wh4p.js"
import{a as u,g as d}from"./addLogColoring-OgdERuhn.js"
import{a as g}from"./addLogWidgets-jZXmUhkv.js"
import{c as j}from"./closestTr-7PFr_dNI.js"
import{c as h}from"./csvSplit-CYiESOK8.js"
import{g as b}from"./getPlayerId-kZSkwpWB.js"
import{o as B}from"./openQuickBuffById-CejqyxyX.js"
import{b as v}from"./buffObj-BIwiFUIW.js"
import"./createStyle-DpQOQW1V.js"
import"./doBuffLinkClick-CtY8mtYc.js"
import"./parseDateAsTimestamp-kUurZoP3.js"
import"./dateUtc-9OoIRwDB.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-DTIs1DCm.js"
import"./relatePlayer-CdCTWY4p.js"
import"./myStats-BF2M0N-_.js"
import"./profile-DqDi87Jh.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-Bk73Mxcv.js"
import"./guildMembers-DVol-0Bs.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-GLMn5C2Y.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-BU1mK6YL.js"
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
//# sourceMappingURL=privateMsg-CqD-Ge28.js.map
