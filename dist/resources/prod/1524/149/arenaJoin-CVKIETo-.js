import{bE as a,X as s,Y as e,Z as t,a0 as r,a7 as i,a3 as n,a8 as l,br as o,b8 as c,bq as v,a6 as m,R as d,S as u,W as g,V as p,au as f,_ as b,a1 as j,a4 as h,bH as y,ac as _,at as w,as as x,bp as S,aB as q,cg as $,$ as E,M as I,bw as T,ch as M,ci as H,x as N,d as R,cj as B,n as F,ba as A,N as P,aa as U,ab as W,q as Z,g as z,ad as C,p as D}from"./calfSystem-BGW9cdWN.js"
import{i as G}from"./interceptSubmit-CcvGNLGd.js"
import{v as L,a as O}from"./arena-DGXfl4Eb.js"
import"./legacy-vY5CN2wW.js"
import{a as V}from"./arena-R70npqlC.js"
import{h as X}from"./htmlResult-CAxknWPj.js"
import{I as Y}from"./ItemImg-BWi7039S.js"
import"./formToUrl-BkW6Pnxi.js"
import"./loadDataTables-Bs0m668o.js"
import"./assets-DPlwo2nm.js"
import"./lvlTests-Bxc5Zc0a.js"
import"./changeMinMax-DWgKtd6E.js"
import"./setTipped-_gKWzwad.js"
import"./InfoBoxFrom-C9V8YYki.js"
var k=s('<img alt="Flag">'),J=s('<div><div class="top svelte-yr50ap"> </div> <div class="bottom svelte-yr50ap"><!></div></div>')
function K(s,m){let d=a(m,"title",3,""),u=a(m,"flag",3,0)
var g=J(),p=t(g),f=t(p),b=e(p,2),j=t(b),h=a=>{var s=k()
i((a=>o(s,"src",`${c??""}ui/arena/specials_${a??""}.png`)),[()=>{return a=u(),String(Number(a))
var a}]),n(a,s)},y=a=>{var s=v()
i((()=>l(s,u()))),n(a,s)}
r(j,(a=>{"boolean"==typeof u()?a(h):a(y,!1)})),i((()=>l(f,d()))),n(s,g)}async function Q(a,s,e,t){var r
await(r=p(s),V({subcmd:"usesetup",set_id:r})),g(e,p(t).find((({id:a})=>a===p(s))),!0)}var aa=s("<option> </option>"),sa=s('<img alt="Move">'),ea=s('<div class="ams svelte-l2bu6v"><select class="svelte-l2bu6v"></select></div> <div class="amf svelte-l2bu6v"></div>',1)
function ta(s,r){d(r,!0)
let v=a(r,"res",3,0),m=u(0),_=u(0),w=u(0)
const x=({slots:a})=>a.join()===p(m).slots.join()
g(m,v().current_set,!0),g(w,[...v().sets.some(x)?[]:[p(m)],...v().sets],!0),g(_,p(w).find(x).id,!0)
var S=ea(),q=f(S),$=t(q)
$.__change=[Q,_,m,w],b($,21,(()=>p(w)),(({id:a,name:s})=>a),((a,s)=>{let e=()=>p(s).id
var r=aa(),o={},c=t(r)
i((()=>{o!==(o=e())&&(r.value=null==(r.__value=e())?"":e()),l(c,p(s).name)})),n(a,r)}))
var E=e(q,2)
b(E,21,(()=>p(m).slots),y,((a,s)=>{var e=sa()
i((()=>o(e,"src",`${c??""}arena/${(p(s)?p(s)-1:"x")??""}.png`))),n(a,e)})),j($,(()=>p(_)),(a=>g(_,a))),n(s,S),h()}m(["change"])
var ra=s('<div class="ajf svelte-15i8mhg"><!></div>'),ia=s('<div class="ajf svelte-15i8mhg"><!> <!> <!> <!> <!></div> <!>',1),na=s('<div class="ajf svelte-15i8mhg"><div><p class="svelte-15i8mhg"> </p></div></div>')
function la(a,s){d(s,!0)
const o=Number(_("pvp_id"))
let c=u(0),v=u(0)
var m=w(),b=f(m)
x(b,(async function(){const a=await L()
if(!a.s)throw new Error(a.e.message)
g(c,a.r,!0),g(v,a.r.arenas.find((a=>a.id===o)),!0)}),null,(a=>{var s=ia(),i=f(s),l=t(i)
K(l,{title:"Players",get flag(){return`${p(v).players.length??""} / ${p(v).max_players??""}`}})
var o=e(l,2)
K(o,{title:"Specials",get flag(){return p(v).specials}})
var m=e(o,2)
K(m,{title:"Hell Forge",get flag(){return p(v).hellforge}})
var d=e(m,2)
K(d,{title:"Epic",get flag(){return p(v).epic}})
var u=e(d,2)
const g=S((()=>q(p(v).equip_level)))
K(u,{title:"Max Equip Level",get flag(){return p(g)}})
var b=e(i,2),j=a=>{var s=ra()
ta(t(s),{get res(){return p(c)}}),n(a,s)}
r(b,(a=>{p(v).specials&&a(j)})),n(a,s)}),((a,s)=>{var e=na(),r=t(e),o=t(r),c=t(o)
i((()=>l(c,p(s).message))),n(a,e)})),n(a,m),h()}function oa(a){return $({subcmd:"usecombatset",combatSetId:a})}async function ca(a){const s=await I({cmd:"profile",subcmd:"managecombatset",submit:"Use",combatSetId:a})
return X(s)}var va=s("<div><!></div>")
function ma(s,e){let l=a(e,"class",3,""),o=a(e,"item",3,0)
var c=va(),v=t(c),m=a=>{Y(a,{get item(){return o()},t:"1"})}
r(v,(a=>{o()&&a(m)})),i((()=>T(c,1,M(l()),"svelte-dyrqj"))),n(s,c)}var da=s('<div class="grid svelte-630zmj"><!> <!> <!> <!> <!> <!> <!> <!> <!></div>')
async function ua(a,s,e,t,r){var i
await(i=p(s),E(oa,ca,i))
const n=await A(window.location.href)
g(e,p(t).find((({id:a})=>a===p(s))).items,!0)
const l=r(P(n)).map((a=>U(a)))
r().forEach(((a,s)=>W(l[s],a)))}var ga=s("<option> </option>"),pa=s('<div><div class="innerColumnHeader svelte-wrxyiv"><div class="flex svelte-wrxyiv">Inventory <select class="svelte-wrxyiv"></select></div></div> <!></div>')
function fa(s,r){d(r,!0)
let o=u(0),c=u(0),v=u(0)
const m=({a:a})=>p(o).some((({a:s})=>s===a)),y=({items:a})=>a.every(m)
const _=a=>F('table[width="300"] b',a).slice(1).map((a=>Z("td",a.parentNode.nextElementSibling.children[0])))
var q=w(),$=f(q)
x($,(async function(){const[a,s]=await N([R(),B()])
if(a?.r&&s?.r){g(o,a.r.equipment,!0)
const e=s.r.find(y)
g(v,e?.id??-1,!0),g(c,[...e?[]:[{id:-1,name:"Primary",items:p(o)}],...s.r],!0)}}),null,(s=>{var r=pa(),m=t(r),u=t(m),f=e(t(u))
f.__change=[ua,v,o,c,_],b(f,21,(()=>p(c)),(({id:a,name:s})=>a),((a,s)=>{let e=()=>p(s).id
var r=ga(),o={},c=t(r)
i((()=>{o!==(o=e())&&(r.value=null==(r.__value=e())?"":e()),l(c,p(s).name)})),n(a,r)})),function(s,r){d(r,!0)
let i=a(r,"equipment",3,0)
const l=(a,s)=>a&&a.find((a=>a.t===H.indexOf(s)))
var o=da(),c=t(o)
const v=S((()=>l(i(),"Gloves")))
ma(c,{class:"med",get item(){return p(v)}})
var m=e(c,2)
const u=S((()=>l(i(),"Helmet")))
ma(m,{class:"med",get item(){return p(u)}})
var g=e(m,2)
const f=S((()=>l(i(),"Amulet")))
ma(g,{class:"sml",get item(){return p(f)}})
var b=e(g,2)
const j=S((()=>l(i(),"Weapon")))
ma(b,{class:"lrg",get item(){return p(j)}})
var y=e(b,2)
const _=S((()=>l(i(),"Armor")))
ma(y,{class:"lrg",get item(){return p(_)}})
var w=e(y,2)
const x=S((()=>l(i(),"Shield")))
ma(w,{class:"lrg",get item(){return p(x)}})
var q=e(w,2)
const $=S((()=>l(i(),"Ring")))
ma(q,{class:"sml",get item(){return p($)}})
var E=e(q,2)
const I=S((()=>l(i(),"Boots")))
ma(E,{class:"med",get item(){return p(I)}})
var T=e(E,2)
const M=S((()=>l(i(),"Rune")))
ma(T,{class:"sml",get item(){return p(M)}}),n(s,o),h()}(e(m,2),{get equipment(){return p(o)}}),j(f,(()=>p(v)),(a=>g(v,a))),n(s,r)})),n(s,q),h()}m(["change"])
var ba=s("<!> <!>",1)
function ja(a){var s=ba(),t=f(s)
la(t,{}),fa(e(t,2),{}),n(a,s)}function ha(){z("arenaTypeTabs")?O():(G(),C(ja,{target:D()}))}export{ha as default}
//# sourceMappingURL=arenaJoin-CVKIETo-.js.map
