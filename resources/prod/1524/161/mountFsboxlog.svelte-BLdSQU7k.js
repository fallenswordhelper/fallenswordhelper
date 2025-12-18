import{ap as a,y as s,z as t,ak as e,al as o,dW as n,C as c,E as l,F as i,D as r,aF as b,aG as v,G as f,bO as u,K as d,N as p,O as m,s as x,bH as y,J as g,dY as h,bI as F,bQ as _,v as q,q as L,b0 as S,m as $,aT as k,Q as B,T as C,c2 as T,R as G,cp as H,d8 as N,t as O}from"./calfSystem-Cs6CSxoU.js"
var Q=c('<br/> <span><a class="svelte-1o21bac"> </a> says:</span> <q> </q>',1),j=c('<div class="top svelte-1o21bac"><button type="button">Clear</button></div> <div class="textContainer svelte-1o21bac"><!></div>',1)
function w(a,c){s(c,!0)
let O=t(c,"visible",15,!0),w=e(o([]))
function z(a){const s=q({innerHTML:a}),t=L("a",s)
return[Number(S(t?.href,"player_id")),$(t),k(L("q",s))]}const D=([a,s,t])=>a&&h(s)&&h(t)
async function E(){const a=await y("fsh_fsboxcontent")??""
g(w,a.split("<br>").map(z).filter(D),!0)}function I(){F("fsh_fsboxcontent",""),x("FS Box Log","clear storage"),g(w,[],!0)}{const s=a=>{var s=_("FS Box Log")
p(a,s)}
n(a,{close:function(){x("FS Box Log","close"),O(!1)},get visible(){return O()},title:s,children:(a,s)=>{var t=j(),e=l(t)
i(e).__click=I
var o=r(e,2),n=i(o)
b(n,E,null,a=>{var s=v(),t=l(s)
f(t,17,()=>d(w),u,(a,s)=>{var t=H(()=>N(d(s),3))
var e=Q(),o=r(l(e),2),n=i(o),c=i(n),b=r(o,2),v=i(b)
B(()=>{C(n,"href",`${T??""}${d(t)[0]??""}`),G(c,d(t)[1]),G(v,d(t)[2])}),p(a,e)}),p(a,s)}),p(a,t)},$$slots:{title:!0,default:!0}})}m()}a(["click"])
const z=o({visible:!0})
let D=0
function E(){D?z.visible=!0:D=O(w,{props:z,target:document.body})}export{E as default}
//# sourceMappingURL=mountFsboxlog.svelte-BLdSQU7k.js.map
