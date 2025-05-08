import{G as e,ag as n,i as t,dv as s,m as r,a7 as i,d as a,dw as o,v as c,a8 as u,q as l,a2 as f,ai as d,ae as b,g as p,aq as h,H as m,r as L,w as g,o as w,s as y}from"./calfSystem-G1dN925O.js"
import{f as v}from"./functionPasses-EKTPXVtw.js"
import{c as $}from"./createSpan-E64hPGZD.js"
import{b as N}from"./now-pQzGw6vd.js"
import{s as R}from"./shouldBeArray-Sig5LHGX.js"
import"./csvSplit-SWeoixMs.js"
function x(n){return e({cmd:"bounty",page:n})}let k=0,B=0
const T=()=>k,j=()=>B
function A(){return r({className:"minibox"})}function W([e,n,s,u,l]){const f=e(),d=s()
return i(n,d),a("",f),function(e,n,s,i){const a=r({innerHTML:`<a class="fshBountyHeader" href="${o}">${s} Bounties</a> `}),u=$({className:"xxsLink",textContent:"Reset"})
return t(a,u),t(e,a),c(e,function(e,n,t){const s=e.bounty
return 0===s.length?`<div class="xsOrange">[No ${n.toLowerCase()} bounties]</div>`:s.map(t).join("")}(n,s,i)),u}(f,d,u,l)}function S(e,n){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${n(e)}">${e.target}</a><br>`}function H(e){return l("img",e[2]).title}function P(e){const n="A"===(t=e[0]).children[0].tagName?t.children[0]:t.children[0].children[0]
var t
return{target:u(n),link:n.href,lvl:u(n.nextSibling).replace(/[[|\]]/g,""),reward:u(e[2]),rewardType:H(e),xpLoss:u(e[3]),posted:u(e[4])}}let U=0,q={},C={},M=!1,G=!1,E=[]
const O=()=>q,X=()=>C,K=()=>M,z=()=>E
function D(e){return{...P(e),progress:u(e[5])}}function F(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=D(e.rows[n].cells)
q.bounty.push(t)}}(e)}function I(e,n){return function(e){if(e)return q&&N()-q.lastUpdate>U}(e)||function(e){if(e)return C&&N()-C.lastUpdate>U}(n)}let J=0
const Q=()=>J
function V(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Y(e){return S(e,V)}function Z(){J=W([T,"bountyList",O,"Active",Y])}let _=0
const ee=()=>_
function ne(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function te(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function se(e){return[te(e),S(e,ne)].join("")}function re(){_=W([j,"wantedList",X,"Wanted",se])}function ie(e){const n=e[6]
return"[n/a]"!==h(n)?n.children[0].children[0].getAttribute("onclick"):""}const ae=[()=>z().includes("*"),e=>z().includes(e),(e,t)=>n.wantedGuildMembers&&"[n/a]"===h(t.cells[6])]
function oe(e,n){var t;(function(e,n){return"[active]"!==h(n.cells[6])&&ae.some((t=>t(e,n)))})(e,n)&&X().bounty.push({...P(t=n.cells),offerer:h(t[1].children[0].children[0]),tickets:h(t[5]),accept:ie(t)})}let ce=0,ue=0
function le(e){const n=l('#pCC input[name="page"]',e)
if(!n)return
ce=Number(n.value),ue=Number(L(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const t=p("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
t&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=e.rows[n],s=h(t.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
oe(s,t)}}(t)}function fe(e){n.enableActiveBountyList&&!K()&&(!function(e){const n=p("bounty-info",e)
if(!n)return
const t=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
q={},q.bounty=[],q.isRefreshed=!0,q.lastUpdate=N(),t&&F(t),M=!0}(e),Z())}async function de(e){const t=m(e)
if(fe(t),n.enableWantedList)if(le(t),ce<ue){de(await x(ce+1))}else re()}const be=[()=>!O(),()=>!X(),()=>G]
async function pe(){var e,t
if(e=n.enableActiveBountyList,t=n.enableWantedList,q=f("bountyList"),C=f("wantedList"),U=d("bountyListRefreshTime"),G=d("bwNeedsRefresh"),G||I(e,t)&&(G=!0),be.some(v)){C={},C.bounty=[],C.isRefreshed=!0,C.lastUpdate=N(),M=!1,E=R("wantedNames"),b("bwNeedsRefresh",!1)
de(await x(1))}else!function(e,n){n&&(X().isRefreshed=!1,re()),e&&(O().isRefreshed=!1,Z())}(n.enableActiveBountyList,n.enableWantedList)}function he(e,n){y("activeWantedBounties",e),i(n,null),pe()}function me(e){e.target===Q()&&he("getBountyListReset","bountyList"),e.target===ee()&&he("getWantedListReset","wantedList")}function Le(){g()||(n.enableActiveBountyList&&(k=A(),t(s(),k)),n.enableWantedList&&(B=A(),t(s(),B)),T()&&w(T(),me),j()&&w(j(),me),pe())}export{Le as default}
//# sourceMappingURL=activeWantedBounties-aam_by8g.js.map
