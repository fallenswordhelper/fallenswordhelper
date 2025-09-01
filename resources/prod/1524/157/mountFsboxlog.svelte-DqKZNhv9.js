import{ap as s,x as a,y as t,ak as e,al as o,dY as n,B as l,D as r,E as i,C as c,aF as b,aG as v,F as f,bQ as u,J as d,L as p,N as m,s as h,bJ as x,I as y,d_ as g,bD as _,bK as F,u as L,q as S,b0 as q,l as B,aT as C,P as $,S as k,c4 as z,Q as D,bC as J,d9 as N,n as Q}from"./calfSystem-CQOGdqPv.js"
function T(s,a){F("fsh_fsboxcontent",""),h("FS Box Log","clear storage"),y(a,[],!0)}var j=l('<br/> <span><a class="svelte-14ozmrh"> </a> says:</span> <q> </q>',1),w=l('<div class="top svelte-14ozmrh"><button type="button">Clear</button></div> <div class="textContainer svelte-14ozmrh"><!></div>',1)
function E(s,l){a(l,!0)
let F=t(l,"visible",15,!0),Q=e(o([]))
function E(s){const a=L({innerHTML:s}),t=S("a",a)
return[Number(q(t?.href,"player_id")),B(t),C(S("q",a))]}const G=([s,a,t])=>s&&g(a)&&g(t)
async function H(){const s=await x("fsh_fsboxcontent")??""
y(Q,s.split("<br>").map(E).filter(G),!0)}{const a=s=>{var a=_("FS Box Log")
p(s,a)}
n(s,{close:function(){h("FS Box Log","close"),F(!1)},get visible(){return F()},title:a,children:(s,a)=>{var t=w(),e=r(t)
i(e).__click=[T,Q]
var o=c(e,2),n=i(o)
b(n,H,null,s=>{var a=v(),t=r(a)
f(t,17,()=>d(Q),u,(s,a)=>{var t=J(()=>N(d(a),3))
var e=j(),o=c(r(e),2),n=i(o),l=i(n),b=c(o,2),v=i(b)
$(()=>{k(n,"href",`${z??""}${d(t)[0]??""}`),D(l,d(t)[1]),D(v,d(t)[2])}),p(s,e)}),p(s,a)}),p(s,t)},$$slots:{title:!0,default:!0}})}m()}s(["click"])
const G=o({visible:!0})
let H=0
function I(){H?G.visible=!0:H=Q(E,{props:G,target:document.body})}export{I as default}
//# sourceMappingURL=mountFsboxlog.svelte-DqKZNhv9.js.map
