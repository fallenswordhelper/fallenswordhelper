import{c as t}from"./createStyle-Ddqbo82m.js"
import{q as s,k as a,bV as n,y as o,aB as e,d as f,b1 as r,as as i}from"./calfSystem-BhNMi9iJ.js"
const d=".profile-stat-bonus { font-size: x-small; }\n.fshCharStats { table-layout: fixed; }\n.fshCharStats td:first-of-type { width: 22%; }\n.fshCharStats td:nth-of-type(2) { width: 25%; }\n.fshCharStats td:nth-of-type(3) { width: 18%; }\n.fshCharStats td:nth-of-type(4) { width: 35%; }"
function h(t){const[s,a]=e("td",t)
f(`<span id="${s.id}">${r(s.innerHTML.replace(/&nbsp;/g," "))}</span>${function(t){const s=i(t)
return s?` <div class="profile-stat-bonus">${s}</div>`:""}(a)}`,t.parentNode)}const c=(t,s,n)=>a(`${s}[${n}]`,t).forEach((t=>t.removeAttribute(n)))
function l(e){e.classList.add("fshCharStats"),function(t){c(t,"tr","style"),c(t,"td","width"),s("td[colspan]",t)?.removeAttribute("colspan")}(e),a(n,e).forEach(h),o(t(d),e)}function p(){const t=s("#profileLeftColumn table")
t&&l(t)}export{p as default}
//# sourceMappingURL=updateStatistics-B67jItys.js.map
