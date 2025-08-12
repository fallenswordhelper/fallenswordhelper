import{aq as a,z as t,A as s,al as e,am as o,e4 as l,aG as i,E as n,aF as c,C as r,d$ as u,K as b,J as v,F as d,D as f,Q as m,aA as p,e5 as y,N as g,O as j,s as k,bz as C,at as x,u as A}from"./calfSystem-BlPuMQGT.js"
import{a as L,b as _}from"./idbLogger-DFCzljAS.js"
function w(a,t){b(t).focus(),b(t).select()}async function $(a,t){k("Combat Log","clear storage")
await x("Are you sure you want to clear your log?")&&(v(t,[],!0),_())}var z=r('<div class="textContainer svelte-1ikjp3j"><textarea readonly="" class="svelte-1ikjp3j"></textarea></div> <div class="bottom svelte-1ikjp3j"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function F(a,r){t(r,!0)
let x=s(r,"visible",15,!0),A=e(o([])),_=e(0)
async function F(){v(A,await L()??[],!0)}{const t=a=>{var t=C("Combat Log")
g(a,t)}
l(a,{close:function(){k("Combat Log","close"),x(!1)},get visible(){return x()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,F,null,(a=>{var t=z(),s=n(t),e=d(s)
u(e,(a=>v(_,a)),(()=>b(_)))
var o=f(s,2),l=d(o)
l.__click=[w,_],f(l,2).__click=[$,A],m((a=>y(e,a)),[()=>p(b(A))]),g(a,t)})),g(a,s)},$$slots:{title:!0,default:!0}})}j()}a(["click"])
const S=o({visible:!0})
let h=0
function q(){h?S.visible=!0:h=A(F,{props:S,target:document.body})}export{q as default}
//# sourceMappingURL=mountCombatLog.svelte-hnP5LAnU.js.map
