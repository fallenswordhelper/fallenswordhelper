import{n,r as t,aj as e,aC as a,aa as s,g as i,h as l,aD as c,aE as o,e as r,c as u,s as f,ak as m,aF as d,ar as b,i as p,ab as x,ac as g,aG as h}from"./calfSystem-BGOTz8de.js"
let E=0,S=0
const M={}
function y(n,t){return s(t).includes(n)}function C(n){return E.find(r(y,n))}function N(n,e,a){if(!M[n][a]){const i=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),l=t(i,s(e))
M[n][a]=l}return M[n][a]}function k(n,t,e,a){const s=function(n,t){return N(n,t,"amount")}(n,t),i=function(n,t){return N(n,t.nextElementSibling,"cost")}(n,t)
let l=Math.floor(S/i)*s
e*i<=S?(l=e*s,a.className="fshBlue"):a.className="fshRed",x(`(+${l} stamina)`,a)}function $(n,t,e){f("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(M[n]||(M[n]={}),!M[n].span){const e=d()
b(t," "),p(t,e),M[n].span=e}return M[n].span}(n,t)
m(s)||0===s?i.className="fshHide":k(n,t,s,i)}function v(n){const t=C(n)
u(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",r($,n,t))}function j(){S=a(s(i("statbar-fsp"))),v("Current"),v("Maximum"),l(`<a href="${c}${o}marketplace">Sell at Marketplace</a>`,C("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function w(n,a){const s=C(n).nextElementSibling.nextElementSibling
if(s){const n=Number(t(/(?<value>\d{1,3}) \/ 115/,s.innerHTML))
e(a,n+5)}}function A(){"1"===g("type")?h():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),E.length<1||(w("+1 Max Allies","alliestotal"),w("+1 Max Enemies","enemiestotal"),j()))}export{A as default}
//# sourceMappingURL=points-Bd8sfffS.js.map
