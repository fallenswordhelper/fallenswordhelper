import{a as t,u as n,$ as e,v as s,w as i,p as a,x as r,y as c,z as o,c as m,s as u,A as f,i as l,m as d,B as p,o as k,C as h,D as g,d as b,g as v}from"./calfSystem-ZGMc097r.js"
import{a as T}from"./all-TTLWag-d.js"
import{c as x}from"./createInput-p1XymqYu.js"
import{c as y}from"./createLabel-WJaaOpl4.js"
import{c as j}from"./chunk-joYXv2f3.js"
import{i as I}from"./isArray-bNviZzJA.js"
import{r as C}from"./regExpGroups-tMD9g2Io.js"
function L(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}function E(t){return n({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function M(t){return function(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await T(t.map(E)))}function Q(t,n){s(n,`<li class="fshNbrList">${t}</li>`)}let q
function w(t,n){return!t||(function(t){return!t.s&&q!==t.e.message}(t)&&(q=t.e.message,Q(t.e.message,n)),!t.s||void 0)}function B(t,n,e){const s=y({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return c(s,e),s}function N(t,n){const e=n.children[0],{tipped:s}=e.dataset,{itemId:i,invId:a}=C(f,s)
return i&&a?(t[i]?t[i].invIds.push(a):t[i]={invIds:[a],tipped:s.replace(/&extra=\d/,""),src:e.src},t):t}function S(t,n){const e=n[1],s=d(),i=d({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
l(s,i)
const a=d({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
l(s,a),l(t,s)}function A(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=v(`temp-inv-${t.id}`)
n&&b("",n)}function H(t,n){w(n,t)||I(n.r)&&function(t,n){n.r.forEach(A),Q(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}async function z(t,n){var s
H(t,await(s=n,e(L,M,s)))}function F(t,n,e){g("fshBls",e.target)&&function(t,n,e){u("mailbox","takeSimilar")
const s=e.dataset.id,{invIds:i}=t[s]
b(`taking all ${i.length} items`,e.parentNode),j(40,i).forEach(m(z,n))}(t,n,e.target)}function G(t,n,e){const s=d({className:"fshTakeGrid"})
!function(t,n){h(n).forEach(m(S,t))}(s,t),l(n,s),k(s,m(F,t,e))}function O(t){const n=d({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:e,takeResult:s}=function(){const t=d(),n=p()
return l(t,n),{takeContainer:t,takeResult:n}}()
G(t,n,s),l(n,d()),l(n,e),l(a(),n)}function R(t,n){u("mailbox","toggleQuickTake"),B("qtOn","Mailbox",n)
O(t.reduce(N,{}))}function _(){if(i()||!a())return
const t=r("a",a())
if(0===t.length)return
const n=a().lastElementChild
!function(t,n){const e=x({id:"fshQuickTake",type:"checkbox"})
c(e,n),o(e,"change",m(R,t,n))}(t,n),B("qtOff","Quick Take",n)}export{_ as default}
//# sourceMappingURL=mailbox-ZFZA9TUu.js.map
