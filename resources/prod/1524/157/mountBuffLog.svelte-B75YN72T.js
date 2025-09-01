import{ap as a,x as s,y as t,ak as e,al as l,dY as i,B as n,D as o,E as c,C as r,aF as f,aG as v,F as u,bQ as b,J as d,L as p,N as g,s as m,bJ as y,df as B,I as C,bD as L,bK as h,G as k,P as x,Q as $,bC as D,d9 as F,n as G}from"./calfSystem-CQOGdqPv.js"
function J(a,s){h(B,""),m("Buff Log","clear storage"),C(s,[],!0)}var Q=n('<span class="fshRed"> </span>'),_=n("<br/> <!>",1),j=n('<div class="top svelte-1f283a3"><button type="button">Clear</button></div> <div class="textContainer svelte-1f283a3"><!></div>',1)
function w(a,n){s(n,!0)
let h=t(n,"visible",15,!0),G=e(l([]))
async function w(){const a=await y(B)??""
C(G,a.split("<br>").map(a=>[a.slice(0,19),a.slice(20)]),!0)}{const s=a=>{var s=L("Buff Log")
p(a,s)}
i(a,{close:function(){m("Buff Log","close"),h(!1)},get visible(){return h()},title:s,children:(a,s)=>{var t=j(),e=o(t)
c(e).__click=[J,G]
var l=r(e,2),i=c(l)
f(i,w,null,a=>{var s=v(),t=o(s)
u(t,17,()=>d(G),b,(a,s)=>{var t=D(()=>F(d(s),2))
let e=()=>d(t)[1]
var l=_(),i=r(o(l)),n=r(i),f=a=>{var s=Q(),t=c(s)
x(a=>$(t,a),[()=>e().slice(21,-7)]),p(a,s)},v=a=>{var s=L()
x(()=>$(s,e())),p(a,s)}
k(n,a=>{e().startsWith("<")?a(f):a(v,!1)}),x(()=>$(i,` ${d(t)[0]??""} `)),p(a,l)}),p(a,s)}),p(a,t)},$$slots:{title:!0,default:!0}})}g()}a(["click"])
const E=l({visible:!0})
let I=0
function K(){I?E.visible=!0:I=G(w,{props:E,target:document.body})}export{K as default}
//# sourceMappingURL=mountBuffLog.svelte-B75YN72T.js.map
