import{k as n,r as t,aw as e,aO as a,n as s,g as i,e as l,aP as o,aQ as c,c as u,b as r,s as f,ax as m,aR as d,aE as x,i as b,m as p,as as g,aS as S}from"./calfSystem-C1X5YxJZ.js"
let E=0,h=0
const M={}
function y(n,t){return s(t).includes(n)}function N(n){return E.find(u(y,n))}function k(n,e,a){if(!M[n][a]){const i=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,a),l=t(i,s(e))
M[n][a]=l}return M[n][a]}function C(n,t,e,a){const s=function(n,t){return k(n,t,"amount")}(n,t),i=function(n,t){return k(n,t.nextElementSibling,"cost")}(n,t)
let l=Math.floor(h/i)*s
e*i<=h?(l=e*s,a.className="fshBlue"):a.className="fshRed",p(`(+${l} stamina)`,a)}function $(n,t,e){f("upgrades","updateStamCount")
const{target:a}=e,s=Number(a.value),i=function(n,t){if(M[n]||(M[n]={}),!M[n].span){const e=d()
x(t," "),b(t,e),M[n].span=e}return M[n].span}(n,t)
m(s)||0===s?i.className="fshHide":C(n,t,s,i)}function v(n){const t=N(n)
r(t.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",u($,n,t))}function w(){h=a(s(i("statbar-fsp"))),v("Current"),v("Maximum"),l(`<a href="${o}${c}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function R(n,a){const s=N(n).nextElementSibling.nextElementSibling
if(s){const n=Number(t(/(?<value>\d{1,3}) \/ 115/,s.innerHTML))
e(a,n+5)}}function A(){"1"===g("type")?S():(E=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),E.length<1||(R("+1 Max Allies","alliestotal"),R("+1 Max Enemies","enemiestotal"),w()))}export{A as default}
//# sourceMappingURL=points-B7p8WKb6.js.map
