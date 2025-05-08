import{c as t}from"./createStyle-dPu6vqqt.js"
import{q as s,n as a,cm as n,C as o,aW as e,h as f,bl as r,aH as i}from"./calfSystem-BGOTz8de.js"
const h=".profile-stat-bonus { font-size: x-small; }\n.fshCharStats { table-layout: fixed; }\n.fshCharStats td:first-of-type { width: 22%; }\n.fshCharStats td:nth-of-type(2) { width: 25%; }\n.fshCharStats td:nth-of-type(3) { width: 18%; }\n.fshCharStats td:nth-of-type(4) { width: 35%; }"
function c(t){const[s,a]=e("td",t)
f(`<span id="${s.id}">${r(s.innerHTML.replace(/&nbsp;/g," "))}</span>${function(t){const s=i(t)
return s?` <div class="profile-stat-bonus">${s}</div>`:""}(a)}`,t.parentNode)}const d=(t,s,n)=>a(`${s}[${n}]`,t).forEach((t=>t.removeAttribute(n)))
function l(e){e.classList.add("fshCharStats"),function(t){d(t,"tr","style"),d(t,"td","width"),s("td[colspan]",t)?.removeAttribute("colspan")}(e),a(n,e).forEach(c),o(t(h),e)}function p(){const t=s("#profileLeftColumn table")
t&&l(t)}export{p as default}
//# sourceMappingURL=updateStatistics-BfDlLa5Y.js.map
