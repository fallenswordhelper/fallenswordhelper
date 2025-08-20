import{ao as a,x as t,y as s,aj as e,ak as o,e0 as l,aE as i,C as n,aD as c,A as r,dX as u,I as b,H as v,D as d,B as f,O as y,ay as m,e1 as p,K as g,L as j,s as k,bA as C,ar as x,n as L}from"./calfSystem-UyQ_FKFu.js"
import{a as A,b as _}from"./idbLogger-EimdfDvd.js"
function w(a,t){b(t).focus(),b(t).select()}async function D(a,t){k("Combat Log","clear storage")
await x("Are you sure you want to clear your log?")&&(v(t,[],!0),_())}var S=r('<div class="textContainer svelte-1ikjp3j"><textarea readonly="" class="svelte-1ikjp3j"></textarea></div> <div class="bottom svelte-1ikjp3j"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function $(a,r){t(r,!0)
let x=s(r,"visible",15,!0),L=e(o([])),_=e(0)
async function $(){v(L,await A()??[],!0)}{const t=a=>{var t=C("Combat Log")
g(a,t)}
l(a,{close:function(){k("Combat Log","close"),x(!1)},get visible(){return x()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,$,null,a=>{var t=S(),s=n(t),e=d(s)
u(e,a=>v(_,a),()=>b(_))
var o=f(s,2),l=d(o)
l.__click=[w,_],f(l,2).__click=[D,L],y(a=>p(e,a),[()=>m(b(L))]),g(a,t)}),g(a,s)},$$slots:{title:!0,default:!0}})}j()}a(["click"])
const h=o({visible:!0})
let B=0
function E(){B?h.visible=!0:B=L($,{props:h,target:document.body})}export{E as default}
//# sourceMappingURL=mountCombatLog.svelte-BAKOTKt2.js.map
