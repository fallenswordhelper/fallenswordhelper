import{aq as a,z as s,A as t,al as e,am as l,e4 as i,C as o,E as c,F as n,D as r,aF as v,aG as f,G as u,bM as b,K as d,N as p,O as g,s as m,bF as y,dl as h,J as B,bz as C,bG as F,H as G,Q as L,R as $,by as k,dd as x,u as z}from"./calfSystem-BlPuMQGT.js"
function R(a,s){F(h,""),m("Buff Log","clear storage"),B(s,[],!0)}var _=o('<span class="fshRed"> </span>'),j=o("<br/> <!>",1),q=o('<div class="top svelte-1f283a3"><button type="button">Clear</button></div> <div class="textContainer svelte-1f283a3"><!></div>',1)
function w(a,o){s(o,!0)
let F=t(o,"visible",15,!0),z=e(l([]))
async function w(){const a=await y(h)??""
B(z,a.split("<br>").map((a=>[a.slice(0,19),a.slice(20)])),!0)}{const s=a=>{var s=C("Buff Log")
p(a,s)}
i(a,{close:function(){m("Buff Log","close"),F(!1)},get visible(){return F()},title:s,children:(a,s)=>{var t=q(),e=c(t)
n(e).__click=[R,z]
var l=r(e,2),i=n(l)
v(i,w,null,(a=>{var s=f(),t=c(s)
u(t,17,(()=>d(z)),b,((a,s)=>{var t=k((()=>x(d(s),2)))
let e=()=>d(t)[1]
var l=j(),i=r(c(l)),o=r(i),v=a=>{var s=_(),t=n(s)
L((a=>$(t,a)),[()=>e().slice(21,-7)]),p(a,s)},f=a=>{var s=C()
L((()=>$(s,e()))),p(a,s)}
G(o,(a=>{e().startsWith("<")?a(v):a(f,!1)})),L((()=>$(i,` ${d(t)[0]??""} `))),p(a,l)})),p(a,s)})),p(a,t)},$$slots:{title:!0,default:!0}})}g()}a(["click"])
const A=l({visible:!0})
let D=0
function E(){D?A.visible=!0:D=z(w,{props:A,target:document.body})}export{E as default}
//# sourceMappingURL=mountBuffLog.svelte-B5XDOjyt.js.map
