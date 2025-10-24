import{ap as a,y as t,z as s,ak as e,al as o,dW as l,aG as i,E as n,aF as c,C as r,dR as u,K as b,J as v,F as d,D as y,Q as f,az as m,dX as g,N as p,O as C,s as z,bE as k,as as x,t as L}from"./calfSystem-CIdPz3EO.js"
import{a as _,b as w}from"./idbLogger-Cr4HtKi5.js"
function j(a,t){b(t).focus(),b(t).select()}async function A(a,t){z("Combat Log","clear storage")
await x("Are you sure you want to clear your log?")&&(v(t,[],!0),w())}var E=r('<div class="textContainer svelte-7y32zu"><textarea readonly="" class="svelte-7y32zu"></textarea></div> <div class="bottom svelte-7y32zu"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function F(a,r){t(r,!0)
let x=s(r,"visible",15,!0),L=e(o([])),w=e(0)
async function F(){v(L,await _()??[],!0)}{const t=a=>{var t=k("Combat Log")
p(a,t)}
l(a,{close:function(){z("Combat Log","close"),x(!1)},get visible(){return x()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,F,null,a=>{var t=E(),s=n(t),e=d(s)
u(e,a=>v(w,a),()=>b(w))
var o=y(s,2),l=d(o)
l.__click=[j,w],y(l,2).__click=[A,L],f(a=>g(e,a),[()=>m(b(L))]),p(a,t)}),p(a,s)},$$slots:{title:!0,default:!0}})}C()}a(["click"])
const S=o({visible:!0})
let $=0
function h(){$?S.visible=!0:$=L(F,{props:S,target:document.body})}export{h as default}
//# sourceMappingURL=mountCombatLog.svelte-DglglgTq.js.map
