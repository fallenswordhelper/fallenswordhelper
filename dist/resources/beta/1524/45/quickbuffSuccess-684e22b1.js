import{u as e,v as n,x as t,$ as r}from"./calfSystem-ae2e69af.js"
import{g as s,b as a}from"./getBuff-ee6adba8.js"
function u(e){const n=s(e)
return n?n.id:-1}function i(e,n){const t=(r=n)[3]||r[6]||r[7]
var r
let s=e.find((e=>e.player.name===t))
return s||(s={player:{name:t},casts:[],failed:[]},e.push(s)),n[1]?s.casts.push((e=>({id:u(e[1]),level:Number(e[2])}))(n)):s.failed.push(function(e){return e[4]?{id:u(e[4]),reason:e[5]}:{id:u(e[9]),reason:e[8]}}(n)),e}function c(e){return function(e){return{r:e.reduce(i,[]),s:!0}}(a(n(e)))}function f(n,t){return e({cmd:"quickbuff",subcmd:"activate",targetPlayers:n.join(),skills:t}).then(c)}function o(e,n){return t({cmd:"quickbuff",subcmd:"activate",username:e,skill:n})}function d(e,n){return r(o,f,e,n)}function l(e){return e.s&&1===e.r[0].casts.length}export{d,l as q}
//# sourceMappingURL=quickbuffSuccess-684e22b1.js.map
