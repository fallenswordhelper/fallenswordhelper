import{t as n,U as o}from"./calfSystem-e1e858cd.js"
const t=[(n,o)=>n.day?o+1440*parseInt(n.day,10):o,(n,o)=>n.hour?o+60*parseInt(n.hour,10):o,(n,o)=>n.min?o+parseInt(n.min,10):o,(n,t)=>n.last_login?Math.floor((o-n.last_login)/60):t,(n,o)=>"last_login"in n&&!n.last_login?99999:o]
function e(n,o,t){return t(n,o)}function a(o){return t.reduce(n(e,o),0)}const r=[[2,"greenDiamond"],[5,"yellowDiamond"],[30,"orangeDiamond"],[10080,"offlineDot"],[44640,"sevenDayDot"]]
function i(n,o){return n<o[0]}function s(n){let o="Offline"
return"greenDiamond"===n&&(o="Online"),`<span class="fshDot ${n}" data-tooltip="${o}"></span>`}function l(o){const t=a(o),e=r.find(n(i,t))
return s(e?e[1]:"redDot")}export{a as l,l as o}
//# sourceMappingURL=onlineDot-1080eb24.js.map
