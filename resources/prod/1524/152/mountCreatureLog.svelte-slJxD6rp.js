import{aq as a,z as s,A as e,al as t,am as i,e4 as l,C as v,E as n,D as r,F as d,dc as o,dg as c,bz as u,N as m,aF as b,aG as k,H as g,K as p,G as y,bM as f,O as h,s as $,bZ as C,J as L,bF as _,ab as w,at as x,bG as A,Q as E,bh as D,aN as F,T as G,dL as N,R as z,by as H,dd as M,u as P}from"./calfSystem-BlPuMQGT.js"
function j(a,s,e){$("Creature Log","sort by entity"),s(e,"entity")}function q(a,s,e){$("Creature Log","sort by class"),s(e,"class")}function I(a,s,e){$("Creature Log","sort by level"),s(e,"level")}var J=v('<div class="enhancements svelte-69l0kk"> </div>'),K=v('<div class="missing svelte-69l0kk">**Missing**</div>'),O=v('<div class="entity svelte-69l0kk"><div class="image tip-static svelte-69l0kk"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),Q=v('<div class="data grid svelte-69l0kk"></div>'),R=v('<div class="no-mobs svelte-69l0kk">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),S=v('<div class="title svelte-69l0kk"><span class="bold svelte-69l0kk">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-69l0kk"><div><button class="sortable svelte-69l0kk" type="button">Entity</button></div> <div><button class="sortable svelte-69l0kk" type="button">Class</button></div> <div><button class="sortable svelte-69l0kk" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function T(a,v){s(v,!0)
let P=e(v,"visible",15,!0)
let T=t(i([])),Z=1,B=""
const U=([a],[s])=>Z*C(a,s),V=([,a],[,s])=>Z*C(a,s),W=([,,a],[,,s])=>Z*(a-s)
function X(a,s){Z=B===s?Z:1,L(T,p(T).slice().sort(a),!0),B=s,Z*=-1}async function Y(){const a=await _("fsh_monsterLog")
a&&(L(T,w(a).map((([a,s])=>[a,s.creature_class,s.level,s.attack,s.defense,s.armor,s.damage,s.hp,s.enhancements?w(s.enhancements):0,s.image_id])),!0),X(W,"level"))}async function aa(){$("Creature Log","clear storage")
await x("Are you sure you want to clear your log?")&&(L(T,[],!0),A("fsh_monsterLog",""))}{const s=a=>{var s=u("Creature Log")
m(a,s)}
l(a,{close:function(){$("Creature Log","close"),P(!1)},get visible(){return P()},title:s,children:(a,s)=>{var e=S(),t=n(e),i=r(d(t),2)
o(i,(()=>({"--button-color":"white","--button-width":"2.8em"}))),c(i.lastChild,{onclick:aa,children:(a,s)=>{var e=u("Clear")
m(a,e)}})
var l=r(t,2),v=d(l)
d(v).__click=[j,X,U]
var h=r(v,2)
d(h).__click=[q,X,V]
var $=r(h,2)
d($).__click=[I,X,W]
var C=r(l,2)
b(C,Y,null,(a=>{var s=k(),e=n(s),t=a=>{var s=Q()
y(s,21,(()=>p(T)),f,((a,s)=>{var e=H((()=>M(p(s),10)))
let t=()=>p(e)[3],i=()=>p(e)[4],l=()=>p(e)[5],v=()=>p(e)[6],o=()=>p(e)[7],c=()=>p(e)[8],u=()=>p(e)[9]
var b=O(),h=n(b),$=d(h)
let C
var L=r($,2),_=d(L),w=r(h,2),x=d(w),A=r(w,2),P=d(A),j=r(A,2),q=d(j),I=r(j,2),Q=d(I),R=r(I,2),S=d(R),T=r(R,2),Z=d(T),B=r(T,2),U=d(B),V=r(B,2),W=d(V),X=a=>{var s=k(),e=n(s)
y(e,17,c,f,((a,s,e,t)=>{var i=H((()=>M(p(s),2)))
var l=J(),v=d(l)
E((()=>z(v,`${p(i)[0]??""}: ${p(i)[1].min??""} - ${p(i)[1].max??""}`))),m(a,l)})),m(a,s)},Y=a=>{var s=K()
m(a,s)}
g(W,(a=>{c()?a(X):a(Y,!1)})),E(((a,s)=>{G($,"data-tipped",`<img height=200 src='${D??""}creatures/${u()??""}.png' width=200>`),C=N($,"",C,a),z(_,p(e)[0]),z(x,p(e)[1]),z(P,s),z(q,`${t().min??""} - ${t().max??""}`),z(Q,`${i().min??""} - ${i().max??""}`),z(S,`${l().min??""} - ${l().max??""}`),z(Z,`${v().min??""} - ${v().max??""}`),z(U,`${o().min??""} - ${o().max??""}`)}),[()=>({"background-image":`url('${D??""}creatures/${u()??""}.png')`}),()=>F(p(e)[2])]),m(a,b)})),m(a,s)},i=a=>{var s=R()
m(a,s)}
g(e,(a=>{p(T).length?a(t):a(i,!1)})),m(a,s)})),m(a,e)},$$slots:{title:!0,default:!0}})}h()}a(["click"])
const Z=i({visible:!0})
let B=0
function U(){B?Z.visible=!0:B=P(T,{props:Z,target:document.body})}export{U as default}
//# sourceMappingURL=mountCreatureLog.svelte-slJxD6rp.js.map
