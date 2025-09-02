import{aT as t,j as r,aU as a,aV as s,s as e,r as n,aW as i,aX as o,o as f,aY as c,aA as p,l as u,ar as l,aZ as m,a2 as d,a_ as g,a$ as j}from"./calfSystem-CQOGdqPv.js"
import{a as h,g as b}from"./addLogColoring-QpVgl179.js"
import{a as B}from"./addLogWidgets-CjxJW5UN.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle--h4yDzB1.js"
import"./doBuffLinkClick-Di-YJRzu.js"
import"./parseDateAsTimestamp-D__SFnGT.js"
import"./insertHtmlAfterEnd-BB5pBx1-.js"
import"./relatePlayer-BS8bzyiv.js"
import"./getMembrList-Zu5hjTzC.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-DTotz0_m.js"
import"./getLogTime-6htlC-jz.js"
function v(a){return t(r(a).children[3].childNodes[0])}function T(t){const r=M.find(r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r))
if(r)return r.id}function k(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?i(r).map(T).filter(t=>t).join(";"):""}const y=[["pmBuffBtn",function(t){const{target:n}=t
a((t=>s(r(t).children[2].children[0].href))(n),k(n)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:a}=t
window.openQuickMsgDialog((t=>u(r(t).children[2].children[0]))(a),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(a)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function A(t){const{target:r}=t,a=y.find(t=>c(r,t))
a&&a[1](t)}const U=r=>[t(r.children[2]),r.children[3]]
function S(){const t=b()
t&&(function(t){if(!p("privateMsgButtons"))return
m(t,6,0).map(U).forEach(([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)})}(t),B(1),function(t){f(t,A)}(t))}function L(){"1"===l("type")?(h("PrivateMsg",1,6),S()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-BU7R0ils.js.map
