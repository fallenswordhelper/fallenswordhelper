import{U as s,$ as a,e as t,cm as e,x as i,y as n,ak as c,A as r,E as o,K as u,L as m,ao as p,B as l,D as d,aD as f,I as b,O as v,aL as y,dH as g,bi as h,R as z,P as w,G as $,s as k,m as x,p as E,a2 as G,h as S,q as _,aM as j,n as q,aR as B}from"./calfSystem-CT1aM4VG.js"
import{c as P}from"./closestTable-C24mp168.js"
import{g as A}from"./getId-CEBzpjjo.js"
function D(a,t){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:t})}async function I(s,a){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:a})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(a),s:!0}:{e:{message:n},s:!1}}var L=(s,a,t)=>{a(b(t))},R=r('<button type="button" class="custombutton">Buy</button>'),Y=r('<span class="fshSpinner fshSpinner12"></span>'),C=r('<div class="potion svelte-1wzausf"><img class="potion-img tip-dynamic svelte-1wzausf" alt="Potion"/> <div class="prices svelte-1wzausf"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1wzausf"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1wzausf"><!></div></div>'),F=r('<div id="bazaar" class="svelte-1wzausf"></div>')
function H(s,t){i(t,!0)
let e=n(t,"potions",19,(()=>[])),r=c(e())
async function p(s){var t,e
k("bazaar","buyButton"),s.promise=(t=s.id,e=s.count,a(D,I,t,e))
const i=await s.promise
i?.s?x(`You successfully purchased ${s.count} "${i.r[0].n}"`):i?.e&&x(i.e.message)}var E=F()
o(E,21,(()=>r),(s=>s.id),((s,a,t)=>{var e=C(),i=d(e),n=l(i,2),c=d(n),r=l(c),o=l(r,2),m=l(o,3),k=l(m),x=l(n,2),E=d(x)
f(E,(()=>b(a).promise),(s=>{var a=Y()
u(s,a)}),(s=>{var t=R()
t.__click=[L,p,a],u(s,t)})),v(((s,t)=>{g(i,`background: url('${h??""}ui/inventory/2x3.png')`),z(i,"src",b(a).img),z(i,"data-tipped",b(a).fetch),w(c,`${s??""} `),z(r,"src",`${h??""}currency/0.png`),w(m,` = ${t??""} `),z(k,"src",`${h??""}currency/0.png`)}),[()=>y(b(a).price),()=>y(b(a).price*b(a).count)]),$(o,(()=>b(a).count),(s=>b(a).count=s)),u(s,e)})),u(s,E),m()}p(["click"])
const K=s=>({p:s,ccy:_('img[src*="/currency/"]',P(s).nextElementSibling)}),M=({p:s,ccy:a})=>({id:Number(A(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:j(B(a.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function N(){if(!E()||G())return
const s=S('a[href*="&subcmd=buyitem&"][onclick]',E())
s.length&&function(s){const a=s.map(K)
if(a.some((({ccy:s})=>!s)))return
const t=a.map(M)
q(H,{target:E(),props:{potions:t}}),P(P(s[0]).parentElement).remove()}(s)}export{N as default}
//# sourceMappingURL=bazaar-tBNAU_ze.js.map
