import{c as s}from"./createInput-DtY3IfhY.js"
import{z as t,r as a,dH as e,bn as n,bU as o,dc as r,ao as i,cn as l,s as c,b2 as d,aF as f,n as p,p as h,t as u,aH as m,x as v,cD as g,dI as y,aW as w,cr as b,o as N}from"./calfSystem-BGOTz8de.js"
import{g as L}from"./getProfile-BVYIy6nS.js"
import{c as j}from"./closestTable-DjvmqHiL.js"
import{a as C,g as F}from"./levelHighlight-CtyOXs57.js"
import{o as H}from"./onlineDot-K2TYhqz6.js"
let P=null,_=0
const O=[()=>(r(P)&&(P=i("highlightPlayersNearMyLvl")),P),(s,t)=>n(t)||t!==(_||(_=l(),_)),s=>s.last_login>=o(),s=>s.virtual_level>=C(),s=>s.virtual_level<=F()]
function T(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(a(e,s.rows[0].cells[0].children[0].href))}(s)
t(s.rows[0],`<td>${H({last_login:n.last_login})}</td>`),function(s,t){return O.every((a=>a(t,s)))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const S=s=>[j(s),m(s)]
async function W([s,t]){const a=await L(t)
a&&T(s,a)}async function k(s){c("toprated","FindOnlinePlayers")
const t=function(s){d(s)
const t=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=p(u,h()).map(S)
await v(s.map(W))}(),t.remove()}const x=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function D(){x.every(y)&&function(){const t=w("td",h())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(t,a),N(a,k)}()}export{D as default}
//# sourceMappingURL=toprated-DtJcDWik.js.map
