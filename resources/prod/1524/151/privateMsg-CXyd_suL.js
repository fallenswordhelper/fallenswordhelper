import{aT as t,l as r,aU as s,aV as a,s as e,r as n,aW as i,aX as o,o as f,aY as c,aB as p,n as u,as as l,aZ as m,a3 as d,a_ as g,a$ as j}from"./calfSystem-C1X5YxJZ.js"
import{a as h,g as b}from"./addLogColoring-4-tQOwDT.js"
import{a as B}from"./addLogWidgets-Bv9FDCGm.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-B0zF0e_c.js"
import"./doBuffLinkClick-BI7P2cNU.js"
import"./parseDateAsTimestamp-D6JycNAq.js"
import"./dateUtc-BAc__vAC.js"
import"./insertHtmlAfterEnd-Dw44WurJ.js"
import"./relatePlayer-BeHhOt8G.js"
import"./getMembrList-DJNIR1Ub.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-UHwjB-kO.js"
import"./getLogTime-VKlNOnp1.js"
function v(s){return t(r(s).children[3].childNodes[0])}function y(t){const r=M.find((r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r)))
if(r)return r.id}const T=t=>i(t).map(y).filter((t=>t)).join(";")
const U=[["pmBuffBtn",function(t){const{target:i}=t
s((t=>a(r(t).children[2].children[0].href))(i),function(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?T(r):""}(i)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:s}=t
window.openQuickMsgDialog((t=>u(r(t).children[2].children[0]))(s),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(s)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=U.find((t=>c(r,t)))
s&&s[1](t)}const A=r=>[t(r.children[2]),r.children[3]]
function S(){const t=b()
t&&(function(t){if(!p("privateMsgButtons"))return
m(t,6,0).map(A).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)}))}(t),B(1),function(t){f(t,k)}(t))}function L(){"1"===l("type")?(h("PrivateMsg",1,6),S()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-CXyd_suL.js.map
