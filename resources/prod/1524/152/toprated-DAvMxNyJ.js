import{c as s}from"./createInput-Da4kiVrz.js"
import{a3 as a,r as t,dN as e,bw as n,b$ as r,di as i,aB as o,cv as l,s as c,bb as d,b2 as f,k as p,p as h,Z as u,aP as m,a1 as v,cK as g,dO as y,b3 as b,cy as w,o as N}from"./calfSystem-BlPuMQGT.js"
import{g as j}from"./getProfile-CjWZvFaq.js"
import{c as L}from"./closestTable-gY6pXvyq.js"
import{a as C,g as P}from"./levelHighlight-zWITRPw2.js"
import{o as O}from"./onlineDot-BCSSHLUO.js"
let _=null,F=0
const T=[()=>(i(_)&&(_=o("highlightPlayersNearMyLvl")),_),(s,a)=>n(a)||a!==(F||(F=l(),F)),s=>s.last_login>=r(),s=>s.virtual_level>=C(),s=>s.virtual_level<=P()]
function H(s,n){const r=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${O({last_login:n.last_login})}</td>`),function(s,a){return T.every((t=>t(a,s)))}(r,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const S=s=>[L(s),m(s)]
async function k([s,a]){const t=await j(a)
t&&H(s,t)}async function I(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(S)
await v(s.map(k))}(),a.remove()}const M=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function W(){M.every(y)&&function(){const a=b("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
w(a,t),N(t,I)}()}export{W as default}
//# sourceMappingURL=toprated-DAvMxNyJ.js.map
