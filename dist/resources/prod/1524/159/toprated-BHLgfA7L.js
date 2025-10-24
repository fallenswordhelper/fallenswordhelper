import{c as s}from"./createInput-aJbr7AXf.js"
import{a3 as a,r as t,dz as e,bB as n,c3 as i,dd as o,aA as r,aC as l,s as c,bi as d,aR as f,h as p,p as h,Z as u,aT as m,a1 as v,j as g,dA as y,b6 as w,cB as b,o as L}from"./calfSystem-CIdPz3EO.js"
import{g as N}from"./getProfile-DD2KOP4W.js"
import{c as j}from"./closestTable-CLMP9U5y.js"
import{a as C,g as F}from"./levelHighlight-Bpke8aZ8.js"
import{o as P}from"./onlineDot-Cz7JrOQc.js"
let T=null,_=0
const O=[()=>(o(T)&&(T=r("highlightPlayersNearMyLvl")),T),(s,a)=>n(a)||a!==(_||(_=l(),_)),s=>s.last_login>=i(),s=>s.virtual_level>=C(),s=>s.virtual_level<=F()]
function H(s,n){const i=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${P({last_login:n.last_login})}</td>`),function(s,a){return O.every(t=>t(a,s))}(i,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const S=s=>[j(s),m(s)]
async function A([s,a]){const t=await N(a)
t&&H(s,t)}async function B(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(S)
await v(s.map(A))}(),a.remove()}const M=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function W(){M.every(y)&&function(){const a=w("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(a,t),L(t,B)}()}export{W as default}
//# sourceMappingURL=toprated-BHLgfA7L.js.map
