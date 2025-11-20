import{h as s,bm as t,m as e,q as n,$ as i,e as r,cp as a,y as c,C as o,dR as v,bR as u,D as l,H as d,P as m,I as p,K as f,ak as b,N as g,O as h,J as q,s as y,F as $,bG as k,dx as I,S as C,ap as _,dS as x,dT as w,t as S,p as j,ba as E,a6 as T,i as D,_ as F,bb as M,bc as N,j as O}from"./calfSystem-HVCiy-VV.js"
import{i as P}from"./inventing-ByV5ReyL.js"
import{i as R}from"./interceptSubmit-rdUGIp5j.js"
import{x as A}from"./xPath-BQH76fhy.js"
import"./formToUrl-BMkQD7VR.js"
function V(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map(s=>parseInt(s,10))
return{have:t,need:i}}function B(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map(s=>s.parentElement.parentElement).map(V).reduce((s,t)=>Math.min(s,Math.floor(t.have/t.need)),1/0)}function G(s){return P({subcmd:"doinvent",recipe_id:s})}async function H(s){const t=await r({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=a(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}var J=o('<div class="qi-error-container svelte-dv75vr"><div class="qi-error-heading svelte-dv75vr">INFORMATION</div> <div> </div></div>'),K=o('<div class="qi-container svelte-dv75vr"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-dv75vr" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-dv75vr" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-dv75vr"><div class="composing-progress-bar svelte-dv75vr"></div> <p class="svelte-dv75vr"> </p></div> <div class="qi-results-container svelte-dv75vr"><div class="qi-result qi-result-success svelte-dv75vr"> </div> <div class="qi-result qi-result-failure svelte-dv75vr"> </div></div></div></div>')
function Q(s,t){c(t,!0)
let e=b(void 0),n=b(1),r=b(0),a=b(0),o=b(0),_=b("")
async function S(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(G,H,s)}(t)
return s?.s?s.r.success_count>0?q(r,f(r)+1):q(a,f(a)+1):q(_,s?.e?.message??"Server Error",!0),q(o,(f(r)+f(a))/f(n)*100),s}return e}var j=K(),E=l($(j),2)
v(E,s=>q(e,s),()=>f(e))
var T=l(E,2)
u(T,{onclick:function(){q(n,t.max,!0),y("inventing","maxInventButton")},children:(s,t)=>{var e=k("(max)")
g(s,e)},$$slots:{default:!0}})
var D=l(T,2)
D.__click=function(){if(!f(e).checkValidity())return void f(e).reportValidity()
y("inventing","quickInvent"),q(r,0),q(a,0),q(o,0),q(_,""),Array(f(n)).fill(t.recipeID).reduce(S,Promise.resolve())}
var F=l(D,2),M=$(F),N=s=>{var t=J(),e=l($(t),2),n=$(e)
m(()=>C(n,f(_))),x(3,t,()=>w),g(s,t)}
d(M,s=>{f(_)&&s(N)})
var O=l(M,2),P=$(O),R=l(P,2),A=$(R),V=l(O,2),B=$(V),Q=$(B),U=l(B,2),z=$(U)
m(()=>{I(P,`width: ${f(o)??""}%;`),C(A,`${f(r)+f(a)} / ${f(n)??""}`),C(Q,`Successes: ${f(r)??""}`),C(z,`Failures: ${f(a)??""}`)}),p(E,()=>f(n),s=>q(n,s)),g(s,j),h()}function U(s){return`${M}items${N}view&item_id=${s}`}function z(s,t){const e=E(t)
if(!e)return
const n=function(s){return F({href:U(s),target:"_blank"})}(e)
T(n,s),D(n,s)}function L(s){z(s,s)}function W(){!function(){const s=A('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
z(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(L)
const t=n('#pCC input[value="Invent"]')?.form
t&&R(t)}function X(){O()&&(W(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=B()
S(Q,{props:{max:t,recipeID:s.value},target:j()})}())}_(["click"])
export{X as default}
//# sourceMappingURL=viewRecipe-DprazjF2.js.map
