import{c as t}from"./chunk-eb7f7c4d.js"
import{x as n,$ as e,y as s,g as i,p as a,Q as r,t as c,k as o,m as f,h as m,o as d,e as u,l,B as p,R as h,z as k}from"./calfSystem-5d0c721b.js"
import{c as g}from"./createInput-73c334d2.js"
import{c as b}from"./createLabel-9f14be20.js"
import{c as j}from"./createUl-1a9e083d.js"
import{a as v}from"./allthen-e710674d.js"
import{i as x}from"./indexAjaxJson-f1851d17.js"
import{i as T}from"./insertElementBefore-656c48d5.js"
import{j as y,o as B}from"./jsonFail-79873134.js"
import"./all-d206e4b9.js"
function E(t){return x({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function I(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function L(t){return v(t.map(E),I)}function M(t){return n({cmd:"tempinv",subcmd:"takeitems",item:t})}function Q(t,n,e){const s=b({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return T(s,e),s}function q(t,n){const e=n.children[0],{tipped:s}=e.dataset,i=o.exec(s)
if(!i)return t
const a=i[1],r=i[2]
return t[a]?t[a].invIds.push(r):t[a]={invIds:[r],tipped:s.replace(/&extra=\d/,""),src:e.src},t}function C(t,n){const e=n[1],s=f(),i=f({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
m(s,i)
const a=f({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
m(s,a),m(t,s)}function H(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=k(`temp-inv-${t.id}`)
n&&p("",n)}function N(t,n){y(n,t)||h(n.r)&&function(t,n){n.r.forEach(H),B(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function S(t,n){var s;(s=n,e(M,L,s)).then(c(N,t))}function z(n,e,s){l("fshBls",s.target)&&function(n,e,s){const i=s.dataset.id,{invIds:a}=n[i]
p(`taking all ${a.length} items`,s.parentNode),t(40,a).forEach(c(S,e))}(n,e,s.target)}function A(t,n,e){const s=f({className:"fshTakeGrid"})
!function(t,n){u(n).forEach(c(C,t))}(s,t),m(n,s),d(s,c(z,t,e))}function F(t){const n=f({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),e=function(t){const n=f(),e=j()
return m(n,e),m(t,n),e}(n)
m(n,f()),A(t,n,e),m(a,n)}function O(t,n){Q("qtOn","Mailbox",n)
F(t.reduce(q,{}))}function _(){if(s())return
const t=i("a",a)
if(0===t.length)return
const n=a.lastElementChild
!function(t,n){const e=g({id:"fshQuickTake",type:"checkbox"})
T(e,n),r(e,"change",c(O,t,n))}(t,n),Q("qtOff","Quick Take",n)}export default _
//# sourceMappingURL=mailbox-d76e90a6.js.map
