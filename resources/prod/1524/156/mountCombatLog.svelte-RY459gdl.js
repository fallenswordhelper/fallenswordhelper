import{ap as a,x as t,y as s,ak as e,al as o,dX as l,aF as i,D as n,aE as c,B as r,dS as u,J as b,I as v,E as d,C as f,P as p,az as y,dY as m,L as g,N as j,s as k,bB as C,as as x,n as L}from"./calfSystem-79LsojAC.js"
import{a as _,b as w}from"./idbLogger-D2TRrju6.js"
function S(a,t){b(t).focus(),b(t).select()}async function A(a,t){k("Combat Log","clear storage")
await x("Are you sure you want to clear your log?")&&(v(t,[],!0),w())}var B=r('<div class="textContainer svelte-1ikjp3j"><textarea readonly="" class="svelte-1ikjp3j"></textarea></div> <div class="bottom svelte-1ikjp3j"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function E(a,r){t(r,!0)
let x=s(r,"visible",15,!0),L=e(o([])),w=e(0)
async function E(){v(L,await _()??[],!0)}{const t=a=>{var t=C("Combat Log")
g(a,t)}
l(a,{close:function(){k("Combat Log","close"),x(!1)},get visible(){return x()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,E,null,a=>{var t=B(),s=n(t),e=d(s)
u(e,a=>v(w,a),()=>b(w))
var o=f(s,2),l=d(o)
l.__click=[S,w],f(l,2).__click=[A,L],p(a=>m(e,a),[()=>y(b(L))]),g(a,t)}),g(a,s)},$$slots:{title:!0,default:!0}})}j()}a(["click"])
const N=o({visible:!0})
let $=0
function h(){$?N.visible=!0:$=L(E,{props:N,target:document.body})}export{h as default}
//# sourceMappingURL=mountCombatLog.svelte-RY459gdl.js.map
