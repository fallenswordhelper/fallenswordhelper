import{h as n,r as t,av as a,aO as e,l as s,g as i,d as l,aP as u,aQ as o,c,b as r,q as f,j as m,s as d,aw as p,aR as b,aE as x,i as g,k as h,ar as S,aS as E}from"./calfSystem-CQOGdqPv.js"
let y=0,M=0
const N={}
function k(n,t){return s(t).includes(n)}function v(n){return y.find(c(k,n))}function C(n,a,e){if(!N[n][e]){const i=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,e),l=t(i,s(a))
N[n][e]=l}return N[n][e]}function $(n,t,a,e){const s=function(n,t){return C(n,t,"amount")}(n,t),i=function(n,t){return C(n,t.nextElementSibling,"cost")}(n,t)
let l=Math.floor(M/i)*s
a*i<=M?(l=a*s,e.className="fshBlue"):e.className="fshRed",h(`(+${l} stamina)`,e)}function R(n,t,a){d("upgrades","updateStamCount")
const{target:e}=a,s=Number(e.value),i=function(n,t){if(N[n]||(N[n]={}),!N[n].span){const a=b()
x(t," "),g(t,a),N[n].span=a}return N[n].span}(n,t)
p(s)||0===s?i.className="fshHide":$(n,t,s,i)}function j(n){const t=v(n)
r(f('input[name="quantity"]',m(t)),"keyup",c(R,n,t))}function q(){M=e(s(i("statbar-fsp"))),j("Current"),j("Maximum"),l(`<a href="${u}${o}marketplace">Sell at Marketplace</a>`,v("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function w(n,e){const s=v(n).nextElementSibling.nextElementSibling
if(s){const n=Number(t(/(?<value>\d{1,3}) \/ 115/,s.innerHTML))
a(e,n+5)}}function A(){"1"===S("type")?E():(y=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),y.length<1||(w("+1 Max Allies","alliestotal"),w("+1 Max Enemies","enemiestotal"),q()))}export{A as default}
//# sourceMappingURL=points-C7KfK9tw.js.map
