import{E as e,ab as n,i as t,di as s,m as r,a2 as i,d as a,dj as o,v as c,a3 as u,q as l,Z as f,ad as d,a9 as b,g as p,al as h,F as m,r as L,w as g,o as w,s as y}from"./calfSystem-VUa7wwu1.js"
import{f as v}from"./functionPasses-EKTPXVtw.js"
import{c as $}from"./createSpan-3W4T-7NF.js"
import{b as N}from"./now-pQzGw6vd.js"
import{s as R}from"./shouldBeArray-t5sXrRGh.js"
import"./csvSplit-5pKrKSoh.js"
function x(n){return e({cmd:"bounty",page:n})}let k=0,j=0
const B=()=>k,T=()=>j
function A(){return r({className:"minibox"})}function W([e,n,s,u,l]){const f=e(),d=s()
return i(n,d),a("",f),function(e,n,s,i){const a=r({innerHTML:`<a class="fshBountyHeader" href="${o}">${s} Bounties</a> `}),u=$({className:"xxsLink",textContent:"Reset"})
return t(a,u),t(e,a),c(e,function(e,n,t){const s=e.bounty
return 0===s.length?`<div class="xsOrange">[No ${n.toLowerCase()} bounties]</div>`:s.map(t).join("")}(n,s,i)),u}(f,d,u,l)}function S(e,n){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${n(e)}">${e.target}</a><br>`}function P(e){return l("img",e[2]).title}function C(e){const n="A"===(t=e[0]).children[0].tagName?t.children[0]:t.children[0].children[0]
var t
return{target:u(n),link:n.href,lvl:u(n.nextSibling).replace(/[[|\]]/g,""),reward:u(e[2]),rewardType:P(e),xpLoss:u(e[3]),posted:u(e[4])}}let H=0,M={},U={},E=!1,X=!1,q=[]
const G=()=>M,O=()=>U,F=()=>E,K=()=>q
function Z(e){return{...C(e),progress:u(e[5])}}function z(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=Z(e.rows[n].cells)
M.bounty.push(t)}}(e)}function D(e,n){return function(e){if(e)return M&&N()-M.lastUpdate>H}(e)||function(e){if(e)return U&&N()-U.lastUpdate>H}(n)}let I=0
const J=()=>I
function Q(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function V(e){return S(e,Q)}function Y(){I=W([B,"bountyList",G,"Active",V])}let _=0
const ee=()=>_
function ne(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function te(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function se(e){return[te(e),S(e,ne)].join("")}function re(){_=W([T,"wantedList",O,"Wanted",se])}function ie(e){const n=e[6]
return"[n/a]"!==h(n)?n.children[0].children[0].getAttribute("onclick"):""}const ae=[()=>K().includes("*"),e=>K().includes(e),(e,t)=>n.wantedGuildMembers&&"[n/a]"===h(t.cells[6])]
function oe(e,n){var t;(function(e,n){return"[active]"!==h(n.cells[6])&&ae.some((t=>t(e,n)))})(e,n)&&O().bounty.push({...C(t=n.cells),offerer:h(t[1].children[0].children[0]),tickets:h(t[5]),accept:ie(t)})}let ce=0,ue=0
function le(e){const n=l('#pCC input[name="page"]',e)
if(!n)return
ce=Number(n.value),ue=Number(L(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const t=p("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
t&&function(e){for(let n=1;n<e.rows.length-2;n+=2){const t=e.rows[n],s=h(t.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
oe(s,t)}}(t)}function fe(e){n.enableActiveBountyList&&!F()&&(!function(e){const n=p("bounty-info",e)
if(!n)return
const t=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
M={},M.bounty=[],M.isRefreshed=!0,M.lastUpdate=N(),t&&z(t),E=!0}(e),Y())}async function de(e){const t=m(e)
if(fe(t),n.enableWantedList)if(le(t),ce<ue){de(await x(ce+1))}else re()}const be=[()=>!G(),()=>!O(),()=>X]
async function pe(){var e,t
if(e=n.enableActiveBountyList,t=n.enableWantedList,M=f("bountyList"),U=f("wantedList"),H=d("bountyListRefreshTime"),X=d("bwNeedsRefresh"),X||D(e,t)&&(X=!0),be.some(v)){U={},U.bounty=[],U.isRefreshed=!0,U.lastUpdate=N(),E=!1,q=R("wantedNames"),b("bwNeedsRefresh",!1)
de(await x(1))}else!function(e,n){n&&(O().isRefreshed=!1,re()),e&&(G().isRefreshed=!1,Y())}(n.enableActiveBountyList,n.enableWantedList)}function he(e,n){y("activeWantedBounties",e),i(n,null),pe()}function me(e){e.target===J()&&he("getBountyListReset","bountyList"),e.target===ee()&&he("getWantedListReset","wantedList")}function Le(){g()||(n.enableActiveBountyList&&(k=A(),t(s(),k)),n.enableWantedList&&(j=A(),t(s(),j)),B()&&w(B(),me),T()&&w(T(),me),pe())}export{Le as default}
//# sourceMappingURL=activeWantedBounties-l9fE2acG.js.map
