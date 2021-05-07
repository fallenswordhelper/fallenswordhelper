import{E as n,C as e,z as t,B as a,t as s,a8 as i,a9 as l,_ as r,f as o,h as c,A as f,S as m}from"./calfSystem-1d588248.js"
import{p as u}from"./parseGoldUpgrades-5fa691e8.js"
import{c as d}from"./createSpan-256b26cd.js"
import{i as p}from"./insertTextBeforeEnd-62568d2a.js"
import{i as b}from"./intValue-fefb28df.js"
import{n as x}from"./numberIsNaN-885a5556.js"
let E,S
const g={}
function h(n,t){return e(t).includes(n)}function N(n){return E.find(s(h,n))}function j(n,t,a){if(!g[n][a]){const s=function(n,e){return"amount"===e?new RegExp(`\\+(\\d+) ${n}`):/(\d+)\xA0/}(n,a),i=e(t).match(s)[1]
g[n][a]=i}return g[n][a]}function M(n,e,t,a){const s=function(n,e){return j(n,e,"amount")}(n,e),i=function(n,e){return j(n,e.nextElementSibling,"cost")}(n,e)
let l
t*i<=S?(l=t*s,a.className="fshBlue"):(l=Math.floor(S/i)*s,a.className="fshRed"),f(`(+${l} stamina)`,a)}function y(n,e,t){const{target:a}=t,s=Number(a.value),i=function(n,e){if(g[n]||(g[n]={}),!g[n].span){const t=d()
p(e," "),c(e,t),g[n].span=t}return g[n].span}(n,e)
x(s)||0===s?i.className="fshHide":M(n,e,s,i)}function C(n){const e=N(n)
o(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(y,n,e))}function $(){S=b(e(t("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function k(n,e){const t=N(n).nextElementSibling.nextElementSibling
if(t){const n=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(e,n+5)}}function A(){"1"===m("type")?u():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),k("+1 Max Allies","alliestotal"),k("+1 Max Enemies","enemiestotal"),$())}export default A
//# sourceMappingURL=points-8f7d4108.js.map
