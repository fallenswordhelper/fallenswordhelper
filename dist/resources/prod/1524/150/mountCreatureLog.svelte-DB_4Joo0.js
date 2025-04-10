import{a6 as a,R as s,bE as e,S as t,T as i,dZ as l,X as v,au as n,Y as r,Z as d,d7 as o,da as c,bq as u,a3 as m,as as b,at as k,a0 as g,V as p,_ as y,a4 as f,s as $,bS as h,W as _,bx as w,H as C,ae as L,by as x,a7 as E,aB as A,br as H,b8 as S,dF as D,a8 as P,bH as Z,ad as j}from"./calfSystem-BGOTz8de.js"
function q(a,s,e){$("Creature Log","sort by entity"),s(e,"entity")}function B(a,s,e){$("Creature Log","sort by class"),s(e,"class")}function F(a,s,e){$("Creature Log","sort by level"),s(e,"level")}var I=v('<div class="enhancements svelte-69l0kk"> </div>'),M=v('<div class="missing svelte-69l0kk">**Missing**</div>'),N=v('<div class="entity svelte-69l0kk"><div class="image tip-static svelte-69l0kk"></div> <div> </div></div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div><!></div>',1),R=v('<div class="data grid svelte-69l0kk"></div>'),T=v('<div class="no-mobs svelte-69l0kk">No monster information! Please enable creature log and travel a bit to\n        see the world</div>'),V=v('<div class="title svelte-69l0kk"><span class="bold svelte-69l0kk">Entity Information</span> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div> <div class="grid headings svelte-69l0kk"><div><button class="sortable svelte-69l0kk" type="button">Entity</button></div> <div><button class="sortable svelte-69l0kk" type="button">Class</button></div> <div><button class="sortable svelte-69l0kk" type="button">Lvl</button></div> <div>Attack</div> <div>Defense</div> <div>Armor</div> <div>Damage</div> <div>HP</div> <div>Enhancements</div></div> <!>',1)
function W(a,v){s(v,!0)
let j=e(v,"visible",15,!0)
let W=t(i([])),X=1,Y=""
const z=([a],[s])=>X*h(a,s),G=([,a],[,s])=>X*h(a,s),J=([,,a],[,,s])=>X*(a-s)
function K(a,s){X=Y===s?X:1,_(W,p(W).slice().sort(a),!0),Y=s,X*=-1}async function O(){const a=await w("fsh_monsterLog")
a&&(_(W,C(a).map((([a,s])=>[a,s.creature_class,s.level,s.attack,s.defense,s.armor,s.damage,s.hp,s.enhancements?C(s.enhancements):0,s.image_id])),!0),K(J,"level"))}async function Q(){$("Creature Log","clear storage")
await L("Are you sure you want to clear your log?")&&(_(W,[],!0),x("fsh_monsterLog",""))}{const s=a=>{var s=u("Creature Log")
m(a,s)}
l(a,{close:function(){$("Creature Log","close"),j(!1)},get visible(){return j()},title:s,children:(a,s)=>{var e=V(),t=n(e),i=r(d(t),2)
o(i,(()=>({"--button-color":"white","--button-width":"2.8em"}))),c(i.lastChild,{onclick:Q,children:(a,s)=>{var e=u("Clear")
m(a,e)}})
var l=r(t,2),v=d(l)
d(v).__click=[q,K,z]
var f=r(v,2)
d(f).__click=[B,K,G]
var $=r(f,2)
d($).__click=[F,K,J]
var h=r(l,2)
b(h,O,null,(a=>{var s=k(),e=n(s),t=a=>{var s=R()
y(s,21,(()=>p(W)),Z,((a,s)=>{let e=()=>p(s)[3],t=()=>p(s)[4],i=()=>p(s)[5],l=()=>p(s)[6],v=()=>p(s)[7],o=()=>p(s)[8],c=()=>p(s)[9]
var u=N(),b=n(u),f=d(b)
let $
var h=r(f,2),_=d(h),w=r(b,2),C=d(w),L=r(w,2),x=d(L),j=r(L,2),q=d(j),B=r(j,2),F=d(B),R=r(B,2),T=d(R),V=r(R,2),W=d(V),X=r(V,2),Y=d(X),z=r(X,2),G=d(z),J=a=>{var s=k(),e=n(s)
y(e,17,o,Z,((a,s,e,t)=>{var i=I(),l=d(i)
E((()=>P(l,`${p(s)[0]??""}: ${p(s)[1].min??""} - ${p(s)[1].max??""}`))),m(a,i)})),m(a,s)},K=a=>{var s=M()
m(a,s)}
g(G,(a=>{o()?a(J):a(K,!1)})),E((a=>{H(f,"data-tipped",`<img height=200 src='${S??""}creatures/${c()??""}.png' width=200>`),$=D(f,"",$,{"background-image":`url('${S??""}creatures/${c()??""}.png')`}),P(_,p(s)[0]),P(C,p(s)[1]),P(x,a),P(q,`${e().min??""} - ${e().max??""}`),P(F,`${t().min??""} - ${t().max??""}`),P(T,`${i().min??""} - ${i().max??""}`),P(W,`${l().min??""} - ${l().max??""}`),P(Y,`${v().min??""} - ${v().max??""}`)}),[()=>A(p(s)[2])]),m(a,u)})),m(a,s)},i=a=>{var s=T()
m(a,s)}
g(e,(a=>{p(W).length?a(t):a(i,!1)})),m(a,s)})),m(a,e)},$$slots:{title:!0,default:!0}})}f()}a(["click"])
const X=i({visible:!0})
let Y=0
function z(){Y?X.visible=!0:Y=j(W,{props:X,target:document.body})}export{z as default}
//# sourceMappingURL=mountCreatureLog.svelte-DB_4Joo0.js.map
