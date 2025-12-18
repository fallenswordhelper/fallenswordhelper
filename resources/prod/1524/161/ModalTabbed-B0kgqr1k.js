import{ap as a,y as s,z as t,dW as l,aG as e,E as c,G as i,bO as o,N as r,O as n,C as v,F as b,K as u,cp as p,Q as d,bG as f,R as j,H as m,d$ as x,s as y}from"./calfSystem-Cs6CSxoU.js"
var G=v('<li><button type="button" class="svelte-xj0602"> </button></li>'),$=v('<ul class="svelte-xj0602"></ul>')
function g(a,v){s(v,!0)
let g=t(v,"activeTabValue",15,0),h=t(v,"tabs",19,()=>[]),k=t(v,"visible",3,!0)
{const s=a=>{var s=$()
i(s,21,h,o,(a,s,t)=>{let l=()=>u(s).label
var e=G()
let c
var i=b(e),o=p(()=>((a,s)=>()=>{y("ModalTabbed",a),g(s)})(l(),t))
i.__click=function(...a){u(o)?.apply(this,a)}
var n=b(i)
d(()=>{c=f(e,1,"svelte-xj0602",null,c,{active:g()===t}),j(n,l())}),r(a,e)}),r(a,s)}
l(a,{get close(){return v.close},get visible(){return k()},title:s,children:(a,s)=>{var t=e(),l=c(t)
i(l,17,h,o,(a,s,t)=>{let l=()=>u(s).component
var i=e(),o=c(i),n=a=>{const s=p(l)
var t=e(),i=c(t)
x(i,()=>u(s),(a,s)=>{s(a,{})}),r(a,t)}
m(o,a=>{g()===t&&a(n)}),r(a,i)}),r(a,t)},$$slots:{title:!0,default:!0}})}n()}a(["click"])
export{g as M}
//# sourceMappingURL=ModalTabbed-B0kgqr1k.js.map
