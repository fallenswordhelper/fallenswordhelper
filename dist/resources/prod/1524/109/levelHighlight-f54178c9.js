import{a as n}from"./asInt-351ebcd4.js"
import{af as t,c0 as r,c1 as a}from"./calfSystem-2f15e074.js"
let s=0
function o(n,t){return n.find((([n])=>n(t)))?.[1](t)}function c(){return s||(s=t(r)||n(a)),s}const e=[[n=>n>4049,()=>50],[n=>n>4039,n=>n-4e3],[n=>n>3039,()=>40],[n=>n>3029,n=>n-3e3],[n=>n>2029,()=>30],[n=>n>2019,n=>n-2e3],[n=>n>1019,()=>20],[n=>n>1009,n=>n-1e3],[n=>n>209,()=>10],[n=>n>204,n=>n-200],[n=>n>5,()=>5],[n=>n>0,n=>n-1]]
function u(){return(n=c())-o(e,n)
var n}const f=[[n=>n>3999,()=>50],[n=>n>2999,()=>40],[n=>n>1999,()=>30],[n=>n>999,()=>20],[n=>n>199,()=>10],[()=>!0,()=>5]]
function i(){return(n=c())+o(f,n)
var n}const m=[[n=>n>800,()=>100],[n=>n>750,n=>n-701],[n=>n>350,()=>50],[n=>n>325,n=>n-301],[n=>n>74,()=>25],[n=>n>49,n=>n-50]]
function v(){return(n=c())-o(m,n)
var n}const p=[[n=>n>700,()=>100],[n=>n>300,()=>50],[n=>n>49,()=>25]]
function j(){return(n=c())+o(p,n)
var n}export{u as a,j as b,v as c,i as g}
//# sourceMappingURL=levelHighlight-f54178c9.js.map
