import{c as t}from"./chunk-c6dcf4eb.js"
import{w as n,x as i,g as e,p as s,P as a,t as c,k as o,m as r,h as f,o as u,e as d,l as m,A as l,y as p}from"./calfSystem-0708a9bb.js"
import{c as h}from"./createInput-d5428169.js"
import{c as k}from"./createLabel-505cb810.js"
import{c as b}from"./createUl-ddc53876.js"
import{i as g}from"./insertElementBefore-0a7f2602.js"
import{i as v}from"./isArray-91e28808.js"
import{j as T,o as j}from"./jsonFail-859dcb1b.js"
function x(t){return function(t){return n({cmd:"tempinv",subcmd:"takeitems",item:t})}(t)}function y(t,n,i){const e=k({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return g(e,i),e}function E(t,n){const i=n.children[0],{tipped:e}=i.dataset,s=o.exec(e)
if(!s)return t
const a=s[1],c=s[2]
return t[a]?t[a].invIds.push(c):t[a]={invIds:[c],tipped:e.replace(/&extra=\d/,""),src:i.src},t}function I(t,n){const i=n[1],e=r(),s=r({innerHTML:`<img src="${i.src}" class="tip-dynamic" data-tipped="${i.tipped}">`})
f(e,s)
const a=r({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${i.invIds.length}</button>`})
f(e,a),f(t,e)}function L(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=p(`temp-inv-${t.id}`)
n&&l("",n)}function M(t,n){T(n,t)||v(n.r)&&function(t,n){n.r.forEach(L),j(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function q(t,n){x(n).then(c(M,t))}function B(n,i,e){m("fshBls",e.target)&&function(n,i,e){const s=e.dataset.id,{invIds:a}=n[s]
l(`taking all ${a.length} items`,e.parentNode),t(40,a).forEach(c(q,i))}(n,i,e.target)}function Q(t,n,i){const e=r({className:"fshTakeGrid"})
!function(t,n){d(n).forEach(c(I,t))}(e,t),f(n,e),u(e,c(B,t,i))}function A(t){const n=r({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),i=function(t){const n=r(),i=b()
return f(n,i),f(t,n),i}(n)
f(n,r()),Q(t,n,i),f(s,n)}function C(t,n){y("qtOn","Mailbox",n)
A(t.reduce(E,{}))}function H(){if(i())return
const t=e("a",s)
if(0===t.length)return
const n=s.lastElementChild
!function(t,n){const i=h({id:"fshQuickTake",type:"checkbox"})
g(i,n),a(i,"change",c(C,t,n))}(t,n),y("qtOff","Quick Take",n)}export default H
//# sourceMappingURL=mailbox-f8fd309d.js.map
