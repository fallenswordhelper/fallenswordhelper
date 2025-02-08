import{bn as t,bT as e,cm as n,ao as s,bX as a,aq as r,g as o,e as i,L as c,ad as l,aV as f,cO as u,q as d,z as p,cz as b,r as h,d as m,aC as y,d9 as g,p as v,o as x,s as k,bk as w,bl as L,al as C,y as P,d$ as B,l as T,da as I,dB as S,e0 as E,aK as N,aX as A,br as j,ba as R}from"./calfSystem-BldO1y8X.js"
import{o as D}from"./onlinePlayersPage-DLaThPjl.js"
import{b as F}from"./buffObj-BIwiFUIW.js"
import{h as M}from"./simpleCheckbox-Fq246LXr.js"
import{o as O}from"./onlineDot-DorFY6zx.js"
import"./isChecked-D_0do7nT.js"
function q(s,a,r){const o=function(t,s,a){let r=t
const o=s.split("."),i=o.length
for(let t=0;t<i;t+=1){if(e(!r,!n(r)))return a
r=r[o[t]]}return r}(s,a,r)
return t(o)?r:o}function G(t,e){const n=q(t,s.sortBy,"a"),r=q(e,s.sortBy,"a")
return o=a(n,r),s.sortAsc?o:-o
var o}function H(t){return`<option value="${t.id}">${t.name}</option>`}const V={header:"Buff",what:"buff",control:()=>`<select style="width:140px;" id="selectedBuff">${F.map(H).join("")}</select>`,cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},_={header:"Other",what:"text",control:()=>`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${r("textToSearchFor")||""}">`,cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"}
let z
function K(){z=o("bufferProgress")}function X(t,e){i(t,z),e&&(z.style.color=e)}let Q=0
function U(){return Q?500:1}function Y(t,e){return`<tr><td class="findLabel"># potential ${t.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${M("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${e||""}"></td></tr>`}function J(t,e){return`<table class="fshFind"><tbody>${function(t){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${t.header}</h1></td><td class="findLabel">Select ${t.what} to search for:</td><td>${t.control()}</td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Level ${t.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}(t)}${function(t){return`<tr><td class="leftLabel">${t.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}(t)}${Y(t,e)}${function(t){return`<tr><td class="findLabel"># ${t.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Find ${t.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}(t)}</tbody></table>${function(t){return`<br><h1>Potential ${t.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}(t)}<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>`}const W=/Level<br>(?<lvl>\d+)%/
function Z(t,e,n,s){const a=function(t){return l(f("h1",o("pCC",t))[0])}(t),r=function(t){return y(l(o("profileLeftColumn",t).children[4].children[0].rows[0].cells[1]))}(t),i=function(t){return parseInt(l(o(g,t)),10)}(t),c=parseInt(n[1],10)
return`<nobr>${O({min:c})}&nbsp;<a href="${e.href}" target="new" class="tip-static" data-tipped="${s.replace(/['"\n]/g,"")}">${a}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${a}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${r}&nbsp;(${i})`}function tt(t){window.openQuickMsgDialog(t.target.getAttribute("target_player"))}function et(t,e){t.innerHTML+=`${e}<br>`}function nt(t,e,n,s){const a=function(t){const e=o("pCC",t),n=f("p",e)[0]
return u(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/,l(n))}(n),r=o("buffTable").insertRow(-1)
!function(t){const e=t.newRow.insertCell(0)
e.style.verticalAlign="top",i(Z(t.doc,t.callback,t.lastActivity,t.bioCellHtml),e),$(".a-reply").on("click",tt)}({newRow:r,doc:n,callback:e,lastActivity:a,bioCellHtml:t}),function(t,e,n,s){const a=t.insertCell(1)
i(function(t,e,n){let s="fshRed"
e>=100&&(s="fshGreen")
let a='<span class="fshRed">No</span>'
return n&&(a='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${t[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${s}">${e}%</td><td class="resLbl">Extend:</td><td class="resVal">${a}</td></tr>`}(e,n,s),a),a.style.verticalAlign="top"}(r,a,function(t){const e=p("a",o("profileLeftColumn",t)).find(b("Sustain"))
if(e){const t=e.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped
return parseInt(h(W,t),10)||-1}return 0}(n),function(t){return d('img.tip-static[data-tipped*="Extend"]',t)}(n)),function(t,e){const n=t.insertCell(2)
e.forEach(m(et,n))}(r,s)}function st(t,e){const n=c(t),s=o("profile-bio",n)
if(!s)return
const a=s.innerHTML,r=function(t,e){const n=new RegExp(`^.*\\b(?:(?:${e.replace(/,/g,")|(?:")}))\\b.*$`,"gim")
return[...t.matchAll(n)].map((t=>t[0]))}(a,e.findBuffNicks)
r.length>0&&nt(a,e,n,r),function(){const t=o("buffersProcessed"),e=parseInt(l(o("potentialBuffers")),10),n=parseInt(l(t),10)
i(n+1,t),e===n+1&&X("Done.","blue")}()}let at=0,rt=0,ot=0,it=0,ct=0,lt=0,ft=0
function ut(t,e){i(t,o(e))}async function dt(t){!function(t,e){st(e,{href:t,findBuffNicks:at})}(t,await R(t))}function pt(){ut(ot.length,"potentialBuffers"),ot.length<=0?X("Done.","blue"):(X("Parsing player data ...","green"),ot.forEach(dt))}function bt(t,e){A()!==L(e)&&ot.push(t)}function ht(t,e){if(n=function(t){return parseInt($(t).find("td:eq(2)").text().replace(/,/g,""),10)}(e),n>=rt&&n>=U()){bt($(e).find("td:eq(1) a").attr("href"),$(e).find("td:eq(1) a").text())}var n}async function mt(t,e,n){const s=function(t,e){return 1===t?Math.round(it*e/50):t+1}(t,e)
X(`Parsing online page ${t} ...`)
n(await D(s))}function yt(t){const e=c(t),n=function(t){return parseInt($(t).find('input[name="page"]:last').val().replace(/\D/g,""),10)}(e)
1!==n&&function(t){$(t).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(ht)}(e)
const s=function(t){return parseInt($(t).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}(e)
n<s?mt(n,s,yt):pt()}async function gt(){if(it=parseInt(o("onlinePlayers").value,10),0!==it){yt(await D(1))}else pt()}function $t(t){const{tipped:e}=t.dataset,{mins:n}=I(e);(function(t,e,n){return t<5&&e>=rt&&e>=n})(n,Number(h(S,e)),U())&&bt(t.href,l(t))}function vt(t){lt.push(j+t)}async function xt(t){!function(t){const e=c(t)
T('#profileLeftColumn a[data-tipped*="Last Activity"]',e).forEach($t),ft+=1,ft===lt.length&&gt()}(await R(t))}function kt(t){const e=c(t)
o("guildMembers").checked&&T('#pCC a[data-tipped*="<td>VL:</td>"]',e).forEach($t),lt=[],lt.push(E),N(ct).forEach(vt),ft=0,o("alliesEnemies").checked?lt.forEach(xt):gt()}function wt(t,e){return 0!==e}function Lt(t){t.deleteRow(-1)}function Ct(){k("find buffs","clear results"),function(){const t=o("buffTable")
w(t.rows).filter(wt).forEach(m(Lt,t))}(),ut("","buffNicks"),X("Idle.","black"),ut("","potentialBuffers"),ut("0","buffersProcessed")}function Pt(t){P()||(ut(at,"buffNicks"),X(`Gathering list of ${t} ...`,"green"),Q=o("level175").checked,ut("0","buffersProcessed"),ot=[],ct=o("extraProfile").value,C("extraProfile",ct),async function(){kt(await B())}())}function Bt(t,e){return t===e.id}function Tt(){k("find buffs","findBuffsStart")
const t=parseInt($("#selectedBuff").val(),10),e=F.find(m(Bt,t))
at=e.nicks,rt=e.lvl,Pt("potential buffers")}function It(){k("find buffs","findOtherStart")
const t=$("#textToSearchFor").val().split(",").map(L).join(",")
C("textToSearchFor",t),at=t,rt=1,Pt("profiles to search")}function St(){ct=r("extraProfile")}function Et(t){x(o("findbuffsbutton"),t,!0)}function Nt(){x(o("clearresultsbutton"),Ct,!0)}function At(t){const e=t||v()
s.sortBy="name",s.sortAsc=!0,F.sort(G),St(),i(J(V,ct),e),K(),Et(Tt),Nt()}function jt(t){const e=t||v()
St(),i(J(_,ct),e),K(),Et(It),Nt()}export{At as injectFindBuffs,jt as injectFindOther}
//# sourceMappingURL=findBuffs-1AwwXFo1.js.map
