import{ap as a,y as s,z as t,dW as l,aG as e,E as c,G as i,bR as o,N as r,O as n,C as v,F as b,K as u,bD as p,Q as d,bJ as f,R as j,H as m,d$ as x,s as y}from"./calfSystem-CIdPz3EO.js"
var $=v('<li><button type="button" class="svelte-xj0602"> </button></li>'),g=v('<ul class="svelte-xj0602"></ul>')
function h(a,v){s(v,!0)
let h=t(v,"activeTabValue",15,0),k=t(v,"tabs",19,()=>[]),G=t(v,"visible",3,!0)
{const s=a=>{var s=g()
i(s,21,k,o,(a,s,t)=>{let l=()=>u(s).label
var e=$()
let c
var i=b(e),o=p(()=>((a,s)=>()=>{y("ModalTabbed",a),h(s)})(l(),t))
i.__click=function(...a){u(o)?.apply(this,a)}
var n=b(i)
d(a=>{c=f(e,1,"svelte-xj0602",null,c,a),j(n,l())},[()=>({active:h()===t})]),r(a,e)}),r(a,s)}
l(a,{get close(){return v.close},get visible(){return G()},title:s,children:(a,s)=>{var t=e(),l=c(t)
i(l,17,k,o,(a,s,t)=>{let l=()=>u(s).component
var i=e(),o=c(i),n=a=>{const s=p(l)
var t=e(),i=c(t)
x(i,()=>u(s),(a,s)=>{s(a,{})}),r(a,t)}
m(o,a=>{h()===t&&a(n)}),r(a,i)}),r(a,t)},$$slots:{title:!0,default:!0}})}n()}a(["click"])
export{h as M}
//# sourceMappingURL=ModalTabbed-DAmPFrdA.js.map
