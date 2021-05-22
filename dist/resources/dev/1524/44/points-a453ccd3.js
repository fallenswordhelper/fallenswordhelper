import{E as n,C as t,z as e,B as a,t as s,a8 as i,a9 as l,_ as r,f as o,h as f,A as c,S as m}from"./calfSystem-f7cf24f6.js"
import{p as u}from"./parseGoldUpgrades-68fc2d73.js"
import{c as p}from"./createSpan-0636b0fd.js"
import{i as d}from"./insertTextBeforeEnd-60f92d3f.js"
import{i as b}from"./intValue-66f66ba9.js"
import{n as x}from"./numberIsNaN-11f99b26.js"
let E,S
const g={}
function h(n,e){return t(e).includes(n)}function N(n){return E.find(s(h,n))}function j(n,e,a){if(!g[n][a]){const s=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(\d+)\xA0/}(n,a),i=t(e).match(s)[1]
g[n][a]=i}return g[n][a]}function M(n,t,e,a){const s=function(n,t){return j(n,t,"amount")}(n,t),i=function(n,t){return j(n,t.nextElementSibling,"cost")}(n,t)
let l
e*i<=S?(l=e*s,a.className="fshBlue"):(l=Math.floor(S/i)*s,a.className="fshRed"),c(`(+${l} stamina)`,a)}function y(n,t,e){const{target:a}=e,s=Number(a.value),i=function(n,t){if(g[n]||(g[n]={}),!g[n].span){const e=p()
d(t," "),f(t,e),g[n].span=e}return g[n].span}(n,t)
x(s)||0===s?i.className="fshHide":M(n,t,s,i)}function C(n){const t=N(n)
o(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(y,n,t))}function $(){S=b(t(e("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function k(n,t){const e=N(n).nextElementSibling.nextElementSibling
if(e){const n=Number(/(\d+) \/ 115/.exec(e.innerHTML)[1])
r(t,n+5)}}function A(){"1"===m("type")?u():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),k("+1 Max Allies","alliestotal"),k("+1 Max Enemies","enemiestotal"),$())}export default A
//# sourceMappingURL=points-a453ccd3.js.map
