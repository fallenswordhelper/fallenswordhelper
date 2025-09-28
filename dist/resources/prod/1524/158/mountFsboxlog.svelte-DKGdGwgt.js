import{ao as a,x as s,y as t,aj as e,ak as o,dR as n,B as c,D as l,E as i,C as r,aE as b,aF as v,F as f,bP as u,J as d,L as p,N as x,s as y,bI as g,I as m,dT as S,bC as h,bJ as B,u as F,q as L,a$ as $,l as _,aS as q,P as C,S as k,c3 as j,Q as E,bB as I,d8 as J,n as N}from"./calfSystem-CIuUjh4H.js"
function P(a,s){B("fsh_fsboxcontent",""),y("FS Box Log","clear storage"),m(s,[],!0)}var T=c('<br/> <span><a class="svelte-1o21bac"> </a> says:</span> <q> </q>',1),w=c('<div class="top svelte-1o21bac"><button type="button">Clear</button></div> <div class="textContainer svelte-1o21bac"><!></div>',1)
function D(a,c){s(c,!0)
let B=t(c,"visible",15,!0),N=e(o([]))
function D(a){const s=F({innerHTML:a}),t=L("a",s)
return[Number($(t?.href,"player_id")),_(t),q(L("q",s))]}const H=([a,s,t])=>a&&S(s)&&S(t)
async function M(){const a=await g("fsh_fsboxcontent")??""
m(N,a.split("<br>").map(D).filter(H),!0)}{const s=a=>{var s=h("FS Box Log")
p(a,s)}
n(a,{close:function(){y("FS Box Log","close"),B(!1)},get visible(){return B()},title:s,children:(a,s)=>{var t=w(),e=l(t)
i(e).__click=[P,N]
var o=r(e,2),n=i(o)
b(n,M,null,a=>{var s=v(),t=l(s)
f(t,17,()=>d(N),u,(a,s)=>{var t=I(()=>J(d(s),3))
var e=T(),o=r(l(e),2),n=i(o),c=i(n),b=r(o,2),v=i(b)
C(()=>{k(n,"href",`${j??""}${d(t)[0]??""}`),E(c,d(t)[1]),E(v,d(t)[2])}),p(a,e)}),p(a,s)}),p(a,t)},$$slots:{title:!0,default:!0}})}x()}a(["click"])
const H=o({visible:!0})
let M=0
function Q(){M?H.visible=!0:M=N(D,{props:H,target:document.body})}export{Q as default}
//# sourceMappingURL=mountFsboxlog.svelte-DKGdGwgt.js.map
