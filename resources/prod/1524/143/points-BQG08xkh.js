import{k as n,aA as t,ac as e,g as a,d as s,aB as i,aC as l,r as c,aj as o,c as r,b as u,s as f,ak as m,aD as d,ar as b,i as p,ad as x,ae as g,aE as E}from"./calfSystem-ChzN4Q-P.js"
let S=0,h=0
const M={}
function k(n,t){return e(t).includes(n)}function y(n){return S.find(r(k,n))}function C(n,t,a){if(!M[n][a]){const s=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),i=c(s,e(t))
M[n][a]=i}return M[n][a]}function N(n,t,e,a){const s=function(n,t){return C(n,t,"amount")}(n,t),i=function(n,t){return C(n,t.nextElementSibling,"cost")}(n,t)
let l=Math.floor(h/i)*s
e*i<=h?(l=e*s,a.className="fshBlue"):a.className="fshRed",x(`(+${l} stamina)`,a)}function $(n,t,e){f("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(M[n]||(M[n]={}),!M[n].span){const e=d()
b(t," "),p(t,e),M[n].span=e}return M[n].span}(n,t)
m(s)||0===s?i.className="fshHide":N(n,t,s,i)}function v(n){const t=y(n)
u(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",r($,n,t))}function A(){h=t(e(a("statbar-fsp"))),v("Current"),v("Maximum"),s(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,y("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function j(n,t){const e=y(n).nextElementSibling.nextElementSibling
if(e){const n=Number(c(/(?<value>\d{1,3}) \/ 115/,e.innerHTML))
o(t,n+5)}}function w(){"1"===g("type")?E():(S=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),S.length<1||(j("+1 Max Allies","alliestotal"),j("+1 Max Enemies","enemiestotal"),A()))}export{w as default}
//# sourceMappingURL=points-BQG08xkh.js.map
