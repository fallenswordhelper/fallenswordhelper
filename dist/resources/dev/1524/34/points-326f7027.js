import{D as n,B as e,y as t,A as a,t as s,a7 as i,a8 as l,_ as r,f as o,h as c,z as f,S as m}from"./calfSystem-c07e3259.js"
import{p as u}from"./parseGoldUpgrades-8e6b8c74.js"
import{c as p}from"./createSpan-9738bb01.js"
import{i as d}from"./insertTextBeforeEnd-3127a0cf.js"
import{i as b}from"./intValue-d2a6f461.js"
import{n as x}from"./numberIsNaN-738f2a3f.js"
let S,g
const h={}
function E(n,t){return e(t).includes(n)}function N(n){return S.find(s(E,n))}function j(n,t,a){if(!h[n][a]){const s=function(n,e){return"amount"===e?new RegExp(`\\+(\\d+) ${n}`):/(\d+)\xA0/}(n,a),i=e(t).match(s)[1]
h[n][a]=i}return h[n][a]}function y(n,e,t,a){const s=function(n,e){return j(n,e,"amount")}(n,e),i=function(n,e){return j(n,e.nextElementSibling,"cost")}(n,e)
let l
t*i<=g?(l=t*s,a.className="fshBlue"):(l=Math.floor(g/i)*s,a.className="fshRed"),f(`(+${l} stamina)`,a)}function M(n,e,t){const{target:a}=t,s=Number(a.value),i=function(n,e){if(h[n]||(h[n]={}),!h[n].span){const t=p()
d(e," "),c(e,t),h[n].span=t}return h[n].span}(n,e)
x(s)||0===s?i.className="fshHide":y(n,e,s,i)}function $(n){const e=N(n)
o(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(M,n,e))}function k(){g=b(e(t("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function A(n,e){const t=N(n).nextElementSibling.nextElementSibling
if(t){const n=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(e,n+5)}}function B(){"1"===m("type")?u():(S=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),k())}export default B
//# sourceMappingURL=points-326f7027.js.map
