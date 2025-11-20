import{ap as a,y as s,z as t,dW as l,aG as e,E as c,G as i,H as o,N as r,d$ as n,K as v,bD as b,bT as u,O as p,C as d,F as f,P as j,bH as m,S as x,s as y}from"./calfSystem-HVCiy-VV.js"
var T=d('<li><button type="button" class="svelte-xj0602"> </button></li>'),$=d('<ul class="svelte-xj0602"></ul>')
function g(a,d){s(d,!0)
let g=t(d,"activeTabValue",15,0),h=t(d,"tabs",19,()=>[]),k=t(d,"visible",3,!0)
{const s=a=>{var s=$()
i(s,21,h,u,(a,s,t)=>{let l=()=>v(s).label
var e=T()
let c
var i=f(e),o=b(()=>((a,s)=>()=>{y("ModalTabbed",a),g(s)})(l(),t))
i.__click=function(...a){v(o)?.apply(this,a)}
var n=f(i)
j(()=>{c=m(e,1,"svelte-xj0602",null,c,{active:g()===t}),x(n,l())}),r(a,e)}),r(a,s)}
l(a,{get close(){return d.close},get visible(){return k()},title:s,children:(a,s)=>{var t=e(),l=c(t)
i(l,17,h,u,(a,s,t)=>{let l=()=>v(s).component
var i=e(),u=c(i),p=a=>{const s=b(l)
var t=e(),i=c(t)
n(i,()=>v(s),(a,s)=>{s(a,{})}),r(a,t)}
o(u,a=>{g()===t&&a(p)}),r(a,i)}),r(a,t)},$$slots:{title:!0,default:!0}})}p()}a(["click"])
export{g as M}
//# sourceMappingURL=ModalTabbed-CUwOsg2C.js.map
