import{x as e,A as t,f as r,c as a,p as n,_ as s,e as o,h as c,t as f,i}from"./calfSystem-37f70deb.js"
import{c as l}from"./createTBody-e4d0123c.js"
import{c as d}from"./createTable-16e51d18.js"
import{i as m,f as u}from"./isDate-f49aa118.js"
import{p as h}from"./padZ-df568ed6.js"
import{b}from"./simpleCheckbox-329b4550.js"
import{getFshSeLog as T,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-ab525ffb.js"
import"./numberIsNaN-c188f177.js"
import"./isChecked-622b73bf.js"
import"./idb-416129aa.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function N(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(f(j,r)),t}(e)
k=U(),c(k,t)}function y(e,t){return e[1]-t[1]}function w(){C&&C.se&&N(o(C.se).sort(y))}function x(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(b("enableSeTracker"),n),r(n,"change",x),a.enableSeTracker&&T().then(D)}export default L
//# sourceMappingURL=superelite-15665a12.js.map
