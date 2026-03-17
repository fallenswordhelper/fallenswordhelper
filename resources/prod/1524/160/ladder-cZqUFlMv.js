import{i as t}from"./interceptSubmit-rdUGIp5j.js"
import{W as s,$ as a,e,a1 as n,af as r,f as i,ap as o,y as c,C as l,D as u,F as f,aF as d,aG as p,E as v,H as m,aH as h,K as g,ak as _,N as L,aI as b,J as y,O as w,s as k,aA as C,q as P,t as S,ad as F,l as O,d as R,aJ as j,aK as x,aL as D,aM as H}from"./calfSystem-HVCiy-VV.js"
import"./formToUrl-BMkQD7VR.js"
function M(t){return s({cmd:"settings",...t})}function T(t){return M({subcmd:"flags",flags:t.map(t=>t?1:0)})}const q=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function E(t){const s=await e({cmd:"settings"})
if(!s)return{s:!1}
const a=function(t,s){const a=new FormData(t)
return a.append("pvp_ladder",s),i(a.entries())}(s.forms[0],t[0]),o=function(t,s){const a=new FormData(t)
return q.forEach((t,e)=>a.set(t,s[e+1])),i(a.entries())}(s.forms[2],t)
return await n([a,o].map(t=>r(t))),{s:!0}}function I(){return M({subcmd:"view"})}var J=l('<input type="checkbox"/>'),K=l('<div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div>'),V=l('<td class="svelte-lv89p4"><!></td>'),$=l('<td class="svelte-lv89p4"><div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div></td>'),A=l('<tr><td class="svelte-lv89p4"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-lv89p4">PvP Ladder Opt-in:</span></td><!></tr>')
function G(t,s){c(s,!0)
let a=_(void 0)
let e=_(void 0)
function n(){y(a,!g(a)),y(e,s.toggleLadder(g(a)),!0),k("ladder","opt in/out")}var r=A(),i=u(f(r))
d(i,async function(){y(a,await s.isOnLadder(),!0)},t=>{var s=$()
L(t,s)},t=>{var s=p(),r=v(s),i=t=>{var s=V(),r=f(s)
d(r,()=>g(e),t=>{var s=K()
L(t,s)},t=>{var s=J()
s.__click=n,b(s,()=>g(a),t=>y(a,t)),L(t,s)}),L(t,s)}
m(r,t=>{h(g(a))&&t(i)}),L(t,s)}),L(t,r),w()}o(["click"])
let N=0
async function U(){const t=await a(I)
return N=t?.r?.flags,N?.[0]}function W(t){if(F(N))return N[0]=t,a(T,E,N)}function Y(){if(!C("optInOnLadderPage"))return
const t=P("#pCC table tbody")
t&&function(t){S(G,{props:{toggleLadder:W,isOnLadder:U},target:t})}(t)}function z(){const t=C(H)
return t<j()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let s=Math.floor((x()-t)/6e4)
const a=Math.floor(s/60)
return s%=60,`${D(a," hours, ")+s} mins`}(t)}function B(){const t=P("#pCC table")
if(!t)return
const s=t.insertRow(-1)
!function(t){const s=t.insertCell(-1)
s.height=25,O("Last Reset:",s)}(s),function(t){const s=t.insertCell(-1)
s.align="right",R(z(),s)}(s)}function Q(){t(),C("trackLadderReset")&&B(),Y()}export{Q as default}
//# sourceMappingURL=ladder-cZqUFlMv.js.map
