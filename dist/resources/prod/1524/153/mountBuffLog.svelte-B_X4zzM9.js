import{ao as a,x as s,y as t,aj as e,ak as i,d$ as l,A as o,C as n,D as c,B as r,aD as v,aE as f,E as u,bN as b,I as d,K as p,L as g,s as m,bG as y,di as B,H as L,bA as $,bH as h,F as k,O as x,P as C,bz as j,da as A,n as D}from"./calfSystem-CT1aM4VG.js"
function E(a,s){h(B,""),m("Buff Log","clear storage"),L(s,[],!0)}var H=o('<span class="fshRed"> </span>'),_=o("<br/> <!>",1),w=o('<div class="top svelte-1f283a3"><button type="button">Clear</button></div> <div class="textContainer svelte-1f283a3"><!></div>',1)
function z(a,o){s(o,!0)
let h=t(o,"visible",15,!0),D=e(i([]))
async function z(){const a=await y(B)??""
L(D,a.split("<br>").map((a=>[a.slice(0,19),a.slice(20)])),!0)}{const s=a=>{var s=$("Buff Log")
p(a,s)}
l(a,{close:function(){m("Buff Log","close"),h(!1)},get visible(){return h()},title:s,children:(a,s)=>{var t=w(),e=n(t)
c(e).__click=[E,D]
var i=r(e,2),l=c(i)
v(l,z,null,(a=>{var s=f(),t=n(s)
u(t,17,(()=>d(D)),b,((a,s)=>{var t=j((()=>A(d(s),2)))
let e=()=>d(t)[1]
var i=_(),l=r(n(i)),o=r(l),v=a=>{var s=H(),t=c(s)
x((a=>C(t,a)),[()=>e().slice(21,-7)]),p(a,s)},f=a=>{var s=$()
x((()=>C(s,e()))),p(a,s)}
k(o,(a=>{e().startsWith("<")?a(v):a(f,!1)})),x((()=>C(l,` ${d(t)[0]??""} `))),p(a,i)})),p(a,s)})),p(a,t)},$$slots:{title:!0,default:!0}})}g()}a(["click"])
const F=i({visible:!0})
let G=0
function I(){G?F.visible=!0:G=D(z,{props:F,target:document.body})}export{I as default}
//# sourceMappingURL=mountBuffLog.svelte-B_X4zzM9.js.map
