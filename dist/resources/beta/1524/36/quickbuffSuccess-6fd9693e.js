import{u as n,v as e,x as t,$ as r}from"./calfSystem-4a40365f.js"
import{g as s,b as u}from"./getBuff-e7db88ee.js"
function a(n){const e=s(n)
return e?e.id:-1}function i(n,e){const t=(r=e)[3]||r[6]||r[7]
var r
let s=n.find((n=>n.player.name===t))
return s||(s={player:{name:t},casts:[],failed:[]},n.push(s)),e[1]?s.casts.push((n=>({id:a(n[1]),level:Number(n[2])}))(e)):s.failed.push(function(n){return n[4]?{id:a(n[4]),reason:n[5]}:{id:a(n[9]),reason:n[8]}}(e)),n}function c(n){return function(n){return{r:n.reduce(i,[]),s:!0}}(u(e(n)))}function f(e,t){return n({cmd:"quickbuff",subcmd:"activate",targetPlayers:e.join(),skills:t}).then(c)}function o(n,e){return t({cmd:"quickbuff",subcmd:"activate",username:n,skill:e})}function d(n,e){return r(o,f,n,e)}function l(n){return n.s&&1===n.r[0].casts.length}export{d,l as q}
//# sourceMappingURL=quickbuffSuccess-6fd9693e.js.map
