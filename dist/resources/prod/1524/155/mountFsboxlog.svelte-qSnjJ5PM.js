import{ao as s,x as a,y as t,aj as e,ak as o,e0 as n,A as r,C as l,D as i,B as c,aD as b,aE as v,E as f,bN as u,I as d,K as p,L as m,s as h,bG as x,H as y,e2 as g,bA as _,bH as L,u as q,q as z,a_ as B,l as S,aR as $,O as k,R as C,c1 as F,P as H,bz as j,db as A,n as D}from"./calfSystem-UyQ_FKFu.js"
function E(s,a){L("fsh_fsboxcontent",""),h("FS Box Log","clear storage"),y(a,[],!0)}var N=r('<br/> <span><a class="svelte-14ozmrh"> </a> says:</span> <q> </q>',1),R=r('<div class="top svelte-14ozmrh"><button type="button">Clear</button></div> <div class="textContainer svelte-14ozmrh"><!></div>',1)
function w(s,r){a(r,!0)
let L=t(r,"visible",15,!0),D=e(o([]))
function w(s){const a=q({innerHTML:s}),t=z("a",a)
return[Number(B(t?.href,"player_id")),S(t),$(z("q",a))]}const G=([s,a,t])=>s&&g(a)&&g(t)
async function I(){const s=await x("fsh_fsboxcontent")??""
y(D,s.split("<br>").map(w).filter(G),!0)}{const a=s=>{var a=_("FS Box Log")
p(s,a)}
n(s,{close:function(){h("FS Box Log","close"),L(!1)},get visible(){return L()},title:a,children:(s,a)=>{var t=R(),e=l(t)
i(e).__click=[E,D]
var o=c(e,2),n=i(o)
b(n,I,null,s=>{var a=v(),t=l(a)
f(t,17,()=>d(D),u,(s,a)=>{var t=j(()=>A(d(a),3))
var e=N(),o=c(l(e),2),n=i(o),r=i(n),b=c(o,2),v=i(b)
k(()=>{C(n,"href",`${F??""}${d(t)[0]??""}`),H(r,d(t)[1]),H(v,d(t)[2])}),p(s,e)}),p(s,a)}),p(s,t)},$$slots:{title:!0,default:!0}})}m()}s(["click"])
const G=o({visible:!0})
let I=0
function K(){I?G.visible=!0:I=D(w,{props:G,target:document.body})}export{K as default}
//# sourceMappingURL=mountFsboxlog.svelte-qSnjJ5PM.js.map
