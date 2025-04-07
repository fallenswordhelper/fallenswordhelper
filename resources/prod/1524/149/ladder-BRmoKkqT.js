import{i as a}from"./interceptSubmit-CcvGNLGd.js"
import{a as s,$ as t,k as e,x as n,M as r,j as i,a6 as o,R as c,S as u,X as d,Y as f,Z as l,as as p,at as v,au as g,a0 as m,av as h,V as w,a3 as _,aw as b,W as y,a4 as L,s as q,ao as k,q as S,ad as P,K as C,ab as j,h as x,ax as R,ay as O,az as F,aA as M}from"./calfSystem-BGW9cdWN.js"
import"./formToUrl-BkW6Pnxi.js"
function T(a){return s({cmd:"settings",...a})}function V(a){return T({subcmd:"flags",flags:a.map((a=>a?1:0))})}const D=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
async function Y(a){const s=await e({cmd:"settings"})
if(!s)return{s:!1}
const t=function(a,s){const t=new FormData(a)
return t.append("pvp_ladder",s),i(t.entries())}(s.forms[0],a[0]),o=function(a,s){const t=new FormData(a)
return D.forEach(((a,e)=>t.set(a,s[e+1]))),i(t.entries())}(s.forms[2],a)
return await n([t,o].map((a=>r(a)))),{s:!0}}function $(){return T({subcmd:"view"})}function z(a,s,t,e){y(s,!w(s)),y(t,e.toggleLadder(w(s)),!0),q("ladder","opt in/out")}var A=d('<input type="checkbox">'),E=d('<div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div>'),H=d('<td class="svelte-1quw1g"><!></td>'),I=d('<td class="svelte-1quw1g"><div class="svelte-1quw1g"><span class="fshSpinner fshSpinner12 svelte-1quw1g"></span></div></td>'),K=d('<tr><td class="svelte-1quw1g"><span data-tooltip="Ticking this box opts you in to the PVP Ladder,\n        unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span></td><!></tr>')
function U(a,s){c(s,!0)
let t=u(void 0)
let e=u(void 0)
var n=K(),r=f(l(n))
p(r,(async function(){y(t,await s.isOnLadder(),!0)}),(a=>{var s=I()
_(a,s)}),(a=>{var n=v(),r=g(n),i=a=>{var n=H(),r=l(n)
p(r,(()=>w(e)),(a=>{var s=E()
_(a,s)}),(a=>{var n=A()
n.__click=[z,t,e,s],b(n,(()=>w(t)),(a=>y(t,a))),_(a,n)})),_(a,n)}
m(r,(a=>{h(w(t))&&a(i)})),_(a,n)})),_(a,n),L()}o(["click"])
let W=0
async function X(){const a=await t($)
return W=a?.r?.flags,W?.[0]}function Z(a){if(C(W))return W[0]=a,t(V,Y,W)}function B(){if(k("optInOnLadderPage")){!function(a){P(U,{props:{toggleLadder:Z,isOnLadder:X},target:a})}(S("#pCC table tbody"))}}function G(){const a=k(M)
return a<R()?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(a){let s=Math.floor((O()-a)/6e4)
const t=Math.floor(s/60)
return s%=60,`${F(t," hours, ")+s} mins`}(a)}function J(){const a=S("#pCC table")
if(!a)return
const s=a.insertRow(-1)
!function(a){const s=a.insertCell(-1)
s.height=25,j("Last Reset:",s)}(s),function(a){const s=a.insertCell(-1)
s.align="right",x(G(),s)}(s)}function N(){a(),k("trackLadderReset")&&J(),B()}export{N as default}
//# sourceMappingURL=ladder-BRmoKkqT.js.map
