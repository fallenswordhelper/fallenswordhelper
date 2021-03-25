import{a as s}from"./addCommas-fc2f471e.js"
import{c as t}from"./closestTable-7d554f21.js"
import{f as n,p as o,z as e,B as a}from"./calfSystem-eeb1d862.js"
import"./closest-7968af48.js"
let f,r,c
function i(){return f||(f=e("amount")),f}function u(n){const o=i().value
a(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!c){const s=t(i()).insertRow(2)
c=s.insertCell(0),c.colSpan="2",c.className="fshCenter"}return c}())}function l(){const s=(r||(r=e("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):c&&""!==c.innerHTML&&a("",c)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-9b6121b7.js.map
