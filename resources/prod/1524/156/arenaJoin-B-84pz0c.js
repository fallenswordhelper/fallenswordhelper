import{y as a,B as s,C as e,E as t,G as i,P as r,L as n,Q as l,S as o,bj as v,bB as c,ap as m,x as d,I as p,ak as u,J as f,D as g,F as b,bO as y,an as h,N as j,ar as w,aF as _,aE as x,bA as S,aM as E,cp as I,$,af as T,a0 as q,cq as F,h as M,bl as N,ag as B,l as L,k as P,q as k,p as C,g as D,n as H}from"./calfSystem-79LsojAC.js"
import{i as U}from"./interceptSubmit-c1dihHnz.js"
import{v as A,a as G}from"./arena-Bwi8MXnK.js"
import{a as J}from"./arena-CNwpmiE0.js"
import{d as O}from"./daLoadInventory-DZfMiDnc.js"
import{h as Q}from"./htmlResult-VfRQZiiv.js"
import"./formToUrl-CqnZfaJL.js"
import"./loadDataTables-VTwwaj33.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-CmrBffHL.js"
import"./changeMinMax-BVdV3Et0.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-Du-lP_up.js"
var R=s('<img alt="Flag"/>'),z=s('<div><div class="top svelte-yr50ap"> </div> <div class="bottom svelte-yr50ap"><!></div></div>')
function K(s,m){let d=a(m,"title",3,""),p=a(m,"flag",3,0)
var u=z(),f=t(u),g=t(f),b=e(f,2),y=t(b),h=a=>{var s=R()
r(a=>o(s,"src",`${v??""}ui/arena/specials_${a??""}.png`),[()=>{return a=p(),String(Number(a))
var a}]),n(a,s)},j=a=>{var s=c()
r(()=>l(s,p())),n(a,s)}
i(y,a=>{"boolean"==typeof p()?a(h):a(j,!1)}),r(()=>l(g,d())),n(s,u)}async function V(a,s,e,t){var i
await(i=f(s),J({subcmd:"usesetup",set_id:i})),p(e,f(t).find(({id:a})=>a===f(s)),!0)}var W=s("<option> </option>"),X=s('<img alt="Move"/>'),Y=s('<div class="ams svelte-l2bu6v"><select class="svelte-l2bu6v"></select></div> <div class="amf svelte-l2bu6v"></div>',1)
function Z(s,i){d(i,!0)
let c=a(i,"res",3,0),m=u(0),w=u(0),_=u(0)
const x=({slots:a})=>a.join()===f(m).slots.join()
p(m,c().current_set,!0),p(_,[...c().sets.some(x)?[]:[f(m)],...c().sets],!0),p(w,f(_).find(x).id,!0)
var S=Y(),E=g(S),I=t(E)
I.__change=[V,w,m,_],b(I,21,()=>f(_),({id:a,name:s})=>a,(a,s)=>{let e=()=>f(s).id
var i=W(),o=t(i),v={}
r(()=>{l(o,f(s).name),v!==(v=e())&&(i.value=(i.__value=e())??"")}),n(a,i)})
var $=e(E,2)
b($,21,()=>f(m).slots,y,(a,s)=>{var e=X()
r(()=>o(e,"src",`${v??""}arena/${f(s)?f(s)-1:"x"}.png`)),n(a,e)}),h(I,()=>f(w),a=>p(w,a)),n(s,S),j()}m(["change"])
var aa=s('<div class="ajf svelte-15i8mhg"><!></div>'),sa=s('<div class="ajf svelte-15i8mhg"><!> <!> <!> <!> <!></div> <!>',1),ea=s('<div class="ajf svelte-15i8mhg"><div><p class="svelte-15i8mhg"> </p></div></div>')
function ta(a,s){d(s,!0)
const o=Number(w("pvp_id"))
let v=u(0),c=u(0)
var m=_(),b=g(m)
x(b,async function(){const a=await A()
if(!a.s)throw new Error(a.e.message)
p(v,a.r,!0),p(c,a.r.arenas.find(a=>a.id===o),!0)},null,a=>{var s=sa(),r=g(s),l=t(r)
K(l,{title:"Players",get flag(){return`${f(c).players.length??""} / ${f(c).max_players??""}`}})
var o=e(l,2)
K(o,{title:"Specials",get flag(){return f(c).specials}})
var m=e(o,2)
K(m,{title:"Hell Forge",get flag(){return f(c).hellforge}})
var d=e(m,2)
K(d,{title:"Epic",get flag(){return f(c).epic}})
var p=e(d,2)
{let a=S(()=>E(f(c).equip_level))
K(p,{title:"Max Equip Level",get flag(){return f(a)}})}var u=e(r,2),b=a=>{var s=aa()
Z(t(s),{get res(){return f(v)}}),n(a,s)}
i(u,a=>{f(c).specials&&a(b)}),n(a,s)},(a,s)=>{var e=ea(),i=t(e),o=t(i),v=t(o)
r(()=>l(v,f(s).message)),n(a,e)}),n(a,m),j()}function ia(a){return I({subcmd:"usecombatset",combatSetId:a})}async function ra(a){const s=await T({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:a})
return Q(s)}async function na(a,s,e,t,i){var r
await(r=f(s),$(ia,ra,r))
const n=await N(window.location.href)
p(e,f(t).find(({id:a})=>a===f(s)).items,!0)
const l=i(B(n)).map(a=>L(a))
i().forEach((a,s)=>P(l[s],a))}var la=s("<option> </option>"),oa=s('<div><div class="innerColumnHeader svelte-wrxyiv"><div class="flex svelte-wrxyiv">Inventory <select class="svelte-wrxyiv"></select></div></div></div>')
function va(a,s){d(s,!0)
let i=u(0),o=u(0),v=u(0)
const c=({a:a})=>f(i).some(({a:s})=>s===a),m=({items:a})=>a.every(c)
const y=a=>M('table[width="300"] b',a).slice(1).map(a=>k("td",a.parentNode.nextElementSibling.children[0]))
var w=_(),S=g(w)
x(S,async function(){const[a,s]=await q([O(),F()])
if(a?.r&&s?.r){p(i,a.r.equipment,!0)
const e=s.r.find(m)
p(v,e?.id??-1,!0),p(o,[...e?[]:[{id:-1,name:"Primary",items:f(i)}],...s.r],!0)}},null,a=>{var s=oa(),c=t(s),m=t(c),d=e(t(m))
d.__change=[na,v,i,o,y],b(d,21,()=>f(o),({id:a,name:s})=>a,(a,s)=>{let e=()=>f(s).id
var i=la(),o=t(i),c={}
r(()=>{i.disabled=-1===e()&&-1!==f(v),l(o,f(s).name),c!==(c=e())&&(i.value=(i.__value=e())??"")}),n(a,i)}),h(d,()=>f(v),a=>p(v,a)),n(a,s)}),n(a,w),j()}m(["change"])
var ca=s("<!> <!>",1)
function ma(a){var s=ca(),t=g(s)
ta(t,{}),va(e(t,2),{}),n(a,s)}function da(){if(!C())return
D("arenaTypeTabs")?G():(U(),H(ma,{target:C()}))}export{da as default}
//# sourceMappingURL=arenaJoin-B-84pz0c.js.map
