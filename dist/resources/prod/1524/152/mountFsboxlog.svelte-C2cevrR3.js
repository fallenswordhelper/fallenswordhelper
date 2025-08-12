import{aq as s,z as a,A as t,al as e,am as o,e4 as n,C as r,E as l,F as i,D as c,aF as b,aG as v,G as f,bM as u,K as d,N as p,O as m,s as h,bF as x,J as y,e6 as g,bz as F,bG as q,w as z,q as _,aY as L,n as S,aP as $,Q as B,T as C,c0 as G,R as k,by as w,dd as M,u as N}from"./calfSystem-BlPuMQGT.js"
function T(s,a){q("fsh_fsboxcontent",""),h("FS Box Log","clear storage"),y(a,[],!0)}var j=r('<br/> <span><a class="svelte-14ozmrh"> </a> says:</span> <q> </q>',1),A=r('<div class="top svelte-14ozmrh"><button type="button">Clear</button></div> <div class="textContainer svelte-14ozmrh"><!></div>',1)
function D(s,r){a(r,!0)
let q=t(r,"visible",15,!0),N=e(o([]))
function D(s){const a=z({innerHTML:s}),t=_("a",a)
return[Number(L(t?.href,"player_id")),S(t),$(_("q",a))]}const E=([s,a,t])=>s&&g(a)&&g(t)
async function H(){const s=await x("fsh_fsboxcontent")??""
y(N,s.split("<br>").map(D).filter(E),!0)}{const a=s=>{var a=F("FS Box Log")
p(s,a)}
n(s,{close:function(){h("FS Box Log","close"),q(!1)},get visible(){return q()},title:a,children:(s,a)=>{var t=A(),e=l(t)
i(e).__click=[T,N]
var o=c(e,2),n=i(o)
b(n,H,null,(s=>{var a=v(),t=l(a)
f(t,17,(()=>d(N)),u,((s,a)=>{var t=w((()=>M(d(a),3)))
var e=j(),o=c(l(e),2),n=i(o),r=i(n),b=c(o,2),v=i(b)
B((()=>{C(n,"href",`${G??""}${d(t)[0]??""}`),k(r,d(t)[1]),k(v,d(t)[2])})),p(s,e)})),p(s,a)})),p(s,t)},$$slots:{title:!0,default:!0}})}m()}s(["click"])
const E=o({visible:!0})
let H=0
function J(){H?E.visible=!0:H=N(D,{props:E,target:document.body})}export{J as default}
//# sourceMappingURL=mountFsboxlog.svelte-C2cevrR3.js.map
