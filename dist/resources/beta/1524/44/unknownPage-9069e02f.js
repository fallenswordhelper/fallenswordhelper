import{I as t,bl as n,t as s,y as o,D as e,bm as a,bn as f,z as r,bo as i,ab as u,bp as m}from"./calfSystem-a8d582b6.js"
import{g as b,b as c}from"./getBuff-710781bd.js"
import{f as p}from"./formatLocalDateTime-c295cb3e.js"
import{g as d,s as j}from"./idb-d8c9a883.js"
import{x as l}from"./xPath-ab3d969f.js"
import"./buffObj-1b3bee9b.js"
import"./isDate-00b71016.js"
import"./numberIsNaN-11f99b26.js"
import"./padZ-634214b3.js"
const g=t=>` ${t[0]} (${function(t){const n=b(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const o=p(new Date),e=c(document).map(s(k,o))
j(n,e.reverse().join("")+t)}const B=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(o())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-9069e02f.js.map
