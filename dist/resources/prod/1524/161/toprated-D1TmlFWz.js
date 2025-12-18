import{c as s}from"./createInput-DJIEghIX.js"
import{a3 as a,r as t,dz as e,bC as n,c1 as o,de as r,aA as i,aC as l,s as c,bj as d,aR as f,h as p,p as h,Z as u,aT as m,a1 as v,j as g,dA as y,b6 as w,cA as b,o as j}from"./calfSystem-Cs6CSxoU.js"
import{g as N}from"./getProfile-ClZrn91t.js"
import{c as C}from"./closestTable-CWRa1z_C.js"
import{a as L,g as P}from"./levelHighlight-CfrLxVu5.js"
import{o as T}from"./onlineDot-DmNFHAz9.js"
let _=null,F=0
const H=[()=>(r(_)&&(_=i("highlightPlayersNearMyLvl")),_),(s,a)=>n(a)||a!==(F||(F=l(),F)),s=>s.last_login>=o(),s=>s.virtual_level>=L(),s=>s.virtual_level<=P()]
function O(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:n.last_login})}</td>`),function(s,a){return H.every(t=>t(a,s))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const A=s=>[C(s),m(s)]
async function M([s,a]){const t=await N(a)
t&&O(s,t)}async function S(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(A)
await v(s.map(M))}(),a.remove()}const W=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function k(){W.every(y)&&function(){const a=w("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(a,t),j(t,S)}()}export{k as default}
//# sourceMappingURL=toprated-D1TmlFWz.js.map
