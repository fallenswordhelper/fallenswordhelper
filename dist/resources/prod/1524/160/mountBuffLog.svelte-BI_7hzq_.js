import{ap as s,y as a,z as t,ak as e,al as l,dW as i,C as o,E as c,F as n,D as r,aF as v,aG as b,G as f,H as u,K as d,P as p,S as g,N as m,bD as y,bG as L,bT as h,d8 as k,O as B,s as C,bK as G,dg as $,J as x,bL as D,t as F}from"./calfSystem-HVCiy-VV.js"
var K=o('<span class="fshRed"> </span>'),S=o("<br/> <!>",1),W=o('<div class="top svelte-ebl3om"><button type="button">Clear</button></div> <div class="textContainer svelte-ebl3om"><!></div>',1)
function _(s,o){a(o,!0)
let F=t(o,"visible",15,!0),_=e(l([]))
async function j(){const s=await G($)??""
x(_,s.split("<br>").map(s=>[s.slice(0,19),s.slice(20)]),!0)}function w(){D($,""),C("Buff Log","clear storage"),x(_,[],!0)}{const a=s=>{var a=L("Buff Log")
m(s,a)}
i(s,{close:function(){C("Buff Log","close"),F(!1)},get visible(){return F()},title:a,children:(s,a)=>{var t=W(),e=c(t)
n(e).__click=w
var l=r(e,2),i=n(l)
v(i,j,null,s=>{var a=b(),t=c(a)
f(t,17,()=>d(_),h,(s,a)=>{var t=y(()=>k(d(a),2))
let e=()=>d(t)[1]
var l=S(),i=r(c(l)),o=r(i),v=s=>{var a=K(),t=n(a)
p(s=>g(t,s),[()=>e().slice(21,-7)]),m(s,a)},b=s=>{var a=L()
p(()=>g(a,e())),m(s,a)}
u(o,s=>{e().startsWith("<")?s(v):s(b,!1)}),p(()=>g(i,` ${d(t)[0]??""} `)),m(s,l)}),m(s,a)}),m(s,t)},$$slots:{title:!0,default:!0}})}B()}s(["click"])
const j=l({visible:!0})
let w=0
function z(){w?j.visible=!0:w=F(_,{props:j,target:document.body})}export{z as default}
//# sourceMappingURL=mountBuffLog.svelte-BI_7hzq_.js.map
