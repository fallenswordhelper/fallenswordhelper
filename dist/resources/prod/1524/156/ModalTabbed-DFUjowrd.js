import{ap as a,x as s,y as t,dX as e,aF as l,D as i,F as c,bO as o,L as r,N as n,B as v,E as b,J as u,bA as p,P as d,bG as f,Q as g,G as m,e0 as y,s as h}from"./calfSystem-79LsojAC.js"
var k=v('<li><button type="button" class="svelte-g548i6"> </button></li>'),x=v('<ul class="svelte-g548i6"></ul>')
function F(a,v){s(v,!0)
let F=t(v,"activeTabValue",15,0),G=t(v,"tabs",19,()=>[]),M=t(v,"visible",3,!0)
{const s=a=>{var s=x()
c(s,21,G,o,(a,s,t)=>{let e=()=>u(s).label
var l=k()
let i
var c=b(l),o=p(()=>((a,s)=>()=>{h("ModalTabbed",a),F(s)})(e(),t))
c.__click=function(...a){u(o)?.apply(this,a)}
var n=b(c)
d(a=>{i=f(l,1,"svelte-g548i6",null,i,a),g(n,e())},[()=>({active:F()===t})]),r(a,l)}),r(a,s)}
e(a,{get close(){return v.close},get visible(){return M()},title:s,children:(a,s)=>{var t=l(),e=i(t)
c(e,17,G,o,(a,s,t)=>{let e=()=>u(s).component
var c=l(),o=i(c),n=a=>{const s=p(e)
var t=l(),c=i(t)
y(c,()=>u(s),(a,s)=>{s(a,{})}),r(a,t)}
m(o,a=>{F()===t&&a(n)}),r(a,c)}),r(a,t)},$$slots:{title:!0,default:!0}})}n()}a(["click"])
export{F as M}
//# sourceMappingURL=ModalTabbed-DFUjowrd.js.map
