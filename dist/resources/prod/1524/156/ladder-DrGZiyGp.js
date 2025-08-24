import{i as s}from"./interceptSubmit-c1dihHnz.js"
import{V as a,$ as t,e,a0 as n,af as r,f as i,ap as o,x as c,B as u,C as f,E as d,aE as l,aF as p,D as v,G as g,aG as m,J as h,ak as w,L as _,aH as L,I as b,N as q,s as y,aA as k,q as C,n as P,ad as S,k as x,d as F,aI as O,aJ as R,aK as j,aL as D}from"./calfSystem-79LsojAC.js"
import"./formToUrl-CqnZfaJL.js"
function E(s){return a({cmd:"settings",...s})}function I(s){return E({subcmd:"flags",flags:s.map(s=>s?1:0)})}const T=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function V(s){const a=await e({cmd:"settings"})
if(!a)return{s:!1}
const t=function(s,a){const t=new FormData(s)
return t.append("pvp_ladder",a),i(t.entries())}(a.forms[0],s[0]),o=function(s,a){const t=new FormData(s)
return T.forEach((s,e)=>t.set(s,a[e+1])),i(t.entries())}(a.forms[2],s)
return await n([t,o].map(s=>r(s))),{s:!0}}function G(){return E({subcmd:"view"})}function H(s,a,t,e){b(a,!h(a)),b(t,e.toggleLadder(h(a)),!0),y("ladder","opt in/out")}var J=u('<input type="checkbox"/>'),M=u('<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>'),$=u('<td class="svelte-1quw1g"><!></td>'),A=u('<td class="svelte-1quw1g"><div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div></td>'),B=u('<tr><td class="svelte-1quw1g"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span></td><!></tr>')
function K(s,a){c(a,!0)
let t=w(void 0)
let e=w(void 0)
var n=B(),r=f(d(n))
l(r,async function(){b(t,await a.isOnLadder(),!0)},s=>{var a=A()
_(s,a)},s=>{var n=p(),r=v(n),i=s=>{var n=$(),r=d(n)
l(r,()=>h(e),s=>{var a=M()
_(s,a)},s=>{var n=J()
n.__click=[H,t,e,a],L(n,()=>h(t),s=>b(t,s)),_(s,n)}),_(s,n)}
g(r,s=>{m(h(t))&&s(i)}),_(s,n)}),_(s,n),q()}o(["click"])
let N=0
async function U(){const s=await t(G)
return N=s?.r?.flags,N?.[0]}function Y(s){if(S(N))return N[0]=s,t(I,V,N)}function z(){if(k("optInOnLadderPage")){!function(s){P(K,{props:{toggleLadder:Y,isOnLadder:U},target:s})}(C("#pCC table tbody"))}}function Q(){const s=k(D)
return s<O()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(s){let a=Math.floor((R()-s)/6e4)
const t=Math.floor(a/60)
return a%=60,`${j(t," hours, ")+a} mins`}(s)}function W(){const s=C("#pCC table")
if(!s)return
const a=s.insertRow(-1)
!function(s){const a=s.insertCell(-1)
a.height=25,x("Last Reset:",a)}(a),function(s){const a=s.insertCell(-1)
a.align="right",F(Q(),a)}(a)}function X(){s(),k("trackLadderReset")&&W(),z()}export{X as default}
//# sourceMappingURL=ladder-DrGZiyGp.js.map
