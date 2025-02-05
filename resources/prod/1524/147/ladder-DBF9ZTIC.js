import{i as n}from"./interceptSubmit-CqzbaM3V.js"
import{a as t,$ as e,h as s,v as a,K as r,f as c,S as o,P as i,Q as u,au as l,T as d,U as f,av as p,_ as h,a0 as m,a3 as g,a4 as w,a5 as L,aw as k,ax as v,s as b,V as _,a1 as q,aq as y,q as x,I as C,ae as P,e as S,ay as O,az as T,aA as M,aB as H}from"./calfSystem-BAeDn21M.js"
import"./formToUrl-Bym6lubv.js"
function R(n){return t({cmd:"settings",...n})}function $(n){return R({subcmd:"flags",flags:n.map((n=>n?1:0))})}const j=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function F(n){const t=await s({cmd:"settings"})
if(!t)return{s:!1}
const e=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),c(e.entries())}(t.forms[0],n[0]),o=function(n,t){const e=new FormData(n)
return j.forEach(((n,s)=>e.set(n,t[s+1]))),c(e.entries())}(t.forms[2],n)
return await a([e,o].map((n=>r(n)))),{s:!0}}function V(){return R({subcmd:"view"})}function D(n){return{c:d,m:d,p:d,d:d}}function I(n){let t,e=k(n[0]),s=e&&U(n)
return{c(){s&&s.c(),t=v()},m(n,e){s&&s.m(n,e),h(n,t,e)},p(n,a){1&a&&(e=k(n[0])),e?s?s.p(n,a):(s=U(n),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(n){n&&f(t),s&&s.d(n)}}}function U(n){let t,e,s={ctx:n,current:null,token:null,hasCatch:!1,pending:B,then:A,catch:z}
return l(e=n[1],s),{c(){t=g("td"),s.block.c(),L(t,"class","svelte-1quw1g")},m(n,e){h(n,t,e),s.block.m(t,s.anchor=null),s.mount=()=>t,s.anchor=null},p(t,a){n=t,s.ctx=n,2&a&&e!==(e=n[1])&&l(e,s)||p(s,n,a)},d(n){n&&f(t),s.block.d(),s.token=null,s=null}}}function z(n){return{c:d,m:d,p:d,d:d}}function A(n){let t,e,s
return{c(){t=g("input"),L(t,"type","checkbox")},m(a,r){h(a,t,r),t.checked=n[0],e||(s=[q(t,"change",n[6]),q(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&f(t),e=!1,_(s)}}}function B(n){let t
return{c(){t=g("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',L(t,"class","svelte-1quw1g")},m(n,e){h(n,t,e)},p:d,d(n){n&&f(t)}}}function E(n){let t
return{c(){t=g("td"),t.innerHTML='<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>',L(t,"class","svelte-1quw1g")},m(n,e){h(n,t,e)},p:d,d(n){n&&f(t)}}}function K(n){let t,e,s,a={ctx:n,current:null,token:null,hasCatch:!1,pending:E,then:I,catch:D}
return l(n[2](),a),{c(){t=g("tr"),e=g("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',s=w(),a.block.c(),L(e,"class","svelte-1quw1g")},m(n,r){h(n,t,r),m(t,e),m(t,s),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null},p(t,[e]){p(a,n=t,e)},i:d,o:d,d(n){n&&f(t),a.block.d(),a.token=null,a=null}}}function N(n,t,e){let s,a,{isOnLadder:r}=t,{toggleLadder:c}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,r=n.isOnLadder),"toggleLadder"in n&&e(5,c=n.toggleLadder)},[s,a,async function(){e(0,s=await r())},function(){e(0,s=!s),e(1,a=c(s)),b("ladder","opt in/out")},r,c,function(){s=this.checked,e(0,s)}]}class Q extends o{constructor(n){super(),i(this,n,N,K,u,{isOnLadder:4,toggleLadder:5})}}let Y=0
async function G(){const n=await e(V)
return Y=n?.r?.flags,Y?.[0]}function J(n){if(C(Y))return Y[0]=n,e($,F,Y)}function W(){if(y("optInOnLadderPage")){!function(n){new Q({props:{toggleLadder:J,isOnLadder:G},target:n})}(x("#pCC table tbody"))}}function X(){const n=y(H)
return n<O()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((T()-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${M(e," hours, ")+t} mins`}(n)}function Z(){const n=x("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,P("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",S(X(),t)}(t)}function nn(){n(),y("trackLadderReset")&&Z(),W()}export{nn as default}
//# sourceMappingURL=ladder-DBF9ZTIC.js.map
