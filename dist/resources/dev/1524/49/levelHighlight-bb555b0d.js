import{a as t}from"./asInt-61644392.js"
import{I as n,J as r,K as s}from"./calfSystem-9ab64478.js"
let o
function a(){return o||(o=n(r)||t(s)),o}function c(){const t=a()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function e(){const t=a()
let n=10
return t<200&&(n=5),t+n}const u=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function f(){const t=a()
return t-function(t){return u.find((([n])=>n(t)))[1](t)}(t)}function i(){const t=a()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{c as a,i as b,f as c,e as g}
//# sourceMappingURL=levelHighlight-bb555b0d.js.map
