import{a as te}from"./chunk-Z26SY6L7.js";import{a as m}from"./chunk-4X7OFWOH.js";import{a as z}from"./chunk-NXWNH4QP.js";import{a as K}from"./chunk-VXXHEXPM.js";import{a as Z}from"./chunk-6NEU6UCN.js";import"./chunk-F5O454QA.js";import{c as X}from"./chunk-5GO3NV2M.js";import{a as W}from"./chunk-4WXQAPIC.js";import{a as J}from"./chunk-5UTVEW3L.js";import{a as ee}from"./chunk-RBTBDUJC.js";import"./chunk-KX7QOYLT.js";import"./chunk-ZQEWS22E.js";import"./chunk-2C6JLCJG.js";import"./chunk-D4AVXNRB.js";import{a as T}from"./chunk-W5AN4HHX.js";import"./chunk-HEK53YUZ.js";import{b as C}from"./chunk-FJXTYPNU.js";import{a as i}from"./chunk-ACOFHTYC.js";import{a as n}from"./chunk-RVP3BZF7.js";import{a as S}from"./chunk-NN4SGQIC.js";import{a as re}from"./chunk-77WQU64M.js";import"./chunk-74REC633.js";import{a as Q}from"./chunk-NLWOAVHY.js";import{a as B}from"./chunk-F5Q5KOPJ.js";import"./chunk-7UPTHGH3.js";import{a as _}from"./chunk-4GU2HJD7.js";import{a as c}from"./chunk-BMHVDIFE.js";import"./chunk-XNL3JTED.js";import"./chunk-HNXEOKKJ.js";import{a}from"./chunk-PJX66I2Y.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import{a as w}from"./chunk-N7DXDYBU.js";import"./chunk-DZSOBYW3.js";import{a as Y}from"./chunk-LGQTZIMH.js";import"./chunk-J4Q2WCPP.js";import"./chunk-PIMWUW3S.js";import{a as E}from"./chunk-HCQKHTWX.js";import{a as k}from"./chunk-DARUUDAY.js";import"./chunk-2T7366JB.js";import"./chunk-O2JBL2UU.js";import{a as U}from"./chunk-RGSHZW7Q.js";import{a as I}from"./chunk-232WRRJZ.js";import"./chunk-7VVRRHE4.js";import{a as f}from"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import{a as g}from"./chunk-NVWIQHSW.js";import{b as y}from"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import"./chunk-VSTJBSW7.js";import{Ha as q,Q as G,l as O,x as j}from"./chunk-3DLQUZR2.js";import{a as H}from"./chunk-BUBKPU26.js";import{a as L}from"./chunk-4P22QABU.js";function xe(e){return`<option value="${e.id}">${e.name}</option>`}var ne={header:"Buff",what:"buff",control(){return`<select style="width:140px;" id="selectedBuff">${m.map(xe).join("")}</select>`},cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},oe={header:"Other",what:"text",control(){return`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${y("textToSearchFor")||""}">`},cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"};var A;function N(){A=n("bufferProgress")}function l(e,t){i(e,A),t&&(A.style.color=t)}var se;function F(){return se?500:1}function ie(){se=n("level175").checked}function ve(e){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${e.header}</h1></td><td class="findLabel">Select ${e.what} to search for:</td><td>${e.control()}</td></tr>`}function Le(e){return`<tr><td class="findLabel">Level ${e.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}function $e(e){return`<tr><td class="leftLabel">${e.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}function Be(){return Z("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}function Te(e,t){return`<tr><td class="findLabel"># potential ${e.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${Be()}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${t||""}"></td></tr>`}function Ce(e){return`<tr><td class="findLabel"># ${e.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}function Ee(e){return`<tr><td class="findLabel">Find ${e.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}function we(e){return`<br><h1>Potential ${e.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}function Ie(){return'<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>'}function P(e,t){return`<table class="fshFind"><tbody>${ve(e)}${Le(e)}${$e(e)}${Te(e,t)}${Ce(e)}${Ee(e)}</tbody></table>${we(e)}${Ie()}`}var Se=/Level<br>(?<lvl>\d+)%/;function ke(e,t){let r=new RegExp(`^.*\\b(?:(?:${t.replace(/,/g,")|(?:")}))\\b.*$`,"gim");return[...e.matchAll(r)].map(o=>o[0])}function Ae(e){let t=Q("a",n("profileLeftColumn",e)).find(ee("Sustain"));if(t){let r=t.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped;return parseInt(g(Se,r),10)||-1}return 0}function Ne(e){return a(B("h1",n("pCC",e))[0])}function Fe(e){return re(a(n("profileLeftColumn",e).children[4].children[0].rows[0].cells[1]))}function Me(e){return parseInt(a(n(q,e)),10)}function Re(e,t,r,o){let s=Ne(e),D=Fe(e),d=Me(e),be=parseInt(r[1],10),ge=te({min:be}),ye=t.href,Pe=o.replace(/['"\n]/g,"");return`<nobr>${ge}&nbsp;<a href="${ye}" target="new" class="tip-static" data-tipped="${Pe}">${s}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${s}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${D}&nbsp;(${d})`}function Ve(e){window.openQuickMsgDialog(e.target.getAttribute("target_player"))}function De(e){let t=e.newRow.insertCell(0);t.style.verticalAlign="top",i(Re(e.doc,e.callback,e.lastActivity,e.bioCellHtml),t),$(".a-reply").on("click",Ve)}function He(e,t,r){let o="fshRed";t>=100&&(o="fshGreen");let s='<span class="fshRed">No</span>';return r&&(s='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${e[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${o}">${t}%</td><td class="resLbl">Extend:</td><td class="resVal">${s}</td></tr>`}function Oe(e,t,r,o){let s=e.insertCell(1);i(He(t,r,o),s),s.style.verticalAlign="top"}function je(e,t){e.innerHTML+=`${t}<br>`}function Ge(e,t){let r=e.insertCell(2);t.forEach(f(je,r))}function qe(){let e=n("buffersProcessed"),t=parseInt(a(n("potentialBuffers")),10),r=parseInt(a(e),10);i(r+1,e),t===r+1&&l("Done.","blue")}function _e(e){let t=n("pCC",e),r=B("p",t)[0];return H(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/,a(r))}function Ue(e){return _('img.tip-static[data-tipped*="Extend"]',e)}function Qe(e,t,r,o){let s=_e(r),d=n("buffTable").insertRow(-1);De({newRow:d,doc:r,callback:t,lastActivity:s,bioCellHtml:e}),Oe(d,s,Ae(r),Ue(r)),Ge(d,o)}function M(e,t){let r=c(e),o=n("profile-bio",r).innerHTML,s=ke(o,t.findBuffNicks);s.length>0&&Qe(o,t,r,s),qe()}var x=0,v=0,h=0,R=0,p=0,b=0,V=0;function u(e,t){i(e,n(t))}function Ye(e,t){M(t,{href:e,findBuffNicks:x})}function ze(e){I(e).then(f(Ye,e))}function ae(){if(u(h.length,"potentialBuffers"),h.length<=0){l("Done.","blue");return}l("Parsing player data ...","green"),h.forEach(ze)}function Je(e,t){return e===1?Math.round(R*t/50):e+1}function le(e,t){W()!==T(t)&&h.push(e)}function Ke(e){return parseInt($(e).find("td:eq(2)").text().replace(/,/g,""),10)}function We(e){return e>=v&&e>=F()}function Xe(e,t){if(We(Ke(t))){let r=$(t).find("td:eq(1) a").attr("href"),o=$(t).find("td:eq(1) a").text();le(r,o)}}function Ze(e){return parseInt($(e).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}function et(e){return parseInt($(e).find('input[name="page"]:last').val().replace(/\D/g,""),10)}function tt(e){$(e).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(Xe)}function rt(e,t,r){let o=Je(e,t);l(`Parsing online page ${e} ...`),S(o).then(r)}function fe(e){let t=c(e),r=et(t);r!==1&&tt(t);let o=Ze(t);r<o?rt(r,o,fe):ae()}function ce(){R=parseInt(n("onlinePlayers").value,10),R!==0?S(1).then(fe):ae()}function nt(e,t,r){return e<5&&t>=v&&t>=r}function ue(e){let{tipped:t}=e.dataset,{mins:r}=K(t),o=Number(g(O,t)),s=F();nt(r,o,s)&&le(e.href,a(e))}function ot(e){let t=c(e);k('#profileLeftColumn a[data-tipped*="Last Activity"]',t).forEach(ue),V+=1,V===b.length&&ce()}function st(e){b.push(G+e)}function it(e){I(e).then(ot)}function at(){b=[],b.push(j),J(p).forEach(st),V=0,n("alliesEnemies").checked?b.forEach(it):ce()}function lt(e){let t=c(e);n("guildMembers").checked&&k('#pCC a[data-tipped*="<td>VL:</td>"]',t).forEach(ue),at()}function ft(e,t){return t!==0}function ct(e){e.deleteRow(-1)}function ut(){let e=n("buffTable");U(e.rows).filter(ft).forEach(f(ct,e))}function pt(){ut(),u("","buffNicks"),l("Idle.","black"),u("","potentialBuffers"),u("0","buffersProcessed")}async function dt(){let e=await z();lt(e)}function pe(e){Y()||(u(x,"buffNicks"),l(`Gathering list of ${e} ...`,"green"),ie(),u("0","buffersProcessed"),h=[],p=n("extraProfile").value,w("extraProfile",p),dt())}function mt(e,t){return e===t.id}function ht(){let e=parseInt($("#selectedBuff").val(),10),t=m.find(f(mt,e));x=t.nicks,v=t.lvl,pe("potential buffers")}function bt(){let e=$("#textToSearchFor").val().split(",").map(T).join(",");w("textToSearchFor",e),x=e,v=1,pe("profiles to search")}function de(){p=y("extraProfile")}function me(e){E(n("findbuffsbutton"),e,!0)}function he(){E(n("clearresultsbutton"),pt,!0)}function yr(e){let t=e||C();L.sortBy="name",L.sortAsc=!0,m.sort(X),de(),i(P(ne,p),t),N(),me(ht),he()}function Pr(e){let t=e||C();de(),i(P(oe,p),t),N(),me(bt),he()}export{yr as injectFindBuffs,Pr as injectFindOther};
//# sourceMappingURL=findBuffs-T6FW6JGQ.js.map
