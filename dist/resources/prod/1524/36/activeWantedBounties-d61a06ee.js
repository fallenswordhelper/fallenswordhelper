import{u as e,C as t,D as n,bE as s,I as a,U as r,_ as i,z as o,q as c,H as l,c as u,m as b,bI as d,bG as f,B as p,bN as h,h as m,i as y,v as L,y as g,o as v}from"./calfSystem-e7bde0c3.js"
import{f as $}from"./functionPasses-1a0207a7.js"
import{s as w}from"./shouldBeArray-fe886b3b.js"
import{i as N}from"./insertElementAfterBegin-9b535417.js"
import{c as x}from"./createSpan-47082f19.js"
import"./csvSplit-482f2ccd.js"
import"./insertElementBefore-42a90ba9.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let A,T,j,S,W,C
function E(e){return c(B(e),{progress:t(e[5])})}function H(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=E(e.rows[t].cells)
A.bounty.push(n)}}(e)}function M(){return A&&r-A.lastUpdate>S||T&&r-T.lastUpdate>S}function P(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const U=[()=>C.includes("*"),e=>C.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function G(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&U.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,c(B(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:P(n)})))}let O,q,I,X,z,D
function K(){return b({className:"minibox"})}function _(){f("bountyList",A),p("",O)
const e=b({innerHTML:`<a href="${h}">Active Bounties</a> `})
I=x({className:"xxsLink",textContent:"Reset"}),m(e,I),m(O,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`<a href="${A.bounty[e].link}" class="tip-static" data-tipped="${n=A.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${A.bounty[e].target}</a><br>`
var n
y(O,t)}function F(){f("wantedList",T),p("",q)
const e=b({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
X=x({className:"xxsLink",textContent:"Reset"}),m(e,X),m(q,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(q,t)}function J(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
z=Number(t.value),D=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
G(s,n)}}(s)}function Q(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=r,n&&H(n),j=!0}(e),_())}function V(e){const t=L(e)
Q(t),u.enableWantedList&&(J(t),z<D?R(z+1).then(V):F())}const Y=[()=>!A,()=>!T,()=>W]
function Z(e,t){A=s("bountyList"),T=s("wantedList"),S=a("bountyListRefreshTime"),W=a("bwNeedsRefresh"),W||M()&&(W=!0),Y.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=r,j=!1,C=w("wantedNames"),i("bwNeedsRefresh",!1),R(1).then(V)):function(e,t){t&&(T.isRefreshed=!1,F()),e&&(A.isRefreshed=!1,_())}(e,t)}function ee(e){e.target===I&&(f("bountyList",null),Z(u.enableActiveBountyList,u.enableWantedList)),e.target===X&&(f("wantedList",null),Z(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(q=K(),N(d,q)),u.enableActiveBountyList&&(O=K(),N(d,O)),O&&v(O,ee),q&&v(q,ee),Z(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-d61a06ee.js.map
