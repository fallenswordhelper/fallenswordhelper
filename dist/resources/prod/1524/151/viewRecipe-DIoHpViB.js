import{k as s,bk as t,n as e,q as n,$ as i,j as a,co as r,z as c,C as o,e0 as u,bQ as l,al as v,D as d,H as p,Q as m,I as f,K as b,N as g,O as h,J as q,s as k,F as $,bC as y,dN as I,R as C,aq as _,e1 as w,e2 as x,u as j,p as S,a6 as E,i as M,r as N,_ as D,bi as F,bh as O,cM as Q}from"./calfSystem-C1X5YxJZ.js"
import{i as T}from"./inventing-6r9pSbrP.js"
import{i as A}from"./interceptSubmit-D-IYqL1u.js"
import{x as P}from"./xPath-BfzK81xg.js"
import"./formToUrl-BjgGWW4H.js"
function R(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map((s=>parseInt(s,10)))
return{have:t,need:i}}function V(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map((s=>s.parentElement.parentElement)).map(R).reduce(((s,t)=>Math.min(s,Math.floor(t.have/t.need))),1/0)}function z(s){return T({subcmd:"doinvent",recipe_id:s})}async function B(s){const t=await a({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=r(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function H(s,t,e,n,i,a){if(!b(t).checkValidity())return void b(t).reportValidity()
k("inventing","quickInvent"),e()
Array(b(n)).fill(i.recipeID).reduce(a,Promise.resolve())}var J=o('<div class="qi-error-container svelte-17pc604"><div class="qi-error-heading svelte-17pc604">INFORMATION</div> <div> </div></div>'),K=o('<div class="qi-container svelte-17pc604"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-17pc604" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-17pc604" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-17pc604"><div class="composing-progress-bar svelte-17pc604"></div> <p class="svelte-17pc604"> </p></div> <div class="qi-results-container svelte-17pc604"><div class="qi-result qi-result-success svelte-17pc604"> </div> <div class="qi-result qi-result-failure svelte-17pc604"> </div></div></div></div>')
function U(s,t){c(t,!0)
let e=v(void 0),n=v(1),a=v(0),r=v(0),o=v(0),_=v("")
var j=K(),S=d($(j),2)
u(S,(s=>q(e,s)),(()=>b(e)))
var E=d(S,2)
l(E,{onclick:function(){q(n,t.max,!0),k("inventing","maxInventButton")},children:(s,t)=>{var e=y("(max)")
g(s,e)},$$slots:{default:!0}})
var M=d(E,2)
M.__click=[H,e,function(){q(a,0),q(r,0),q(o,0),q(_,"")},n,t,async function(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(z,B,s)}(t)
return s?.s?s.r.success_count>0?q(a,b(a)+1):q(r,b(r)+1):q(_,s?.e?.message??"Server Error",!0),q(o,(b(a)+b(r))/b(n)*100),s}return e}]
var N=d(M,2),D=$(N),F=s=>{var t=J(),e=d($(t),2),n=$(e)
m((()=>C(n,b(_)))),w(3,t,(()=>x)),g(s,t)}
p(D,(s=>{b(_)&&s(F)}))
var O=d(D,2),Q=$(O),T=d(Q,2),A=$(T),P=d(O,2),R=$(P),V=$(R),U=d(R,2),G=$(U)
m((()=>{I(Q,`width: ${b(o)??""}%;`),C(A,`${b(a)+b(r)} / ${b(n)??""}`),C(V,`Successes: ${b(a)??""}`),C(G,`Failures: ${b(r)??""}`)})),f(S,(()=>b(n)),(s=>q(n,s))),g(s,j),h()}function G(s){return`${F}items${O}view&item_id=${s}`}function L(s,t){const e=function(s){if(!s)return
const t=N(/\/items\/(?<id>\d+)\.gif/,s.src)
return t||void 0}(t)
if(!e)return
const n=function(s){return D({href:G(s),target:"_blank"})}(e)
E(n,s),M(n,s)}function W(s){L(s,s)}function X(){!function(){const s=P('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
L(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(W)
const t=n('#pCC input[value="Invent"]')?.form
t&&A(t)}function Y(){Q()&&(X(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=V()
j(U,{props:{max:t,recipeID:s.value},target:S()})}())}_(["click"])
export{Y as default}
//# sourceMappingURL=viewRecipe-DIoHpViB.js.map
