import{g as a,b1 as n,o as e,c as i,s as t,dl as o,cp as s,n as r,i as c,k as d,dm as l,dn as u,de as g,aL as L,ai as f,dp as h,ac as v,ad as p,dq as k,dr as m,ds as y,dt as N,du as $,bQ as b,dv as w,ap as G}from"./calfSystem-DCvZki7i.js"
import{i as M}from"./insertElementAfter-DiWV0zvO.js"
const B=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function C(a,n){t("accordion",a),B.includes(a)?n():o(n)}function x(a,o,d,l){const u=function(a,n,e){const i=s({className:`nav-level-${a}`}),t=r({className:"nav-link fshPoint",textContent:n})
return c(i,t),M(i,e.parentNode),t}(a,o,l)
n(d)?e(u,i(C,o,d)):(u.href=d,e(u,(()=>t("accordion",o))))}const P=[[a=>a.recipeManagerLink,"1","Recipe Manager",l,"nav-character-log"],[a=>a.inventoryManagerLink,"1","Inventory Manager",`${u}invmanagernew`,"nav-character-log"],[a=>a.medalGuideLink,"1","Medal Guide",`${g}${L}medalguide`,"nav-character-log"],[a=>a.buffLogLink&&f("keepBuffLog"),"1","Buff Log",h,"nav-character-log"],[a=>a.combatLogLink&&f("keepLogs"),"1","Combat Logs",v,"nav-character-notepad"],[a=>a.creatureLogLink&&f("showMonsterLog"),"1","Creature Logs",p,"nav-character-notepad"],[a=>a.quickLinksLink,"1","Quick Links",k,"nav-character-notepad"],[a=>a.auctionSearchLink,"2","AH Quick Search",m,"nav-actions-trade-auctionhouse"],[a=>a.onlinePlayersLink,"2","Online Players",y,"nav-actions-interaction-findplayer"],[a=>a.findOtherLink,"2","Find Other",N,"nav-actions-interaction-findplayer"],[a=>a.findBuffsLink,"2","Find Buffs",$,"nav-actions-interaction-findplayer"],[a=>a.guildInventoryLink&&b(),"2","Guild Inventory",`${u}guildinvmgr`,"nav-guild-storehouse-inventory"],[a=>a.newGuildLogLink&&b()&&!f("useNewGuildLog"),"2","New Guild Log",w,"nav-guild-ledger-advisor"],[a=>a.topRatedLink,"2","Top 250 Players",`${G}toprated${L}xp`,"nav-toprated-players-level"]]
function Q(n){P.forEach((([e,i,t,o,s])=>{e(n)&&function(n,e,i,t){const o=a(t)
o instanceof Node&&x(n,e,i,o)}(i,t,o,s)}))}const I=a=>22*d("li",a).length||null
function O(a,n,e){Q(e),function(a,n){n.heights=d("#nav > li").map(I)
const e=Number(n.state)
e&&e>-1&&e<a.children.length&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export{O as default}
//# sourceMappingURL=injectItems-CQ9RtdBx.js.map
