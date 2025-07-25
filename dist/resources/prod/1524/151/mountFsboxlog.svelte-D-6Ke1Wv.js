import{aq as s,z as a,A as t,al as e,am as o,e5 as n,C as r,E as l,F as i,D as c,aF as b,aG as f,G as v,bP as u,K as d,N as p,O as m,s as h,bI as x,J as g,e7 as y,bC as q,bJ as F,w as _,q as z,b0 as B,n as C,aT as L,Q as S,T as $,c3 as T,R as k,bB as w,df as G,u as J}from"./calfSystem-C1X5YxJZ.js"
function N(s,a){F("fsh_fsboxcontent",""),h("FS Box Log","clear storage"),g(a,[],!0)}var j=r('<br/> <span><a class="svelte-14ozmrh"> </a> says:</span> <q> </q>',1),A=r('<div class="top svelte-14ozmrh"><button type="button">Clear</button></div> <div class="textContainer svelte-14ozmrh"><!></div>',1)
function D(s,r){a(r,!0)
let F=t(r,"visible",15,!0),J=e(o([]))
function D(s){const a=_({innerHTML:s}),t=z("a",a)
return[Number(B(t?.href,"player_id")),C(t),L(z("q",a))]}const E=([s,a,t])=>s&&y(a)&&y(t)
async function H(){const s=await x("fsh_fsboxcontent")??""
g(J,s.split("<br>").map(D).filter(E),!0)}{const a=s=>{var a=q("FS Box Log")
p(s,a)}
n(s,{close:function(){h("FS Box Log","close"),F(!1)},get visible(){return F()},title:a,children:(s,a)=>{var t=A(),e=l(t)
i(e).__click=[N,J]
var o=c(e,2),n=i(o)
b(n,H,null,(s=>{var a=f(),t=l(a)
v(t,17,(()=>d(J)),u,((s,a)=>{var t=w((()=>G(d(a),3)))
var e=j(),o=c(l(e),2),n=i(o),r=i(n),b=c(o,2),f=i(b)
S((()=>{$(n,"href",`${T??""}${d(t)[0]??""}`),k(r,d(t)[1]),k(f,d(t)[2])})),p(s,e)})),p(s,a)})),p(s,t)},$$slots:{title:!0,default:!0}})}m()}s(["click"])
const E=o({visible:!0})
let H=0
function I(){H?E.visible=!0:H=J(D,{props:E,target:document.body})}export{I as default}
//# sourceMappingURL=mountFsboxlog.svelte-D-6Ke1Wv.js.map
