import{W as s,$ as a,j as t,cl as e,z as i,A as n,am as c,C as r,G as o,N as u,O as m,aq as l,D as p,F as d,aF as f,K as b,Q as v,aN as y,dL as g,bh as h,T as z,R as w,I as $,s as j,t as k,p as x,a4 as E,k as G,q as S,ct as q,u as _,aP as N}from"./calfSystem-BlPuMQGT.js"
import{c as P}from"./closestTable-gY6pXvyq.js"
import{g as A}from"./getId-CEBzpjjo.js"
function B(a,t){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:t})}async function C(s,a){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:a})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(a),s:!0}:{e:{message:n},s:!1}}var F=(s,a,t)=>{a(b(t))},I=r('<button type="button" class="custombutton">Buy</button>'),T=r('<span class="fshSpinner fshSpinner12"></span>'),Y=r('<div class="potion svelte-1wzausf"><img class="potion-img tip-dynamic svelte-1wzausf" alt="Potion"/> <div class="prices svelte-1wzausf"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1wzausf"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1wzausf"><!></div></div>'),D=r('<div id="bazaar" class="svelte-1wzausf"></div>')
function K(s,t){i(t,!0)
let e=n(t,"potions",19,(()=>[])),r=c(e())
async function l(s){var t,e
j("bazaar","buyButton"),s.promise=(t=s.id,e=s.count,a(B,C,t,e))
const i=await s.promise
i?.s?k(`You successfully purchased ${s.count} "${i.r[0].n}"`):i?.e&&k(i.e.message)}var x=D()
o(x,21,(()=>r),(s=>s.id),((s,a,t)=>{var e=Y(),i=d(e),n=p(i,2),c=d(n),r=p(c),o=p(r,2),m=p(o,3),j=p(m),k=p(n,2),x=d(k)
f(x,(()=>b(a).promise),(s=>{var a=T()
u(s,a)}),(s=>{var t=I()
t.__click=[F,l,a],u(s,t)})),v(((s,t)=>{g(i,`background: url('${h??""}ui/inventory/2x3.png')`),z(i,"src",b(a).img),z(i,"data-tipped",b(a).fetch),w(c,`${s??""} `),z(r,"src",`${h??""}currency/0.png`),w(m,` = ${t??""} `),z(j,"src",`${h??""}currency/0.png`)}),[()=>y(b(a).price),()=>y(b(a).price*b(a).count)]),$(o,(()=>b(a).count),(s=>b(a).count=s)),u(s,e)})),u(s,x),m()}l(["click"])
const L=s=>({p:s,ccy:S('img[src*="/currency/"]',P(s).nextElementSibling)}),O=({p:s,ccy:a})=>({id:Number(A(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:q(N(a.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function Q(){if(!x()||E())return
const s=G('a[href*="&subcmd=buyitem&"][onclick]',x())
s.length&&function(s){const a=s.map(L)
if(a.some((({ccy:s})=>!s)))return
const t=a.map(O)
_(K,{target:x(),props:{potions:t}}),P(P(s[0]).parentElement).remove()}(s)}export{Q as default}
//# sourceMappingURL=bazaar-cPEaQcSj.js.map
