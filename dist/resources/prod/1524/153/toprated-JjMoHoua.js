import{c as s}from"./createInput-CTW03HuX.js"
import{a1 as a,r as t,dJ as e,bx as n,c0 as r,df as o,az as i,cr as l,s as c,bc as d,aP as f,h as p,p as h,X as u,aR as m,_ as v,cG as g,dK as y,b4 as w,cu as b,o as N}from"./calfSystem-CT1aM4VG.js"
import{g as L}from"./getProfile-CdbiMAwX.js"
import{c as j}from"./closestTable-C24mp168.js"
import{a as P,g as _}from"./levelHighlight-w_oY2gIP.js"
import{o as C}from"./onlineDot-rvpUtCt8.js"
let F=null,O=0
const T=[()=>(o(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,a)=>n(a)||a!==(O||(O=l(),O)),s=>s.last_login>=r(),s=>s.virtual_level>=P(),s=>s.virtual_level<=_()]
function H(s,n){const r=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${C({last_login:n.last_login})}</td>`),function(s,a){return T.every((t=>t(a,s)))}(r,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const S=s=>[j(s),m(s)]
async function k([s,a]){const t=await L(a)
t&&H(s,t)}async function x(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(S)
await v(s.map(k))}(),a.remove()}const J=[()=>g(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function M(){J.every(y)&&function(){const a=w("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(a,t),N(t,x)}()}export{M as default}
//# sourceMappingURL=toprated-JjMoHoua.js.map
