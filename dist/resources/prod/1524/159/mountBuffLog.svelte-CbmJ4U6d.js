import{ap as s,y as a,z as t,ak as e,al as l,dW as i,C as o,E as c,F as n,D as r,aF as v,aG as b,G as f,bR as u,K as d,N as p,O as g,s as m,bK as y,dg as L,J as h,bE as k,bL as B,H as C,Q as R,R as $,bD as x,d8 as D,t as E}from"./calfSystem-CIdPz3EO.js"
function F(s,a){B(L,""),m("Buff Log","clear storage"),h(a,[],!0)}var G=o('<span class="fshRed"> </span>'),K=o("<br/> <!>",1),W=o('<div class="top svelte-ebl3om"><button type="button">Clear</button></div> <div class="textContainer svelte-ebl3om"><!></div>',1)
function _(s,o){a(o,!0)
let B=t(o,"visible",15,!0),E=e(l([]))
async function _(){const s=await y(L)??""
h(E,s.split("<br>").map(s=>[s.slice(0,19),s.slice(20)]),!0)}{const a=s=>{var a=k("Buff Log")
p(s,a)}
i(s,{close:function(){m("Buff Log","close"),B(!1)},get visible(){return B()},title:a,children:(s,a)=>{var t=W(),e=c(t)
n(e).__click=[F,E]
var l=r(e,2),i=n(l)
v(i,_,null,s=>{var a=b(),t=c(a)
f(t,17,()=>d(E),u,(s,a)=>{var t=x(()=>D(d(a),2))
let e=()=>d(t)[1]
var l=K(),i=r(c(l)),o=r(i),v=s=>{var a=G(),t=n(a)
R(s=>$(t,s),[()=>e().slice(21,-7)]),p(s,a)},b=s=>{var a=k()
R(()=>$(a,e())),p(s,a)}
C(o,s=>{e().startsWith("<")?s(v):s(b,!1)}),R(()=>$(i,` ${d(t)[0]??""} `)),p(s,l)}),p(s,a)}),p(s,t)},$$slots:{title:!0,default:!0}})}g()}s(["click"])
const j=l({visible:!0})
let w=0
function z(){w?j.visible=!0:w=E(_,{props:j,target:document.body})}export{z as default}
//# sourceMappingURL=mountBuffLog.svelte-CbmJ4U6d.js.map
