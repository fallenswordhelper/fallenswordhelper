import{ad as n,az as t,c as s,aP as a}from"./calfSystem-2fff342b.js"
const o={}
let r=-1
function u(n,t){a(3,t.func,[n])}function c(a,r){if(n.userIsDev&&t("publish",a),o[a])return o[a].forEach(s(u,r)),!0}function e(n,t){o[n]||(o[n]=[]),r+=1
const s=r.toString()
return o[n].push({token:s,func:t}),s}function f(n,t){return o[n]?o[n][0].token:e(n,t)}export{f as a,c as p,e as s}
//# sourceMappingURL=pubsub-7869535f.js.map
