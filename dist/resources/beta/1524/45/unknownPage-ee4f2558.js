import{I as t,bm as n,t as s,y as e,D as a,bn as o,bo as f,z as r,bp as i,ab as u,bq as m}from"./calfSystem-ae2e69af.js"
import{g as c,b as p}from"./getBuff-ee6adba8.js"
import{f as b}from"./formatLocalDateTime-3ab87719.js"
import{g as d,s as j}from"./idb-225659e6.js"
import{x as g}from"./xPath-1558d3b2.js"
import"./buffObj-c673ca2f.js"
import"./isDate-73c83436.js"
import"./numberIsNaN-c7db67d0.js"
import"./padZ-28d1918e.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=b(new Date),a=p(document).map(s(k,e))
j(n,a.reverse().join("")+t)}const B=[[()=>a(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-ee4f2558.js.map
