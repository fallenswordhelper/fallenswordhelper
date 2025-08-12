import{aq as a,z as s,A as t,e4 as e,aG as l,E as i,G as c,bM as o,N as r,O as n,C as v,F as b,K as u,by as p,Q as f,bE as g,R as d,H as m,e9 as y,s as M}from"./calfSystem-BlPuMQGT.js"
var h=v('<li><button type="button" class="svelte-g548i6"> </button></li>'),k=v('<ul class="svelte-g548i6"></ul>')
function E(a,v){s(v,!0)
let E=t(v,"activeTabValue",15,0),G=t(v,"tabs",19,(()=>[])),T=t(v,"visible",3,!0)
{const s=a=>{var s=k()
c(s,21,G,o,((a,s,t)=>{let e=()=>u(s).label
var l=h()
let i
var c=b(l),o=p((()=>((a,s)=>()=>{M("ModalTabbed",a),E(s)})(e(),t)))
c.__click=function(...a){u(o)?.apply(this,a)}
var n=b(c)
f((a=>{i=g(l,1,"svelte-g548i6",null,i,a),d(n,e())}),[()=>({active:E()===t})]),r(a,l)})),r(a,s)}
e(a,{get close(){return v.close},get visible(){return T()},title:s,children:(a,s)=>{var t=l(),e=i(t)
c(e,17,G,o,((a,s,t)=>{let e=()=>u(s).component
var c=l(),o=i(c),n=a=>{const s=p(e)
var t=l(),c=i(t)
y(c,(()=>u(s)),((a,s)=>{s(a,{})})),r(a,t)}
m(o,(a=>{E()===t&&a(n)})),r(a,c)})),r(a,t)},$$slots:{title:!0,default:!0}})}n()}a(["click"])
export{E as M}
//# sourceMappingURL=ModalTabbed-Dsx_pTFW.js.map
