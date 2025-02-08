import{p as e,l as n,q as t,aH as l}from"./calfSystem-BldO1y8X.js"
const i=e=>Number(l(e).replace(",","").replace(" TKP","")),m=e=>i(e.parentElement.nextElementSibling.nextElementSibling),a=e=>i(e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling),r=e=>t('input[type="submit"]',e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)
function s(){if(!e())return
const t=n('img[src*="/items/"]',e()).map((e=>[e,m(e),a(e),r(e)]))
t.filter((([,e,n])=>n>=e)).forEach((([,,,e])=>{e.classList.add("green","awesome")})),t.filter((([,e,n])=>n<e)).forEach((([,,,e])=>{e.disabled=!0}))}export{s as default}
//# sourceMappingURL=titanrewards-eJ32u_aA.js.map
