import{a,$ as s,k as t,ce as e,R as i,bE as r,X as n,_ as c,a3 as o,a4 as l,a6 as p,dF as u,b8 as m,Z as d,Y as b,br as v,as as y,bp as h,V as f,a7 as g,aB as z,a8 as $,a2 as q,s as E,ah as k,p as x,A as S,n as _,q as G,aC as j,ad as B,aH as Y}from"./calfSystem-BGW9cdWN.js"
import{c as w}from"./closestTable-D6SfkiIx.js"
import{g as A}from"./getId-CEBzpjjo.js"
function C(s,t){return a({cmd:"potionbazaar",subcmd:"buyitem",item_id:s,quantity:t})}async function P(a,s){const i=await t({cmd:"potionbazaar",subcmd:"buyitem",item_id:a,quantity:s})
if(!i)return{s:!1}
const r=e(i)
return"You purchased the item!"===r?{r:Array(s),s:!0}:{e:{message:r},s:!1}}var F=n('<button type="button" class="custombutton">Buy</button>'),H=n('<span class="fshSpinner fshSpinner12"></span>'),I=n('<div class="potion svelte-193rhzl"><img class="potion-img tip-dynamic svelte-193rhzl" alt="Potion"> <div class="prices svelte-193rhzl"> <img data-hasqtip="1" oldtitle="Gold" alt="Gold" title="" aria-describedby="qtip-1" class="svelte-193rhzl"> x <input type="number" min="1" max="100" class="svelte-193rhzl"><br> <img alt="Gold" data-hasqtip="1" oldtitle="Gold" title="" aria-describedby="qtip-1" class="svelte-193rhzl"></div> <!></div>'),N=n('<div id="bazaar" class="svelte-193rhzl"></div>')
function R(a,t){i(t,!0)
let e=r(t,"potions",19,(()=>[]))
async function n(a){var t,e
E("bazaar","buyButton"),a.promise=(t=a.id,e=a.count,s(C,P,t,e))
const i=await a.promise
i.s?k(`You successfully purchased ${a.count} "${i.r[0].n}"`):k(i.e.message)}var p=N()
c(p,21,e,(a=>a.id),((a,s,t)=>{var e=I(),i=d(e)
u(i,`background: url('${m??""}ui/inventory/2x3.png')`)
var r=b(i,2),c=d(r),l=b(c)
v(l,"src",`${m??""}currency/0.png`)
var p=b(l,2),E=b(p,2),k=b(E)
v(k,"src",`${m??""}currency/0.png`)
var x=b(r,2)
y(x,(()=>f(s).promise),(a=>{var s=H()
o(a,s)}),(a=>{var t=F(),e=h((()=>n(f(s))))
t.__click=function(...a){f(e)?.apply(this,a)},o(a,t)})),g(((a,t)=>{v(i,"src",f(s).img),v(i,"data-tipped",f(s).fetch),$(c,`${a??""} `),$(E,` = ${t??""} `)}),[()=>z(f(s).price),()=>z(f(s).price*f(s).count)]),q(p,(()=>f(s).count),(a=>f(s).count=a)),o(a,e)})),o(a,p),l()}p(["click"])
const T=a=>({p:a,ccy:G('img[src*="/currency/"]',w(a).nextElementSibling)})
const V=({p:a,ccy:s})=>({id:Number(A(a)),img:a.children[0].src,fetch:a.firstChild.dataset.tipped,price:j(Y(s.parentElement.previousElementSibling)),count:1,promise:Promise.resolve()})
function X(a){const s=a.map(T)
if(s.some((({ccy:a})=>!a)))return
const t=w(w(a[0]).parentElement)
var e
e=s.map(V),B(R,{target:t.parentElement,props:{potions:e}}),t.remove()}function Z(){if(!x()||S())return
const a=_('a[href*="&subcmd=buyitem&"][onclick]',x())
a.length&&X(a)}export{Z as default}
//# sourceMappingURL=bazaar-hKs6Ju2l.js.map
