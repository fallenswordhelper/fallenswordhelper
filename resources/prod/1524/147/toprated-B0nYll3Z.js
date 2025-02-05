import{c as s}from"./createInput-B6T-33bD.js"
import{x as t,r as a,dy as e,bn as n,bZ as o,d8 as r,aq as i,cp as l,s as c,b2 as d,aF as f,l as p,p as h,m as u,aH as m,v,cD as g,dz as y,aV as w,ct as N,o as b}from"./calfSystem-BAeDn21M.js"
import{g as L}from"./getProfile-BtKIujmS.js"
import{c as j}from"./closestTable-MoRx7kRV.js"
import{a as C,g as F}from"./levelHighlight-D3Cw3gQT.js"
import{o as P}from"./onlineDot-Dbu9j1oq.js"
let _=null,H=0
const O=[()=>(r(_)&&(_=i("highlightPlayersNearMyLvl")),_),(s,t)=>n(t)||t!==(H||(H=l(),H)),s=>s.last_login>=o(),s=>s.virtual_level>=C(),s=>s.virtual_level<=F()]
function T(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(a(e,s.rows[0].cells[0].children[0].href))}(s)
t(s.rows[0],`<td>${P({last_login:n.last_login})}</td>`),function(s,t){return O.every((a=>a(t,s)))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const S=s=>[j(s),m(s)]
async function x([s,t]){const a=await L(t)
a&&T(s,a)}async function D(s){c("toprated","FindOnlinePlayers")
const t=function(s){d(s)
const t=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=p(u,h()).map(S)
await v(s.map(x))}(),t.remove()}const M=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function W(){M.every(y)&&function(){const t=w("td",h())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
N(t,a),b(a,D)}()}export{W as default}
//# sourceMappingURL=toprated-B0nYll3Z.js.map
