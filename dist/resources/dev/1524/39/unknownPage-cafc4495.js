import{I as n,bj as s,t,y as o,D as e,bk as a,bl as r,z as f,bm as u,ad as i,bn as m}from"./calfSystem-b31aba65.js"
import{g as c,b as p}from"./getBuff-9eed8831.js"
import{f as b}from"./formatLocalDateTime-2385e9c5.js"
import{g as l,s as g}from"./idb-71729176.js"
import{x as j}from"./xPath-895a892d.js"
import"./buffObj-1e65986b.js"
import"./isDate-cef09439.js"
import"./numberIsNaN-d0e4b349.js"
import"./padZ-5c8671fc.js"
const d=n=>` ${n[0]} (${function(n){const s=c(n)
return s?s.stam.toString():"-"}(n[1])} stamina)<br>`
function k(n,s){let t
return t=s[1]?d(s):` <span class="fshRed">${s[0]}</span><br>`,n+t}function w(n){const o=b(new Date),e=p(document).map(t(k,o))
g(s,e.reverse().join("")+n)}const h=[[()=>e(".news_left_column"),()=>{a("unknown.news"),r()}],[()=>f("quickbuff-report"),()=>{a("unknown.buffLog.updateBuffLog"),n("keepBuffLog")&&l(s).then(w)}],[()=>j('//td[.="Quest Name"]'),()=>{a("unknown.questBook.injectQuestBookFull"),u()}],[()=>i('#pCC img[title="Inventing"]').length>0,()=>{a("unknown.recipes.inventing"),m()}]]
function B(){if(o())return
console.log("unknownPage")
const n=h.find((n=>n[0]()))
n&&n[1]()}h.push([()=>!0,()=>{console.log("Fell through!")}])
export default B
//# sourceMappingURL=unknownPage-cafc4495.js.map
