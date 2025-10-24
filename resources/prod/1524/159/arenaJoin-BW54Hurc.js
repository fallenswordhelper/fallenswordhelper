import{z as e,C as a,D as s,F as t,H as r,Q as i,N as n,R as l,T as o,bm as v,bE as m,ap as c,y as d,J as u,ak as f,K as g,E as p,G as b,bR as h,an as y,O as j,ar as _,aG as w,aF as x,bD as q,aN as I,cr as S,$ as E,af as T,bJ as $,cs as N,ct as F,h as R,bo as H,ag as M,m as z,l as D,q as G,a1 as A,cu as B,cv as C,p as J,g as L,t as O}from"./calfSystem-CIdPz3EO.js"
import{i as P}from"./interceptSubmit-Dg8BOmTG.js"
import{v as U,a as k}from"./arena-DWkOa_Nk.js"
import{a as K}from"./arena-BfifybXu.js"
import{d as Q}from"./daLoadInventory-wjRxPaFd.js"
import{h as W}from"./htmlResult-CHYKQLWk.js"
import{I as V}from"./ItemImg-DTebAiBh.js"
import"./formToUrl-JPHWbAvp.js"
import"./loadDataTables-D_pMtFws.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-DBtrAgoI.js"
import"./changeMinMax-DVLBgPra.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-Dw2yPW9h.js"
var X=a('<img alt="Flag"/>'),Y=a('<div><div class="top svelte-10rozf6"> </div> <div class="bottom svelte-10rozf6"><!></div></div>')
function Z(a,c){let d=e(c,"title",3,""),u=e(c,"flag",3,0)
var f=Y(),g=t(f),p=t(g),b=s(g,2),h=t(b),y=e=>{var a=X()
i(e=>o(a,"src",`${v??""}ui/arena/specials_${e??""}.png`),[()=>{return e=u(),String(Number(e))
var e}]),n(e,a)},j=e=>{var a=m()
i(()=>l(a,u())),n(e,a)}
r(h,e=>{"boolean"==typeof u()?e(y):e(j,!1)}),i(()=>l(p,d())),n(a,f)}async function ee(e,a,s,t){var r
await(r=g(a),K({subcmd:"usesetup",set_id:r})),u(s,g(t).find(({id:e})=>e===g(a)),!0)}var ae=a("<option> </option>"),se=a('<img alt="Move"/>'),te=a('<div class="ams svelte-18n6qy6"><select class="svelte-18n6qy6"></select></div> <div class="amf svelte-18n6qy6"></div>',1)
function re(a,r){d(r,!0)
let m=e(r,"res",3,0),c=f(0),_=f(0),w=f(0)
const x=({slots:e})=>e.join()===g(c).slots.join()
u(c,m().current_set,!0),u(w,[...m().sets.some(x)?[]:[g(c)],...m().sets],!0),u(_,g(w).find(x).id,!0)
var q=te(),I=p(q),S=t(I)
S.__change=[ee,_,c,w],b(S,21,()=>g(w),({id:e,name:a})=>e,(e,a)=>{let s=()=>g(a).id
var r=ae(),o=t(r),v={}
i(()=>{l(o,g(a).name),v!==(v=s())&&(r.value=(r.__value=s())??"")}),n(e,r)})
var E=s(I,2)
b(E,21,()=>g(c).slots,h,(e,a)=>{var s=se()
i(()=>o(s,"src",`${v??""}arena/${g(a)?g(a)-1:"x"}.png`)),n(e,s)}),y(S,()=>g(_),e=>u(_,e)),n(a,q),j()}c(["change"])
var ie=a('<div class="ajf svelte-1slddeh"><!></div>'),ne=a('<div class="ajf svelte-1slddeh"><!> <!> <!> <!> <!></div> <!>',1),le=a('<div class="ajf svelte-1slddeh"><div><p class="svelte-1slddeh"> </p></div></div>')
function oe(e,a){d(a,!0)
const o=Number(_("pvp_id"))
let v=f(0),m=f(0)
var c=w(),b=p(c)
x(b,async function(){const e=await U()
if(!e.s)throw new Error(e.e.message)
u(v,e.r,!0),u(m,e.r.arenas.find(e=>e.id===o),!0)},null,e=>{var a=ne(),i=p(a),l=t(i)
Z(l,{title:"Players",get flag(){return`${g(m).players.length??""} / ${g(m).max_players??""}`}})
var o=s(l,2)
Z(o,{title:"Specials",get flag(){return g(m).specials}})
var c=s(o,2)
Z(c,{title:"Hell Forge",get flag(){return g(m).hellforge}})
var d=s(c,2)
Z(d,{title:"Epic",get flag(){return g(m).epic}})
var u=s(d,2)
{let e=q(()=>I(g(m).equip_level))
Z(u,{title:"Max Equip Level",get flag(){return g(e)}})}var f=s(i,2),b=e=>{var a=ie()
re(t(a),{get res(){return g(v)}}),n(e,a)}
r(f,e=>{g(m).specials&&e(b)}),n(e,a)},(e,a)=>{var s=le(),r=t(s),o=t(r),v=t(o)
i(()=>l(v,g(a).message)),n(e,s)}),n(e,c),j()}function ve(e){return S({subcmd:"usecombatset",combatSetId:e})}async function me(e){const a=await T({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:e})
return W(a)}var ce=a("<div><!></div>")
function de(a,s){let l=e(s,"class",3,""),o=e(s,"item",3,0)
var v=ce(),m=t(v),c=e=>{V(e,{get item(){return o()},t:"1"})}
r(m,e=>{o()&&e(c)}),i(()=>$(v,1,N(l()),"svelte-16yt0xh")),n(a,v)}var ue=a('<div class="grid svelte-vs4nvm"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>')
async function fe(e,a,s,t,r){var i
await(i=g(a),E(ve,me,i))
const n=await H(window.location.href)
u(s,g(t).find(({id:e})=>e===g(a)).items,!0)
const l=r(M(n)).map(e=>z(e))
r().forEach((e,a)=>D(l[a],e))}var ge=a("<option> </option>"),pe=a('<div><div class="innerColumnHeader svelte-drdg2"><div class="flex svelte-drdg2">Inventory <select class="svelte-drdg2"></select></div></div> <!></div>')
function be(a,r){d(r,!0)
let o=f(0),v=f(0),m=f(0)
const c=({a:e})=>g(o).some(({a:a})=>a===e),h=({items:e})=>e.every(c),_=(e,a)=>e&&a.length?e.map(e=>{const s=a.find(a=>a.inv_id===e.a)
return{...e,t:s?.type}}):e||[]
const I=e=>R('table[width="300"] b',e).slice(1).map(e=>G("td",e.parentNode.nextElementSibling.children[0]))
var S=w(),E=p(S)
x(E,async function(){const[e,a,s]=await A([Q(),B(),C()])
if(e?.r&&a?.r&&s?.items){u(o,_(e.r.equipment,s.items),!0)
const t=a.r.find(h)
u(m,t?.id??-1,!0)
const r=a.r.map(e=>({...e,items:_(e.items,s.items)}))
u(v,[...t?[]:[{id:-1,name:"Primary",items:g(o)}],...r],!0)}},null,a=>{var r=pe(),c=t(r),f=t(c),p=s(t(f))
p.__change=[fe,m,o,v,I],b(p,21,()=>g(v),({id:e,name:a})=>e,(e,a)=>{let s=()=>g(a).id
var r=ge(),o=t(r),v={}
i(()=>{r.disabled=-1===s()&&-1!==g(m),l(o,g(a).name),v!==(v=s())&&(r.value=(r.__value=s())??"")}),n(e,r)}),function(a,r){d(r,!0)
let i=e(r,"equipment",3,0)
const l=(e,a)=>e&&e.find(e=>e.t===F.indexOf(a))
var o=ue(),v=t(o)
{let e=q(()=>l(i(),"Gloves"))
de(v,{class:"med",get item(){return g(e)}})}var m=s(v,2)
{let e=q(()=>l(i(),"Helmet"))
de(m,{class:"med",get item(){return g(e)}})}var c=s(m,2)
{let e=q(()=>l(i(),"Amulet"))
de(c,{class:"sml",get item(){return g(e)}})}var u=s(c,2)
{let e=q(()=>l(i(),"Weapon"))
de(u,{class:"lrg",get item(){return g(e)}})}var f=s(u,2)
{let e=q(()=>l(i(),"Armor"))
de(f,{class:"lrg",get item(){return g(e)}})}var p=s(f,2)
{let e=q(()=>l(i(),"Shield"))
de(p,{class:"lrg",get item(){return g(e)}})}var b=s(p,2)
{let e=q(()=>l(i(),"Ring"))
de(b,{class:"sml",get item(){return g(e)}})}var h=s(b,2)
{let e=q(()=>l(i(),"Boots"))
de(h,{class:"med",get item(){return g(e)}})}var y=s(h,2)
{let e=q(()=>l(i(),"Rune"))
de(y,{class:"sml",get item(){return g(e)}})}n(a,o),j()}(s(c,2),{get equipment(){return g(o)}}),y(p,()=>g(m),e=>u(m,e)),n(a,r)}),n(a,S),j()}c(["change"])
var he=a("<!> <!>",1)
function ye(e){var a=he(),t=p(a)
oe(t,{}),be(s(t,2),{}),n(e,a)}function je(){if(!J())return
L("arenaTypeTabs")?k():(P(),O(ye,{target:J()}))}export{je as default}
//# sourceMappingURL=arenaJoin-BW54Hurc.js.map
