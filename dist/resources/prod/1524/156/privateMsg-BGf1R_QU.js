import{aS as t,j as r,aT as a,aU as s,s as e,r as n,aV as i,aW as o,o as f,aX as c,aA as p,l as u,ar as l,aY as m,a2 as d,aZ as g,a_ as j}from"./calfSystem-79LsojAC.js"
import{a as h,g as b}from"./addLogColoring-iTmZgx_R.js"
import{a as B}from"./addLogWidgets-DMwwBii_.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-BdMrx8ah.js"
import"./doBuffLinkClick-BwOlpk8H.js"
import"./parseDateAsTimestamp-CfPUfnnR.js"
import"./insertHtmlAfterEnd-Cc8z8uuA.js"
import"./relatePlayer-B8EeiZCZ.js"
import"./getMembrList-ClmDoIN3.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-BEWmbMGu.js"
import"./getLogTime-C2qvq69p.js"
function v(a){return t(r(a).children[3].childNodes[0])}function y(t){const r=M.find(r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r))
if(r)return r.id}function T(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?i(r).map(y).filter(t=>t).join(";"):""}const A=[["pmBuffBtn",function(t){const{target:n}=t
a((t=>s(r(t).children[2].children[0].href))(n),T(n)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:a}=t
window.openQuickMsgDialog((t=>u(r(t).children[2].children[0]))(a),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(a)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function S(t){const{target:r}=t,a=A.find(t=>c(r,t))
a&&a[1](t)}const U=r=>[t(r.children[2]),r.children[3]]
function k(){const t=b()
t&&(function(t){if(!p("privateMsgButtons"))return
m(t,6,0).map(U).forEach(([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)})}(t),B(1),function(t){f(t,S)}(t))}function L(){"1"===l("type")?(h("PrivateMsg",1,6),k()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-BGf1R_QU.js.map
