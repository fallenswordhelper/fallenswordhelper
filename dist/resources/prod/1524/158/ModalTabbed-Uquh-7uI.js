import{ao as a,x as s,y as t,dR as l,aF as e,D as c,F as i,bP as o,L as r,N as n,B as v,E as b,J as u,bB as d,P as p,bH as f,Q as x,G as j,dW as m,s as y}from"./calfSystem-CIuUjh4H.js"
var g=v('<li><button type="button" class="svelte-xj0602"> </button></li>'),h=v('<ul class="svelte-xj0602"></ul>')
function k(a,v){s(v,!0)
let k=t(v,"activeTabValue",15,0),B=t(v,"tabs",19,()=>[]),F=t(v,"visible",3,!0)
{const s=a=>{var s=h()
i(s,21,B,o,(a,s,t)=>{let l=()=>u(s).label
var e=g()
let c
var i=b(e),o=d(()=>((a,s)=>()=>{y("ModalTabbed",a),k(s)})(l(),t))
i.__click=function(...a){u(o)?.apply(this,a)}
var n=b(i)
p(a=>{c=f(e,1,"svelte-xj0602",null,c,a),x(n,l())},[()=>({active:k()===t})]),r(a,e)}),r(a,s)}
l(a,{get close(){return v.close},get visible(){return F()},title:s,children:(a,s)=>{var t=e(),l=c(t)
i(l,17,B,o,(a,s,t)=>{let l=()=>u(s).component
var i=e(),o=c(i),n=a=>{const s=d(l)
var t=e(),i=c(t)
m(i,()=>u(s),(a,s)=>{s(a,{})}),r(a,t)}
j(o,a=>{k()===t&&a(n)}),r(a,i)}),r(a,t)},$$slots:{title:!0,default:!0}})}n()}a(["click"])
export{k as M}
//# sourceMappingURL=ModalTabbed-Uquh-7uI.js.map
