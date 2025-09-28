import{ao as s,x as a,y as t,aj as e,ak as l,dR as i,B as o,D as n,E as c,C as r,aE as v,aF as b,F as f,bP as u,J as d,L as p,N as m,s as g,bI as y,de as B,I as C,bC as L,bJ as h,G as k,P as x,Q as $,bB as j,d8 as E,n as F}from"./calfSystem-CIuUjh4H.js"
function I(s,a){h(B,""),g("Buff Log","clear storage"),C(a,[],!0)}var J=o('<span class="fshRed"> </span>'),P=o("<br/> <!>",1),R=o('<div class="top svelte-ebl3om"><button type="button">Clear</button></div> <div class="textContainer svelte-ebl3om"><!></div>',1)
function _(s,o){a(o,!0)
let h=t(o,"visible",15,!0),F=e(l([]))
async function _(){const s=await y(B)??""
C(F,s.split("<br>").map(s=>[s.slice(0,19),s.slice(20)]),!0)}{const a=s=>{var a=L("Buff Log")
p(s,a)}
i(s,{close:function(){g("Buff Log","close"),h(!1)},get visible(){return h()},title:a,children:(s,a)=>{var t=R(),e=n(t)
c(e).__click=[I,F]
var l=r(e,2),i=c(l)
v(i,_,null,s=>{var a=b(),t=n(a)
f(t,17,()=>d(F),u,(s,a)=>{var t=j(()=>E(d(a),2))
let e=()=>d(t)[1]
var l=P(),i=r(n(l)),o=r(i),v=s=>{var a=J(),t=c(a)
x(s=>$(t,s),[()=>e().slice(21,-7)]),p(s,a)},b=s=>{var a=L()
x(()=>$(a,e())),p(s,a)}
k(o,s=>{e().startsWith("<")?s(v):s(b,!1)}),x(()=>$(i,` ${d(t)[0]??""} `)),p(s,l)}),p(s,a)}),p(s,t)},$$slots:{title:!0,default:!0}})}m()}s(["click"])
const w=l({visible:!0})
let D=0
function G(){D?w.visible=!0:D=F(_,{props:w,target:document.body})}export{G as default}
//# sourceMappingURL=mountBuffLog.svelte-BkopWaWD.js.map
