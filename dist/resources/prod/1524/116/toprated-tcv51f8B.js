import{c as s}from"./createInput-p1XymqYu.js"
import{f as t}from"./functionPasses-EKTPXVtw.js"
import{v as a,r as e,cL as n,aU as o,ct as r,ad as i,bH as l,s as c,aD as p,k as f,p as m,l as u,al as d,au as h,bN as v,o as g,bV as j}from"./calfSystem-ZGMc097r.js"
import{g as y}from"./getProfile-i6lf-dcb.js"
import{a as w}from"./all-TTLWag-d.js"
import{c as L}from"./createSpan-KOGQFRks.js"
import{c as N}from"./closestTable-ell7c3Dx.js"
import{a as b,g as P}from"./levelHighlight-1IOee2k5.js"
import{o as T}from"./onlineDot-hg0rJ5BB.js"
import{s as C}from"./now-pQzGw6vd.js"
import"./profile-8EpW9vUD.js"
import"./asInt-KJiq9-ya.js"
import"./valueText-qMjYFyOd.js"
import"./intValue-JHhLnq8V.js"
let H=null,S=0
const _=[()=>(r(H)&&(H=i("highlightPlayersNearMyLvl")),H),(s,t)=>o(t)||t!==(S||(S=l(),S)),s=>s.last_login>=C(),s=>s.virtual_level>=b(),s=>s.virtual_level<=P()]
function F(s,t){const o=function(s){if(s.rows[0].cells[0].children[0])return Number(e(n,s.rows[0].cells[0].children[0].href))}(s)
a(s.rows[0],`<td>${T({last_login:t.last_login})}</td>`),function(s,t){return _.every((a=>a(t,s)))}(o,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[N(s),d(s)]
async function k([s,t]){const a=await y(t)
a&&F(s,a)}async function I(s){c("toprated","FindOnlinePlayers")
const t=function(s){p(s)
const t=L({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=f(u,m()).map(O)
await w(s.map(k))}(),t.remove()}const U=[()=>j(),()=>m()?.children?.[0]?.rows?.length>2,()=>d(m().children[0].rows[1]).startsWith("Last Updated")]
function x(){U.every(t)&&function(){const t=h("td",m())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
v(t,a),g(a,I)}()}export{x as default}
//# sourceMappingURL=toprated-tcv51f8B.js.map
