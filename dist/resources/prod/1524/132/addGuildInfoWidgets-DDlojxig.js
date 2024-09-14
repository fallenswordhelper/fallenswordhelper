import{g as s,k as a,c3 as t,n as e,c8 as i,o as f,s as l}from"./calfSystem-Dh7h0wep.js"
import{d as o,a as n,c,b as r}from"./doHideBuffSelected-DfVVMsgp.js"
function d(s){r(s,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function h(s,o,n){a(`#pCR h${s}`).filter(t(o)).forEach((s=>{const a=e({href:`${i}${n}`,textContent:o})
f(a,(()=>{l("widgets",`guild ${n}`)})),s.replaceChild(a,s.firstChild)}))}function m(){const a=s("minibox-guild-members-list")
a&&(o(a,1),n(a,"guild"),c(a,d),h(4,"Chat","chat"),h(3,"Guild","manage"))}export{m as default}
//# sourceMappingURL=addGuildInfoWidgets-DDlojxig.js.map
