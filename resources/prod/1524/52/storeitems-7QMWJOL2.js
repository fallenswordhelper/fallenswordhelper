import{a as D}from"./chunk-HZT465UH.js";import{c as R,d as T,e as B,f as L}from"./chunk-MU4WRZVN.js";import"./chunk-WD747RKX.js";import"./chunk-YQNG4QHN.js";import"./chunk-PSLS3SHI.js";import"./chunk-RD3JCIMR.js";import"./chunk-Q35EMOVU.js";import"./chunk-H62XIARK.js";import"./chunk-J65VR5DR.js";import"./chunk-5ISLZIZN.js";import{D as E,E as j,a as h,b as H,c as C,d as v,e as b,f as k,g as P,h as p,i as y,j as S,l as g,n as a,p as Q,u as A}from"./chunk-2G2XWC65.js";import"./chunk-2ICPYDYS.js";import"./chunk-L3EJTUOG.js";import{a as q}from"./chunk-GPK2U2RI.js";import{a as N}from"./chunk-IYM4T5IA.js";import"./chunk-ZG7AZG2H.js";import{a as G}from"./chunk-WRWRVDAJ.js";import"./chunk-BP3EKJNE.js";import"./chunk-QBOLKUGJ.js";import"./chunk-GEYLGSBT.js";import"./chunk-5RHE5XB6.js";import"./chunk-MHKH5FC5.js";import"./chunk-CJDJXL2F.js";import"./chunk-24KPH7IM.js";import"./chunk-SDA4FQMK.js";import"./chunk-T6BAO7XX.js";import"./chunk-KCQPJD5H.js";import"./chunk-ZZZQT54L.js";import"./chunk-EZHOHKGC.js";import"./chunk-R23QVEJA.js";import"./chunk-VXC5XTE7.js";import"./chunk-ML7SUXNI.js";import"./chunk-XY4KZRCS.js";import"./chunk-5IIHJLHJ.js";import"./chunk-5M4Z4TNO.js";import"./chunk-C3UZY667.js";import"./chunk-7VZZ35FX.js";import{a as x}from"./chunk-EWDLMFWA.js";import"./chunk-6BZLLWOX.js";import"./chunk-M2ZMFQNM.js";import"./chunk-H7LEI34Q.js";import"./chunk-MZ7GLTZN.js";import"./chunk-GEUXEI3G.js";import"./chunk-NR4PY7IS.js";import"./chunk-WKK2D5SI.js";import"./chunk-CVQ7E5PW.js";import"./chunk-DUQP22PP.js";import"./chunk-NDCVQHVH.js";import{a as F}from"./chunk-3Q2VMWIC.js";import"./chunk-ZOSMVBRJ.js";import"./chunk-ZJNDZYVS.js";import"./chunk-OUMBZBCQ.js";import"./chunk-RL27SC3C.js";import"./chunk-KCBAQFJY.js";import{a as $}from"./chunk-DM72I4Z3.js";import"./chunk-Y2LZWOTV.js";import{b as V}from"./chunk-I7LLJIV6.js";import"./chunk-6SHDCONG.js";import"./chunk-BWOLSDKS.js";import"./chunk-RLOFFV7B.js";import"./chunk-XYKKLBWK.js";import{a as w}from"./chunk-BOMGPUDJ.js";function W(t){let e,o,l,i;return{c(){e=p("button"),e.textContent="Check All",o=y("\xA0"),a(e,"class","custombutton svelte-1recp8w"),a(e,"type","button")},m(n,u){b(n,e,u),b(n,o,u),l||(i=g(e,"click",t[0]),l=!0)},p:h,i:h,o:h,d(n){n&&k(e),n&&k(o),l=!1,i()}}}function X(t){let e=A();function o(){F("storeitems","Check All"),e("checkall")}return[o]}var M=class extends j{constructor(e){super();E(this,e,X,W,C,{})}},z=M;function J(t,e,o){let l=t.slice();return l[6]=e[o][0],l[7]=e[o][1],l}function K(t){let e,o=t[7]+"",l,i,n;function u(){return t[4](t[6])}return{c(){e=p("button"),l=y(o),a(e,"type","button"),a(e,"class","svelte-1gvij2s")},m(f,d){b(f,e,d),v(e,l),i||(n=g(e,"click",u),i=!0)},p(f,d){t=f,d&1&&o!==(o=t[7]+"")&&Q(l,o)},d(f){f&&k(e),i=!1,n()}}}function Y(t){let e,o,l,i,n,u,f,d,m=x(t[0].folders),c=[];for(let r=0;r<m.length;r+=1)c[r]=K(J(t,m,r));return{c(){e=p("tr"),o=p("td"),l=p("button"),l.textContent="All",i=S(),n=p("button"),n.textContent="Main",u=S();for(let r=0;r<c.length;r+=1)c[r].c();a(l,"type","button"),a(l,"class","svelte-1gvij2s"),a(n,"type","button"),a(n,"class","svelte-1gvij2s"),a(o,"colspan","3"),a(e,"class","fshCenter")},m(r,_){b(r,e,_),v(e,o),v(o,l),v(o,i),v(o,n),v(o,u);for(let s=0;s<c.length;s+=1)c[s].m(o,null);f||(d=[g(l,"click",t[2]),g(n,"click",t[3])],f=!0)},p(r,[_]){if(_&3){m=x(r[0].folders);let s;for(s=0;s<m.length;s+=1){let I=J(r,m,s);c[s]?c[s].p(I,_):(c[s]=K(I),c[s].c(),c[s].m(o,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=m.length}},i:h,o:h,d(r){r&&k(e),P(c,r),f=!1,H(d)}}}function Z(t,e,o){let l=A(),{inv:i={folders:{}}}=e;function n(m){F("storeitems","Filter Folder"),l("filter",m)}let u=()=>n("-2"),f=()=>n("-1"),d=m=>n(m);return t.$$set=m=>{"inv"in m&&o(0,i=m.inv)},[i,n,u,f,d]}var O=class extends j{constructor(e){super();E(this,e,Z,Y,C,{inv:0})}},U=O;function ee(t,e,o){o.checked=!1;let l=q(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;D(l,n),D(l.nextElementSibling,n)}function te(t,e){N([5,3,R(),0,w(ee,t,Number(e.detail))])}async function oe(){let t=await B();if(!t||!t.folders)return;let e=document.forms[0];new U({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",w(te,t))}function le(){T().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function ne(){let t=$(document.forms[0].elements).filter(o=>o.type==="submit")[0];new z({anchor:t,target:t.parentNode}).$on("checkall",le)}function re(){G()&&V("enableFolderFilter")&&oe(),ne(),L()}export{re as default};
//# sourceMappingURL=storeitems-7QMWJOL2.js.map
