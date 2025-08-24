import{ap as a,x as s,y as e,ak as t,al as i,dX as l,B as v,D as n,C as r,E as d,d3 as o,dR as c,bB as u,L as m,aE as b,aF as k,G as g,J as p,F as y,bO as $,N as f,s as h,b$ as C,I as L,bH as _,aa as w,as as x,bI as E,P as A,bj as B,aM as D,S as I,dB as P,Q as j,bA as F,d5 as H,n as M}from"./calfSystem-79LsojAC.js"
function N(a,s,e){h("Creature Log","sort by entity"),s(e,"entity")}function S(a,s,e){h("Creature Log","sort by class"),s(e,"class")}function G(a,s,e){h("Creature Log","sort by level"),s(e,"level")}var J=v('<div class="enhancements svelte-69l0kk"> </div>'),O=v('<div class="missing svelte-69l0kk">**Missing**</div>'),Q=v('<div class="entity svelte-69l0kk"><div class="image tip-static svelte-69l0kk"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),R=v('<div class="data grid svelte-69l0kk"></div>'),X=v('<div class="no-mobs svelte-69l0kk">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),q=v('<div class="title svelte-69l0kk"><span class="bold svelte-69l0kk">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-69l0kk"><div><button class="sortable svelte-69l0kk" type="button">Entity</button></div> <div><button class="sortable svelte-69l0kk" type="button">Class</button></div> <div><button class="sortable svelte-69l0kk" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function z(a,v){s(v,!0)
let M=e(v,"visible",15,!0)
let z=t(i([])),K=1,T=""
const U=([a],[s])=>K*C(a,s),V=([,a],[,s])=>K*C(a,s),W=([,,a],[,,s])=>K*(a-s)
function Y(a,s){K=T===s?K:1,L(z,p(z).slice().sort(a),!0),T=s,K*=-1}async function Z(){const a=await _("fsh_monsterLog")
a&&(L(z,w(a).map(([a,s])=>[a,s.creature_class,s.level,s.attack,s.defense,s.armor,s.damage,s.hp,s.enhancements?w(s.enhancements):0,s.image_id]),!0),Y(W,"level"))}async function aa(){h("Creature Log","clear storage")
await x("Are you sure you want to clear your log?")&&(L(z,[],!0),E("fsh_monsterLog",""))}{const s=a=>{var s=u("Creature Log")
m(a,s)}
l(a,{close:function(){h("Creature Log","close"),M(!1)},get visible(){return M()},title:s,children:(a,s)=>{var e=q(),t=n(e),i=r(d(t),2)
o(i,()=>({"--button-color":"white","--button-width":"2.8em"})),c(i.lastChild,{onclick:aa,children:(a,s)=>{var e=u("Clear")
m(a,e)}})
var l=r(t,2),v=d(l)
d(v).__click=[N,Y,U]
var f=r(v,2)
d(f).__click=[S,Y,V]
var h=r(f,2)
d(h).__click=[G,Y,W]
var C=r(l,2)
b(C,Z,null,a=>{var s=k(),e=n(s),t=a=>{var s=R()
y(s,21,()=>p(z),$,(a,s)=>{var e=F(()=>H(p(s),10))
let t=()=>p(e)[3],i=()=>p(e)[4],l=()=>p(e)[5],v=()=>p(e)[6],o=()=>p(e)[7],c=()=>p(e)[8],u=()=>p(e)[9]
var b=Q(),f=n(b),h=d(f)
let C
var L=r(h,2),_=d(L),w=r(f,2),x=d(w),E=r(w,2),M=d(E),N=r(E,2),S=d(N),G=r(N,2),R=d(G),X=r(G,2),q=d(X),z=r(X,2),K=d(z),T=r(z,2),U=d(T),V=r(T,2),W=d(V),Y=a=>{var s=k(),e=n(s)
y(e,17,c,$,(a,s,e,t)=>{var i=F(()=>H(p(s),2))
var l=J(),v=d(l)
A(()=>j(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`)),m(a,l)}),m(a,s)},Z=a=>{var s=O()
m(a,s)}
g(W,a=>{c()?a(Y):a(Z,!1)}),A((a,s)=>{I(h,"data-tipped",`<img height=200 src='${B??""}creatures/${u()??""}.png' width=200>`),C=P(h,"",C,a),j(_,p(e)[0]),j(x,p(e)[1]),j(M,s),j(S,`${t().min??""} - ${t().max??""}`),j(R,`${i().min??""} - ${i().max??""}`),j(q,`${l().min??""} - ${l().max??""}`),j(K,`${v().min??""} - ${v().max??""}`),j(U,`${o().min??""} - ${o().max??""}`)},[()=>({"background-image":`url('${B??""}creatures/${u()??""}.png')`}),()=>D(p(e)[2])]),m(a,b)}),m(a,s)},i=a=>{var s=X()
m(a,s)}
g(e,a=>{p(z).length?a(t):a(i,!1)}),m(a,s)}),m(a,e)},$$slots:{title:!0,default:!0}})}f()}a(["click"])
const K=i({visible:!0})
let T=0
function U(){T?K.visible=!0:T=M(z,{props:K,target:document.body})}export{U as default}
//# sourceMappingURL=mountCreatureLog.svelte-oPzig-pB.js.map
