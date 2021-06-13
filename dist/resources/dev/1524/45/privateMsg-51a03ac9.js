import{a as t,g as r}from"./addLogColoring-65fd9092.js"
import{a as s}from"./addLogWidgets-06bca2cf.js"
import{d as a}from"./dataRows-7616d03e.js"
import{H as e,C as o,T as i,af as n,o as c,ag as f,I as p,S as m,i as d,ah as u,ai as l}from"./calfSystem-6a3c85e0.js"
import{c as g}from"./closestTr-3df2da21.js"
import{b as j}from"./buffObj-c673ca2f.js"
import{c as b}from"./csvSplit-95ff5434.js"
import{o as h}from"./openQuickBuffByName-2da3e6db.js"
import"./createStyle-e14eeed1.js"
import"./doBuffLinkClick-2f63905c.js"
import"./parseDateAsTimestamp-12363058.js"
import"./insertHtmlAfterEnd-219827a9.js"
import"./currentGuildId-3f5ba5ad.js"
import"./getMembrList-1f7b49fe.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./idb-66004b57.js"
import"./addCommas-c0fbc0a2.js"
import"./myStats-bf697fe1.js"
import"./getProfile-b9c4b8d7.js"
import"./playerName-338c35a7.js"
import"./closest-8e46d454.js"
import"./fshOpen-d0a5bbc1.js"
function v(t){return e(g(t).children[3].childNodes[0])}function B(t){return o(g(t).children[2].children[0])}function M(t){const r=j.find((r=>((t,r)=>b(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],b(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function T(t){const{target:r}=t,s=S.find((t=>f(r,t)))
s&&s[1](t)}const k=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
a(t.rows,6,0).map(k).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){c(t,T)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-51a03ac9.js.map
