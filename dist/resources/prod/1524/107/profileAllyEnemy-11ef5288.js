import{j as t,bW as n,c as e,aw as s,bK as a,v as o,af as l}from"./calfSystem-2fff342b.js"
function f(t,n){const e=n.parentNode,f=s(a,e.nextElementSibling).length-1
o(e,`<span class="fshBlue">&nbsp;${f.toString()}${function(t,n){return n&&n>=t?`/${n}`:""}(f,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function i(){const s=t("#profileLeftColumn strong")
s.filter(n("Allies")).forEach(e(f,!0)),s.filter(n("Enemies")).forEach(e(f,!1))}export{i as default}
//# sourceMappingURL=profileAllyEnemy-11ef5288.js.map
