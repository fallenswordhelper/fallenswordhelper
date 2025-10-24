import{ap as a,y as s,z as t,ak as e,al as o,dW as n,C as c,E as l,F as i,D as r,aF as b,aG as v,G as f,bR as u,K as d,N as p,O as m,s as x,bK as y,J as g,dY as h,bE as F,bL as L,v as _,q,b0 as S,m as $,aT as k,Q as B,T as C,c4 as T,R as D,bD as E,d8 as G,t as K}from"./calfSystem-CIdPz3EO.js"
function N(a,s){L("fsh_fsboxcontent",""),x("FS Box Log","clear storage"),g(s,[],!0)}var R=c('<br/> <span><a class="svelte-1o21bac"> </a> says:</span> <q> </q>',1),j=c('<div class="top svelte-1o21bac"><button type="button">Clear</button></div> <div class="textContainer svelte-1o21bac"><!></div>',1)
function w(a,c){s(c,!0)
let L=t(c,"visible",15,!0),K=e(o([]))
function w(a){const s=_({innerHTML:a}),t=q("a",s)
return[Number(S(t?.href,"player_id")),$(t),k(q("q",s))]}const z=([a,s,t])=>a&&h(s)&&h(t)
async function H(){const a=await y("fsh_fsboxcontent")??""
g(K,a.split("<br>").map(w).filter(z),!0)}{const s=a=>{var s=F("FS Box Log")
p(a,s)}
n(a,{close:function(){x("FS Box Log","close"),L(!1)},get visible(){return L()},title:s,children:(a,s)=>{var t=j(),e=l(t)
i(e).__click=[N,K]
var o=r(e,2),n=i(o)
b(n,H,null,a=>{var s=v(),t=l(s)
f(t,17,()=>d(K),u,(a,s)=>{var t=E(()=>G(d(s),3))
var e=R(),o=r(l(e),2),n=i(o),c=i(n),b=r(o,2),v=i(b)
B(()=>{C(n,"href",`${T??""}${d(t)[0]??""}`),D(c,d(t)[1]),D(v,d(t)[2])}),p(a,e)}),p(a,s)}),p(a,t)},$$slots:{title:!0,default:!0}})}m()}a(["click"])
const z=o({visible:!0})
let H=0
function J(){H?z.visible=!0:H=K(w,{props:z,target:document.body})}export{J as default}
//# sourceMappingURL=mountFsboxlog.svelte-DAUTBD7K.js.map
