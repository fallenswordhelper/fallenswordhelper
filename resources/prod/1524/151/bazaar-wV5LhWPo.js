import{W as s,$ as a,j as t,co as e,z as i,A as n,am as c,C as r,G as o,N as u,O as m,aq as p,D as l,F as d,aF as f,K as b,Q as v,aN as y,dN as g,bk as h,T as z,R as w,I as $,s as k,t as j,p as x,a4 as E,k as G,q as S,aO as q,u as N,aT as _}from"./calfSystem-C1X5YxJZ.js"
import{c as T}from"./closestTable-STrxtv_E.js"
import{g as A}from"./getId-CEBzpjjo.js"
function B(a,t){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:t})}async function C(s,a){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:a})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(a),s:!0}:{e:{message:n},s:!1}}var F=(s,a,t)=>{a(b(t))},I=r('<button type="button" class="custombutton">Buy</button>'),O=r('<span class="fshSpinner fshSpinner12"></span>'),P=r('<div class="potion svelte-1wzausf"><img class="potion-img tip-dynamic svelte-1wzausf" alt="Potion"/> <div class="prices svelte-1wzausf"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1wzausf"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1wzausf"><!></div></div>'),Y=r('<div id="bazaar" class="svelte-1wzausf"></div>')
function D(s,t){i(t,!0)
let e=n(t,"potions",19,(()=>[])),r=c(e())
async function p(s){var t,e
k("bazaar","buyButton"),s.promise=(t=s.id,e=s.count,a(B,C,t,e))
const i=await s.promise
i?.s?j(`You successfully purchased ${s.count} "${i.r[0].n}"`):i?.e&&j(i.e.message)}var x=Y()
o(x,21,(()=>r),(s=>s.id),((s,a,t)=>{var e=P(),i=d(e),n=l(i,2),c=d(n),r=l(c),o=l(r,2),m=l(o,3),k=l(m),j=l(n,2),x=d(j)
f(x,(()=>b(a).promise),(s=>{var a=O()
u(s,a)}),(s=>{var t=I()
t.__click=[F,p,a],u(s,t)})),v(((s,t)=>{g(i,`background: url('${h??""}ui/inventory/2x3.png')`),z(i,"src",b(a).img),z(i,"data-tipped",b(a).fetch),w(c,`${s??""} `),z(r,"src",`${h??""}currency/0.png`),w(m,` = ${t??""} `),z(k,"src",`${h??""}currency/0.png`)}),[()=>y(b(a).price),()=>y(b(a).price*b(a).count)]),$(o,(()=>b(a).count),(s=>b(a).count=s)),u(s,e)})),u(s,x),m()}p(["click"])
const K=s=>({p:s,ccy:S('img[src*="/currency/"]',T(s).nextElementSibling)}),Q=({p:s,ccy:a})=>({id:Number(A(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:q(_(a.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function R(){if(!x()||E())return
const s=G('a[href*="&subcmd=buyitem&"][onclick]',x())
s.length&&function(s){const a=s.map(K)
if(a.some((({ccy:s})=>!s)))return
const t=a.map(Q)
N(D,{target:x(),props:{potions:t}}),T(T(s[0]).parentElement).remove()}(s)}export{R as default}
//# sourceMappingURL=bazaar-wV5LhWPo.js.map
