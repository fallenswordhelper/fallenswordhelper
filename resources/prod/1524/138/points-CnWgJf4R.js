import{k as n,a8 as t,g as e,d as a,aq as s,ar as i,r,ae as l,c as o,b as c,s as m,i as u,a9 as f,aa as p}from"./calfSystem-BjarbvkO.js"
import{c as d}from"./createSpan-BDkIr1HN.js"
import{i as b}from"./insertTextBeforeEnd-_o2buZqe.js"
import{n as g}from"./numberIsNaN-CGkd1jiA.js"
import{i as x}from"./intValue-C7nTQec1.js"
import{p as S}from"./parseGoldUpgrades-CvVJdBo5.js"
import"./genericNotification-COs8VA7h.js"
let E=0,h=0
const N={}
function j(n,e){return t(e).includes(n)}function M(n){return E.find(o(j,n))}function y(n,e,a){if(!N[n][a]){const s=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),i=r(s,t(e))
N[n][a]=i}return N[n][a]}function $(n,t,e,a){const s=function(n,t){return y(n,t,"amount")}(n,t),i=function(n,t){return y(n,t.nextElementSibling,"cost")}(n,t)
let r=Math.floor(h/i)*s
e*i<=h?(r=e*s,a.className="fshBlue"):a.className="fshRed",f(`(+${r} stamina)`,a)}function k(n,t,e){m("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(N[n]||(N[n]={}),!N[n].span){const e=d()
b(t," "),u(t,e),N[n].span=e}return N[n].span}(n,t)
g(s)||0===s?i.className="fshHide":$(n,t,s,i)}function C(n){const t=M(n)
c(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",o(k,n,t))}function v(){h=x(t(e("statbar-fsp"))),C("Current"),C("Maximum"),a(`<a href="${s}${i}marketplace">Sell at Marketplace</a>`,M("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function R(n,t){const e=M(n).nextElementSibling.nextElementSibling
if(e){const n=Number(r(/(?<value>\d{1,3}) \/ 115/,e.innerHTML))
l(t,n+5)}}function w(){"1"===p("type")?S():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),E.length<1||(R("+1 Max Allies","alliestotal"),R("+1 Max Enemies","enemiestotal"),v()))}export{w as default}
//# sourceMappingURL=points-CnWgJf4R.js.map
