import{i as s}from"./interceptSubmit-ChmNlDoQ.js"
import{U as t,$ as a,e,_ as n,ae as r,f as i,ao as o,x as c,A as u,B as f,D as d,aD as l,aE as p,C as v,F as g,aF as m,I as h,aj as w,K as _,aG as L,H as b,L as q,s as y,az as k,q as C,n as P,ac as S,k as F,d as j,aH as x,aI as D,aJ as O,aK as R}from"./calfSystem-UyQ_FKFu.js"
import"./formToUrl-et7r_Ml7.js"
function H(s){return t({cmd:"settings",...s})}function I(s){return H({subcmd:"flags",flags:s.map(s=>s?1:0)})}const T=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function E(s){const t=await e({cmd:"settings"})
if(!t)return{s:!1}
const a=function(s,t){const a=new FormData(s)
return a.append("pvp_ladder",t),i(a.entries())}(t.forms[0],s[0]),o=function(s,t){const a=new FormData(s)
return T.forEach((s,e)=>a.set(s,t[e+1])),i(a.entries())}(t.forms[2],s)
return await n([a,o].map(s=>r(s))),{s:!0}}function K(){return H({subcmd:"view"})}function M(s,t,a,e){b(t,!h(t)),b(a,e.toggleLadder(h(t)),!0),y("ladder","opt in/out")}var U=u('<input type="checkbox"/>'),V=u('<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>'),$=u('<td class="svelte-1quw1g"><!></td>'),z=u('<td class="svelte-1quw1g"><div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div></td>'),A=u('<tr><td class="svelte-1quw1g"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span></td><!></tr>')
function B(s,t){c(t,!0)
let a=w(void 0)
let e=w(void 0)
var n=A(),r=f(d(n))
l(r,async function(){b(a,await t.isOnLadder(),!0)},s=>{var t=z()
_(s,t)},s=>{var n=p(),r=v(n),i=s=>{var n=$(),r=d(n)
l(r,()=>h(e),s=>{var t=V()
_(s,t)},s=>{var n=U()
n.__click=[M,a,e,t],L(n,()=>h(a),s=>b(a,s)),_(s,n)}),_(s,n)}
g(r,s=>{m(h(a))&&s(i)}),_(s,n)}),_(s,n),q()}o(["click"])
let G=0
async function J(){const s=await a(K)
return G=s?.r?.flags,G?.[0]}function Y(s){if(S(G))return G[0]=s,a(I,E,G)}function N(){if(k("optInOnLadderPage")){!function(s){P(B,{props:{toggleLadder:Y,isOnLadder:J},target:s})}(C("#pCC table tbody"))}}function Q(){const s=k(R)
return s<x()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(s){let t=Math.floor((D()-s)/6e4)
const a=Math.floor(t/60)
return t%=60,`${O(a," hours, ")+t} mins`}(s)}function W(){const s=C("#pCC table")
if(!s)return
const t=s.insertRow(-1)
!function(s){const t=s.insertCell(-1)
t.height=25,F("Last Reset:",t)}(t),function(s){const t=s.insertCell(-1)
t.align="right",j(Q(),t)}(t)}function X(){s(),k("trackLadderReset")&&W(),N()}export{X as default}
//# sourceMappingURL=ladder-DhRBXIJE.js.map
