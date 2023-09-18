import{a as t,u as n,$ as s,v as e,w as i,p as a,x as r,y as c,z as o,c as u,A as f,i as m,l,B as d,o as p,C as h,D as k,s as g,g as v}from"./calfSystem-929ac228.js"
import{a as b}from"./all-414e0607.js"
import{c as T}from"./createInput-c66459c1.js"
import{c as x}from"./createLabel-7740ab51.js"
import{c as y}from"./chunk-cd03a005.js"
import{i as j}from"./isArray-09a53da7.js"
import{r as I}from"./regExpGroups-9d5b9f10.js"
function C(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}function L(t){return n({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}async function E(t){return function(t){const n=t.filter((t=>0===t.r)),s=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:s.length>0?{e:{message:s[0].m},s:!1}:{e:{message:t[0].m},s:!1}}(await b(t.map(L)))}function M(t,n){e(n,`<li class="fshNbrList">${t}</li>`)}let q
function w(t,n){return!t||(function(t){return!t.s&&q!==t.e.message}(t)&&(q=t.e.message,M(t.e.message,n)),!t.s||void 0)}function B(t,n,s){const e=x({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return c(e,s),e}function N(t,n){const s=n.children[0],{tipped:e}=s.dataset,{itemId:i,invId:a}=I(f,e)
return i&&a?(t[i]?t[i].invIds.push(a):t[i]={invIds:[a],tipped:e.replace(/&extra=\d/,""),src:s.src},t):t}function Q(t,n){const s=n[1],e=l(),i=l({innerHTML:`<img src="${s.src}" class="tip-dynamic" data-tipped="${s.tipped}">`})
m(e,i)
const a=l({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${s.invIds.length}</button>`})
m(e,a),m(t,e)}function A(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=v(`temp-inv-${t.id}`)
n&&g("",n)}function H(t,n){w(n,t)||j(n.r)&&function(t,n){n.r.forEach(A),M(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}async function S(t,n){var e
H(t,await(e=n,s(C,E,e)))}function z(t,n,s){k("fshBls",s.target)&&function(t,n,s){const e=s.dataset.id,{invIds:i}=t[e]
g(`taking all ${i.length} items`,s.parentNode),y(40,i).forEach(u(S,n))}(t,n,s.target)}function F(t,n,s){const e=l({className:"fshTakeGrid"})
!function(t,n){h(n).forEach(u(Q,t))}(e,t),m(n,e),p(e,u(z,t,s))}function G(t){const n=l({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),{takeContainer:s,takeResult:e}=function(){const t=l(),n=d()
return m(t,n),{takeContainer:t,takeResult:n}}()
F(t,n,e),m(n,l()),m(n,s),m(a(),n)}function O(t,n){B("qtOn","Mailbox",n)
G(t.reduce(N,{}))}function R(){if(i()||!a())return
const t=r("a",a())
if(0===t.length)return
const n=a().lastElementChild
!function(t,n){const s=T({id:"fshQuickTake",type:"checkbox"})
c(s,n),o(s,"change",u(O,t,n))}(t,n),B("qtOff","Quick Take",n)}export{R as default}
//# sourceMappingURL=mailbox-52d87d7b.js.map
