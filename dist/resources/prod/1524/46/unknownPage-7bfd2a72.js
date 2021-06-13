import{I as t,bk as n,t as s,y as a,D as o,bl as e,bm as f,z as r,bn as i,ab as u,bo as m}from"./calfSystem-7991d843.js"
import{g as c,b}from"./getBuff-77a4c272.js"
import{f as p}from"./formatLocalDateTime-bd13d3cb.js"
import{g as d,s as j}from"./idb-89606f1a.js"
import{x as l}from"./xPath-bc49cafa.js"
import"./buffObj-c604f006.js"
import"./isDate-c10883b5.js"
import"./numberIsNaN-c0e87dea.js"
import"./padZ-aa6c487e.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=p(new Date),o=b(document).map(s(k,a))
j(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-7bfd2a72.js.map
