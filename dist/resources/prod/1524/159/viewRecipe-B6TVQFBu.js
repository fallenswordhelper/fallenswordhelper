import{h as s,bm as t,m as e,q as n,$ as i,e as r,cp as a,y as c,C as o,dR as v,bS as u,ak as l,D as d,H as m,Q as p,I as f,K as b,N as g,O as h,J as q,s as y,F as $,bE as k,dx as I,R as C,ap as _,dS as x,dT as w,t as S,p as j,ba as E,a6 as T,i as D,_ as F,bb as M,bc as N,j as O}from"./calfSystem-CIdPz3EO.js"
import{i as R}from"./inventing-D4r_BiYm.js"
import{i as A}from"./interceptSubmit-Dg8BOmTG.js"
import{x as P}from"./xPath-CSxyaOXZ.js"
import"./formToUrl-JPHWbAvp.js"
function Q(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map(s=>parseInt(s,10))
return{have:t,need:i}}function V(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map(s=>s.parentElement.parentElement).map(Q).reduce((s,t)=>Math.min(s,Math.floor(t.have/t.need)),1/0)}function B(s){return R({subcmd:"doinvent",recipe_id:s})}async function H(s){const t=await r({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=a(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function J(s,t,e,n,i,r){if(!b(t).checkValidity())return void b(t).reportValidity()
y("inventing","quickInvent"),e()
Array(b(n)).fill(i.recipeID).reduce(r,Promise.resolve())}var K=o('<div class="qi-error-container svelte-dv75vr"><div class="qi-error-heading svelte-dv75vr">INFORMATION</div> <div> </div></div>'),U=o('<div class="qi-container svelte-dv75vr"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-dv75vr" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-dv75vr" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-dv75vr"><div class="composing-progress-bar svelte-dv75vr"></div> <p class="svelte-dv75vr"> </p></div> <div class="qi-results-container svelte-dv75vr"><div class="qi-result qi-result-success svelte-dv75vr"> </div> <div class="qi-result qi-result-failure svelte-dv75vr"> </div></div></div></div>')
function z(s,t){c(t,!0)
let e=l(void 0),n=l(1),r=l(0),a=l(0),o=l(0),_=l("")
var S=U(),j=d($(S),2)
v(j,s=>q(e,s),()=>b(e))
var E=d(j,2)
u(E,{onclick:function(){q(n,t.max,!0),y("inventing","maxInventButton")},children:(s,t)=>{var e=k("(max)")
g(s,e)},$$slots:{default:!0}})
var T=d(E,2)
T.__click=[J,e,function(){q(r,0),q(a,0),q(o,0),q(_,"")},n,t,async function(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(B,H,s)}(t)
return s?.s?s.r.success_count>0?q(r,b(r)+1):q(a,b(a)+1):q(_,s?.e?.message??"Server Error",!0),q(o,(b(r)+b(a))/b(n)*100),s}return e}]
var D=d(T,2),F=$(D),M=s=>{var t=K(),e=d($(t),2),n=$(e)
p(()=>C(n,b(_))),x(3,t,()=>w),g(s,t)}
m(F,s=>{b(_)&&s(M)})
var N=d(F,2),O=$(N),R=d(O,2),A=$(R),P=d(N,2),Q=$(P),V=$(Q),z=d(Q,2),G=$(z)
p(()=>{I(O,`width: ${b(o)??""}%;`),C(A,`${b(r)+b(a)} / ${b(n)??""}`),C(V,`Successes: ${b(r)??""}`),C(G,`Failures: ${b(a)??""}`)}),f(j,()=>b(n),s=>q(n,s)),g(s,S),h()}function G(s){return`${M}items${N}view&item_id=${s}`}function L(s,t){const e=E(t)
if(!e)return
const n=function(s){return F({href:G(s),target:"_blank"})}(e)
T(n,s),D(n,s)}function W(s){L(s,s)}function X(){!function(){const s=P('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
L(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(W)
const t=n('#pCC input[value="Invent"]')?.form
t&&A(t)}function Y(){O()&&(X(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=V()
S(z,{props:{max:t,recipeID:s.value},target:j()})}())}_(["click"])
export{Y as default}
//# sourceMappingURL=viewRecipe-B6TVQFBu.js.map
