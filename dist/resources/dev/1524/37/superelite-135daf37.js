import{y as e,B as t,f as r,c as a,p as n,a0 as s,e as c,h as o,t as i,i as f}from"./calfSystem-5d0c721b.js"
import{c as l}from"./createTBody-6649c7c9.js"
import{c as d}from"./createTable-e2634048.js"
import{i as m,f as u}from"./isDate-11ae56b4.js"
import{p as h}from"./padZ-c46e4c30.js"
import{b}from"./simpleCheckbox-8efd9853.js"
import{getFshSeLog as T,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-a4f51115.js"
import"./numberIsNaN-a6723163.js"
import"./isChecked-7bdba1ab.js"
import"./idb-a2aaccdb.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return o(t,r),e.forEach(i(j,r)),t}(e)
k=U(),o(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(c(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(b("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&T().then(D)}export default L
//# sourceMappingURL=superelite-135daf37.js.map
