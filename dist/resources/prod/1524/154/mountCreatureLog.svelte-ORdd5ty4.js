import{ao as a,x as s,y as e,aj as t,ak as i,e0 as l,A as v,C as n,B as r,D as d,d9 as o,de as c,bA as u,K as m,aD as b,aE as k,F as g,I as p,E as y,bN as f,L as $,s as h,b_ as L,H as _,bG as C,a9 as w,ar as x,bH as A,O as E,bi as D,aL as H,R as I,dI as P,P as j,bz as N,db as z,n as B}from"./calfSystem-KFszEm2S.js"
function F(a,s,e){h("Creature Log","sort by entity"),s(e,"entity")}function G(a,s,e){h("Creature Log","sort by class"),s(e,"class")}function K(a,s,e){h("Creature Log","sort by level"),s(e,"level")}var M=v('<div class="enhancements svelte-69l0kk"> </div>'),O=v('<div class="missing svelte-69l0kk">**Missing**</div>'),R=v('<div class="entity svelte-69l0kk"><div class="image tip-static svelte-69l0kk"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),S=v('<div class="data grid svelte-69l0kk"></div>'),q=v('<div class="no-mobs svelte-69l0kk">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),J=v('<div class="title svelte-69l0kk"><span class="bold svelte-69l0kk">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-69l0kk"><div><button class="sortable svelte-69l0kk" type="button">Entity</button></div> <div><button class="sortable svelte-69l0kk" type="button">Class</button></div> <div><button class="sortable svelte-69l0kk" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function Q(a,v){s(v,!0)
let B=e(v,"visible",15,!0)
let Q=t(i([])),T=1,U=""
const V=([a],[s])=>T*L(a,s),W=([,a],[,s])=>T*L(a,s),X=([,,a],[,,s])=>T*(a-s)
function Y(a,s){T=U===s?T:1,_(Q,p(Q).slice().sort(a),!0),U=s,T*=-1}async function Z(){const a=await C("fsh_monsterLog")
a&&(_(Q,w(a).map(([a,s])=>[a,s.creature_class,s.level,s.attack,s.defense,s.armor,s.damage,s.hp,s.enhancements?w(s.enhancements):0,s.image_id]),!0),Y(X,"level"))}async function aa(){h("Creature Log","clear storage")
await x("Are you sure you want to clear your log?")&&(_(Q,[],!0),A("fsh_monsterLog",""))}{const s=a=>{var s=u("Creature Log")
m(a,s)}
l(a,{close:function(){h("Creature Log","close"),B(!1)},get visible(){return B()},title:s,children:(a,s)=>{var e=J(),t=n(e),i=r(d(t),2)
o(i,()=>({"--button-color":"white","--button-width":"2.8em"})),c(i.lastChild,{onclick:aa,children:(a,s)=>{var e=u("Clear")
m(a,e)}})
var l=r(t,2),v=d(l)
d(v).__click=[F,Y,V]
var $=r(v,2)
d($).__click=[G,Y,W]
var h=r($,2)
d(h).__click=[K,Y,X]
var L=r(l,2)
b(L,Z,null,a=>{var s=k(),e=n(s),t=a=>{var s=S()
y(s,21,()=>p(Q),f,(a,s)=>{var e=N(()=>z(p(s),10))
let t=()=>p(e)[3],i=()=>p(e)[4],l=()=>p(e)[5],v=()=>p(e)[6],o=()=>p(e)[7],c=()=>p(e)[8],u=()=>p(e)[9]
var b=R(),$=n(b),h=d($)
let L
var _=r(h,2),C=d(_),w=r($,2),x=d(w),A=r(w,2),B=d(A),F=r(A,2),G=d(F),K=r(F,2),S=d(K),q=r(K,2),J=d(q),Q=r(q,2),T=d(Q),U=r(Q,2),V=d(U),W=r(U,2),X=d(W),Y=a=>{var s=k(),e=n(s)
y(e,17,c,f,(a,s,e,t)=>{var i=N(()=>z(p(s),2))
var l=M(),v=d(l)
E(()=>j(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`)),m(a,l)}),m(a,s)},Z=a=>{var s=O()
m(a,s)}
g(X,a=>{c()?a(Y):a(Z,!1)}),E((a,s)=>{I(h,"data-tipped",`<img height=200 src='${D??""}creatures/${u()??""}.png' width=200>`),L=P(h,"",L,a),j(C,p(e)[0]),j(x,p(e)[1]),j(B,s),j(G,`${t().min??""} - ${t().max??""}`),j(S,`${i().min??""} - ${i().max??""}`),j(J,`${l().min??""} - ${l().max??""}`),j(T,`${v().min??""} - ${v().max??""}`),j(V,`${o().min??""} - ${o().max??""}`)},[()=>({"background-image":`url('${D??""}creatures/${u()??""}.png')`}),()=>H(p(e)[2])]),m(a,b)}),m(a,s)},i=a=>{var s=q()
m(a,s)}
g(e,a=>{p(Q).length?a(t):a(i,!1)}),m(a,s)}),m(a,e)},$$slots:{title:!0,default:!0}})}$()}a(["click"])
const T=i({visible:!0})
let U=0
function V(){U?T.visible=!0:U=B(Q,{props:T,target:document.body})}export{V as default}
//# sourceMappingURL=mountCreatureLog.svelte-ORdd5ty4.js.map
