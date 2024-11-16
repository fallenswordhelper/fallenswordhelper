import{c as s}from"./createInput-CZBTxG_u.js"
import{f as t}from"./functionPasses-BXOT6NCP.js"
import{r as a,d0 as e,v as n,cG as r,ai as o,b3 as i,bW as l,bv as c,s as p,aH as f,n as m,p as d,t as u,as as h,c6 as v,aB as g,b_ as j,e as y}from"./calfSystem-Blt4DbaE.js"
import{g as w}from"./getProfile-CrDirhRE.js"
import{a as b}from"./all-YfMtr2SN.js"
import{c as N}from"./createSpan-qOSQqjTl.js"
import{c as L}from"./closestTable-Ddgm5m0P.js"
import{a as P,g as T}from"./levelHighlight-DkyDPktg.js"
import{o as _}from"./onlineDot-KmDOLCpD.js"
import"./profile-BPaCJRNe.js"
import"./asInt-CnZ3Wv3g.js"
import"./valueText-CRDZBw-0.js"
import"./intValue-C7nTQec1.js"
let C=null,S=0
const F=[()=>(r(C)&&(C=o("highlightPlayersNearMyLvl")),C),(s,t)=>i(t)||t!==(S||(S=l(),S)),s=>s.last_login>=c(),s=>s.virtual_level>=P(),s=>s.virtual_level<=T()]
function H(s,t){const r=function(s){if(s.rows[0].cells[0].children[0])return Number(a(e,s.rows[0].cells[0].children[0].href))}(s)
n(s.rows[0],`<td>${_({last_login:t.last_login})}</td>`),function(s,t){return F.every((a=>a(t,s)))}(r,t)&&s.parentNode.parentNode.classList.add("lvlHighlight")}const O=s=>[L(s),h(s)]
async function W([s,t]){const a=await w(t)
a&&H(s,a)}async function x(s){p("toprated","FindOnlinePlayers")
const t=function(s){f(s)
const t=N({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'})
return s.parentNode.replaceChild(t,s),t}(s.target)
await async function(){const s=m(u,d()).map(O)
await b(s.map(W))}(),t.remove()}const B=[()=>v(),()=>d()?.children?.[0]?.rows?.length>2,()=>h(d().children[0].rows[1]).startsWith("Last Updated")]
function G(){B.every(t)&&function(){const t=g("td",d())[0]
t.children[0].className="fshTopListWrap"
const a=s({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
j(t,a),y(a,x)}()}export{G as default}
//# sourceMappingURL=toprated-BHupi9jf.js.map
