import{aS as t,j as r,aT as a,aU as s,s as e,r as n,aV as i,aW as o,o as f,aX as c,az as p,l as u,aq as l,aY as m,a2 as d,aZ as g,a_ as j}from"./calfSystem-CIuUjh4H.js"
import{a as h,g as b}from"./addLogColoring-Cl_8Twpy.js"
import{a as B}from"./addLogWidgets-CbQoc0--.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-Co3Q_8M9.js"
import"./doBuffLinkClick-9cS80RCX.js"
import"./parseDateAsTimestamp-hdeGukFZ.js"
import"./insertHtmlAfterEnd-BNBx3698.js"
import"./relatePlayer-XZTYuRJp.js"
import"./getMembrList-DhTWubx9.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-DCUmpZPb.js"
import"./getLogTime-CZGXW1gy.js"
function v(a){return t(r(a).children[3].childNodes[0])}function T(t){const r=M.find(r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r))
if(r)return r.id}function k(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?i(r).map(T).filter(t=>t).join(";"):""}const y=[["pmBuffBtn",function(t){const{target:n}=t
a((t=>s(r(t).children[2].children[0].href))(n),k(n)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:a}=t
window.openQuickMsgDialog((t=>u(r(t).children[2].children[0]))(a),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(a)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function S(t){const{target:r}=t,a=y.find(t=>c(r,t))
a&&a[1](t)}const U=r=>[t(r.children[2]),r.children[3]]
function A(){const t=b()
t&&(function(t){if(!p("privateMsgButtons"))return
m(t,6,0).map(U).forEach(([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)})}(t),B(1),function(t){f(t,S)}(t))}function L(){"1"===l("type")?(h("PrivateMsg",1,6),A()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-DrATUiqs.js.map
