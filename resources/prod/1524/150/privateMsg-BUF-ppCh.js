import{aH as t,ai as r,aI as a,aJ as s,s as e,r as n,aK as i,aL as o,o as f,aM as c,ao as p,aa as u,ac as m,aN as l,z as d,aO as g,aP as j}from"./calfSystem-BGOTz8de.js"
import{a as h,g as b}from"./addLogColoring-DSat2nGC.js"
import{a as B}from"./addLogWidgets-BoTq8wGA.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-dPu6vqqt.js"
import"./doBuffLinkClick-BhjFCunt.js"
import"./parseDateAsTimestamp-DRgS21SE.js"
import"./dateUtc-DrUNGodL.js"
import"./insertHtmlAfterEnd-CjhYSrOa.js"
import"./relatePlayer-CvaIIcIU.js"
import"./getMembrList-B5ta0ybw.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-DcdSCBOW.js"
import"./getLogTime-BOe2ASPR.js"
function v(a){return t(r(a).children[3].childNodes[0])}function y(t){const r=M.find((r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r)))
if(r)return r.id}const T=t=>i(t).map(y).filter((t=>t)).join(";")
const U=[["pmBuffBtn",function(t){const{target:i}=t
a((t=>s(r(t).children[2].children[0].href))(i),function(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?T(r):""}(i)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:a}=t
window.openQuickMsgDialog((t=>u(r(t).children[2].children[0]))(a),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(a)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function k(t){const{target:r}=t,a=U.find((t=>c(r,t)))
a&&a[1](t)}const A=r=>[t(r.children[2]),r.children[3]]
function L(){const t=b()
t&&(function(t){if(!p("privateMsgButtons"))return
l(t,6,0).map(A).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)}))}(t),B(1),function(t){f(t,k)}(t))}function S(){"1"===m("type")?(h("PrivateMsg",1,6),L()):h("OutBox",1,4)}export{S as default}
//# sourceMappingURL=privateMsg-BUF-ppCh.js.map
