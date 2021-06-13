import{a as t,g as r}from"./addLogColoring-7fd58d60.js"
import{a as s}from"./addLogWidgets-ec8feea4.js"
import{d as e}from"./dataRows-f9a92612.js"
import{H as a,C as o,S as i,ae as n,o as f,af as c,I as p,R as m,i as d,ag as u,ah as l}from"./calfSystem-ae2e69af.js"
import{c as g}from"./closestTr-eb55d944.js"
import{b as j}from"./buffObj-c673ca2f.js"
import{c as b}from"./csvSplit-95ff5434.js"
import{o as h}from"./openQuickBuffByName-3c03dfb1.js"
import"./createStyle-0ae8d30d.js"
import"./doBuffLinkClick-5b4c3ae1.js"
import"./parseDateAsTimestamp-b35c4088.js"
import"./insertHtmlAfterEnd-f90eb1fc.js"
import"./currentGuildId-85358166.js"
import"./getMembrList-7af564d9.js"
import"./cmdExport-aa80361b.js"
import"./indexAjaxJson-6eadb7fa.js"
import"./idb-225659e6.js"
import"./addCommas-c0fbc0a2.js"
import"./myStats-76b40e27.js"
import"./getProfile-8130640f.js"
import"./playerName-1b929217.js"
import"./closest-8e46d454.js"
import"./fshOpen-d0a5bbc1.js"
function v(t){return a(g(t).children[3].childNodes[0])}function B(t){return o(g(t).children[2].children[0])}function M(t){const r=j.find((r=>((t,r)=>b(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],b(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>c(r,t)))
s&&s[1](t)}const T=t=>[a(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
e(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){f(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-beda20af.js.map
