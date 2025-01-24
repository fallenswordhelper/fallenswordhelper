import{d as t}from"./dataRows-DV8H12Ga.js"
import{aF as r,ai as a,aG as s,s as e,r as n,aH as i,aI as o,aJ as f,o as p,aK as c,ao as m,ac as u,ae as l,w as d,aL as g,aM as j}from"./calfSystem-CvwhhJv4.js"
import{a as h,g as b}from"./addLogColoring-B9xicXy5.js"
import{a as M}from"./addLogWidgets-Dx60fEdx.js"
import{b as B}from"./buffObj-BIwiFUIW.js"
import"./createStyle-C59SxshO.js"
import"./doBuffLinkClick-Zv_s4oiW.js"
import"./parseDateAsTimestamp-BbFrd8v4.js"
import"./dateUtc-BV5e7HIy.js"
import"./insertHtmlAfterEnd-DViNOIqO.js"
import"./relatePlayer-DnwII0nt.js"
import"./getMembrList-BlwQHY-c.js"
import"./getId-CEBzpjjo.js"
import"./insertHtmlAfterBegin-P0VVVulr.js"
import"./addCommas-C_h2HN8s.js"
import"./getCombat-gLE3uzoO.js"
import"./getLogTime-BwGlq6eL.js"
function v(t){return r(a(t).children[3].childNodes[0])}function y(t){const r=B.find((r=>((t,r)=>o(r.nicks).includes(f(t)))(t,r)))
if(r)return r.id}const L=t=>o(t).map(y).filter((t=>t)).join(";")
const T=[["pmBuffBtn",function(t){const{target:r}=t
s((t=>i(a(t).children[2].children[0].href))(r),function(t){const r=n(/`~(?<buffs>.*)~`/,v(t))
return r?L(r):""}(r)),e("privateMsg","Buff")}],["fa-reply",function(t){if(!m("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog((t=>u(a(t).children[2].children[0]))(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),e("privateMsg","parseReply")}],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]]
function U(t){const{target:r}=t,a=T.find((t=>c(r,t)))
a&&a[1](t)}const k=t=>[r(t.children[2]),t.children[3]]
function C(){const r=b()
r&&(function(r){if(!m("privateMsgButtons"))return
t(r,6,0).map(k).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+t}">Send</a> | <a class="pmSecureUrl" href="${j+t}">Trade</a> ]`)}))}(r),M(1),function(t){p(t,U)}(r))}function S(){"1"===l("type")?(h("PrivateMsg",1,6),C()):h("OutBox",1,4)}export{S as default}
//# sourceMappingURL=privateMsg-BuCJwFqj.js.map
