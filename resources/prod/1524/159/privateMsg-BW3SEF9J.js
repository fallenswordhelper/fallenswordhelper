import{aT as t,k as r,aU as s,aV as a,s as e,r as n,aW as i,aX as o,o as f,aY as p,aA as c,m,ar as u,aZ as l,a3 as d,a_ as g,a$ as j}from"./calfSystem-CIdPz3EO.js"
import{a as h,g as b}from"./addLogColoring-CxlvoQcB.js"
import{a as B}from"./addLogWidgets-wJj4zXEb.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-C-OOcRjs.js"
import"./doBuffLinkClick-BdS404my.js"
import"./parseDateAsTimestamp-ImOh-yob.js"
import"./insertHtmlAfterEnd-C1lLNm4i.js"
import"./relatePlayer-BrjxZhKo.js"
import"./getMembrList-DRRIgIBb.js"
import"./guildMembers-BxoIaGju.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-CywIqRwb.js"
import"./getLogTime-B0BO4ris.js"
function v(s){return t(r(s).children[3].childNodes[0])}function k(t){const r=M.find(r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r))
if(r)return r.id}function T(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?i(r).map(k).filter(t=>t).join(";"):""}const y=[["pmBuffBtn",function(t){const{target:n}=t
s((t=>a(r(t).children[2].children[0].href))(n),T(n)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!c("enableChatParsing"))return
const{target:s}=t
window.openQuickMsgDialog((t=>m(r(t).children[2].children[0]))(s),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(s)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function A(t){const{target:r}=t,s=y.find(t=>p(r,t))
s&&s[1](t)}const U=r=>[t(r.children[2]),r.children[3]]
function S(){const t=b()
t&&(function(t){if(!c("privateMsgButtons"))return
l(t,6,0).map(U).forEach(([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)})}(t),B(1),function(t){f(t,A)}(t))}function L(){"1"===u("type")?(h("PrivateMsg",1,6),S()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-BW3SEF9J.js.map
