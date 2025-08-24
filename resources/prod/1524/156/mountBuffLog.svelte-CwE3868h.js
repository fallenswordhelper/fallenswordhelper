import{ap as a,x as s,y as t,ak as e,al as l,dX as i,B as c,D as n,E as o,C as r,aE as v,aF as f,F as u,bO as b,J as d,L as p,N as g,s as m,bH as y,dc as B,I as L,bB as h,bI as k,G as x,P as C,Q as $,bA as E,d5 as F,n as I}from"./calfSystem-79LsojAC.js"
function _(a,s){k(B,""),m("Buff Log","clear storage"),L(s,[],!0)}var j=c('<span class="fshRed"> </span>'),w=c("<br/> <!>",1),A=c('<div class="top svelte-1f283a3"><button type="button">Clear</button></div> <div class="textContainer svelte-1f283a3"><!></div>',1)
function D(a,c){s(c,!0)
let k=t(c,"visible",15,!0),I=e(l([]))
async function D(){const a=await y(B)??""
L(I,a.split("<br>").map(a=>[a.slice(0,19),a.slice(20)]),!0)}{const s=a=>{var s=h("Buff Log")
p(a,s)}
i(a,{close:function(){m("Buff Log","close"),k(!1)},get visible(){return k()},title:s,children:(a,s)=>{var t=A(),e=n(t)
o(e).__click=[_,I]
var l=r(e,2),i=o(l)
v(i,D,null,a=>{var s=f(),t=n(s)
u(t,17,()=>d(I),b,(a,s)=>{var t=E(()=>F(d(s),2))
let e=()=>d(t)[1]
var l=w(),i=r(n(l)),c=r(i),v=a=>{var s=j(),t=o(s)
C(a=>$(t,a),[()=>e().slice(21,-7)]),p(a,s)},f=a=>{var s=h()
C(()=>$(s,e())),p(a,s)}
x(c,a=>{e().startsWith("<")?a(v):a(f,!1)}),C(()=>$(i,` ${d(t)[0]??""} `)),p(a,l)}),p(a,s)}),p(a,t)},$$slots:{title:!0,default:!0}})}g()}a(["click"])
const G=l({visible:!0})
let H=0
function J(){H?G.visible=!0:H=I(D,{props:G,target:document.body})}export{J as default}
//# sourceMappingURL=mountBuffLog.svelte-CwE3868h.js.map
