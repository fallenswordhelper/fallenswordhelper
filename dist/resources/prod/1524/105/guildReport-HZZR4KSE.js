import{b as Ht,c as $,d as Et}from"./chunk-TQ5FSQ3A.js";import{a as It,b as St}from"./chunk-2MYJOEMW.js";import{a as wt}from"./chunk-LPTCQAI6.js";import"./chunk-PSMLMHJ2.js";import"./chunk-H7SNCFWP.js";import"./chunk-VTAYJN4L.js";import"./chunk-TLXK3DYW.js";import{a as p}from"./chunk-LD3RGCFD.js";import{a as vt}from"./chunk-ND3QD334.js";import{a as xt}from"./chunk-GGIHA66Z.js";import{a as kt}from"./chunk-7Z2WEOAF.js";import"./chunk-VVW6WQOK.js";import"./chunk-K72XMP4C.js";import{a as Mt}from"./chunk-OOXPCX53.js";import{a as Rt}from"./chunk-U5XRZO3G.js";import"./chunk-TQNMSSUA.js";import"./chunk-6OUSE23Z.js";import{a as ht}from"./chunk-GPANXWBJ.js";import"./chunk-RRX6M65I.js";import{a as gt}from"./chunk-IWZZIQBV.js";import{a as rt}from"./chunk-MAI6UPAW.js";import{a as yt}from"./chunk-4S4RJIWM.js";import"./chunk-VIYL46Q6.js";import{a as at}from"./chunk-R5QVEL5X.js";import{a as it}from"./chunk-NRIBGBE3.js";import"./chunk-HPPEXIMR.js";import{a as f}from"./chunk-PVXVA62G.js";import"./chunk-6HERGS5C.js";import"./chunk-URWUNVTF.js";import{a as j}from"./chunk-JDEF33GP.js";import{a as O}from"./chunk-WP265O3M.js";import"./chunk-TZIXO72F.js";import"./chunk-I6ZSBYQ3.js";import"./chunk-YQ625XVJ.js";import"./chunk-VMCLSOZO.js";import"./chunk-PBUQY6G2.js";import"./chunk-EJFOLQ4R.js";import{a}from"./chunk-GUJMNTXY.js";import"./chunk-4HVNCCW2.js";import{a as m}from"./chunk-LMBPY5RI.js";import"./chunk-JJ7LU6FF.js";import{a as mt}from"./chunk-LBMN7XL3.js";import"./chunk-3R32ULME.js";import"./chunk-KTI2IMEY.js";import{a as i}from"./chunk-GXOFVYKC.js";import"./chunk-LGNFNBOW.js";import{a as nt}from"./chunk-A6LP6MUS.js";import{a as st,b as d}from"./chunk-K2ALIVI4.js";import{a as v}from"./chunk-E2MFTVAH.js";import{a as s}from"./chunk-Y5EGDMIB.js";import"./chunk-SNNJRQSX.js";import"./chunk-5YAX7RCO.js";import"./chunk-Z5JYB3FL.js";import{a as ct,b as B}from"./chunk-AO7WAFDB.js";import"./chunk-JFV47WCR.js";import"./chunk-SY2OGTK4.js";import"./chunk-MHWHHESW.js";import"./chunk-DLFQE7QF.js";import{a as bt}from"./chunk-5HGBKHLV.js";import"./chunk-FR27OJE5.js";import{a as dt}from"./chunk-DDG7VJDB.js";import{a as ut}from"./chunk-GMQMPQTF.js";import{a as ft}from"./chunk-NT4BD23Z.js";import{a as et}from"./chunk-B7LKBV3M.js";import"./chunk-E3BH7XBT.js";import"./chunk-IUVEXKRJ.js";import"./chunk-WVO4VYA4.js";import"./chunk-C63Q3HN7.js";import"./chunk-JG7KZ32H.js";import"./chunk-35MRBVSX.js";import"./chunk-5UBD44K5.js";import{a as ot}from"./chunk-AH7GU5B4.js";import"./chunk-NRW7AT6T.js";import"./chunk-DPECAWNM.js";import{a as pt}from"./chunk-V7IRBBI6.js";import"./chunk-B72RCTA5.js";import{a as Z}from"./chunk-KOM3R443.js";import"./chunk-NIOVFM2M.js";import"./chunk-6ZCA6D63.js";import{a as N}from"./chunk-YXAOTQ2S.js";import{a as lt}from"./chunk-V45UJIF2.js";import{a as u}from"./chunk-64PLTPQD.js";import"./chunk-OHAOQZFW.js";import{a as C}from"./chunk-PJWDCLVE.js";import{a as H}from"./chunk-4KWKR7LL.js";import{b as y}from"./chunk-Q3ULPWYK.js";import{a as l}from"./chunk-SSAI4GAC.js";import{a as w}from"./chunk-JCK66TTB.js";import"./chunk-SY4ES3W2.js";import"./chunk-TFKKNJKY.js";import"./chunk-ZFTJPJLX.js";import"./chunk-R7J7NY4A.js";import{b as tt,j as L}from"./chunk-5ELKH2XV.js";import{a as g}from"./chunk-5ORZS6IQ.js";import"./chunk-BRQN5OZB.js";import{a as n}from"./chunk-BZJZQFW2.js";import{a as M}from"./chunk-QCTVAEOV.js";import"./chunk-VQDTHLUC.js";var qt=`<span class="guildReportSpinner" style="background-image: url('${tt}ui/misc/spinner.gif');"></span>`;function Ut(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}function Tt(t){l('<span class="fastWorn">Worn</span>',t)}function _t(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}function Kt(t,e,r){r.r!==1&&(t==="recall"?Ut(e):Tt(e))}async function Ct(t,e,r,o){let c=await Ht($(e),C(L,e),r,o);Kt(o,t,c)}function Lt(t,e,r){Ct(t,e,r,"recall")}function Qt(t,e){s("GuildReport","Fast BP"),Lt(t,e,0)}function Xt(t,e){s("GuildReport","Fast GS"),Lt(t,e,1)}async function zt(t,e){s("GuildReport","Fast Wear"),Number(C(L,e))===j()?(await wt($(e)),Tt(t)):Ct(t,e,0,"wear")}var Jt=[["fast-bp",Qt],["fast-gs",Xt],["fast-wear",zt]];function Vt(t){let e=t.parentNode.parentNode;if(!e)return;let[{href:r}]=e.children;r&&(Jt.find(n(it,t))[1](e,r),l(qt,e))}function Yt(t){s("GuildReport","Collapsible");let e=Rt(t).nextElementSibling,r=e.className==="fshHide"?"":"fshHide";for(;e&&!e.children[0].hasAttribute("bgcolor");)e.className=r,e=e.nextElementSibling}var Zt=[["sendLink",Vt],["a-reply",_t],["fshBl",Yt]];function A(){w(ot("table",y())[1],at(Zt))}var Nt='<span class="sendLink fast-bp">Fast BP</span> | ',E='<span class="sendLink fast-gs">Fast GS</span>',Bt=' | <span class="sendLink fast-wear">Fast Wear</span>',F,G,P,D,W;function jt(){return F||(F=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),F}function Ot(){return P||(P=a({innerHTML:Nt+E})),P.cloneNode(!0)}function te(){return D||(D=a({innerHTML:Nt+E+Bt})),D.cloneNode(!0)}function ee(){return G||(G=a({innerHTML:E})),G.cloneNode(!0)}function re(){return W||(W=a({innerHTML:E+Bt})),W.cloneNode(!0)}var oe=[[!0,!0,te],[!0,!1,re],[!1,!0,Ot],[!1,!1,ee]];function ne(t,e,r){return r[0]===t&&r[1]===e}function q(t){let e=!jt().test(t.previousElementSibling.innerHTML),r=t.children.length===2;return oe.find(n(ne,e,r))[2]()}function ie(t,e,r){return e[r]=t[r],e}function R(t){return m(t).sort(pt).reduce(n(ie,t),{})}var U=0;function ae(t,e,r,o){return t.myMap[o]!=="Ignore"&&(r[t.myMap[o]]?r[t.myMap[o]]+=e[o]:r[t.myMap[o]]=e[o]),r}var le=t=>Math.max(Math.min(t,100),0),se=t=>`000000${t.toString(16)}`.slice(-6);function pe(t){let e=le(t),r=255,o=255,c=0;e<50?o=Math.round(5.1*e):r=Math.round(510-5.1*e);let Wt=r*65536+o*256+c;return`#${se(Wt)}`}function me(t,e,r,o){return`${r}<tr><td>${o}</td><td style="background-color: ${pe((e[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${e[o].toString()}</td></tr>`}function b(t,e){s("potReport","drawInventory");let r=R(m(e).reduce(n(ae,t,e),{}));l(`<table><tbody>${m(r).reduce(n(me,t,r),"")}</tbody></table>`,U)}function $t(t,e,r){U=a({id:"inventory"}),t.pottab1?b(t,e):v(r.parentNode.children[0],"change",n(b,t,e)),i(r,U)}function _(t){return nt("option",t)}var x=0,k=0;function Ft(){let t=St();return t.insertCell(-1),t.insertCell(-1),t}function K(t){let e=_();return e.value=t,e.text=t,e}function ce(t,e){i(t,K(e[0]))}function fe(){return It({style:{width:"130px"}})}function ue(){if(!k){k=Ft();let t=fe();k.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',i(k.cells[1],t)}return k.cloneNode(!0)}function de(t,e){let r=ue();yt(e[0],r.cells[0]);let o=r.cells[1].children[0];i(o,K(e[1])),[o.name,o.value]=e,i(t.tBodies[0],r)}function At(t,e,r){let o=ht({id:e,type:"button",value:r});i(t.cells[1],o)}function be(t){let e=Ft();At(e,"fshIgnoreAll","Ignore All"),O(e.cells[1],"&nbsp;"),At(e,"fshReset","Reset"),i(t.tBodies[0],e)}function he(t,e){if(e.target.tagName==="SELECT"){let r=e.target,{value:o}=r;l("",r),i(r,K("Ignore")),N(t).forEach(n(ce,r)),r.value=o}}function I(t){s("potReport","drawMapping");let e=kt({innerHTML:"<tbody></tbody>"});x.replaceChild(e,x.children[0]),g(x,"mousedown",n(he,t.myMap)),f(3,p,[[3,N(t.myMap),0,n(de,e),n(be,e)]])}function Gt(t,e){x=a({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?I(t):v(e.parentNode.children[2],"change",n(I,t)),i(e,x)}var h="fsh_potMap",ge={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20};function ye(t,e){t.myMap[e]||(t.myMap[e]=e)}function Re(t,e){return m(e).forEach(n(ye,t)),R(t.myMap)}function ke(t){return a({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${H(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${H(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${H(t.pottab3)}><label for="pottab3">Thresholds</label>`})}function xe(t,e){let r=a({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`});i(e,r)}function Me(t,e,r){r.target.tagName==="SELECT"&&(t.myMap[r.target.name]=r.target.value,d(h,t),b(t,e))}function ve(t,e,r){return t?e[r]="Ignore":e[r]=r,e}function we(t,e,r){t.myMap=m(e).reduce(n(ve,r),{})}function Pt(t,e,r){we(t,e,r),d(h,t),I(t),b(t,e)}function He(t){return/^pottab\d$/.test(t.id)}function Ee(t,e){let r=e.id;t[r]=e.checked,d(h,t)}function Ie(t,e){return[[B("fshIgnoreAll"),n(Pt,t,e,!0)],[B("fshReset"),n(Pt,t,e,null)],[He,n(Ee,t)]]}function Se(t,e,r){let o=r.target.id,c=xt(r.target.value,0,999);c&&(t[o]=c,d(h,t),b(t,e))}function Te(t,e,r){g(r,"change",n(Me,t,e)),w(r,ct(Ie(t,e))),g(r,"input",n(Se,t,e))}function Ce(t,e){let r=y().lastElementChild.insertRow(2).insertCell(-1);return Te(t,e,r),r}function Le(t,e){let r=ke(t),o=a({id:"panels"});i(r,o),$t(t,e,o),Gt(t,o),xe(t,o),i(Ce(t,e),r)}function Ne(t,e){let r={...Et(ge),...et(e,{})};r.myMap=Re(r,t),d(h,r),Le(r,t)}async function Q(t){if(!y())return;let e=await st(h);Ne(t,e)}var z=0,X=0,S=0;function Be(t,e){let r=X[e];i(r,t)}function $e(t){if(t.endsWith(" (Potion)")){let e=t.slice(0,-9);S[e]=(S[e]||0)+1}}function Ae(t){z.push(q(t)),$e(t.previousElementSibling.innerHTML)}function Fe(){p([3,z,0,Be,n(Q,S)])}function J(){X=u("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),S={},z=[],p([3,X,0,Ae,Fe])}function Ge(t){return`${bt({last_login:M.membrList[t].last_login})}${gt(M.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}function Pe(t){let e=Z(t);M.membrList?.[e]&&l(Ge(e),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',Mt(t).nextElementSibling)}function V(){let t=u('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b');p([3,t,0,Pe])}var T=0,Dt=0;function De(t){t.children[0].hasAttribute("bgcolor")&&(Dt=ut(T,t.children[0].children[0])),Dt||(t.className="fshHide")}function Y(){if(T=rt("user"),!T||!lt('#pCC table table td[bgcolor="#DAA534"] b').some(dt(T)))return;let r=u("#pCC table table tr");p([2,r,0,De])}async function We(){await vt(!1),f(3,V)}function qe(){ft()||!mt()||(We(),f(2,Y),f(3,J),A())}export{qe as default};
//# sourceMappingURL=guildReport-HZZR4KSE.js.map
