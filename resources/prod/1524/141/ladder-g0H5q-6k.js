import{i as n}from"./interceptSubmit-DTfrwUG-.js"
import{a as t,d as e,f as s,G as a,$ as r,S as o,L as c,M as i,Z as u,al as l,O as d,Y as f,R as p,a2 as m,U as h,X as g,am as L,T as k,W as w,s as b,ai as v,q as _,a9 as y,c as q,an as O,ao as S,ap as C}from"./calfSystem-Blt4DbaE.js"
import{a as j}from"./all-YfMtr2SN.js"
import{i as x}from"./isArray-eVldfhw1.js"
import{h as P,u as T}from"./await_block-Bf7EOqQ9.js"
import{o as M}from"./outputFormat-CxYfzxHE.js"
import"./formToUrl-Bfgg_ioA.js"
function R(n){return t({cmd:"settings",...n})}function F(n){return R({subcmd:"flags",flags:n.map((n=>n?1:0))})}const H=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function $(n){const t=await e({cmd:"settings"})
if(!t)return{s:!1}
const r=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),s(e.entries())}(t.forms[0],n[0]),o=function(n,t){const e=new FormData(n)
return H.forEach(((n,s)=>e.set(n,t[s+1]))),s(e.entries())}(t.forms[2],n)
return await j([r,o].map((n=>a(n)))),{s:!0}}function D(){return R({subcmd:"view"})}function E(n){return{c:u,m:u,p:u,d:u}}function U(n){let t,e=l(n[0]),s=e&&V(n)
return{c(){s&&s.c(),t=L()},m(n,e){s&&s.m(n,e),p(n,t,e)},p(n,a){1&a&&(e=l(n[0])),e?s?s.p(n,a):(s=V(n),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(n){n&&d(t),s&&s.d(n)}}}function V(n){let t,e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:G,then:A,catch:Y}
return P(e=n[1],s),{c(){t=h("td"),s.block.c(),g(t,"class","svelte-1quw1g")},m(n,e){p(n,t,e),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(t,a){n=t,s.ctx=n,2&a&&e!==(e=n[1])&&P(e,s)||T(s,n,a)},d(n){n&&d(t),s.block.d(),s.token=null,s=null}}}function Y(n){return{c:u,m:u,p:u,d:u}}function A(n){let t,e,s
return{c(){t=h("input"),g(t,"type","checkbox")},m(a,r){p(a,t,r),t.checked=n[0],e||(s=[m(t,"change",n[6]),m(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&d(t),e=!1,f(s)}}}function G(n){let t
return{c(){t=h("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',g(t,"class","svelte-1quw1g")},m(n,e){p(n,t,e)},p:u,d(n){n&&d(t)}}}function I(n){let t
return{c(){t=h("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',g(t,"class","svelte-1quw1g")},m(n,e){p(n,t,e)},p:u,d(n){n&&d(t)}}}function J(n){let t,e,s,a={ctx:n,current:null,token:null,hasCatch:!1,pending:I,then:U,catch:E}
return P(n[2](),a),{c(){t=h("tr"),e=h("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',s=w(),a.block.c(),g(e,"class","svelte-1quw1g")},m(n,r){p(n,t,r),k(t,e),k(t,s),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null},p(t,[e]){T(a,n=t,e)},i:u,o:u,d(n){n&&d(t),a.block.d(),a.token=null,a=null}}}function N(n,t,e){let s,a,{isOnLadder:r}=t,{toggleLadder:o}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,r=n.isOnLadder),"toggleLadder"in n&&e(5,o=n.toggleLadder)},[s,a,async function(){e(0,s=await r())},function(){e(0,s=!s),e(1,a=o(s)),b("ladder","opt in/out")},r,o,function(){s=this.checked,e(0,s)}]}class W extends o{constructor(n){super(),c(this,n,N,J,i,{isOnLadder:4,toggleLadder:5})}}let X=0
async function Z(){const n=await r(D)
return X=n?.r?.flags,X?.[0]}function z(n){if(x(X))return X[0]=n,r(F,$,X)}function B(){if(v("optInOnLadderPage")){!function(n){new W({props:{toggleLadder:z,isOnLadder:Z},target:n})}(_("#pCC table tbody"))}}function K(){const n=v(O)
return n<S()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((C()-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${M(e," hours, ")+t} mins`}(n)}function Q(){const n=_("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,y("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",q(K(),t)}(t)}function nn(){n(),v("trackLadderReset")&&Q(),B()}export{nn as default}
//# sourceMappingURL=ladder-g0H5q-6k.js.map
