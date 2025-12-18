import{p as e,h as n,q as t,aT as i}from"./calfSystem-Cs6CSxoU.js"
const l=e=>Number(i(e).replace(",","").replace(" TKP","")),m=e=>l(e.parentElement.nextElementSibling.nextElementSibling),a=e=>l(e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling),r=e=>t('input[type="submit"]',e.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)
function s(){if(!e())return
const t=n('img[src*="/items/"]',e()).map(e=>[e,m(e),a(e),r(e)])
t.filter(([,e,n])=>n>=e).forEach(([,,,e])=>{e.classList.add("green","awesome")}),t.filter(([,e,n])=>n<e).forEach(([,,,e])=>{e.disabled=!0})}export{s as default}
//# sourceMappingURL=titanrewards-DKKmVdA1.js.map
