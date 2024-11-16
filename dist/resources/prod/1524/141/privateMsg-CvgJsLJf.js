import{d as t}from"./dataRows-B6_VtVvQ.js"
import{as as r,r as s,at as a,s as e,e as i,ai as o,a8 as n,au as p,aa as m,v as f,av as c,aw as l}from"./calfSystem-Blt4DbaE.js"
import{a as u,g as d}from"./addLogColoring-iZi4QL__.js"
import{a as g}from"./addLogWidgets-DU-Ndfm_.js"
import{c as j}from"./closestTr-BGA5O97h.js"
import{c as h}from"./csvSplit-DCp-KQ1I.js"
import{g as b}from"./getPlayerId-Ck17Fcst.js"
import{o as v}from"./openQuickBuffById-AG7prqnJ.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-C5mK_M_l.js"
import"./doBuffLinkClick-CcIlwlsz.js"
import"./parseDateAsTimestamp-CKw0dWec.js"
import"./dateUtc-Cc3l2wc4.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-ZY7WoHPS.js"
import"./relatePlayer-DeUQmyIo.js"
import"./myStats-CJTu9lO4.js"
import"./profile-BPaCJRNe.js"
import"./getMembrList-BJkT4B-E.js"
import"./guildMembers-B5MxM4J7.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-COYhMrPt.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-T6Z6qD0Y.js"
import"./getLogTime-jtr1-498.js"
import"./fshOpen-AuKioUPF.js"
function M(t){return r(j(t).children[3].childNodes[0])}function y(t){const r=B.find((r=>((t,r)=>h(r.nicks).includes(a(t)))(t,r)))
if(r)return r.id}const S=t=>h(t).map(y).filter((t=>t)).join(";")
const k=[["pmBuffBtn",function(t){const{target:r}=t
v((t=>b(j(t).children[2].children[0].href))(r),function(t){const r=s(/`~(?<buffs>.*)~`/,M(t))
return r?S(r):""}(r)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!o("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>n(j(t).children[2].children[0]))(r),"",function(t){const r=M(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=k.find((t=>p(r,t)))
s&&s[1](t)}const U=t=>[r(t.children[2]),t.children[3]]
function A(){const r=d()
r&&(function(r){if(!o("privateMsgButtons"))return
t(r,6,0).map(U).forEach((([t,r])=>{f(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${c+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(r),g(1),function(t){i(t,T)}(r))}function I(){"1"===m("type")?(u("PrivateMsg",1,6),A()):u("OutBox",1,4)}export{I as default}
//# sourceMappingURL=privateMsg-CvgJsLJf.js.map
