import{a as X}from"./chunk-MESE3PHU.js";import{a as N}from"./chunk-PZZGI3D7.js";import{a as G}from"./chunk-3QC5WQHK.js";import{a as O}from"./chunk-R2ABASBL.js";import"./chunk-BQTQOQGW.js";import{a as v}from"./chunk-6HFP56UB.js";import"./chunk-JMJ2BOMP.js";import{a as m}from"./chunk-NFDSTU22.js";import{a as p}from"./chunk-3DWHDW4D.js";import"./chunk-RVEJ4C26.js";import{a as c}from"./chunk-ZCBHDSFB.js";import{a as S}from"./chunk-RQ567555.js";import"./chunk-BKOP6XT6.js";import"./chunk-YWJ4UNHS.js";import{a as w}from"./chunk-7Q3UNQAY.js";import{a as u}from"./chunk-FRV7FQNH.js";import"./chunk-XPYPU624.js";import{a as q}from"./chunk-CSKN77A5.js";import{a as F}from"./chunk-3EONQEO2.js";import{b as d}from"./chunk-FA37UARH.js";import"./chunk-JDBXWYYY.js";import"./chunk-5GNYWTGT.js";import{a as f}from"./chunk-E5PHBQC4.js";import"./chunk-XG256B2T.js";import{a as J}from"./chunk-XWCLQVCM.js";import"./chunk-GNGPRTAS.js";import"./chunk-EBLMPFV5.js";import{a as V}from"./chunk-EUEELQXP.js";import{a as B}from"./chunk-QS7J5TMD.js";import{c as E}from"./chunk-P664PW54.js";import{a as x}from"./chunk-XJ5473QP.js";import{a as g}from"./chunk-WM64FGHN.js";import"./chunk-GQGCY7E7.js";import"./chunk-LXVMDOGR.js";import"./chunk-GX4J242O.js";import"./chunk-X5N7OOVX.js";import"./chunk-MKQZLDMS.js";import"./chunk-55RTNKIA.js";import"./chunk-X73J5C7S.js";import"./chunk-5TFX5HF5.js";import{a as H}from"./chunk-KM25KKJO.js";import{b as W}from"./chunk-NG7LLWFJ.js";import"./chunk-45P77O4Z.js";import"./chunk-6FX7G55Z.js";import{W as h}from"./chunk-AWEYVB2J.js";import{a as o}from"./chunk-UUU5NSJN.js";function l(t){return F({cmd:"bounty",page:t})}function tt(t){return t.children[0].tagName==="A"?t.children[0]:t.children[0].children[0]}function et(t){return w("img",t[2]).title}function b(t){let e=tt(t[0]);return{target:f(e),link:e.href,lvl:f(e.nextSibling).replace(/[[|\]]/g,""),reward:f(t[2]),rewardType:et(t),posted:f(t[3]),xpLoss:f(t[4])}}var i,n,R,j,y,$;function rt(t){return!/No bounties active/.test(t.rows[1].cells[0].innerHTML)}function nt(t){return B(b(t),{progress:f(t[5])})}function ot(t){for(let e=1;e<t.rows.length-2;e+=2){let r=t.rows[e].cells,L=nt(r);i.bounty.push(L)}}function it(t){rt(t)&&ot(t)}function z(t){let e=g("bounty-info",t);if(!e)return;let r=e.parentNode.parentNode.previousElementSibling.children[0].children[0];i={},i.bounty=[],i.isRefreshed=!0,i.lastUpdate=d,r&&it(r),R=!0}function st(){return i&&d-i.lastUpdate>j}function at(){return n&&d-n.lastUpdate>j}function ft(){return st()||at()}function K(){i=S("bountyList"),n=S("wantedList"),j=W("bountyListRefreshTime"),y=W("bwNeedsRefresh"),!y&&ft()&&(y=!0)}function Q(){n={},n.bounty=[],n.isRefreshed=!0,n.lastUpdate=d,R=!1,$=G("wantedNames"),J("bwNeedsRefresh",!1)}function ut(t){let e=t[6];return u(e)!=="[n/a]"?e.children[0].children[0].getAttribute("onclick"):""}function ct(t){return B(b(t),{offerer:u(t[1].children[0].children[0]),tickets:u(t[5]),accept:ut(t)})}var mt=[()=>$.includes("*"),t=>$.includes(t),(t,e)=>o.wantedGuildMembers&&u(e.cells[6])==="[n/a]"];function pt(t,e){return u(e.cells[6])!=="[active]"&&mt.some(r=>r(t,e))}function dt(t,e){pt(t,e)&&n.bounty.push(ct(e.cells))}function M(t){for(let e=1;e<t.rows.length-2;e+=2){let r=t.rows[e],L=u(r.cells[0].children[0].children[0]);if(L==="[ No bounties available. ]")break;dt(L,r)}}var s,a;function C(){return m({className:"minibox"})}function Y(){o.enableWantedList&&(a=C(),O(E,a)),o.enableActiveBountyList&&(s=C(),O(E,s))}var T;function lt(t){return`Level:  ${t.lvl}<br>Reward: ${t.reward} ${t.rewardType}<br>XP Loss Remaining: ${t.xpLoss}<br>Progress:  ${t.progress}`}function A(){c("bountyList",i),x("",s);let t=m({innerHTML:`<a href="${h}">Active Bounties</a> `});T=N({className:"xxsLink",textContent:"Reset"}),p(t,T),p(s,t);let e="";if(i.bounty.length===0)e+='<div class="xsOrange">[No active bounties]</div>';else for(let r of i.bounty)e+=`<a href="${r.link}" class="tip-static" data-tipped="${lt(r)}">${r.target}</a><br>`;v(s,e)}var k;function bt(t){return`Target Level:  ${t.lvl}<br>Offerer: ${t.offerer}<br>Reward: ${t.reward} ${t.rewardType}<br>XP Loss Remaining: ${t.xpLoss}<br>Posted: ${t.posted}<br>Tickets Req.:  ${t.tickets}`}function yt(t){return t.accept?`<span class="xsGreen" onclick="${t.accept}">[a]</span>&nbsp;`:""}function D(){c("wantedList",n),x("",a);let t=m({innerHTML:`<a href="${h}">Wanted Bounties</a> `});k=N({className:"xxsLink",textContent:"Reset"}),p(t,k),p(a,t);let e="";if(n.bounty.length===0)e+='<div class="xsOrange">[No wanted bounties]</div>';else for(let r of n.bounty)e+=`${yt(r)}<a class="xsKhaki tip-static" data-tipped="${bt(r)}" href="${r.link}">${r.target}</a><br>`;v(a,e)}var I,Z;function Lt(t){let e=w('#pCC input[name="page"]',t);if(!e)return;I=Number(e.value),Z=Number(e.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1]);let r=g("bounty-info",t).parentNode.parentNode.nextElementSibling.children[0].children[0];r&&M(r)}function gt(t){o.enableActiveBountyList&&!R&&(z(t),A())}function P(t){let e=q(t);gt(e),o.enableWantedList&&(Lt(e),I<Z?l(I+1).then(P):D())}function ht(t,e){e&&(n.isRefreshed=!1,D()),t&&(i.isRefreshed=!1,A())}var vt=[()=>!i,()=>!n,()=>y];function xt(){return vt.some(X)}function U(t,e){K(),xt()?(Q(),l(1).then(P)):ht(t,e)}function _(t){t.target===T&&(c("bountyList",null),U(o.enableActiveBountyList,o.enableWantedList)),t.target===k&&(c("wantedList",null),U(o.enableActiveBountyList,o.enableWantedList))}function wt(){s&&H(s,_),a&&H(a,_)}function Bt(){V()||(Y(),wt(),U(o.enableActiveBountyList,o.enableWantedList))}export{Bt as default};
//# sourceMappingURL=activeWantedBounties-FMO4WCG7.js.map