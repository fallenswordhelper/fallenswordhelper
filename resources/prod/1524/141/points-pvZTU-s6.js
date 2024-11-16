import{n,b as t,a8 as e,r as a,ad as s,g as i,o as r,s as l,i as o,a9 as c,c as m,aq as u,ar as f,aa as p}from"./calfSystem-Blt4DbaE.js"
import{c as d}from"./createSpan-qOSQqjTl.js"
import{i as b}from"./insertTextBeforeEnd-C2DfAAnt.js"
import{n as g}from"./numberIsNaN-CGkd1jiA.js"
import{i as x}from"./intValue-C7nTQec1.js"
import{p as S}from"./parseGoldUpgrades-C4JQA_G2.js"
import"./genericNotification-Bo-vlgzF.js"
let E=0,h=0
const N={}
function j(n,t){return e(t).includes(n)}function M(n){return E.find(t(j,n))}function y(n,t,s){if(!N[n][s]){const i=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,s),r=a(i,e(t))
N[n][s]=r}return N[n][s]}function $(n,t,e,a){const s=function(n,t){return y(n,t,"amount")}(n,t),i=function(n,t){return y(n,t.nextElementSibling,"cost")}(n,t)
let r=Math.floor(h/i)*s
e*i<=h?(r=e*s,a.className="fshBlue"):a.className="fshRed",c(`(+${r} stamina)`,a)}function C(n,t,e){l("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(N[n]||(N[n]={}),!N[n].span){const e=d()
b(t," "),o(t,e),N[n].span=e}return N[n].span}(n,t)
g(s)||0===s?i.className="fshHide":$(n,t,s,i)}function k(n){const e=M(n)
r(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",t(C,n,e))}function v(){h=x(e(i("statbar-fsp"))),k("Current"),k("Maximum"),m(`<a href="${u}${f}marketplace">Sell at Marketplace</a>`,M("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function R(n,t){const e=M(n).nextElementSibling.nextElementSibling
if(e){const n=Number(a(/(?<value>\d{1,3}) \/ 115/,e.innerHTML))
s(t,n+5)}}function w(){"1"===p("type")?S():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),E.length<1||(R("+1 Max Allies","alliestotal"),R("+1 Max Enemies","enemiestotal"),v()))}export{w as default}
//# sourceMappingURL=points-pvZTU-s6.js.map
