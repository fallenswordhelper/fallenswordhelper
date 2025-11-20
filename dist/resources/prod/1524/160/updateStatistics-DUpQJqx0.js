import{c as t}from"./createStyle-u6QR1rZp.js"
import{q as s,h as a,cy as n,a6 as o,b6 as e,d as f,bz as r,aT as i}from"./calfSystem-HVCiy-VV.js"
function h(t){const[s,a]=e("td",t)
f(`<span id="${s.id}">${r(s.innerHTML.replace(/&nbsp;/g," "))}</span>${function(t){const s=i(t)
return s?` <div class="profile-stat-bonus">${s}</div>`:""}(a)}`,t.parentNode)}const d=(t,s,n)=>a(`${s}[${n}]`,t).forEach(t=>t.removeAttribute(n))
function c(e){e.classList.add("fshCharStats"),function(t){d(t,"tr","style"),d(t,"td","width"),s("td[colspan]",t)?.removeAttribute("colspan")}(e),a(n,e).forEach(h),o(t(".profile-stat-bonus { font-size: x-small; }\n.fshCharStats { table-layout: fixed; }\n.fshCharStats td:first-of-type { width: 22%; }\n.fshCharStats td:nth-of-type(2) { width: 25%; }\n.fshCharStats td:nth-of-type(3) { width: 18%; }\n.fshCharStats td:nth-of-type(4) { width: 35%; }"),e)}function l(){const t=s("#profileLeftColumn table")
t&&c(t)}export{l as default}
//# sourceMappingURL=updateStatistics-DUpQJqx0.js.map
