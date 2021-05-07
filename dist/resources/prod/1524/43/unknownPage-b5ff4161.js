import{I as t,bh as n,t as s,y as a,D as o,bi as e,bj as f,z as r,bk as i,ac as u,bl as m}from"./calfSystem-9942149b.js"
import{g as b,b as c}from"./getBuff-afb49e48.js"
import{f as p}from"./formatLocalDateTime-737a2c06.js"
import{g as j,s as l}from"./idb-6116f2a7.js"
import{x as g}from"./xPath-8b3d8228.js"
import"./buffObj-b66afe66.js"
import"./isDate-52df43b3.js"
import"./numberIsNaN-885a5556.js"
import"./padZ-7f619ae9.js"
const d=t=>` ${t[0]} (${function(t){const n=b(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?d(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=p(new Date),o=c(document).map(s(k,a))
l(n,o.reverse().join("")+t)}const h=[[()=>o(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>g('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function B(){if(a())return
const t=h.find((t=>t[0]()))
t&&t[1]()}export default B
//# sourceMappingURL=unknownPage-b5ff4161.js.map
