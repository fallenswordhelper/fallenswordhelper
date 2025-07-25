import{A as e,C as a,D as s,F as t,H as r,Q as i,N as l,R as n,T as v,bk as o,bC as m,aq as c,z as d,J as u,al as g,K as p,E as f,G as b,bP as h,ao as j,O as y,as as w,aG as _,aF as x,bB as q,aN as S,cq as I,$ as T,ag as $,bH as E,cr as F,cs as H,a1 as N,d as M,ct as R,k as A,bm as B,ah as C,n as G,m as P,q as k,g as z,u as D,p as K}from"./calfSystem-C1X5YxJZ.js"
import{i as O}from"./interceptSubmit-D-IYqL1u.js"
import{v as U,a as J}from"./arena-YCNDPxtE.js"
import"./legacy-CERE4DQ7.js"
import{a as L}from"./arena-CgHFL0T_.js"
import{h as Q}from"./htmlResult-Btqom80J.js"
import{I as W}from"./ItemImg-hPPLg_TQ.js"
import"./formToUrl-BjgGWW4H.js"
import"./loadDataTables-vs2_7T4b.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-DSEjTSpw.js"
import"./changeMinMax-Dbzryaut.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-CALdsMkd.js"
var V=a('<img alt="Flag"/>'),X=a('<div><div class="top svelte-yr50ap"> </div> <div class="bottom svelte-yr50ap"><!></div></div>')
function Y(a,c){let d=e(c,"title",3,""),u=e(c,"flag",3,0)
var g=X(),p=t(g),f=t(p),b=s(p,2),h=t(b),j=e=>{var a=V()
i((e=>v(a,"src",`${o??""}ui/arena/specials_${e??""}.png`)),[()=>{return e=u(),String(Number(e))
var e}]),l(e,a)},y=e=>{var a=m()
i((()=>n(a,u()))),l(e,a)}
r(h,(e=>{"boolean"==typeof u()?e(j):e(y,!1)})),i((()=>n(f,d()))),l(a,g)}async function Z(e,a,s,t){var r
await(r=p(a),L({subcmd:"usesetup",set_id:r})),u(s,p(t).find((({id:e})=>e===p(a))),!0)}var ee=a("<option> </option>"),ae=a('<img alt="Move"/>'),se=a('<div class="ams svelte-l2bu6v"><select class="svelte-l2bu6v"></select></div> <div class="amf svelte-l2bu6v"></div>',1)
function te(a,r){d(r,!0)
let m=e(r,"res",3,0),c=g(0),w=g(0),_=g(0)
const x=({slots:e})=>e.join()===p(c).slots.join()
u(c,m().current_set,!0),u(_,[...m().sets.some(x)?[]:[p(c)],...m().sets],!0),u(w,p(_).find(x).id,!0)
var q=se(),S=f(q),I=t(S)
I.__change=[Z,w,c,_],b(I,21,(()=>p(_)),(({id:e,name:a})=>e),((e,a)=>{let s=()=>p(a).id
var r=ee(),v=t(r),o={}
i((()=>{n(v,p(a).name),o!==(o=s())&&(r.value=(r.__value=s())??"")})),l(e,r)}))
var T=s(S,2)
b(T,21,(()=>p(c).slots),h,((e,a)=>{var s=ae()
i((()=>v(s,"src",`${o??""}arena/${p(a)?p(a)-1:"x"}.png`))),l(e,s)})),j(I,(()=>p(w)),(e=>u(w,e))),l(a,q),y()}c(["change"])
var re=a('<div class="ajf svelte-15i8mhg"><!></div>'),ie=a('<div class="ajf svelte-15i8mhg"><!> <!> <!> <!> <!></div> <!>',1),le=a('<div class="ajf svelte-15i8mhg"><div><p class="svelte-15i8mhg"> </p></div></div>')
function ne(e,a){d(a,!0)
const v=Number(w("pvp_id"))
let o=g(0),m=g(0)
var c=_(),b=f(c)
x(b,(async function(){const e=await U()
if(!e.s)throw new Error(e.e.message)
u(o,e.r,!0),u(m,e.r.arenas.find((e=>e.id===v)),!0)}),null,(e=>{var a=ie(),i=f(a),n=t(i)
Y(n,{title:"Players",get flag(){return`${p(m).players.length??""} / ${p(m).max_players??""}`}})
var v=s(n,2)
Y(v,{title:"Specials",get flag(){return p(m).specials}})
var c=s(v,2)
Y(c,{title:"Hell Forge",get flag(){return p(m).hellforge}})
var d=s(c,2)
Y(d,{title:"Epic",get flag(){return p(m).epic}})
var u=s(d,2)
{let e=q((()=>S(p(m).equip_level)))
Y(u,{title:"Max Equip Level",get flag(){return p(e)}})}var g=s(i,2),b=e=>{var a=re()
te(t(a),{get res(){return p(o)}}),l(e,a)}
r(g,(e=>{p(m).specials&&e(b)})),l(e,a)}),((e,a)=>{var s=le(),r=t(s),v=t(r),o=t(v)
i((()=>n(o,p(a).message))),l(e,s)})),l(e,c),y()}function ve(e){return I({subcmd:"usecombatset",combatSetId:e})}async function oe(e){const a=await $({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:e})
return Q(a)}var me=a("<div><!></div>")
function ce(a,s){let n=e(s,"class",3,""),v=e(s,"item",3,0)
var o=me(),m=t(o),c=e=>{W(e,{get item(){return v()},t:"1"})}
r(m,(e=>{v()&&e(c)})),i((()=>E(o,1,F(n()),"svelte-dyrqj"))),l(a,o)}var de=a('<div class="grid svelte-630zmj"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>')
async function ue(e,a,s,t,r){var i
await(i=p(a),T(ve,oe,i))
const l=await B(window.location.href)
u(s,p(t).find((({id:e})=>e===p(a))).items,!0)
const n=r(C(l)).map((e=>G(e)))
r().forEach(((e,a)=>P(n[a],e)))}var ge=a("<option> </option>"),pe=a('<div><div class="innerColumnHeader svelte-wrxyiv"><div class="flex svelte-wrxyiv">Inventory <select class="svelte-wrxyiv"></select></div></div> <!></div>')
function fe(a,r){d(r,!0)
let v=g(0),o=g(0),m=g(0)
const c=({a:e})=>p(v).some((({a:a})=>a===e)),h=({items:e})=>e.every(c)
const w=e=>A('table[width="300"] b',e).slice(1).map((e=>k("td",e.parentNode.nextElementSibling.children[0])))
var S=_(),I=f(S)
x(I,(async function(){const[e,a]=await N([M(),R()])
if(e?.r&&a?.r){u(v,e.r.equipment,!0)
const s=a.r.find(h)
u(m,s?.id??-1,!0),u(o,[...s?[]:[{id:-1,name:"Primary",items:p(v)}],...a.r],!0)}}),null,(a=>{var r=pe(),c=t(r),g=t(c),f=s(t(g))
f.__change=[ue,m,v,o,w],b(f,21,(()=>p(o)),(({id:e,name:a})=>e),((e,a)=>{let s=()=>p(a).id
var r=ge(),v=t(r),o={}
i((()=>{n(v,p(a).name),o!==(o=s())&&(r.value=(r.__value=s())??"")})),l(e,r)})),function(a,r){d(r,!0)
let i=e(r,"equipment",3,0)
const n=(e,a)=>e&&e.find((e=>e.t===H.indexOf(a)))
var v=de(),o=t(v)
{let e=q((()=>n(i(),"Gloves")))
ce(o,{class:"med",get item(){return p(e)}})}var m=s(o,2)
{let e=q((()=>n(i(),"Helmet")))
ce(m,{class:"med",get item(){return p(e)}})}var c=s(m,2)
{let e=q((()=>n(i(),"Amulet")))
ce(c,{class:"sml",get item(){return p(e)}})}var u=s(c,2)
{let e=q((()=>n(i(),"Weapon")))
ce(u,{class:"lrg",get item(){return p(e)}})}var g=s(u,2)
{let e=q((()=>n(i(),"Armor")))
ce(g,{class:"lrg",get item(){return p(e)}})}var f=s(g,2)
{let e=q((()=>n(i(),"Shield")))
ce(f,{class:"lrg",get item(){return p(e)}})}var b=s(f,2)
{let e=q((()=>n(i(),"Ring")))
ce(b,{class:"sml",get item(){return p(e)}})}var h=s(b,2)
{let e=q((()=>n(i(),"Boots")))
ce(h,{class:"med",get item(){return p(e)}})}var j=s(h,2)
{let e=q((()=>n(i(),"Rune")))
ce(j,{class:"sml",get item(){return p(e)}})}l(a,v),y()}(s(c,2),{get equipment(){return p(v)}}),j(f,(()=>p(m)),(e=>u(m,e))),l(a,r)})),l(a,S),y()}c(["change"])
var be=a("<!> <!>",1)
function he(e){var a=be(),t=f(a)
ne(t,{}),fe(s(t,2),{}),l(e,a)}function je(){z("arenaTypeTabs")?J():(O(),D(he,{target:K()}))}export{je as default}
//# sourceMappingURL=arenaJoin-Cr9B3FGP.js.map
