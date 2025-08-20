import{ao as a,x as s,y as t,aj as e,ak as o,d$ as n,A as r,C as l,D as i,B as c,aD as b,aE as v,E as f,bN as u,I as d,K as p,L as m,s as h,bG as x,H as y,e1 as g,bA as _,bH as L,u as $,q,a_ as z,l as B,aR as S,O as k,R as C,c1 as F,P as H,bz as j,da as A,n as D}from"./calfSystem-CT1aM4VG.js"
function E(a,s){L("fsh_fsboxcontent",""),h("FS Box Log","clear storage"),y(s,[],!0)}var N=r('<br/> <span><a class="svelte-14ozmrh"> </a> says:</span> <q> </q>',1),R=r('<div class="top svelte-14ozmrh"><button type="button">Clear</button></div> <div class="textContainer svelte-14ozmrh"><!></div>',1)
function w(a,r){s(r,!0)
let L=t(r,"visible",15,!0),D=e(o([]))
function w(a){const s=$({innerHTML:a}),t=q("a",s)
return[Number(z(t?.href,"player_id")),B(t),S(q("q",s))]}const G=([a,s,t])=>a&&g(s)&&g(t)
async function I(){const a=await x("fsh_fsboxcontent")??""
y(D,a.split("<br>").map(w).filter(G),!0)}{const s=a=>{var s=_("FS Box Log")
p(a,s)}
n(a,{close:function(){h("FS Box Log","close"),L(!1)},get visible(){return L()},title:s,children:(a,s)=>{var t=R(),e=l(t)
i(e).__click=[E,D]
var o=c(e,2),n=i(o)
b(n,I,null,(a=>{var s=v(),t=l(s)
f(t,17,(()=>d(D)),u,((a,s)=>{var t=j((()=>A(d(s),3)))
var e=N(),o=c(l(e),2),n=i(o),r=i(n),b=c(o,2),v=i(b)
k((()=>{C(n,"href",`${F??""}${d(t)[0]??""}`),H(r,d(t)[1]),H(v,d(t)[2])})),p(a,e)})),p(a,s)})),p(a,t)},$$slots:{title:!0,default:!0}})}m()}a(["click"])
const G=o({visible:!0})
let I=0
function K(){I?G.visible=!0:I=D(w,{props:G,target:document.body})}export{K as default}
//# sourceMappingURL=mountFsboxlog.svelte-DcmDlKhW.js.map
