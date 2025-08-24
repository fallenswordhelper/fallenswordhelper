import{c as s}from"./createInput-7MlQDlWD.js"
import{a2 as a,r as t,dD as e,by as n,c1 as o,d9 as r,aA as i,cu as l,s as c,bd as d,aQ as f,h as p,p as h,Y as u,aS as m,a0 as v,cJ as g,dE as y,b5 as w,cx as b,o as N}from"./calfSystem-79LsojAC.js"
import{g as L}from"./getProfile-DMH8_XMK.js"
import{c as j}from"./closestTable-BuyyntoH.js"
import{a as C,g as P}from"./levelHighlight-DiLR0cOI.js"
import{o as _}from"./onlineDot-XDIE_fQc.js"
let F=null,O=0
const S=[()=>(r(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,a)=>n(a)||a!==(O||(O=l(),O)),s=>s.last_login>=o(),s=>s.virtual_level>=C(),s=>s.virtual_level<=P()]
function T(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${_({last_login:n.last_login})}</td>`),function(s,a){return S.every(t=>t(a,s))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const H=s=>[j(s),m(s)]
async function k([s,a]){const t=await L(a)
t&&T(s,t)}async function x(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(H)
await v(s.map(k))}(),a.remove()}const D=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function E(){D.every(y)&&function(){const a=w("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(a,t),N(t,x)}()}export{E as default}
//# sourceMappingURL=toprated-CgSvqIsq.js.map
