import{ap as a,x as t,y as s,ak as e,al as o,dY as l,aG as i,D as n,aF as c,B as r,dT as u,J as b,I as v,E as d,C as f,P as p,az as y,dZ as m,L as g,N as j,s as k,bD as C,as as x,n as L}from"./calfSystem-CQOGdqPv.js"
import{a as _,b as w}from"./idbLogger-B37td9AD.js"
function A(a,t){b(t).focus(),b(t).select()}async function D(a,t){k("Combat Log","clear storage")
await x("Are you sure you want to clear your log?")&&(v(t,[],!0),w())}var S=r('<div class="textContainer svelte-1ikjp3j"><textarea readonly="" class="svelte-1ikjp3j"></textarea></div> <div class="bottom svelte-1ikjp3j"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function $(a,r){t(r,!0)
let x=s(r,"visible",15,!0),L=e(o([])),w=e(0)
async function $(){v(L,await _()??[],!0)}{const t=a=>{var t=C("Combat Log")
g(a,t)}
l(a,{close:function(){k("Combat Log","close"),x(!1)},get visible(){return x()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,$,null,a=>{var t=S(),s=n(t),e=d(s)
u(e,a=>v(w,a),()=>b(w))
var o=f(s,2),l=d(o)
l.__click=[A,w],f(l,2).__click=[D,L],p(a=>m(e,a),[()=>y(b(L))]),g(a,t)}),g(a,s)},$$slots:{title:!0,default:!0}})}j()}a(["click"])
const h=o({visible:!0})
let z=0
function B(){z?h.visible=!0:z=L($,{props:h,target:document.body})}export{B as default}
//# sourceMappingURL=mountCombatLog.svelte-HzZq4tck.js.map
