import{c as s}from"./createInput-ESh6G5it.js"
import{a2 as a,r as t,dy as e,bz as n,c2 as o,db as r,az as i,aB as l,s as c,bg as d,aQ as f,h as p,p as h,Y as u,aS as m,a0 as g,cM as v,dz as y,b5 as w,cA as b,o as N}from"./calfSystem-CIuUjh4H.js"
import{g as L}from"./getProfile-Bgy03v92.js"
import{c as j}from"./closestTable-CAaKFM8t.js"
import{a as C,g as P}from"./levelHighlight-qcL3fFVb.js"
import{o as _}from"./onlineDot-ixY_oy9C.js"
let F=null,O=0
const S=[()=>(r(F)&&(F=i("highlightPlayersNearMyLvl")),F),(s,a)=>n(a)||a!==(O||(O=l(),O)),s=>s.last_login>=o(),s=>s.virtual_level>=C(),s=>s.virtual_level<=P()]
function T(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(t(e,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${_({last_login:n.last_login})}</td>`),function(s,a){return S.every(t=>t(a,s))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const z=s=>[j(s),m(s)]
async function H([s,a]){const t=await L(a)
t&&T(s,t)}async function M(s){c("toprated","FindOnlinePlayers")
const a=function(s){d(s)
const a=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(a,s),a}(s.target)
await async function(){const s=p(u,h()).map(z)
await g(s.map(H))}(),a.remove()}const E=[()=>v(),()=>h()?.children?.[0]?.rows?.length>2,()=>m(h().children[0].rows[1]).startsWith("Last Updated")]
function W(){E.every(y)&&function(){const a=w("td",h())[0]
a.children[0].className="fshTopListWrap"
const t=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
b(a,t),N(t,M)}()}export{W as default}
//# sourceMappingURL=toprated-DzFZLW6A.js.map
