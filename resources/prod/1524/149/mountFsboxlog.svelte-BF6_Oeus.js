import{a6 as a,R as s,bE as t,S as e,T as o,dZ as n,X as r,au as i,Z as l,Y as c,as as b,at as u,_ as f,V as v,a3 as d,a4 as p,s as m,bx as h,W as x,d$ as y,bq as g,by as _,u as q,q as S,aQ as $,aa as L,aH as z,a7 as B,br as F,bV as H,a8 as k,bH as C,ad as T}from"./calfSystem-BGW9cdWN.js"
function V(a,s){_("fsh_fsboxcontent",""),m("FS Box Log","clear storage"),x(s,[],!0)}var Z=r('<br> <span><a class="svelte-14ozmrh"> </a> says:</span> <q> </q>',1),j=r('<div class="top svelte-14ozmrh"><button type="button">Clear</button></div> <div class="textContainer svelte-14ozmrh"><!></div>',1)
function w(a,r){s(r,!0)
let _=t(r,"visible",15,!0),T=e(o([]))
function w(a){const s=q({innerHTML:a}),t=S("a",s)
return[Number($(t?.href,"player_id")),L(t),z(S("q",s))]}const E=([a,s,t])=>a&&y(s)&&y(t)
async function M(){const a=await h("fsh_fsboxcontent")??""
x(T,a.split("<br>").map(w).filter(E),!0)}{const s=a=>{var s=g("FS Box Log")
d(a,s)}
n(a,{close:function(){m("FS Box Log","close"),_(!1)},get visible(){return _()},title:s,children:(a,s)=>{var t=j(),e=i(t)
l(e).__click=[V,T]
var o=c(e,2),n=l(o)
b(n,M,null,(a=>{var s=u(),t=i(s)
f(t,17,(()=>v(T)),C,((a,s)=>{var t=Z(),e=c(i(t),2),o=l(e),n=l(o),r=c(e,2),b=l(r)
B((()=>{F(o,"href",`${H??""}${v(s)[0]??""}`),k(n,v(s)[1]),k(b,v(s)[2])})),d(a,t)})),d(a,s)})),d(a,t)},$$slots:{title:!0,default:!0}})}p()}a(["click"])
const E=o({visible:!0})
let M=0
function N(){M?E.visible=!0:M=T(w,{props:E,target:document.body})}export{N as default}
//# sourceMappingURL=mountFsboxlog.svelte-BF6_Oeus.js.map
