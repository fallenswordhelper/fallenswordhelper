import{a as s}from"./addCommas-4b913655.js"
import{c as t}from"./closestTable-90fad5df.js"
import{f as n,p as o,y as a,A as e}from"./calfSystem-793da633.js"
import"./closest-f906514d.js"
let r,f,c
function i(){return r||(r=a("amount")),r}function u(n){const o=i().value
e(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!c){const s=t(i()).insertRow(2)
c=s.insertCell(0),c.colSpan="2",c.className="fshCenter"}return c}())}function l(){const s=(f||(f=a("price")),f)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):c&&""!==c.innerHTML&&e("",c)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-3b00db2d.js.map
