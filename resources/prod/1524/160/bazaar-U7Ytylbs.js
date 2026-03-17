import{W as s,$ as t,e as a,cp as e,y as i,z as n,al as c,C as r,G as o,N as u,O as m,D as p,F as l,aF as d,K as b,P as h,aN as v,dx as y,bm as f,Q as g,S as k,I as j,ap as $,s as x,n as S,p as z,a4 as G,h as E,q as _,aO as q,t as N,aT as P}from"./calfSystem-HVCiy-VV.js"
import{c as w}from"./closestTable-Cl0v-0VU.js"
import{g as B}from"./getId-CEBzpjjo.js"
function C(t,a){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:a})}async function F(s,t){const i=await a({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:t})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(t),s:!0}:{e:{message:n},s:!1}}var I=r('<button type="button" class="custombutton">Buy</button>'),O=r('<span class="fshSpinner fshSpinner12"></span>'),T=r('<div class="potion svelte-1hjhr0k"><img class="potion-img tip-dynamic svelte-1hjhr0k" alt="Potion"/> <div class="prices svelte-1hjhr0k"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1hjhr0k"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1hjhr0k"><!></div></div>'),Y=r('<div id="bazaar" class="svelte-1hjhr0k"></div>')
function A(s,a){i(a,!0)
let e=n(a,"potions",19,()=>[]),r=c(e())
async function $(s){var a,e
x("bazaar","buyButton"),s.promise=(a=s.id,e=s.count,t(C,F,a,e))
const i=await s.promise
i?.s?S(`You successfully purchased ${s.count} potion${s.count>1?"s":""}`):i?.e&&S(i.e.message)}var z=Y()
o(z,21,()=>r,s=>s.id,(s,t,a)=>{var e=T(),i=l(e),n=p(i,2),c=l(n),r=p(c),o=p(r,2),m=p(o,3),x=p(m),S=p(n,2),z=l(S)
d(z,()=>b(t).promise,s=>{var t=O()
u(s,t)},s=>{var a=I()
a.__click=()=>{$(b(t))},u(s,a)}),h((s,a)=>{y(i,`background: url('${f??""}ui/inventory/2x3.png')`),g(i,"src",b(t).img),g(i,"data-tipped",b(t).fetch),k(c,`${s??""} `),g(r,"src",`${f??""}currency/0.png`),k(m,` = ${a??""} `),g(x,"src",`${f??""}currency/0.png`)},[()=>v(b(t).price),()=>v(b(t).price*b(t).count)]),j(o,()=>b(t).count,s=>b(t).count=s),u(s,e)}),u(s,z),m()}$(["click"])
const D=s=>({p:s,ccy:_('img[src*="/currency/"]',w(s).nextElementSibling)}),H=({p:s,ccy:t})=>({id:Number(B(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:q(P(t.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function K(){if(!z()||G())return
const s=E('a[href*="&subcmd=buyitem&"][onclick]',z())
s.length&&function(s){const t=s.map(D)
if(t.some(({ccy:s})=>!s))return
const a=t.map(H)
N(A,{target:z(),props:{potions:a}}),w(w(s[0]).parentElement).remove()}(s)}export{K as default}
//# sourceMappingURL=bazaar-U7Ytylbs.js.map
