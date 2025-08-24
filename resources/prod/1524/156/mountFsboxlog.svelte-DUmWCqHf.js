import{ap as s,x as a,y as t,ak as e,al as o,dX as n,B as l,D as r,E as i,C as c,aE as b,aF as v,F as f,bO as u,J as d,L as p,N as m,s as h,bH as x,I as y,dZ as g,bB as S,bI as B,u as F,q as L,a$ as $,l as _,aS as q,P as k,S as z,c2 as C,Q as E,bA as H,d5 as I,n as N}from"./calfSystem-79LsojAC.js"
function j(s,a){B("fsh_fsboxcontent",""),h("FS Box Log","clear storage"),y(a,[],!0)}var w=l('<br/> <span><a class="svelte-14ozmrh"> </a> says:</span> <q> </q>',1),A=l('<div class="top svelte-14ozmrh"><button type="button">Clear</button></div> <div class="textContainer svelte-14ozmrh"><!></div>',1)
function D(s,l){a(l,!0)
let B=t(l,"visible",15,!0),N=e(o([]))
function D(s){const a=F({innerHTML:s}),t=L("a",a)
return[Number($(t?.href,"player_id")),_(t),q(L("q",a))]}const J=([s,a,t])=>s&&g(a)&&g(t)
async function M(){const s=await x("fsh_fsboxcontent")??""
y(N,s.split("<br>").map(D).filter(J),!0)}{const a=s=>{var a=S("FS Box Log")
p(s,a)}
n(s,{close:function(){h("FS Box Log","close"),B(!1)},get visible(){return B()},title:a,children:(s,a)=>{var t=A(),e=r(t)
i(e).__click=[j,N]
var o=c(e,2),n=i(o)
b(n,M,null,s=>{var a=v(),t=r(a)
f(t,17,()=>d(N),u,(s,a)=>{var t=H(()=>I(d(a),3))
var e=w(),o=c(r(e),2),n=i(o),l=i(n),b=c(o,2),v=i(b)
k(()=>{z(n,"href",`${C??""}${d(t)[0]??""}`),E(l,d(t)[1]),E(v,d(t)[2])}),p(s,e)}),p(s,a)}),p(s,t)},$$slots:{title:!0,default:!0}})}m()}s(["click"])
const J=o({visible:!0})
let M=0
function O(){M?J.visible=!0:M=N(D,{props:J,target:document.body})}export{O as default}
//# sourceMappingURL=mountFsboxlog.svelte-DUmWCqHf.js.map
