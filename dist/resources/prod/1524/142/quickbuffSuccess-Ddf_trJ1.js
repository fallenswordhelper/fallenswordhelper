import{a,e,$ as s}from"./calfSystem-KuDT30_2.js"
import{g as f,b as n}from"./buffReportParser-Cmj6gA7T.js"
import{u as c}from"./uniq-DDHnmX2G.js"
function u(e,s){return a({cmd:"quickbuff",subcmd:"activate",username:e,skill:s})}function r(a){const e=f(a)
return e?e.id:-1}const t=({successBuff:a,successLevel:e})=>({id:r(a),level:Number(e)}),i=(a,e)=>a.filter((({name:a,successBuff:s})=>a===e.name&&s)).map(t),o=({failBuff:a,failReason:e})=>({id:r(a),reason:e}),m=({blockBuff:a,blockReason:e})=>({id:r(a),reason:e}),l=(a,e)=>a.filter((({name:a,failBuff:s})=>a===e.name&&s)).map(o).concat(((a,e)=>a.filter((({name:a,blockBuff:s})=>a===e.name&&s)).map(m))(a,e)),b=a=>c(a,"name").map((e=>({player:{name:e.name},cast:i(a,e),failed:l(a,e)})))
function p(a){const[,e,s,f,n,c,u,r,t,i]=a
return{name:f||u||r,successBuff:e,successLevel:s,failBuff:n,failReason:c,blockReason:t,blockBuff:i}}async function d(a,s){return(f=await e({cmd:"quickbuff",subcmd:"activate",targetPlayers:a.join(),skills:s}))?{r:b(n(f).map(p)),s:!0}:{s:!1}
var f}function k(a,e){return s(u,d,a,e)}function B(a){return a.s&&1===a.r[0].casts.length}export{k as d,B as q}
//# sourceMappingURL=quickbuffSuccess-Ddf_trJ1.js.map
