import{i as n}from"./interceptSubmit-Mjd63zg8.js"
import{a as t,e,G as s,f as r,$ as a,S as o,L as c,M as i,O as u,P as l,Q as d,T as f,U as p,_ as m,a0 as h,s as g,al as L,am as w,X as k,a1 as b,ai as v,q as _,a9 as y,d as q,an as j}from"./calfSystem-DG-hTKTe.js"
import{a as C}from"./all-YfMtr2SN.js"
import{i as O}from"./isArray-eVldfhw1.js"
import{h as P,u as S}from"./await_block-D4X9_cLH.js"
import{t as x,n as T}from"./now-Cx4PsKjI.js"
import{o as M}from"./outputFormat-CxYfzxHE.js"
import"./formToUrl-KxVQzQM5.js"
function F(n){return t({cmd:"settings",...n})}function H(n){return F({subcmd:"flags",flags:n.map((n=>n?1:0))})}const R=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function $(n){const t=await e({cmd:"settings"})
if(!t)return{s:!1}
const a=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),r(e.entries())}(t.forms[0],n[0]),o=function(n,t){const e=new FormData(n)
return R.forEach(((n,s)=>e.set(n,t[s+1]))),r(e.entries())}(t.forms[2],n)
return await C([a,o].map((n=>s(n)))),{s:!0}}function U(){return F({subcmd:"view"})}function D(n){return{c:m,m:m,p:m,d:m}}function G(n){let t,e=L(n[0]),s=e&&Q(n)
return{c(){s&&s.c(),t=w()},m(n,e){s&&s.m(n,e),f(n,t,e)},p(n,r){1&r&&(e=L(n[0])),e?s?s.p(n,r):(s=Q(n),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(n){n&&h(t),s&&s.d(n)}}}function Q(n){let t,e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:E,then:A,catch:V}
return P(e=n[1],s),{c(){t=u("td"),s.block.c(),d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(t,r){n=t,s.ctx=n,2&r&&e!==(e=n[1])&&P(e,s)||S(s,n,r)},d(n){n&&h(t),s.block.d(),s.token=null,s=null}}}function V(n){return{c:m,m:m,p:m,d:m}}function A(n){let t,e,s
return{c(){t=u("input"),d(t,"type","checkbox")},m(r,a){f(r,t,a),t.checked=n[0],e||(s=[k(t,"change",n[6]),k(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&h(t),e=!1,b(s)}}}function E(n){let t
return{c(){t=u("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function I(n){let t
return{c(){t=u("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',d(t,"class","svelte-1quw1g")},m(n,e){f(n,t,e)},p:m,d(n){n&&h(t)}}}function N(n){let t,e,s,r={ctx:n,current:null,token:null,hasCatch:!1,pending:I,then:G,catch:D}
return P(n[2](),r),{c(){t=u("tr"),e=u("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',s=l(),r.block.c(),d(e,"class","svelte-1quw1g")},m(n,a){f(n,t,a),p(t,e),p(t,s),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null},p(t,[e]){S(r,n=t,e)},i:m,o:m,d(n){n&&h(t),r.block.d(),r.token=null,r=null}}}function X(n,t,e){let s,r,{isOnLadder:a}=t,{toggleLadder:o}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,a=n.isOnLadder),"toggleLadder"in n&&e(5,o=n.toggleLadder)},[s,r,async function(){e(0,s=await a())},function(){e(0,s=!s),e(1,r=o(s)),g("ladder","opt in/out")},a,o,function(){s=this.checked,e(0,s)}]}var Y=class extends o{constructor(n){super(),c(this,n,X,N,i,{isOnLadder:4,toggleLadder:5})}}
let z=0
async function B(){const n=await a(U)
return z=n?.r?.flags,z?.[0]}function J(n){if(O(z))return z[0]=n,a(H,$,z)}function K(){if(v("optInOnLadderPage")){!function(n){new Y({props:{toggleLadder:J,isOnLadder:B},target:n})}(_("#pCC table tbody"))}}function W(){const n=v(j)
return n<x()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((T()-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${M(e," hours, ")+t} mins`}(n)}function Z(){const n=_("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,y("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",q(W(),t)}(t)}function nn(){n(),v("trackLadderReset")&&Z(),K()}export{nn as default}
//# sourceMappingURL=ladder-BaU8VD7T.js.map
