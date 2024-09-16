import{g as t}from"./guildManage-XoowwLzs.js"
import{o as e}from"./onlinePlayersPage-CNHuSg_p.js"
import{b2 as n,br as s,bT as a,ag as r,bu as o,ai as i,g as c,d as l,H as f,a8 as u,x as d,c3 as p,r as b,c as h,aB as m,cc as g,q as y,cH as v,p as x,o as w,s as k,b1 as L,ae as P,b0 as C,w as T,k as B,d2 as E,dn as S,aD as j,b7 as I,aT as A}from"./calfSystem-CyLCrHqa.js"
import{c as N}from"./csvSplit-C11e1rAj.js"
import{l as D}from"./lastActivity-CmZHrtR_.js"
import{b as R}from"./buffObj-BIwiFUIW.js"
import{h as F}from"./simpleCheckbox-BdfFBKDo.js"
import{o as M}from"./onlineDot-B3Dg-XBc.js"
import{i as H}from"./intValue-C7nTQec1.js"
import"./regExpGroups-mnVKS3rG.js"
import"./isChecked-D_0do7nT.js"
function G(t,e,r){const o=function(t,e,n){let r=t
const o=e.split("."),i=o.length
for(let t=0;t<i;t+=1){if(s(!r,!a(r)))return n
r=r[o[t]]}return r}(t,e,r)
return n(o)?r:o}function O(t,e){const n=G(t,r.sortBy,"a"),s=G(e,r.sortBy,"a")
return a=o(n,s),r.sortAsc?a:-a
var a}function q(t){return`<option value="${t.id}">${t.name}</option>`}const V={header:"Buff",what:"buff",control:()=>`<select style="width:140px;" id="selectedBuff">${R.map(q).join("")}</select>`,cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},_={header:"Other",what:"text",control:()=>`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${i("textToSearchFor")||""}">`,cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"}
let Y,Q
function U(){Y=c("bufferProgress")}function X(t,e){l(t,Y),e&&(Y.style.color=e)}function z(){return Q?500:1}function J(t,e){return`<tr><td class="findLabel"># potential ${t.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${F("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${e||""}"></td></tr>`}function K(t,e){return`<table class="fshFind"><tbody>${function(t){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${t.header}</h1></td><td class="findLabel">Select ${t.what} to search for:</td><td>${t.control()}</td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Level ${t.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}(t)}${function(t){return`<tr><td class="leftLabel">${t.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}(t)}${J(t,e)}${function(t){return`<tr><td class="findLabel"># ${t.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Find ${t.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}(t)}</tbody></table>${function(t){return`<br><h1>Potential ${t.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}(t)}<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>`}const W=/Level<br>(?<lvl>\d+)%/
function Z(t,e,n,s){const a=function(t){return u(m("h1",c("pCC",t))[0])}(t),r=function(t){return H(u(c("profileLeftColumn",t).children[4].children[0].rows[0].cells[1]))}(t),o=function(t){return parseInt(u(c(v,t)),10)}(t),i=parseInt(n[1],10)
return`<nobr>${M({min:i})}&nbsp;<a href="${e.href}" target="new" class="tip-static" data-tipped="${s.replace(/['"\n]/g,"")}">${a}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${a}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${r}&nbsp;(${o})`}function tt(t){window.openQuickMsgDialog(t.target.getAttribute("target_player"))}function et(t,e){t.innerHTML+=`${e}<br>`}function nt(t,e,n,s){const a=function(t){const e=c("pCC",t),n=m("p",e)[0]
return g(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/,u(n))}(n),r=c("buffTable").insertRow(-1)
!function(t){const e=t.newRow.insertCell(0)
e.style.verticalAlign="top",l(Z(t.doc,t.callback,t.lastActivity,t.bioCellHtml),e),$(".a-reply").on("click",tt)}({newRow:r,doc:n,callback:e,lastActivity:a,bioCellHtml:t}),function(t,e,n,s){const a=t.insertCell(1)
l(function(t,e,n){let s="fshRed"
e>=100&&(s="fshGreen")
let a='<span class="fshRed">No</span>'
return n&&(a='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${t[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${s}">${e}%</td><td class="resLbl">Extend:</td><td class="resVal">${a}</td></tr>`}(e,n,s),a),a.style.verticalAlign="top"}(r,a,function(t){const e=d("a",c("profileLeftColumn",t)).find(p("Sustain"))
if(e){const t=e.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped
return parseInt(b(W,t),10)||-1}return 0}(n),function(t){return y('img.tip-static[data-tipped*="Extend"]',t)}(n)),function(t,e){const n=t.insertCell(2)
e.forEach(h(et,n))}(r,s)}function st(t,e){const n=f(t),s=c("profile-bio",n).innerHTML,a=function(t,e){const n=new RegExp(`^.*\\b(?:(?:${e.replace(/,/g,")|(?:")}))\\b.*$`,"gim")
return[...t.matchAll(n)].map((t=>t[0]))}(s,e.findBuffNicks)
a.length>0&&nt(s,e,n,a),function(){const t=c("buffersProcessed"),e=parseInt(u(c("potentialBuffers")),10),n=parseInt(u(t),10)
l(n+1,t),e===n+1&&X("Done.","blue")}()}let at=0,rt=0,ot=0,it=0,ct=0,lt=0,ft=0
function ut(t,e){l(t,c(e))}async function dt(t){!function(t,e){st(e,{href:t,findBuffNicks:at})}(t,await A(t))}function pt(){ut(ot.length,"potentialBuffers"),ot.length<=0?X("Done.","blue"):(X("Parsing player data ...","green"),ot.forEach(dt))}function bt(t,e){j()!==L(e)&&ot.push(t)}function ht(t,e){if(n=function(t){return parseInt($(t).find("td:eq(2)").text().replace(/,/g,""),10)}(e),n>=rt&&n>=z()){bt($(e).find("td:eq(1) a").attr("href"),$(e).find("td:eq(1) a").text())}var n}async function mt(t,n,s){const a=function(t,e){return 1===t?Math.round(it*e/50):t+1}(t,n)
X(`Parsing online page ${t} ...`)
s(await e(a))}function gt(t){const e=f(t),n=function(t){return parseInt($(t).find('input[name="page"]:last').val().replace(/\D/g,""),10)}(e)
1!==n&&function(t){$(t).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(ht)}(e)
const s=function(t){return parseInt($(t).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}(e)
n<s?mt(n,s,gt):pt()}async function yt(){if(it=parseInt(c("onlinePlayers").value,10),0!==it){gt(await e(1))}else pt()}function $t(t){const{tipped:e}=t.dataset,{mins:n}=D(e);(function(t,e,n){return t<5&&e>=rt&&e>=n})(n,Number(b(E,e)),z())&&bt(t.href,u(t))}function vt(t){lt.push(I+t)}async function xt(t){!function(t){const e=f(t)
B('#profileLeftColumn a[data-tipped*="Last Activity"]',e).forEach($t),ft+=1,ft===lt.length&&yt()}(await A(t))}function wt(t){const e=f(t)
c("guildMembers").checked&&B('#pCC a[data-tipped*="<td>VL:</td>"]',e).forEach($t),lt=[],lt.push(S),N(ct).forEach(vt),ft=0,c("alliesEnemies").checked?lt.forEach(xt):yt()}function kt(t,e){return 0!==e}function Lt(t){t.deleteRow(-1)}function Pt(){k("find buffs","clear results"),function(){const t=c("buffTable")
C(t.rows).filter(kt).forEach(h(Lt,t))}(),ut("","buffNicks"),X("Idle.","black"),ut("","potentialBuffers"),ut("0","buffersProcessed")}function Ct(e){T()||(ut(at,"buffNicks"),X(`Gathering list of ${e} ...`,"green"),Q=c("level175").checked,ut("0","buffersProcessed"),ot=[],ct=c("extraProfile").value,P("extraProfile",ct),async function(){wt(await t())}())}function Tt(t,e){return t===e.id}function Bt(){k("find buffs","findBuffsStart")
const t=parseInt($("#selectedBuff").val(),10),e=R.find(h(Tt,t))
at=e.nicks,rt=e.lvl,Ct("potential buffers")}function Et(){k("find buffs","findOtherStart")
const t=$("#textToSearchFor").val().split(",").map(L).join(",")
P("textToSearchFor",t),at=t,rt=1,Ct("profiles to search")}function St(){ct=i("extraProfile")}function jt(t){w(c("findbuffsbutton"),t,!0)}function It(){w(c("clearresultsbutton"),Pt,!0)}function At(t){const e=t||x()
r.sortBy="name",r.sortAsc=!0,R.sort(O),St(),l(K(V,ct),e),U(),jt(Bt),It()}function Nt(t){const e=t||x()
St(),l(K(_,ct),e),U(),jt(Et),It()}export{At as injectFindBuffs,Nt as injectFindOther}
//# sourceMappingURL=findBuffs-qqS0rxo0.js.map
