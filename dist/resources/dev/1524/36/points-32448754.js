import{E as e,C as n,z as t,B as a,t as s,a9 as i,aa as l,a0 as r,f as c,h as o,A as m,T as f}from"./calfSystem-eeb1d862.js"
import{p as u}from"./parseGoldUpgrades-c81fc27c.js"
import{c as d}from"./createSpan-c8cd4d0e.js"
import{i as p}from"./insertTextBeforeEnd-1e1caba8.js"
import{i as b}from"./intValue-ca51a3c0.js"
import{n as x}from"./numberIsNaN-891c59d9.js"
let E,g
const h={}
function S(e,t){return n(t).includes(e)}function N(e){return E.find(s(S,e))}function j(e,t,a){if(!h[e][a]){const s=function(e,n){return"amount"===n?new RegExp(`\\+(\\d+) ${e}`):/(\d+)\xA0/}(e,a),i=n(t).match(s)[1]
h[e][a]=i}return h[e][a]}function M(e,n,t,a){const s=function(e,n){return j(e,n,"amount")}(e,n),i=function(e,n){return j(e,n.nextElementSibling,"cost")}(e,n)
let l
t*i<=g?(l=t*s,a.className="fshBlue"):(l=Math.floor(g/i)*s,a.className="fshRed"),m(`(+${l} stamina)`,a)}function y(e,n,t){const{target:a}=t,s=Number(a.value),i=function(e,n){if(h[e]||(h[e]={}),!h[e].span){const t=d()
p(n," "),o(n,t),h[e].span=t}return h[e].span}(e,n)
x(s)||0===s?i.className="fshHide":M(e,n,s,i)}function C(e){const n=N(e)
c(n.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(y,e,n))}function $(){g=b(n(t("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function k(e,n){const t=N(e).nextElementSibling.nextElementSibling
if(t){const e=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(n,e+5)}}function A(){"1"===f("type")?u():(E=e("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),k("+1 Max Allies","alliestotal"),k("+1 Max Enemies","enemiestotal"),$())}export default A
//# sourceMappingURL=points-32448754.js.map
