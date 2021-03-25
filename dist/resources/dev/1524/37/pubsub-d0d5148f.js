import{t as n,a as t}from"./calfSystem-5d0c721b.js"
const o={}
let s=-1
function c(n,o){t(3,o.func,[n])}function r(t,s){if(console.log("publish",t),o[t])return o[t].forEach(n(c,s)),!0}function u(n,t){o[n]||(o[n]=[]),s+=1
const c=s.toString()
return o[n].push({token:c,func:t}),c}function f(n,t){return o[n]?o[n][0].token:u(n,t)}export{f as a,r as p,u as s}
//# sourceMappingURL=pubsub-d0d5148f.js.map
