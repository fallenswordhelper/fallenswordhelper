import{g as s,k as e,b_ as t,n as a,c3 as i,o as f,s as l}from"./calfSystem-hszmVKJw.js"
import{d as o,a as n,c as r,b as d}from"./doHideBuffSelected-G3WCxrbb.js"
import"./hideElement--vKgDzDU.js"
function c(s){d(s,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function h(s,o,n){e(`#pCR h${s}`).filter(t(o)).forEach((s=>{const e=a({href:`${i}${n}`,textContent:o})
f(e,(()=>{l("widgets",`guild ${n}`)})),s.replaceChild(e,s.firstChild)}))}function m(){const e=s("minibox-guild-members-list")
e&&(o(e,1),n(e,"guild"),r(e,c),h(4,"Chat","chat"),h(3,"Guild","manage"))}export{m as default}
//# sourceMappingURL=addGuildInfoWidgets-CxtDueBp.js.map
