import{ap as a,y as s,z as t,ak as e,al as o,dW as n,C as c,E as l,F as i,D as r,aF as b,aG as v,G as f,P as u,Q as d,c1 as p,K as m,S as x,N as y,bD as g,bT as h,d8 as F,O as L,s as S,bK as _,J as q,dY as $,bL as k,bG as B,v as C,q as G,b0 as T,m as D,aT as K,t as N}from"./calfSystem-HVCiy-VV.js"
var j=c('<br/> <span><a class="svelte-1o21bac"> </a> says:</span> <q> </q>',1),w=c('<div class="top svelte-1o21bac"><button type="button">Clear</button></div> <div class="textContainer svelte-1o21bac"><!></div>',1)
function z(a,c){s(c,!0)
let N=t(c,"visible",15,!0),z=e(o([]))
function E(a){const s=C({innerHTML:a}),t=G("a",s)
return[Number(T(t?.href,"player_id")),D(t),K(G("q",s))]}const H=([a,s,t])=>a&&$(s)&&$(t)
async function J(){const a=await _("fsh_fsboxcontent")??""
q(z,a.split("<br>").map(E).filter(H),!0)}function M(){k("fsh_fsboxcontent",""),S("FS Box Log","clear storage"),q(z,[],!0)}{const s=a=>{var s=B("FS Box Log")
y(a,s)}
n(a,{close:function(){S("FS Box Log","close"),N(!1)},get visible(){return N()},title:s,children:(a,s)=>{var t=w(),e=l(t)
i(e).__click=M
var o=r(e,2),n=i(o)
b(n,J,null,a=>{var s=v(),t=l(s)
f(t,17,()=>m(z),h,(a,s)=>{var t=g(()=>F(m(s),3))
var e=j(),o=r(l(e),2),n=i(o),c=i(n),b=r(o,2),v=i(b)
u(()=>{d(n,"href",`${p??""}${m(t)[0]??""}`),x(c,m(t)[1]),x(v,m(t)[2])}),y(a,e)}),y(a,s)}),y(a,t)},$$slots:{title:!0,default:!0}})}L()}a(["click"])
const E=o({visible:!0})
let H=0
function J(){H?E.visible=!0:H=N(z,{props:E,target:document.body})}export{J as default}
//# sourceMappingURL=mountFsboxlog.svelte-D0afBWSf.js.map
