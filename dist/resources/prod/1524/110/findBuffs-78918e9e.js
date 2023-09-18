import{g as t}from"./guildManage-96b4751a.js"
import{o as e}from"./onlinePlayersPage-b866e3ba.js"
import{aW as n,bj as s,bG as a,ac as o,bm as r,ae as i,g as c,s as l,G as f,a4 as u,x as d,bU as p,r as b,c as h,av as m,c1 as y,q as g,cu as v,p as x,o as w,aV as k,aa as L,aU as P,w as C,j,cN as B,d0 as E,ay as I,a$ as S,aL as T}from"./calfSystem-929ac228.js"
import{c as A}from"./csvSplit-c32f193d.js"
import{l as N}from"./lastActivity-422d41fa.js"
import{b as F}from"./buffObj-18893259.js"
import{h as R}from"./simpleCheckbox-9dbdc695.js"
import{o as D}from"./onlineDot-2726d9a2.js"
import{i as M}from"./intValue-e1798d0a.js"
import"./now-6f22aec9.js"
import"./regExpGroups-9d5b9f10.js"
import"./isChecked-3968d2ec.js"
function G(t,e,o){const r=function(t,e,n){let o=t
const r=e.split("."),i=r.length
for(let t=0;t<i;t+=1){if(s(!o,!a(o)))return n
o=o[r[t]]}return o}(t,e,o)
return n(r)?o:r}function V(t,e){const n=G(t,o.sortBy,"a"),s=G(e,o.sortBy,"a")
return a=r(n,s),o.sortAsc?a:-a
var a}function q(t){return`<option value="${t.id}">${t.name}</option>`}const H={header:"Buff",what:"buff",control:()=>`<select style="width:140px;" id="selectedBuff">${F.map(q).join("")}</select>`,cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},O={header:"Other",what:"text",control:()=>`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${i("textToSearchFor")||""}">`,cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"}
let _,U
function Q(){_=c("bufferProgress")}function W(t,e){l(t,_),e&&(_.style.color=e)}function X(){return U?500:1}function Y(t,e){return`<tr><td class="findLabel"># potential ${t.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${R("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${e||""}"></td></tr>`}function z(t,e){return`<table class="fshFind"><tbody>${function(t){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${t.header}</h1></td><td class="findLabel">Select ${t.what} to search for:</td><td>${t.control()}</td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Level ${t.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}(t)}${function(t){return`<tr><td class="leftLabel">${t.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}(t)}${Y(t,e)}${function(t){return`<tr><td class="findLabel"># ${t.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Find ${t.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}(t)}</tbody></table>${function(t){return`<br><h1>Potential ${t.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}(t)}<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>`}const J=/Level<br>(?<lvl>\d+)%/
function K(t,e,n,s){const a=function(t){return u(m("h1",c("pCC",t))[0])}(t),o=function(t){return M(u(c("profileLeftColumn",t).children[4].children[0].rows[0].cells[1]))}(t),r=function(t){return parseInt(u(c(v,t)),10)}(t),i=parseInt(n[1],10)
return`<nobr>${D({min:i})}&nbsp;<a href="${e.href}" target="new" class="tip-static" data-tipped="${s.replace(/['"\n]/g,"")}">${a}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${a}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${o}&nbsp;(${r})`}function Z(t){window.openQuickMsgDialog(t.target.getAttribute("target_player"))}function tt(t,e){t.innerHTML+=`${e}<br>`}function et(t,e,n,s){const a=function(t){const e=c("pCC",t),n=m("p",e)[0]
return y(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/,u(n))}(n),o=c("buffTable").insertRow(-1)
!function(t){const e=t.newRow.insertCell(0)
e.style.verticalAlign="top",l(K(t.doc,t.callback,t.lastActivity,t.bioCellHtml),e),$(".a-reply").on("click",Z)}({newRow:o,doc:n,callback:e,lastActivity:a,bioCellHtml:t}),function(t,e,n,s){const a=t.insertCell(1)
l(function(t,e,n){let s="fshRed"
e>=100&&(s="fshGreen")
let a='<span class="fshRed">No</span>'
return n&&(a='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${t[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${s}">${e}%</td><td class="resLbl">Extend:</td><td class="resVal">${a}</td></tr>`}(e,n,s),a),a.style.verticalAlign="top"}(o,a,function(t){const e=d("a",c("profileLeftColumn",t)).find(p("Sustain"))
if(e){const t=e.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped
return parseInt(b(J,t),10)||-1}return 0}(n),function(t){return g('img.tip-static[data-tipped*="Extend"]',t)}(n)),function(t,e){const n=t.insertCell(2)
e.forEach(h(tt,n))}(o,s)}function nt(t,e){const n=f(t),s=c("profile-bio",n).innerHTML,a=function(t,e){const n=new RegExp(`^.*\\b(?:(?:${e.replace(/,/g,")|(?:")}))\\b.*$`,"gim")
return[...t.matchAll(n)].map((t=>t[0]))}(s,e.findBuffNicks)
a.length>0&&et(s,e,n,a),function(){const t=c("buffersProcessed"),e=parseInt(u(c("potentialBuffers")),10),n=parseInt(u(t),10)
l(n+1,t),e===n+1&&W("Done.","blue")}()}let st=0,at=0,ot=0,rt=0,it=0,ct=0,lt=0
function ft(t,e){l(t,c(e))}async function ut(t){!function(t,e){nt(e,{href:t,findBuffNicks:st})}(t,await T(t))}function dt(){ft(ot.length,"potentialBuffers"),ot.length<=0?W("Done.","blue"):(W("Parsing player data ...","green"),ot.forEach(ut))}function pt(t,e){I()!==k(e)&&ot.push(t)}function bt(t,e){if(n=function(t){return parseInt($(t).find("td:eq(2)").text().replace(/,/g,""),10)}(e),n>=at&&n>=X()){pt($(e).find("td:eq(1) a").attr("href"),$(e).find("td:eq(1) a").text())}var n}async function ht(t,n,s){const a=function(t,e){return 1===t?Math.round(rt*e/50):t+1}(t,n)
W(`Parsing online page ${t} ...`)
s(await e(a))}function mt(t){const e=f(t),n=function(t){return parseInt($(t).find('input[name="page"]:last').val().replace(/\D/g,""),10)}(e)
1!==n&&function(t){$(t).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(bt)}(e)
const s=function(t){return parseInt($(t).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}(e)
n<s?ht(n,s,mt):dt()}async function yt(){if(rt=parseInt(c("onlinePlayers").value,10),0!==rt){mt(await e(1))}else dt()}function gt(t){const{tipped:e}=t.dataset,{mins:n}=N(e);(function(t,e,n){return t<5&&e>=at&&e>=n})(n,Number(b(B,e)),X())&&pt(t.href,u(t))}function $t(t){ct.push(S+t)}async function vt(t){!function(t){const e=f(t)
j('#profileLeftColumn a[data-tipped*="Last Activity"]',e).forEach(gt),lt+=1,lt===ct.length&&yt()}(await T(t))}function xt(t){const e=f(t)
c("guildMembers").checked&&j('#pCC a[data-tipped*="<td>VL:</td>"]',e).forEach(gt),ct=[],ct.push(E),A(it).forEach($t),lt=0,c("alliesEnemies").checked?ct.forEach(vt):yt()}function wt(t,e){return 0!==e}function kt(t){t.deleteRow(-1)}function Lt(){!function(){const t=c("buffTable")
P(t.rows).filter(wt).forEach(h(kt,t))}(),ft("","buffNicks"),W("Idle.","black"),ft("","potentialBuffers"),ft("0","buffersProcessed")}function Pt(e){C()||(ft(st,"buffNicks"),W(`Gathering list of ${e} ...`,"green"),U=c("level175").checked,ft("0","buffersProcessed"),ot=[],it=c("extraProfile").value,L("extraProfile",it),async function(){xt(await t())}())}function Ct(t,e){return t===e.id}function jt(){const t=parseInt($("#selectedBuff").val(),10),e=F.find(h(Ct,t))
st=e.nicks,at=e.lvl,Pt("potential buffers")}function Bt(){const t=$("#textToSearchFor").val().split(",").map(k).join(",")
L("textToSearchFor",t),st=t,at=1,Pt("profiles to search")}function Et(){it=i("extraProfile")}function It(t){w(c("findbuffsbutton"),t,!0)}function St(){w(c("clearresultsbutton"),Lt,!0)}function Tt(t){const e=t||x()
o.sortBy="name",o.sortAsc=!0,F.sort(V),Et(),l(z(H,it),e),Q(),It(jt),St()}function At(t){const e=t||x()
Et(),l(z(O,it),e),Q(),It(Bt),St()}export{Tt as injectFindBuffs,At as injectFindOther}
//# sourceMappingURL=findBuffs-78918e9e.js.map
