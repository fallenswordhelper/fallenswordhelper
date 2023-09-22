import{E as e,ab as n,i as t,dj as s,l as r,a2 as i,s as a,dk as o,v as c,a3 as u,q as l,Z as f,ad as d,a9 as b,g as p,al as h,F as m,r as L,w,o as y}from"./calfSystem-4830a18d.js"
import{f as g}from"./functionPasses-d78c6fe2.js"
import{c as v}from"./createSpan-0da7a190.js"
import{b as $}from"./now-6f22aec9.js"
import{s as N}from"./shouldBeArray-7acde5b3.js"
import"./csvSplit-81e99601.js"
function x(n){return e({cmd:"bounty",page:n})}let R=0,k=0
const j=()=>R,A=()=>k
function T(){return r({className:"minibox"})}function B([e,n,s,u,l]){const f=e(),d=s()
return i(n,d),a("",f),function(e,n,s,i){const a=r({innerHTML:`<a class="fshBountyHeader" href="${o}">${s} Bounties</a> `}),u=v({className:"xxsLink",textContent:"Reset"})
return t(a,u),t(e,a),c(e,function(e,n,t){const s=e.bounty
return 0===s.length?`<div class="xsOrange">[No ${n.toLowerCase()} bounties]</div>`:s.map(t).join("")}(n,s,i)),u}(f,d,u,l)}function S(e,n){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${n(e)}">${e.target}</a><br>`}function U(e){return l("img",e[2]).title}function W(e){const n="A"===(t=e[0]).children[0].tagName?t.children[0]:t.children[0].children[0]
var t
return{target:u(n),link:n.href,lvl:u(n.nextSibling).replace(/[[|\]]/g,""),reward:u(e[2]),rewardType:U(e),xpLoss:u(e[3]),posted:u(e[4])}}let P=0,C={},H={},M=!1,E=!1,q=[]
const G=()=>C,O=()=>H,X=()=>M,F=()=>q
function K(e){return{...W(e),progress:u(e[5])}}function Z(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=K(e.rows[n].cells)
C.bounty.push(t)}}(e)}function z(e,n){return function(e){if(e)return C&&$()-C.lastUpdate>P}(e)||function(e){if(e)return H&&$()-H.lastUpdate>P}(n)}let D=0
const I=()=>D
function J(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Q(e){return S(e,J)}function V(){D=B([j,"bountyList",G,"Active",Q])}let Y=0
const _=()=>Y
function ee(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function ne(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function te(e){return[ne(e),S(e,ee)].join("")}function se(){Y=B([A,"wantedList",O,"Wanted",te])}function re(e){const n=e[6]
return"[n/a]"!==h(n)?n.children[0].children[0].getAttribute("onclick"):""}const ie=[()=>F().includes("*"),e=>F().includes(e),(e,t)=>n.wantedGuildMembers&&"[n/a]"===h(t.cells[6])]
function ae(e,n){var t;(function(e,n){return"[active]"!==h(n.cells[6])&&ie.some((t=>t(e,n)))})(e,n)&&O().bounty.push({...W(t=n.cells),offerer:h(t[1].children[0].children[0]),tickets:h(t[5]),accept:re(t)})}let oe=0,ce=0
function ue(e){const n=l('#pCC input[name="page"]',e)
if(!n)return
oe=Number(n.value),ce=Number(L(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const t=p("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
t&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=e.rows[n],s=h(t.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
ae(s,t)}}(t)}function le(e){n.enableActiveBountyList&&!X()&&(!function(e){const n=p("bounty-info",e)
if(!n)return
const t=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
C={},C.bounty=[],C.isRefreshed=!0,C.lastUpdate=$(),t&&Z(t),M=!0}(e),V())}async function fe(e){const t=m(e)
if(le(t),n.enableWantedList)if(ue(t),oe<ce){fe(await x(oe+1))}else se()}const de=[()=>!G(),()=>!O(),()=>E]
async function be(e,n){if(function(e,n){C=f("bountyList"),H=f("wantedList"),P=d("bountyListRefreshTime"),E=d("bwNeedsRefresh"),E||z(e,n)&&(E=!0)}(e,n),de.some(g)){H={},H.bounty=[],H.isRefreshed=!0,H.lastUpdate=$(),M=!1,q=N("wantedNames"),b("bwNeedsRefresh",!1)
fe(await x(1))}else!function(e,n){n&&(O().isRefreshed=!1,se()),e&&(G().isRefreshed=!1,V())}(e,n)}function pe(e){e.target===I()&&(i("bountyList",null),be(n.enableActiveBountyList,n.enableWantedList)),e.target===_()&&(i("wantedList",null),be(n.enableActiveBountyList,n.enableWantedList))}function he(){w()||(n.enableActiveBountyList&&(R=T(),t(s(),R)),n.enableWantedList&&(k=T(),t(s(),k)),j()&&y(j(),pe),A()&&y(A(),pe),be(n.enableActiveBountyList,n.enableWantedList))}export{he as default}
//# sourceMappingURL=activeWantedBounties-358a6625.js.map
