import{ao as a,x as s,y as t,e0 as e,aE as l,C as i,E as c,bN as o,K as r,L as n,A as v,D as b,I as u,bz as p,O as f,bF as g,P as d,F as m,e5 as y,s as h}from"./calfSystem-UyQ_FKFu.js"
var k=v('<li><button type="button" class="svelte-g548i6"> </button></li>'),x=v('<ul class="svelte-g548i6"></ul>')
function E(a,v){s(v,!0)
let E=t(v,"activeTabValue",15,0),F=t(v,"tabs",19,()=>[]),M=t(v,"visible",3,!0)
{const s=a=>{var s=x()
c(s,21,F,o,(a,s,t)=>{let e=()=>u(s).label
var l=k()
let i
var c=b(l),o=p(()=>((a,s)=>()=>{h("ModalTabbed",a),E(s)})(e(),t))
c.__click=function(...a){u(o)?.apply(this,a)}
var n=b(c)
f(a=>{i=g(l,1,"svelte-g548i6",null,i,a),d(n,e())},[()=>({active:E()===t})]),r(a,l)}),r(a,s)}
e(a,{get close(){return v.close},get visible(){return M()},title:s,children:(a,s)=>{var t=l(),e=i(t)
c(e,17,F,o,(a,s,t)=>{let e=()=>u(s).component
var c=l(),o=i(c),n=a=>{const s=p(e)
var t=l(),c=i(t)
y(c,()=>u(s),(a,s)=>{s(a,{})}),r(a,t)}
m(o,a=>{E()===t&&a(n)}),r(a,c)}),r(a,t)},$$slots:{title:!0,default:!0}})}n()}a(["click"])
export{E as M}
//# sourceMappingURL=ModalTabbed-Bi9mktZ9.js.map
