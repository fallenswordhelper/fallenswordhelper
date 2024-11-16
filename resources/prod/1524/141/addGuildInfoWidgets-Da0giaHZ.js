import{g as s,n as e,c3 as t,l as a,c8 as i,e as f,s as l}from"./calfSystem-Blt4DbaE.js"
import{d as n,a as o,c,b as r}from"./doHideBuffSelected-DCgm-8LK.js"
function d(s){r(s,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function h(s,n,o){e(`#pCR h${s}`).filter(t(n)).forEach((s=>{const e=a({href:`${i}${o}`,textContent:n})
f(e,(()=>{l("widgets",`guild ${o}`)})),s.replaceChild(e,s.firstChild)}))}function m(){const e=s("minibox-guild-members-list")
e&&(n(e,1),o(e,"guild"),c(e,d),h(4,"Chat","chat"),h(3,"Guild","manage"))}export{m as default}
//# sourceMappingURL=addGuildInfoWidgets-Da0giaHZ.js.map
