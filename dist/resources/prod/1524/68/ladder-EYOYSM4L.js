import{a as K}from"./chunk-GD7Q7KEA.js";import{a as J}from"./chunk-E5YRKN52.js";import"./chunk-MBM2IUZ4.js";import{R as b,S,Y,Z as z,a as s,b as j,d as B,o as y,p as l,q as c,s as f,u as N,v as U,w as C,z as p}from"./chunk-4XJ62YPJ.js";import{a as G}from"./chunk-X4TVWHJC.js";import{a as q}from"./chunk-IANSUISX.js";import"./chunk-UK6O22FS.js";import{a as W}from"./chunk-PLMUKN34.js";import{a as k}from"./chunk-NRO5M5RP.js";import{a as E}from"./chunk-KJXK3QHT.js";import"./chunk-H5JQREIR.js";import{a as M}from"./chunk-LN3GCTG5.js";import{a as H}from"./chunk-4INAK7SH.js";import{a as _}from"./chunk-MBVAIUY2.js";import{a as D}from"./chunk-MDOIRABL.js";import{a as v}from"./chunk-TNZZCVPK.js";import{a as L}from"./chunk-W2SUPDAA.js";import"./chunk-2BNSEFB2.js";import"./chunk-3SKGW6OG.js";import"./chunk-KQSUJNSJ.js";import{a as w}from"./chunk-4WC2EWBK.js";import"./chunk-4JW3DRCH.js";import{a as I}from"./chunk-D3KONKYS.js";import"./chunk-RC2D6Q5A.js";import"./chunk-527CNM4N.js";import"./chunk-6IX4R32K.js";import"./chunk-UG5BYLND.js";import"./chunk-XANH2KUG.js";import"./chunk-JEWY3LVF.js";import{b as d}from"./chunk-QNTIOO4O.js";import"./chunk-KI4LHW6W.js";import"./chunk-47PUSJEZ.js";import{ta as A}from"./chunk-3GR2FESE.js";import"./chunk-DKU5TE64.js";function et(e){return{c:s,m:s,p:s,d:s}}function nt(e){let t=w(e[0]),n,r=t&&Q(e);return{c(){r&&r.c(),n=U()},m(i,o){r&&r.m(i,o),l(i,n,o)},p(i,o){o&1&&(t=w(i[0])),t?r?r.p(i,o):(r=Q(i),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(i){r&&r.d(i),i&&c(n)}}}function Q(e){let t,n,r={ctx:e,current:null,token:null,hasCatch:!1,pending:it,then:ot,catch:rt};return b(n=e[1],r),{c(){t=f("td"),r.block.c(),p(t,"class","svelte-1quw1g")},m(i,o){l(i,t,o),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null},p(i,o){e=i,r.ctx=e,o&2&&n!==(n=e[1])&&b(n,r)||S(r,e,o)},d(i){i&&c(t),r.block.d(),r.token=null,r=null}}}function rt(e){return{c:s,m:s,p:s,d:s}}function ot(e){let t,n,r;return{c(){t=f("input"),p(t,"type","checkbox")},m(i,o){l(i,t,o),t.checked=e[0],n||(r=[C(t,"change",e[6]),C(t,"click",e[3])],n=!0)},p(i,o){o&1&&(t.checked=i[0])},d(i){i&&c(t),n=!1,j(r)}}}function it(e){let t;return{c(){t=f("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',p(t,"class","svelte-1quw1g")},m(n,r){l(n,t,r)},p:s,d(n){n&&c(t)}}}function st(e){let t;return{c(){t=f("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',p(t,"class","svelte-1quw1g")},m(n,r){l(n,t,r)},p:s,d(n){n&&c(t)}}}function at(e){let t,n,r,i,o={ctx:e,current:null,token:null,hasCatch:!1,pending:st,then:nt,catch:et,value:7};return b(i=e[2](),o),{c(){t=f("tr"),n=f("td"),n.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder, unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',r=N(),o.block.c(),p(n,"class","svelte-1quw1g")},m(a,u){l(a,t,u),y(t,n),y(t,r),o.block.m(t,o.anchor=null),o.mount=()=>t,o.anchor=null},p(a,[u]){e=a,S(o,e,u)},i:s,o:s,d(a){a&&c(t),o.block.d(),o.token=null,o=null}}}function lt(e,t,n){let{isOnLadder:r}=t,{toggleLadder:i}=t,o;async function a(){n(0,o=await r())}let u;function $(){n(0,o=!o),n(1,u=i(o)),W("ladder","opt in/out")}function tt(){o=this.checked,n(0,o)}return e.$$set=h=>{"isOnLadder"in h&&n(4,r=h.isOnLadder),"toggleLadder"in h&&n(5,i=h.toggleLadder)},[o,u,a,$,r,i,tt]}var X=class extends z{constructor(t){super();Y(this,t,lt,at,B,{isOnLadder:4,toggleLadder:5})}},Z=X;function m(e){return E({cmd:"settings",...e})}function R(e){return m({subcmd:"flags",flags:e.map(t=>t?1:0)})}var ct=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"];function ft(e,t){let n=new FormData(e);return n.append("pvp_ladder",t),q(n.entries())}function ut(e,t){let n=new FormData(e);return ct.forEach((r,i)=>n.set(r,t[i+1])),q(n.entries())}async function F(e){let t=await v({cmd:"settings"}),n=D(t),r=ft(n.forms[0],e[0]),i=ut(n.forms[2],e);return await Promise.all([r,i].map(o=>v(o))),{s:!0}}function P(e){return k(R,F,e)}function T(){return m({subcmd:"view"})}function x(){return k(T,K)}var g;async function pt(){return g=(await x()).r?.flags,g?.[0]}async function dt(e){if(H(g))return g[0]=e,P(g)}function mt(e){return new Z({props:{toggleLadder:dt,isOnLadder:pt},target:e})}function O(){if(d("optInOnLadderPage")){let e=_("#pCC table tbody");mt(e)}}function gt(e){let t=Math.floor((L-e)/6e4),n=Math.floor(t/60);return t%=60,`${G(n," hours, ")+t} mins`}function ht(){let e=d(A);return e<L-48*60*60*1e3?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':gt(e)}function _t(e){let t=e.insertCell(-1);t.height=25,M("Last Reset:",t)}function kt(e){let t=e.insertCell(-1);t.align="right",I(ht(),t)}function bt(){let e=_("#pCC table");if(!e)return;let t=e.insertRow(-1);_t(t),kt(t)}function V(){d("trackLadderReset")&&bt()}function wt(){J(),V(),O()}export{wt as default};
//# sourceMappingURL=ladder-EYOYSM4L.js.map