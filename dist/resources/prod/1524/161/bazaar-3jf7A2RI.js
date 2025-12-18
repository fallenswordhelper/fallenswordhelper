import{W as s,$ as t,e as a,cn as e,y as n,z as i,al as c,C as r,G as o,N as u,O as p,ap as m,D as l,F as d,aF as b,K as h,Q as v,aN as y,dw as f,bn as g,T as k,R as j,I as $,s as x,n as z,p as G,a4 as S,h as E,q as _,aO as q,t as w,aT as I}from"./calfSystem-Cs6CSxoU.js"
import{c as N}from"./closestTable-CWRa1z_C.js"
import{g as T}from"./getId-CEBzpjjo.js"
function B(t,a){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:a})}async function C(s,t){const n=await a({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:t})
if(!n)return{s:!1}
const i=e(n)
return"You purchased the item!"===i?{r:Array(t),s:!0}:{e:{message:i},s:!1}}var F=r('<button type="button" class="custombutton">Buy</button>'),O=r('<span class="fshSpinner fshSpinner12"></span>'),P=r('<div class="potion svelte-1hjhr0k"><img class="potion-img tip-dynamic svelte-1hjhr0k" alt="Potion"/> <div class="prices svelte-1hjhr0k"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1hjhr0k"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1hjhr0k"><!></div></div>'),Y=r('<div id="bazaar" class="svelte-1hjhr0k"></div>')
function A(s,a){n(a,!0)
let e=i(a,"potions",19,()=>[]),r=c(e())
async function m(s){var a,e
x("bazaar","buyButton"),s.promise=(a=s.id,e=s.count,t(B,C,a,e))
const n=await s.promise
n?.s?z(`You successfully purchased ${s.count} potion${s.count>1?"s":""}`):n?.e&&z(n.e.message)}var G=Y()
o(G,21,()=>r,s=>s.id,(s,t,a)=>{var e=P(),n=d(e),i=l(n,2),c=d(i),r=l(c),o=l(r,2),p=l(o,3),x=l(p),z=l(i,2),G=d(z)
b(G,()=>h(t).promise,s=>{var t=O()
u(s,t)},s=>{var a=F()
a.__click=()=>{m(h(t))},u(s,a)}),v((s,a)=>{f(n,`background: url('${g??""}ui/inventory/2x3.png')`),k(n,"src",h(t).img),k(n,"data-tipped",h(t).fetch),j(c,`${s??""} `),k(r,"src",`${g??""}currency/0.png`),j(p,` = ${a??""} `),k(x,"src",`${g??""}currency/0.png`)},[()=>y(h(t).price),()=>y(h(t).price*h(t).count)]),$(o,()=>h(t).count,s=>h(t).count=s),u(s,e)}),u(s,G),p()}m(["click"])
const D=s=>({p:s,ccy:_('img[src*="/currency/"]',N(s).nextElementSibling)}),K=({p:s,ccy:t})=>({id:Number(T(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:q(I(t.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function Q(){if(!G()||S())return
const s=E('a[href*="&subcmd=buyitem&"][onclick]',G())
s.length&&function(s){const t=s.map(D)
if(t.some(({ccy:s})=>!s))return
const a=t.map(K)
w(A,{target:G(),props:{potions:a}}),N(N(s[0]).parentElement).remove()}(s)}export{Q as default}
//# sourceMappingURL=bazaar-3jf7A2RI.js.map
