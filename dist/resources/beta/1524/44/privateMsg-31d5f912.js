import{a as t,g as r}from"./addLogColoring-44e5420a.js"
import{a as s}from"./addLogWidgets-594f9254.js"
import{d as e}from"./dataRows-25616e3d.js"
import{H as a,C as o,S as i,o as n,ae as c,I as f,R as p,i as d,af as m,ag as u}from"./calfSystem-a8d582b6.js"
import{c as l}from"./closestTr-9db047d3.js"
import{b}from"./buffObj-1b3bee9b.js"
import{c as j}from"./csvSplit-d22d07ed.js"
import{o as g}from"./openQuickBuffByName-05198165.js"
import{t as h}from"./toLowerCase-c964d32b.js"
import"./createStyle-d4f6dc05.js"
import"./doBuffLinkClick-96c6b509.js"
import"./parseDateAsTimestamp-e85e174f.js"
import"./insertHtmlAfterEnd-7c6126dc.js"
import"./currentGuildId-6d2e1d9d.js"
import"./getMembrList-ba181b15.js"
import"./cmdExport-70bb9819.js"
import"./indexAjaxJson-f3656c2a.js"
import"./idb-d8c9a883.js"
import"./addCommas-aab57e5e.js"
import"./myStats-a3bdf6c3.js"
import"./getProfile-d9b6d52e.js"
import"./playerName-9ba8ea6b.js"
import"./closest-7cf61e52.js"
import"./fshOpen-d480412d.js"
function v(t){return a(l(t).children[3].childNodes[0])}function B(t){return o(l(t).children[2].children[0])}function y(t){const r=b.find((r=>((t,r)=>j(r.nicks).includes(h(t)))(t,r)))
if(r)return r.id}function M(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],j(s).map(y).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
g(B(r),M(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!f("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>c(r,t)))
s&&s[1](t)}const T=t=>[a(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){e(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${m+t}">Send</a> | <a class="pmSecureUrl" href="${u+t}">Trade</a> ]`)}))}(t),s(1),function(t){n(t,k)}(t))}function C(){"1"===p("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default C
//# sourceMappingURL=privateMsg-31d5f912.js.map
