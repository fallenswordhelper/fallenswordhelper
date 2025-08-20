import{y as a,A as s,B as e,D as t,F as i,O as r,K as n,P as l,R as o,bi as v,bA as c,ao as m,x as d,H as p,aj as u,I as f,C as g,E as b,bN as y,am as h,L as j,aq as _,aE as w,aD as x,bz as E,aL as S,co as $,$ as I,ae as T,_ as q,cp as M,h as F,bk as L,af as N,l as D,k as H,q as P,g as k,n as A,p as B}from"./calfSystem-UyQ_FKFu.js"
import{i as C}from"./interceptSubmit-ChmNlDoQ.js"
import{v as R,a as U}from"./arena-BzL4b7Rf.js"
import"./legacy-BJNb2DD1.js"
import{a as z}from"./arena-Dt3U6UMb.js"
import{d as K}from"./daLoadInventory-BOvQZ3xF.js"
import{h as O}from"./htmlResult-C3r5PHKK.js"
import"./formToUrl-et7r_Ml7.js"
import"./loadDataTables-Caiou-kV.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-DUT5IcXz.js"
import"./changeMinMax-D7gtO-VK.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-B2WmDuDa.js"
var G=s('<img alt="Flag"/>'),J=s('<div><div class="top svelte-yr50ap"> </div> <div class="bottom svelte-yr50ap"><!></div></div>')
function Q(s,m){let d=a(m,"title",3,""),p=a(m,"flag",3,0)
var u=J(),f=t(u),g=t(f),b=e(f,2),y=t(b),h=a=>{var s=G()
r(a=>o(s,"src",`${v??""}ui/arena/specials_${a??""}.png`),[()=>{return a=p(),String(Number(a))
var a}]),n(a,s)},j=a=>{var s=c()
r(()=>l(s,p())),n(a,s)}
i(y,a=>{"boolean"==typeof p()?a(h):a(j,!1)}),r(()=>l(g,d())),n(s,u)}async function V(a,s,e,t){var i
await(i=f(s),z({subcmd:"usesetup",set_id:i})),p(e,f(t).find(({id:a})=>a===f(s)),!0)}var W=s("<option> </option>"),X=s('<img alt="Move"/>'),Y=s('<div class="ams svelte-l2bu6v"><select class="svelte-l2bu6v"></select></div> <div class="amf svelte-l2bu6v"></div>',1)
function Z(s,i){d(i,!0)
let c=a(i,"res",3,0),m=u(0),_=u(0),w=u(0)
const x=({slots:a})=>a.join()===f(m).slots.join()
p(m,c().current_set,!0),p(w,[...c().sets.some(x)?[]:[f(m)],...c().sets],!0),p(_,f(w).find(x).id,!0)
var E=Y(),S=g(E),$=t(S)
$.__change=[V,_,m,w],b($,21,()=>f(w),({id:a,name:s})=>a,(a,s)=>{let e=()=>f(s).id
var i=W(),o=t(i),v={}
r(()=>{l(o,f(s).name),v!==(v=e())&&(i.value=(i.__value=e())??"")}),n(a,i)})
var I=e(S,2)
b(I,21,()=>f(m).slots,y,(a,s)=>{var e=X()
r(()=>o(e,"src",`${v??""}arena/${f(s)?f(s)-1:"x"}.png`)),n(a,e)}),h($,()=>f(_),a=>p(_,a)),n(s,E),j()}m(["change"])
var aa=s('<div class="ajf svelte-15i8mhg"><!></div>'),sa=s('<div class="ajf svelte-15i8mhg"><!> <!> <!> <!> <!></div> <!>',1),ea=s('<div class="ajf svelte-15i8mhg"><div><p class="svelte-15i8mhg"> </p></div></div>')
function ta(a,s){d(s,!0)
const o=Number(_("pvp_id"))
let v=u(0),c=u(0)
var m=w(),b=g(m)
x(b,async function(){const a=await R()
if(!a.s)throw new Error(a.e.message)
p(v,a.r,!0),p(c,a.r.arenas.find(a=>a.id===o),!0)},null,a=>{var s=sa(),r=g(s),l=t(r)
Q(l,{title:"Players",get flag(){return`${f(c).players.length??""} / ${f(c).max_players??""}`}})
var o=e(l,2)
Q(o,{title:"Specials",get flag(){return f(c).specials}})
var m=e(o,2)
Q(m,{title:"Hell Forge",get flag(){return f(c).hellforge}})
var d=e(m,2)
Q(d,{title:"Epic",get flag(){return f(c).epic}})
var p=e(d,2)
{let a=E(()=>S(f(c).equip_level))
Q(p,{title:"Max Equip Level",get flag(){return f(a)}})}var u=e(r,2),b=a=>{var s=aa()
Z(t(s),{get res(){return f(v)}}),n(a,s)}
i(u,a=>{f(c).specials&&a(b)}),n(a,s)},(a,s)=>{var e=ea(),i=t(e),o=t(i),v=t(o)
r(()=>l(v,f(s).message)),n(a,e)}),n(a,m),j()}function ia(a){return $({subcmd:"usecombatset",combatSetId:a})}async function ra(a){const s=await T({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:a})
return O(s)}async function na(a,s,e,t,i){var r
await(r=f(s),I(ia,ra,r))
const n=await L(window.location.href)
p(e,f(t).find(({id:a})=>a===f(s)).items,!0)
const l=i(N(n)).map(a=>D(a))
i().forEach((a,s)=>H(l[s],a))}var la=s("<option> </option>"),oa=s('<div><div class="innerColumnHeader svelte-wrxyiv"><div class="flex svelte-wrxyiv">Inventory <select class="svelte-wrxyiv"></select></div></div></div>')
function va(a,s){d(s,!0)
let i=u(0),o=u(0),v=u(0)
const c=({a:a})=>f(i).some(({a:s})=>s===a),m=({items:a})=>a.every(c)
const y=a=>F('table[width="300"] b',a).slice(1).map(a=>P("td",a.parentNode.nextElementSibling.children[0]))
var _=w(),E=g(_)
x(E,async function(){const[a,s]=await q([K(),M()])
if(a?.r&&s?.r){p(i,a.r.equipment,!0)
const e=s.r.find(m)
p(v,e?.id??-1,!0),p(o,[...e?[]:[{id:-1,name:"Primary",items:f(i)}],...s.r],!0)}},null,a=>{var s=oa(),c=t(s),m=t(c),d=e(t(m))
d.__change=[na,v,i,o,y],b(d,21,()=>f(o),({id:a,name:s})=>a,(a,s)=>{let e=()=>f(s).id
var i=la(),o=t(i),c={}
r(()=>{i.disabled=-1===e()&&-1!==f(v),l(o,f(s).name),c!==(c=e())&&(i.value=(i.__value=e())??"")}),n(a,i)}),h(d,()=>f(v),a=>p(v,a)),n(a,s)}),n(a,_),j()}m(["change"])
var ca=s("<!> <!>",1)
function ma(a){var s=ca(),t=g(s)
ta(t,{}),va(e(t,2),{}),n(a,s)}function da(){k("arenaTypeTabs")?U():(C(),A(ma,{target:B()}))}export{da as default}
//# sourceMappingURL=arenaJoin-CYxJn--M.js.map
