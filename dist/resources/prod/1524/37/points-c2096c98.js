import{E as n,C as e,z as t,B as a,t as s,a8 as i,a9 as l,_ as r,f as o,h as c,A as m,S as f}from"./calfSystem-60c20ae9.js"
import{p as u}from"./parseGoldUpgrades-9a8d1ad2.js"
import{c as p}from"./createSpan-2b0536e4.js"
import{i as d}from"./insertTextBeforeEnd-26bd7036.js"
import{i as b}from"./intValue-0e97c9b9.js"
import{n as x}from"./numberIsNaN-a6723163.js"
let E,S
const g={}
function h(n,t){return e(t).includes(n)}function N(n){return E.find(s(h,n))}function j(n,t,a){if(!g[n][a]){const s=function(n,e){return"amount"===e?new RegExp(`\\+(\\d+) ${n}`):/(\d+)\xA0/}(n,a),i=e(t).match(s)[1]
g[n][a]=i}return g[n][a]}function M(n,e,t,a){const s=function(n,e){return j(n,e,"amount")}(n,e),i=function(n,e){return j(n,e.nextElementSibling,"cost")}(n,e)
let l
t*i<=S?(l=t*s,a.className="fshBlue"):(l=Math.floor(S/i)*s,a.className="fshRed"),m(`(+${l} stamina)`,a)}function y(n,e,t){const{target:a}=t,s=Number(a.value),i=function(n,e){if(g[n]||(g[n]={}),!g[n].span){const t=p()
d(e," "),c(e,t),g[n].span=t}return g[n].span}(n,e)
x(s)||0===s?i.className="fshHide":M(n,e,s,i)}function C(n){const e=N(n)
o(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(y,n,e))}function $(){S=b(e(t("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function k(n,e){const t=N(n).nextElementSibling.nextElementSibling
if(t){const n=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(e,n+5)}}function A(){"1"===f("type")?u():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),k("+1 Max Allies","alliestotal"),k("+1 Max Enemies","enemiestotal"),$())}export default A
//# sourceMappingURL=points-c2096c98.js.map
