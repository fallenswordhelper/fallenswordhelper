import{c as s}from"./createInput-LMpmIneO.js"
import{a3 as a,r as t,dP as e,bz as n,c2 as r,dk as o,aB as i,cx as l,s as c,be as d,aR as f,k as p,p as h,Z as u,aT as m,a1 as v,cM as g,dQ as y,b6 as w,cA as b,o as N}from"./calfSystem-C1X5YxJZ.js"
import{g as j}from"./getProfile-KZlYslNT.js"
import{c as L}from"./closestTable-STrxtv_E.js"
import{a as C,g as P}from"./levelHighlight-DXwvwD_Y.js"
import{o as T}from"./onlineDot-D8QnVOid.js"
let _=null,F=0
const O=[()=>(o(_)&&(_=i("highlightPlayersNearMyLvl")),_),(s,a)=>n(a)||a!==(F||(F=l(),F)),s=>s.last_login>=r(),s=>s.virtual_level>=C(),s=>s.virtual_level<=P()]
function k(s,n){const r=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:n.last_login})}</td>`),function(s,a){return O.every((t=>t(a,s)))}(r,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const H=s=>[L(s),m(s)]
async function M([s,a]){const t=await j(a)
t&&k(s,t)}async function S(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(H)
await v(s.map(M))}(),a.remove()}const x=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function I(){x.every(y)&&function(){const a=w("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(a,t),N(t,S)}()}export{I as default}
//# sourceMappingURL=toprated-BOQ4JX8E.js.map
