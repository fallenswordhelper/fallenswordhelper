import{aq as a,z as s,A as e,al as t,am as i,e5 as l,C as v,E as n,D as r,F as d,de as o,di as c,bC as u,N as m,aF as b,aG as k,H as g,K as p,G as f,bP as y,O as $,s as h,c0 as C,J as _,bI as w,ab as L,at as x,bJ as A,Q as E,bk as N,aN as D,T as P,dN as F,R as G,bB as H,df as I,u as J}from"./calfSystem-C1X5YxJZ.js"
function j(a,s,e){h("Creature Log","sort by entity"),s(e,"entity")}function q(a,s,e){h("Creature Log","sort by class"),s(e,"class")}function z(a,s,e){h("Creature Log","sort by level"),s(e,"level")}var B=v('<div class="enhancements svelte-69l0kk"> </div>'),K=v('<div class="missing svelte-69l0kk">**Missing**</div>'),M=v('<div class="entity svelte-69l0kk"><div class="image tip-static svelte-69l0kk"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),O=v('<div class="data grid svelte-69l0kk"></div>'),Q=v('<div class="no-mobs svelte-69l0kk">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),R=v('<div class="title svelte-69l0kk"><span class="bold svelte-69l0kk">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-69l0kk"><div><button class="sortable svelte-69l0kk" type="button">Entity</button></div> <div><button class="sortable svelte-69l0kk" type="button">Class</button></div> <div><button class="sortable svelte-69l0kk" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function S(a,v){s(v,!0)
let J=e(v,"visible",15,!0)
let S=t(i([])),T=1,U=""
const V=([a],[s])=>T*C(a,s),W=([,a],[,s])=>T*C(a,s),X=([,,a],[,,s])=>T*(a-s)
function Y(a,s){T=U===s?T:1,_(S,p(S).slice().sort(a),!0),U=s,T*=-1}async function Z(){const a=await w("fsh_monsterLog")
a&&(_(S,L(a).map((([a,s])=>[a,s.creature_class,s.level,s.attack,s.defense,s.armor,s.damage,s.hp,s.enhancements?L(s.enhancements):0,s.image_id])),!0),Y(X,"level"))}async function aa(){h("Creature Log","clear storage")
await x("Are you sure you want to clear your log?")&&(_(S,[],!0),A("fsh_monsterLog",""))}{const s=a=>{var s=u("Creature Log")
m(a,s)}
l(a,{close:function(){h("Creature Log","close"),J(!1)},get visible(){return J()},title:s,children:(a,s)=>{var e=R(),t=n(e),i=r(d(t),2)
o(i,(()=>({"--button-color":"white","--button-width":"2.8em"}))),c(i.lastChild,{onclick:aa,children:(a,s)=>{var e=u("Clear")
m(a,e)}})
var l=r(t,2),v=d(l)
d(v).__click=[j,Y,V]
var $=r(v,2)
d($).__click=[q,Y,W]
var h=r($,2)
d(h).__click=[z,Y,X]
var C=r(l,2)
b(C,Z,null,(a=>{var s=k(),e=n(s),t=a=>{var s=O()
f(s,21,(()=>p(S)),y,((a,s)=>{var e=H((()=>I(p(s),10)))
let t=()=>p(e)[3],i=()=>p(e)[4],l=()=>p(e)[5],v=()=>p(e)[6],o=()=>p(e)[7],c=()=>p(e)[8],u=()=>p(e)[9]
var b=M(),$=n(b),h=d($)
let C
var _=r(h,2),w=d(_),L=r($,2),x=d(L),A=r(L,2),J=d(A),j=r(A,2),q=d(j),z=r(j,2),O=d(z),Q=r(z,2),R=d(Q),S=r(Q,2),T=d(S),U=r(S,2),V=d(U),W=r(U,2),X=d(W),Y=a=>{var s=k(),e=n(s)
f(e,17,c,y,((a,s,e,t)=>{var i=H((()=>I(p(s),2)))
var l=B(),v=d(l)
E((()=>G(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`))),m(a,l)})),m(a,s)},Z=a=>{var s=K()
m(a,s)}
g(X,(a=>{c()?a(Y):a(Z,!1)})),E(((a,s)=>{P(h,"data-tipped",`<img height=200 src='${N??""}creatures/${u()??""}.png' width=200>`),C=F(h,"",C,a),G(w,p(e)[0]),G(x,p(e)[1]),G(J,s),G(q,`${t().min??""} - ${t().max??""}`),G(O,`${i().min??""} - ${i().max??""}`),G(R,`${l().min??""} - ${l().max??""}`),G(T,`${v().min??""} - ${v().max??""}`),G(V,`${o().min??""} - ${o().max??""}`)}),[()=>({"background-image":`url('${N??""}creatures/${u()??""}.png')`}),()=>D(p(e)[2])]),m(a,b)})),m(a,s)},i=a=>{var s=Q()
m(a,s)}
g(e,(a=>{p(S).length?a(t):a(i,!1)})),m(a,s)})),m(a,e)},$$slots:{title:!0,default:!0}})}$()}a(["click"])
const T=i({visible:!0})
let U=0
function V(){U?T.visible=!0:U=J(S,{props:T,target:document.body})}export{V as default}
//# sourceMappingURL=mountCreatureLog.svelte-FRrjCy9h.js.map
