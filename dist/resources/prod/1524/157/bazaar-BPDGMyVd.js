import{V as s,$ as a,e as t,cp as e,x as i,y as n,al as c,B as r,F as o,L as u,N as m,ap as p,C as l,E as d,aF as f,J as b,P as v,aN as y,dD as g,bl as h,S as z,Q as w,H as $,s as x,m as S,p as E,a3 as k,h as G,q as _,aO as j,n as q,aT as B}from"./calfSystem-CQOGdqPv.js"
import{c as F}from"./closestTable-Cs7gyt8-.js"
import{g as N}from"./getId-CEBzpjjo.js"
function P(a,t){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:t})}async function C(s,a){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:a})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(a),s:!0}:{e:{message:n},s:!1}}var T=(s,a,t)=>{a(b(t))},Y=r('<button type="button" class="custombutton">Buy</button>'),A=r('<span class="fshSpinner fshSpinner12"></span>'),D=r('<div class="potion svelte-1wzausf"><img class="potion-img tip-dynamic svelte-1wzausf" alt="Potion"/> <div class="prices svelte-1wzausf"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1wzausf"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1wzausf"><!></div></div>'),H=r('<div id="bazaar" class="svelte-1wzausf"></div>')
function I(s,t){i(t,!0)
let e=n(t,"potions",19,()=>[]),r=c(e())
async function p(s){var t,e
x("bazaar","buyButton"),s.promise=(t=s.id,e=s.count,a(P,C,t,e))
const i=await s.promise
i?.s?S(`You successfully purchased ${s.count} potion${s.count>1?"s":""}`):i?.e&&S(i.e.message)}var E=H()
o(E,21,()=>r,s=>s.id,(s,a,t)=>{var e=D(),i=d(e),n=l(i,2),c=d(n),r=l(c),o=l(r,2),m=l(o,3),x=l(m),S=l(n,2),E=d(S)
f(E,()=>b(a).promise,s=>{var a=A()
u(s,a)},s=>{var t=Y()
t.__click=[T,p,a],u(s,t)}),v((s,t)=>{g(i,`background: url('${h??""}ui/inventory/2x3.png')`),z(i,"src",b(a).img),z(i,"data-tipped",b(a).fetch),w(c,`${s??""} `),z(r,"src",`${h??""}currency/0.png`),w(m,` = ${t??""} `),z(x,"src",`${h??""}currency/0.png`)},[()=>y(b(a).price),()=>y(b(a).price*b(a).count)]),$(o,()=>b(a).count,s=>b(a).count=s),u(s,e)}),u(s,E),m()}p(["click"])
const J=s=>({p:s,ccy:_('img[src*="/currency/"]',F(s).nextElementSibling)}),L=({p:s,ccy:a})=>({id:Number(N(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:j(B(a.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function O(){if(!E()||k())return
const s=G('a[href*="&subcmd=buyitem&"][onclick]',E())
s.length&&function(s){const a=s.map(J)
if(a.some(({ccy:s})=>!s))return
const t=a.map(L)
q(I,{target:E(),props:{potions:t}}),F(F(s[0]).parentElement).remove()}(s)}export{O as default}
//# sourceMappingURL=bazaar-BPDGMyVd.js.map
