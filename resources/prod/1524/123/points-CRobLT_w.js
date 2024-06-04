import{k as n,a8 as t,g as e,d as a,ao as s,ap as i,r,ae as o,c as l,b as c,s as m,i as u,a9 as f,aa as p}from"./calfSystem-wTzwei3t.js"
import{c as d}from"./createSpan-D9J62kLX.js"
import{i as b}from"./insertTextBeforeEnd-BgotZSpp.js"
import{n as g}from"./numberIsNaN-CGkd1jiA.js"
import{i as x}from"./intValue-C7nTQec1.js"
import{p as S}from"./parseGoldUpgrades-bZ1I8XU6.js"
import"./genericNotification-DDfj2iYp.js"
let E=0,h=0
const N={}
function j(n,e){return t(e).includes(n)}function M(n){return E.find(l(j,n))}function y(n,e,a){if(!N[n][a]){const s=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),i=r(s,t(e))
N[n][a]=i}return N[n][a]}function k(n,t,e,a){const s=function(n,t){return y(n,t,"amount")}(n,t),i=function(n,t){return y(n,t.nextElementSibling,"cost")}(n,t)
let r=Math.floor(h/i)*s
e*i<=h?(r=e*s,a.className="fshBlue"):a.className="fshRed",f(`(+${r} stamina)`,a)}function C(n,t,e){m("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(N[n]||(N[n]={}),!N[n].span){const e=d()
b(t," "),u(t,e),N[n].span=e}return N[n].span}(n,t)
g(s)||0===s?i.className="fshHide":k(n,t,s,i)}function $(n){const t=M(n)
c(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",l(C,n,t))}function v(){h=x(t(e("statbar-fsp"))),$("Current"),$("Maximum"),a(`<a href="${s}${i}marketplace">Sell at Marketplace</a>`,M("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function T(n,t){const e=M(n).nextElementSibling.nextElementSibling
if(e){const n=Number(r(/(?<value>\d{1,3}) \/ 115/,e.innerHTML))
o(t,n+5)}}function w(){"1"===p("type")?S():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),E.length<1||(T("+1 Max Allies","alliestotal"),T("+1 Max Enemies","enemiestotal"),v()))}export{w as default}
//# sourceMappingURL=points-CRobLT_w.js.map
