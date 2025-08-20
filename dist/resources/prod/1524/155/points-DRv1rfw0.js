import{h as n,r as t,au as a,aM as e,l as s,g as i,d as l,aN as u,aO as o,c,b as r,q as f,j as m,s as d,av as p,aP as b,aC as x,i as g,k as h,aq as S,aQ as E}from"./calfSystem-UyQ_FKFu.js"
let M=0,y=0
const N={}
function C(n,t){return s(t).includes(n)}function k(n){return M.find(c(C,n))}function v(n,a,e){if(!N[n][e]){const i=function(n,t){return"amount"===t?new RegExp(`\\+(\\d+) ${n}`):/(?<cost>\d{1,3})\xA0/u}(n,e),l=t(i,s(a))
N[n][e]=l}return N[n][e]}function $(n,t,a,e){const s=function(n,t){return v(n,t,"amount")}(n,t),i=function(n,t){return v(n,t.nextElementSibling,"cost")}(n,t)
let l=Math.floor(y/i)*s
a*i<=y?(l=a*s,e.className="fshBlue"):e.className="fshRed",h(`(+${l} stamina)`,e)}function q(n,t,a){d("upgrades","updateStamCount")
const{target:e}=a,s=Number(e.value),i=function(n,t){if(N[n]||(N[n]={}),!N[n].span){const a=b()
x(t," "),g(t,a),N[n].span=a}return N[n].span}(n,t)
p(s)||0===s?i.className="fshHide":$(n,t,s,i)}function j(n){const t=k(n)
r(f('input[name="quantity"]',m(t)),"keyup",c(q,n,t))}function A(){y=e(s(i("statbar-fsp"))),j("Current"),j("Maximum"),l(`<a href="${u}${o}marketplace">Sell at Marketplace</a>`,k("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function H(n,e){const s=k(n).nextElementSibling.nextElementSibling
if(s){const n=Number(t(/(?<value>\d{1,3}) \/ 115/,s.innerHTML))
a(e,n+5)}}function R(){"1"===S("type")?E():(M=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),M.length<1||(H("+1 Max Allies","alliestotal"),H("+1 Max Enemies","enemiestotal"),A()))}export{R as default}
//# sourceMappingURL=points-DRv1rfw0.js.map
