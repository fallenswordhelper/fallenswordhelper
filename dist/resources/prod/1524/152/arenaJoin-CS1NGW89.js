import{A as e,C as a,D as s,F as t,H as r,Q as i,N as l,R as n,T as v,bh as o,bz as m,aq as c,z as d,J as u,al as g,K as p,E as f,G as b,bM as h,ao as j,O as y,as as w,aG as _,aF as x,by as q,aN as S,cn as E,$ as I,ag as T,bE as $,co as F,cp as M,a1 as N,d as H,cq as R,k as z,bj as A,ah as G,n as B,m as C,q as D,g as K,u as O,p as P}from"./calfSystem-BlPuMQGT.js"
import{i as U}from"./interceptSubmit-Cvm926dN.js"
import{v as k,a as J}from"./arena-DoK7O40r.js"
import"./legacy-6E4ldJQ5.js"
import{a as L}from"./arena-1Ky-MA6G.js"
import{h as Q}from"./htmlResult-DY3V3Ki7.js"
import{I as W}from"./ItemImg-fur4m6px.js"
import"./formToUrl-Dy2RFM47.js"
import"./loadDataTables-BKhODvop.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-BPuVsAU3.js"
import"./changeMinMax-DBcG-RAG.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-BDWFjNv_.js"
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
var q=se(),S=f(q),E=t(S)
E.__change=[Z,w,c,_],b(E,21,(()=>p(_)),(({id:e,name:a})=>e),((e,a)=>{let s=()=>p(a).id
var r=ee(),v=t(r),o={}
i((()=>{n(v,p(a).name),o!==(o=s())&&(r.value=(r.__value=s())??"")})),l(e,r)}))
var I=s(S,2)
b(I,21,(()=>p(c).slots),h,((e,a)=>{var s=ae()
i((()=>v(s,"src",`${o??""}arena/${p(a)?p(a)-1:"x"}.png`))),l(e,s)})),j(E,(()=>p(w)),(e=>u(w,e))),l(a,q),y()}c(["change"])
var re=a('<div class="ajf svelte-15i8mhg"><!></div>'),ie=a('<div class="ajf svelte-15i8mhg"><!> <!> <!> <!> <!></div> <!>',1),le=a('<div class="ajf svelte-15i8mhg"><div><p class="svelte-15i8mhg"> </p></div></div>')
function ne(e,a){d(a,!0)
const v=Number(w("pvp_id"))
let o=g(0),m=g(0)
var c=_(),b=f(c)
x(b,(async function(){const e=await k()
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
i((()=>n(o,p(a).message))),l(e,s)})),l(e,c),y()}function ve(e){return E({subcmd:"usecombatset",combatSetId:e})}async function oe(e){const a=await T({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:e})
return Q(a)}var me=a("<div><!></div>")
function ce(a,s){let n=e(s,"class",3,""),v=e(s,"item",3,0)
var o=me(),m=t(o),c=e=>{W(e,{get item(){return v()},t:"1"})}
r(m,(e=>{v()&&e(c)})),i((()=>$(o,1,F(n()),"svelte-dyrqj"))),l(a,o)}var de=a('<div class="grid svelte-630zmj"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>')
async function ue(e,a,s,t,r){var i
await(i=p(a),I(ve,oe,i))
const l=await A(window.location.href)
u(s,p(t).find((({id:e})=>e===p(a))).items,!0)
const n=r(G(l)).map((e=>B(e)))
r().forEach(((e,a)=>C(n[a],e)))}var ge=a("<option> </option>"),pe=a('<div><div class="innerColumnHeader svelte-wrxyiv"><div class="flex svelte-wrxyiv">Inventory <select class="svelte-wrxyiv"></select></div></div> <!></div>')
function fe(a,r){d(r,!0)
let v=g(0),o=g(0),m=g(0)
const c=({a:e})=>p(v).some((({a:a})=>a===e)),h=({items:e})=>e.every(c)
const w=e=>z('table[width="300"] b',e).slice(1).map((e=>D("td",e.parentNode.nextElementSibling.children[0])))
var S=_(),E=f(S)
x(E,(async function(){const[e,a]=await N([H(),R()])
if(e?.r&&a?.r){u(v,e.r.equipment,!0)
const s=a.r.find(h)
u(m,s?.id??-1,!0),u(o,[...s?[]:[{id:-1,name:"Primary",items:p(v)}],...a.r],!0)}}),null,(a=>{var r=pe(),c=t(r),g=t(c),f=s(t(g))
f.__change=[ue,m,v,o,w],b(f,21,(()=>p(o)),(({id:e,name:a})=>e),((e,a)=>{let s=()=>p(a).id
var r=ge(),v=t(r),o={}
i((()=>{n(v,p(a).name),o!==(o=s())&&(r.value=(r.__value=s())??"")})),l(e,r)})),function(a,r){d(r,!0)
let i=e(r,"equipment",3,0)
const n=(e,a)=>e&&e.find((e=>e.t===M.indexOf(a)))
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
ne(t,{}),fe(s(t,2),{}),l(e,a)}function je(){K("arenaTypeTabs")?J():(U(),O(he,{target:P()}))}export{je as default}
//# sourceMappingURL=arenaJoin-CS1NGW89.js.map
