import{i as s}from"./interceptSubmit-B-ce898B.js"
import{V as t,$ as a,e,a0 as n,af as r,f as i,ap as o,x as c,B as u,C as f,E as d,aF as l,aG as p,D as v,G as g,aH as m,J as h,ak as w,L as _,aI as L,I as b,N as q,s as y,aA as k,q as C,n as P,ad as S,k as x,d as F,aJ as O,aK as R,aL as j,aM as D}from"./calfSystem-CQOGdqPv.js"
import"./formToUrl-BAYKyqXO.js"
function I(s){return t({cmd:"settings",...s})}function M(s){return I({subcmd:"flags",flags:s.map(s=>s?1:0)})}const T=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function V(s){const t=await e({cmd:"settings"})
if(!t)return{s:!1}
const a=function(s,t){const a=new FormData(s)
return a.append("pvp_ladder",t),i(a.entries())}(t.forms[0],s[0]),o=function(s,t){const a=new FormData(s)
return T.forEach((s,e)=>a.set(s,t[e+1])),i(a.entries())}(t.forms[2],s)
return await n([a,o].map(s=>r(s))),{s:!0}}function E(){return I({subcmd:"view"})}function G(s,t,a,e){b(t,!h(t)),b(a,e.toggleLadder(h(t)),!0),y("ladder","opt in/out")}var H=u('<input type="checkbox"/>'),J=u('<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>'),$=u('<td class="svelte-1quw1g"><!></td>'),A=u('<td class="svelte-1quw1g"><div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div></td>'),B=u('<tr><td class="svelte-1quw1g"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span></td><!></tr>')
function K(s,t){c(t,!0)
let a=w(void 0)
let e=w(void 0)
var n=B(),r=f(d(n))
l(r,async function(){b(a,await t.isOnLadder(),!0)},s=>{var t=A()
_(s,t)},s=>{var n=p(),r=v(n),i=s=>{var n=$(),r=d(n)
l(r,()=>h(e),s=>{var t=J()
_(s,t)},s=>{var n=H()
n.__click=[G,a,e,t],L(n,()=>h(a),s=>b(a,s)),_(s,n)}),_(s,n)}
g(r,s=>{m(h(a))&&s(i)}),_(s,n)}),_(s,n),q()}o(["click"])
let N=0
async function U(){const s=await a(E)
return N=s?.r?.flags,N?.[0]}function Y(s){if(S(N))return N[0]=s,a(M,V,N)}function z(){if(!k("optInOnLadderPage"))return
const s=C("#pCC table tbody")
s&&function(s){P(K,{props:{toggleLadder:Y,isOnLadder:U},target:s})}(s)}function Q(){const s=k(D)
return s<O()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(s){let t=Math.floor((R()-s)/6e4)
const a=Math.floor(t/60)
return t%=60,`${j(a," hours, ")+t} mins`}(s)}function W(){const s=C("#pCC table")
if(!s)return
const t=s.insertRow(-1)
!function(s){const t=s.insertCell(-1)
t.height=25,x("Last Reset:",t)}(t),function(s){const t=s.insertCell(-1)
t.align="right",F(Q(),t)}(t)}function X(){s(),k("trackLadderReset")&&W(),z()}export{X as default}
//# sourceMappingURL=ladder-D2jzo9Ta.js.map
