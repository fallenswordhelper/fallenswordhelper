import{h as s,bn as t,m as e,q as n,$ as i,e as r,cn as a,y as c,C as o,dR as v,bP as u,D as d,H as l,Q as m,I as p,K as f,ak as b,N as g,O as h,J as q,s as y,F as $,bQ as k,dw as I,R as C,ap as _,dS as w,dT as x,t as j,p as S,ba as E,a6 as T,i as D,_ as F,bb as M,bc as N,j as O}from"./calfSystem-Cs6CSxoU.js"
import{i as P}from"./inventing-CZdwvKRY.js"
import{i as Q}from"./interceptSubmit-Bhotwi5X.js"
import{x as R}from"./xPath-DBMGz2Mo.js"
import"./formToUrl-CAPzQx_Y.js"
function A(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map(s=>parseInt(s,10))
return{have:t,need:i}}function V(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map(s=>s.parentElement.parentElement).map(A).reduce((s,t)=>Math.min(s,Math.floor(t.have/t.need)),1/0)}function B(s){return P({subcmd:"doinvent",recipe_id:s})}async function H(s){const t=await r({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=a(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}var J=o('<div class="qi-error-container svelte-dv75vr"><div class="qi-error-heading svelte-dv75vr">INFORMATION</div> <div> </div></div>'),K=o('<div class="qi-container svelte-dv75vr"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-dv75vr" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-dv75vr" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-dv75vr"><div class="composing-progress-bar svelte-dv75vr"></div> <p class="svelte-dv75vr"> </p></div> <div class="qi-results-container svelte-dv75vr"><div class="qi-result qi-result-success svelte-dv75vr"> </div> <div class="qi-result qi-result-failure svelte-dv75vr"> </div></div></div></div>')
function U(s,t){c(t,!0)
let e=b(void 0),n=b(1),r=b(0),a=b(0),o=b(0),_=b("")
async function j(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(B,H,s)}(t)
return s?.s?s.r.success_count>0?q(r,f(r)+1):q(a,f(a)+1):q(_,s?.e?.message??"Server Error",!0),q(o,(f(r)+f(a))/f(n)*100),s}return e}var S=K(),E=d($(S),2)
v(E,s=>q(e,s),()=>f(e))
var T=d(E,2)
u(T,{onclick:function(){q(n,t.max,!0),y("inventing","maxInventButton")},children:(s,t)=>{var e=k("(max)")
g(s,e)},$$slots:{default:!0}})
var D=d(T,2)
D.__click=function(){if(!f(e).checkValidity())return void f(e).reportValidity()
y("inventing","quickInvent"),q(r,0),q(a,0),q(o,0),q(_,""),Array(f(n)).fill(t.recipeID).reduce(j,Promise.resolve())}
var F=d(D,2),M=$(F),N=s=>{var t=J(),e=d($(t),2),n=$(e)
m(()=>C(n,f(_))),w(3,t,()=>x),g(s,t)}
l(M,s=>{f(_)&&s(N)})
var O=d(M,2),P=$(O),Q=d(P,2),R=$(Q),A=d(O,2),V=$(A),U=$(V),z=d(V,2),G=$(z)
m(()=>{I(P,`width: ${f(o)??""}%;`),C(R,`${f(r)+f(a)} / ${f(n)??""}`),C(U,`Successes: ${f(r)??""}`),C(G,`Failures: ${f(a)??""}`)}),p(E,()=>f(n),s=>q(n,s)),g(s,S),h()}function z(s){return`${M}items${N}view&item_id=${s}`}function G(s,t){const e=E(t)
if(!e)return
const n=function(s){return F({href:z(s),target:"_blank"})}(e)
T(n,s),D(n,s)}function L(s){G(s,s)}function W(){!function(){const s=R('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
G(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(L)
const t=n('#pCC input[value="Invent"]')?.form
t&&Q(t)}function X(){O()&&(W(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=V()
j(U,{props:{max:t,recipeID:s.value},target:S()})}())}_(["click"])
export{X as default}
//# sourceMappingURL=viewRecipe-LGWJbRAZ.js.map
