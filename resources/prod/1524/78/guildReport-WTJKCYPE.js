import{a as It,b as Ct}from"./chunk-SEINH2XN.js";import{a as N,c as wt,d as Et}from"./chunk-PQAJGESB.js";import{a as Ht}from"./chunk-5MIVF7YD.js";import"./chunk-DCCHDUUH.js";import"./chunk-7GPSNIAP.js";import{a as s}from"./chunk-3RHZF67A.js";import"./chunk-ZXV6MAK5.js";import"./chunk-FA3INVM7.js";import{a as xt}from"./chunk-JRIG5XI2.js";import{a as vt}from"./chunk-HN4IDIMH.js";import"./chunk-WXMNRLGI.js";import{a as Mt}from"./chunk-HFPRUAMH.js";import{a as Rt}from"./chunk-ODMZWCSE.js";import"./chunk-IQTTUI5C.js";import{a as yt}from"./chunk-H6BC5ZU5.js";import"./chunk-GB3P3WYI.js";import"./chunk-UOOH5ACL.js";import{a as gt}from"./chunk-HEJFBNDI.js";import"./chunk-BISG4UEW.js";import{a as tt}from"./chunk-T67XTSSD.js";import"./chunk-RFJ3WNN3.js";import{a as ht}from"./chunk-KVRIB2LF.js";import"./chunk-7M4H5O4X.js";import"./chunk-EREM32XP.js";import"./chunk-WXTFQ2EX.js";import{a as H}from"./chunk-2ABX2K3R.js";import{a as lt}from"./chunk-ZULCQNSW.js";import{a as at}from"./chunk-HZAVY5E5.js";import{a as c}from"./chunk-6XCNSTQO.js";import"./chunk-VJYVM6KC.js";import"./chunk-YP55UNC6.js";import"./chunk-G4Y2RVGL.js";import{a as m}from"./chunk-WJGEKWR5.js";import"./chunk-HPANGB4C.js";import"./chunk-AOUMBNX5.js";import"./chunk-DAGOHXEG.js";import{a as j}from"./chunk-AWJUUHCF.js";import"./chunk-RS7F7ZXV.js";import{a as st}from"./chunk-XHSVN3AE.js";import{a}from"./chunk-BBGQNVSZ.js";import{a as i}from"./chunk-BFPR54OB.js";import{a as mt}from"./chunk-XBR44BTF.js";import{a as pt,b as L}from"./chunk-IRY7N5E2.js";import"./chunk-VQ5IF6FG.js";import"./chunk-N42GCCAH.js";import{b as ut}from"./chunk-QP4P5TRQ.js";import{a as ot}from"./chunk-BTX6DEEX.js";import{a as nt}from"./chunk-ZUXON6YL.js";import{a as it}from"./chunk-NGC57R36.js";import{a as p}from"./chunk-PPVAQIV6.js";import"./chunk-A3YVYOGN.js";import"./chunk-PT75VPRA.js";import{a as E}from"./chunk-YZDE7HUD.js";import"./chunk-I2TTXFDP.js";import{a as bt}from"./chunk-DAEM3QKC.js";import"./chunk-6DXFGRHV.js";import{a as et}from"./chunk-BX4K6PYV.js";import"./chunk-65TDUWAS.js";import"./chunk-L64NM3TP.js";import"./chunk-22MCRXZW.js";import"./chunk-NRWJMAHH.js";import"./chunk-K4B7GDYL.js";import"./chunk-KU6X3UZY.js";import{a as rt}from"./chunk-HDOHD4T5.js";import"./chunk-WS7NDR34.js";import"./chunk-DIXVNWJK.js";import"./chunk-JOVTQVLX.js";import{a as ft}from"./chunk-EUYAGFNE.js";import"./chunk-YQUJCTUE.js";import{a as dt}from"./chunk-ABZVOXL7.js";import"./chunk-NCKABNOS.js";import{b as g}from"./chunk-QC454MFH.js";import{a as l}from"./chunk-AXRQ5WVZ.js";import"./chunk-R6LOYYKU.js";import{a as f}from"./chunk-KPZ2U2AC.js";import{a as O}from"./chunk-ZH46UF77.js";import"./chunk-NNEMTXQK.js";import{a as S}from"./chunk-EEFLVRLB.js";import{a as o}from"./chunk-BCLTLFAS.js";import{a as ct,b as u}from"./chunk-FOYCX26O.js";import"./chunk-NYUH27F5.js";import"./chunk-RV2XOX2R.js";import"./chunk-YCSGQRQ3.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as w}from"./chunk-46ONZIIB.js";import"./chunk-S6LVOURD.js";import"./chunk-LXKLJ4E3.js";import{a as h}from"./chunk-VNX4IMNY.js";import{b as Y,h as z,x as Z}from"./chunk-KWOXJEE6.js";import{a as v}from"./chunk-GBEPYIIX.js";var Wt=`<span class="guildReportSpinner" style="background-image: url('${Y}ui/misc/spinner.gif');"></span>`;function qt(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}function Tt(t){l('<span class="fastWorn">Worn</span>',t)}function Ut(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}function kt(t){return t.match(z)[1]}function _t(t,e,r){r.r!==1&&(t==="recall"?qt(e):Tt(e))}function St(t,e,r,n){wt(N(e),kt(e),r,n).then(o(_t,n,t))}function Lt(t,e,r){St(t,e,r,"recall")}function Kt(t,e){m("GuildReport","Fast BP"),Lt(t,e,0)}function Qt(t,e){m("GuildReport","Fast GS"),Lt(t,e,1)}function Xt(t,e){m("GuildReport","Fast Wear"),Number(kt(e))===ht()?Ht(N(e)).then(o(Tt,t)):St(t,e,0,"wear")}var Jt=[["fast-bp",Kt],["fast-gs",Qt],["fast-wear",Xt]];function Vt(t){let e=t.parentNode.parentNode;if(!e)return;let[{href:r}]=e.children;!r||(Jt.find(o(at,t))[1](e,r),l(Wt,e))}function Yt(t){m("GuildReport","Collapsible");let e=yt(t).nextElementSibling,r=e.className==="fshHide"?"":"fshHide";for(;e&&!e.children[0].hasAttribute("bgcolor");)e.className=r,e=e.nextElementSibling}var zt=[["sendLink",Vt],["a-reply",Ut],["fshBl",Yt]];function $(){w(et("table",g)[1],lt(zt))}var Nt='<span class="sendLink fast-bp">Fast BP</span> | ',I='<span class="sendLink fast-gs">Fast GS</span>',$t=' | <span class="sendLink fast-wear">Fast Wear</span>',B,A,F,P,G;function Zt(){return B||(B=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),B}function jt(){return F||(F=a({innerHTML:Nt+I})),F.cloneNode(!0)}function Ot(){return P||(P=a({innerHTML:Nt+I+$t})),P.cloneNode(!0)}function te(){return A||(A=a({innerHTML:I})),A.cloneNode(!0)}function ee(){return G||(G=a({innerHTML:I+$t})),G.cloneNode(!0)}var re=[[!0,!0,Ot],[!0,!1,ee],[!1,!0,jt],[!1,!1,te]];function ne(t,e,r){return r[0]===t&&r[1]===e}function D(t){let e=!Zt().test(t.previousElementSibling.innerHTML),r=t.children.length===2;return re.find(o(ne,e,r))[2]()}function oe(t,e,r){return e[r]=t[r],e}function y(t){return f(t).sort(dt).reduce(o(oe,t),{})}var W;function ie(t,e,r,n){return t.myMap[n]!=="Ignore"&&(r[t.myMap[n]]?r[t.myMap[n]]+=e[n]:r[t.myMap[n]]=e[n]),r}function ae(t){let e=Math.max(Math.min(t,100),0),r,n,x=0;return e<50?(r=255,n=Math.round(5.1*e)):(n=255,r=Math.round(510-5.1*e)),`#${`000000${(r*65536+n*256+x).toString(16)}`.slice(-6)}`}function le(t,e,r,n){return`${r}<tr><td>${n}</td><td style="background-color: ${ae((e[n]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${e[n].toString()}</td></tr>`}function d(t,e){m("potReport","drawInventory");let r=y(f(e).reduce(o(ie,t,e),{}));l(`<table><tbody>${f(r).reduce(o(le,t,r),"")}</tbody></table>`,W)}function Bt(t,e,r){W=a({id:"inventory"}),t.pottab1?d(t,e):H(r.parentNode.children[0],"change",o(d,t,e)),i(r,W)}function q(t){return mt("option",t)}var R=0,M=0;function Ft(){let t=Ct();return t.insertCell(-1),t.insertCell(-1),t}function U(t){let e=q();return e.value=t,e.text=t,e}function me(t,e){i(t,U(e[0]))}function se(){return It({style:{width:"130px"}})}function fe(){if(!M){M=Ft();let t=se();M.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',i(M.cells[1],t)}return M.cloneNode(!0)}function ce(t,e){let r=fe();st(e[0],r.cells[0]);let n=r.cells[1].children[0];i(n,U(e[1])),[n.name,n.value]=e,i(t.tBodies[0],r)}function At(t,e,r){let n=gt({id:e,type:"button",value:r});i(t.cells[1],n)}function pe(t){let e=Ft();At(e,"fshIgnoreAll","Ignore All"),j(e.cells[1],"&nbsp;"),At(e,"fshReset","Reset"),i(t.tBodies[0],e)}function ue(t,e){if(e.target.tagName==="SELECT"){let r=e.target,{value:n}=r;l("",r),i(r,U("Ignore")),S(t).forEach(o(me,r)),r.value=n}}function C(t){m("potReport","drawMapping");let e=xt({innerHTML:"<tbody></tbody>"});R.replaceChild(e,R.children[0]),h(R,"mousedown",o(ue,t.myMap)),c(3,s,[[3,S(t.myMap),0,o(ce,e),o(pe,e)]])}function Pt(t,e){R=a({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?C(t):H(e.parentNode.children[2],"change",o(C,t)),i(e,R)}var b="fsh_potMap",de={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20};function be(t,e){t.myMap[e]||(t.myMap[e]=e)}function he(t,e){return f(e).forEach(o(be,t)),y(t.myMap)}function ge(t){return a({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${E(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${E(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${E(t.pottab3)}><label for="pottab3">Thresholds</label>`})}function ye(t,e){let r=a({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`});i(e,r)}function Me(t,e,r){r.target.tagName==="SELECT"&&(t.myMap[r.target.name]=r.target.value,u(b,t),d(t,e))}function Re(t,e,r){return t?e[r]="Ignore":e[r]=r,e}function xe(t,e,r){t.myMap=f(e).reduce(o(Re,r),{})}function Gt(t,e,r){xe(t,e,r),u(b,t),C(t),d(t,e)}function ve(t){return/^pottab\d$/.test(t.id)}function He(t,e){let r=e.id;t[r]=e.checked,u(b,t)}function we(t,e){return[[L("fshIgnoreAll"),o(Gt,t,e,!0)],[L("fshReset"),o(Gt,t,e,null)],[ve,o(He,t)]]}function Ee(t,e,r){let n=r.target.id,x=vt(r.target.value,0,999);x&&(t[n]=x,u(b,t),d(t,e))}function Ie(t,e,r){h(r,"change",o(Me,t,e)),w(r,pt(we(t,e))),h(r,"input",o(Ee,t,e))}function Ce(t,e){let r=g.lastElementChild.insertRow(2).insertCell(-1);return Ie(t,e,r),r}function Te(t,e){let r=ge(t),n=a({id:"panels"});i(r,n),Bt(t,e,n),Pt(t,n),ye(t,n),i(Ce(t,e),r)}function ke(t,e){let r={...Et(de),...O(e,{})};r.myMap=he(r,t),u(b,r),Te(r,t)}function _(t){!g||ct(b).then(o(ke,t))}var Q=0,K=0,T=0;function Se(t,e){let r=K[e];i(r,t)}function Le(t){if(t.endsWith(" (Potion)")){let e=t.slice(0,-9);T[e]=(T[e]||0)+1}}function Ne(t){Q.push(D(t)),Le(t.previousElementSibling.innerHTML)}function $e(){s([3,Q,0,Se,o(_,T)])}function X(){K=p("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),T={},Q=[],s([3,K,0,Ne,$e])}function Be(t){return`${ut({last_login:v.membrList[t].last_login})}<a href="${Z}${v.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}function Ae(t){let e=rt(t);v.membrList[e]&&l(Be(e),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',Mt(t).nextElementSibling)}function J(){let t=p('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b');s([3,t,0,Ae])}var k=0,Dt=0;function Fe(t){t.children[0].hasAttribute("bgcolor")&&(Dt=nt(k,t.children[0].children[0])),Dt||(t.className="fshHide")}function V(){if(k=tt("user"),!k||!it('#pCC table table td[bgcolor="#DAA534"] b').some(ot(k)))return;let r=p("#pCC table table tr");s([2,r,0,Fe])}async function Pe(){await Rt(!1),c(3,J)}function Ge(){ft()||!bt()||(Pe(),c(2,V),c(3,X),$())}export{Ge as default};
//# sourceMappingURL=guildReport-WTJKCYPE.js.map
