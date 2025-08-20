import{aR as t,j as r,aS as a,aT as s,s as e,r as n,aU as i,aV as o,o as f,aW as c,az as p,l as u,aq as l,aX as m,a1 as d,aY as g,aZ as j}from"./calfSystem-UyQ_FKFu.js"
import{a as h,g as b}from"./addLogColoring-B20bmBIe.js"
import{a as B}from"./addLogWidgets-CcdSHU6K.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-BGl-LDQE.js"
import"./doBuffLinkClick-CrNehDqU.js"
import"./parseDateAsTimestamp-uKlPe52O.js"
import"./dateUtc-DP8sjtiR.js"
import"./insertHtmlAfterEnd-CRyhSC3a.js"
import"./relatePlayer-Bc_g8ToI.js"
import"./getMembrList-BDWCwZT8.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-jBb92bbU.js"
import"./getLogTime-BkXR0j6y.js"
function v(a){return t(r(a).children[3].childNodes[0])}function T(t){const r=M.find(r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r))
if(r)return r.id}function U(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?i(r).map(T).filter(t=>t).join(";"):""}const y=[["pmBuffBtn",function(t){const{target:n}=t
a((t=>s(r(t).children[2].children[0].href))(n),U(n)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:a}=t
window.openQuickMsgDialog((t=>u(r(t).children[2].children[0]))(a),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(a)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function S(t){const{target:r}=t,a=y.find(t=>c(r,t))
a&&a[1](t)}const k=r=>[t(r.children[2]),r.children[3]]
function A(){const t=b()
t&&(function(t){if(!p("privateMsgButtons"))return
m(t,6,0).map(k).forEach(([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)})}(t),B(1),function(t){f(t,S)}(t))}function L(){"1"===l("type")?(h("PrivateMsg",1,6),A()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-ChwIIN5a.js.map
