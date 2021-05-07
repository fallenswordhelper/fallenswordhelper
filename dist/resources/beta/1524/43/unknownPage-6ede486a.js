import{I as t,bj as n,t as s,y as a,D as o,bk as e,bl as f,z as r,bm as i,ac as u,bn as m}from"./calfSystem-1d588248.js"
import{g as c,b as p}from"./getBuff-c2fae158.js"
import{f as b}from"./formatLocalDateTime-737a2c06.js"
import{g as j,s as d}from"./idb-dfc3696a.js"
import{x as l}from"./xPath-0b11adfc.js"
import"./buffObj-b66afe66.js"
import"./isDate-52df43b3.js"
import"./numberIsNaN-885a5556.js"
import"./padZ-7f619ae9.js"
const g=t=>` ${t[0]} (${function(t){const n=c(t)
return n?n.stam.toString():"-"}(t[1])} stamina)<br>`
function k(t,n){let s
return s=n[1]?g(n):` <span class="fshRed">${n[0]}</span><br>`,t+s}function w(t){const a=b(new Date),o=p(document).map(s(k,a))
d(n,o.reverse().join("")+t)}const B=[[()=>o(".news_left_column"),()=>{e("unknown.news"),f()}],[()=>r("quickbuff-report"),()=>{e("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&j(n).then(w)}],[()=>l('//td[.="Quest Name"]'),()=>{e("unknown.questBook.injectQuestBookFull"),i()}],[()=>u('#pCC img[title="Inventing"]').length>0,()=>{e("unknown.recipes.inventing"),m()}]]
function h(){if(a())return
const t=B.find((t=>t[0]()))
t&&t[1]()}export default h
//# sourceMappingURL=unknownPage-6ede486a.js.map
