import{i as n}from"./interceptSubmit-9ec04868.js"
import{a as t,d as e,F as s,f as r,$ as a,S as o,K as c,L as i,M as u,N as l,O as d,Q as f,R as p,X as m,Y as h,n as g,ah as w,ai as L,V as k,Z as b,ae as v,q as _,a5 as y,s as q,aj as j}from"./calfSystem-929ac228.js"
import{a as C}from"./all-414e0607.js"
import{i as O}from"./isArray-09a53da7.js"
import{h as P,u as S}from"./await_block-1344c2da.js"
import{t as x,n as T}from"./now-6f22aec9.js"
import{o as F}from"./outputFormat-b1a8825f.js"
import"./formToUrl-25253a60.js"
function M(n){return t({cmd:"settings",...n})}function R(n){return M({subcmd:"flags",flags:n.map((n=>n?1:0))})}const H=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function $(n){const t=await e({cmd:"settings"}),a=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),r(e.entries())}(t.forms[0],n[0]),o=function(n,t){const e=new FormData(n)
return H.forEach(((n,s)=>e.set(n,t[s+1]))),r(e.entries())}(t.forms[2],n)
return await C([a,o].map((n=>s(n)))),{s:!0}}function V(){return M({subcmd:"view"})}function D(n){return{c:m,m:m,p:m,d:m}}function K(n){let t,e=w(n[0]),s=e&&N(n)
return{c(){s&&s.c(),t=L()},m(n,e){s&&s.m(n,e),f(n,t,e)},p(n,r){1&r&&(e=w(n[0])),e?s?s.p(n,r):(s=N(n),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(n){n&&h(t),s&&s.d(n)}}}function N(n){let t,e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:E,then:A,catch:Y}
return P(e=n[1],s),{c(){t=u("td"),s.block.c(),d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(t,r){n=t,s.ctx=n,2&r&&e!==(e=n[1])&&P(e,s)||S(s,n,r)},d(n){n&&h(t),s.block.d(),s.token=null,s=null}}}function Y(n){return{c:m,m:m,p:m,d:m}}function A(n){let t,e,s
return{c(){t=u("input"),d(t,"type","checkbox")},m(r,a){f(r,t,a),t.checked=n[0],e||(s=[k(t,"change",n[6]),k(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&h(t),e=!1,b(s)}}}function E(n){let t
return{c(){t=u("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function I(n){let t
return{c(){t=u("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function Q(n){let t,e,s,r={ctx:n,current:null,token:null,hasCatch:!1,pending:I,then:K,catch:D}
return P(n[2](),r),{c(){t=u("tr"),e=u("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',s=l(),r.block.c(),d(e,"class","svelte-1quw1g")},m(n,a){f(n,t,a),p(t,e),p(t,s),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null},p(t,[e]){S(r,n=t,e)},i:m,o:m,d(n){n&&h(t),r.block.d(),r.token=null,r=null}}}function U(n,t,e){let s,r,{isOnLadder:a}=t,{toggleLadder:o}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,a=n.isOnLadder),"toggleLadder"in n&&e(5,o=n.toggleLadder)},[s,r,async function(){e(0,s=await a())},function(){e(0,s=!s),e(1,r=o(s)),g("ladder","opt in/out")},a,o,function(){s=this.checked,e(0,s)}]}var X=class extends o{constructor(n){super(),c(this,n,U,Q,i,{isOnLadder:4,toggleLadder:5})}}
let Z=0
async function z(){const n=await a(V)
return Z=n?.r?.flags,Z?.[0]}function B(n){if(O(Z))return Z[0]=n,a(R,$,Z)}function G(){if(v("optInOnLadderPage")){!function(n){new X({props:{toggleLadder:B,isOnLadder:z},target:n})}(_("#pCC table tbody"))}}function J(){const n=v(j)
return n<x()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((T()-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${F(e," hours, ")+t} mins`}(n)}function W(){const n=_("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,y("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",q(J(),t)}(t)}function nn(){n(),v("trackLadderReset")&&W(),G()}export{nn as default}
//# sourceMappingURL=ladder-56034c9b.js.map
