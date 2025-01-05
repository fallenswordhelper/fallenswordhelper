import{c as s}from"./createInput-CBvBhRjz.js"
import{w as a,r as t,ds as e,bl as n,bW as o,d1 as l,ao as r,cm as i,s as c,a$ as d,aD as f,k as p,p as u,l as h,u as m,aF as v,aS as g,cq as y,o as w,dt as N,cA as b}from"./calfSystem-fMW-YMyF.js"
import{g as L}from"./getProfile-BUjDunRy.js"
import{c as P}from"./closestTable-aoGd549m.js"
import{a as j,g as C}from"./levelHighlight-CvY92Qep.js"
import{o as F}from"./onlineDot-CdkYSVKg.js"
let _=null,O=0
const S=[()=>(l(_)&&(_=r("highlightPlayersNearMyLvl")),_),(s,a)=>n(a)||a!==(O||(O=i(),O)),s=>s.last_login>=o(),s=>s.virtual_level>=j(),s=>s.virtual_level<=C()]
function T(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${F({last_login:n.last_login})}</td>`),function(s,a){return S.every((t=>t(a,s)))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const H=s=>[P(s),v(s)]
async function W([s,a]){const t=await L(a)
t&&T(s,t)}async function k(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(h,u()).map(H)
await m(s.map(W))}(),a.remove()}const D=[()=>b(),()=>u()?.children?.[0]?.rows?.length>2,()=>v(u().children[0].rows[1]).startsWith("Last Updated")]
function M(){D.every(N)&&function(){const a=g("td",u())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
y(a,t),w(t,k)}()}export{M as default}
//# sourceMappingURL=toprated-Bw58bvCf.js.map
