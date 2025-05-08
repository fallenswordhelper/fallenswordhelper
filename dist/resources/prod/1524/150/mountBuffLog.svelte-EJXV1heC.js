import{a6 as a,R as s,bE as t,S as e,T as l,dZ as i,X as o,au as c,Z as n,Y as r,as as f,at as v,_ as u,V as b,a3 as d,a4 as p,s as g,bx as m,df as y,W as h,bq as x,by as B,a0 as L,a7 as $,a8 as _,bH as k,ad as C}from"./calfSystem-BGOTz8de.js"
function R(a,s){B(y,""),g("Buff Log","clear storage"),h(s,[],!0)}var S=o('<span class="fshRed"> </span>'),W=o("<br> <!>",1),Z=o('<div class="top svelte-1f283a3"><button type="button">Clear</button></div> <div class="textContainer svelte-1f283a3"><!></div>',1)
function j(a,o){s(o,!0)
let B=t(o,"visible",15,!0),C=e(l([]))
async function j(){const a=await m(y)??""
h(C,a.split("<br>").map((a=>[a.slice(0,19),a.slice(20)])),!0)}{const s=a=>{var s=x("Buff Log")
d(a,s)}
i(a,{close:function(){g("Buff Log","close"),B(!1)},get visible(){return B()},title:s,children:(a,s)=>{var t=Z(),e=c(t)
n(e).__click=[R,C]
var l=r(e,2),i=n(l)
f(i,j,null,(a=>{var s=v(),t=c(s)
u(t,17,(()=>b(C)),k,((a,s)=>{let t=()=>b(s)[1]
var e=W(),l=r(c(e)),i=r(l),o=a=>{var s=S(),e=n(s)
$((a=>_(e,a)),[()=>t().slice(21,-7)]),d(a,s)},f=a=>{var s=x()
$((()=>_(s,t()))),d(a,s)}
L(i,(a=>{t().startsWith("<")?a(o):a(f,!1)})),$((()=>_(l,` ${b(s)[0]??""} `))),d(a,e)})),d(a,s)})),d(a,t)},$$slots:{title:!0,default:!0}})}p()}a(["click"])
const q=l({visible:!0})
let w=0
function E(){w?q.visible=!0:w=C(j,{props:q,target:document.body})}export{E as default}
//# sourceMappingURL=mountBuffLog.svelte-EJXV1heC.js.map
