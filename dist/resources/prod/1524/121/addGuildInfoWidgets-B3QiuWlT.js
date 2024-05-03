import{g as s,k as t,b$ as a,n as e,c4 as i,o as f,s as l}from"./calfSystem-BtgQSp8m.js"
import{d as o,a as n,c as r,b as c}from"./doHideBuffSelected-EQu5CpTP.js"
function d(s){c(s,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function h(s,o,n){t(`#pCR h${s}`).filter(a(o)).forEach((s=>{const t=e({href:`${i}${n}`,textContent:o})
f(t,(()=>{l("widgets",`guild ${n}`)})),s.replaceChild(t,s.firstChild)}))}function m(){const t=s("minibox-guild-members-list")
t&&(o(t,1),n(t,"guild"),r(t,d),h(4,"Chat","chat"),h(3,"Guild","manage"))}export{m as default}
//# sourceMappingURL=addGuildInfoWidgets-B3QiuWlT.js.map
