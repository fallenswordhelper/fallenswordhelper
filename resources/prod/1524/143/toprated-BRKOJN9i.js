import{c as s}from"./createInput-DC6X1nzh.js"
import{w as t,r as a,ds as e,bl as n,bW as o,d1 as r,ao as l,cm as i,s as c,a$ as d,aD as f,k as p,p as u,l as h,u as m,aF as v,aS as g,cq as y,o as w,dt as N,cA as b}from"./calfSystem-ChzN4Q-P.js"
import{g as L}from"./getProfile-DSmz_YCK.js"
import{c as j}from"./closestTable-DvVVJKGM.js"
import{a as O,g as C}from"./levelHighlight-DCaL97MF.js"
import{o as F}from"./onlineDot-mqfQV1WG.js"
let P=null,_=0
const S=[()=>(r(P)&&(P=l("highlightPlayersNearMyLvl")),P),(s,t)=>n(t)||t!==(_||(_=i(),_)),s=>s.last_login>=o(),s=>s.virtual_level>=O(),s=>s.virtual_level<=C()]
function T(s,n){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(a(e,s.rows[0].cells[0].children[0].href))}(s)
t(s.rows[0],`<td>${F({last_login:n.last_login})}</td>`),function(s,t){return S.every((a=>a(t,s)))}(o,n)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const H=s=>[j(s),v(s)]
async function W([s,t]){const a=await L(t)
a&&T(s,a)}async function k(s){c("toprated","FindOnlinePlayers")
const t=function(s){d(s)
const t=f({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=p(h,u()).map(H)
await m(s.map(W))}(),t.remove()}const D=[()=>b(),()=>u()?.children?.[0]?.rows?.length>2,()=>v(u().children[0].rows[1]).startsWith("Last Updated")]
function M(){D.every(N)&&function(){const t=g("td",u())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
y(t,a),w(a,k)}()}export{M as default}
//# sourceMappingURL=toprated-BRKOJN9i.js.map
