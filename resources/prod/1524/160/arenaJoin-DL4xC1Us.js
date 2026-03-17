import{z as e,C as a,D as s,F as t,H as r,P as i,S as n,N as l,Q as o,bm as v,bG as m,ap as c,y as d,J as u,ak as f,K as g,E as p,G as b,bT as h,an as y,O as j,ar as _,aG as w,aF as x,bD as q,aN as S,cr as I,$ as T,af as $,bH as E,cs as N,ct as F,bo as H,ag as G,h as M,m as z,l as D,a1 as P,cu as R,cv as A,q as B,p as C,g as L,t as O}from"./calfSystem-HVCiy-VV.js"
import{i as U}from"./interceptSubmit-rdUGIp5j.js"
import{v as k,a as J}from"./arena-hMUBZiSE.js"
import{a as K}from"./arena-3V_E__D9.js"
import{d as Q}from"./daLoadInventory-Ca2XaP78.js"
import{h as W}from"./htmlResult-BVV0RUGi.js"
import{I as V}from"./ItemImg-0EM3a_QW.js"
import"./formToUrl-BMkQD7VR.js"
import"./loadDataTables-BV3m4OGe.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-Iza15bjh.js"
import"./changeMinMax-8JZ50fyX.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-Zar6WCPQ.js"
var X=a('<img alt="Flag"/>'),Y=a('<div><div class="top svelte-10rozf6"> </div> <div class="bottom svelte-10rozf6"><!></div></div>')
function Z(a,c){let d=e(c,"title",3,""),u=e(c,"flag",3,0)
var f=Y(),g=t(f),p=t(g),b=s(g,2),h=t(b),y=e=>{var a=X()
i(e=>o(a,"src",`${v??""}ui/arena/specials_${e??""}.png`),[()=>{return e=u(),String(Number(e))
var e}]),l(e,a)},j=e=>{var a=m()
i(()=>n(a,u())),l(e,a)}
r(h,e=>{"boolean"==typeof u()?e(y):e(j,!1)}),i(()=>n(p,d())),l(a,f)}var ee=a("<option> </option>"),ae=a('<img alt="Move"/>'),se=a('<div class="ams svelte-18n6qy6"><select class="svelte-18n6qy6"></select></div> <div class="amf svelte-18n6qy6"></div>',1)
function te(a,r){d(r,!0)
let m=e(r,"res",3,0),c=f(0),_=f(0),w=f(0)
const x=({slots:e})=>e.join()===g(c).slots.join()
u(c,m().current_set,!0),u(w,[...m().sets.some(x)?[]:[g(c)],...m().sets],!0),u(_,g(w).find(x).id,!0)
var q=se(),S=p(q),I=t(S)
I.__change=async function(){var e
await(e=g(_),K({subcmd:"usesetup",set_id:e})),u(c,g(w).find(({id:e})=>e===g(_)),!0)},b(I,21,()=>g(w),({id:e,name:a})=>e,(e,a)=>{let s=()=>g(a).id
var r=ee(),o=t(r),v={}
i(()=>{n(o,g(a).name),v!==(v=s())&&(r.value=(r.__value=s())??"")}),l(e,r)})
var T=s(S,2)
b(T,21,()=>g(c).slots,h,(e,a)=>{var s=ae()
i(()=>o(s,"src",`${v??""}arena/${g(a)?g(a)-1:"x"}.png`)),l(e,s)}),y(I,()=>g(_),e=>u(_,e)),l(a,q),j()}c(["change"])
var re=a('<div class="ajf svelte-1slddeh"><!></div>'),ie=a('<div class="ajf svelte-1slddeh"><!> <!> <!> <!> <!></div> <!>',1),ne=a('<div class="ajf svelte-1slddeh"><div><p class="svelte-1slddeh"> </p></div></div>')
function le(e,a){d(a,!0)
const o=Number(_("pvp_id"))
let v=f(0),m=f(0)
var c=w(),b=p(c)
x(b,async function(){const e=await k()
if(!e.s)throw new Error(e.e.message)
u(v,e.r,!0),u(m,e.r.arenas.find(e=>e.id===o),!0)},null,e=>{var a=ie(),i=p(a),n=t(i)
Z(n,{title:"Players",get flag(){return`${g(m).players.length??""} / ${g(m).max_players??""}`}})
var o=s(n,2)
Z(o,{title:"Specials",get flag(){return g(m).specials}})
var c=s(o,2)
Z(c,{title:"Hell Forge",get flag(){return g(m).hellforge}})
var d=s(c,2)
Z(d,{title:"Epic",get flag(){return g(m).epic}})
var u=s(d,2)
{let e=q(()=>S(g(m).equip_level))
Z(u,{title:"Max Equip Level",get flag(){return g(e)}})}var f=s(i,2),b=e=>{var a=re()
te(t(a),{get res(){return g(v)}}),l(e,a)}
r(f,e=>{g(m).specials&&e(b)}),l(e,a)},(e,a)=>{var s=ne(),r=t(s),o=t(r),v=t(o)
i(()=>n(v,g(a).message)),l(e,s)}),l(e,c),j()}function oe(e){return I({subcmd:"usecombatset",combatSetId:e})}async function ve(e){const a=await $({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:e})
return W(a)}var me=a("<div><!></div>")
function ce(a,s){let n=e(s,"class",3,""),o=e(s,"item",3,0)
var v=me(),m=t(v),c=e=>{V(e,{get item(){return o()},t:"1"})}
r(m,e=>{o()&&e(c)}),i(()=>E(v,1,N(n()),"svelte-16yt0xh")),l(a,v)}var de=a('<div class="grid svelte-vs4nvm"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>')
var ue=a("<option> </option>"),fe=a('<div><div class="innerColumnHeader svelte-drdg2"><div class="flex svelte-drdg2">Inventory <select class="svelte-drdg2"></select></div></div> <!></div>')
function ge(a,r){d(r,!0)
let o=f(0),v=f(0),m=f(0)
const c=({a:e})=>g(o).some(({a:a})=>a===e),h=({items:e})=>e.every(c),_=(e,a)=>e&&a.length?e.map(e=>{const s=a.find(a=>a.inv_id===e.a)
return{...e,t:s?.type}}):e||[]
const S=e=>M('table[width="300"] b',e).slice(1).map(e=>B("td",e.parentNode.nextElementSibling.children[0]))
async function I(){var e
await(e=g(m),T(oe,ve,e))
const a=await H(window.location.href)
u(o,g(v).find(({id:e})=>e===g(m)).items,!0)
const s=G(a),t=S(s).map(e=>z(e))
S().forEach((e,a)=>D(t[a],e))}var $=w(),E=p($)
x(E,async function(){const[e,a,s]=await P([Q(),R(),A()])
if(e?.r&&a?.r&&s?.items){u(o,_(e.r.equipment,s.items),!0)
const t=a.r.find(h)
u(m,t?.id??-1,!0)
const r=a.r.map(e=>({...e,items:_(e.items,s.items)}))
u(v,[...t?[]:[{id:-1,name:"Primary",items:g(o)}],...r],!0)}},null,a=>{var r=fe(),c=t(r),f=t(c),p=s(t(f))
p.__change=I,b(p,21,()=>g(v),({id:e,name:a})=>e,(e,a)=>{let s=()=>g(a).id
var r=ue(),o=t(r),v={}
i(()=>{r.disabled=-1===s()&&-1!==g(m),n(o,g(a).name),v!==(v=s())&&(r.value=(r.__value=s())??"")}),l(e,r)}),function(a,r){d(r,!0)
let i=e(r,"equipment",3,0)
const n=(e,a)=>e&&e.find(e=>e.t===F.indexOf(a))
var o=de(),v=t(o)
{let e=q(()=>n(i(),"Gloves"))
ce(v,{class:"med",get item(){return g(e)}})}var m=s(v,2)
{let e=q(()=>n(i(),"Helmet"))
ce(m,{class:"med",get item(){return g(e)}})}var c=s(m,2)
{let e=q(()=>n(i(),"Amulet"))
ce(c,{class:"sml",get item(){return g(e)}})}var u=s(c,2)
{let e=q(()=>n(i(),"Weapon"))
ce(u,{class:"lrg",get item(){return g(e)}})}var f=s(u,2)
{let e=q(()=>n(i(),"Armor"))
ce(f,{class:"lrg",get item(){return g(e)}})}var p=s(f,2)
{let e=q(()=>n(i(),"Shield"))
ce(p,{class:"lrg",get item(){return g(e)}})}var b=s(p,2)
{let e=q(()=>n(i(),"Ring"))
ce(b,{class:"sml",get item(){return g(e)}})}var h=s(b,2)
{let e=q(()=>n(i(),"Boots"))
ce(h,{class:"med",get item(){return g(e)}})}var y=s(h,2)
{let e=q(()=>n(i(),"Rune"))
ce(y,{class:"sml",get item(){return g(e)}})}l(a,o),j()}(s(c,2),{get equipment(){return g(o)}}),y(p,()=>g(m),e=>u(m,e)),l(a,r)}),l(a,$),j()}c(["change"])
var pe=a("<!> <!>",1)
function be(e){var a=pe(),t=p(a)
le(t,{}),ge(s(t,2),{}),l(e,a)}function he(){if(!C())return
L("arenaTypeTabs")?J():(U(),O(be,{target:C()}))}export{he as default}
//# sourceMappingURL=arenaJoin-DL4xC1Us.js.map
