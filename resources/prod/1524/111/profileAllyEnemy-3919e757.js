import{j as t,bU as n,c as e,av as s,bI as a,v as o,ae as l}from"./calfSystem-abb16b0d.js"
function i(t,n){const e=n.parentNode,i=s(a,e.nextElementSibling).length-1
o(e,`<span class="fshBlue">&nbsp;${i.toString()}${function(t,n){return n&&n>=t?`/${n}`:""}(i,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function r(){const s=t("#profileLeftColumn strong")
s.filter(n("Allies")).forEach(e(i,!0)),s.filter(n("Enemies")).forEach(e(i,!1))}export{r as default}
//# sourceMappingURL=profileAllyEnemy-3919e757.js.map
