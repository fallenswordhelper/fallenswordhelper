import{G as e,ag as n,i as t,dF as s,m as r,a7 as i,d as a,dG as o,v as c,a8 as u,q as l,a2 as f,ai as d,bO as b,ae as p,g as h,as as m,H as L,r as g,w as y,o as w,s as v}from"./calfSystem-Dh7h0wep.js"
import{f as $}from"./functionPasses-BXOT6NCP.js"
import{c as N}from"./createSpan-DJ8wwfjm.js"
import{s as R}from"./shouldBeArray-B8PKPURg.js"
import"./csvSplit-Cunw4Oqp.js"
function x(n){return e({cmd:"bounty",page:n})}let k=0,B=0
const T=()=>k,A=()=>B
function W(){return r({className:"minibox"})}function j([e,n,s,u,l]){const f=e(),d=s()
return i(n,d),a("",f),function(e,n,s,i){const a=r({innerHTML:`<a class="fshBountyHeader" href="${o}">${s} Bounties</a> `}),u=N({className:"xxsLink",textContent:"Reset"})
return t(a,u),t(e,a),c(e,function(e,n,t){const s=e.bounty
return 0===s.length?`<div class="xsOrange">[No ${n.toLowerCase()} bounties]</div>`:s.map(t).join("")}(n,s,i)),u}(f,d,u,l)}function S(e,n){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${n(e)}">${e.target}</a><br>`}function H(e){return l("img",e[2]).title}function P(e){const n="A"===(t=e[0]).children[0].tagName?t.children[0]:t.children[0].children[0]
var t
return{target:u(n),link:n.href,lvl:u(n.nextSibling).replace(/[[|\]]/g,""),reward:u(e[2]),rewardType:H(e),xpLoss:u(e[3]),posted:u(e[4])}}let C=0,G={},M={},U=!1,O=!1,q=[]
const E=()=>G,X=()=>M,F=()=>U,K=()=>q
function z(e){return{...P(e),progress:u(e[5])}}function D(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=z(e.rows[n].cells)
G.bounty.push(t)}}(e)}function I(e,n){return function(e){if(e)return G&&b()-G.lastUpdate>C}(e)||function(e){if(e)return M&&b()-M.lastUpdate>C}(n)}let J=0
const Q=()=>J
function V(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Y(e){return S(e,V)}function Z(){J=j([T,"bountyList",E,"Active",Y])}let _=0
const ee=()=>_
function ne(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function te(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function se(e){return[te(e),S(e,ne)].join("")}function re(){_=j([A,"wantedList",X,"Wanted",se])}function ie(e){const n=e[6]
return"[n/a]"!==m(n)?n.children[0].children[0].getAttribute("onclick"):""}const ae=[()=>K().includes("*"),e=>K().includes(e),(e,t)=>n.wantedGuildMembers&&"[n/a]"===m(t.cells[6])]
function oe(e,n){var t;(function(e,n){return"[active]"!==m(n.cells[6])&&ae.some((t=>t(e,n)))})(e,n)&&X().bounty.push({...P(t=n.cells),offerer:m(t[1].children[0].children[0]),tickets:m(t[5]),accept:ie(t)})}let ce=0,ue=0
function le(e){const n=l('#pCC input[name="page"]',e)
if(!n)return
ce=Number(n.value),ue=Number(g(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const t=h("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
t&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=e.rows[n],s=m(t.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
oe(s,t)}}(t)}function fe(e){n.enableActiveBountyList&&!F()&&(!function(e){const n=h("bounty-info",e)
if(!n)return
const t=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
G={},G.bounty=[],G.isRefreshed=!0,G.lastUpdate=b(),t&&D(t),U=!0}(e),Z())}async function de(e){const t=L(e)
if(fe(t),n.enableWantedList)if(le(t),ce<ue){de(await x(ce+1))}else re()}const be=[()=>!E(),()=>!X(),()=>O]
async function pe(){var e,t
if(e=n.enableActiveBountyList,t=n.enableWantedList,G=f("bountyList"),M=f("wantedList"),C=d("bountyListRefreshTime"),O=d("bwNeedsRefresh"),O||I(e,t)&&(O=!0),be.some($)){M={},M.bounty=[],M.isRefreshed=!0,M.lastUpdate=b(),U=!1,q=R("wantedNames"),p("bwNeedsRefresh",!1)
de(await x(1))}else!function(e,n){n&&(X().isRefreshed=!1,re()),e&&(E().isRefreshed=!1,Z())}(n.enableActiveBountyList,n.enableWantedList)}function he(e,n){v("activeWantedBounties",e),i(n,null),pe()}function me(e){e.target===Q()&&he("getBountyListReset","bountyList"),e.target===ee()&&he("getWantedListReset","wantedList")}function Le(){y()||(n.enableActiveBountyList&&(k=W(),t(s(),k)),n.enableWantedList&&(B=W(),t(s(),B)),T()&&w(T(),me),A()&&w(A(),me),pe())}export{Le as default}
//# sourceMappingURL=activeWantedBounties-BjbYYGiD.js.map
