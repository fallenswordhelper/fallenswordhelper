import{I as t,J as n,K as r,L as s}from"./calfSystem-60c20ae9.js"
import{i as e}from"./intValue-0e97c9b9.js"
import{v as o}from"./valueText-5652dde0.js"
let a
function c(){return a||(a=t(n)||e(o(r(s)))),a}function u(){const t=c()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function i(){const t=c()
let n=10
return t<200&&(n=5),t+n}const f=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=c()
return t-function(t){return f.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=c()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{u as a,m as b,l as c,i as g}
//# sourceMappingURL=levelHighlight-0e1696e3.js.map
