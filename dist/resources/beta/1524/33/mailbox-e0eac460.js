import{c as t}from"./chunk-c6dcf4eb.js"
import{w as n,x as e,g as i,p as s,P as c,t as a,k as o,m as r,h as f,o as u,e as m,l as d,A as l,y as p}from"./calfSystem-c91a5c89.js"
import{c as h}from"./createInput-a2c87173.js"
import{c as k}from"./createLabel-fec7fd21.js"
import{c as b}from"./createUl-64bfcfb0.js"
import{i as g}from"./insertElementBefore-0a7f2602.js"
import{i as v}from"./isArray-91e28808.js"
import{j as T,o as j}from"./jsonFail-536291fd.js"
function x(t){return function(t){return n({cmd:"tempinv",subcmd:"takeitems",item:t})}(t)}function y(t,n,e){const i=k({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return g(i,e),i}function E(t,n){const e=n.children[0],{tipped:i}=e.dataset,s=o.exec(i)
if(!s)return t
const c=s[1],a=s[2]
return t[c]?t[c].invIds.push(a):t[c]={invIds:[a],tipped:i.replace(/&extra=\d/,""),src:e.src},t}function I(t,n){const e=n[1],i=r(),s=r({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
f(i,s)
const c=r({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
f(i,c),f(t,i)}function L(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=p(`temp-inv-${t.id}`)
n&&l("",n)}function M(t,n){T(n,t)||v(n.r)&&function(t,n){n.r.forEach(L),j(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function q(t,n){x(n).then(a(M,t))}function B(n,e,i){d("fshBls",i.target)&&function(n,e,i){const s=i.dataset.id,{invIds:c}=n[s]
l(`taking all ${c.length} items`,i.parentNode),t(40,c).forEach(a(q,e))}(n,e,i.target)}function Q(t,n,e){const i=r({className:"fshTakeGrid"})
!function(t,n){m(n).forEach(a(I,t))}(i,t),f(n,i),u(i,a(B,t,e))}function A(t){const n=r({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),e=function(t){const n=r(),e=b()
return f(n,e),f(t,n),e}(n)
f(n,r()),Q(t,n,e),f(s,n)}function C(t,n){y("qtOn","Mailbox",n)
A(t.reduce(E,{}))}function H(){if(e())return
const t=i("a",s)
if(0===t.length)return
const n=s.lastElementChild
!function(t,n){const e=h({id:"fshQuickTake",type:"checkbox"})
g(e,n),c(e,"change",a(C,t,n))}(t,n),y("qtOff","Quick Take",n)}export default H
//# sourceMappingURL=mailbox-e0eac460.js.map
