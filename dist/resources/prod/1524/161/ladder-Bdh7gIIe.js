import{i as s}from"./interceptSubmit-Bhotwi5X.js"
import{W as t,$ as a,e,a1 as n,af as r,f as i,ap as o,y as c,C as l,D as u,F as f,aF as d,aG as p,E as v,H as m,aH as h,K as g,ak as _,N as L,aI as b,J as y,O as w,s as k,aA as C,q as P,t as S,ad as F,l as O,d as R,aJ as j,aK as x,aL as D,aM as H}from"./calfSystem-Cs6CSxoU.js"
import"./formToUrl-CAPzQx_Y.js"
function M(s){return t({cmd:"settings",...s})}function T(s){return M({subcmd:"flags",flags:s.map(s=>s?1:0)})}const q=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function E(s){const t=await e({cmd:"settings"})
if(!t)return{s:!1}
const a=function(s,t){const a=new FormData(s)
return a.append("pvp_ladder",t),i(a.entries())}(t.forms[0],s[0]),o=function(s,t){const a=new FormData(s)
return q.forEach((s,e)=>a.set(s,t[e+1])),i(a.entries())}(t.forms[2],s)
return await n([a,o].map(s=>r(s))),{s:!0}}function I(){return M({subcmd:"view"})}var J=l('<input type="checkbox"/>'),K=l('<div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div>'),V=l('<td class="svelte-lv89p4"><!></td>'),$=l('<td class="svelte-lv89p4"><div class="svelte-lv89p4"><span class="fshSpinner fshSpinner12 svelte-lv89p4"></span></div></td>'),A=l('<tr><td class="svelte-lv89p4"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-lv89p4">PvP Ladder Opt-in:</span></td><!></tr>')
function G(s,t){c(t,!0)
let a=_(void 0)
let e=_(void 0)
function n(){y(a,!g(a)),y(e,t.toggleLadder(g(a)),!0),k("ladder","opt in/out")}var r=A(),i=u(f(r))
d(i,async function(){y(a,await t.isOnLadder(),!0)},s=>{var t=$()
L(s,t)},s=>{var t=p(),r=v(t),i=s=>{var t=V(),r=f(t)
d(r,()=>g(e),s=>{var t=K()
L(s,t)},s=>{var t=J()
t.__click=n,b(t,()=>g(a),s=>y(a,s)),L(s,t)}),L(s,t)}
m(r,s=>{h(g(a))&&s(i)}),L(s,t)}),L(s,r),w()}o(["click"])
let N=0
async function U(){const s=await a(I)
return N=s?.r?.flags,N?.[0]}function W(s){if(F(N))return N[0]=s,a(T,E,N)}function Y(){if(!C("optInOnLadderPage"))return
const s=P("#pCC table tbody")
s&&function(s){S(G,{props:{toggleLadder:W,isOnLadder:U},target:s})}(s)}function z(){const s=C(H)
return s<j()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(s){let t=Math.floor((x()-s)/6e4)
const a=Math.floor(t/60)
return t%=60,`${D(a," hours, ")+t} mins`}(s)}function B(){const s=P("#pCC table")
if(!s)return
const t=s.insertRow(-1)
!function(s){const t=s.insertCell(-1)
t.height=25,O("Last Reset:",t)}(t),function(s){const t=s.insertCell(-1)
t.align="right",R(z(),t)}(t)}function Q(){s(),C("trackLadderReset")&&B(),Y()}export{Q as default}
//# sourceMappingURL=ladder-Bdh7gIIe.js.map
