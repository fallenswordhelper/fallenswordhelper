import{c as s}from"./createInput-CL-XaKKe.js"
import{a2 as a,r as t,dF as e,bA as n,c3 as o,dc as r,aA as i,aC as l,s as c,bh as d,aR as f,h as p,p as h,Y as u,aT as m,a0 as v,cN as g,dG as y,b6 as w,cB as N,o as b}from"./calfSystem-CQOGdqPv.js"
import{g as L}from"./getProfile-SBVXpE4h.js"
import{c as j}from"./closestTable-Cs7gyt8-.js"
import{a as C,g as F}from"./levelHighlight-CBP5Y6cR.js"
import{o as P}from"./onlineDot-DGI5IYJJ.js"
let T=null,_=0
const O=[()=>(r(T)&&(T=i("highlightPlayersNearMyLvl")),T),(s,a)=>n(a)||a!==(_||(_=l(),_)),s=>s.last_login>=o(),s=>s.virtual_level>=C(),s=>s.virtual_level<=F()]
function H(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${P({last_login:n.last_login})}</td>`),function(s,a){return O.every(t=>t(a,s))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const S=s=>[j(s),m(s)]
async function A([s,a]){const t=await L(a)
t&&H(s,t)}async function D(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(S)
await v(s.map(A))}(),a.remove()}const M=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function W(){M.every(y)&&function(){const a=w("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
N(a,t),b(t,D)}()}export{W as default}
//# sourceMappingURL=toprated-0mSb0jXV.js.map
