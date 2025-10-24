import{W as s,$ as t,e as a,cp as e,y as i,z as n,al as c,C as r,G as o,N as u,O as m,ap as p,D as l,F as d,aF as b,K as h,Q as v,aN as y,dx as f,bm as g,T as k,R as j,I as $,s as x,n as z,p as G,a4 as S,h as E,q as _,aO as q,t as N,aT as T}from"./calfSystem-CIdPz3EO.js"
import{c as w}from"./closestTable-CLMP9U5y.js"
import{g as B}from"./getId-CEBzpjjo.js"
function C(t,a){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:a})}async function F(s,t){const i=await a({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:t})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(t),s:!0}:{e:{message:n},s:!1}}var I=(s,t,a)=>{t(h(a))},O=r('<button type="button" class="custombutton">Buy</button>'),P=r('<span class="fshSpinner fshSpinner12"></span>'),Y=r('<div class="potion svelte-1hjhr0k"><img class="potion-img tip-dynamic svelte-1hjhr0k" alt="Potion"/> <div class="prices svelte-1hjhr0k"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1hjhr0k"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1hjhr0k"><!></div></div>'),A=r('<div id="bazaar" class="svelte-1hjhr0k"></div>')
function D(s,a){i(a,!0)
let e=n(a,"potions",19,()=>[]),r=c(e())
async function p(s){var a,e
x("bazaar","buyButton"),s.promise=(a=s.id,e=s.count,t(C,F,a,e))
const i=await s.promise
i?.s?z(`You successfully purchased ${s.count} potion${s.count>1?"s":""}`):i?.e&&z(i.e.message)}var G=A()
o(G,21,()=>r,s=>s.id,(s,t,a)=>{var e=Y(),i=d(e),n=l(i,2),c=d(n),r=l(c),o=l(r,2),m=l(o,3),x=l(m),z=l(n,2),G=d(z)
b(G,()=>h(t).promise,s=>{var t=P()
u(s,t)},s=>{var a=O()
a.__click=[I,p,t],u(s,a)}),v((s,a)=>{f(i,`background: url('${g??""}ui/inventory/2x3.png')`),k(i,"src",h(t).img),k(i,"data-tipped",h(t).fetch),j(c,`${s??""} `),k(r,"src",`${g??""}currency/0.png`),j(m,` = ${a??""} `),k(x,"src",`${g??""}currency/0.png`)},[()=>y(h(t).price),()=>y(h(t).price*h(t).count)]),$(o,()=>h(t).count,s=>h(t).count=s),u(s,e)}),u(s,G),m()}p(["click"])
const H=s=>({p:s,ccy:_('img[src*="/currency/"]',w(s).nextElementSibling)}),K=({p:s,ccy:t})=>({id:Number(B(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:q(T(t.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function Q(){if(!G()||S())return
const s=E('a[href*="&subcmd=buyitem&"][onclick]',G())
s.length&&function(s){const t=s.map(H)
if(t.some(({ccy:s})=>!s))return
const a=t.map(K)
N(D,{target:G(),props:{potions:a}}),w(w(s[0]).parentElement).remove()}(s)}export{Q as default}
//# sourceMappingURL=bazaar-CNi01Tcn.js.map
