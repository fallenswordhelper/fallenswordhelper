import{i as n}from"./interceptSubmit-2c6bfafb.js"
import{a as t,d as e,G as s,f as a,$ as r,S as o,L as c,M as i,N as u,O as l,P as d,R as f,T as p,Y as m,Z as h,n as g,ai as k,aj as w,W as L,_ as b,af as v,q as _,E as q,a6 as y,s as P,ak as j}from"./calfSystem-34913441.js"
import{a as C}from"./all-414e0607.js"
import{h as O,u as S}from"./await_block-d58cecee.js"
import{t as T,n as x}from"./now-6f22aec9.js"
import{o as M}from"./outputFormat-b1a8825f.js"
import"./formToUrl-4ee925a6.js"
function R(n){return t({cmd:"settings",...n})}function F(n){return R({subcmd:"flags",flags:n.map((n=>n?1:0))})}const H=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function $(n){const t=await e({cmd:"settings"}),r=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),a(e.entries())}(t.forms[0],n[0]),o=function(n,t){const e=new FormData(n)
return H.forEach(((n,s)=>e.set(n,t[s+1]))),a(e.entries())}(t.forms[2],n)
return await C([r,o].map((n=>s(n)))),{s:!0}}function D(){return R({subcmd:"view"})}function E(n){return{c:m,m:m,p:m,d:m}}function N(n){let t,e=k(n[0]),s=e&&V(n)
return{c(){s&&s.c(),t=w()},m(n,e){s&&s.m(n,e),f(n,t,e)},p(n,a){1&a&&(e=k(n[0])),e?s?s.p(n,a):(s=V(n),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(n){n&&h(t),s&&s.d(n)}}}function V(n){let t,e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:I,then:G,catch:Y}
return O(e=n[1],s),{c(){t=u("td"),s.block.c(),d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(t,a){n=t,s.ctx=n,2&a&&e!==(e=n[1])&&O(e,s)||S(s,n,a)},d(n){n&&h(t),s.block.d(),s.token=null,s=null}}}function Y(n){return{c:m,m:m,p:m,d:m}}function G(n){let t,e,s
return{c(){t=u("input"),d(t,"type","checkbox")},m(a,r){f(a,t,r),t.checked=n[0],e||(s=[L(t,"change",n[6]),L(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&h(t),e=!1,b(s)}}}function I(n){let t
return{c(){t=u("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function K(n){let t
return{c(){t=u("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function U(n){let t,e,s,a={ctx:n,current:null,token:null,hasCatch:!1,pending:K,then:N,catch:E}
return O(n[2](),a),{c(){t=u("tr"),e=u("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',s=l(),a.block.c(),d(e,"class","svelte-1quw1g")},m(n,r){f(n,t,r),p(t,e),p(t,s),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null},p(t,[e]){S(a,n=t,e)},i:m,o:m,d(n){n&&h(t),a.block.d(),a.token=null,a=null}}}function W(n,t,e){let s,a,{isOnLadder:r}=t,{toggleLadder:o}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,r=n.isOnLadder),"toggleLadder"in n&&e(5,o=n.toggleLadder)},[s,a,async function(){e(0,s=await r())},function(){e(0,s=!s),e(1,a=o(s)),g("ladder","opt in/out")},r,o,function(){s=this.checked,e(0,s)}]}var Z=class extends o{constructor(n){super(),c(this,n,W,U,i,{isOnLadder:4,toggleLadder:5})}}
let z=0
async function A(){const n=await r(D)
return z=n?.r?.flags,z?.[0]}function B(n){if(q(z))return z[0]=n,r(F,$,z)}function J(){if(v("optInOnLadderPage")){!function(n){new Z({props:{toggleLadder:B,isOnLadder:A},target:n})}(_("#pCC table tbody"))}}function Q(){const n=v(j)
return n<T()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((x()-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${M(e," hours, ")+t} mins`}(n)}function X(){const n=_("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,y("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",P(Q(),t)}(t)}function nn(){n(),v("trackLadderReset")&&X(),J()}export{nn as default}
//# sourceMappingURL=ladder-dece7c75.js.map
