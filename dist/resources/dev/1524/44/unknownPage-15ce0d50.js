import{I as n,bm as s,t,y as o,D as e,bn as a,bo as f,z as r,bp as u,ac as i,bq as m}from"./calfSystem-f7cf24f6.js"
import{g as c,b}from"./getBuff-7b591316.js"
import{f as p}from"./formatLocalDateTime-c295cb3e.js"
import{g as l,s as g}from"./idb-62b65e66.js"
import{x as j}from"./xPath-65d0469c.js"
import"./buffObj-1b3bee9b.js"
import"./isDate-00b71016.js"
import"./numberIsNaN-11f99b26.js"
import"./padZ-634214b3.js"
const d=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=p(new Date),e=b(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-15ce0d50.js.map
