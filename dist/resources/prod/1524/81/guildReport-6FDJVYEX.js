import{a as It,b as Tt}from"./chunk-DABJ4EBA.js";import{b as Et,c as $,d as kt}from"./chunk-3SLIWYP6.js";import{a as wt}from"./chunk-YLPP4XGD.js";import"./chunk-GNQ2EVTW.js";import"./chunk-F56D37LN.js";import"./chunk-LJADHMCS.js";import{a as s}from"./chunk-QEGHLHZU.js";import"./chunk-H3UI3CHJ.js";import{a as vt}from"./chunk-ALPBC25Y.js";import"./chunk-HWPLYWAJ.js";import{a as Rt}from"./chunk-HQXAMMBR.js";import{a as Ht}from"./chunk-GNE3CKO7.js";import{a as xt}from"./chunk-HTPIBFXF.js";import{a as Mt}from"./chunk-5EJVZWQM.js";import"./chunk-3R5465Y4.js";import"./chunk-BGCSAA2T.js";import{a as yt}from"./chunk-MQSDDZVA.js";import"./chunk-CBXLLK3K.js";import{a as ht}from"./chunk-JIVCXSAO.js";import{a as rt}from"./chunk-X3UAR57Z.js";import"./chunk-M34ZVTSL.js";import"./chunk-SWN5GBXU.js";import{a as j}from"./chunk-DWP7HLPE.js";import{a as at}from"./chunk-52UJETQR.js";import{a as it}from"./chunk-JGGI5CHY.js";import"./chunk-BDFQCMKF.js";import{a as c}from"./chunk-4EPHHB5V.js";import"./chunk-QL55SON4.js";import{a as O}from"./chunk-WMET5VJL.js";import"./chunk-EJAPIT2N.js";import"./chunk-OGZ2LKXW.js";import"./chunk-NQGCF6DA.js";import"./chunk-F2ZF3AQV.js";import"./chunk-SBKSJG7Z.js";import{a as v}from"./chunk-AU54RFBS.js";import"./chunk-ZCOVPDKX.js";import"./chunk-WKDTOFNZ.js";import{a as m}from"./chunk-X5DGSHWJ.js";import"./chunk-ARZE2BDD.js";import"./chunk-MKW45GOR.js";import"./chunk-OELRUWUL.js";import{a as st}from"./chunk-PJKEYPE3.js";import{a}from"./chunk-IEZDQOE5.js";import{a as i}from"./chunk-KHQZO2PT.js";import{a as nt}from"./chunk-WMUUSPIG.js";import{a as pt,b as B}from"./chunk-JWHQ55T7.js";import"./chunk-DG3IU753.js";import{a as bt}from"./chunk-3KY6VRXL.js";import{a as dt}from"./chunk-73ZGJX3S.js";import{a as ut}from"./chunk-DKG6D46Z.js";import"./chunk-HOFZHHFM.js";import"./chunk-DHIC45XN.js";import{a as lt}from"./chunk-HTB6BFBM.js";import"./chunk-CWNZ6JBW.js";import{a as mt}from"./chunk-VIE5ZNPH.js";import{a as p}from"./chunk-OKCEI7IO.js";import{a as E}from"./chunk-2JKQG6B5.js";import{b as h}from"./chunk-U2LW7DMT.js";import{a as l}from"./chunk-ZIYY5ALA.js";import"./chunk-CF6OUIZ5.js";import"./chunk-SKV52MA5.js";import{a as f}from"./chunk-RLS5G4OZ.js";import{a as gt}from"./chunk-YLLFMQF3.js";import"./chunk-VJCEJOSH.js";import"./chunk-V572RQRH.js";import"./chunk-MVADRWN3.js";import{a as ot}from"./chunk-B42TQDRT.js";import{a as et}from"./chunk-DKRMOVVB.js";import{a as Z}from"./chunk-RVROEHXL.js";import"./chunk-EPL4X55B.js";import"./chunk-C6UQ3IWD.js";import"./chunk-RY6SJUY2.js";import"./chunk-F5F7ZRBL.js";import"./chunk-4LPHXEVA.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import{a as N}from"./chunk-6TE7Y3DR.js";import"./chunk-IPQXTCLP.js";import"./chunk-3FPE4KHJ.js";import{a as n}from"./chunk-SOFFOM3C.js";import{a as ct,b as u}from"./chunk-HEE2ZG5Y.js";import"./chunk-C56KTMKY.js";import{a as ft}from"./chunk-J47S26DS.js";import"./chunk-2YJNQKIS.js";import"./chunk-2DIHMK5L.js";import"./chunk-PRUVPLE4.js";import"./chunk-YVFHCM2A.js";import{a as S}from"./chunk-3WYYB24O.js";import{a as w}from"./chunk-Q4WEZP4Z.js";import"./chunk-SYO7WFPA.js";import"./chunk-FNQX6KHV.js";import{a as g}from"./chunk-SARQWG4K.js";import{b as tt,j as L}from"./chunk-7Q74Q23I.js";import{a as H}from"./chunk-B3OIOQDS.js";import"./chunk-7X7SMYZT.js";var qt=`<span class="guildReportSpinner" style="background-image: url('${tt}ui/misc/spinner.gif');"></span>`;function Ut(t){l('<span class="fastWorn">You successfully recalled the item</span>',t)}function Ct(t){l('<span class="fastWorn">Worn</span>',t)}function _t(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}function Kt(t,e,r){r.r!==1&&(t==="recall"?Ut(e):Ct(e))}function St(t,e,r,o){Et($(e),S(L,e),r,o).then(n(Kt,o,t))}function Lt(t,e,r){St(t,e,r,"recall")}function Qt(t,e){m("GuildReport","Fast BP"),Lt(t,e,0)}function Xt(t,e){m("GuildReport","Fast GS"),Lt(t,e,1)}function Jt(t,e){m("GuildReport","Fast Wear"),Number(S(L,e))===j()?wt($(e)).then(n(Ct,t)):St(t,e,0,"wear")}var Vt=[["fast-bp",Qt],["fast-gs",Xt],["fast-wear",Jt]];function Yt(t){let e=t.parentNode.parentNode;if(!e)return;let[{href:r}]=e.children;!r||(Vt.find(n(it,t))[1](e,r),l(qt,e))}function zt(t){m("GuildReport","Collapsible");let e=yt(t).nextElementSibling,r=e.className==="fshHide"?"":"fshHide";for(;e&&!e.children[0].hasAttribute("bgcolor");)e.className=r,e=e.nextElementSibling}var Zt=[["sendLink",Yt],["a-reply",_t],["fshBl",zt]];function A(){w(ot("table",h())[1],at(Zt))}var Nt='<span class="sendLink fast-bp">Fast BP</span> | ',k='<span class="sendLink fast-gs">Fast GS</span>',Bt=' | <span class="sendLink fast-wear">Fast Wear</span>',F,G,P,D,W;function jt(){return F||(F=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),F}function Ot(){return P||(P=a({innerHTML:Nt+k})),P.cloneNode(!0)}function te(){return D||(D=a({innerHTML:Nt+k+Bt})),D.cloneNode(!0)}function ee(){return G||(G=a({innerHTML:k})),G.cloneNode(!0)}function re(){return W||(W=a({innerHTML:k+Bt})),W.cloneNode(!0)}var oe=[[!0,!0,te],[!0,!1,re],[!1,!0,Ot],[!1,!1,ee]];function ne(t,e,r){return r[0]===t&&r[1]===e}function q(t){let e=!jt().test(t.previousElementSibling.innerHTML),r=t.children.length===2;return oe.find(n(ne,e,r))[2]()}function ie(t,e,r){return e[r]=t[r],e}function y(t){return f(t).sort(lt).reduce(n(ie,t),{})}var U=0;function ae(t,e,r,o){return t.myMap[o]!=="Ignore"&&(r[t.myMap[o]]?r[t.myMap[o]]+=e[o]:r[t.myMap[o]]=e[o]),r}var le=t=>Math.max(Math.min(t,100),0),me=t=>`000000${t.toString(16)}`.slice(-6);function se(t){let e=le(t),r=255,o=255,R=0;e<50?o=Math.round(5.1*e):r=Math.round(510-5.1*e);let Wt=r*65536+o*256+R;return`#${me(Wt)}`}function fe(t,e,r,o){return`${r}<tr><td>${o}</td><td style="background-color: ${se((e[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${e[o].toString()}</td></tr>`}function d(t,e){m("potReport","drawInventory");let r=y(f(e).reduce(n(ae,t,e),{}));l(`<table><tbody>${f(r).reduce(n(fe,t,r),"")}</tbody></table>`,U)}function $t(t,e,r){U=a({id:"inventory"}),t.pottab1?d(t,e):v(r.parentNode.children[0],"change",n(d,t,e)),i(r,U)}function _(t){return nt("option",t)}var x=0,M=0;function Ft(){let t=Tt();return t.insertCell(-1),t.insertCell(-1),t}function K(t){let e=_();return e.value=t,e.text=t,e}function ce(t,e){i(t,K(e[0]))}function pe(){return It({style:{width:"130px"}})}function ue(){if(!M){M=Ft();let t=pe();M.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',i(M.cells[1],t)}return M.cloneNode(!0)}function de(t,e){let r=ue();st(e[0],r.cells[0]);let o=r.cells[1].children[0];i(o,K(e[1])),[o.name,o.value]=e,i(t.tBodies[0],r)}function At(t,e,r){let o=ht({id:e,type:"button",value:r});i(t.cells[1],o)}function be(t){let e=Ft();At(e,"fshIgnoreAll","Ignore All"),O(e.cells[1],"&nbsp;"),At(e,"fshReset","Reset"),i(t.tBodies[0],e)}function ge(t,e){if(e.target.tagName==="SELECT"){let r=e.target,{value:o}=r;l("",r),i(r,K("Ignore")),N(t).forEach(n(ce,r)),r.value=o}}function I(t){m("potReport","drawMapping");let e=Mt({innerHTML:"<tbody></tbody>"});x.replaceChild(e,x.children[0]),g(x,"mousedown",n(ge,t.myMap)),c(3,s,[[3,N(t.myMap),0,n(de,e),n(be,e)]])}function Gt(t,e){x=a({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?I(t):v(e.parentNode.children[2],"change",n(I,t)),i(e,x)}var b="fsh_potMap",he={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20};function ye(t,e){t.myMap[e]||(t.myMap[e]=e)}function Me(t,e){return f(e).forEach(n(ye,t)),y(t.myMap)}function xe(t){return a({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${E(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${E(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${E(t.pottab3)}><label for="pottab3">Thresholds</label>`})}function Re(t,e){let r=a({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`});i(e,r)}function He(t,e,r){r.target.tagName==="SELECT"&&(t.myMap[r.target.name]=r.target.value,u(b,t),d(t,e))}function ve(t,e,r){return t?e[r]="Ignore":e[r]=r,e}function we(t,e,r){t.myMap=f(e).reduce(n(ve,r),{})}function Pt(t,e,r){we(t,e,r),u(b,t),I(t),d(t,e)}function Ee(t){return/^pottab\d$/.test(t.id)}function ke(t,e){let r=e.id;t[r]=e.checked,u(b,t)}function Ie(t,e){return[[B("fshIgnoreAll"),n(Pt,t,e,!0)],[B("fshReset"),n(Pt,t,e,null)],[Ee,n(ke,t)]]}function Te(t,e,r){let o=r.target.id,R=xt(r.target.value,0,999);R&&(t[o]=R,u(b,t),d(t,e))}function Ce(t,e,r){g(r,"change",n(He,t,e)),w(r,pt(Ie(t,e))),g(r,"input",n(Te,t,e))}function Se(t,e){let r=h().lastElementChild.insertRow(2).insertCell(-1);return Ce(t,e,r),r}function Le(t,e){let r=xe(t),o=a({id:"panels"});i(r,o),$t(t,e,o),Gt(t,o),Re(t,o),i(Se(t,e),r)}function Ne(t,e){let r={...kt(he),...et(e,{})};r.myMap=Me(r,t),u(b,r),Le(r,t)}function Q(t){!h()||ct(b).then(n(Ne,t))}var J=0,X=0,T=0;function Be(t,e){let r=X[e];i(r,t)}function $e(t){if(t.endsWith(" (Potion)")){let e=t.slice(0,-9);T[e]=(T[e]||0)+1}}function Ae(t){J.push(q(t)),$e(t.previousElementSibling.innerHTML)}function Fe(){s([3,J,0,Be,n(Q,T)])}function V(){X=p("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),T={},J=[],s([3,X,0,Ae,Fe])}function Ge(t){return`${bt({last_login:H.membrList[t].last_login})}${vt(H.membrList[t].id,t)} [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}function Pe(t){let e=Z(t);H.membrList[e]&&l(Ge(e),t),l('<span class="fshFloatRight fshXSmall">[ <button class="fshBl fshBls" type="button">X</button> ]</span>',Rt(t).nextElementSibling)}function Y(){let t=p('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b');s([3,t,0,Pe])}var C=0,Dt=0;function De(t){t.children[0].hasAttribute("bgcolor")&&(Dt=ut(C,t.children[0].children[0])),Dt||(t.className="fshHide")}function z(){if(C=rt("user"),!C||!mt('#pCC table table td[bgcolor="#DAA534"] b').some(dt(C)))return;let r=p("#pCC table table tr");s([2,r,0,De])}async function We(){await Ht(!1),c(3,Y)}function qe(){ft()||!gt()||(We(),c(2,z),c(3,V),A())}export{qe as default};
//# sourceMappingURL=guildReport-6FDJVYEX.js.map
