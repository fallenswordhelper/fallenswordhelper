import{ap as a,y as e,z as t,ak as s,al as i,dW as l,C as v,E as n,D as r,F as d,d7 as o,da as c,bG as u,N as m,aF as b,aG as y,H as g,K as p,G as k,P as f,aN as $,Q as h,bm as C,dx as L,S as _,bD as w,bT as x,d8 as D,O as E,s as A,bK as G,J as N,ab as P,as as F,bL as H,c2 as K,t as S}from"./calfSystem-HVCiy-VV.js"
var j=v('<div class="enhancements svelte-ktle3y"> </div>'),z=v('<div class="missing svelte-ktle3y">**Missing**</div>'),I=v('<div class="entity svelte-ktle3y"><div class="image tip-static svelte-ktle3y"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),J=v('<div class="data grid svelte-ktle3y"></div>'),M=v('<div class="no-mobs svelte-ktle3y">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),O=v('<div class="title svelte-ktle3y"><span class="bold svelte-ktle3y">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-ktle3y"><div><button class="sortable svelte-ktle3y" type="button">Entity</button></div> <div><button class="sortable svelte-ktle3y" type="button">Class</button></div> <div><button class="sortable svelte-ktle3y" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function Q(a,v){e(v,!0)
let S=t(v,"visible",15,!0)
let Q=s(i([])),T=1,W=""
const q=([a],[e])=>T*K(a,e),B=([,a],[,e])=>T*K(a,e),R=([,,a],[,,e])=>T*(a-e)
function U(a,e){T=W===e?T:1,N(Q,p(Q).slice().sort(a),!0),W=e,T*=-1}function V(){A("Creature Log","sort by entity"),U(q,"entity")}function X(){A("Creature Log","sort by class"),U(B,"class")}function Y(){A("Creature Log","sort by level"),U(R,"level")}async function Z(){const a=await G("fsh_monsterLog")
a&&(N(Q,P(a).map(([a,e])=>[a,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?P(e.enhancements):0,e.image_id]),!0),U(R,"level"))}async function aa(){A("Creature Log","clear storage")
await F("Are you sure you want to clear your log?")&&(N(Q,[],!0),H("fsh_monsterLog",""))}{const e=a=>{var e=u("Creature Log")
m(a,e)}
l(a,{close:function(){A("Creature Log","close"),S(!1)},get visible(){return S()},title:e,children:(a,e)=>{var t=O(),s=n(t),i=r(d(s),2)
o(i,()=>({"--button-color":"white","--button-width":"2.8em"})),c(i.lastChild,{onclick:aa,children:(a,e)=>{var t=u("Clear")
m(a,t)}})
var l=r(s,2),v=d(l)
d(v).__click=V
var E=r(v,2)
d(E).__click=X
var A=r(E,2)
d(A).__click=Y
var G=r(l,2)
b(G,Z,null,a=>{var e=y(),t=n(e),s=a=>{var e=J()
k(e,21,()=>p(Q),x,(a,e)=>{var t=w(()=>D(p(e),10))
let s=()=>p(t)[3],i=()=>p(t)[4],l=()=>p(t)[5],v=()=>p(t)[6],o=()=>p(t)[7],c=()=>p(t)[8],u=()=>p(t)[9]
var b=I(),E=n(b),A=d(E)
let G
var N=r(A,2),P=d(N),F=r(E,2),H=d(F),K=r(F,2),S=d(K),J=r(K,2),M=d(J),O=r(J,2),Q=d(O),T=r(O,2),W=d(T),q=r(T,2),B=d(q),R=r(q,2),U=d(R),V=r(R,2),X=d(V),Y=a=>{var e=y(),t=n(e)
k(t,17,c,x,(a,e,t,s)=>{var i=w(()=>D(p(e),2))
var l=j(),v=d(l)
f(()=>_(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`)),m(a,l)}),m(a,e)},Z=a=>{var e=z()
m(a,e)}
g(X,a=>{c()?a(Y):a(Z,!1)}),f(a=>{h(A,"data-tipped",`<img height=200 src='${C??""}creatures/${u()??""}.png' width=200>`),G=L(A,"",G,{"background-image":`url('${C??""}creatures/${u()??""}.png')`}),_(P,p(t)[0]),_(H,p(t)[1]),_(S,a),_(M,`${s().min??""} - ${s().max??""}`),_(Q,`${i().min??""} - ${i().max??""}`),_(W,`${l().min??""} - ${l().max??""}`),_(B,`${v().min??""} - ${v().max??""}`),_(U,`${o().min??""} - ${o().max??""}`)},[()=>$(p(t)[2])]),m(a,b)}),m(a,e)},i=a=>{var e=M()
m(a,e)}
g(t,a=>{p(Q).length?a(s):a(i,!1)}),m(a,e)}),m(a,t)},$$slots:{title:!0,default:!0}})}E()}a(["click"])
const T=i({visible:!0})
let W=0
function q(){W?T.visible=!0:W=S(Q,{props:T,target:document.body})}export{q as default}
//# sourceMappingURL=mountCreatureLog.svelte-CY9NL9Yv.js.map
