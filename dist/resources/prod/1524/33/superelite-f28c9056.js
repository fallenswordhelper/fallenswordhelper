import{x as e,A as t,f as r,c as a,p as n,Z as s,e as o,h as c,t as f,i}from"./calfSystem-0708a9bb.js"
import{c as l}from"./createTBody-75f2f4d8.js"
import{c as d}from"./createTable-164d9526.js"
import{i as m,f as u}from"./isDate-f49aa118.js"
import{p as h}from"./padZ-df568ed6.js"
import{b as T}from"./simpleCheckbox-57c00d72.js"
import{getFshSeLog as b,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-0ff1a83a.js"
import"./numberIsNaN-c188f177.js"
import"./isChecked-622b73bf.js"
import"./idb-9ebd251c.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function N(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(f(j,r)),t}(e)
k=U(),c(k,t)}function y(e,t){return e[1]-t[1]}function w(){C&&C.se&&N(o(C.se).sort(y))}function x(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",x),a.enableSeTracker&&b().then(D)}export default L
//# sourceMappingURL=superelite-f28c9056.js.map
