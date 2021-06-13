import{u as e,C as t,D as n,bM as s,I as a,V as r,_ as i,z as o,q as c,H as l,c as u,m as d,bQ as f,bO as b,B as p,bT as h,h as m,i as y,v as L,y as g,o as v}from"./calfSystem-d3f0a380.js"
import{f as $}from"./functionPasses-a26e09ef.js"
import{s as w}from"./shouldBeArray-3319227e.js"
import{i as N}from"./insertElementAfterBegin-7b87afd6.js"
import{c as x}from"./createSpan-6440fa04.js"
import"./csvSplit-d0e27857.js"
import"./insertElementBefore-c2bb9234.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let T,A,j,M,S,W
function C(e){return c(B(e),{progress:t(e[5])})}function H(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=C(e.rows[t].cells)
T.bounty.push(n)}}(e)}function P(){return T&&r-T.lastUpdate>M||A&&r-A.lastUpdate>M}function E(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const O=[()=>W.includes("*"),e=>W.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function U(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&O.some((n=>n(e,t)))})(e,t)&&A.bounty.push((n=t.cells,c(B(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:E(n)})))}let q,G,X,z,D,I
function K(){return d({className:"minibox"})}function Q(){b("bountyList",T),p("",q)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
X=x({className:"xxsLink",textContent:"Reset"}),m(e,X),m(q,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`<a href="${T.bounty[e].link}" class="tip-static" data-tipped="${n=T.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${T.bounty[e].target}</a><br>`
var n
y(q,t)}function V(){b("wantedList",A),p("",G)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
z=x({className:"xxsLink",textContent:"Reset"}),m(e,z),m(G,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`${s=A.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=A.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${A.bounty[e].link}">${A.bounty[e].target}</a><br>`
var n,s
y(G,t)}function _(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
D=Number(t.value),I=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
U(s,n)}}(s)}function F(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=r,n&&H(n),j=!0}(e),Q())}function J(e){const t=L(e)
F(t),u.enableWantedList&&(_(t),D<I?R(D+1).then(J):V())}const Y=[()=>!T,()=>!A,()=>S]
function Z(e,t){T=s("bountyList"),A=s("wantedList"),M=a("bountyListRefreshTime"),S=a("bwNeedsRefresh"),S||P()&&(S=!0),Y.some($)?(A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=r,j=!1,W=w("wantedNames"),i("bwNeedsRefresh",!1),R(1).then(J)):function(e,t){t&&(A.isRefreshed=!1,V()),e&&(T.isRefreshed=!1,Q())}(e,t)}function ee(e){e.target===X&&(b("bountyList",null),Z(u.enableActiveBountyList,u.enableWantedList)),e.target===z&&(b("wantedList",null),Z(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(G=K(),N(f,G)),u.enableActiveBountyList&&(q=K(),N(f,q)),q&&v(q,ee),G&&v(G,ee),Z(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-71d5494c.js.map
