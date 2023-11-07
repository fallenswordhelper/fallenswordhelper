import{k as n,a3 as t,g as e,d as a,aj as s,ak as i,r,a9 as o,c as l,b as c,s as m,i as u,a4 as f,a5 as p}from"./calfSystem-VUa7wwu1.js"
import{c as d}from"./createSpan-3W4T-7NF.js"
import{i as b}from"./insertTextBeforeEnd-l_wbz-Jp.js"
import{n as x}from"./numberIsNaN--k2kVli9.js"
import{i as g}from"./intValue-JHhLnq8V.js"
import{p as S}from"./parseGoldUpgrades-G3IYfc3Q.js"
import"./genericNotification-bzvMdqLI.js"
let E=0,h=0
const j={}
function N(n,e){return t(e).includes(n)}function M(n){return E.find(l(N,n))}function k(n,e,a){if(!j[n][a]){const s=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),i=r(s,t(e))
j[n][a]=i}return j[n][a]}function y(n,t,e,a){const s=function(n,t){return k(n,t,"amount")}(n,t),i=function(n,t){return k(n,t.nextElementSibling,"cost")}(n,t)
let r=Math.floor(h/i)*s
e*i<=h?(r=e*s,a.className="fshBlue"):a.className="fshRed",f(`(+${r} stamina)`,a)}function C(n,t,e){m("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(j[n]||(j[n]={}),!j[n].span){const e=d()
b(t," "),u(t,e),j[n].span=e}return j[n].span}(n,t)
x(s)||0===s?i.className="fshHide":y(n,t,s,i)}function $(n){const t=M(n)
c(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",l(C,n,t))}function v(){h=g(t(e("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${s}${i}marketplace">Sell at Marketplace</a>`,M("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function w(n,t){const e=M(n).nextElementSibling.nextElementSibling
if(e){const n=Number(r(/(?<value>\d{1,3}) \/ 115/,e.innerHTML))
o(t,n+5)}}function A(){"1"===p("type")?S():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),w("+1 Max Allies","alliestotal"),w("+1 Max Enemies","enemiestotal"),v())}export{A as default}
//# sourceMappingURL=points-Y-zJ-9t2.js.map
