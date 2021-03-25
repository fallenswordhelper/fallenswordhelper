import{t as n,U as t}from"./calfSystem-e7bde0c3.js"
const o=[(n,t)=>n.day?t+1440*parseInt(n.day,10):t,(n,t)=>n.hour?t+60*parseInt(n.hour,10):t,(n,t)=>n.min?t+parseInt(n.min,10):t,(n,o)=>n.last_login?Math.floor((t-n.last_login)/60):o,(n,t)=>"last_login"in n&&!n.last_login?99999:t]
function e(n,t,o){return o(n,t)}function a(t){return o.reduce(n(e,t),0)}const i=[[2,"greenDiamond"],[5,"yellowDiamond"],[30,"orangeDiamond"],[10080,"offlineDot"],[44640,"sevenDayDot"]]
function r(n,t){return n<t[0]}function s(n){let t="Offline"
return"greenDiamond"===n&&(t="Online"),`<span class="fshDot ${n} tip-static" data-tipped="${t}"></span>`}function l(t){const o=a(t),e=i.find(n(r,o))
return s(e?e[1]:"redDot")}export{a as l,l as o}
//# sourceMappingURL=onlineDot-7bb4a617.js.map
