import{g as s,k as t,bZ as a,n as e,c2 as i,o as f,s as l}from"./calfSystem-DG-hTKTe.js"
import{d as o,a as n,c as r,b as c}from"./doHideBuffSelected-DGJ1I-e3.js"
function d(s){c(s,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function h(s,o,n){t(`#pCR h${s}`).filter(a(o)).forEach((s=>{const t=e({href:`${i}${n}`,textContent:o})
f(t,(()=>{l("widgets",`guild ${n}`)})),s.replaceChild(t,s.firstChild)}))}function m(){const t=s("minibox-guild-members-list")
t&&(o(t,1),n(t,"guild"),r(t,d),h(4,"Chat","chat"),h(3,"Guild","manage"))}export{m as default}
//# sourceMappingURL=addGuildInfoWidgets-Cxr5gyl_.js.map
