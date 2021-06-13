import{I as t,bm as n,t as s,y as a,D as e,bn as o,bo as f,z as r,bp as i,ab as u,bq as m}from"./calfSystem-cbf77dd7.js"
import{g as c,b}from"./getBuff-4aa17e5b.js"
import{f as p}from"./formatLocalDateTime-bd13d3cb.js"
import{g as d,s as j}from"./idb-82a91df1.js"
import{x as g}from"./xPath-8a833ed6.js"
import"./buffObj-c604f006.js"
import"./isDate-c10883b5.js"
import"./numberIsNaN-c0e87dea.js"
import"./padZ-aa6c487e.js"
const l=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?l(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=p(new Date),e=b(document).map(s(k,a))
j(n,e.reverse().join("")+t)}const B=[[()=>e(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-7b81da9c.js.map
