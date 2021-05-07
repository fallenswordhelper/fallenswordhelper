import{y as e,B as t,f as r,c as a,p as n,a0 as s,e as o,h as c,t as f,i}from"./calfSystem-3cb2f93e.js"
import{c as l}from"./createTBody-a08d0cf8.js"
import{c as d}from"./createTable-4f507d36.js"
import{i as m,f as u}from"./isDate-52df43b3.js"
import{p as h}from"./padZ-7f619ae9.js"
import{b as T}from"./simpleCheckbox-11592a14.js"
import{getFshSeLog as b,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-bb7d799b.js"
import"./numberIsNaN-885a5556.js"
import"./isChecked-987a8a1c.js"
import"./idb-c9ce87e3.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(f(j,r)),t}(e)
k=U(),c(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(o(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&b().then(D)}export default L
//# sourceMappingURL=superelite-f626d52f.js.map
