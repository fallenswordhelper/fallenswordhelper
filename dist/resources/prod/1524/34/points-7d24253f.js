import{D as n,B as e,y as t,A as a,t as s,a6 as i,a7 as l,Z as r,f as o,h as f,z as c,R as m}from"./calfSystem-793da633.js"
import{p as u}from"./parseGoldUpgrades-1b333f3e.js"
import{c as p}from"./createSpan-2b6fe10e.js"
import{i as d}from"./insertTextBeforeEnd-62f9f72f.js"
import{i as b}from"./intValue-d2a6f461.js"
import{n as x}from"./numberIsNaN-738f2a3f.js"
let g,h
const E={}
function S(n,t){return e(t).includes(n)}function N(n){return g.find(s(S,n))}function j(n,t,a){if(!E[n][a]){const s=function(n,e){return"amount"===e?new RegExp(`\\+(\\d+) ${n}`):/(\d+)\xA0/}(n,a),i=e(t).match(s)[1]
E[n][a]=i}return E[n][a]}function y(n,e,t,a){const s=function(n,e){return j(n,e,"amount")}(n,e),i=function(n,e){return j(n,e.nextElementSibling,"cost")}(n,e)
let l
t*i<=h?(l=t*s,a.className="fshBlue"):(l=Math.floor(h/i)*s,a.className="fshRed"),c(`(+${l} stamina)`,a)}function M(n,e,t){const{target:a}=t,s=Number(a.value),i=function(n,e){if(E[n]||(E[n]={}),!E[n].span){const t=p()
d(e," "),f(e,t),E[n].span=t}return E[n].span}(n,e)
x(s)||0===s?i.className="fshHide":y(n,e,s,i)}function $(n){const e=N(n)
o(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(M,n,e))}function k(){h=b(e(t("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function A(n,e){const t=N(n).nextElementSibling.nextElementSibling
if(t){const n=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(e,n+5)}}function B(){"1"===m("type")?u():(g=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),k())}export default B
//# sourceMappingURL=points-7d24253f.js.map
