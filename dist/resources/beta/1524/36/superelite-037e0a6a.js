import{y as e,B as t,f as r,c as a,p as n,_ as s,e as o,h as c,t as f,i}from"./calfSystem-4a40365f.js"
import{c as l}from"./createTBody-8ce4a516.js"
import{c as m}from"./createTable-ece7c4e9.js"
import{i as u,f as d}from"./isDate-4b559eff.js"
import{p as h}from"./padZ-0374e903.js"
import{b as T}from"./simpleCheckbox-54e3f875.js"
import{getFshSeLog as p,doBackgroundCheck as C,oldLog as b,disableBackgroundChecks as S}from"./seLog-4568344f.js"
import"./numberIsNaN-891c59d9.js"
import"./isChecked-d75e63a5.js"
import"./idb-2c15fd0c.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(u(e))return d(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=m({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(f(j,r)),t}(e)
k=U(),c(k,t)}function N(e,t){return e[1]-t[1]}function w(){b&&b.se&&y(o(b.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?C().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){C().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&p().then(D)}export default L
//# sourceMappingURL=superelite-037e0a6a.js.map
