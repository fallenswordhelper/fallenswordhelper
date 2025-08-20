import{ao as a,x as s,y as t,aj as e,ak as l,e0 as i,A as o,C as n,D as c,B as r,aD as v,aE as f,E as b,bN as u,I as d,K as p,L as g,s as m,bG as y,dj as B,H as L,bA as h,bH as j,F as k,O as x,P as C,bz as $,db as A,n as D}from"./calfSystem-KFszEm2S.js"
function E(a,s){j(B,""),m("Buff Log","clear storage"),L(s,[],!0)}var H=o('<span class="fshRed"> </span>'),_=o("<br/> <!>",1),w=o('<div class="top svelte-1f283a3"><button type="button">Clear</button></div> <div class="textContainer svelte-1f283a3"><!></div>',1)
function z(a,o){s(o,!0)
let j=t(o,"visible",15,!0),D=e(l([]))
async function z(){const a=await y(B)??""
L(D,a.split("<br>").map(a=>[a.slice(0,19),a.slice(20)]),!0)}{const s=a=>{var s=h("Buff Log")
p(a,s)}
i(a,{close:function(){m("Buff Log","close"),j(!1)},get visible(){return j()},title:s,children:(a,s)=>{var t=w(),e=n(t)
c(e).__click=[E,D]
var l=r(e,2),i=c(l)
v(i,z,null,a=>{var s=f(),t=n(s)
b(t,17,()=>d(D),u,(a,s)=>{var t=$(()=>A(d(s),2))
let e=()=>d(t)[1]
var l=_(),i=r(n(l)),o=r(i),v=a=>{var s=H(),t=c(s)
x(a=>C(t,a),[()=>e().slice(21,-7)]),p(a,s)},f=a=>{var s=h()
x(()=>C(s,e())),p(a,s)}
k(o,a=>{e().startsWith("<")?a(v):a(f,!1)}),x(()=>C(i,` ${d(t)[0]??""} `)),p(a,l)}),p(a,s)}),p(a,t)},$$slots:{title:!0,default:!0}})}g()}a(["click"])
const F=l({visible:!0})
let G=0
function I(){G?F.visible=!0:G=D(z,{props:F,target:document.body})}export{I as default}
//# sourceMappingURL=mountBuffLog.svelte-zjXFHwxB.js.map
