import{k as a,g as s,l as t,u as e,x as n,p as i,ai as l,aD as c,cq as r,o,ao as u,b4 as f,s as d,ap as m,b5 as h,J as p,aN as g}from"./calfSystem-fMW-YMyF.js"
import{i as y}from"./insertHtmlAfterBegin-qcT2rtgA.js"
import{d as j}from"./doStatTotal-ZW6rfEGB.js"
import{r as w}from"./relatePlayer-CqXKK9Pf.js"
import"./getMembrList-FvUbc1-a.js"
const x=()=>a(t,s("resultRows")).filter((a=>!a.href.endsWith("=null"))),L=async a=>(await e(a.map(w))).filter((([,a])=>a)),b={guild:"fshGreen",ally:"fshBlue",enemy:"fshRed"}
async function A(){const a=x()
if(!a.length)return
const s=await L(a)
s.length&&s.forEach((([a,s])=>{a.classList.add(b[s])}))}function C(a){const[s]=a.parentNode.parentNode.children[0].children
return a.outerHTML=`<img src="${h}ui/misc/spinner.gif" width="14" height="14">`,p({cmd:"auctionhouse",subcmd:"cancel",auction_id:g(s.dataset.tipped,"inv_id")})}async function H(){d("AH","cancelAllAH")
const a=m("auctionCancel",s("resultRows"))
0!==a.length&&(await e(a.map(C)),f(s("refresh")))}function N(){!n()&&i()&&(function(){const a=l(s("fill"))?.nextElementSibling?.children?.[0]
if(!a)return
const t=c({className:"smallLink",textContent:"Cancel All"})
a.classList.add("fshCenter"),y(a,"]"),r(a,t),y(a,"["),o(t,H)}(),u("autoFillMinBidPrice")&&f(s("auto-fill")),j(),async function(){await A(),$(document).ajaxSuccess(((a,s,t)=>{t.url.endsWith("=ajaxsearch")&&A()}))}())}export{N as default}
//# sourceMappingURL=injectAuctionHouse-CUfbOiLK.js.map
