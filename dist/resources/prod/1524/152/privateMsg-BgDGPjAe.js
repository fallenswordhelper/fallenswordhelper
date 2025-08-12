import{aP as t,l as r,aQ as s,aR as a,s as e,r as n,aS as i,aT as o,o as f,aU as c,aB as p,n as u,as as l,aV as m,a3 as d,aW as g,aX as j}from"./calfSystem-BlPuMQGT.js"
import{a as h,g as b}from"./addLogColoring-atkRL2SG.js"
import{a as B}from"./addLogWidgets-C_pY6qIX.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-Bc_hQFau.js"
import"./doBuffLinkClick-JOmJeMPh.js"
import"./parseDateAsTimestamp-DDAzvT6k.js"
import"./dateUtc-CCrQ3NXB.js"
import"./insertHtmlAfterEnd-DO_1O_2f.js"
import"./relatePlayer-YlJnTDXX.js"
import"./getMembrList-B8VblWQd.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-CRP0nRuH.js"
import"./getLogTime-G8OzHQ7f.js"
function v(s){return t(r(s).children[3].childNodes[0])}function y(t){const r=M.find((r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r)))
if(r)return r.id}const T=t=>i(t).map(y).filter((t=>t)).join(";")
const U=[["pmBuffBtn",function(t){const{target:i}=t
s((t=>a(r(t).children[2].children[0].href))(i),function(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?T(r):""}(i)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:s}=t
window.openQuickMsgDialog((t=>u(r(t).children[2].children[0]))(s),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(s)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function S(t){const{target:r}=t,s=U.find((t=>c(r,t)))
s&&s[1](t)}const k=r=>[t(r.children[2]),r.children[3]]
function A(){const t=b()
t&&(function(t){if(!p("privateMsgButtons"))return
m(t,6,0).map(k).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)}))}(t),B(1),function(t){f(t,S)}(t))}function L(){"1"===l("type")?(h("PrivateMsg",1,6),A()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-BgDGPjAe.js.map
