import{aq as a,z as t,A as s,al as e,am as o,e5 as l,aG as i,E as n,aF as c,C as r,e0 as u,K as b,J as v,F as f,D as d,Q as m,aA as p,e6 as y,N as g,O as j,s as C,bC as k,at as x,u as A}from"./calfSystem-C1X5YxJZ.js"
import{a as L,b as _}from"./idbLogger-CKk64cF5.js"
function w(a,t){b(t).focus(),b(t).select()}async function F(a,t){C("Combat Log","clear storage")
await x("Are you sure you want to clear your log?")&&(v(t,[],!0),_())}var S=r('<div class="textContainer svelte-1ikjp3j"><textarea readonly="" class="svelte-1ikjp3j"></textarea></div> <div class="bottom svelte-1ikjp3j"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function $(a,r){t(r,!0)
let x=s(r,"visible",15,!0),A=e(o([])),_=e(0)
async function $(){v(A,await L()??[],!0)}{const t=a=>{var t=k("Combat Log")
g(a,t)}
l(a,{close:function(){C("Combat Log","close"),x(!1)},get visible(){return x()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,$,null,(a=>{var t=S(),s=n(t),e=f(s)
u(e,(a=>v(_,a)),(()=>b(_)))
var o=d(s,2),l=f(o)
l.__click=[w,_],d(l,2).__click=[F,A],m((a=>y(e,a)),[()=>p(b(A))]),g(a,t)})),g(a,s)},$$slots:{title:!0,default:!0}})}j()}a(["click"])
const h=o({visible:!0})
let q=0
function z(){q?h.visible=!0:q=A($,{props:h,target:document.body})}export{z as default}
//# sourceMappingURL=mountCombatLog.svelte-Cpth2QfA.js.map
