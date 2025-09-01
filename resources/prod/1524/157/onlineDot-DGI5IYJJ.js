import{c as n,cq as o}from"./calfSystem-CQOGdqPv.js"
const t=[(n,o)=>n.day?o+1440*parseInt(n.day,10):o,(n,o)=>n.hour?o+60*parseInt(n.hour,10):o,(n,o)=>n.min?o+parseInt(n.min,10):o,(n,t)=>n.last_login?Math.floor((o()-n.last_login)/60):t,(n,o)=>"last_login"in n&&!n.last_login?99999:o]
function a(n,o,t){return t(n,o)}const e=[[2,"greenDiamond"],[5,"yellowDiamond"],[30,"orangeDiamond"],[10080,"offlineDot"],[44640,"sevenDayDot"]]
function r(n,o){return n<o[0]}function i(n){let o="Offline"
return"greenDiamond"===n&&(o="Online"),`<span class="fshDot ${n}" data-tooltip="${o}"></span>`}function s(o){const s=function(o){return t.reduce(n(a,o),0)}(o),l=e.find(n(r,s))
return i(l?l[1]:"redDot")}export{s as o}
//# sourceMappingURL=onlineDot-DGI5IYJJ.js.map
