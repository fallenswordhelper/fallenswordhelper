import{h as s,bl as t,l as e,q as n,$ as i,e as a,cp as r,x as c,B as o,dT as u,bR as l,ak as v,C as p,G as d,P as m,H as f,J as b,L as g,N as h,I as q,s as $,E as k,bD as y,dD as I,Q as C,ap as x,dU as _,dV as w,n as j,p as E,b9 as S,a5 as D,i as N,Z as T,ba as M,bb as P,cN as V}from"./calfSystem-CQOGdqPv.js"
import{i as A}from"./inventing-BGwAWGde.js"
import{i as B}from"./interceptSubmit-B-ce898B.js"
import{x as F}from"./xPath-BAVwcsyU.js"
import"./formToUrl-BAYKyqXO.js"
function O(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map(s=>parseInt(s,10))
return{have:t,need:i}}function Q(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map(s=>s.parentElement.parentElement).map(O).reduce((s,t)=>Math.min(s,Math.floor(t.have/t.need)),1/0)}function R(s){return A({subcmd:"doinvent",recipe_id:s})}async function U(s){const t=await a({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=r(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function G(s,t,e,n,i,a){if(!b(t).checkValidity())return void b(t).reportValidity()
$("inventing","quickInvent"),e()
Array(b(n)).fill(i.recipeID).reduce(a,Promise.resolve())}var H=o('<div class="qi-error-container svelte-17pc604"><div class="qi-error-heading svelte-17pc604">INFORMATION</div> <div> </div></div>'),J=o('<div class="qi-container svelte-17pc604"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-17pc604" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-17pc604" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-17pc604"><div class="composing-progress-bar svelte-17pc604"></div> <p class="svelte-17pc604"> </p></div> <div class="qi-results-container svelte-17pc604"><div class="qi-result qi-result-success svelte-17pc604"> </div> <div class="qi-result qi-result-failure svelte-17pc604"> </div></div></div></div>')
function L(s,t){c(t,!0)
let e=v(void 0),n=v(1),a=v(0),r=v(0),o=v(0),x=v("")
var j=J(),E=p(k(j),2)
u(E,s=>q(e,s),()=>b(e))
var S=p(E,2)
l(S,{onclick:function(){q(n,t.max,!0),$("inventing","maxInventButton")},children:(s,t)=>{var e=y("(max)")
g(s,e)},$$slots:{default:!0}})
var D=p(S,2)
D.__click=[G,e,function(){q(a,0),q(r,0),q(o,0),q(x,"")},n,t,async function(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(R,U,s)}(t)
return s?.s?s.r.success_count>0?q(a,b(a)+1):q(r,b(r)+1):q(x,s?.e?.message??"Server Error",!0),q(o,(b(a)+b(r))/b(n)*100),s}return e}]
var N=p(D,2),T=k(N),M=s=>{var t=H(),e=p(k(t),2),n=k(e)
m(()=>C(n,b(x))),_(3,t,()=>w),g(s,t)}
d(T,s=>{b(x)&&s(M)})
var P=p(T,2),V=k(P),A=p(V,2),B=k(A),F=p(P,2),O=k(F),Q=k(O),L=p(O,2),Z=k(L)
m(()=>{I(V,`width: ${b(o)??""}%;`),C(B,`${b(a)+b(r)} / ${b(n)??""}`),C(Q,`Successes: ${b(a)??""}`),C(Z,`Failures: ${b(r)??""}`)}),f(E,()=>b(n),s=>q(n,s)),g(s,j),h()}function Z(s){return`${M}items${P}view&item_id=${s}`}function z(s,t){const e=S(t)
if(!e)return
const n=function(s){return T({href:Z(s),target:"_blank"})}(e)
D(n,s),N(n,s)}function K(s){z(s,s)}function W(){!function(){const s=F('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
z(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(K)
const t=n('#pCC input[value="Invent"]')?.form
t&&B(t)}function X(){V()&&(W(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=Q()
j(L,{props:{max:t,recipeID:s.value},target:E()})}())}x(["click"])
export{X as default}
//# sourceMappingURL=viewRecipe-DO0RfTGF.js.map
