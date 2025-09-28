import{h as s,bk as t,l as e,q as n,$ as i,e as r,co as a,x as c,B as o,dM as v,bQ as u,aj as l,C as d,G as m,P as f,H as p,J as b,L as g,N as h,I as q,s as k,E as $,bC as y,dw as I,Q as C,ao as w,dN as x,dO as _,n as j,p as E,b8 as M,a5 as S,i as N,Z as O,b9 as P,ba as Q,cM as T}from"./calfSystem-CIuUjh4H.js"
import{i as A}from"./inventing-CmU5ZnJG.js"
import{i as B}from"./interceptSubmit-UQt2BX0g.js"
import{x as D}from"./xPath-D9y74WI1.js"
import"./formToUrl-BcjoMJ8T.js"
function F(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map(s=>parseInt(s,10))
return{have:t,need:i}}function V(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map(s=>s.parentElement.parentElement).map(F).reduce((s,t)=>Math.min(s,Math.floor(t.have/t.need)),1/0)}function G(s){return A({subcmd:"doinvent",recipe_id:s})}async function H(s){const t=await r({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=a(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function J(s,t,e,n,i,r){if(!b(t).checkValidity())return void b(t).reportValidity()
k("inventing","quickInvent"),e()
Array(b(n)).fill(i.recipeID).reduce(r,Promise.resolve())}var L=o('<div class="qi-error-container svelte-dv75vr"><div class="qi-error-heading svelte-dv75vr">INFORMATION</div> <div> </div></div>'),R=o('<div class="qi-container svelte-dv75vr"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-dv75vr" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-dv75vr" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-dv75vr"><div class="composing-progress-bar svelte-dv75vr"></div> <p class="svelte-dv75vr"> </p></div> <div class="qi-results-container svelte-dv75vr"><div class="qi-result qi-result-success svelte-dv75vr"> </div> <div class="qi-result qi-result-failure svelte-dv75vr"> </div></div></div></div>')
function U(s,t){c(t,!0)
let e=l(void 0),n=l(1),r=l(0),a=l(0),o=l(0),w=l("")
var j=R(),E=d($(j),2)
v(E,s=>q(e,s),()=>b(e))
var M=d(E,2)
u(M,{onclick:function(){q(n,t.max,!0),k("inventing","maxInventButton")},children:(s,t)=>{var e=y("(max)")
g(s,e)},$$slots:{default:!0}})
var S=d(M,2)
S.__click=[J,e,function(){q(r,0),q(a,0),q(o,0),q(w,"")},n,t,async function(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(G,H,s)}(t)
return s?.s?s.r.success_count>0?q(r,b(r)+1):q(a,b(a)+1):q(w,s?.e?.message??"Server Error",!0),q(o,(b(r)+b(a))/b(n)*100),s}return e}]
var N=d(S,2),O=$(N),P=s=>{var t=L(),e=d($(t),2),n=$(e)
f(()=>C(n,b(w))),x(3,t,()=>_),g(s,t)}
m(O,s=>{b(w)&&s(P)})
var Q=d(O,2),T=$(Q),A=d(T,2),B=$(A),D=d(Q,2),F=$(D),V=$(F),U=d(F,2),Z=$(U)
f(()=>{I(T,`width: ${b(o)??""}%;`),C(B,`${b(r)+b(a)} / ${b(n)??""}`),C(V,`Successes: ${b(r)??""}`),C(Z,`Failures: ${b(a)??""}`)}),p(E,()=>b(n),s=>q(n,s)),g(s,j),h()}function Z(s){return`${P}items${Q}view&item_id=${s}`}function z(s,t){const e=M(t)
if(!e)return
const n=function(s){return O({href:Z(s),target:"_blank"})}(e)
S(n,s),N(n,s)}function K(s){z(s,s)}function W(){!function(){const s=D('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
z(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(K)
const t=n('#pCC input[value="Invent"]')?.form
t&&B(t)}function X(){T()&&(W(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=V()
j(U,{props:{max:t,recipeID:s.value},target:E()})}())}w(["click"])
export{X as default}
//# sourceMappingURL=viewRecipe-CtGZEN8S.js.map
