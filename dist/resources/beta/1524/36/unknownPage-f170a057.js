import{I as t,bi as n,t as s,y as e,D as o,bj as a,bk as f,z as r,bl as i,ac as u,bm as m}from"./calfSystem-4a40365f.js"
import{g as c,b as p}from"./getBuff-e7db88ee.js"
import{f as b}from"./formatLocalDateTime-013f4621.js"
import{g as j,s as d}from"./idb-2c15fd0c.js"
import{x as l}from"./xPath-ad94070b.js"
import"./buffObj-ae031e44.js"
import"./isDate-4b559eff.js"
import"./numberIsNaN-891c59d9.js"
import"./padZ-0374e903.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const e=b(new Date),o=p(document).map(s(k,e))
d(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(e())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-f170a057.js.map
