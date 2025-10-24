import{i as t}from"./interceptSubmit-Dg8BOmTG.js"
import{W as s,$ as a,e,a1 as n,af as r,f as i,ap as o,y as c,C as l,D as u,F as f,aF as d,aG as p,E as v,H as m,aH as h,K as g,ak as _,N as L,aI as b,J as y,O as w,s as k,aA as C,q as P,t as S,ad as F,l as O,d as R,aJ as j,aK as x,aL as D,aM as H}from"./calfSystem-CIdPz3EO.js"
import"./formToUrl-JPHWbAvp.js"
function M(t){return s({cmd:"settings",...t})}function T(t){return M({subcmd:"flags",flags:t.map(t=>t?1:0)})}const q=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function E(t){const s=await e({cmd:"settings"})
if(!s)return{s:!1}
const a=function(t,s){const a=new FormData(t)
return a.append("pvp_ladder",s),i(a.entries())}(s.forms[0],t[0]),o=function(t,s){const a=new FormData(t)
return q.forEach((t,e)=>a.set(t,s[e+1])),i(a.entries())}(s.forms[2],t)
return await n([a,o].map(t=>r(t))),{s:!0}}function I(){return M({subcmd:"view"})}function J(t,s,a,e){y(s,!g(s)),y(a,e.toggleLadder(g(s)),!0),k("ladder","opt in/out")}var K=l('<input type="checkbox"/>'),V=l('<div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div>'),$=l('<td class="svelte-lv89p4"><!></td>'),A=l('<td class="svelte-lv89p4"><div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div></td>'),G=l('<tr><td class="svelte-lv89p4"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-lv89p4">PvP Ladder Opt-in:</span></td><!></tr>')
function N(t,s){c(s,!0)
let a=_(void 0)
let e=_(void 0)
var n=G(),r=u(f(n))
d(r,async function(){y(a,await s.isOnLadder(),!0)},t=>{var s=A()
L(t,s)},t=>{var n=p(),r=v(n),i=t=>{var n=$(),r=f(n)
d(r,()=>g(e),t=>{var s=V()
L(t,s)},t=>{var n=K()
n.__click=[J,a,e,s],b(n,()=>g(a),t=>y(a,t)),L(t,n)}),L(t,n)}
m(r,t=>{h(g(a))&&t(i)}),L(t,n)}),L(t,n),w()}o(["click"])
let U=0
async function W(){const t=await a(I)
return U=t?.r?.flags,U?.[0]}function Y(t){if(F(U))return U[0]=t,a(T,E,U)}function z(){if(!C("optInOnLadderPage"))return
const t=P("#pCC table tbody")
t&&function(t){S(N,{props:{toggleLadder:Y,isOnLadder:W},target:t})}(t)}function B(){const t=C(H)
return t<j()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let s=Math.floor((x()-t)/6e4)
const a=Math.floor(s/60)
return s%=60,`${D(a," hours, ")+s} mins`}(t)}function Q(){const t=P("#pCC table")
if(!t)return
const s=t.insertRow(-1)
!function(t){const s=t.insertCell(-1)
s.height=25,O("Last Reset:",s)}(s),function(t){const s=t.insertCell(-1)
s.align="right",R(B(),s)}(s)}function X(){t(),C("trackLadderReset")&&Q(),z()}export{X as default}
//# sourceMappingURL=ladder-BMKDiClh.js.map
