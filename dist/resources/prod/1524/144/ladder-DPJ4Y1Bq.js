import{i as n}from"./interceptSubmit-CPOodCW2.js"
import{a as t,e,u as s,J as a,f as r,$ as c,S as o,O as i,P as u,as as l,R as d,T as f,U as p,W as h,X as m,at as g,a3 as w,a4 as L,s as k,au as b,av as v,_,a5 as y,ao as q,q as x,H as C,ad as O,d as P,aw as S,ax as T,ay as H,az as M}from"./calfSystem-fMW-YMyF.js"
import"./formToUrl-hXVFwEWZ.js"
function R(n){return t({cmd:"settings",...n})}function $(n){return R({subcmd:"flags",flags:n.map((n=>n?1:0))})}const j=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function F(n){const t=await e({cmd:"settings"})
if(!t)return{s:!1}
const c=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),r(e.entries())}(t.forms[0],n[0]),o=function(n,t){const e=new FormData(n)
return j.forEach(((n,s)=>e.set(n,t[s+1]))),r(e.entries())}(t.forms[2],n)
return await s([c,o].map((n=>a(n)))),{s:!0}}function D(){return R({subcmd:"view"})}function U(n){return{c:w,m:w,p:w,d:w}}function V(n){let t,e=b(n[0]),s=e&&z(n)
return{c(){s&&s.c(),t=v()},m(n,e){s&&s.m(n,e),h(n,t,e)},p(n,a){1&a&&(e=b(n[0])),e?s?s.p(n,a):(s=z(n),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(n){n&&L(t),s&&s.d(n)}}}function z(n){let t,e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:J,then:I,catch:E}
return l(e=n[1],s),{c(){t=d("td"),s.block.c(),p(t,"class","svelte-1quw1g")},m(n,e){h(n,t,e),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(t,a){n=t,s.ctx=n,2&a&&e!==(e=n[1])&&l(e,s)||g(s,n,a)},d(n){n&&L(t),s.block.d(),s.token=null,s=null}}}function E(n){return{c:w,m:w,p:w,d:w}}function I(n){let t,e,s
return{c(){t=d("input"),p(t,"type","checkbox")},m(a,r){h(a,t,r),t.checked=n[0],e||(s=[_(t,"change",n[6]),_(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&L(t),e=!1,y(s)}}}function J(n){let t
return{c(){t=d("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',p(t,"class","svelte-1quw1g")},m(n,e){h(n,t,e)},p:w,d(n){n&&L(t)}}}function N(n){let t
return{c(){t=d("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',p(t,"class","svelte-1quw1g")},m(n,e){h(n,t,e)},p:w,d(n){n&&L(t)}}}function W(n){let t,e,s,a={ctx:n,current:null,token:null,hasCatch:!1,pending:N,then:V,catch:U}
return l(n[2](),a),{c(){t=d("tr"),e=d("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',s=f(),a.block.c(),p(e,"class","svelte-1quw1g")},m(n,r){h(n,t,r),m(t,e),m(t,s),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null},p(t,[e]){g(a,n=t,e)},i:w,o:w,d(n){n&&L(t),a.block.d(),a.token=null,a=null}}}function X(n,t,e){let s,a,{isOnLadder:r}=t,{toggleLadder:c}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,r=n.isOnLadder),"toggleLadder"in n&&e(5,c=n.toggleLadder)},[s,a,async function(){e(0,s=await r())},function(){e(0,s=!s),e(1,a=c(s)),k("ladder","opt in/out")},r,c,function(){s=this.checked,e(0,s)}]}class Y extends o{constructor(n){super(),i(this,n,X,W,u,{isOnLadder:4,toggleLadder:5})}}let A=0
async function B(){const n=await c(D)
return A=n?.r?.flags,A?.[0]}function G(n){if(C(A))return A[0]=n,c($,F,A)}function K(){if(q("optInOnLadderPage")){!function(n){new Y({props:{toggleLadder:G,isOnLadder:B},target:n})}(x("#pCC table tbody"))}}function Q(){const n=q(S)
return n<T()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((H()-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${M(e," hours, ")+t} mins`}(n)}function Z(){const n=x("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,O("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",P(Q(),t)}(t)}function nn(){n(),q("trackLadderReset")&&Z(),K()}export{nn as default}
//# sourceMappingURL=ladder-DPJ4Y1Bq.js.map
