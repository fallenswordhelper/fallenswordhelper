import{g as s,k as t,c3 as a,n as e,c8 as i,o as f,s as l}from"./calfSystem-KuDT30_2.js"
import{d as o,a as n,c,b as r}from"./doHideBuffSelected-G5-NmpnC.js"
function d(s){r(s,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function h(s,o,n){t(`#pCR h${s}`).filter(a(o)).forEach((s=>{const t=e({href:`${i}${n}`,textContent:o})
f(t,(()=>{l("widgets",`guild ${n}`)})),s.replaceChild(t,s.firstChild)}))}function m(){const t=s("minibox-guild-members-list")
t&&(o(t,1),n(t,"guild"),c(t,d),h(4,"Chat","chat"),h(3,"Guild","manage"))}export{m as default}
//# sourceMappingURL=addGuildInfoWidgets-DCLljo3d.js.map
