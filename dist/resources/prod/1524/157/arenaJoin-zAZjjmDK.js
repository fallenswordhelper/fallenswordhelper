import{y as e,B as a,C as t,E as s,G as r,P as i,L as l,Q as n,S as v,bl as o,bD as m,ap as c,x as d,I as u,ak as p,J as g,D as f,F as b,bQ as y,an as h,N as j,ar as w,aG as _,aF as x,bC as I,aN as S,cr as q,$,af as E,bI as T,cs as F,ct as N,a0 as L,cu as M,cv as B,h as C,bn as D,ag as G,l as H,k as P,q as R,p as k,g as A,n as Q}from"./calfSystem-CQOGdqPv.js"
import{i as U}from"./interceptSubmit-B-ce898B.js"
import{v as z,a as J}from"./arena-CZyb52Ik.js"
import{a as O}from"./arena-Ca8RRX-5.js"
import{d as W}from"./daLoadInventory-C9oxmubC.js"
import{h as K}from"./htmlResult-BYIVInNx.js"
import{I as V}from"./ItemImg-AywM3LNK.js"
import"./formToUrl-BAYKyqXO.js"
import"./loadDataTables-AKoQZyAz.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-CX0APdgk.js"
import"./changeMinMax-C4au7ebT.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-GavcHhIs.js"
var X=a('<img alt="Flag"/>'),Y=a('<div><div class="top svelte-yr50ap"> </div> <div class="bottom svelte-yr50ap"><!></div></div>')
function Z(a,c){let d=e(c,"title",3,""),u=e(c,"flag",3,0)
var p=Y(),g=s(p),f=s(g),b=t(g,2),y=s(b),h=e=>{var a=X()
i(e=>v(a,"src",`${o??""}ui/arena/specials_${e??""}.png`),[()=>{return e=u(),String(Number(e))
var e}]),l(e,a)},j=e=>{var a=m()
i(()=>n(a,u())),l(e,a)}
r(y,e=>{"boolean"==typeof u()?e(h):e(j,!1)}),i(()=>n(f,d())),l(a,p)}async function ee(e,a,t,s){var r
await(r=g(a),O({subcmd:"usesetup",set_id:r})),u(t,g(s).find(({id:e})=>e===g(a)),!0)}var ae=a("<option> </option>"),te=a('<img alt="Move"/>'),se=a('<div class="ams svelte-l2bu6v"><select class="svelte-l2bu6v"></select></div> <div class="amf svelte-l2bu6v"></div>',1)
function re(a,r){d(r,!0)
let m=e(r,"res",3,0),c=p(0),w=p(0),_=p(0)
const x=({slots:e})=>e.join()===g(c).slots.join()
u(c,m().current_set,!0),u(_,[...m().sets.some(x)?[]:[g(c)],...m().sets],!0),u(w,g(_).find(x).id,!0)
var I=se(),S=f(I),q=s(S)
q.__change=[ee,w,c,_],b(q,21,()=>g(_),({id:e,name:a})=>e,(e,a)=>{let t=()=>g(a).id
var r=ae(),v=s(r),o={}
i(()=>{n(v,g(a).name),o!==(o=t())&&(r.value=(r.__value=t())??"")}),l(e,r)})
var $=t(S,2)
b($,21,()=>g(c).slots,y,(e,a)=>{var t=te()
i(()=>v(t,"src",`${o??""}arena/${g(a)?g(a)-1:"x"}.png`)),l(e,t)}),h(q,()=>g(w),e=>u(w,e)),l(a,I),j()}c(["change"])
var ie=a('<div class="ajf svelte-15i8mhg"><!></div>'),le=a('<div class="ajf svelte-15i8mhg"><!> <!> <!> <!> <!></div> <!>',1),ne=a('<div class="ajf svelte-15i8mhg"><div><p class="svelte-15i8mhg"> </p></div></div>')
function ve(e,a){d(a,!0)
const v=Number(w("pvp_id"))
let o=p(0),m=p(0)
var c=_(),b=f(c)
x(b,async function(){const e=await z()
if(!e.s)throw new Error(e.e.message)
u(o,e.r,!0),u(m,e.r.arenas.find(e=>e.id===v),!0)},null,e=>{var a=le(),i=f(a),n=s(i)
Z(n,{title:"Players",get flag(){return`${g(m).players.length??""} / ${g(m).max_players??""}`}})
var v=t(n,2)
Z(v,{title:"Specials",get flag(){return g(m).specials}})
var c=t(v,2)
Z(c,{title:"Hell Forge",get flag(){return g(m).hellforge}})
var d=t(c,2)
Z(d,{title:"Epic",get flag(){return g(m).epic}})
var u=t(d,2)
{let e=I(()=>S(g(m).equip_level))
Z(u,{title:"Max Equip Level",get flag(){return g(e)}})}var p=t(i,2),b=e=>{var a=ie()
re(s(a),{get res(){return g(o)}}),l(e,a)}
r(p,e=>{g(m).specials&&e(b)}),l(e,a)},(e,a)=>{var t=ne(),r=s(t),v=s(r),o=s(v)
i(()=>n(o,g(a).message)),l(e,t)}),l(e,c),j()}function oe(e){return q({subcmd:"usecombatset",combatSetId:e})}async function me(e){const a=await E({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:e})
return K(a)}var ce=a("<div><!></div>")
function de(a,t){let n=e(t,"class",3,""),v=e(t,"item",3,0)
var o=ce(),m=s(o),c=e=>{V(e,{get item(){return v()},t:"1"})}
r(m,e=>{v()&&e(c)}),i(()=>T(o,1,F(n()),"svelte-dyrqj")),l(a,o)}var ue=a('<div class="grid svelte-630zmj"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>')
async function pe(e,a,t,s,r){var i
await(i=g(a),$(oe,me,i))
const l=await D(window.location.href)
u(t,g(s).find(({id:e})=>e===g(a)).items,!0)
const n=r(G(l)).map(e=>H(e))
r().forEach((e,a)=>P(n[a],e))}var ge=a("<option> </option>"),fe=a('<div><div class="innerColumnHeader svelte-wrxyiv"><div class="flex svelte-wrxyiv">Inventory <select class="svelte-wrxyiv"></select></div></div> <!></div>')
function be(a,r){d(r,!0)
let v=p(0),o=p(0),m=p(0)
const c=({a:e})=>g(v).some(({a:a})=>a===e),y=({items:e})=>e.every(c),w=(e,a)=>e&&a.length?e.map(e=>{const t=a.find(a=>a.inv_id===e.a)
return{...e,t:t?.type}}):e||[]
const S=e=>C('table[width="300"] b',e).slice(1).map(e=>R("td",e.parentNode.nextElementSibling.children[0]))
var q=_(),$=f(q)
x($,async function(){const[e,a,t]=await L([W(),M(),B()])
if(e?.r&&a?.r&&t?.items){u(v,w(e.r.equipment,t.items),!0)
const s=a.r.find(y)
u(m,s?.id??-1,!0)
const r=a.r.map(e=>({...e,items:w(e.items,t.items)}))
u(o,[...s?[]:[{id:-1,name:"Primary",items:g(v)}],...r],!0)}},null,a=>{var r=fe(),c=s(r),p=s(c),f=t(s(p))
f.__change=[pe,m,v,o,S],b(f,21,()=>g(o),({id:e,name:a})=>e,(e,a)=>{let t=()=>g(a).id
var r=ge(),v=s(r),o={}
i(()=>{r.disabled=-1===t()&&-1!==g(m),n(v,g(a).name),o!==(o=t())&&(r.value=(r.__value=t())??"")}),l(e,r)}),function(a,r){d(r,!0)
let i=e(r,"equipment",3,0)
const n=(e,a)=>e&&e.find(e=>e.t===N.indexOf(a))
var v=ue(),o=s(v)
{let e=I(()=>n(i(),"Gloves"))
de(o,{class:"med",get item(){return g(e)}})}var m=t(o,2)
{let e=I(()=>n(i(),"Helmet"))
de(m,{class:"med",get item(){return g(e)}})}var c=t(m,2)
{let e=I(()=>n(i(),"Amulet"))
de(c,{class:"sml",get item(){return g(e)}})}var u=t(c,2)
{let e=I(()=>n(i(),"Weapon"))
de(u,{class:"lrg",get item(){return g(e)}})}var p=t(u,2)
{let e=I(()=>n(i(),"Armor"))
de(p,{class:"lrg",get item(){return g(e)}})}var f=t(p,2)
{let e=I(()=>n(i(),"Shield"))
de(f,{class:"lrg",get item(){return g(e)}})}var b=t(f,2)
{let e=I(()=>n(i(),"Ring"))
de(b,{class:"sml",get item(){return g(e)}})}var y=t(b,2)
{let e=I(()=>n(i(),"Boots"))
de(y,{class:"med",get item(){return g(e)}})}var h=t(y,2)
{let e=I(()=>n(i(),"Rune"))
de(h,{class:"sml",get item(){return g(e)}})}l(a,v),j()}(t(c,2),{get equipment(){return g(v)}}),h(f,()=>g(m),e=>u(m,e)),l(a,r)}),l(a,q),j()}c(["change"])
var ye=a("<!> <!>",1)
function he(e){var a=ye(),s=f(a)
ve(s,{}),be(t(s,2),{}),l(e,a)}function je(){if(!k())return
A("arenaTypeTabs")?J():(U(),Q(he,{target:k()}))}export{je as default}
//# sourceMappingURL=arenaJoin-zAZjjmDK.js.map
