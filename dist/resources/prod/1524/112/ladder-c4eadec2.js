import{i as n}from"./interceptSubmit-0ca01d03.js"
import{a as t,d as e,E as s,f as r,$ as a,S as o,J as c,K as i,L as u,M as l,N as d,P as f,Q as p,W as m,X as h,n as g,ag as w,ah as L,U as k,Y as b,ad as v,q as _,a4 as y,s as q,ai as P}from"./calfSystem-4830a18d.js"
import{a as j}from"./all-414e0607.js"
import{i as C}from"./isArray-09a53da7.js"
import{h as S,u as x}from"./await_block-31b017e2.js"
import{t as O,n as T}from"./now-6f22aec9.js"
import{o as M}from"./outputFormat-b1a8825f.js"
import"./formToUrl-824efe66.js"
function F(n){return t({cmd:"settings",...n})}function H(n){return F({subcmd:"flags",flags:n.map((n=>n?1:0))})}const R=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function $(n){const t=await e({cmd:"settings"}),a=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),r(e.entries())}(t.forms[0],n[0]),o=function(n,t){const e=new FormData(n)
return R.forEach(((n,s)=>e.set(n,t[s+1]))),r(e.entries())}(t.forms[2],n)
return await j([a,o].map((n=>s(n)))),{s:!0}}function D(){return F({subcmd:"view"})}function E(n){return{c:m,m:m,p:m,d:m}}function K(n){let t,e=w(n[0]),s=e&&N(n)
return{c(){s&&s.c(),t=L()},m(n,e){s&&s.m(n,e),f(n,t,e)},p(n,r){1&r&&(e=w(n[0])),e?s?s.p(n,r):(s=N(n),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(n){n&&h(t),s&&s.d(n)}}}function N(n){let t,e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:Y,then:V,catch:U}
return S(e=n[1],s),{c(){t=u("td"),s.block.c(),d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(t,r){n=t,s.ctx=n,2&r&&e!==(e=n[1])&&S(e,s)||x(s,n,r)},d(n){n&&h(t),s.block.d(),s.token=null,s=null}}}function U(n){return{c:m,m:m,p:m,d:m}}function V(n){let t,e,s
return{c(){t=u("input"),d(t,"type","checkbox")},m(r,a){f(r,t,a),t.checked=n[0],e||(s=[k(t,"change",n[6]),k(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&h(t),e=!1,b(s)}}}function Y(n){let t
return{c(){t=u("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function A(n){let t
return{c(){t=u("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function I(n){let t,e,s,r={ctx:n,current:null,token:null,hasCatch:!1,pending:A,then:K,catch:E}
return S(n[2](),r),{c(){t=u("tr"),e=u("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',s=l(),r.block.c(),d(e,"class","svelte-1quw1g")},m(n,a){f(n,t,a),p(t,e),p(t,s),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null},p(t,[e]){x(r,n=t,e)},i:m,o:m,d(n){n&&h(t),r.block.d(),r.token=null,r=null}}}function J(n,t,e){let s,r,{isOnLadder:a}=t,{toggleLadder:o}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,a=n.isOnLadder),"toggleLadder"in n&&e(5,o=n.toggleLadder)},[s,r,async function(){e(0,s=await a())},function(){e(0,s=!s),e(1,r=o(s)),g("ladder","opt in/out")},a,o,function(){s=this.checked,e(0,s)}]}var Q=class extends o{constructor(n){super(),c(this,n,J,I,i,{isOnLadder:4,toggleLadder:5})}}
let W=0
async function X(){const n=await a(D)
return W=n?.r?.flags,W?.[0]}function z(n){if(C(W))return W[0]=n,a(H,$,W)}function B(){if(v("optInOnLadderPage")){!function(n){new Q({props:{toggleLadder:z,isOnLadder:X},target:n})}(_("#pCC table tbody"))}}function G(){const n=v(P)
return n<O()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((T()-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${M(e," hours, ")+t} mins`}(n)}function Z(){const n=_("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,y("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",q(G(),t)}(t)}function nn(){n(),v("trackLadderReset")&&Z(),B()}export{nn as default}
//# sourceMappingURL=ladder-c4eadec2.js.map
