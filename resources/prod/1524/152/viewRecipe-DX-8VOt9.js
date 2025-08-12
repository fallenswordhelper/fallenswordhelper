import{k as s,bh as t,n as e,q as n,$ as i,j as a,cl as r,z as c,C as o,d$ as u,bN as l,al as v,D as d,H as p,Q as m,I as f,K as b,N as g,O as h,J as q,s as $,F as k,bz as y,dL as I,R as C,aq as _,e0 as w,e1 as x,u as j,p as S,a6 as E,i as N,r as D,_ as F,bf as M,be as O,cK as T}from"./calfSystem-BlPuMQGT.js"
import{i as z}from"./inventing-CfUqTznT.js"
import{i as A}from"./interceptSubmit-Cvm926dN.js"
import{x as K}from"./xPath-CChveOml.js"
import"./formToUrl-Dy2RFM47.js"
function P(s){const[t,i]=e(n("tr:nth-child(2) td",s)).split("/").map((s=>parseInt(s,10)))
return{have:t,need:i}}function Q(){return s(`#pCC td[background^="${t}ui/inventory/"]`).map((s=>s.parentElement.parentElement)).map(P).reduce(((s,t)=>Math.min(s,Math.floor(t.have/t.need))),1/0)}function R(s){return z({subcmd:"doinvent",recipe_id:s})}async function V(s){const t=await a({cmd:"inventing",subcmd:"doinvent",recipe_id:s})
return t?function(s){const t=r(s)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}(t):{s:!1}}function B(s,t,e,n,i,a){if(!b(t).checkValidity())return void b(t).reportValidity()
$("inventing","quickInvent"),e()
Array(b(n)).fill(i.recipeID).reduce(a,Promise.resolve())}var H=o('<div class="qi-error-container svelte-17pc604"><div class="qi-error-heading svelte-17pc604">INFORMATION</div> <div> </div></div>'),J=o('<div class="qi-container svelte-17pc604"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-17pc604" min="1" required step="1" type="number"/> <!> <button class="custombutton svelte-17pc604" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-17pc604"><div class="composing-progress-bar svelte-17pc604"></div> <p class="svelte-17pc604"> </p></div> <div class="qi-results-container svelte-17pc604"><div class="qi-result qi-result-success svelte-17pc604"> </div> <div class="qi-result qi-result-failure svelte-17pc604"> </div></div></div></div>')
function L(s,t){c(t,!0)
let e=v(void 0),n=v(1),a=v(0),r=v(0),o=v(0),_=v("")
var j=J(),S=d(k(j),2)
u(S,(s=>q(e,s)),(()=>b(e)))
var E=d(S,2)
l(E,{onclick:function(){q(n,t.max,!0),$("inventing","maxInventButton")},children:(s,t)=>{var e=y("(max)")
g(s,e)},$$slots:{default:!0}})
var N=d(E,2)
N.__click=[B,e,function(){q(a,0),q(r,0),q(o,0),q(_,"")},n,t,async function(s,t){const e=await s
if(!e||!0===e.s){const s=await function(s){return i(R,V,s)}(t)
return s?.s?s.r.success_count>0?q(a,b(a)+1):q(r,b(r)+1):q(_,s?.e?.message??"Server Error",!0),q(o,(b(a)+b(r))/b(n)*100),s}return e}]
var D=d(N,2),F=k(D),M=s=>{var t=H(),e=d(k(t),2),n=k(e)
m((()=>C(n,b(_)))),w(3,t,(()=>x)),g(s,t)}
p(F,(s=>{b(_)&&s(M)}))
var O=d(F,2),T=k(O),z=d(T,2),A=k(z),K=d(O,2),P=k(K),Q=k(P),L=d(P,2),U=k(L)
m((()=>{I(T,`width: ${b(o)??""}%;`),C(A,`${b(a)+b(r)} / ${b(n)??""}`),C(Q,`Successes: ${b(a)??""}`),C(U,`Failures: ${b(r)??""}`)})),f(S,(()=>b(n)),(s=>q(n,s))),g(s,j),h()}function U(s){return`${M}items${O}view&item_id=${s}`}function G(s,t){const e=function(s){if(!s)return
const t=D(/\/items\/(?<id>\d+)\.gif/,s.src)
return t||void 0}(t)
if(!e)return
const n=function(s){return F({href:U(s),target:"_blank"})}(e)
E(n,s),N(n,s)}function W(s){G(s,s)}function X(){!function(){const s=K('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
G(n("#pCC b"),s)}(),s('#pCC img[src*="/items/"]').forEach(W)
const t=n('#pCC input[value="Invent"]')?.form
t&&A(t)}function Y(){T()&&(X(),function(){const s=n('input[name="recipe_id"]')
if(!s)return
const t=Q()
j(L,{props:{max:t,recipeID:s.value},target:S()})}())}_(["click"])
export{Y as default}
//# sourceMappingURL=viewRecipe-DX-8VOt9.js.map
