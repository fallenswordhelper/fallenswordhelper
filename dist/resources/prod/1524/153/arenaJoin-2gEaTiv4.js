import{y as a,A as s,B as e,D as t,F as r,O as i,K as l,P as v,R as n,bi as o,bA as p,ao as c,x as m,H as g,aj as d,I as u,C as f,E as j,bN as b,am as y,L as h,aq as _,aE as x,aD as T,bz as $,aL as E,g as w,n as L,p as M}from"./calfSystem-CT1aM4VG.js"
import{i as S}from"./interceptSubmit-D7kELBzE.js"
import{v as q,a as D}from"./arena-DKm2UsxC.js"
import"./legacy-BQk1-_ZQ.js"
import{a as F}from"./arena-w95m6bkL.js"
import"./formToUrl-zF_XLEy1.js"
import"./loadDataTables-Ijv1_QQZ.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-DQGH0k0Y.js"
import"./changeMinMax-UAomEUD8.js"
import"./setTipped-_gKWzwad.js"
var N=s('<img alt="Flag"/>'),A=s('<div><div class="top svelte-yr50ap"> </div> <div class="bottom svelte-yr50ap"><!></div></div>')
function H(s,c){let m=a(c,"title",3,""),g=a(c,"flag",3,0)
var d=A(),u=t(d),f=t(u),j=e(u,2),b=t(j),y=a=>{var s=N()
i((a=>n(s,"src",`${o??""}ui/arena/specials_${a??""}.png`)),[()=>{return a=g(),String(Number(a))
var a}]),l(a,s)},h=a=>{var s=p()
i((()=>v(s,g()))),l(a,s)}
r(b,(a=>{"boolean"==typeof g()?a(y):a(h,!1)})),i((()=>v(f,m()))),l(s,d)}async function P(a,s,e,t){var r
await(r=u(s),F({subcmd:"usesetup",set_id:r})),g(e,u(t).find((({id:a})=>a===u(s))),!0)}var z=s("<option> </option>"),B=s('<img alt="Move"/>'),C=s('<div class="ams svelte-l2bu6v"><select class="svelte-l2bu6v"></select></div> <div class="amf svelte-l2bu6v"></div>',1)
function I(s,r){m(r,!0)
let p=a(r,"res",3,0),c=d(0),_=d(0),x=d(0)
const T=({slots:a})=>a.join()===u(c).slots.join()
g(c,p().current_set,!0),g(x,[...p().sets.some(T)?[]:[u(c)],...p().sets],!0),g(_,u(x).find(T).id,!0)
var $=C(),E=f($),w=t(E)
w.__change=[P,_,c,x],j(w,21,(()=>u(x)),(({id:a,name:s})=>a),((a,s)=>{let e=()=>u(s).id
var r=z(),n=t(r),o={}
i((()=>{v(n,u(s).name),o!==(o=e())&&(r.value=(r.__value=e())??"")})),l(a,r)}))
var L=e(E,2)
j(L,21,(()=>u(c).slots),b,((a,s)=>{var e=B()
i((()=>n(e,"src",`${o??""}arena/${u(s)?u(s)-1:"x"}.png`))),l(a,e)})),y(w,(()=>u(_)),(a=>g(_,a))),l(s,$),h()}c(["change"])
var K=s('<div class="ajf svelte-15i8mhg"><!></div>'),O=s('<div class="ajf svelte-15i8mhg"><!> <!> <!> <!> <!></div> <!>',1),R=s('<div class="ajf svelte-15i8mhg"><div><p class="svelte-15i8mhg"> </p></div></div>')
function U(a,s){m(s,!0)
const n=Number(_("pvp_id"))
let o=d(0),p=d(0)
var c=x(),j=f(c)
T(j,(async function(){const a=await q()
if(!a.s)throw new Error(a.e.message)
g(o,a.r,!0),g(p,a.r.arenas.find((a=>a.id===n)),!0)}),null,(a=>{var s=O(),i=f(s),v=t(i)
H(v,{title:"Players",get flag(){return`${u(p).players.length??""} / ${u(p).max_players??""}`}})
var n=e(v,2)
H(n,{title:"Specials",get flag(){return u(p).specials}})
var c=e(n,2)
H(c,{title:"Hell Forge",get flag(){return u(p).hellforge}})
var m=e(c,2)
H(m,{title:"Epic",get flag(){return u(p).epic}})
var g=e(m,2)
{let a=$((()=>E(u(p).equip_level)))
H(g,{title:"Max Equip Level",get flag(){return u(a)}})}var d=e(i,2),j=a=>{var s=K()
I(t(s),{get res(){return u(o)}}),l(a,s)}
r(d,(a=>{u(p).specials&&a(j)})),l(a,s)}),((a,s)=>{var e=R(),r=t(e),n=t(r),o=t(n)
i((()=>v(o,u(s).message))),l(a,e)})),l(a,c),h()}function k(a){U(a,{})}function G(){w("arenaTypeTabs")?D():(S(),L(k,{target:M()}))}export{G as default}
//# sourceMappingURL=arenaJoin-2gEaTiv4.js.map
