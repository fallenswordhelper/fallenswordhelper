import{D as e,B as n,y as t,A as a,t as s,a7 as i,a8 as l,_ as r,f as o,h as c,z as f,S as m}from"./calfSystem-37f70deb.js"
import{p as u}from"./parseGoldUpgrades-e63f098c.js"
import{c as p}from"./createSpan-821c0562.js"
import{i as d}from"./insertTextBeforeEnd-6d828e17.js"
import{i as x}from"./intValue-55d66e09.js"
import{n as b}from"./numberIsNaN-c188f177.js"
let S,g
const h={}
function E(e,t){return n(t).includes(e)}function N(e){return S.find(s(E,e))}function j(e,t,a){if(!h[e][a]){const s=function(e,n){return"amount"===n?new RegExp(`\\+(\\d+) ${e}`):/(\d+)\xA0/}(e,a),i=n(t).match(s)[1]
h[e][a]=i}return h[e][a]}function y(e,n,t,a){const s=function(e,n){return j(e,n,"amount")}(e,n),i=function(e,n){return j(e,n.nextElementSibling,"cost")}(e,n)
let l
t*i<=g?(l=t*s,a.className="fshBlue"):(l=Math.floor(g/i)*s,a.className="fshRed"),f(`(+${l} stamina)`,a)}function M(e,n,t){const{target:a}=t,s=Number(a.value),i=function(e,n){if(h[e]||(h[e]={}),!h[e].span){const t=p()
d(n," "),c(n,t),h[e].span=t}return h[e].span}(e,n)
b(s)||0===s?i.className="fshHide":y(e,n,s,i)}function $(e){const n=N(e)
o(n.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(M,e,n))}function k(){g=x(n(t("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function A(e,n){const t=N(e).nextElementSibling.nextElementSibling
if(t){const e=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(n,e+5)}}function B(){"1"===m("type")?u():(S=e("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),k())}export default B
//# sourceMappingURL=points-b5c83cb3.js.map
