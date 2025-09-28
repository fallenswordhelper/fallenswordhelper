import{ao as a,x as t,y as s,aj as e,ak as o,dR as l,aF as n,D as i,aE as c,B as r,dM as u,J as b,I as v,E as y,C as d,P as f,ay as m,dS as g,L as p,N as C,s as x,bC as L,ar as k,n as S}from"./calfSystem-CIuUjh4H.js"
import{a as _,b as j}from"./idbLogger-CFKQxAaf.js"
function w(a,t){b(t).focus(),b(t).select()}async function z(a,t){x("Combat Log","clear storage")
await k("Are you sure you want to clear your log?")&&(v(t,[],!0),j())}var A=r('<div class="textContainer svelte-7y32zu"><textarea readonly="" class="svelte-7y32zu"></textarea></div> <div class="bottom svelte-7y32zu"><button type="button">Select All</button> <button type="button">Clear</button></div>',1)
function E(a,r){t(r,!0)
let k=s(r,"visible",15,!0),S=e(o([])),j=e(0)
async function E(){v(S,await _()??[],!0)}{const t=a=>{var t=L("Combat Log")
p(a,t)}
l(a,{close:function(){x("Combat Log","close"),k(!1)},get visible(){return k()},title:t,children:(a,t)=>{var s=n(),e=i(s)
c(e,E,null,a=>{var t=A(),s=i(t),e=y(s)
u(e,a=>v(j,a),()=>b(j))
var o=d(s,2),l=y(o)
l.__click=[w,j],d(l,2).__click=[z,S],f(a=>g(e,a),[()=>m(b(S))]),p(a,t)}),p(a,s)},$$slots:{title:!0,default:!0}})}C()}a(["click"])
const $=o({visible:!0})
let h=0
function B(){h?$.visible=!0:h=S(E,{props:$,target:document.body})}export{B as default}
//# sourceMappingURL=mountCombatLog.svelte-CSvkDamx.js.map
