import{V as s,$ as t,e as a,co as e,x as i,y as n,ak as c,B as r,F as o,L as u,N as m,ao as p,C as l,E as d,aE as b,J as h,P as v,aM as y,dw as f,bk as g,S as k,Q as j,H as $,s as S,m as x,p as E,a3 as G,h as z,q as _,aN as q,n as w,aS as B}from"./calfSystem-CIuUjh4H.js"
import{c as N}from"./closestTable-CAaKFM8t.js"
import{g as P}from"./getId-CEBzpjjo.js"
function C(t,a){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:a})}async function Y(s,t){const i=await a({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:t})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(t),s:!0}:{e:{message:n},s:!1}}var A=(s,t,a)=>{t(h(a))},F=r('<button type="button" class="custombutton">Buy</button>'),H=r('<span class="fshSpinner fshSpinner12"></span>'),I=r('<div class="potion svelte-1hjhr0k"><img class="potion-img tip-dynamic svelte-1hjhr0k" alt="Potion"/> <div class="prices svelte-1hjhr0k"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1hjhr0k"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1hjhr0k"><!></div></div>'),J=r('<div id="bazaar" class="svelte-1hjhr0k"></div>')
function L(s,a){i(a,!0)
let e=n(a,"potions",19,()=>[]),r=c(e())
async function p(s){var a,e
S("bazaar","buyButton"),s.promise=(a=s.id,e=s.count,t(C,Y,a,e))
const i=await s.promise
i?.s?x(`You successfully purchased ${s.count} potion${s.count>1?"s":""}`):i?.e&&x(i.e.message)}var E=J()
o(E,21,()=>r,s=>s.id,(s,t,a)=>{var e=I(),i=d(e),n=l(i,2),c=d(n),r=l(c),o=l(r,2),m=l(o,3),S=l(m),x=l(n,2),E=d(x)
b(E,()=>h(t).promise,s=>{var t=H()
u(s,t)},s=>{var a=F()
a.__click=[A,p,t],u(s,a)}),v((s,a)=>{f(i,`background: url('${g??""}ui/inventory/2x3.png')`),k(i,"src",h(t).img),k(i,"data-tipped",h(t).fetch),j(c,`${s??""} `),k(r,"src",`${g??""}currency/0.png`),j(m,` = ${a??""} `),k(S,"src",`${g??""}currency/0.png`)},[()=>y(h(t).price),()=>y(h(t).price*h(t).count)]),$(o,()=>h(t).count,s=>h(t).count=s),u(s,e)}),u(s,E),m()}p(["click"])
const M=s=>({p:s,ccy:_('img[src*="/currency/"]',N(s).nextElementSibling)}),Q=({p:s,ccy:t})=>({id:Number(P(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:q(B(t.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function T(){if(!E()||G())return
const s=z('a[href*="&subcmd=buyitem&"][onclick]',E())
s.length&&function(s){const t=s.map(M)
if(t.some(({ccy:s})=>!s))return
const a=t.map(Q)
w(L,{target:E(),props:{potions:a}}),N(N(s[0]).parentElement).remove()}(s)}export{T as default}
//# sourceMappingURL=bazaar-Dn0gjiIb.js.map
