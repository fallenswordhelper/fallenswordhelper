import{t as n,a as t}from"./calfSystem-f7cf24f6.js"
const o={}
let f=-1
function s(n,o){t(3,o.func,[n])}function c(t,f){if(console.log("publish",t),o[t])return o[t].forEach(n(s,f)),!0}function r(n,t){o[n]||(o[n]=[]),f+=1
const s=f.toString()
return o[n].push({token:s,func:t}),s}function u(n,t){return o[n]?o[n][0].token:r(n,t)}export{u as a,c as p,r as s}
//# sourceMappingURL=pubsub-08d26997.js.map
