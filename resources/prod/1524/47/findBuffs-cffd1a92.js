import{u as t,z as e,B as n,v as s,C as a,D as r,g as o,aG as i,t as c,b as l,bF as f,I as d,c as u,o as p,p as b,ar as h,Z as m,y as g,E as y,bM as x,bA as v,aJ as k,aK as L}from"./calfSystem-a2fd9017.js"
import{b as w}from"./buffObj-68975e43.js"
import{c as C}from"./csvSplit-e3b3e000.js"
import{o as P}from"./onlinePlayersPage-517f6747.js"
import{h as I}from"./simpleCheckbox-d5d2e0cb.js"
import{i as B}from"./intValue-e4ce6bb5.js"
import{o as E}from"./onlineDot-20a56643.js"
import{p as S}from"./playerName-fab1659b.js"
import{a as T}from"./stringSort-a1f3c520.js"
import"./isChecked-5c7617f4.js"
function j(t,e){return`<tr><td class="findLabel"># potential ${t.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${I("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${e||""}"></td></tr>`}function N(t,e){return`<table class="fshFind"><tbody>${function(t){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${t.header}</h1></td><td class="findLabel">Select ${t.what} to search for:</td><td>${t.control()}</td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Level ${t.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}(t)}${function(t){return`<tr><td class="leftLabel">${t.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}(t)}${j(t,e)}${function(t){return`<tr><td class="findLabel"># ${t.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Find ${t.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}(t)}</tbody></table>${function(t){return`<br><h1>Potential ${t.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}(t)}<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>`}let A
function D(){A=e("bufferProgress")}function F(t,e){n(t,A),e&&(A.style.color=e)}const R=/Level<br>(\d+)%/
function M(t,n,s,r){const o=function(t){return a(l("h1",e("pCC",t))[0])}(t),i=function(t){return B(a(e("profileLeftColumn",t).children[4].children[0].rows[0].cells[1]))}(t),c=function(t){return parseInt(a(e(f,t)),10)}(t),d=parseInt(s[1],10)
return`<nobr>${E({min:d})}&nbsp;<a href="${n.href}" target="new" class="tip-static" data-tipped="${r.replace(/'|"|\n/g,"")}">${o}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${o}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${i}&nbsp;(${c})`}function G(t){window.openQuickMsgDialog(t.target.getAttribute("target_player"))}function V(t,e){t.innerHTML+=`${e}<br>`}function H(t,s,f,d){const u=function(t){const n=e("pCC",t),s=l("p",n)[0]
return/(\d+) mins, (\d+) secs/.exec(a(s))}(f),p=e("buffTable").insertRow(-1)
!function(t){const e=t.newRow.insertCell(0)
e.style.verticalAlign="top",n(M(t.doc,t.callback,t.lastActivity,t.bioCellHtml),e),$(".a-reply").on("click",G)}({newRow:p,doc:f,callback:s,lastActivity:u,bioCellHtml:t}),function(t,e,s,a){const r=t.insertCell(1)
n(function(t,e,n){let s="fshRed"
e>=100&&(s="fshGreen")
let a='<span class="fshRed">No</span>'
return n&&(a='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${t[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${s}">${e}%</td><td class="resLbl">Extend:</td><td class="resVal">${a}</td></tr>`}(e,s,a),r),r.style.verticalAlign="top"}(p,u,function(t){const n=o("a",e("profileLeftColumn",t)).find(i("Sustain"))
if(n){const t=n.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped
return parseInt(R.exec(t)[1],10)||-1}return 0}(f),function(t){return r('img.tip-static[data-tipped*="Extend"]',t)}(f)),function(t,e){const n=t.insertCell(2)
e.forEach(c(V,n))}(p,d)}function O(t,r){const o=s(t),i=e("profile-bio",o).innerHTML,c=function(t,e){const n=new RegExp(`^.*\\b(?:(?:${e.replace(/,/g,")|(?:")}))\\b.*$`,"gim")
return[...t.matchAll(n)].map((t=>t[0]))}(i,r.findBuffNicks)
c.length>0&&H(i,r,o,c),function(){const t=e("buffersProcessed"),s=parseInt(a(e("potentialBuffers")),10),r=parseInt(a(t),10)
n(r+1,t),s===r+1&&F("Done.","blue")}()}function q(t){return`<option value="${t.id}">${t.name}</option>`}const _={header:"Buff",what:"buff",control:()=>`<select style="width:140px;" id="selectedBuff">${w.map(q).join("")}</select>`,cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},z={header:"Other",what:"text",control:()=>`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${d("textToSearchFor")||""}">`,cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"}
let J,K,Q,U,Y,Z,W,X
function tt(){return J?500:1}function et(t,e){O(e,{href:t,findBuffNicks:K})}function nt(t){L(t).then(c(et,t))}function st(){n(U.length,e("potentialBuffers")),U.length<=0?F("Done.","blue"):(F("Parsing player data ...","green"),U.forEach(nt))}function at(t,e){S()!==e.trim()&&U.push(t)}function rt(t,e){if((n=function(t){return parseInt($(t).find("td:eq(2)").text().replace(/,/g,""),10)}(e))>=Q&&n>=tt()){at($(e).find("td:eq(1) a").attr("href"),$(e).find("td:eq(1) a").text())}var n}function ot(t,e,n){const s=function(t,e){return 1===t?Math.round(Y*e/50):t+1}(t,e)
F(`Parsing online page ${t} ...`),P(s).then(n)}function it(t){const e=s(t),n=function(t){return parseInt($(t).find('input[name="page"]:last').val().replace(/\D/g,""),10)}(e)
1!==n&&function(t){$(t).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(rt)}(e)
const a=function(t){return parseInt($(t).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}(e)
n<a?ot(n,a,it):st()}function ct(){Y=parseInt(e("onlinePlayers").value,10),0!==Y?P(1).then(it):st()}function lt(t){const{tipped:e}=t.dataset;(function(t,e,n){return t<5&&e>=Q&&e>=n})(function(t){const e=v.exec(t),n=parseInt(e[1],10),s=parseInt(e[2],10)+24*n
return parseInt(e[3],10)+60*s}(e),Number(/VL:.+?(\d+)/.exec(e)[1]),tt())&&at(t.href,a(t))}function ft(t){const e=s(t)
y('#profileLeftColumn a[data-tipped*="Last Activity"]',e).forEach(lt),X+=1,X===W.length&&ct()}function dt(t){W.push(k+t)}function ut(t){L(t).then(ft)}function pt(t){const n=s(t)
e("guildMembers").checked&&y('#pCC a[data-tipped*="<td>VL:</td>"]',n).forEach(lt),W=[],W.push(x),C(Z).forEach(dt),X=0,e("alliesEnemies").checked?W.forEach(ut):ct()}function bt(t,e){return 0!==e}function ht(t){t.deleteRow(-1)}function mt(){const t=e("buffTable")
h(t.rows).filter(bt).forEach(c(ht,t)),n("",e("buffNicks")),F("Idle.","black"),n("",e("potentialBuffers")),n("0",e("buffersProcessed"))}function gt(s){g()||(n(K,e("buffNicks")),F(`Gathering list of ${s} ...`,"green"),J=e("level175").checked,n("0",e("buffersProcessed")),U=[],Z=e("extraProfile").value,m("extraProfile",Z),t({cmd:"guild",subcmd:"manage"}).then(pt))}function yt(t,e){return t===e.id}function $t(){const t=parseInt($("#selectedBuff").val(),10),e=w.find(c(yt,t))
K=e.nicks,Q=e.lvl,gt("potential buffers")}function xt(){const t=$("#textToSearchFor").val().replace(/\s*,\s*/,",")
m("textToSearchFor",t),K=t,Q=1,gt("profiles to search")}function vt(){Z=d("extraProfile")}function kt(t){p(e("findbuffsbutton"),t,!0)}function Lt(){p(e("clearresultsbutton"),mt,!0)}function wt(t){const e=t||b
u.sortBy="name",u.sortAsc=!0,w.sort(T),vt(),n(N(_,Z),e),D(),kt($t),Lt()}function Ct(t){const e=t||b
vt(),n(N(z,Z),e),D(),kt(xt),Lt()}export{Z as extraProfile,wt as injectFindBuffs,Ct as injectFindOther}
//# sourceMappingURL=findBuffs-cffd1a92.js.map