import{x as e,A as t,f as r,c as a,p as n,_ as s,e as o,h as c,t as f,i}from"./calfSystem-c07e3259.js"
import{c as l}from"./createTBody-a8d08f84.js"
import{c as d}from"./createTable-b1dbea45.js"
import{i as m,f as u}from"./isDate-1383728c.js"
import{p as h}from"./padZ-d4e02992.js"
import{b as T}from"./simpleCheckbox-d4a4dee5.js"
import{getFshSeLog as p,doBackgroundCheck as C,oldLog as b,disableBackgroundChecks as S}from"./seLog-ef89efc2.js"
import"./numberIsNaN-738f2a3f.js"
import"./isChecked-d96c8dec.js"
import"./idb-dd65ea6c.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function N(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(f(j,r)),t}(e)
k=U(),c(k,t)}function y(e,t){return e[1]-t[1]}function w(){b&&b.se&&N(o(b.se).sort(y))}function x(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?C().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){C().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",x),a.enableSeTracker&&p().then(D)}export default L
//# sourceMappingURL=superelite-49199334.js.map
