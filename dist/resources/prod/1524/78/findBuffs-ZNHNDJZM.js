import{a as p}from"./chunk-HMWA62NX.js";import{b as J}from"./chunk-QP4P5TRQ.js";import{a as Q}from"./chunk-KBJPCRSI.js";import{c as Y}from"./chunk-23REUCOM.js";import{a as W}from"./chunk-AYEWWXLO.js";import{a as _}from"./chunk-GASXX3SW.js";import{a as K}from"./chunk-7YIYQREX.js";import{a as q}from"./chunk-BTX6DEEX.js";import"./chunk-ZUXON6YL.js";import{a as T}from"./chunk-NGC57R36.js";import"./chunk-PPVAQIV6.js";import"./chunk-A3YVYOGN.js";import{a as C}from"./chunk-PT75VPRA.js";import"./chunk-YZDE7HUD.js";import{a as S}from"./chunk-5L46SL4O.js";import{a as z}from"./chunk-DXDG2FN7.js";import{a as G}from"./chunk-6DXFGRHV.js";import{a as B}from"./chunk-BX4K6PYV.js";import{a as c}from"./chunk-65TDUWAS.js";import"./chunk-L64NM3TP.js";import"./chunk-22MCRXZW.js";import"./chunk-NRWJMAHH.js";import{a as w}from"./chunk-K4B7GDYL.js";import{a as j}from"./chunk-KU6X3UZY.js";import{a}from"./chunk-HDOHD4T5.js";import"./chunk-WS7NDR34.js";import{a as I}from"./chunk-U23UIQ4J.js";import"./chunk-DIXVNWJK.js";import"./chunk-JOVTQVLX.js";import{a as U}from"./chunk-EUYAGFNE.js";import{c as X}from"./chunk-7BFVRU24.js";import"./chunk-ABZVOXL7.js";import"./chunk-NCKABNOS.js";import{b as L}from"./chunk-QC454MFH.js";import{a as i}from"./chunk-AXRQ5WVZ.js";import{a as n}from"./chunk-R6LOYYKU.js";import"./chunk-ZH46UF77.js";import"./chunk-NNEMTXQK.js";import"./chunk-EEFLVRLB.js";import{a as f}from"./chunk-BCLTLFAS.js";import"./chunk-RV2XOX2R.js";import"./chunk-YCSGQRQ3.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as A}from"./chunk-46ONZIIB.js";import{b as g}from"./chunk-S6LVOURD.js";import"./chunk-LXKLJ4E3.js";import"./chunk-VNX4IMNY.js";import{Fa as O,P as H,g as V,w as D}from"./chunk-KWOXJEE6.js";import{a as v}from"./chunk-GBEPYIIX.js";function be(e){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${e.header}</h1></td><td class="findLabel">Select ${e.what} to search for:</td><td>${e.control()}</td></tr>`}function ge(e){return`<tr><td class="findLabel">Level ${e.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}function ye(e){return`<tr><td class="leftLabel">${e.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}function Pe(){return Y("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}function xe(e,t){return`<tr><td class="findLabel"># potential ${e.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${Pe()}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${t||""}"></td></tr>`}function ve(e){return`<tr><td class="findLabel"># ${e.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}function Le(e){return`<tr><td class="findLabel">Find ${e.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}function $e(e){return`<br><h1>Potential ${e.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}function Be(){return'<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>'}function y(e,t){return`<table class="fshFind"><tbody>${be(e)}${ge(e)}${ye(e)}${xe(e,t)}${ve(e)}${Le(e)}</tbody></table>${$e(e)}${Be()}`}var E;function k(){E=n("bufferProgress")}function l(e,t){i(e,E),t&&(E.style.color=t)}var Ce=/Level<br>(\d+)%/;function Te(e,t){let r=new RegExp(`^.*\\b(?:(?:${t.replace(/,/g,")|(?:")}))\\b.*$`,"gim");return[...e.matchAll(r)].map(o=>o[0])}function Ae(e){let t=G("a",n("profileLeftColumn",e)).find(q("Sustain"));if(t){let r=t.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped;return parseInt(Ce.exec(r)[1],10)||-1}return 0}function Ie(e){return a(B("h1",n("pCC",e))[0])}function we(e){return z(a(n("profileLeftColumn",e).children[4].children[0].rows[0].cells[1]))}function Se(e){return parseInt(a(n(O,e)),10)}function Ee(e,t,r,o){let s=Ie(e),b=we(e),d=Se(e),de=parseInt(r[1],10),pe=J({min:de}),me=t.href,he=o.replace(/['"\n]/g,"");return`<nobr>${pe}&nbsp;<a href="${me}" target="new" class="tip-static" data-tipped="${he}">${s}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${s}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${b}&nbsp;(${d})`}function ke(e){window.openQuickMsgDialog(e.target.getAttribute("target_player"))}function Ne(e){let t=e.newRow.insertCell(0);t.style.verticalAlign="top",i(Ee(e.doc,e.callback,e.lastActivity,e.bioCellHtml),t),$(".a-reply").on("click",ke)}function Me(e,t,r){let o="fshRed";t>=100&&(o="fshGreen");let s='<span class="fshRed">No</span>';return r&&(s='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${e[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${o}">${t}%</td><td class="resLbl">Extend:</td><td class="resVal">${s}</td></tr>`}function Re(e,t,r,o){let s=e.insertCell(1);i(Me(t,r,o),s),s.style.verticalAlign="top"}function Fe(e,t){e.innerHTML+=`${t}<br>`}function Ve(e,t){let r=e.insertCell(2);t.forEach(f(Fe,r))}function De(){let e=n("buffersProcessed"),t=parseInt(a(n("potentialBuffers")),10),r=parseInt(a(e),10);i(r+1,e),t===r+1&&l("Done.","blue")}function He(e){let t=n("pCC",e),r=B("p",t)[0];return/(\d{1,2}) mins, (\d{1,2}) secs/.exec(a(r))}function Oe(e){return K('img.tip-static[data-tipped*="Extend"]',e)}function je(e,t,r,o){let s=He(r),d=n("buffTable").insertRow(-1);Ne({newRow:d,doc:r,callback:t,lastActivity:s,bioCellHtml:e}),Re(d,s,Ae(r),Oe(r)),Ve(d,o)}function N(e,t){let r=c(e),o=n("profile-bio",r).innerHTML,s=Te(o,t.findBuffNicks);s.length>0&&je(o,t,r,s),De()}function Ge(e){return`<option value="${e.id}">${e.name}</option>`}var Z={header:"Buff",what:"buff",control(){return`<select style="width:140px;" id="selectedBuff">${p.map(Ge).join("")}</select>`},cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},ee={header:"Other",what:"text",control(){return`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${g("textToSearchFor")||""}">`},cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"};var te;function M(){return te?500:1}function re(){te=n("level175").checked}var P=0,x=0,m=0,R=0,u=0,h=0,F=0;function qe(e,t){N(t,{href:e,findBuffNicks:P})}function Ue(e){w(e).then(f(qe,e))}function ne(){if(i(m.length,n("potentialBuffers")),m.length<=0){l("Done.","blue");return}l("Parsing player data ...","green"),m.forEach(Ue)}function _e(e,t){return e===1?Math.round(R*t/50):e+1}function oe(e,t){W()!==C(t)&&m.push(e)}function Qe(e){return parseInt($(e).find("td:eq(2)").text().replace(/,/g,""),10)}function Ye(e){return e>=x&&e>=M()}function ze(e,t){if(Ye(Qe(t))){let r=$(t).find("td:eq(1) a").attr("href"),o=$(t).find("td:eq(1) a").text();oe(r,o)}}function Je(e){return parseInt($(e).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}function Ke(e){return parseInt($(e).find('input[name="page"]:last').val().replace(/\D/g,""),10)}function We(e){$(e).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(ze)}function Xe(e,t,r){let o=_e(e,t);l(`Parsing online page ${e} ...`),S(o).then(r)}function se(e){let t=c(e),r=Ke(t);r!==1&&We(t);let o=Je(t);r<o?Xe(r,o,se):ne()}function ie(){R=parseInt(n("onlinePlayers").value,10),R!==0?S(1).then(se):ne()}function Ze(e){let t=V.exec(e),r=parseInt(t[1],10),o=parseInt(t[2],10)+r*24;return parseInt(t[3],10)+o*60}function et(e,t,r){return e<5&&t>=x&&t>=r}function ae(e){let{tipped:t}=e.dataset,r=Ze(t),o=/VL:.+?(?<vl>\d+)/.exec(t),s=Number(o.groups.vl),b=M();et(r,s,b)&&oe(e.href,a(e))}function tt(e){let t=c(e);T('#profileLeftColumn a[data-tipped*="Last Activity"]',t).forEach(ae),F+=1,F===h.length&&ie()}function rt(e){h.push(H+e)}function nt(e){w(e).then(tt)}function ot(){h=[],h.push(D),_(u).forEach(rt),F=0,n("alliesEnemies").checked?h.forEach(nt):ie()}function st(e){let t=c(e);n("guildMembers").checked&&T('#pCC a[data-tipped*="<td>VL:</td>"]',t).forEach(ae),ot()}function it(e,t){return t!==0}function at(e){e.deleteRow(-1)}function lt(){let e=n("buffTable");j(e.rows).filter(it).forEach(f(at,e)),i("",n("buffNicks")),l("Idle.","black"),i("",n("potentialBuffers")),i("0",n("buffersProcessed"))}function le(e){U()||(i(P,n("buffNicks")),l(`Gathering list of ${e} ...`,"green"),re(),i("0",n("buffersProcessed")),m=[],u=n("extraProfile").value,I("extraProfile",u),Q().then(st))}function ft(e,t){return e===t.id}function ct(){let e=parseInt($("#selectedBuff").val(),10),t=p.find(f(ft,e));P=t.nicks,x=t.lvl,le("potential buffers")}function ut(){let e=$("#textToSearchFor").val().split(",").map(C).join(",");I("textToSearchFor",e),P=e,x=1,le("profiles to search")}function fe(){u=g("extraProfile")}function ce(e){A(n("findbuffsbutton"),e,!0)}function ue(){A(n("clearresultsbutton"),lt,!0)}function fr(e){let t=e||L;v.sortBy="name",v.sortAsc=!0,p.sort(X),fe(),i(y(Z,u),t),k(),ce(ct),ue()}function cr(e){let t=e||L;fe(),i(y(ee,u),t),k(),ce(ut),ue()}export{u as extraProfile,fr as injectFindBuffs,cr as injectFindOther};
//# sourceMappingURL=findBuffs-ZNHNDJZM.js.map