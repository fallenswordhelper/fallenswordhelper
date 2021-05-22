import{E as t,aG as n,t as e,b as s,d as a,i as o,I as f}from"./calfSystem-f7cf24f6.js"
function l(t,n){const e=n.parentNode,l=s(a,e.nextElementSibling).length-1
o(e,`<span class="fshBlue">&nbsp;${l.toString()}${function(t,n){return n&&n>=t?`/${n}`:""}(l,f(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function i(){const s=t("#profileLeftColumn strong")
s.filter(n("Allies")).forEach(e(l,!0)),s.filter(n("Enemies")).forEach(e(l,!1))}export default i
//# sourceMappingURL=profileAllyEnemy-3b68120a.js.map
