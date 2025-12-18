import{aT as t,k as r,aU as s,aV as a,s as e,r as n,aW as i,aX as o,o as f,aY as p,aA as c,m,ar as u,aZ as l,a3 as d,a_ as g,a$ as j}from"./calfSystem-Cs6CSxoU.js"
import{a as h,g as b}from"./addLogColoring-CUchhJrM.js"
import{a as B}from"./addLogWidgets-_gev1ulv.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-SGEMbHV8.js"
import"./doBuffLinkClick-DNrm0IYj.js"
import"./parseDateAsTimestamp-DIsrnFMo.js"
import"./insertHtmlAfterEnd-B3hI-1FY.js"
import"./relatePlayer-BDci9yBG.js"
import"./getMembrList-CFjzYLzE.js"
import"./guildMembers-Bfrwbkp_.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-D5kb2h-H.js"
import"./getLogTime-DMtJtfyz.js"
function v(s){return t(r(s).children[3].childNodes[0])}function T(t){const r=M.find(r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r))
if(r)return r.id}function k(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?i(r).map(T).filter(t=>t).join(";"):""}const y=[["pmBuffBtn",function(t){const{target:n}=t
s((t=>a(r(t).children[2].children[0].href))(n),k(n)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!c("enableChatParsing"))return
const{target:s}=t
window.openQuickMsgDialog((t=>m(r(t).children[2].children[0]))(s),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(s)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function U(t){const{target:r}=t,s=y.find(t=>p(r,t))
s&&s[1](t)}const A=r=>[t(r.children[2]),r.children[3]]
function L(){const t=b()
t&&(function(t){if(!c("privateMsgButtons"))return
l(t,6,0).map(A).forEach(([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)})}(t),B(1),function(t){f(t,U)}(t))}function S(){"1"===u("type")?(h("PrivateMsg",1,6),L()):h("OutBox",1,4)}export{S as default}
//# sourceMappingURL=privateMsg-Cd2IyAQH.js.map
