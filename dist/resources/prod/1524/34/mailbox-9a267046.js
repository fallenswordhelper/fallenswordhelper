import{c as t}from"./chunk-5d7e6f3a.js"
import{w as n,x as e,g as i,p as s,P as a,t as c,k as o,m as r,h as f,o as d,e as u,l as m,A as l,y as p}from"./calfSystem-793da633.js"
import{c as h}from"./createInput-9733446a.js"
import{c as k}from"./createLabel-c606cd5f.js"
import{c as g}from"./createUl-870923e1.js"
import{i as b}from"./insertElementBefore-9e5d02cd.js"
import{i as v}from"./isArray-3d9d6e31.js"
import{j as T,o as j}from"./jsonFail-18078595.js"
function x(t){return function(t){return n({cmd:"tempinv",subcmd:"takeitems",item:t})}(t)}function y(t,n,e){const i=k({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return b(i,e),i}function E(t,n){const e=n.children[0],{tipped:i}=e.dataset,s=o.exec(i)
if(!s)return t
const a=s[1],c=s[2]
return t[a]?t[a].invIds.push(c):t[a]={invIds:[c],tipped:i.replace(/&extra=\d/,""),src:e.src},t}function I(t,n){const e=n[1],i=r(),s=r({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
f(i,s)
const a=r({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
f(i,a),f(t,i)}function L(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=p(`temp-inv-${t.id}`)
n&&l("",n)}function M(t,n){T(n,t)||v(n.r)&&function(t,n){n.r.forEach(L),j(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function q(t,n){x(n).then(c(M,t))}function B(n,e,i){m("fshBls",i.target)&&function(n,e,i){const s=i.dataset.id,{invIds:a}=n[s]
l(`taking all ${a.length} items`,i.parentNode),t(40,a).forEach(c(q,e))}(n,e,i.target)}function Q(t,n,e){const i=r({className:"fshTakeGrid"})
!function(t,n){u(n).forEach(c(I,t))}(i,t),f(n,i),d(i,c(B,t,e))}function A(t){const n=r({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),e=function(t){const n=r(),e=g()
return f(n,e),f(t,n),e}(n)
f(n,r()),Q(t,n,e),f(s,n)}function C(t,n){y("qtOn","Mailbox",n)
A(t.reduce(E,{}))}function H(){if(e())return
const t=i("a",s)
if(0===t.length)return
const n=s.lastElementChild
!function(t,n){const e=h({id:"fshQuickTake",type:"checkbox"})
b(e,n),a(e,"change",c(C,t,n))}(t,n),y("qtOff","Quick Take",n)}export default H
//# sourceMappingURL=mailbox-9a267046.js.map
