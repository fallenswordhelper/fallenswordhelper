import{I as t,J as n,K as r,L as s}from"./calfSystem-fe534823.js"
import{i as o}from"./intValue-f6303c59.js"
import{v as e}from"./valueText-322f7b12.js"
let a
function c(){return a||(a=t(n)||o(e(r(s)))),a}function f(){const t=c()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function u(){const t=c()
let n=10
return t<200&&(n=5),t+n}const i=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=c()
return t-function(t){return i.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=c()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{f as a,m as b,l as c,u as g}
//# sourceMappingURL=levelHighlight-9e29a599.js.map
