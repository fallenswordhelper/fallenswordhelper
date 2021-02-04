import{u as e,B as t,C as n,bF as s,H as a,T as r,Z as i,y as o,q as c,G as l,c as u,m as d,bJ as f,bH as b,A as p,bO as h,h as m,i as y,v as L,x as g,o as v}from"./calfSystem-c91a5c89.js"
import{f as $}from"./functionPasses-bfa8b450.js"
import{s as w}from"./shouldBeArray-557dccff.js"
import{i as x}from"./insertElementAfterBegin-602fd288.js"
import{c as N}from"./createSpan-1ad5cfdb.js"
import"./csvSplit-d4535156.js"
import"./insertElementBefore-0a7f2602.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function A(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let B,T,j,H,S,W
function C(e){return c(A(e),{progress:t(e[5])})}function M(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=C(e.rows[t].cells)
B.bounty.push(n)}}(e)}function P(){return B&&r-B.lastUpdate>H||T&&r-T.lastUpdate>H}function E(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const O=[()=>W.includes("*"),e=>W.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function U(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&O.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,c(A(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:E(n)})))}let G,q,X,F,J,K
function Z(){return d({className:"minibox"})}function z(){b("bountyList",B),p("",G)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
X=N({className:"xxsLink",textContent:"Reset"}),m(e,X),m(G,e)
let t=""
if(0===B.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<B.bounty.length;e+=1)t+=`<a href="${B.bounty[e].link}" class="tip-static" data-tipped="${n=B.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${B.bounty[e].target}</a><br>`
var n
y(G,t)}function D(){b("wantedList",T),p("",q)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
F=N({className:"xxsLink",textContent:"Reset"}),m(e,F),m(q,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(q,t)}function I(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
J=Number(t.value),K=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
U(s,n)}}(s)}function Q(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
B={},B.bounty=[],B.isRefreshed=!0,B.lastUpdate=r,n&&M(n),j=!0}(e),z())}function V(e){const t=L(e)
Q(t),u.enableWantedList&&(I(t),J<K?R(J+1).then(V):D())}const Y=[()=>!B,()=>!T,()=>S]
function _(e,t){B=s("bountyList"),T=s("wantedList"),H=a("bountyListRefreshTime"),S=a("bwNeedsRefresh"),S||P()&&(S=!0),Y.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=r,j=!1,W=w("wantedNames"),i("bwNeedsRefresh",!1),R(1).then(V)):function(e,t){t&&(T.isRefreshed=!1,D()),e&&(B.isRefreshed=!1,z())}(e,t)}function ee(e){e.target===X&&(b("bountyList",null),_(u.enableActiveBountyList,u.enableWantedList)),e.target===F&&(b("wantedList",null),_(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(q=Z(),x(f,q)),u.enableActiveBountyList&&(G=Z(),x(f,G)),G&&v(G,ee),q&&v(q,ee),_(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-441f63ab.js.map
