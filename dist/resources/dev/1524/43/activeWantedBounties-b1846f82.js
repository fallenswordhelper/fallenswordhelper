import{u as e,C as t,D as n,bI as s,I as r,W as i,a0 as a,z as o,q as c,H as l,c as u,m as d,bM as b,bK as f,B as p,bR as h,h as m,i as y,v as L,y as g,o as v}from"./calfSystem-3cb2f93e.js"
import{f as $}from"./functionPasses-17426539.js"
import{s as w}from"./shouldBeArray-4c9f25ec.js"
import{i as N}from"./insertElementAfterBegin-1d9bd581.js"
import{c as x}from"./createSpan-95e4d2e5.js"
import"./csvSplit-4a4cc559.js"
import"./insertElementBefore-23d4e956.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let A,T,j,W,M,S
function C(e){return c(B(e),{progress:t(e[5])})}function H(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=C(e.rows[t].cells)
A.bounty.push(n)}}(e)}function P(){return A&&i-A.lastUpdate>W||T&&i-T.lastUpdate>W}function E(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const U=[()=>S.includes("*"),e=>S.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function O(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&U.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,c(B(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:E(n)})))}let q,G,I,K,X,z
function D(){return d({className:"minibox"})}function F(){f("bountyList",A),p("",q)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
I=x({className:"xxsLink",textContent:"Reset"}),m(e,I),m(q,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`<a href="${A.bounty[e].link}" class="tip-static" data-tipped="${n=A.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${A.bounty[e].target}</a><br>`
var n
y(q,t)}function J(){f("wantedList",T),p("",G)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
K=x({className:"xxsLink",textContent:"Reset"}),m(e,K),m(G,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(G,t)}function Q(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
X=Number(t.value),z=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
O(s,n)}}(s)}function V(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=i,n&&H(n),j=!0}(e),F())}function Y(e){const t=L(e)
V(t),u.enableWantedList&&(Q(t),X<z?R(X+1).then(Y):J())}const Z=[()=>!A,()=>!T,()=>M]
function _(e,t){A=s("bountyList"),T=s("wantedList"),W=r("bountyListRefreshTime"),M=r("bwNeedsRefresh"),M||P()&&(M=!0),Z.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=i,j=!1,S=w("wantedNames"),a("bwNeedsRefresh",!1),R(1).then(Y)):function(e,t){t&&(T.isRefreshed=!1,J()),e&&(A.isRefreshed=!1,F())}(e,t)}function ee(e){e.target===I&&(f("bountyList",null),_(u.enableActiveBountyList,u.enableWantedList)),e.target===K&&(f("wantedList",null),_(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(G=D(),N(b,G)),u.enableActiveBountyList&&(q=D(),N(b,q)),q&&v(q,ee),G&&v(G,ee),_(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-b1846f82.js.map
