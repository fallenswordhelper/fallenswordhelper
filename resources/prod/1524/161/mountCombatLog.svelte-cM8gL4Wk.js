import{ap as a,y as t,z as s,ak as e,al as o,dW as l,aG as i,E as n,aF as c,C as r,dR as u,K as b,J as v,F as d,D as y,Q as f,az as m,dX as g,N as p,O as C,s as z,as as k,bQ as x,t as L}from"./calfSystem-Cs6CSxoU.js"
import{a as _,b as w}from"./idbLogger-z1pT13Zi.js"
var j=r('<div class="textContainer svelte-7y32zu"><textarea readonly="" class="svelte-7y32zu"></textarea></div> <div class="bottom svelte-7y32zu"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function A(a,r){t(r,!0)
let L=s(r,"visible",15,!0),A=e(o([])),F=e(0)
function Q(){b(F).focus(),b(F).select()}async function S(){v(A,await _()??[],!0)}async function $(){z("Combat Log","clear storage")
await k("Are you sure you want to clear your log?")&&(v(A,[],!0),w())}{const t=a=>{var t=x("Combat Log")
p(a,t)}
l(a,{close:function(){z("Combat Log","close"),L(!1)},get visible(){return L()},title:t,children:(a,t)=>{var s=i(),e=n(s)
c(e,S,null,a=>{var t=j(),s=n(t),e=d(s)
u(e,a=>v(F,a),()=>b(F))
var o=y(s,2),l=d(o)
l.__click=Q,y(l,2).__click=$,f(a=>g(e,a),[()=>m(b(A))]),p(a,t)}),p(a,s)},$$slots:{title:!0,default:!0}})}C()}a(["click"])
const F=o({visible:!0})
let Q=0
function S(){Q?F.visible=!0:Q=L(A,{props:F,target:document.body})}export{S as default}
//# sourceMappingURL=mountCombatLog.svelte-cM8gL4Wk.js.map
