import{d as t}from"./dataRows-C8bVqiN8.js"
import{aq as r,s,r as a,ar as o,o as e,as as i,ai as n,a8 as p,aa as m,v as f,at as c,au as l}from"./calfSystem-B3Rc3sVt.js"
import{a as u,g as d}from"./addLogColoring-Bgehuhzf.js"
import{a as g}from"./addLogWidgets-TnZFYa23.js"
import{c as j}from"./closestTr-HZXloQc6.js"
import{c as h}from"./csvSplit-_x0dA3w4.js"
import{g as b}from"./getPlayerId-eaIUoNVO.js"
import{o as B}from"./openQuickBuffById-DvUp3MEg.js"
import{b as v}from"./buffObj-BIwiFUIW.js"
import"./createStyle-CVX4cKSa.js"
import"./doBuffLinkClick-BKTGTeRl.js"
import"./parseDateAsTimestamp-Dt6GV947.js"
import"./dateUtc-BtXSDG9Y.js"
import"./all-YfMtr2SN.js"
import"./insertHtmlAfterEnd-D_3NYqTk.js"
import"./relatePlayer-mO_qN8_T.js"
import"./myStats-CbSrNA1Y.js"
import"./profile-CIszlYgU.js"
import"./now-Cx4PsKjI.js"
import"./getMembrList-DFRqUP6H.js"
import"./guildMembers-DiZLr1w5.js"
import"./isArray-eVldfhw1.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-C0zGdFCx.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-OkXvB-2_.js"
import"./getLogTime-De4u9DRT.js"
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
//# sourceMappingURL=privateMsg-BcdkoHa4.js.map
