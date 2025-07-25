import{aq as a,z as s,A as t,al as e,am as l,e5 as i,C as n,E as o,F as c,D as r,aF as f,aG as v,G as u,bP as b,K as d,N as p,O as g,s as m,bI as y,dn as B,J as C,bC as h,bJ as L,H as $,Q as k,R as x,bB as F,df as G,u as J}from"./calfSystem-C1X5YxJZ.js"
function R(a,s){L(B,""),m("Buff Log","clear storage"),C(s,[],!0)}var _=n('<span class="fshRed"> </span>'),j=n("<br/> <!>",1),q=n('<div class="top svelte-1f283a3"><button type="button">Clear</button></div> <div class="textContainer svelte-1f283a3"><!></div>',1)
function w(a,n){s(n,!0)
let L=t(n,"visible",15,!0),J=e(l([]))
async function w(){const a=await y(B)??""
C(J,a.split("<br>").map((a=>[a.slice(0,19),a.slice(20)])),!0)}{const s=a=>{var s=h("Buff Log")
p(a,s)}
i(a,{close:function(){m("Buff Log","close"),L(!1)},get visible(){return L()},title:s,children:(a,s)=>{var t=q(),e=o(t)
c(e).__click=[R,J]
var l=r(e,2),i=c(l)
f(i,w,null,(a=>{var s=v(),t=o(s)
u(t,17,(()=>d(J)),b,((a,s)=>{var t=F((()=>G(d(s),2)))
let e=()=>d(t)[1]
var l=j(),i=r(o(l)),n=r(i),f=a=>{var s=_(),t=c(s)
k((a=>x(t,a)),[()=>e().slice(21,-7)]),p(a,s)},v=a=>{var s=h()
k((()=>x(s,e()))),p(a,s)}
$(n,(a=>{e().startsWith("<")?a(f):a(v,!1)})),k((()=>x(i,` ${d(t)[0]??""} `))),p(a,l)})),p(a,s)})),p(a,t)},$$slots:{title:!0,default:!0}})}g()}a(["click"])
const z=l({visible:!0})
let A=0
function D(){A?z.visible=!0:A=J(w,{props:z,target:document.body})}export{D as default}
//# sourceMappingURL=mountBuffLog.svelte-D3JqbHfP.js.map
