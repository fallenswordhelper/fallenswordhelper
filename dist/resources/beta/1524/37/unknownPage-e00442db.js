import{I as t,bi as n,t as s,y as e,D as a,bj as o,bk as f,z as r,bl as i,ac as u,bm as m}from"./calfSystem-cb2a6f39.js"
import{g as c,b}from"./getBuff-f9b406fb.js"
import{f as p}from"./formatLocalDateTime-7dd6c90d.js"
import{g as j,s as d}from"./idb-b27e17a7.js"
import{x as l}from"./xPath-d1e12829.js"
import"./buffObj-933e7a40.js"
import"./isDate-11ae56b4.js"
import"./numberIsNaN-a6723163.js"
import"./padZ-c46e4c30.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=p(new Date),a=b(document).map(s(k,e))
d(n,a.reverse().join("")+t)}const B=[[()=>a(".news_left_column"),()=>{o("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{o("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{o("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{o("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-e00442db.js.map
