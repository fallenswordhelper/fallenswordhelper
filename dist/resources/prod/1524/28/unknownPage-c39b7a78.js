import{D as e,G as n,H as t,br as s,t as a,x as o,C as r,bB as i,bC as f,y as u,bD as c,a9 as m,bE as l}from"./calfSystem-a5da5210.js"
import"./numberIsNaN-91041dcf.js"
import{g as p,s as b}from"./idb-2c141566.js"
import"./isDate-45c423ee.js"
import"./padZ-28ca6b6e.js"
import{f as d}from"./formatLocalDateTime-8d7e97c2.js"
import{x as w}from"./xPath-f25ada79.js"
import{b as k}from"./buffObj-79519cf4.js"
let g
function h(e){return g.exec(e)}function j(t){g||(g=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(n).map(h)}function v(e){const n=function(e){return k.find(n=>n.name===e)}(e)
return n?n.stam.toString():"-"}function x(e,n){let t
var s
return t=n[1]?` ${(s=n)[0]} (${v(s[1])} stamina)<br>`:(e=>` <span class="fshRed">${e[0]}</span><br>`)(n),e+t}function B(e){const n=d(new Date),t=j(document).map(a(x,n))
b(s,t.reverse().join("")+e)}const D=[[()=>r(".news_left_column"),()=>{i("unknown.news"),f()}],[()=>u("quickbuff-report"),()=>{i("unknown.buffLog.updateBuffLog"),t("keepBuffLog")&&p(s).then(B)}],[()=>w('//td[.="Quest Name"]'),()=>{i("unknown.questBook.injectQuestBookFull"),c()}],[()=>m('#pCC img[title="Inventing"]').length>0,()=>{i("unknown.recipes.inventing"),l()}]]
function y(){if(o())return
const e=D.find(e=>e[0]())
e&&e[1]()}export default y
//# sourceMappingURL=unknownPage-c39b7a78.js.map
