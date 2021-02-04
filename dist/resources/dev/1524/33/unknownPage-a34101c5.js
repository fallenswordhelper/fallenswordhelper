import{D as e,G as n,H as t,bi as o,t as s,x as a,C as r,bj as i,bk as f,y as u,bl as c,ab as l,bm as m}from"./calfSystem-37f70deb.js"
import{f as p}from"./formatLocalDateTime-765410b5.js"
import{b}from"./buffObj-c674686b.js"
import{g,s as w}from"./idb-416129aa.js"
import{x as d}from"./xPath-269cd9bc.js"
import"./isDate-f49aa118.js"
import"./numberIsNaN-c188f177.js"
import"./padZ-df568ed6.js"
let k
function h(e){return k.exec(e)}function j(t){k||(k=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(n).map(h)}function v(e){const n=function(e){return b.find((n=>n.name===e))}(e)
return n?n.stam.toString():"-"}function x(e,n){let t
var o
return t=n[1]?` ${(o=n)[0]} (${v(o[1])} stamina)<br>`:(e=>` <span class="fshRed">${e[0]}</span><br>`)(n),e+t}function y(e){const n=p(new Date),t=j(document).map(s(x,n))
w(o,t.reverse().join("")+e)}const B=[[()=>r(".news_left_column"),()=>{i("unknown.news"),f()}],[()=>u("quickbuff-report"),()=>{i("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&g(o).then(y)}],[()=>d('//td[.="Quest Name"]'),()=>{i("unknown.questBook.injectQuestBookFull"),c()}],[()=>l('#pCC img[title="Inventing"]').length>0,()=>{i("unknown.recipes.inventing"),m()}]]
function D(){if(a())return
console.log("unknownPage")
const e=B.find((e=>e[0]()))
e&&e[1]()}B.push([()=>!0,()=>{console.log("Fell through!")}])
export default D
//# sourceMappingURL=unknownPage-a34101c5.js.map
