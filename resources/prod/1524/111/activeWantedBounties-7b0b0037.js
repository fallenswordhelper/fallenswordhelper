import{F as e,ac as n,i as t,dj as s,l as r,a3 as i,s as a,dk as o,v as c,a4 as u,q as l,_ as f,ae as d,aa as b,g as p,am as h,G as m,r as L,w,o as y}from"./calfSystem-abb16b0d.js"
import{f as g}from"./functionPasses-d78c6fe2.js"
import{c as v}from"./createSpan-b6e6b8c0.js"
import{b as $}from"./now-6f22aec9.js"
import{s as N}from"./shouldBeArray-9bb1ec5d.js"
import"./csvSplit-cb685270.js"
function x(n){return e({cmd:"bounty",page:n})}let R=0,k=0
const T=()=>R,j=()=>k
function A(){return r({className:"minibox"})}function B([e,n,s,u,l]){const f=e(),d=s()
return i(n,d),a("",f),function(e,n,s,i){const a=r({innerHTML:`<a class="fshBountyHeader" href="${o}">${s} Bounties</a> `}),u=v({className:"xxsLink",textContent:"Reset"})
return t(a,u),t(e,a),c(e,function(e,n,t){const s=e.bounty
return 0===s.length?`<div class="xsOrange">[No ${n.toLowerCase()} bounties]</div>`:s.map(t).join("")}(n,s,i)),u}(f,d,u,l)}function S(e,n){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${n(e)}">${e.target}</a><br>`}function W(e){return l("img",e[2]).title}function P(e){const n="A"===(t=e[0]).children[0].tagName?t.children[0]:t.children[0].children[0]
var t
return{target:u(n),link:n.href,lvl:u(n.nextSibling).replace(/[[|\]]/g,""),reward:u(e[2]),rewardType:W(e),xpLoss:u(e[3]),posted:u(e[4])}}let C=0,H={},M={},U=!1,q=!1,G=[]
const E=()=>H,O=()=>M,X=()=>U,F=()=>G
function K(e){return{...P(e),progress:u(e[5])}}function _(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=K(e.rows[n].cells)
H.bounty.push(t)}}(e)}function z(e,n){return function(e){if(e)return H&&$()-H.lastUpdate>C}(e)||function(e){if(e)return M&&$()-M.lastUpdate>C}(n)}let D=0
const I=()=>D
function J(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Q(e){return S(e,J)}function V(){D=B([T,"bountyList",E,"Active",Q])}let Y=0
const Z=()=>Y
function ee(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function ne(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function te(e){return[ne(e),S(e,ee)].join("")}function se(){Y=B([j,"wantedList",O,"Wanted",te])}function re(e){const n=e[6]
return"[n/a]"!==h(n)?n.children[0].children[0].getAttribute("onclick"):""}const ie=[()=>F().includes("*"),e=>F().includes(e),(e,t)=>n.wantedGuildMembers&&"[n/a]"===h(t.cells[6])]
function ae(e,n){var t;(function(e,n){return"[active]"!==h(n.cells[6])&&ie.some((t=>t(e,n)))})(e,n)&&O().bounty.push({...P(t=n.cells),offerer:h(t[1].children[0].children[0]),tickets:h(t[5]),accept:re(t)})}let oe=0,ce=0
function ue(e){const n=l('#pCC input[name="page"]',e)
if(!n)return
oe=Number(n.value),ce=Number(L(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const t=p("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
t&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=e.rows[n],s=h(t.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
ae(s,t)}}(t)}function le(e){n.enableActiveBountyList&&!X()&&(!function(e){const n=p("bounty-info",e)
if(!n)return
const t=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
H={},H.bounty=[],H.isRefreshed=!0,H.lastUpdate=$(),t&&_(t),U=!0}(e),V())}async function fe(e){const t=m(e)
if(le(t),n.enableWantedList)if(ue(t),oe<ce){fe(await x(oe+1))}else se()}const de=[()=>!E(),()=>!O(),()=>q]
async function be(e,n){if(function(e,n){H=f("bountyList"),M=f("wantedList"),C=d("bountyListRefreshTime"),q=d("bwNeedsRefresh"),q||z(e,n)&&(q=!0)}(e,n),de.some(g)){M={},M.bounty=[],M.isRefreshed=!0,M.lastUpdate=$(),U=!1,G=N("wantedNames"),b("bwNeedsRefresh",!1)
fe(await x(1))}else!function(e,n){n&&(O().isRefreshed=!1,se()),e&&(E().isRefreshed=!1,V())}(e,n)}function pe(e){e.target===I()&&(i("bountyList",null),be(n.enableActiveBountyList,n.enableWantedList)),e.target===Z()&&(i("wantedList",null),be(n.enableActiveBountyList,n.enableWantedList))}function he(){w()||(n.enableActiveBountyList&&(R=A(),t(s(),R)),n.enableWantedList&&(k=A(),t(s(),k)),T()&&y(T(),pe),j()&&y(j(),pe),be(n.enableActiveBountyList,n.enableWantedList))}export{he as default}
//# sourceMappingURL=activeWantedBounties-7b0b0037.js.map
