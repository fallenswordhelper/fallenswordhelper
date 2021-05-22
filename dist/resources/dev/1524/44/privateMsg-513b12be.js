import{a as t,g as r}from"./addLogColoring-3d277681.js"
import{a as e}from"./addLogWidgets-b37213ae.js"
import{d as s}from"./dataRows-17c980fd.js"
import{H as o,C as a,T as i,o as n,af as c,I as f,S as p,i as m,ag as d,ah as u}from"./calfSystem-f7cf24f6.js"
import{c as l}from"./closestTr-6cca472b.js"
import{b as j}from"./buffObj-1b3bee9b.js"
import{c as b}from"./csvSplit-d22d07ed.js"
import{o as g}from"./openQuickBuffByName-85f930d9.js"
import{t as h}from"./toLowerCase-c964d32b.js"
import"./createStyle-8458ea8e.js"
import"./doBuffLinkClick-44f0e1d6.js"
import"./parseDateAsTimestamp-b7dd31d4.js"
import"./insertHtmlAfterEnd-63c8758b.js"
import"./currentGuildId-d5258e6c.js"
import"./getMembrList-5ed7c7b2.js"
import"./cmdExport-a23d53af.js"
import"./indexAjaxJson-57024e17.js"
import"./idb-62b65e66.js"
import"./addCommas-aab57e5e.js"
import"./myStats-1bcedc5e.js"
import"./getProfile-9279556b.js"
import"./playerName-c3c6c732.js"
import"./closest-7cf61e52.js"
import"./fshOpen-d480412d.js"
function v(t){return o(l(t).children[3].childNodes[0])}function B(t){return a(l(t).children[2].children[0])}function y(t){const r=j.find((r=>((t,r)=>b(r.nicks).includes(h(t)))(t,r)))
if(r)return r.id}function M(t){const r=/`~(.*)~`/.exec(v(t))
return r?(e=r[1],b(e).map(y).filter((t=>t)).join(";")):""
var e}const S=[["pmBuffBtn",function(t){const{target:r}=t
g(B(r),M(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!f("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function T(t){const{target:r}=t,e=S.find((t=>c(r,t)))
e&&e[1](t)}const k=t=>[o(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){s(t.rows,6,0).map(k).forEach((([t,r])=>{m(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${d+t}">Send</a> | <a class="pmSecureUrl" href="${u+t}">Trade</a> ]`)}))}(t),e(1),function(t){n(t,T)}(t))}function C(){"1"===p("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default C
//# sourceMappingURL=privateMsg-513b12be.js.map
