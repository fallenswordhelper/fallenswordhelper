import{u as e,C as t,D as n,bH as s,I as r,V as i,_ as a,z as o,q as c,H as l,c as u,m as d,bL as b,bJ as f,B as p,bQ as h,h as m,i as y,v as L,y as g,o as v}from"./calfSystem-1d588248.js"
import{f as $}from"./functionPasses-17426539.js"
import{s as w}from"./shouldBeArray-d0c2e549.js"
import{i as N}from"./insertElementAfterBegin-38e30afe.js"
import{c as x}from"./createSpan-256b26cd.js"
import"./csvSplit-4a4cc559.js"
import"./insertElementBefore-23d4e956.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let A,T,j,H,S,W
function C(e){return c(B(e),{progress:t(e[5])})}function M(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=C(e.rows[t].cells)
A.bounty.push(n)}}(e)}function P(){return A&&i-A.lastUpdate>H||T&&i-T.lastUpdate>H}function E(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const U=[()=>W.includes("*"),e=>W.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function O(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&U.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,c(B(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:E(n)})))}let q,G,X,z,D,I
function J(){return d({className:"minibox"})}function K(){f("bountyList",A),p("",q)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
X=x({className:"xxsLink",textContent:"Reset"}),m(e,X),m(q,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`<a href="${A.bounty[e].link}" class="tip-static" data-tipped="${n=A.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${A.bounty[e].target}</a><br>`
var n
y(q,t)}function Q(){f("wantedList",T),p("",G)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
z=x({className:"xxsLink",textContent:"Reset"}),m(e,z),m(G,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(G,t)}function V(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
D=Number(t.value),I=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
O(s,n)}}(s)}function _(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=i,n&&M(n),j=!0}(e),K())}function F(e){const t=L(e)
_(t),u.enableWantedList&&(V(t),D<I?R(D+1).then(F):Q())}const Y=[()=>!A,()=>!T,()=>S]
function Z(e,t){A=s("bountyList"),T=s("wantedList"),H=r("bountyListRefreshTime"),S=r("bwNeedsRefresh"),S||P()&&(S=!0),Y.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=i,j=!1,W=w("wantedNames"),a("bwNeedsRefresh",!1),R(1).then(F)):function(e,t){t&&(T.isRefreshed=!1,Q()),e&&(A.isRefreshed=!1,K())}(e,t)}function ee(e){e.target===X&&(f("bountyList",null),Z(u.enableActiveBountyList,u.enableWantedList)),e.target===z&&(f("wantedList",null),Z(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(G=J(),N(b,G)),u.enableActiveBountyList&&(q=J(),N(b,q)),q&&v(q,ee),G&&v(G,ee),Z(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-66f688be.js.map
