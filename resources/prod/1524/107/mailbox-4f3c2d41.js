import{a as t,u as n,$ as e,v as s,w as i,p as a,x as r,y as c,z as o,c as u,A as f,i as m,l,B as d,o as p,C as h,D as k,s as g,E as v,g as b}from"./calfSystem-2fff342b.js"
import{a as T}from"./all-414e0607.js"
import{c as x}from"./createInput-9528c659.js"
import{c as y}from"./createLabel-c0441204.js"
import{c as j}from"./chunk-cd03a005.js"
import{r as I}from"./regExpGroups-2038386a.js"
function C(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}function E(t){return n({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function L(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await T(t.map(E)))}function M(t,n){s(n,`<li class="fshNbrList">${t}</li>`)}let q
function w(t,n){return!t||(function(t){return!t.s&&q!==t.e.message}(t)&&(q=t.e.message,M(t.e.message,n)),!t.s||void 0)}function B(t,n,e){const s=y({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return c(s,e),s}function N(t,n){const e=n.children[0],{tipped:s}=e.dataset,{itemId:i,invId:a}=I(f,s)
return i&&a?(t[i]?t[i].invIds.push(a):t[i]={invIds:[a],tipped:s.replace(/&extra=\d/,""),src:e.src},t):t}function Q(t,n){const e=n[1],s=l(),i=l({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
m(s,i)
const a=l({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
m(s,a),m(t,s)}function H(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=b(`temp-inv-${t.id}`)
n&&g("",n)}function S(t,n){w(n,t)||v(n.r)&&function(t,n){n.r.forEach(H),M(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}async function z(t,n){var s
S(t,await(s=n,e(C,L,s)))}function A(t,n,e){k("fshBls",e.target)&&function(t,n,e){const s=e.dataset.id,{invIds:i}=t[s]
g(`taking all ${i.length} items`,e.parentNode),j(40,i).forEach(u(z,n))}(t,n,e.target)}function G(t,n,e){const s=l({className:"fshTakeGrid"})
!function(t,n){h(n).forEach(u(Q,t))}(s,t),m(n,s),p(s,u(A,t,e))}function O(t){const n=l({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:e,takeResult:s}=function(){const t=l(),n=d()
return m(t,n),{takeContainer:t,takeResult:n}}()
G(t,n,s),m(n,l()),m(n,e),m(a(),n)}function R(t,n){B("qtOn","Mailbox",n)
O(t.reduce(N,{}))}function _(){if(i()||!a())return
const t=r("a",a())
if(0===t.length)return
const n=a().lastElementChild
!function(t,n){const e=x({id:"fshQuickTake",type:"checkbox"})
c(e,n),o(e,"change",u(R,t,n))}(t,n),B("qtOff","Quick Take",n)}export{_ as default}
//# sourceMappingURL=mailbox-4f3c2d41.js.map
