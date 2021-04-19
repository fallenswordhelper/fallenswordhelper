import{t as n,a as t}from"./calfSystem-b31aba65.js"
const o={}
let s=-1
function a(n,o){t(3,o.func,[n])}function c(t,s){if(console.log("publish",t),o[t])return o[t].forEach(n(a,s)),!0}function r(n,t){o[n]||(o[n]=[]),s+=1
const a=s.toString()
return o[n].push({token:a,func:t}),a}function u(n,t){return o[n]?o[n][0].token:r(n,t)}export{u as a,c as p,r as s}
//# sourceMappingURL=pubsub-689b1cce.js.map
