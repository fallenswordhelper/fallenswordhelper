import{a as s,$ as a,k as t,ce as e,R as i,bE as n,T as c,X as r,_ as o,a3 as u,a4 as m,a6 as p,dF as l,b8 as d,Z as f,Y as v,br as b,as as y,V as g,a7 as h,aB as z,a8 as w,a2 as $,s as k,ah as x,p as E,A as S,n as _,q as G,aC as j,ad as q,aH as B}from"./calfSystem-BGOTz8de.js"
import{c as Y}from"./closestTable-DjvmqHiL.js"
import{g as A}from"./getId-CEBzpjjo.js"
function C(a,t){return s({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:t})}async function P(s,a){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:a})
if(!i)return{s:!1}
const n=e(i)
return"You purchased the item!"===n?{r:Array(a),s:!0}:{e:{message:n},s:!1}}var T=(s,a,t)=>{a(g(t))},F=r('<button type="button" class="custombutton">Buy</button>'),H=r('<span class="fshSpinner fshSpinner12"></span>'),I=r('<div class="potion svelte-1wzausf"><img class="potion-img tip-dynamic svelte-1wzausf" alt="Potion"> <div class="prices svelte-1wzausf"> <img alt="Gold" title="Gold"> x <input type="number" min="1" max="100" class="svelte-1wzausf"> <br> <img alt="Gold" title="Gold"></div> <div class="btn-container svelte-1wzausf"><!></div></div>'),N=r('<div id="bazaar" class="svelte-1wzausf"></div>')
function R(s,t){i(t,!0)
let e=n(t,"potions",19,(()=>[])),r=c(e())
async function p(s){var t,e
k("bazaar","buyButton"),s.promise=(t=s.id,e=s.count,a(C,P,t,e))
const i=await s.promise
i?.s?x(`You successfully purchased ${s.count} "${i.r[0].n}"`):i?.e&&x(i.e.message)}var E=N()
o(E,21,(()=>r),(s=>s.id),((s,a,t)=>{var e=I(),i=f(e)
l(i,`background: url('${d??""}ui/inventory/2x3.png')`)
var n=v(i,2),c=f(n),r=v(c)
b(r,"src",`${d??""}currency/0.png`)
var o=v(r,2),m=v(o,3),k=v(m)
b(k,"src",`${d??""}currency/0.png`)
var x=v(n,2),E=f(x)
y(E,(()=>g(a).promise),(s=>{var a=H()
u(s,a)}),(s=>{var t=F()
t.__click=[T,p,a],u(s,t)})),h(((s,t)=>{b(i,"src",g(a).img),b(i,"data-tipped",g(a).fetch),w(c,`${s??""} `),w(m,` = ${t??""} `)}),[()=>z(g(a).price),()=>z(g(a).price*g(a).count)]),$(o,(()=>g(a).count),(s=>g(a).count=s)),u(s,e)})),u(s,E),m()}p(["click"])
const V=s=>({p:s,ccy:G('img[src*="/currency/"]',Y(s).nextElementSibling)}),X=({p:s,ccy:a})=>({id:Number(A(s)),img:s.children[0].src,fetch:s.firstChild.dataset.tipped,price:j(B(a.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function Z(){if(!E()||S())return
const s=_('a[href*="&subcmd=buyitem&"][onclick]',E())
s.length&&function(s){const a=s.map(V)
if(a.some((({ccy:s})=>!s)))return
const t=a.map(X)
q(R,{target:E(),props:{potions:t}}),Y(Y(s[0]).parentElement).remove()}(s)}export{Z as default}
//# sourceMappingURL=bazaar-PBzo0FNy.js.map
