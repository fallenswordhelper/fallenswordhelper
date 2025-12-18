import{ap as s,y as a,z as t,ak as e,al as l,dW as i,C as o,E as c,F as n,D as r,aF as v,aG as b,G as f,bO as u,K as d,N as p,O as m,s as g,bH as y,dh as h,J as k,bI as B,bQ as C,H as L,Q as $,R as x,cp as F,d8 as G,t as H}from"./calfSystem-Cs6CSxoU.js"
var O=o('<span class="fshRed"> </span>'),Q=o("<br/> <!>",1),R=o('<div class="top svelte-ebl3om"><button type="button">Clear</button></div> <div class="textContainer svelte-ebl3om"><!></div>',1)
function W(s,o){a(o,!0)
let H=t(o,"visible",15,!0),W=e(l([]))
async function _(){const s=await y(h)??""
k(W,s.split("<br>").map(s=>[s.slice(0,19),s.slice(20)]),!0)}function j(){B(h,""),g("Buff Log","clear storage"),k(W,[],!0)}{const a=s=>{var a=C("Buff Log")
p(s,a)}
i(s,{close:function(){g("Buff Log","close"),H(!1)},get visible(){return H()},title:a,children:(s,a)=>{var t=R(),e=c(t)
n(e).__click=j
var l=r(e,2),i=n(l)
v(i,_,null,s=>{var a=b(),t=c(a)
f(t,17,()=>d(W),u,(s,a)=>{var t=F(()=>G(d(a),2))
let e=()=>d(t)[1]
var l=Q(),i=r(c(l)),o=r(i),v=s=>{var a=O(),t=n(a)
$(s=>x(t,s),[()=>e().slice(21,-7)]),p(s,a)},b=s=>{var a=C()
$(()=>x(a,e())),p(s,a)}
L(o,s=>{e().startsWith("<")?s(v):s(b,!1)}),$(()=>x(i,` ${d(t)[0]??""} `)),p(s,l)}),p(s,a)}),p(s,t)},$$slots:{title:!0,default:!0}})}m()}s(["click"])
const _=l({visible:!0})
let j=0
function w(){j?_.visible=!0:j=H(W,{props:_,target:document.body})}export{w as default}
//# sourceMappingURL=mountBuffLog.svelte-B8K4b_cH.js.map
