import{bn as t,bP as e,ck as n,am as s,bS as a,ao as r,g as o,h as i,N as c,aa as l,aW as f,cO as u,q as d,B as p,cy as b,r as h,e as m,aC as y,dd as g,p as v,o as x,s as k,bk as w,bl as L,aj as P,A as C,e0 as B,n as S,de as T,dK as I,e1 as A,aK as E,aY as N,bs as j,ba as R}from"./calfSystem-BGW9cdWN.js"
import{o as D}from"./onlinePlayersPage-Bx91ptF9.js"
import{b as F}from"./buffObj-BIwiFUIW.js"
import{h as M}from"./simpleCheckbox-BIjRR8-3.js"
import{o as O}from"./onlineDot-CgFdovI4.js"
import"./isChecked-D_0do7nT.js"
function q(s,a,r){const o=function(t,s,a){let r=t
const o=s.split("."),i=o.length
for(let t=0;t<i;t+=1){if(e(!r,!n(r)))return a
r=r[o[t]]}return r}(s,a,r)
return t(o)?r:o}function G(t,e){const n=q(t,s.sortBy,"a"),r=q(e,s.sortBy,"a")
return o=a(n,r),s.sortAsc?o:-o
var o}function H(t){return`<option value="${t.id}">${t.name}</option>`}const V={header:"Buff",what:"buff",control:()=>`<select style="width:140px;" id="selectedBuff">${F.map(H).join("")}</select>`,cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},Y={header:"Other",what:"text",control:()=>`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${r("textToSearchFor")||""}">`,cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"}
let _=null
function K(){_=o("bufferProgress")}function U(t,e){i(t,_),e&&(_.style.color=e)}let Q=0
function W(){return Q?500:1}function z(t,e){return`<tr><td class="findLabel"># potential ${t.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${M("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${e||""}"></td></tr>`}function J(t,e){return`<table class="fshFind"><tbody>${function(t){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${t.header}</h1></td><td class="findLabel">Select ${t.what} to search for:</td><td>${t.control()}</td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Level ${t.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}(t)}${function(t){return`<tr><td class="leftLabel">${t.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}(t)}${z(t,e)}${function(t){return`<tr><td class="findLabel"># ${t.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}(t)}${function(t){return`<tr><td class="findLabel">Find ${t.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}(t)}</tbody></table>${function(t){return`<br><h1>Potential ${t.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}(t)}<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>`}const X=/Level<br>(?<lvl>\d+)%/
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
return parseInt(h(X,t),10)||-1}return 0}(n),function(t){return d('img.tip-static[data-tipped*="Extend"]',t)}(n)),function(t,e){const n=t.insertCell(2)
e.forEach(m(et,n))}(r,s)}function st(t,e){const n=c(t),s=o("profile-bio",n)
if(!s)return
const a=s.innerHTML,r=function(t,e){const n=new RegExp(`^.*\\b(?:(?:${e.replace(/,/g,")|(?:")}))\\b.*$`,"gim")
return[...t.matchAll(n)].map((t=>t[0]))}(a,e.findBuffNicks)
r.length>0&&nt(a,e,n,r),function(){const t=o("buffersProcessed"),e=parseInt(l(o("potentialBuffers")),10),n=parseInt(l(t),10)
i(n+1,t),e===n+1&&U("Done.","blue")}()}let at=0,rt=0,ot=0,it=0,ct=0,lt=0,ft=0
function ut(t,e){i(t,o(e))}async function dt(t){!function(t,e){st(e,{href:t,findBuffNicks:at})}(t,await R(t))}function pt(){ut(ot.length,"potentialBuffers"),ot.length<=0?U("Done.","blue"):(U("Parsing player data ...","green"),ot.forEach(dt))}function bt(t,e){N()!==L(e)&&ot.push(t)}function ht(t,e){if(n=function(t){return parseInt($(t).find("td:eq(2)").text().replace(/,/g,""),10)}(e),n>=rt&&n>=W()){bt($(e).find("td:eq(1) a").attr("href"),$(e).find("td:eq(1) a").text())}var n}async function mt(t,e,n){const s=function(t,e){return 1===t?Math.round(it*e/50):t+1}(t,e)
U(`Parsing online page ${t} ...`)
n(await D(s))}function yt(t){const e=c(t),n=function(t){return parseInt($(t).find('input[name="page"]:last').val().replace(/\D/g,""),10)}(e)
1!==n&&function(t){$(t).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(ht)}(e)
const s=function(t){return parseInt($(t).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}(e)
n<s?mt(n,s,yt):pt()}async function gt(){if(it=parseInt(o("onlinePlayers").value,10),0!==it){yt(await D(1))}else pt()}function $t(t){const{tipped:e}=t.dataset,{mins:n}=T(e);(function(t,e,n){return t<5&&e>=rt&&e>=n})(n,Number(h(I,e)),W())&&bt(t.href,l(t))}function vt(t){lt.push(j+t)}async function xt(t){!function(t){const e=c(t)
S('#profileLeftColumn a[data-tipped*="Last Activity"]',e).forEach($t),ft+=1,ft===lt.length&&gt()}(await R(t))}function kt(t){const e=c(t)
o("guildMembers").checked&&S('#pCC a[data-tipped*="<td>VL:</td>"]',e).forEach($t),lt=[],lt.push(A),E(ct).forEach(vt),ft=0,o("alliesEnemies").checked?lt.forEach(xt):gt()}function wt(t,e){return 0!==e}function Lt(t){t.deleteRow(-1)}function Pt(){k("find buffs","clear results"),function(){const t=o("buffTable")
w(t.rows).filter(wt).forEach(m(Lt,t))}(),ut("","buffNicks"),U("Idle.","black"),ut("","potentialBuffers"),ut("0","buffersProcessed")}function Ct(t){C()||(ut(at,"buffNicks"),U(`Gathering list of ${t} ...`,"green"),Q=o("level175").checked,ut("0","buffersProcessed"),ot=[],ct=o("extraProfile").value,P("extraProfile",ct),async function(){kt(await B())}())}function Bt(t,e){return t===e.id}function St(){k("find buffs","findBuffsStart")
const t=parseInt($("#selectedBuff").val(),10),e=F.find(m(Bt,t))
at=e.nicks,rt=e.lvl,Ct("potential buffers")}function Tt(){k("find buffs","findOtherStart")
const t=$("#textToSearchFor").val().split(",").map(L).join(",")
P("textToSearchFor",t),at=t,rt=1,Ct("profiles to search")}function It(){ct=r("extraProfile")}function At(t){x(o("findbuffsbutton"),t,!0)}function Et(){x(o("clearresultsbutton"),Pt,!0)}function Nt(t){const e=t||v()
s.sortBy="name",s.sortAsc=!0,F.sort(G),It(),i(J(V,ct),e),K(),At(St),Et()}function jt(t){const e=t||v()
It(),i(J(Y,ct),e),K(),At(Tt),Et()}export{Nt as injectFindBuffs,jt as injectFindOther}
//# sourceMappingURL=findBuffs-auVPJ0Ps.js.map
