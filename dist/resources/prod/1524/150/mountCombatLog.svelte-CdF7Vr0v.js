import{a6 as a,R as t,bE as s,S as e,T as o,dZ as l,at as i,au as n,as as c,X as r,dU as u,V as b,W as v,Z as d,Y as f,a7 as m,an as p,d_ as y,a3 as g,a4 as j,s as k,bq as C,ae as _,ad as x}from"./calfSystem-BGOTz8de.js"
import{a as L,b as w}from"./idbLogger-DMucVgnm.js"
function S(a,t){b(t).focus(),b(t).select()}async function A(a,t){k("Combat Log","clear storage")
await _("Are you sure you want to clear your log?")&&(v(t,[],!0),w())}var Z=r('<div class="textContainer svelte-1ikjp3j"><textarea readonly="" class="svelte-1ikjp3j"></textarea></div> <div class="bottom svelte-1ikjp3j"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function $(a,r){t(r,!0)
let _=s(r,"visible",15,!0),x=e(o([])),w=e(0)
async function $(){v(x,await L()??[],!0)}{const t=a=>{var t=C("Combat Log")
g(a,t)}
l(a,{close:function(){k("Combat Log","close"),_(!1)},get visible(){return _()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,$,null,(a=>{var t=Z(),s=n(t),e=d(s)
u(e,(a=>v(w,a)),(()=>b(w)))
var o=f(s,2),l=d(o)
l.__click=[S,w],f(l,2).__click=[A,x],m((a=>y(e,a)),[()=>p(b(x))]),g(a,t)})),g(a,s)},$$slots:{title:!0,default:!0}})}j()}a(["click"])
const h=o({visible:!0})
let q=0
function E(){q?h.visible=!0:q=x($,{props:h,target:document.body})}export{E as default}
//# sourceMappingURL=mountCombatLog.svelte-CdF7Vr0v.js.map
