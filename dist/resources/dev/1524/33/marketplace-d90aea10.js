import{a as s}from"./addCommas-20414553.js"
import{c as t}from"./closestTable-6f68d8f3.js"
import{f as n,p as o,y as e,A as a}from"./calfSystem-37f70deb.js"
import"./closest-8b679b7a.js"
let r,f,c
function i(){return r||(r=e("amount")),r}function u(n){const o=i().value
a(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!c){const s=t(i()).insertRow(2)
c=s.insertCell(0),c.colSpan="2",c.className="fshCenter"}return c}())}function l(){const s=(f||(f=e("price")),f)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):c&&""!==c.innerHTML&&a("",c)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-d90aea10.js.map
