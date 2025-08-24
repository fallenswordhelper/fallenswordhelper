import{h as s,bj as e,l as t,q as n,$ as i,e as a,cn as r,x as c,B as o,dS as u,bP as l,ak as v,C as d,G as p,P as m,H as f,J as b,L as g,N as h,I as q,s as $,E as k,bB as y,dB as I,Q as C,ap as x,dT as _,dU as w,n as j,p as S,dQ as E,a5 as B,i as P,Z as T,bh as M,bg as N,cJ as Q}from"./calfSystem-79LsojAC.js"
import{i as A}from"./inventing-cDW92mZq.js"
import{i as D}from"./interceptSubmit-c1dihHnz.js"
import{x as F}from"./xPath-CY5AEZF7.js"
import"./formToUrl-CqnZfaJL.js"
function J(s){const[e,i]=t(n("tr:nth-child(2) td",s)).split("/").map(s=>parseInt(s,10))
return{have:e,need:i}}function O(){return s(`#pCC td[background^="${e}ui/inventory/"]`).map(s=>s.parentElement.parentElement).map(J).reduce((s,e)=>Math.min(s,Math.floor(e.have/e.need)),1/0)}function U(s){return A({subcmd:"doinvent",recipe_id:s})}async function V(s){const e=await a({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return e?function(s){const e=r(s)
return e.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:e},s:!1}}(e):{s:!1}}function G(s,e,t,n,i,a){if(!b(e).checkValidity())return void b(e).reportValidity()
$("inventing","quickInvent"),t()
Array(b(n)).fill(i.recipeID).reduce(a,Promise.resolve())}var H=o('<div class="qi-error-container svelte-17pc604"><div class="qi-error-heading svelte-17pc604">INFORMATION</div> <div> </div></div>'),L=o('<div class="qi-container svelte-17pc604"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-17pc604" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-17pc604" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-17pc604"><div class="composing-progress-bar svelte-17pc604"></div> <p class="svelte-17pc604"> </p></div> <div class="qi-results-container svelte-17pc604"><div class="qi-result qi-result-success svelte-17pc604"> </div> <div class="qi-result qi-result-failure svelte-17pc604"> </div></div></div></div>')
function R(s,e){c(e,!0)
let t=v(void 0),n=v(1),a=v(0),r=v(0),o=v(0),x=v("")
var j=L(),S=d(k(j),2)
u(S,s=>q(t,s),()=>b(t))
var E=d(S,2)
l(E,{onclick:function(){q(n,e.max,!0),$("inventing","maxInventButton")},children:(s,e)=>{var t=y("(max)")
g(s,t)},$$slots:{default:!0}})
var B=d(E,2)
B.__click=[G,t,function(){q(a,0),q(r,0),q(o,0),q(x,"")},n,e,async function(s,e){const t=await s
if(!t||!0===t.s){const s=await function(s){return i(U,V,s)}(e)
return s?.s?s.r.success_count>0?q(a,b(a)+1):q(r,b(r)+1):q(x,s?.e?.message??"Server Error",!0),q(o,(b(a)+b(r))/b(n)*100),s}return t}]
var P=d(B,2),T=k(P),M=s=>{var e=H(),t=d(k(e),2),n=k(t)
m(()=>C(n,b(x))),_(3,e,()=>w),g(s,e)}
p(T,s=>{b(x)&&s(M)})
var N=d(T,2),Q=k(N),A=d(Q,2),D=k(A),F=d(N,2),J=k(F),O=k(J),R=d(J,2),Z=k(R)
m(()=>{I(Q,`width: ${b(o)??""}%;`),C(D,`${b(a)+b(r)} / ${b(n)??""}`),C(O,`Successes: ${b(a)??""}`),C(Z,`Failures: ${b(r)??""}`)}),f(S,()=>b(n),s=>q(n,s)),g(s,j),h()}function Z(s){return`${M}items${N}view&item_id=${s}`}function z(s,e){const t=E(e)
if(!t)return
const n=function(s){return T({href:Z(s),target:"_blank"})}(t)
B(n,s),P(n,s)}function K(s){z(s,s)}function W(){!function(){const s=F('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
z(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(K)
const e=n('#pCC input[value="Invent"]')?.form
e&&D(e)}function X(){Q()&&(W(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const e=O()
j(R,{props:{max:e,recipeID:s.value},target:S()})}())}x(["click"])
export{X as default}
//# sourceMappingURL=viewRecipe-vKidh4K_.js.map
