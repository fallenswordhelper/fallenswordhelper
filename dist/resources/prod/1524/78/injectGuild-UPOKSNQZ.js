import{a as Zt,b as te}from"./chunk-7ZPMBYFR.js";import{a as Jt}from"./chunk-ARHNJ6IQ.js";import{a as Yt}from"./chunk-IASCJLRL.js";import"./chunk-L5LUMX7C.js";import{a as _t,b as zt}from"./chunk-5U24YU64.js";import{a as Wt}from"./chunk-IKWYYTJK.js";import{a as Qt}from"./chunk-3RHZF67A.js";import{a as O}from"./chunk-FA3INVM7.js";import{a as Kt}from"./chunk-VM2DWLPB.js";import{a as w}from"./chunk-FR3CVOXS.js";import{a as Xt}from"./chunk-JRIG5XI2.js";import{a as Ot}from"./chunk-V2UYDYEP.js";import{a as qt}from"./chunk-EW7IWMQQ.js";import"./chunk-L257PB5U.js";import{a as Ft}from"./chunk-CV2F5LRS.js";import"./chunk-VJQUUC3H.js";import"./chunk-KOLRWU5K.js";import{a as It}from"./chunk-V55GUISU.js";import{a as F}from"./chunk-HEJFBNDI.js";import{a as jt}from"./chunk-WXTVWMFB.js";import{a as Vt}from"./chunk-AT7GKTGB.js";import"./chunk-RVDTL5XA.js";import{a as X}from"./chunk-J4J5DDEB.js";import{a as Gt}from"./chunk-RQKCNXDZ.js";import{a as kt}from"./chunk-T67XTSSD.js";import{a as Ut}from"./chunk-T73BSJKR.js";import"./chunk-V5OO5USD.js";import{a as ut}from"./chunk-ENE47Y2R.js";import{a as U}from"./chunk-2ABX2K3R.js";import{a as m}from"./chunk-6XCNSTQO.js";import"./chunk-VJYVM6KC.js";import{a as x}from"./chunk-WJGEKWR5.js";import{a as l}from"./chunk-AWJUUHCF.js";import"./chunk-RS7F7ZXV.js";import{a as n}from"./chunk-BBGQNVSZ.js";import{a as o}from"./chunk-BFPR54OB.js";import{a as Lt}from"./chunk-XBR44BTF.js";import"./chunk-N42GCCAH.js";import{a as yt}from"./chunk-JALJ6QIZ.js";import{a as Tt}from"./chunk-FBSSCKGE.js";import{a as Bt}from"./chunk-QP4P5TRQ.js";import{f as $}from"./chunk-23REUCOM.js";import{a as Et}from"./chunk-AYEWWXLO.js";import{a as p}from"./chunk-7YIYQREX.js";import{a as P}from"./chunk-BTX6DEEX.js";import"./chunk-ZUXON6YL.js";import{a as R}from"./chunk-NGC57R36.js";import{a as Ct}from"./chunk-PPVAQIV6.js";import"./chunk-A3YVYOGN.js";import{a as vt}from"./chunk-PT75VPRA.js";import"./chunk-YZDE7HUD.js";import{a as Rt,b as Mt,c as $t,d as Dt}from"./chunk-XMDNAM5V.js";import"./chunk-362XMEGR.js";import"./chunk-VIHT6GSA.js";import"./chunk-I2TTXFDP.js";import{a as Pt}from"./chunk-DAEM3QKC.js";import"./chunk-34ME3L5F.js";import"./chunk-DXDG2FN7.js";import{a as k}from"./chunk-6DXFGRHV.js";import{a as y}from"./chunk-BX4K6PYV.js";import{a as Nt}from"./chunk-65TDUWAS.js";import{a as At}from"./chunk-L64NM3TP.js";import"./chunk-22MCRXZW.js";import"./chunk-NRWJMAHH.js";import"./chunk-K4B7GDYL.js";import"./chunk-KU6X3UZY.js";import"./chunk-HDOHD4T5.js";import"./chunk-WS7NDR34.js";import{a as M}from"./chunk-U23UIQ4J.js";import"./chunk-DIXVNWJK.js";import"./chunk-JOVTQVLX.js";import{a as St}from"./chunk-EUYAGFNE.js";import{a as D}from"./chunk-2KHDMM5H.js";import"./chunk-YQUJCTUE.js";import{a as Ht}from"./chunk-ABZVOXL7.js";import"./chunk-NCKABNOS.js";import{b as c}from"./chunk-QC454MFH.js";import{a as f}from"./chunk-AXRQ5WVZ.js";import"./chunk-R6LOYYKU.js";import{a as q}from"./chunk-KPZ2U2AC.js";import"./chunk-ZH46UF77.js";import"./chunk-NNEMTXQK.js";import"./chunk-EEFLVRLB.js";import{a as s}from"./chunk-BCLTLFAS.js";import{a as xt,b as wt}from"./chunk-FOYCX26O.js";import"./chunk-NYUH27F5.js";import"./chunk-RV2XOX2R.js";import"./chunk-YCSGQRQ3.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as v}from"./chunk-46ONZIIB.js";import{b as a}from"./chunk-S6LVOURD.js";import{a as bt}from"./chunk-LXKLJ4E3.js";import{a as u}from"./chunk-VNX4IMNY.js";import{F as H,J as gt,Ma as ht,g as E,sa as T,ua as b,x as dt}from"./chunk-KWOXJEE6.js";import{a as S}from"./chunk-GBEPYIIX.js";var ee=0,re=1;function Se(t,e){let r=E.exec(e.dataset.tipped);return Bt({min:r[3],hour:r[2],day:r[1]})<44640&&(t[ee]+=1,t[re]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function Te(t){return t.reduce(Se,[0,0])}function _(){let t=k("b",c).find(P("Members"));if(t){let e=_t(),r=Te(e);t.classList.add("tip-static"),Ft(`Active: ${r[ee]}/${e.length}<br>Stamina: ${D(r[re])}`,t)}}function oe(t,e){let r,i=t.replace(/,/g,"").match(e);return i?r=parseInt(i[1],10):r=0,r}function xe(t,e){let r="";return t>e&&(r="+"),r+D(t-e)}function we(t){let e=t.dataset.tipped,r=oe(e,/XP Lock: <b>(\d*)/),i=oe(e,/XP: <b>(\d*)/);l(t.parentNode.nextElementSibling,` (<b>${xe(i,r)}</b>)`)}function Q(){let t=p('#pCC a[data-tipped^="<b>Guild XP</b>"]');t&&we(t)}function z(){let t=k(b,c).slice(-2,-1)[0].rows[0].cells[0],e=n({id:"profile-bio",innerHTML:t.innerHTML});f("",t),o(t,e),Wt()}var W,J;function Ne(t){return W&&t>=Rt()&&t<=Mt()}function Ae(t){return J&&t>=$t()&&t<=Dt()}var Be=t=>[t,E.exec(t.dataset.tipped)[1]],Ee=([,t])=>t<7,He=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Pe=([t,e])=>[t.parentNode.parentNode.rowIndex,Ne(e),Ae(e)];function Re(){return R('#pCC a[data-tipped*="<td>VL:</td>"]').map(Be).filter(Ee).map(He).map(Pe)}function Me(){return Number(kt("guild_id"))!==Pt()&&(W||J)}var ie=t=>t.map(([e])=>`.fshHighlight tr:nth-child(${e+1})`).join(",");function $e(t){if(t.length){let e=`${ie(t)} {background-color: #4671C8;}`;o(document.body,w(e))}}function De(t){if(t.length){let e=`${ie(t)} {background-color: #FF9900;}`;o(document.body,w(e))}}function Ie(t,e){if(t.length+e.length){let r=y(b,c);r[r.length-1].classList.add("fshHighlight")}}function Ge(){let t=Re(),e=t.filter(([,i])=>i),r=t.filter(([,i,L])=>!i&&L);$e(e),De(r),Ie(e,r)}function je(){Me()&&Ge()}function Y(){W=a("highlightPlayersNearMyLvl"),J=a("highlightGvGPlayersNearMyLvl"),je(),a("enableHistoryCompressor")&&z()}function Ve(t){l(t.parentNode,' <span class="smallLink">[b]</span>')}function Ue(t){t.target.className==="smallLink"&&Vt(jt(t.target.previousElementSibling.href))}function Z(){let t=Ct(`#pCC a[href^="${dt}"]`);Qt([3,t,0,Ve]),v(c,Ue)}function I(t){return At({cmd:"guild",subcmd:"conflicts",page:t})}function ne(t,e){f(e,t.insertCell(-1))}function me(t,e,r){let i=t.insertRow(t.rows.length-2);ne(i,e),ne(i,r)}function qe(t){me(t,`<a href="${H}conflicts">Active Conflicts</a>`,"Score")}function Fe(t,e){me(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Xe(t,e,r){e===1&&qe(r),qt(t,7,0).forEach(s(Fe,r))}function Oe(t,e,r){let i=p("#pCC > table > tbody > tr > td > table",t);i&&i.rows.length>3&&Xe(i,e,r)}function _e(t){return Number(t.nextSibling.textContent.split("\xA0")[2])}function Qe(t,e,r){I(t+1).then(s(e,r))}function ae(t,e){let r=Nt(e),i=p('#pCC input[name="page"]',r);if(!i)return;let L=Number(i.value),Le=_e(i);Oe(r,L,t.node),Le>L&&Qe(L,ae,t)}function K(t){let[e]=t.rows[6].cells[0].children;e&&I(1).then(s(ae,{node:e}))}function ze(t){t.target.id===T&&M(T,!a(T))}function tt(){let t=p("#pCC img.guild_openGuildStore");if(!t)return;let e=t.parentNode,r=n({className:"fsh-tracker"}),i=n({innerHTML:`${$(T)}&nbsp;<label class="custombutton" for="tracker">Show</label>`});u(i,"change",ze),o(r,t),o(r,i),Ut(e,r)}function et(t){return Lt("th",t)}var rt,G,A,ot,j;function tr(t,e){return`${t}<option value="${e}">${e}</option>`}function er(t){return`<select name="member"><option value="- All -" selected>- All -</option>${q(t).sort(Ht).reduce(tr,"")}</select>`}function N(t){return bt(t)?"#DEF":t.toLocaleString()}function rr(t){return G&&G!=="- All -"&&G!==t}function or(t,e,r){return`${e}<tr><td>${Yt(new Date(r[4]*1e3))}</td><td>${t}</td><td class="fshRight">${N(r[2])}</td><td class="fshRight">${N(r[5])}</td><td class="fshRight">${N(r[1])}</td><td class="fshRight">${N(r[3])}</td><td class="fshRight">${Math.floor(r[1]/r[3]*100)}</td><td class="fshRight">${r[0]}</td><td class="fshRight">${N(r[6])}</td></tr>`}function ir(t,e){return rr(e)?t:t+j[e].reduce(s(or,e),"")}function nr(){return q(j).reduce(ir,"")}function mr(){j&&f(nr(),rt),A.classList.remove("fshSpinner")}function se(){A.classList.add("fshSpinner"),m(3,mr)}function ar(t){G=t.target.value,se()}function V(t){t&&(j=t,f(er(t),ot),se())}function lr(){let t=et({textContent:"Member"});return ot=n(),o(t,ot),t}function cr(t){let e=t.createTHead().insertRow(-1);l(e,"<th>Date</th>");let r=lr();o(e,r),l(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}function sr(t){rt=Jt(),o(t,rt)}function fe(){let t=Xt({id:"tg"});return cr(t),sr(t),u(t,"change",ar),A=n({className:"tgCont fshSpinner64"}),o(A,t),A}var d,pe,ue,g;function fr(t){d.value=t,g.classList.remove("fshSpinner")}function ge(t){t&&(g.classList.add("fshSpinner"),m(4,fr,[t]))}function pr(){d.value='{"lastUpdate": 0, "members": {}}'}function ur(t){O("Update successful"),V(t.members)}function dr(){let t=yt(d.value);wt("fsh_guildActivity",t).then(s(ur,t)).catch(O)}function de(t,e){let r=Ot({className:"custombutton",textContent:t});return v(r,e),r}function gr(){d=Kt(),d.setAttribute("autocapitalize","off"),d.setAttribute("autocomplete","off"),d.setAttribute("autocorrect","off"),d.setAttribute("spellcheck","false")}function he(){return g=n({id:"io",className:"fshSpinner64"}),gr(),pe=de("Save",dr),ue=de("Reset",pr),o(g,d),o(g,Zt()),o(g,pe),o(g,ue),g}var nt,h,B,it;function be(){return!h.checked}function hr(){return h.checked}function br(){h.checked=!1}function yr(t){hr()&&t.code==="Escape"&&br()}function kr(t){be()&&(t.style.transform=null)}function vr(){return It({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})}function Cr(){x("guildTracker","updateRawData"),nt&&ge(nt)}function Lr(){let t=n({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'});return it=F({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),U(it,"change",Cr),o(t,it),t}function Sr(){let t=Lr(),e=vr();return o(t,e),ut(e,t),t}function Tr(){let t=n({className:"fsh-dialog-content"});return o(t,fe()),o(t,he()),t}function xr(){let t=Sr(),e=Tr();o(t,e),u(h,"change",s(kr,t)),o(B,t)}function wr(){l(B,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>')}function Nr(t){t&&(nt=Tt(t),V(t.members))}function Ar(){x("guildTracker","openDialog"),xt("fsh_guildActivity").then(Nr),S.dialogIsClosed=be,wr(),xr()}function Br(){h=F({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),U(h,"change",Ar),B=n({className:"fsh-dialog"}),o(B,h),u(document.body,"keydown",yr),o(document.body,B)}function mt(){tt(),Br()}var lt="enableStamBars",C,at;function Er(t){let e=t.dataset.tipped.match(/Stamina:<\/td><td>(\d{1,12}) \/ (\d{1,12})<\/td>/);return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}function Hr(t){let e=Er(t);return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Pr(){let t=y(b,c),e=t[t.length-1];e.classList.add("fshProgressBar");let i=R(ht,e).map(Hr).join(`
`);at=o(document.body,w(i)).sheet}function ye(){at?at.disabled=!C:Pr()}function Rr(){C=!C,M(lt,C),ye(),x("guildManage","StamBars")}function Mr(){let t=p("#pCC img.guild_openGuildStore");if(!t)return;let e=t.parentNode,r=o(e,n({className:"fshCenter",innerHTML:$(lt)}));u(r,"change",Rr)}function ct(){Mr(),C=a(lt),C&&ye()}function $r(t){return X({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}function Dr(t){let e=X({className:"fshNoWrap",innerHTML:"[&nbsp;"});return o(e,t),l(e,"&nbsp;]"),e}function st(t,e,r){let i=$r(r);o(t,Dr(i)),e.id=r,a(r)&&Gt(e),v(i,te)}function ke(t){st(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function ve(t){let e=t.rows[4].cells[1].children[0];f(vt(e.innerHTML),e),st(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Ce(t){let e=t.rows[15]?.cells[1].children[0];e&&st(e,t.rows[17].cells[0].children[0],"guildStructureControl")}function Ir(t){let e=k("b",t).filter(P("Relics"));if(e.length!==1)return;let r=e[0].parentNode.nextElementSibling.children[0];f(`[ <a href="${H}reliclist">Control</a> ]&nbsp;`,r)}function Gr(t){let e=y("li",t);if(!e||!e.length)return;let r=e[e.length-1].parentNode;l(r,`<li><a href="${gt}${Et()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function jr(){return c.lastElementChild.rows[2].cells[0].children[0]}function Vr(t,e){m(3,e,[t])}function Ur(t){[ke,ve,Ce,Ir,Gr].forEach(s(Vr,t))}function qr(t){St()||(a("detailedConflictInfo")&&m(3,K,[t]),m(4,mt))}function ft(){if(!c)return;let t=jr();Ur(t),a("showBuffLinks")&&m(3,Z),qr(t),ct()}function Fr(t){let e=t.nextElementSibling.nextElementSibling;e&&e.classList.add("fshBreakAll")}function pt(){let t=p('#pCC img[src*="/guilds/"][width="200"]');!t||(t.removeAttribute("style"),Fr(t))}function Xr(){m(3,zt),m(3,pt),m(3,Q),m(3,_),S.subcmd==="manage"&&ft(),S.subcmd==="view"&&Y()}export{Xr as default};
//# sourceMappingURL=injectGuild-UPOKSNQZ.js.map