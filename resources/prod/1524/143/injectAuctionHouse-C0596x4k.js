import{k as a,g as s,l as t,u as e,x as n,p as i,ai as l,aD as c,cq as r,o,ao as u,b4 as f,s as d,ap as m,b5 as h,J as p,aN as g}from"./calfSystem-ChzN4Q-P.js"
import{i as y}from"./insertHtmlAfterBegin-eEM8BtQM.js"
import{d as j}from"./doStatTotal-CXgr6RmM.js"
import{r as w}from"./relatePlayer-Dd7reh5y.js"
import"./getMembrList-CEPzIObM.js"
const x=()=>a(t,s("resultRows")).filter((a=>!a.href.endsWith("=null"))),b=async a=>(await e(a.map(w))).filter((([,a])=>a)),A={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function H(){const a=x()
if(!a.length)return
const s=await b(a)
s.length&&s.forEach((([a,s])=>{a.classList.add(A[s])}))}function L(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${h}ui/misc/spinner.gif" width="14" height="14">`,p({cmd:"auctionhouse",subcmd:"cancel",auction_id:g(s.dataset.tipped,"inv_id")})}async function C(){d("AH","cancelAllAH")
const a=m("auctionCancel",s("resultRows"))
0!==a.length&&(await e(a.map(L)),f(s("refresh")))}function N(){!n()&&i()&&(function(){const a=l(s("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=c({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),y(a,"]"),r(a,t),y(a,"["),o(t,C)}(),u("autoFillMinBidPrice")&&f(s("auto-fill")),j(),async function(){await H(),$(document).ajaxSuccess(((a,s,t)=>{t.url.endsWith("=ajaxsearch")&&H()}))}())}export{N as default}
//# sourceMappingURL=injectAuctionHouse-C0596x4k.js.map
