import{ao as a,x as e,y as t,aj as s,ak as i,dR as l,B as v,D as n,C as r,E as d,d7 as o,dL as c,bC as u,L as m,aE as b,aF as y,G as g,J as k,F as p,bP as f,N as $,s as h,c0 as C,I as L,bI as w,aa as _,ar as x,bJ as E,P,bk as A,aM as D,S as I,dw as j,Q as B,bB as F,d8 as J,n as M}from"./calfSystem-CIuUjh4H.js"
function N(a,e,t){h("Creature Log","sort by entity"),e(t,"entity")}function S(a,e,t){h("Creature Log","sort by class"),e(t,"class")}function G(a,e,t){h("Creature Log","sort by level"),e(t,"level")}var H=v('<div class="enhancements svelte-ktle3y"> </div>'),Q=v('<div class="missing svelte-ktle3y">**Missing**</div>'),R=v('<div class="entity svelte-ktle3y"><div class="image tip-static svelte-ktle3y"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),q=v('<div class="data grid svelte-ktle3y"></div>'),z=v('<div class="no-mobs svelte-ktle3y">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),K=v('<div class="title svelte-ktle3y"><span class="bold svelte-ktle3y">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-ktle3y"><div><button class="sortable svelte-ktle3y" type="button">Entity</button></div> <div><button class="sortable svelte-ktle3y" type="button">Class</button></div> <div><button class="sortable svelte-ktle3y" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function O(a,v){e(v,!0)
let M=t(v,"visible",15,!0)
let O=s(i([])),T=1,U=""
const V=([a],[e])=>T*C(a,e),W=([,a],[,e])=>T*C(a,e),X=([,,a],[,,e])=>T*(a-e)
function Y(a,e){T=U===e?T:1,L(O,k(O).slice().sort(a),!0),U=e,T*=-1}async function Z(){const a=await w("fsh_monsterLog")
a&&(L(O,_(a).map(([a,e])=>[a,e.creature_class,e.level,e.attack,e.defense,e.armor,e.damage,e.hp,e.enhancements?_(e.enhancements):0,e.image_id]),!0),Y(X,"level"))}async function aa(){h("Creature Log","clear storage")
await x("Are you sure you want to clear your log?")&&(L(O,[],!0),E("fsh_monsterLog",""))}{const e=a=>{var e=u("Creature Log")
m(a,e)}
l(a,{close:function(){h("Creature Log","close"),M(!1)},get visible(){return M()},title:e,children:(a,e)=>{var t=K(),s=n(t),i=r(d(s),2)
o(i,()=>({"--button-color":"white","--button-width":"2.8em"})),c(i.lastChild,{onclick:aa,children:(a,e)=>{var t=u("Clear")
m(a,t)}})
var l=r(s,2),v=d(l)
d(v).__click=[N,Y,V]
var $=r(v,2)
d($).__click=[S,Y,W]
var h=r($,2)
d(h).__click=[G,Y,X]
var C=r(l,2)
b(C,Z,null,a=>{var e=y(),t=n(e),s=a=>{var e=q()
p(e,21,()=>k(O),f,(a,e)=>{var t=F(()=>J(k(e),10))
let s=()=>k(t)[3],i=()=>k(t)[4],l=()=>k(t)[5],v=()=>k(t)[6],o=()=>k(t)[7],c=()=>k(t)[8],u=()=>k(t)[9]
var b=R(),$=n(b),h=d($)
let C
var L=r(h,2),w=d(L),_=r($,2),x=d(_),E=r(_,2),M=d(E),N=r(E,2),S=d(N),G=r(N,2),q=d(G),z=r(G,2),K=d(z),O=r(z,2),T=d(O),U=r(O,2),V=d(U),W=r(U,2),X=d(W),Y=a=>{var e=y(),t=n(e)
p(t,17,c,f,(a,e,t,s)=>{var i=F(()=>J(k(e),2))
var l=H(),v=d(l)
P(()=>B(v,`${k(i)[0]??""}: ${k(i)[1].min??""} - ${k(i)[1].max??""}`)),m(a,l)}),m(a,e)},Z=a=>{var e=Q()
m(a,e)}
g(X,a=>{c()?a(Y):a(Z,!1)}),P((a,e)=>{I(h,"data-tipped",`<img height=200 src='${A??""}creatures/${u()??""}.png' width=200>`),C=j(h,"",C,a),B(w,k(t)[0]),B(x,k(t)[1]),B(M,e),B(S,`${s().min??""} - ${s().max??""}`),B(q,`${i().min??""} - ${i().max??""}`),B(K,`${l().min??""} - ${l().max??""}`),B(T,`${v().min??""} - ${v().max??""}`),B(V,`${o().min??""} - ${o().max??""}`)},[()=>({"background-image":`url('${A??""}creatures/${u()??""}.png')`}),()=>D(k(t)[2])]),m(a,b)}),m(a,e)},i=a=>{var e=z()
m(a,e)}
g(t,a=>{k(O).length?a(s):a(i,!1)}),m(a,e)}),m(a,t)},$$slots:{title:!0,default:!0}})}$()}a(["click"])
const T=i({visible:!0})
let U=0
function V(){U?T.visible=!0:U=M(O,{props:T,target:document.body})}export{V as default}
//# sourceMappingURL=mountCreatureLog.svelte-B4lNuwv2.js.map
