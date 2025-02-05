import{l as n,r as t,al as e,aC as a,ad as s,g as l,e as i,aD as o,aE as c,d as u,c as r,s as f,am as m,aF as d,at as p,i as x,ae as b,af as g,aG as E}from"./calfSystem-BAeDn21M.js"
let S=0,h=0
const M={}
function y(n,t){return s(t).includes(n)}function C(n){return S.find(u(y,n))}function N(n,e,a){if(!M[n][a]){const l=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),i=t(l,s(e))
M[n][a]=i}return M[n][a]}function $(n,t,e,a){const s=function(n,t){return N(n,t,"amount")}(n,t),l=function(n,t){return N(n,t.nextElementSibling,"cost")}(n,t)
let i=Math.floor(h/l)*s
e*l<=h?(i=e*s,a.className="fshBlue"):a.className="fshRed",b(`(+${i} stamina)`,a)}function k(n,t,e){f("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),l=function(n,t){if(M[n]||(M[n]={}),!M[n].span){const e=d()
p(t," "),x(t,e),M[n].span=e}return M[n].span}(n,t)
m(s)||0===s?l.className="fshHide":$(n,t,s,l)}function v(n){const t=C(n)
r(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",u(k,n,t))}function w(){h=a(s(l("statbar-fsp"))),v("Current"),v("Maximum"),i(`<a href="${o}${c}marketplace">Sell at Marketplace</a>`,C("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function A(n,a){const s=C(n).nextElementSibling.nextElementSibling
if(s){const n=Number(t(/(?<value>\d{1,3}) \/ 115/,s.innerHTML))
e(a,n+5)}}function G(){"1"===g("type")?E():(S=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),S.length<1||(A("+1 Max Allies","alliestotal"),A("+1 Max Enemies","enemiestotal"),w()))}export{G as default}
//# sourceMappingURL=points-Jo4wInlz.js.map
