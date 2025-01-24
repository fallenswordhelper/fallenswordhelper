import{a,e,bu as s,$ as f}from"./calfSystem-CvwhhJv4.js"
import{g as n,b as c}from"./buffReportParser-C9MhHbeW.js"
function u(e,s){return a({cmd:"quickbuff",subcmd:"activate",username:e,skill:s})}function t(a){const e=n(a)
return e?e.id:-1}const r=({successBuff:a,successLevel:e})=>({id:t(a),level:Number(e)}),i=(a,e)=>a.filter((({name:a,successBuff:s})=>a===e.name&&s)).map(r),o=({failBuff:a,failReason:e})=>({id:t(a),reason:e}),l=({blockBuff:a,blockReason:e})=>({id:t(a),reason:e}),m=(a,e)=>a.filter((({name:a,failBuff:s})=>a===e.name&&s)).map(o).concat(((a,e)=>a.filter((({name:a,blockBuff:s})=>a===e.name&&s)).map(l))(a,e)),b=a=>s(a,"name").map((e=>({player:{name:e.name},cast:i(a,e),failed:m(a,e)})))
function d(a){const[,e,s,f,n,c,u,t,r,i]=a
return{name:f||u||t,successBuff:e,successLevel:s,failBuff:n,failReason:c,blockReason:r,blockBuff:i}}async function p(a,s){return(f=await e({cmd:"quickbuff",subcmd:"activate",targetPlayers:a.join(),skills:s}))?{r:b(c(f).map(d)),s:!0}:{s:!1}
var f}function k(a,e){return f(u,p,a,e)}function B(a){return a.s&&1===a.r[0].casts.length}export{k as d,B as q}
//# sourceMappingURL=quickbuffSuccess-BhSTita6.js.map
