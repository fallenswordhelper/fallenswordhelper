import{D as n,B as e,y as t,A as a,t as s,a6 as i,a7 as l,Z as r,f as o,h as c,z as m,R as f}from"./calfSystem-0708a9bb.js"
import{p as u}from"./parseGoldUpgrades-1ea143e4.js"
import{c as p}from"./createSpan-3083d966.js"
import{i as d}from"./insertTextBeforeEnd-17732318.js"
import{i as b}from"./intValue-55d66e09.js"
import{n as x}from"./numberIsNaN-c188f177.js"
let g,h
const E={}
function S(n,t){return e(t).includes(n)}function N(n){return g.find(s(S,n))}function j(n,t,a){if(!E[n][a]){const s=function(n,e){return"amount"===e?new RegExp(`\\+(\\d+) ${n}`):/(\d+)\xA0/}(n,a),i=e(t).match(s)[1]
E[n][a]=i}return E[n][a]}function y(n,e,t,a){const s=function(n,e){return j(n,e,"amount")}(n,e),i=function(n,e){return j(n,e.nextElementSibling,"cost")}(n,e)
let l
t*i<=h?(l=t*s,a.className="fshBlue"):(l=Math.floor(h/i)*s,a.className="fshRed"),m(`(+${l} stamina)`,a)}function M(n,e,t){const{target:a}=t,s=Number(a.value),i=function(n,e){if(E[n]||(E[n]={}),!E[n].span){const t=p()
d(e," "),c(e,t),E[n].span=t}return E[n].span}(n,e)
x(s)||0===s?i.className="fshHide":y(n,e,s,i)}function $(n){const e=N(n)
o(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(M,n,e))}function k(){h=b(e(t("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function A(n,e){const t=N(n).nextElementSibling.nextElementSibling
if(t){const n=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(e,n+5)}}function B(){"1"===f("type")?u():(g=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),k())}export default B
//# sourceMappingURL=points-b8889371.js.map
