import{x as e,A as t,f as r,c as a,p as n,Y as s,e as o,h as c,t as f,i}from"./calfSystem-019de1cf.js"
import"./numberIsNaN-cb2409eb.js"
import"./idb-1bb3cee2.js"
import"./isChecked-8ee9db43.js"
import{b as l}from"./simpleCheckbox-4d2b1b22.js"
import{c as d}from"./createTBody-6692ad3f.js"
import{c as m}from"./createTable-dfd6f8aa.js"
import{i as u,f as b}from"./isDate-32fe1182.js"
import{p as h}from"./padZ-ce2146a0.js"
import{getFshSeLog as T,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-cf87b4d6.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(u(e))return b(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function N(e){const t=function(e){const t=m({className:"fshTTracker"}),r=d({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(f(j,r)),t}(e)
k=U(),c(k,t)}function y(e,t){return e[1]-t[1]}function w(){C&&C.se&&N(o(C.se).sort(y))}function x(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}export default function(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(l("enableSeTracker"),n),r(n,"change",x),a.enableSeTracker&&T().then(D)}
//# sourceMappingURL=superelite-a1508be9.js.map