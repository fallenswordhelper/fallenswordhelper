import{c as t}from"./createStyle-C5mK_M_l.js"
import{q as s,n as a,bV as n,aB as o,c as e,b1 as f,as as r,y as i}from"./calfSystem-Blt4DbaE.js"
const h=".profile-stat-bonus { font-size: x-small; }\n.fshCharStats { table-layout: fixed; }\n.fshCharStats td:first-of-type { width: 22%; }\n.fshCharStats td:nth-of-type(2) { width: 25%; }\n.fshCharStats td:nth-of-type(3) { width: 18%; }\n.fshCharStats td:nth-of-type(4) { width: 35%; }"
function c(t){const[s,a]=o("td",t)
e(`<span id="${s.id}">${f(s.innerHTML.replace(/&nbsp;/g," "))}</span>${function(t){const s=r(t)
return s?` <div class="profile-stat-bonus">${s}</div>`:""}(a)}`,t.parentNode)}const d=(t,s,n)=>a(`${s}[${n}]`,t).forEach((t=>t.removeAttribute(n)))
function l(o){o.classList.add("fshCharStats"),function(t){d(t,"tr","style"),d(t,"td","width"),s("td[colspan]",t)?.removeAttribute("colspan")}(o),a(n,o).forEach(c),i(t(h),o)}function p(){const t=s("#profileLeftColumn table")
t&&l(t)}export{p as default}
//# sourceMappingURL=updateStatistics-11WfDBW3.js.map
