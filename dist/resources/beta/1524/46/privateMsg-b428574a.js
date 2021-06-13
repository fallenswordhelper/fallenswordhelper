import{a as t,g as r}from"./addLogColoring-36440751.js"
import{a as s}from"./addLogWidgets-fc918a88.js"
import{d as a}from"./dataRows-bf7d7651.js"
import{H as e,C as o,S as i,ae as n,o as f,af as c,I as p,R as m,i as d,ag as u,ah as l}from"./calfSystem-cbf77dd7.js"
import{c as g}from"./closestTr-205327ed.js"
import{b as j}from"./buffObj-c604f006.js"
import{c as b}from"./csvSplit-d0e27857.js"
import{o as h}from"./openQuickBuffByName-41d9e99c.js"
import"./createStyle-334f83f9.js"
import"./doBuffLinkClick-ab19b184.js"
import"./parseDateAsTimestamp-9ad12f39.js"
import"./insertHtmlAfterEnd-b5f0b3bc.js"
import"./currentGuildId-96726c8f.js"
import"./getMembrList-b2c55df4.js"
import"./cmdExport-cd0ba453.js"
import"./indexAjaxJson-167a69fe.js"
import"./idb-82a91df1.js"
import"./addCommas-8af578e2.js"
import"./myStats-4138d69d.js"
import"./getProfile-0a56bf78.js"
import"./playerName-448aa7ca.js"
import"./closest-d38ca7fc.js"
import"./fshOpen-4e911fa6.js"
function v(t){return e(g(t).children[3].childNodes[0])}function B(t){return o(g(t).children[2].children[0])}function M(t){const r=j.find((r=>((t,r)=>b(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],b(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>c(r,t)))
s&&s[1](t)}const T=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
a(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){f(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-b428574a.js.map
