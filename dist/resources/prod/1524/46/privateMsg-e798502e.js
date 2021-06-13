import{a as t,g as r}from"./addLogColoring-69af3c18.js"
import{a as s}from"./addLogWidgets-701bb697.js"
import{d as a}from"./dataRows-41df2bb0.js"
import{H as e,C as o,S as i,ae as n,o as c,af as f,I as p,R as m,i as d,ag as u,ah as l}from"./calfSystem-7991d843.js"
import{c as b}from"./closestTr-31d65692.js"
import{b as g}from"./buffObj-c604f006.js"
import{c as j}from"./csvSplit-d0e27857.js"
import{o as h}from"./openQuickBuffByName-76ab32da.js"
import"./createStyle-a04de647.js"
import"./doBuffLinkClick-0b2cb2af.js"
import"./parseDateAsTimestamp-d924ca8d.js"
import"./insertHtmlAfterEnd-c8c22cfb.js"
import"./currentGuildId-abfe3237.js"
import"./getMembrList-479139ba.js"
import"./cmdExport-07db8246.js"
import"./indexAjaxJson-2cb21664.js"
import"./idb-89606f1a.js"
import"./addCommas-8af578e2.js"
import"./myStats-3e0bbe38.js"
import"./getProfile-c6106cad.js"
import"./playerName-541d216c.js"
import"./closest-d38ca7fc.js"
import"./fshOpen-4e911fa6.js"
function v(t){return e(b(t).children[3].childNodes[0])}function B(t){return o(b(t).children[2].children[0])}function M(t){const r=g.find((r=>((t,r)=>j(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],j(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>f(r,t)))
s&&s[1](t)}const T=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
a(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){c(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-e798502e.js.map
