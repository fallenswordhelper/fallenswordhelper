import{V as s,$ as a,e as t,cn as e,x as i,y as n,al as c,B as r,F as o,L as u,N as m,ap as p,C as l,E as d,aE as f,J as b,P as v,aM as y,dB as g,bj as h,S as z,Q as w,H as $,s as S,m as x,p as E,a3 as k,h as j,q as B,aN as G,n as _,aS as q}from"./calfSystem-79LsojAC.js"
import{c as C}from"./closestTable-BuyyntoH.js"
import{g as N}from"./getId-CEBzpjjo.js"
function P(a,t){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:t})}async function Y(s,a){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:a})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(a),s:!0}:{e:{message:n},s:!1}}var A=(s,a,t)=>{a(b(t))},F=r('<button type="button" class="custombutton">Buy</button>'),H=r('<span class="fshSpinner fshSpinner12"></span>'),I=r('<div class="potion svelte-1wzausf"><img class="potion-img tip-dynamic svelte-1wzausf" alt="Potion"/> <div class="prices svelte-1wzausf"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1wzausf"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1wzausf"><!></div></div>'),J=r('<div id="bazaar" class="svelte-1wzausf"></div>')
function L(s,t){i(t,!0)
let e=n(t,"potions",19,()=>[]),r=c(e())
async function p(s){var t,e
S("bazaar","buyButton"),s.promise=(t=s.id,e=s.count,a(P,Y,t,e))
const i=await s.promise
i?.s?x(`You successfully purchased ${s.count} potion${s.count>1?"s":""}`):i?.e&&x(i.e.message)}var E=J()
o(E,21,()=>r,s=>s.id,(s,a,t)=>{var e=I(),i=d(e),n=l(i,2),c=d(n),r=l(c),o=l(r,2),m=l(o,3),S=l(m),x=l(n,2),E=d(x)
f(E,()=>b(a).promise,s=>{var a=H()
u(s,a)},s=>{var t=F()
t.__click=[A,p,a],u(s,t)}),v((s,t)=>{g(i,`background: url('${h??""}ui/inventory/2x3.png')`),z(i,"src",b(a).img),z(i,"data-tipped",b(a).fetch),w(c,`${s??""} `),z(r,"src",`${h??""}currency/0.png`),w(m,` = ${t??""} `),z(S,"src",`${h??""}currency/0.png`)},[()=>y(b(a).price),()=>y(b(a).price*b(a).count)]),$(o,()=>b(a).count,s=>b(a).count=s),u(s,e)}),u(s,E),m()}p(["click"])
const M=s=>({p:s,ccy:B('img[src*="/currency/"]',C(s).nextElementSibling)}),Q=({p:s,ccy:a})=>({id:Number(N(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:G(q(a.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function T(){if(!E()||k())return
const s=j('a[href*="&subcmd=buyitem&"][onclick]',E())
s.length&&function(s){const a=s.map(M)
if(a.some(({ccy:s})=>!s))return
const t=a.map(Q)
_(L,{target:E(),props:{potions:t}}),C(C(s[0]).parentElement).remove()}(s)}export{T as default}
//# sourceMappingURL=bazaar-ClI6jxcp.js.map
