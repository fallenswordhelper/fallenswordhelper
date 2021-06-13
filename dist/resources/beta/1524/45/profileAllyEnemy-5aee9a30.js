import{E as t,aG as e,t as n,b as s,d as a,i as o,I as l}from"./calfSystem-ae2e69af.js"
function i(t,e){const n=e.parentNode,i=s(a,n.nextElementSibling).length-1
o(n,`<span class="fshBlue">&nbsp;${i.toString()}${function(t,e){return e&&e>=t?`/${e}`:""}(i,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function f(){const s=t("#profileLeftColumn strong")
s.filter(e("Allies")).forEach(n(i,!0)),s.filter(e("Enemies")).forEach(n(i,!1))}export default f
//# sourceMappingURL=profileAllyEnemy-5aee9a30.js.map
