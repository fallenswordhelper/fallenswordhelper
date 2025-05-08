import{k as n,a8 as t,g as e,d as a,ao as s,ap as i,r as o,ae as r,c as l,b as c,s as m,i as u,a9 as f,aa as p}from"./calfSystem-G1dN925O.js"
import{c as d}from"./createSpan-E64hPGZD.js"
import{i as b}from"./insertTextBeforeEnd-jtp_d9bO.js"
import{n as x}from"./numberIsNaN--k2kVli9.js"
import{i as g}from"./intValue-JHhLnq8V.js"
import{p as S}from"./parseGoldUpgrades-2Ua9gLSV.js"
import"./genericNotification-CatkzHs-.js"
let E=0,h=0
const N={}
function j(n,e){return t(e).includes(n)}function M(n){return E.find(l(j,n))}function y(n,e,a){if(!N[n][a]){const s=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),i=o(s,t(e))
N[n][a]=i}return N[n][a]}function k(n,t,e,a){const s=function(n,t){return y(n,t,"amount")}(n,t),i=function(n,t){return y(n,t.nextElementSibling,"cost")}(n,t)
let o=Math.floor(h/i)*s
e*i<=h?(o=e*s,a.className="fshBlue"):a.className="fshRed",f(`(+${o} stamina)`,a)}function C(n,t,e){m("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(N[n]||(N[n]={}),!N[n].span){const e=d()
b(t," "),u(t,e),N[n].span=e}return N[n].span}(n,t)
x(s)||0===s?i.className="fshHide":k(n,t,s,i)}function $(n){const t=M(n)
c(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",l(C,n,t))}function v(){h=g(t(e("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${s}${i}marketplace">Sell at Marketplace</a>`,M("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function w(n,t){const e=M(n).nextElementSibling.nextElementSibling
if(e){const n=Number(o(/(?<value>\d{1,3}) \/ 115/,e.innerHTML))
r(t,n+5)}}function A(){"1"===p("type")?S():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),w("+1 Max Allies","alliestotal"),w("+1 Max Enemies","enemiestotal"),v())}export{A as default}
//# sourceMappingURL=points-sPzmBVXH.js.map
