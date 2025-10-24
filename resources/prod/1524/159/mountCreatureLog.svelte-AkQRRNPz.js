import{ap as a,y as e,z as t,ak as s,al as i,dW as l,C as v,E as n,D as r,F as d,d7 as o,da as c,bE as u,N as m,aF as b,aG as y,H as g,K as p,G as k,bR as f,O as $,s as h,c1 as C,J as L,bK as _,ab as w,as as x,bL as E,Q as D,bm as A,aN as N,T as F,dx as G,R as H,bD as K,d8 as P,t as R}from"./calfSystem-CIdPz3EO.js"
function j(a,e,t){h("Creature Log","sort by entity"),e(t,"entity")}function z(a,e,t){h("Creature Log","sort by class"),e(t,"class")}function I(a,e,t){h("Creature Log","sort by level"),e(t,"level")}var J=v('<div class="enhancements svelte-ktle3y"> </div>'),M=v('<div class="missing svelte-ktle3y">**Missing**</div>'),O=v('<div class="entity svelte-ktle3y"><div class="image tip-static svelte-ktle3y"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),Q=v('<div class="data grid svelte-ktle3y"></div>'),S=v('<div class="no-mobs svelte-ktle3y">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),T=v('<div class="title svelte-ktle3y"><span class="bold svelte-ktle3y">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-ktle3y"><div><button class="sortable svelte-ktle3y" type="button">Entity</button></div> <div><button class="sortable svelte-ktle3y" type="button">Class</button></div> <div><button class="sortable svelte-ktle3y" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function W(a,v){e(v,!0)
let R=t(v,"visible",15,!0)
let W=s(i([])),q=1,B=""
const U=([a],[e])=>q*C(a,e),V=([,a],[,e])=>q*C(a,e),X=([,,a],[,,e])=>q*(a-e)
function Y(a,e){q=B===e?q:1,L(W,p(W).slice().sort(a),!0),B=e,q*=-1}async function Z(){const a=await _("fsh_monsterLog")
a&&(L(W,w(a).map(([a,e])=>[a,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?w(e.enhancements):0,e.image_id]),!0),Y(X,"level"))}async function aa(){h("Creature Log","clear storage")
await x("Are you sure you want to clear your log?")&&(L(W,[],!0),E("fsh_monsterLog",""))}{const e=a=>{var e=u("Creature Log")
m(a,e)}
l(a,{close:function(){h("Creature Log","close"),R(!1)},get visible(){return R()},title:e,children:(a,e)=>{var t=T(),s=n(t),i=r(d(s),2)
o(i,()=>({"--button-color":"white","--button-width":"2.8em"})),c(i.lastChild,{onclick:aa,children:(a,e)=>{var t=u("Clear")
m(a,t)}})
var l=r(s,2),v=d(l)
d(v).__click=[j,Y,U]
var $=r(v,2)
d($).__click=[z,Y,V]
var h=r($,2)
d(h).__click=[I,Y,X]
var C=r(l,2)
b(C,Z,null,a=>{var e=y(),t=n(e),s=a=>{var e=Q()
k(e,21,()=>p(W),f,(a,e)=>{var t=K(()=>P(p(e),10))
let s=()=>p(t)[3],i=()=>p(t)[4],l=()=>p(t)[5],v=()=>p(t)[6],o=()=>p(t)[7],c=()=>p(t)[8],u=()=>p(t)[9]
var b=O(),$=n(b),h=d($)
let C
var L=r(h,2),_=d(L),w=r($,2),x=d(w),E=r(w,2),R=d(E),j=r(E,2),z=d(j),I=r(j,2),Q=d(I),S=r(I,2),T=d(S),W=r(S,2),q=d(W),B=r(W,2),U=d(B),V=r(B,2),X=d(V),Y=a=>{var e=y(),t=n(e)
k(t,17,c,f,(a,e,t,s)=>{var i=K(()=>P(p(e),2))
var l=J(),v=d(l)
D(()=>H(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`)),m(a,l)}),m(a,e)},Z=a=>{var e=M()
m(a,e)}
g(X,a=>{c()?a(Y):a(Z,!1)}),D((a,e)=>{F(h,"data-tipped",`<img height=200 src='${A??""}creatures/${u()??""}.png' width=200>`),C=G(h,"",C,a),H(_,p(t)[0]),H(x,p(t)[1]),H(R,e),H(z,`${s().min??""} - ${s().max??""}`),H(Q,`${i().min??""} - ${i().max??""}`),H(T,`${l().min??""} - ${l().max??""}`),H(q,`${v().min??""} - ${v().max??""}`),H(U,`${o().min??""} - ${o().max??""}`)},[()=>({"background-image":`url('${A??""}creatures/${u()??""}.png')`}),()=>N(p(t)[2])]),m(a,b)}),m(a,e)},i=a=>{var e=S()
m(a,e)}
g(t,a=>{p(W).length?a(s):a(i,!1)}),m(a,e)}),m(a,t)},$$slots:{title:!0,default:!0}})}$()}a(["click"])
const q=i({visible:!0})
let B=0
function U(){B?q.visible=!0:B=R(W,{props:q,target:document.body})}export{U as default}
//# sourceMappingURL=mountCreatureLog.svelte-AkQRRNPz.js.map
