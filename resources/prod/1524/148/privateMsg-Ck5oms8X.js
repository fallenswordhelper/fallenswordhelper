import{aH as t,ak as r,aI as a,aJ as s,s as e,r as n,aK as i,aL as o,o as f,aM as p,aq as c,ad as m,af as u,aN as l,x as d,aO as g,aP as j}from"./calfSystem-BldO1y8X.js"
import{a as h,g as b}from"./addLogColoring-wghj8vL2.js"
import{a as B}from"./addLogWidgets-DPhBsy-C.js"
import{b as M}from"./buffObj-BIwiFUIW.js"
import"./createStyle-DKSmWjdQ.js"
import"./doBuffLinkClick-B9cHS8o0.js"
import"./parseDateAsTimestamp-CdrbxE6d.js"
import"./dateUtc-CzVkoZ5p.js"
import"./insertHtmlAfterEnd-C0O9PHzU.js"
import"./relatePlayer-BeFP1UEi.js"
import"./getMembrList-CBcI_RNr.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-Bsjm51tM.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-BWQXhMiy.js"
import"./getLogTime-CiM8I4H7.js"
function v(a){return t(r(a).children[3].childNodes[0])}function y(t){const r=M.find((r=>((t,r)=>i(r.nicks).includes(o(t)))(t,r)))
if(r)return r.id}const k=t=>i(t).map(y).filter((t=>t)).join(";")
const T=[["pmBuffBtn",function(t){const{target:i}=t
a((t=>s(r(t).children[2].children[0].href))(i),function(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?k(r):""}(i)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!c("enableChatParsing"))return
const{target:a}=t
window.openQuickMsgDialog((t=>m(r(t).children[2].children[0]))(a),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(a)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function U(t){const{target:r}=t,a=T.find((t=>p(r,t)))
a&&a[1](t)}const A=r=>[t(r.children[2]),r.children[3]]
function C(){const t=b()
t&&(function(t){if(!c("privateMsgButtons"))return
l(t,6,0).map(A).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)}))}(t),B(1),function(t){f(t,U)}(t))}function L(){"1"===u("type")?(h("PrivateMsg",1,6),C()):h("OutBox",1,4)}export{L as default}
//# sourceMappingURL=privateMsg-Ck5oms8X.js.map
