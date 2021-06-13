import{a as t,g as r}from"./addLogColoring-343c9db5.js"
import{a as s}from"./addLogWidgets-0722ef43.js"
import{d as a}from"./dataRows-9acbc944.js"
import{H as e,C as o,S as i,ae as n,o as c,af as f,I as p,R as m,i as d,ag as u,ah as l}from"./calfSystem-e1e858cd.js"
import{c as g}from"./closestTr-1393a128.js"
import{b as j}from"./buffObj-c673ca2f.js"
import{c as b}from"./csvSplit-95ff5434.js"
import{o as h}from"./openQuickBuffByName-b48f21dd.js"
import"./createStyle-d08244a4.js"
import"./doBuffLinkClick-39dfc3dc.js"
import"./parseDateAsTimestamp-c6154f90.js"
import"./insertHtmlAfterEnd-340cd3a2.js"
import"./currentGuildId-6f6caa9a.js"
import"./getMembrList-26ee9025.js"
import"./cmdExport-ac312c58.js"
import"./indexAjaxJson-fc55a4e0.js"
import"./idb-ef443609.js"
import"./addCommas-c0fbc0a2.js"
import"./myStats-a8dc19ff.js"
import"./getProfile-bf79b6fb.js"
import"./playerName-26e59290.js"
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
function k(t){const{target:r}=t,s=S.find((t=>f(r,t)))
s&&s[1](t)}const T=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
a(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){c(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-aee20691.js.map
