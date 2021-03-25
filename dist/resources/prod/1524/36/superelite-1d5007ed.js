import{y as e,B as t,f as r,c as a,p as n,_ as s,e as c,h as o,t as f,i}from"./calfSystem-e7bde0c3.js"
import{c as l}from"./createTBody-8c81af68.js"
import{c as d}from"./createTable-1cbc7578.js"
import{i as m,f as u}from"./isDate-4b559eff.js"
import{p as h}from"./padZ-0374e903.js"
import{b as T}from"./simpleCheckbox-0bc84aa8.js"
import{getFshSeLog as b,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-e1dffbc4.js"
import"./numberIsNaN-891c59d9.js"
import"./isChecked-d75e63a5.js"
import"./idb-47978eaa.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return o(t,r),e.forEach(f(j,r)),t}(e)
k=U(),o(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(c(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&b().then(D)}export default L
//# sourceMappingURL=superelite-1d5007ed.js.map
