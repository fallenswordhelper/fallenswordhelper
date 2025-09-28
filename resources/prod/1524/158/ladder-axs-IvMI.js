import{i as s}from"./interceptSubmit-UQt2BX0g.js"
import{V as t,$ as a,e,a0 as n,ae as r,f as i,ao as o,x as c,B as l,C as u,E as f,aE as d,aF as p,D as v,G as m,aG as h,J as g,aj as _,L,aH as b,I as w,N as y,s as k,az as C,q as P,n as S,ac as j,k as x,d as F,aI as O,aJ as R,aK as D,aL as E}from"./calfSystem-CIuUjh4H.js"
import"./formToUrl-BcjoMJ8T.js"
function I(s){return t({cmd:"settings",...s})}function T(s){return I({subcmd:"flags",flags:s.map(s=>s?1:0)})}const V=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function q(s){const t=await e({cmd:"settings"})
if(!t)return{s:!1}
const a=function(s,t){const a=new FormData(s)
return a.append("pvp_ladder",t),i(a.entries())}(t.forms[0],s[0]),o=function(s,t){const a=new FormData(s)
return V.forEach((s,e)=>a.set(s,t[e+1])),i(a.entries())}(t.forms[2],s)
return await n([a,o].map(s=>r(s))),{s:!0}}function G(){return I({subcmd:"view"})}function H(s,t,a,e){w(t,!g(t)),w(a,e.toggleLadder(g(t)),!0),k("ladder","opt in/out")}var J=l('<input type="checkbox"/>'),M=l('<div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div>'),$=l('<td class="svelte-lv89p4"><!></td>'),z=l('<td class="svelte-lv89p4"><div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div></td>'),B=l('<tr><td class="svelte-lv89p4"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-lv89p4">PvP Ladder Opt-in:</span></td><!></tr>')
function K(s,t){c(t,!0)
let a=_(void 0)
let e=_(void 0)
var n=B(),r=u(f(n))
d(r,async function(){w(a,await t.isOnLadder(),!0)},s=>{var t=z()
L(s,t)},s=>{var n=p(),r=v(n),i=s=>{var n=$(),r=f(n)
d(r,()=>g(e),s=>{var t=M()
L(s,t)},s=>{var n=J()
n.__click=[H,a,e,t],b(n,()=>g(a),s=>w(a,s)),L(s,n)}),L(s,n)}
m(r,s=>{h(g(a))&&s(i)}),L(s,n)}),L(s,n),y()}o(["click"])
let N=0
async function U(){const s=await a(G)
return N=s?.r?.flags,N?.[0]}function Y(s){if(j(N))return N[0]=s,a(T,q,N)}function A(){if(!C("optInOnLadderPage"))return
const s=P("#pCC table tbody")
s&&function(s){S(K,{props:{toggleLadder:Y,isOnLadder:U},target:s})}(s)}function Q(){const s=C(E)
return s<O()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(s){let t=Math.floor((R()-s)/6e4)
const a=Math.floor(t/60)
return t%=60,`${D(a," hours, ")+t} mins`}(s)}function W(){const s=P("#pCC table")
if(!s)return
const t=s.insertRow(-1)
!function(s){const t=s.insertCell(-1)
t.height=25,x("Last Reset:",t)}(t),function(s){const t=s.insertCell(-1)
t.align="right",F(Q(),t)}(t)}function X(){s(),C("trackLadderReset")&&W(),A()}export{X as default}
//# sourceMappingURL=ladder-axs-IvMI.js.map
