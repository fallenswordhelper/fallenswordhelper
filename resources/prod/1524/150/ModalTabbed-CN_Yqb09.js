import{a6 as a,R as s,bE as t,dZ as e,at as l,au as i,_ as c,a3 as r,a4 as o,X as v,Z as n,V as b,bp as u,a7 as p,bw as d,a8 as f,bH as g,a0 as m,e3 as y,s as _}from"./calfSystem-BGOTz8de.js"
var h=v('<li><button type="button" class="svelte-g548i6"> </button></li>'),k=v('<ul class="svelte-g548i6"></ul>')
function M(a,v){s(v,!0)
let M=t(v,"activeTabValue",15,0),T=t(v,"tabs",19,(()=>[])),V=t(v,"visible",3,!0)
{const s=a=>{var s=k()
c(s,21,T,g,((a,s,t)=>{let e=()=>b(s).label
var l=h()
let i
var c=n(l),o=u((()=>((a,s)=>()=>{_("ModalTabbed",a),M(s)})(e(),t)))
c.__click=function(...a){b(o)?.apply(this,a)}
var v=n(c)
p((a=>{i=d(l,1,"svelte-g548i6",null,i,a),f(v,e())}),[()=>({active:M()===t})]),r(a,l)})),r(a,s)}
e(a,{get close(){return v.close},get visible(){return V()},title:s,children:(a,s)=>{var t=l(),e=i(t)
c(e,17,T,g,((a,s,t)=>{let e=()=>b(s).component
var c=l(),o=i(c),v=a=>{var s=l()
const t=u(e)
var c=i(s)
y(c,(()=>b(t)),((a,s)=>{s(a,{})})),r(a,s)}
m(o,(a=>{M()===t&&a(v)})),r(a,c)})),r(a,t)},$$slots:{title:!0,default:!0}})}o()}a(["click"])
export{M}
//# sourceMappingURL=ModalTabbed-CN_Yqb09.js.map
