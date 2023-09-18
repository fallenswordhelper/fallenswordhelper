import{j as n,a4 as t,g as e,s as a,ak as s,al as i,r as l,aa as r,c as o,b as c,i as m,a5 as u,a6 as f}from"./calfSystem-929ac228.js"
import{c as p}from"./createSpan-6761e587.js"
import{i as d}from"./insertTextBeforeEnd-0452315b.js"
import{n as b}from"./numberIsNaN-a40c3bbb.js"
import{i as x}from"./intValue-e1798d0a.js"
import{p as g}from"./parseGoldUpgrades-1eac944d.js"
let S=0,E=0
const h={}
function j(n,e){return t(e).includes(n)}function N(n){return S.find(o(j,n))}function M(n,e,a){if(!h[n][a]){const s=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),i=l(s,t(e))
h[n][a]=i}return h[n][a]}function y(n,t,e,a){const s=function(n,t){return M(n,t,"amount")}(n,t),i=function(n,t){return M(n,t.nextElementSibling,"cost")}(n,t)
let l=Math.floor(E/i)*s
e*i<=E?(l=e*s,a.className="fshBlue"):a.className="fshRed",u(`(+${l} stamina)`,a)}function k(n,t,e){const{target:a}=e,s=Number(a.value),i=function(n,t){if(h[n]||(h[n]={}),!h[n].span){const e=p()
d(t," "),m(t,e),h[n].span=e}return h[n].span}(n,t)
b(s)||0===s?i.className="fshHide":y(n,t,s,i)}function $(n){const t=N(n)
c(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",o(k,n,t))}function v(){E=x(t(e("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${s}${i}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function C(n,t){const e=N(n).nextElementSibling.nextElementSibling
if(e){const n=Number(l(/(?<value>\d{1,3}) \/ 115/,e.innerHTML))
r(t,n+5)}}function w(){"1"===f("type")?g():(S=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),C("+1 Max Allies","alliestotal"),C("+1 Max Enemies","enemiestotal"),v())}export{w as default}
//# sourceMappingURL=points-e8196c79.js.map
