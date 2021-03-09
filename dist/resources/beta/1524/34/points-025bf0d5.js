import{D as e,B as n,y as t,A as a,t as s,a6 as i,a7 as l,Z as r,f as o,h as f,z as c,R as m}from"./calfSystem-dfa26790.js"
import{p as u}from"./parseGoldUpgrades-aa47bebd.js"
import{c as p}from"./createSpan-5e073e7a.js"
import{i as d}from"./insertTextBeforeEnd-e745e28a.js"
import{i as b}from"./intValue-d2a6f461.js"
import{n as x}from"./numberIsNaN-738f2a3f.js"
let g,h
const E={}
function S(e,t){return n(t).includes(e)}function N(e){return g.find(s(S,e))}function j(e,t,a){if(!E[e][a]){const s=function(e,n){return"amount"===n?new RegExp(`\\+(\\d+) ${e}`):/(\d+)\xA0/}(e,a),i=n(t).match(s)[1]
E[e][a]=i}return E[e][a]}function y(e,n,t,a){const s=function(e,n){return j(e,n,"amount")}(e,n),i=function(e,n){return j(e,n.nextElementSibling,"cost")}(e,n)
let l
t*i<=h?(l=t*s,a.className="fshBlue"):(l=Math.floor(h/i)*s,a.className="fshRed"),c(`(+${l} stamina)`,a)}function M(e,n,t){const{target:a}=t,s=Number(a.value),i=function(e,n){if(E[e]||(E[e]={}),!E[e].span){const t=p()
d(n," "),f(n,t),E[e].span=t}return E[e].span}(e,n)
x(s)||0===s?i.className="fshHide":y(e,n,s,i)}function $(e){const n=N(e)
o(n.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(M,e,n))}function k(){h=b(n(t("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function A(e,n){const t=N(e).nextElementSibling.nextElementSibling
if(t){const e=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(n,e+5)}}function B(){"1"===m("type")?u():(g=e("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),k())}export default B
//# sourceMappingURL=points-025bf0d5.js.map
