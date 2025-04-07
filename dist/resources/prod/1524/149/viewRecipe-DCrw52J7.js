import{n as t,b8 as s,aa as n,q as e,$ as i,k as a,ce as r,R as c,S as o,X as u,dU as v,bF as l,Y as d,a0 as p,a7 as m,a2 as f,V as g,a3 as q,a4 as b,W as h,s as $,Z as k,bq as y,dF as I,a8 as C,a6 as _,dV as w,dW as x,ad as j,p as S,C as E,i as F,r as V,v as D,b6 as M,b5 as T,cD as A}from"./calfSystem-BGW9cdWN.js"
import{i as N}from"./inventing-r-yG0liI.js"
import{i as O}from"./interceptSubmit-CcvGNLGd.js"
import{x as P}from"./xPath-DGGECysO.js"
import"./formToUrl-BkW6Pnxi.js"
function R(t){const[s,i]=n(e("tr:nth-child(2) td",t)).split("/").map((t=>parseInt(t,10)))
return{have:s,need:i}}function U(){return t(`#pCC td[background^="${s}ui/inventory/"]`).map((t=>t.parentElement.parentElement)).map(R).reduce(((t,s)=>Math.min(t,Math.floor(s.have/s.need))),1/0)}function W(t){return N({subcmd:"doinvent",recipe_id:t})}async function B(t){const s=await a({cmd:"inventing",subcmd:"doinvent",recipe_id:t})
return s?function(t){const s=r(t)
return s.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:s},s:!1}}(s):{s:!1}}function Q(t,s,n,e,i,a){if(!g(s).checkValidity())return void g(s).reportValidity()
$("inventing","quickInvent"),n()
Array(g(e)).fill(i.recipeID).reduce(a,Promise.resolve())}var X=u('<div class="qi-error-container svelte-qp9a2g"><div class="qi-error-heading svelte-qp9a2g">INFORMATION</div> <div> </div></div>'),Y=u('<div class="qi-container svelte-qp9a2g"><label for="quick-invent-amount">Select how many to quick invent</label> <input class="custominput svelte-qp9a2g" min="1" required step="1" type="number"> <!> <button class="custombutton svelte-qp9a2g" type="button">Quick Invent</button> <div><!> <div class="composing-progress svelte-qp9a2g"><div class="composing-progress-bar svelte-qp9a2g"></div> <p> </p></div> <div class="qi-results-container svelte-qp9a2g"><div class="qi-result qi-result-success svelte-qp9a2g"> </div> <div class="qi-result qi-result-failure svelte-qp9a2g"> </div></div></div></div>')
function Z(t,s){c(s,!0)
let n=o(void 0),e=o(1),a=o(0),r=o(0),u=o(0),_=o("")
var j=Y(),S=d(k(j),2)
v(S,(t=>h(n,t)),(()=>g(n)))
var E=d(S,2)
l(E,{onclick:function(){h(e,s.max,!0),$("inventing","maxInventButton")},children:(t,s)=>{var n=y("(max)")
q(t,n)},$$slots:{default:!0}})
var F=d(E,2)
F.__click=[Q,n,function(){h(a,0),h(r,0),h(u,0),h(_,"")},e,s,async function(t,s){const n=await t
if(!n||!0===n.s){const t=await function(t){return i(W,B,t)}(s)
return t?.s?t.r.success_count>0?h(a,g(a)+1):h(r,g(r)+1):h(_,t?.e?.message??"Server Error",!0),h(u,(g(a)+g(r))/g(e)*100),t}return n}]
var V=d(F,2),D=k(V),M=t=>{var s=X(),n=d(k(s),2),e=k(n)
m((()=>C(e,g(_)))),w(3,s,(()=>x)),q(t,s)}
p(D,(t=>{g(_)&&t(M)}))
var T=d(D,2),A=k(T),N=d(A,2),O=k(N),P=d(T,2),R=k(P),U=k(R),Z=d(R,2),z=k(Z)
m((()=>{I(A,`width: ${g(u)??""}%;`),C(O,`${g(a)+g(r)} / ${g(e)??""}`),C(U,`Successes: ${g(a)??""}`),C(z,`Failures: ${g(r)??""}`)})),f(S,(()=>g(e)),(t=>h(e,t))),q(t,j),b()}function z(t){return`${M}items${T}view&item_id=${t}`}function G(t,s){const n=function(t){if(!t)return
const s=V(/\/items\/(?<id>\d+)\.gif/,t.src)
return s||void 0}(s)
if(!n)return
const e=function(t){return D({href:z(t),target:"_blank"})}(n)
E(e,t),F(e,t)}function H(t){G(t,t)}function J(){!function(){const t=P('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
G(e("#pCC b"),t)}(),t('#pCC img[src*="/items/"]').forEach(H)
const s=e('#pCC input[value="Invent"]')?.form
s&&O(s)}function K(){A()&&(J(),function(){const t=e('input[name="recipe_id"]')
if(!t)return
const s=U()
j(Z,{props:{max:s,recipeID:t.value},target:S()})}())}_(["click"])
export{K as default}
//# sourceMappingURL=viewRecipe-DCrw52J7.js.map
