import{t as n,a as t}from"./calfSystem-6a3c85e0.js"
const o={}
let s=-1
function c(n,o){t(3,o.func,[n])}function r(t,s){if(console.log("publish",t),o[t])return o[t].forEach(n(c,s)),!0}function u(n,t){o[n]||(o[n]=[]),s+=1
const c=s.toString()
return o[n].push({token:c,func:t}),c}function a(n,t){return o[n]?o[n][0].token:u(n,t)}export{a,r as p,u as s}
//# sourceMappingURL=pubsub-dbf16b11.js.map
