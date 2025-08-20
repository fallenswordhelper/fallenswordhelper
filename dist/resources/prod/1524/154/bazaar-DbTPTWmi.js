import{U as s,$ as a,e as t,cm as e,x as i,y as n,ak as c,A as o,E as r,K as u,L as m,ao as p,B as l,D as d,aD as f,I as b,O as v,aL as y,dI as g,bi as h,R as z,P as w,G as $,s as x,m as G,p as k,a2 as E,h as S,q as _,aM as j,n as q,aR as B}from"./calfSystem-KFszEm2S.js"
import{c as I}from"./closestTable-D_vJ9Njb.js"
import{g as P}from"./getId-CEBzpjjo.js"
function A(a,t){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:t})}async function D(s,a){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:a})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(a),s:!0}:{e:{message:n},s:!1}}var L=(s,a,t)=>{a(b(t))},R=o('<button type="button" class="custombutton">Buy</button>'),Y=o('<span class="fshSpinner fshSpinner12"></span>'),C=o('<div class="potion svelte-1wzausf"><img class="potion-img tip-dynamic svelte-1wzausf" alt="Potion"/> <div class="prices svelte-1wzausf"> <img alt="Gold" title="Gold"/> x <input type="number" min="1" max="100" class="svelte-1wzausf"/> <br/> <img alt="Gold" title="Gold"/></div> <div class="btn-container svelte-1wzausf"><!></div></div>'),K=o('<div id="bazaar" class="svelte-1wzausf"></div>')
function M(s,t){i(t,!0)
let e=n(t,"potions",19,()=>[]),o=c(e())
async function p(s){var t,e
x("bazaar","buyButton"),s.promise=(t=s.id,e=s.count,a(A,D,t,e))
const i=await s.promise
i?.s?G(`You successfully purchased ${s.count} potion${s.count>1?"s":""}`):i?.e&&G(i.e.message)}var k=K()
r(k,21,()=>o,s=>s.id,(s,a,t)=>{var e=C(),i=d(e),n=l(i,2),c=d(n),o=l(c),r=l(o,2),m=l(r,3),x=l(m),G=l(n,2),k=d(G)
f(k,()=>b(a).promise,s=>{var a=Y()
u(s,a)},s=>{var t=R()
t.__click=[L,p,a],u(s,t)}),v((s,t)=>{g(i,`background: url('${h??""}ui/inventory/2x3.png')`),z(i,"src",b(a).img),z(i,"data-tipped",b(a).fetch),w(c,`${s??""} `),z(o,"src",`${h??""}currency/0.png`),w(m,` = ${t??""} `),z(x,"src",`${h??""}currency/0.png`)},[()=>y(b(a).price),()=>y(b(a).price*b(a).count)]),$(r,()=>b(a).count,s=>b(a).count=s),u(s,e)}),u(s,k),m()}p(["click"])
const N=s=>({p:s,ccy:_('img[src*="/currency/"]',I(s).nextElementSibling)}),O=({p:s,ccy:a})=>({id:Number(P(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:j(B(a.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function T(){if(!k()||E())return
const s=S('a[href*="&subcmd=buyitem&"][onclick]',k())
s.length&&function(s){const a=s.map(N)
if(a.some(({ccy:s})=>!s))return
const t=a.map(O)
q(M,{target:k(),props:{potions:t}}),I(I(s[0]).parentElement).remove()}(s)}export{T as default}
//# sourceMappingURL=bazaar-DbTPTWmi.js.map
