import{a as t}from"./asInt-f1541708.js"
import{I as n,J as r,K as s}from"./calfSystem-cbf77dd7.js"
let o
function c(){return o||(o=n(r)||t(s)),o}function a(){const t=c()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function e(){const t=c()
let n=10
return t<200&&(n=5),t+n}const f=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function u(){const t=c()
return t-function(t){return f.find((([n])=>n(t)))[1](t)}(t)}function i(){const t=c()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{a,i as b,u as c,e as g}
//# sourceMappingURL=levelHighlight-40138177.js.map
