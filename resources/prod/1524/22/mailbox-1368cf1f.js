import{w as t,x as n,g as i,p as e,O as s,t as a,k as c,m as o,h as r,o as f,e as u,l as d,A as m,y as l}from"./calfSystem-d04e4be4.js"
import{i as p}from"./isArray-7fc52818.js"
import{c as h}from"./createInput-06f9cad3.js"
import{c as k}from"./createLabel-19df454f.js"
import{i as b}from"./insertElementBefore-cc030078.js"
import{c as g}from"./createUl-0f36c584.js"
import{c as v}from"./chunk-978bd788.js"
import{j as T,o as j}from"./jsonFail-189a1467.js"
function x(n){return function(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}(n)}function y(t,n,i){const e=k({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:"Toggle "+n})
return b(e,i),e}function E(t,n){const i=n.children[0],{tipped:e}=i.dataset,s=c.exec(e)
if(!s)return t
const a=s[1],o=s[2]
return t[a]?t[a].invIds.push(o):t[a]={invIds:[o],tipped:e.replace(/&extra=\d/,""),src:i.src},t}function I(t,n){const i=n[1],e=o(),s=o({innerHTML:`<img src="${i.src}" class="tip-dynamic" data-tipped="${i.tipped}">`})
r(e,s)
const a=o({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${i.invIds.length}</button>`})
r(e,a),r(t,e)}function L(t){!function(t){const n=$("#temp-inv-img-"+t).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=l("temp-inv-"+t.id)
n&&m("",n)}function M(t,n){T(n,t)||p(n.r)&&function(t,n){n.r.forEach(L),j(n.r.length.toString()+" item(s) taken.",t)}(t,n)}function q(t,n){x(n).then(a(M,t))}function B(t,n,i){d("fshBls",i.target)&&function(t,n,i){const e=i.dataset.id,{invIds:s}=t[e]
m(`taking all ${s.length} items`,i.parentNode),v(40,s).forEach(a(q,n))}(t,n,i.target)}function Q(t,n,i){const e=o({className:"fshTakeGrid"})
!function(t,n){u(n).forEach(a(I,t))}(e,t),r(n,e),f(e,a(B,t,i))}function A(t){const n=o({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),i=function(t){const n=o(),i=g()
return r(n,i),r(t,n),i}(n)
r(n,o()),Q(t,n,i),r(e,n)}function C(t,n){y("qtOn","Mailbox",n)
A(t.reduce(E,{}))}export default function(){if(n())return
const t=i("a",e)
if(0===t.length)return
const c=e.lastElementChild
!function(t,n){const i=h({id:"fshQuickTake",type:"checkbox"})
b(i,n),s(i,"change",a(C,t,n))}(t,c),y("qtOff","Quick Take",c)}
//# sourceMappingURL=mailbox-1368cf1f.js.map