import{a as t,g as r}from"./addLogColoring-a20fbe88.js"
import{a as e}from"./addLogWidgets-ba34e706.js"
import{d as s}from"./dataRows-34f45ad8.js"
import{H as a,C as o,S as i,o as n,ae as c,I as f,R as p,i as m,af as d,ag as u}from"./calfSystem-6ad077b7.js"
import{c as l}from"./closestTr-49841bb4.js"
import{b}from"./buffObj-1b3bee9b.js"
import{c as j}from"./csvSplit-d22d07ed.js"
import{o as g}from"./openQuickBuffByName-f16a58eb.js"
import{t as h}from"./toLowerCase-c964d32b.js"
import"./createStyle-ed624664.js"
import"./doBuffLinkClick-bf19d470.js"
import"./parseDateAsTimestamp-512975e0.js"
import"./insertHtmlAfterEnd-0792ac6e.js"
import"./currentGuildId-e0011880.js"
import"./getMembrList-c96ccda8.js"
import"./cmdExport-f73a707b.js"
import"./indexAjaxJson-d462ea95.js"
import"./idb-9caca870.js"
import"./addCommas-aab57e5e.js"
import"./myStats-1aebe4bb.js"
import"./getProfile-dbf285d8.js"
import"./playerName-7e6569ce.js"
import"./closest-7cf61e52.js"
import"./fshOpen-d480412d.js"
function v(t){return a(l(t).children[3].childNodes[0])}function B(t){return o(l(t).children[2].children[0])}function y(t){const r=b.find((r=>((t,r)=>j(r.nicks).includes(h(t)))(t,r)))
if(r)return r.id}function M(t){const r=/`~(.*)~`/.exec(v(t))
return r?(e=r[1],j(e).map(y).filter((t=>t)).join(";")):""
var e}const S=[["pmBuffBtn",function(t){const{target:r}=t
g(B(r),M(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!f("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,e=S.find((t=>c(r,t)))
e&&e[1](t)}const T=t=>[a(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){s(t.rows,6,0).map(T).forEach((([t,r])=>{m(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${d+t}">Send</a> | <a class="pmSecureUrl" href="${u+t}">Trade</a> ]`)}))}(t),e(1),function(t){n(t,k)}(t))}function C(){"1"===p("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default C
//# sourceMappingURL=privateMsg-ac570bd8.js.map
