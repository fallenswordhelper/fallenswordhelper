import{I as t,bk as n,t as s,y as o,D as e,bl as a,bm as f,z as r,bn as i,ab as u,bo as m}from"./calfSystem-e1e858cd.js"
import{g as c,b}from"./getBuff-dab14865.js"
import{f as p}from"./formatLocalDateTime-3ab87719.js"
import{g as d,s as j}from"./idb-ef443609.js"
import{x as l}from"./xPath-adbb1396.js"
import"./buffObj-c673ca2f.js"
import"./isDate-73c83436.js"
import"./numberIsNaN-c7db67d0.js"
import"./padZ-28d1918e.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const o=p(new Date),e=b(document).map(s(k,o))
j(n,e.reverse().join("")+t)}const B=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&d(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function h(){if(o())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-51a2d9b0.js.map
