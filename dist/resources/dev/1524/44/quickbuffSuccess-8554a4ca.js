import{u as n,v as t,x as r,$ as e}from"./calfSystem-f7cf24f6.js"
import{g as s,b as u}from"./getBuff-7b591316.js"
function a(n){const t=s(n)
return t?t.id:-1}function c(n,t){const r=(e=t)[3]||e[6]||e[7]
var e
let s=n.find((n=>n.player.name===r))
return s||(s={player:{name:r},casts:[],failed:[]},n.push(s)),t[1]?s.casts.push((n=>({id:a(n[1]),level:Number(n[2])}))(t)):s.failed.push(function(n){return n[4]?{id:a(n[4]),reason:n[5]}:{id:a(n[9]),reason:n[8]}}(t)),n}function i(n){return function(n){return{r:n.reduce(c,[]),s:!0}}(u(t(n)))}function f(t,r){return n({cmd:"quickbuff",subcmd:"activate",targetPlayers:t.join(),skills:r}).then(i)}function o(n,t){return r({cmd:"quickbuff",subcmd:"activate",username:n,skill:t})}function l(n,t){return e(o,f,n,t)}function d(n){return n.s&&1===n.r[0].casts.length}export{l as d,d as q}
//# sourceMappingURL=quickbuffSuccess-8554a4ca.js.map
