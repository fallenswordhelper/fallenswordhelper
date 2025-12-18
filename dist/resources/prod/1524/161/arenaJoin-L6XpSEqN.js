import{z as e,C as a,D as s,F as t,H as r,Q as i,R as n,N as l,T as o,bn as v,bQ as m,ap as c,y as d,J as u,ak as p,K as f,E as g,G as b,bO as h,an as y,O as j,ar as _,aG as w,aF as q,cp as x,aN as I,cq as S,$ as T,af as $,bG as E,cr as F,cs as N,bp as G,ag as H,h as M,m as O,l as R,a1 as z,ct as A,cu as B,q as C,p as D,g as L,t as P}from"./calfSystem-Cs6CSxoU.js"
import{i as Q}from"./interceptSubmit-Bhotwi5X.js"
import{v as U,a as k}from"./arena-wyrdPrDH.js"
import{a as J}from"./arena-CNngZGaP.js"
import{d as K}from"./daLoadInventory-Sf3be_xU.js"
import{h as W}from"./htmlResult-zJJ1KGba.js"
import{I as V}from"./ItemImg-Bs0RZQth.js"
import"./formToUrl-CAPzQx_Y.js"
import"./loadDataTables-Ck0U5wjM.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-CVDQ4SVd.js"
import"./changeMinMax-CSfAMBUZ.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-DFKUvyJC.js"
var X=a('<img alt="Flag"/>'),Y=a('<div><div class="top svelte-10rozf6"> </div> <div class="bottom svelte-10rozf6"><!></div></div>')
function Z(a,c){let d=e(c,"title",3,""),u=e(c,"flag",3,0)
var p=Y(),f=t(p),g=t(f),b=s(f,2),h=t(b),y=e=>{var a=X()
i(e=>o(a,"src",`${v??""}ui/arena/specials_${e??""}.png`),[()=>{return e=u(),String(Number(e))
var e}]),l(e,a)},j=e=>{var a=m()
i(()=>n(a,u())),l(e,a)}
r(h,e=>{"boolean"==typeof u()?e(y):e(j,!1)}),i(()=>n(g,d())),l(a,p)}var ee=a("<option> </option>"),ae=a('<img alt="Move"/>'),se=a('<div class="ams svelte-18n6qy6"><select class="svelte-18n6qy6"></select></div> <div class="amf svelte-18n6qy6"></div>',1)
function te(a,r){d(r,!0)
let m=e(r,"res",3,0),c=p(0),_=p(0),w=p(0)
const q=({slots:e})=>e.join()===f(c).slots.join()
u(c,m().current_set,!0),u(w,[...m().sets.some(q)?[]:[f(c)],...m().sets],!0),u(_,f(w).find(q).id,!0)
var x=se(),I=g(x),S=t(I)
S.__change=async function(){var e
await(e=f(_),J({subcmd:"usesetup",set_id:e})),u(c,f(w).find(({id:e})=>e===f(_)),!0)},b(S,21,()=>f(w),({id:e,name:a})=>e,(e,a)=>{let s=()=>f(a).id
var r=ee(),o=t(r),v={}
i(()=>{n(o,f(a).name),v!==(v=s())&&(r.value=(r.__value=s())??"")}),l(e,r)})
var T=s(I,2)
b(T,21,()=>f(c).slots,h,(e,a)=>{var s=ae()
i(()=>o(s,"src",`${v??""}arena/${f(a)?f(a)-1:"x"}.png`)),l(e,s)}),y(S,()=>f(_),e=>u(_,e)),l(a,x),j()}c(["change"])
var re=a('<div class="ajf svelte-1slddeh"><!></div>'),ie=a('<div class="ajf svelte-1slddeh"><!> <!> <!> <!> <!></div> <!>',1),ne=a('<div class="ajf svelte-1slddeh"><div><p class="svelte-1slddeh"> </p></div></div>')
function le(e,a){d(a,!0)
const o=Number(_("pvp_id"))
let v=p(0),m=p(0)
var c=w(),b=g(c)
q(b,async function(){const e=await U()
if(!e.s)throw new Error(e.e.message)
u(v,e.r,!0),u(m,e.r.arenas.find(e=>e.id===o),!0)},null,e=>{var a=ie(),i=g(a),n=t(i)
Z(n,{title:"Players",get flag(){return`${f(m).players.length??""} / ${f(m).max_players??""}`}})
var o=s(n,2)
Z(o,{title:"Specials",get flag(){return f(m).specials}})
var c=s(o,2)
Z(c,{title:"Hell Forge",get flag(){return f(m).hellforge}})
var d=s(c,2)
Z(d,{title:"Epic",get flag(){return f(m).epic}})
var u=s(d,2)
{let e=x(()=>I(f(m).equip_level))
Z(u,{title:"Max Equip Level",get flag(){return f(e)}})}var p=s(i,2),b=e=>{var a=re()
te(t(a),{get res(){return f(v)}}),l(e,a)}
r(p,e=>{f(m).specials&&e(b)}),l(e,a)},(e,a)=>{var s=ne(),r=t(s),o=t(r),v=t(o)
i(()=>n(v,f(a).message)),l(e,s)}),l(e,c),j()}function oe(e){return S({subcmd:"usecombatset",combatSetId:e})}async function ve(e){const a=await $({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:e})
return W(a)}var me=a("<div><!></div>")
function ce(a,s){let n=e(s,"class",3,""),o=e(s,"item",3,0)
var v=me(),m=t(v),c=e=>{V(e,{get item(){return o()},t:"1"})}
r(m,e=>{o()&&e(c)}),i(()=>E(v,1,F(n()),"svelte-16yt0xh")),l(a,v)}var de=a('<div class="grid svelte-vs4nvm"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>')
var ue=a("<option> </option>"),pe=a('<div><div class="innerColumnHeader svelte-drdg2"><div class="flex svelte-drdg2">Inventory <select class="svelte-drdg2"></select></div></div> <!></div>')
function fe(a,r){d(r,!0)
let o=p(0),v=p(0),m=p(0)
const c=({a:e})=>f(o).some(({a:a})=>a===e),h=({items:e})=>e.every(c),_=(e,a)=>e&&a.length?e.map(e=>{const s=a.find(a=>a.inv_id===e.a)
return{...e,t:s?.type}}):e||[]
const I=e=>M('table[width="300"] b',e).slice(1).map(e=>C("td",e.parentNode.nextElementSibling.children[0]))
async function S(){var e
await(e=f(m),T(oe,ve,e))
const a=await G(window.location.href)
u(o,f(v).find(({id:e})=>e===f(m)).items,!0)
const s=H(a),t=I(s).map(e=>O(e))
I().forEach((e,a)=>R(t[a],e))}var $=w(),E=g($)
q(E,async function(){const[e,a,s]=await z([K(),A(),B()])
if(e?.r&&a?.r&&s?.items){u(o,_(e.r.equipment,s.items),!0)
const t=a.r.find(h)
u(m,t?.id??-1,!0)
const r=a.r.map(e=>({...e,items:_(e.items,s.items)}))
u(v,[...t?[]:[{id:-1,name:"Primary",items:f(o)}],...r],!0)}},null,a=>{var r=pe(),c=t(r),p=t(c),g=s(t(p))
g.__change=S,b(g,21,()=>f(v),({id:e,name:a})=>e,(e,a)=>{let s=()=>f(a).id
var r=ue(),o=t(r),v={}
i(()=>{r.disabled=-1===s()&&-1!==f(m),n(o,f(a).name),v!==(v=s())&&(r.value=(r.__value=s())??"")}),l(e,r)}),function(a,r){d(r,!0)
let i=e(r,"equipment",3,0)
const n=(e,a)=>e&&e.find(e=>e.t===N.indexOf(a))
var o=de(),v=t(o)
{let e=x(()=>n(i(),"Gloves"))
ce(v,{class:"med",get item(){return f(e)}})}var m=s(v,2)
{let e=x(()=>n(i(),"Helmet"))
ce(m,{class:"med",get item(){return f(e)}})}var c=s(m,2)
{let e=x(()=>n(i(),"Amulet"))
ce(c,{class:"sml",get item(){return f(e)}})}var u=s(c,2)
{let e=x(()=>n(i(),"Weapon"))
ce(u,{class:"lrg",get item(){return f(e)}})}var p=s(u,2)
{let e=x(()=>n(i(),"Armor"))
ce(p,{class:"lrg",get item(){return f(e)}})}var g=s(p,2)
{let e=x(()=>n(i(),"Shield"))
ce(g,{class:"lrg",get item(){return f(e)}})}var b=s(g,2)
{let e=x(()=>n(i(),"Ring"))
ce(b,{class:"sml",get item(){return f(e)}})}var h=s(b,2)
{let e=x(()=>n(i(),"Boots"))
ce(h,{class:"med",get item(){return f(e)}})}var y=s(h,2)
{let e=x(()=>n(i(),"Rune"))
ce(y,{class:"sml",get item(){return f(e)}})}l(a,o),j()}(s(c,2),{get equipment(){return f(o)}}),y(g,()=>f(m),e=>u(m,e)),l(a,r)}),l(a,$),j()}c(["change"])
var ge=a("<!> <!>",1)
function be(e){var a=ge(),t=g(a)
le(t,{}),fe(s(t,2),{}),l(e,a)}function he(){if(!D())return
L("arenaTypeTabs")?k():(Q(),P(be,{target:D()}))}export{he as default}
//# sourceMappingURL=arenaJoin-L6XpSEqN.js.map
