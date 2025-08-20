import{h as s,bi as t,l as e,q as n,$ as i,e as a,cm as r,x as c,A as o,dX as u,bO as l,aj as v,B as d,F as p,O as m,G as f,I as b,K as g,L as h,H as q,s as I,D as $,bA as y,dI as k,P as x,ao as C,dY as _,dZ as j,n as w,p as S,a4 as A,i as E,r as O,Y as D,bg as F,bf as M,cI as P}from"./calfSystem-UyQ_FKFu.js"
import{i as T}from"./inventing-C-TY-AKa.js"
import{i as B}from"./interceptSubmit-ChmNlDoQ.js"
import{x as N}from"./xPath-DXdL6jrk.js"
import"./formToUrl-et7r_Ml7.js"
function V(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map(s=>parseInt(s,10))
return{have:t,need:i}}function Y(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map(s=>s.parentElement.parentElement).map(V).reduce((s,t)=>Math.min(s,Math.floor(t.have/t.need)),1/0)}function G(s){return T({subcmd:"doinvent",recipe_id:s})}async function H(s){const t=await a({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=r(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function K(s,t,e,n,i,a){if(!b(t).checkValidity())return void b(t).reportValidity()
I("inventing","quickInvent"),e()
Array(b(n)).fill(i.recipeID).reduce(a,Promise.resolve())}var L=o('<div class="qi-error-container svelte-17pc604"><div class="qi-error-heading svelte-17pc604">INFORMATION</div> <div> </div></div>'),Q=o('<div class="qi-container svelte-17pc604"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-17pc604" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-17pc604" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-17pc604"><div class="composing-progress-bar svelte-17pc604"></div> <p class="svelte-17pc604"> </p></div> <div class="qi-results-container svelte-17pc604"><div class="qi-result qi-result-success svelte-17pc604"> </div> <div class="qi-result qi-result-failure svelte-17pc604"> </div></div></div></div>')
function R(s,t){c(t,!0)
let e=v(void 0),n=v(1),a=v(0),r=v(0),o=v(0),C=v("")
var w=Q(),S=d($(w),2)
u(S,s=>q(e,s),()=>b(e))
var A=d(S,2)
l(A,{onclick:function(){q(n,t.max,!0),I("inventing","maxInventButton")},children:(s,t)=>{var e=y("(max)")
g(s,e)},$$slots:{default:!0}})
var E=d(A,2)
E.__click=[K,e,function(){q(a,0),q(r,0),q(o,0),q(C,"")},n,t,async function(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(G,H,s)}(t)
return s?.s?s.r.success_count>0?q(a,b(a)+1):q(r,b(r)+1):q(C,s?.e?.message??"Server Error",!0),q(o,(b(a)+b(r))/b(n)*100),s}return e}]
var O=d(E,2),D=$(O),F=s=>{var t=L(),e=d($(t),2),n=$(e)
m(()=>x(n,b(C))),_(3,t,()=>j),g(s,t)}
p(D,s=>{b(C)&&s(F)})
var M=d(D,2),P=$(M),T=d(P,2),B=$(T),N=d(M,2),V=$(N),Y=$(V),R=d(V,2),U=$(R)
m(()=>{k(P,`width: ${b(o)??""}%;`),x(B,`${b(a)+b(r)} / ${b(n)??""}`),x(Y,`Successes: ${b(a)??""}`),x(U,`Failures: ${b(r)??""}`)}),f(S,()=>b(n),s=>q(n,s)),g(s,w),h()}function U(s){return`${F}items${M}view&item_id=${s}`}function X(s,t){const e=function(s){if(!s)return
const t=O(/\/items\/(?<id>\d+)\.gif/,s.src)
return t||void 0}(t)
if(!e)return
const n=function(s){return D({href:U(s),target:"_blank"})}(e)
A(n,s),E(n,s)}function Z(s){X(s,s)}function z(){!function(){const s=N('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
X(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(Z)
const t=n('#pCC input[value="Invent"]')?.form
t&&B(t)}function J(){P()&&(z(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=Y()
w(R,{props:{max:t,recipeID:s.value},target:S()})}())}C(["click"])
export{J as default}
//# sourceMappingURL=viewRecipe-D6lxq9aT.js.map
