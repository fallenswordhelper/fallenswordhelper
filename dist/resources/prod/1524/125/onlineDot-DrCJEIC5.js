import{b as n}from"./now-Cx4PsKjI.js"
import{c as o}from"./calfSystem-CgXU6vdM.js"
const t=[(n,o)=>n.day?o+1440*parseInt(n.day,10):o,(n,o)=>n.hour?o+60*parseInt(n.hour,10):o,(n,o)=>n.min?o+parseInt(n.min,10):o,(o,t)=>o.last_login?Math.floor((n()-o.last_login)/60):t,(n,o)=>"last_login"in n&&!n.last_login?99999:o]
function r(n,o,t){return t(n,o)}const a=[[2,"greenDiamond"],[5,"yellowDiamond"],[30,"orangeDiamond"],[10080,"offlineDot"],[44640,"sevenDayDot"]]
function e(n,o){return n<o[0]}function i(n){let o="Offline"
return"greenDiamond"===n&&(o="Online"),`<span class="fshDot ${n}" data-tooltip="${o}"></span>`}function s(n){const s=function(n){return t.reduce(o(r,n),0)}(n),l=a.find(o(e,s))
return i(l?l[1]:"redDot")}export{s as o}
//# sourceMappingURL=onlineDot-DrCJEIC5.js.map
