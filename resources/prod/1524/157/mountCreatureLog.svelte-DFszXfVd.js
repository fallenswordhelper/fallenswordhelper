import{ap as a,x as s,y as e,ak as t,al as i,dY as l,B as v,D as n,C as r,E as d,d8 as o,dS as c,bD as u,L as m,aF as b,aG as k,G as g,J as p,F as y,bQ as f,N as $,s as h,c1 as C,I as L,bJ as _,aa as w,as as x,bK as D,P as E,bl as A,aN as N,S as P,dD as S,Q as F,bC as G,d9 as I,n as J}from"./calfSystem-CQOGdqPv.js"
function Q(a,s,e){h("Creature Log","sort by entity"),s(e,"entity")}function j(a,s,e){h("Creature Log","sort by class"),s(e,"class")}function B(a,s,e){h("Creature Log","sort by level"),s(e,"level")}var H=v('<div class="enhancements svelte-69l0kk"> </div>'),K=v('<div class="missing svelte-69l0kk">**Missing**</div>'),M=v('<div class="entity svelte-69l0kk"><div class="image tip-static svelte-69l0kk"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),Y=v('<div class="data grid svelte-69l0kk"></div>'),q=v('<div class="no-mobs svelte-69l0kk">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),z=v('<div class="title svelte-69l0kk"><span class="bold svelte-69l0kk">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-69l0kk"><div><button class="sortable svelte-69l0kk" type="button">Entity</button></div> <div><button class="sortable svelte-69l0kk" type="button">Class</button></div> <div><button class="sortable svelte-69l0kk" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function O(a,v){s(v,!0)
let J=e(v,"visible",15,!0)
let O=t(i([])),R=1,T=""
const U=([a],[s])=>R*C(a,s),V=([,a],[,s])=>R*C(a,s),W=([,,a],[,,s])=>R*(a-s)
function X(a,s){R=T===s?R:1,L(O,p(O).slice().sort(a),!0),T=s,R*=-1}async function Z(){const a=await _("fsh_monsterLog")
a&&(L(O,w(a).map(([a,s])=>[a,s.creature_class,s.level,s.attack,s.defense,s.armor,s.damage,s.hp,s.enhancements?w(s.enhancements):0,s.image_id]),!0),X(W,"level"))}async function aa(){h("Creature Log","clear storage")
await x("Are you sure you want to clear your log?")&&(L(O,[],!0),D("fsh_monsterLog",""))}{const s=a=>{var s=u("Creature Log")
m(a,s)}
l(a,{close:function(){h("Creature Log","close"),J(!1)},get visible(){return J()},title:s,children:(a,s)=>{var e=z(),t=n(e),i=r(d(t),2)
o(i,()=>({"--button-color":"white","--button-width":"2.8em"})),c(i.lastChild,{onclick:aa,children:(a,s)=>{var e=u("Clear")
m(a,e)}})
var l=r(t,2),v=d(l)
d(v).__click=[Q,X,U]
var $=r(v,2)
d($).__click=[j,X,V]
var h=r($,2)
d(h).__click=[B,X,W]
var C=r(l,2)
b(C,Z,null,a=>{var s=k(),e=n(s),t=a=>{var s=Y()
y(s,21,()=>p(O),f,(a,s)=>{var e=G(()=>I(p(s),10))
let t=()=>p(e)[3],i=()=>p(e)[4],l=()=>p(e)[5],v=()=>p(e)[6],o=()=>p(e)[7],c=()=>p(e)[8],u=()=>p(e)[9]
var b=M(),$=n(b),h=d($)
let C
var L=r(h,2),_=d(L),w=r($,2),x=d(w),D=r(w,2),J=d(D),Q=r(D,2),j=d(Q),B=r(Q,2),Y=d(B),q=r(B,2),z=d(q),O=r(q,2),R=d(O),T=r(O,2),U=d(T),V=r(T,2),W=d(V),X=a=>{var s=k(),e=n(s)
y(e,17,c,f,(a,s,e,t)=>{var i=G(()=>I(p(s),2))
var l=H(),v=d(l)
E(()=>F(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`)),m(a,l)}),m(a,s)},Z=a=>{var s=K()
m(a,s)}
g(W,a=>{c()?a(X):a(Z,!1)}),E((a,s)=>{P(h,"data-tipped",`<img height=200 src='${A??""}creatures/${u()??""}.png' width=200>`),C=S(h,"",C,a),F(_,p(e)[0]),F(x,p(e)[1]),F(J,s),F(j,`${t().min??""} - ${t().max??""}`),F(Y,`${i().min??""} - ${i().max??""}`),F(z,`${l().min??""} - ${l().max??""}`),F(R,`${v().min??""} - ${v().max??""}`),F(U,`${o().min??""} - ${o().max??""}`)},[()=>({"background-image":`url('${A??""}creatures/${u()??""}.png')`}),()=>N(p(e)[2])]),m(a,b)}),m(a,s)},i=a=>{var s=q()
m(a,s)}
g(e,a=>{p(O).length?a(t):a(i,!1)}),m(a,s)}),m(a,e)},$$slots:{title:!0,default:!0}})}$()}a(["click"])
const R=i({visible:!0})
let T=0
function U(){T?R.visible=!0:T=J(O,{props:R,target:document.body})}export{U as default}
//# sourceMappingURL=mountCreatureLog.svelte-DFszXfVd.js.map
