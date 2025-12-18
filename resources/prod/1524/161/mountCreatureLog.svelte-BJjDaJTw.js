import{ap as e,y as t,z as a,ak as s,al as i,dW as l,C as v,E as n,D as r,F as d,d7 as o,db as c,bQ as u,N as m,aF as b,aG as y,H as g,K as p,G as k,bO as $,O as f,s as h,bH as w,J as C,ab as _,as as L,bI as x,Q as E,aN as A,T as D,bn as H,dw as N,R as F,cp as G,d8 as I,b$ as O,t as P}from"./calfSystem-Cs6CSxoU.js"
var Q=v('<div class="enhancements svelte-ktle3y"> </div>'),j=v('<div class="missing svelte-ktle3y">**Missing**</div>'),z=v('<div class="entity svelte-ktle3y"><div class="image tip-static svelte-ktle3y"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),J=v('<div class="data grid svelte-ktle3y"></div>'),K=v('<div class="no-mobs svelte-ktle3y">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),M=v('<div class="title svelte-ktle3y"><span class="bold svelte-ktle3y">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-ktle3y"><div><button class="sortable svelte-ktle3y" type="button">Entity</button></div> <div><button class="sortable svelte-ktle3y" type="button">Class</button></div> <div><button class="sortable svelte-ktle3y" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function R(e,v){t(v,!0)
let P=a(v,"visible",15,!0)
let R=s(i([])),S=1,T=""
const W=([e],[t])=>S*O(e,t),q=([,e],[,t])=>S*O(e,t),B=([,,e],[,,t])=>S*(e-t)
function U(e,t){S=T===t?S:1,C(R,p(R).slice().sort(e),!0),T=t,S*=-1}function V(){h("Creature Log","sort by entity"),U(W,"entity")}function X(){h("Creature Log","sort by class"),U(q,"class")}function Y(){h("Creature Log","sort by level"),U(B,"level")}async function Z(){const e=await w("fsh_monsterLog")
e&&(C(R,_(e).map(([e,t])=>[e,t.creature_class,t.level,t.attack,t.defense,t.armor,t.damage,t.hp,t.enhancements?_(t.enhancements):0,t.image_id]),!0),U(B,"level"))}async function ee(){h("Creature Log","clear storage")
await L("Are you sure you want to clear your log?")&&(C(R,[],!0),x("fsh_monsterLog",""))}{const t=e=>{var t=u("Creature Log")
m(e,t)}
l(e,{close:function(){h("Creature Log","close"),P(!1)},get visible(){return P()},title:t,children:(e,t)=>{var a=M(),s=n(a),i=r(d(s),2)
o(i,()=>({"--button-color":"white","--button-width":"2.8em"})),c(i.lastChild,{onclick:ee,children:(e,t)=>{var a=u("Clear")
m(e,a)}})
var l=r(s,2),v=d(l)
d(v).__click=V
var f=r(v,2)
d(f).__click=X
var h=r(f,2)
d(h).__click=Y
var w=r(l,2)
b(w,Z,null,e=>{var t=y(),a=n(t),s=e=>{var t=J()
k(t,21,()=>p(R),$,(e,t)=>{var a=G(()=>I(p(t),10))
let s=()=>p(a)[3],i=()=>p(a)[4],l=()=>p(a)[5],v=()=>p(a)[6],o=()=>p(a)[7],c=()=>p(a)[8],u=()=>p(a)[9]
var b=z(),f=n(b),h=d(f)
let w
var C=r(h,2),_=d(C),L=r(f,2),x=d(L),O=r(L,2),P=d(O),J=r(O,2),K=d(J),M=r(J,2),R=d(M),S=r(M,2),T=d(S),W=r(S,2),q=d(W),B=r(W,2),U=d(B),V=r(B,2),X=d(V),Y=e=>{var t=y(),a=n(t)
k(a,17,c,$,(e,t,a,s)=>{var i=G(()=>I(p(t),2))
var l=Q(),v=d(l)
E(()=>F(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`)),m(e,l)}),m(e,t)},Z=e=>{var t=j()
m(e,t)}
g(X,e=>{c()?e(Y):e(Z,!1)}),E(e=>{D(h,"data-tipped",`<img height=200 src='${H??""}creatures/${u()??""}.png' width=200>`),w=N(h,"",w,{"background-image":`url('${H??""}creatures/${u()??""}.png')`}),F(_,p(a)[0]),F(x,p(a)[1]),F(P,e),F(K,`${s().min??""} - ${s().max??""}`),F(R,`${i().min??""} - ${i().max??""}`),F(T,`${l().min??""} - ${l().max??""}`),F(q,`${v().min??""} - ${v().max??""}`),F(U,`${o().min??""} - ${o().max??""}`)},[()=>A(p(a)[2])]),m(e,b)}),m(e,t)},i=e=>{var t=K()
m(e,t)}
g(a,e=>{p(R).length?e(s):e(i,!1)}),m(e,t)}),m(e,a)},$$slots:{title:!0,default:!0}})}f()}e(["click"])
const S=i({visible:!0})
let T=0
function W(){T?S.visible=!0:T=P(R,{props:S,target:document.body})}export{W as default}
//# sourceMappingURL=mountCreatureLog.svelte-BJjDaJTw.js.map
