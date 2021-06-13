import{a as t,g as r}from"./addLogColoring-08e6e490.js"
import{a as s}from"./addLogWidgets-b8ed953e.js"
import{d as e}from"./dataRows-fb96d443.js"
import{H as a,C as o,T as i,af as n,o as f,ag as c,I as p,S as m,i as d,ah as u,ai as l}from"./calfSystem-d3f0a380.js"
import{c as g}from"./closestTr-fd5f5074.js"
import{b as j}from"./buffObj-c604f006.js"
import{c as b}from"./csvSplit-d0e27857.js"
import{o as h}from"./openQuickBuffByName-62f56024.js"
import"./createStyle-65a2dcef.js"
import"./doBuffLinkClick-1c266942.js"
import"./parseDateAsTimestamp-8de82a90.js"
import"./insertHtmlAfterEnd-1764e701.js"
import"./currentGuildId-574c8e9f.js"
import"./getMembrList-a58b1ab2.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./idb-13440348.js"
import"./addCommas-8af578e2.js"
import"./myStats-39a705ba.js"
import"./getProfile-31c8f504.js"
import"./playerName-9d5fb2c2.js"
import"./closest-d38ca7fc.js"
import"./fshOpen-4e911fa6.js"
function v(t){return a(g(t).children[3].childNodes[0])}function B(t){return o(g(t).children[2].children[0])}function M(t){const r=j.find((r=>((t,r)=>b(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],b(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>c(r,t)))
s&&s[1](t)}const k=t=>[a(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
e(t.rows,6,0).map(k).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){f(t,T)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-c7cd961c.js.map
