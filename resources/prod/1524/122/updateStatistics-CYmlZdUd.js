import{c as t}from"./createStyle-CNv7Gpcu.js"
import{q as s,k as a,bP as n,y as o,az as e,d as f,a$ as r,aq as i}from"./calfSystem-C4gAE-9q.js"
const d=".profile-stat-bonus { font-size: x-small; }\n.fshCharStats { table-layout: fixed; }\n.fshCharStats td:first-of-type { width: 22%; }\n.fshCharStats td:nth-of-type(2) { width: 25%; }\n.fshCharStats td:nth-of-type(3) { width: 18%; }\n.fshCharStats td:nth-of-type(4) { width: 35%; }"
function h(t){const[s,a]=e("td",t)
f(`<span id="${s.id}">${r(s.innerHTML.replace(/&nbsp;/g," "))}</span>${function(t){const s=i(t)
return s?` <div class="profile-stat-bonus">${s}</div>`:""}(a)}`,t.parentNode)}const c=(t,s,n)=>a(`${s}[${n}]`,t).forEach((t=>t.removeAttribute(n)))
function l(e){e.classList.add("fshCharStats"),function(t){c(t,"tr","style"),c(t,"td","width"),s("td[colspan]",t)?.removeAttribute("colspan")}(e),a(n,e).forEach(h),o(t(d),e)}function p(){const t=s("#profileLeftColumn table")
t&&l(t)}export{p as default}
//# sourceMappingURL=updateStatistics-CYmlZdUd.js.map
