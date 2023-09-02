import{G as e,ad as n,i as t,dk as s,l as r,a4 as i,s as a,dl as o,v as c,a5 as u,q as l,a0 as f,af as d,ab as b,g as p,an as h,H as m,r as L,w,o as y}from"./calfSystem-2fff342b.js"
import{f as g}from"./functionPasses-d78c6fe2.js"
import{c as v}from"./createSpan-6e19e4f0.js"
import{b as $}from"./now-6f22aec9.js"
import{s as N}from"./shouldBeArray-c74e5bdf.js"
import"./csvSplit-130c4743.js"
function x(n){return e({cmd:"bounty",page:n})}let R=0,k=0
const A=()=>R,T=()=>k
function j(){return r({className:"minibox"})}function B([e,n,s,u,l]){const f=e(),d=s()
return i(n,d),a("",f),function(e,n,s,i){const a=r({innerHTML:`<a class="fshBountyHeader" href="${o}">${s} Bounties</a> `}),u=v({className:"xxsLink",textContent:"Reset"})
return t(a,u),t(e,a),c(e,function(e,n,t){const s=e.bounty
return 0===s.length?`<div class="xsOrange">[No ${n.toLowerCase()} bounties]</div>`:s.map(t).join("")}(n,s,i)),u}(f,d,u,l)}function S(e,n){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${n(e)}">${e.target}</a><br>`}function W(e){return l("img",e[2]).title}function H(e){const n="A"===(t=e[0]).children[0].tagName?t.children[0]:t.children[0].children[0]
var t
return{target:u(n),link:n.href,lvl:u(n.nextSibling).replace(/[[|\]]/g,""),reward:u(e[2]),rewardType:W(e),xpLoss:u(e[3]),posted:u(e[4])}}let P=0,C={},M={},U=!1,G=!1,X=[]
const q=()=>C,E=()=>M,O=()=>U,K=()=>X
function V(e){return{...H(e),progress:u(e[5])}}function z(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=V(e.rows[n].cells)
C.bounty.push(t)}}(e)}function D(e,n){return function(e){if(e)return C&&$()-C.lastUpdate>P}(e)||function(e){if(e)return M&&$()-M.lastUpdate>P}(n)}let F=0
const I=()=>F
function J(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Q(e){return S(e,J)}function Y(){F=B([A,"bountyList",q,"Active",Q])}let Z=0
const _=()=>Z
function ee(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function ne(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function te(e){return[ne(e),S(e,ee)].join("")}function se(){Z=B([T,"wantedList",E,"Wanted",te])}function re(e){const n=e[6]
return"[n/a]"!==h(n)?n.children[0].children[0].getAttribute("onclick"):""}const ie=[()=>K().includes("*"),e=>K().includes(e),(e,t)=>n.wantedGuildMembers&&"[n/a]"===h(t.cells[6])]
function ae(e,n){var t;(function(e,n){return"[active]"!==h(n.cells[6])&&ie.some((t=>t(e,n)))})(e,n)&&E().bounty.push({...H(t=n.cells),offerer:h(t[1].children[0].children[0]),tickets:h(t[5]),accept:re(t)})}let oe=0,ce=0
function ue(e){const n=l('#pCC input[name="page"]',e)
if(!n)return
oe=Number(n.value),ce=Number(L(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const t=p("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
t&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=e.rows[n],s=h(t.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
ae(s,t)}}(t)}function le(e){n.enableActiveBountyList&&!O()&&(!function(e){const n=p("bounty-info",e)
if(!n)return
const t=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
C={},C.bounty=[],C.isRefreshed=!0,C.lastUpdate=$(),t&&z(t),U=!0}(e),Y())}async function fe(e){const t=m(e)
if(le(t),n.enableWantedList)if(ue(t),oe<ce){fe(await x(oe+1))}else se()}const de=[()=>!q(),()=>!E(),()=>G]
async function be(e,n){if(function(e,n){C=f("bountyList"),M=f("wantedList"),P=d("bountyListRefreshTime"),G=d("bwNeedsRefresh"),G||D(e,n)&&(G=!0)}(e,n),de.some(g)){M={},M.bounty=[],M.isRefreshed=!0,M.lastUpdate=$(),U=!1,X=N("wantedNames"),b("bwNeedsRefresh",!1)
fe(await x(1))}else!function(e,n){n&&(E().isRefreshed=!1,se()),e&&(q().isRefreshed=!1,Y())}(e,n)}function pe(e){e.target===I()&&(i("bountyList",null),be(n.enableActiveBountyList,n.enableWantedList)),e.target===_()&&(i("wantedList",null),be(n.enableActiveBountyList,n.enableWantedList))}function he(){w()||(n.enableActiveBountyList&&(R=j(),t(s(),R)),n.enableWantedList&&(k=j(),t(s(),k)),A()&&y(A(),pe),T()&&y(T(),pe),be(n.enableActiveBountyList,n.enableWantedList))}export{he as default}
//# sourceMappingURL=activeWantedBounties-df5e2867.js.map
