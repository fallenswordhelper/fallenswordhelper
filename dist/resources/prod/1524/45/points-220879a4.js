import{E as e,C as n,z as t,B as a,t as s,a7 as i,a8 as l,Z as r,f as o,h as c,A as f,R as m}from"./calfSystem-e1e858cd.js"
import{p as u}from"./parseGoldUpgrades-d826c589.js"
import{c as d}from"./createSpan-b6d1f34b.js"
import{i as p}from"./insertTextBeforeEnd-fdc089ee.js"
import{i as b}from"./intValue-a6f9b475.js"
import{n as x}from"./numberIsNaN-c7db67d0.js"
let E,g
const h={}
function S(e,t){return n(t).includes(e)}function N(e){return E.find(s(S,e))}function j(e,t,a){if(!h[e][a]){const s=function(e,n){return"amount"===n?new RegExp(`\\+(\\d+) ${e}`):/(\d+)\xA0/}(e,a),i=n(t).match(s)[1]
h[e][a]=i}return h[e][a]}function M(e,n,t,a){const s=function(e,n){return j(e,n,"amount")}(e,n),i=function(e,n){return j(e,n.nextElementSibling,"cost")}(e,n)
let l
t*i<=g?(l=t*s,a.className="fshBlue"):(l=Math.floor(g/i)*s,a.className="fshRed"),f(`(+${l} stamina)`,a)}function y(e,n,t){const{target:a}=t,s=Number(a.value),i=function(e,n){if(h[e]||(h[e]={}),!h[e].span){const t=d()
p(n," "),c(n,t),h[e].span=t}return h[e].span}(e,n)
x(s)||0===s?i.className="fshHide":M(e,n,s,i)}function C(e){const n=N(e)
o(n.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(y,e,n))}function $(){g=b(n(t("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function k(e,n){const t=N(e).nextElementSibling.nextElementSibling
if(t){const e=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(n,e+5)}}function A(){"1"===m("type")?u():(E=e("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),k("+1 Max Allies","alliestotal"),k("+1 Max Enemies","enemiestotal"),$())}export default A
//# sourceMappingURL=points-220879a4.js.map
