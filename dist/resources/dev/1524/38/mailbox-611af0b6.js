import{c as t}from"./chunk-f19f9471.js"
import{x as n,$ as e,y as s,g as i,p as a,Q as r,t as o,k as c,m as f,h as m,o as d,e as u,l,B as p,R as h,z as k}from"./calfSystem-d56087e1.js"
import{c as b}from"./createInput-0182b589.js"
import{c as g}from"./createLabel-abb72e31.js"
import{c as j}from"./createUl-3d5c471f.js"
import{a as v}from"./allthen-8480e63e.js"
import{i as x}from"./indexAjaxJson-976f4bdd.js"
import{i as T}from"./insertElementBefore-71272774.js"
import{j as y,o as B}from"./jsonFail-f9e70d0f.js"
import"./all-edb79f43.js"
function E(t){return x({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function I(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function L(t){return v(t.map(E),I)}function M(t){return n({cmd:"tempinv",subcmd:"takeitems",item:t})}function Q(t,n,e){const s=g({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return T(s,e),s}function q(t,n){const e=n.children[0],{tipped:s}=e.dataset,i=c.exec(s)
if(!i)return t
const a=i[1],r=i[2]
return t[a]?t[a].invIds.push(r):t[a]={invIds:[r],tipped:s.replace(/&extra=\d/,""),src:e.src},t}function C(t,n){const e=n[1],s=f(),i=f({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
m(s,i)
const a=f({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
m(s,a),m(t,s)}function H(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=k(`temp-inv-${t.id}`)
n&&p("",n)}function N(t,n){y(n,t)||h(n.r)&&function(t,n){n.r.forEach(H),B(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function S(t,n){var s;(s=n,e(M,L,s)).then(o(N,t))}function z(n,e,s){l("fshBls",s.target)&&function(n,e,s){const i=s.dataset.id,{invIds:a}=n[i]
p(`taking all ${a.length} items`,s.parentNode),t(40,a).forEach(o(S,e))}(n,e,s.target)}function A(t,n,e){const s=f({className:"fshTakeGrid"})
!function(t,n){u(n).forEach(o(C,t))}(s,t),m(n,s),d(s,o(z,t,e))}function F(t){const n=f({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),e=function(t){const n=f(),e=j()
return m(n,e),m(t,n),e}(n)
m(n,f()),A(t,n,e),m(a,n)}function O(t,n){Q("qtOn","Mailbox",n)
F(t.reduce(q,{}))}function _(){if(s())return
const t=i("a",a)
if(0===t.length)return
const n=a.lastElementChild
!function(t,n){const e=b({id:"fshQuickTake",type:"checkbox"})
T(e,n),r(e,"change",o(O,t,n))}(t,n),Q("qtOff","Quick Take",n)}export default _
//# sourceMappingURL=mailbox-611af0b6.js.map