import{a as t,u as n,$ as e,v as s,w as i,p as a,x as r,y as c,z as o,c as u,s as m,A as f,i as l,m as d,B as p,o as k,C as h,D as g,d as b,E as v,g as T}from"./calfSystem-BjarbvkO.js"
import{a as x}from"./all-YfMtr2SN.js"
import{c as y}from"./createInput-annr5T-c.js"
import{c as j}from"./createLabel-SW6vqMfY.js"
import{i as E}from"./isArray-eVldfhw1.js"
import{r as I}from"./regExpGroups-DF34eiOE.js"
function C(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}function L(t){return n({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function M(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await x(t.map(L)))}function Q(t,n){s(n,`<li class="fshNbrList">${t}</li>`)}let S=""
function q(t,n){return!t||(function(t){return!t.s&&S!==t.e.message}(t)&&(S=t.e.message,Q(t.e.message,n)),!t.s||void 0)}function w(t,n,e){const s=j({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return c(s,e),s}function B(t,n){const e=n.children[0],{tipped:s}=e.dataset,{itemId:i,invId:a}=I(f,s)
return i&&a?(t[i]?t[i].invIds.push(a):t[i]={invIds:[a],tipped:s.replace(/&extra=\d/,""),src:e.src},t):t}function N(t,n){const e=n[1],s=d(),i=d({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
l(s,i)
const a=d({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
l(s,a),l(t,s)}function A(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=T(`temp-inv-${t.id}`)
n&&b("",n)}function H(t,n){q(n,t)||E(n.r)&&function(t,n){n.r.forEach(A),Q(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}async function z(t,n){var s
H(t,await(s=n,e(C,M,s)))}function G(t,n,e){g("fshBls",e.target)&&function(t,n,e){m("mailbox","takeSimilar")
const s=e.dataset.id,{invIds:i}=t[s]
b(`taking all ${i.length} items`,e.parentNode),v(40,i).forEach(u(z,n))}(t,n,e.target)}function O(t,n,e){const s=d({className:"fshTakeGrid"})
!function(t,n){h(n).forEach(u(N,t))}(s,t),l(n,s),k(s,u(G,t,e))}function R(t){const n=d({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:e,takeResult:s}=function(){const t=d(),n=p()
return l(t,n),{takeContainer:t,takeResult:n}}()
O(t,n,s),l(n,d()),l(n,e),l(a(),n)}function _(t,n){m("mailbox","toggleQuickTake"),w("qtOn","Mailbox",n)
R(t.reduce(B,{}))}function D(){if(i()||!a())return
const t=r("a",a())
if(0===t.length)return
const n=a().lastElementChild
!function(t,n){const e=y({id:"fshQuickTake",type:"checkbox"})
c(e,n),o(e,"change",u(_,t,n))}(t,n),w("qtOff","Quick Take",n)}export{D as default}
//# sourceMappingURL=mailbox-tW0nR8Pi.js.map
