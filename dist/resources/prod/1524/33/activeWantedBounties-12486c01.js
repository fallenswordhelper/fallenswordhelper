import{u as e,B as t,C as n,bC as s,H as r,T as a,Z as i,y as o,q as l,G as c,c as u,m as d,bG as b,bE as f,A as p,bL as h,h as m,i as y,v as L,x as g,o as v}from"./calfSystem-0708a9bb.js"
import{f as $}from"./functionPasses-bfa8b450.js"
import{s as w}from"./shouldBeArray-6746477e.js"
import{i as x}from"./insertElementAfterBegin-20400e4d.js"
import{c as N}from"./createSpan-3083d966.js"
import"./csvSplit-d4535156.js"
import"./insertElementBefore-0a7f2602.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function A(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let B,T,j,C,S,W
function E(e){return l(A(e),{progress:t(e[5])})}function H(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=E(e.rows[t].cells)
B.bounty.push(n)}}(e)}function M(){return B&&a-B.lastUpdate>C||T&&a-T.lastUpdate>C}function P(e){const t=e[6]
return"[n/a]"!==c(t)?t.children[0].children[0].getAttribute("onclick"):""}const G=[()=>W.includes("*"),e=>W.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===c(t.cells[6])]
function U(e,t){var n;(function(e,t){return"[active]"!==c(t.cells[6])&&G.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,l(A(n),{offerer:c(n[1].children[0].children[0]),tickets:c(n[5]),accept:P(n)})))}let O,q,X,K,Z,z
function D(){return d({className:"minibox"})}function F(){f("bountyList",B),p("",O)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
X=N({className:"xxsLink",textContent:"Reset"}),m(e,X),m(O,e)
let t=""
if(0===B.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<B.bounty.length;e+=1)t+=`<a href="${B.bounty[e].link}" class="tip-static" data-tipped="${n=B.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${B.bounty[e].target}</a><br>`
var n
y(O,t)}function I(){f("wantedList",T),p("",q)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
K=N({className:"xxsLink",textContent:"Reset"}),m(e,K),m(q,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(q,t)}function J(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
Z=Number(t.value),z=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=c(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
U(s,n)}}(s)}function Q(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
B={},B.bounty=[],B.isRefreshed=!0,B.lastUpdate=a,n&&H(n),j=!0}(e),F())}function V(e){const t=L(e)
Q(t),u.enableWantedList&&(J(t),Z<z?R(Z+1).then(V):I())}const Y=[()=>!B,()=>!T,()=>S]
function _(e,t){B=s("bountyList"),T=s("wantedList"),C=r("bountyListRefreshTime"),S=r("bwNeedsRefresh"),S||M()&&(S=!0),Y.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=a,j=!1,W=w("wantedNames"),i("bwNeedsRefresh",!1),R(1).then(V)):function(e,t){t&&(T.isRefreshed=!1,I()),e&&(B.isRefreshed=!1,F())}(e,t)}function ee(e){e.target===X&&(f("bountyList",null),_(u.enableActiveBountyList,u.enableWantedList)),e.target===K&&(f("wantedList",null),_(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(q=D(),x(b,q)),u.enableActiveBountyList&&(O=D(),x(b,O)),O&&v(O,ee),q&&v(q,ee),_(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-12486c01.js.map
