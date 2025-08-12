import{i as s}from"./interceptSubmit-Cvm926dN.js"
import{W as a,$ as t,j as e,a1 as n,ag as r,h as i,aq as o,z as c,C as u,D as f,F as l,aF as d,aG as p,E as g,H as v,aH as m,K as h,al as w,N as _,aI as q,J as L,O as b,s as y,aB as k,q as C,u as P,ae as S,m as F,e as O,aJ as j,aK as R,aL as x,aM as D}from"./calfSystem-BlPuMQGT.js"
import"./formToUrl-Dy2RFM47.js"
function H(s){return a({cmd:"settings",...s})}function M(s){return H({subcmd:"flags",flags:s.map((s=>s?1:0))})}const T=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function E(s){const a=await e({cmd:"settings"})
if(!a)return{s:!1}
const t=function(s,a){const t=new FormData(s)
return t.append("pvp_ladder",a),i(t.entries())}(a.forms[0],s[0]),o=function(s,a){const t=new FormData(s)
return T.forEach(((s,e)=>t.set(s,a[e+1]))),i(t.entries())}(a.forms[2],s)
return await n([t,o].map((s=>r(s)))),{s:!0}}function I(){return H({subcmd:"view"})}function J(s,a,t,e){L(a,!h(a)),L(t,e.toggleLadder(h(a)),!0),y("ladder","opt in/out")}var K=u('<input type="checkbox"/>'),V=u('<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>'),$=u('<td class="svelte-1quw1g"><!></td>'),z=u('<td class="svelte-1quw1g"><div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div></td>'),B=u('<tr><td class="svelte-1quw1g"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span></td><!></tr>')
function G(s,a){c(a,!0)
let t=w(void 0)
let e=w(void 0)
var n=B(),r=f(l(n))
d(r,(async function(){L(t,await a.isOnLadder(),!0)}),(s=>{var a=z()
_(s,a)}),(s=>{var n=p(),r=g(n),i=s=>{var n=$(),r=l(n)
d(r,(()=>h(e)),(s=>{var a=V()
_(s,a)}),(s=>{var n=K()
n.__click=[J,t,e,a],q(n,(()=>h(t)),(s=>L(t,s))),_(s,n)})),_(s,n)}
v(r,(s=>{m(h(t))&&s(i)})),_(s,n)})),_(s,n),b()}o(["click"])
let N=0
async function U(){const s=await t(I)
return N=s?.r?.flags,N?.[0]}function W(s){if(S(N))return N[0]=s,t(M,E,N)}function Y(){if(k("optInOnLadderPage")){!function(s){P(G,{props:{toggleLadder:W,isOnLadder:U},target:s})}(C("#pCC table tbody"))}}function A(){const s=k(D)
return s<j()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(s){let a=Math.floor((R()-s)/6e4)
const t=Math.floor(a/60)
return a%=60,`${x(t," hours, ")+a} mins`}(s)}function Q(){const s=C("#pCC table")
if(!s)return
const a=s.insertRow(-1)
!function(s){const a=s.insertCell(-1)
a.height=25,F("Last Reset:",a)}(a),function(s){const a=s.insertCell(-1)
a.align="right",O(A(),a)}(a)}function X(){s(),k("trackLadderReset")&&Q(),Y()}export{X as default}
//# sourceMappingURL=ladder-BSDPD67W.js.map
