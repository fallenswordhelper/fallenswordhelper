import{g as a,b3 as n,o as e,c as i,s as t,dv as o,cy as s,n as r,i as c,k as d,dw as l,dx as u,dn as g,aM as f,ai as L,dy as h,ac as v,ad as k,dz as p,dA as m,dB as y,dC as M,dD as N,bW as $,dE as b,ar as w}from"./calfSystem-B_VkFJhM.js"
import{i as G}from"./insertElementAfter-B-VFC2zX.js"
const B=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function C(a,n){t("accordion",a),B.includes(a)?n():o(n)}function x(a,o,d,l){const u=function(a,n,e){const i=s({className:`nav-level-${a}`}),t=r({className:"nav-link fshPoint",textContent:n})
return c(i,t),G(i,e.parentNode),t}(a,o,l)
n(d)?e(u,i(C,o,d)):(u.href=d,e(u,(()=>t("accordion",o))))}const P=[[a=>a.recipeManagerLink,"1","Recipe Manager",l,"nav-character-log"],[a=>a.inventoryManagerLink,"1","Inventory Manager",`${u}invmanagernew`,"nav-character-log"],[a=>a.medalGuideLink,"1","Medal Guide",`${g}${f}medalguide`,"nav-character-log"],[a=>a.buffLogLink&&L("keepBuffLog"),"1","Buff Log",h,"nav-character-log"],[a=>a.combatLogLink&&L("keepLogs"),"1","Combat Logs",v,"nav-character-notepad"],[a=>a.creatureLogLink&&L("showMonsterLog"),"1","Creature Logs",k,"nav-character-notepad"],[a=>a.quickLinksLink,"1","Quick Links",p,"nav-character-notepad"],[a=>a.auctionSearchLink,"2","AH Quick Search",m,"nav-actions-trade-auctionhouse"],[a=>a.onlinePlayersLink,"2","Online Players",y,"nav-actions-interaction-findplayer"],[a=>a.findOtherLink,"2","Find Other",M,"nav-actions-interaction-findplayer"],[a=>a.findBuffsLink,"2","Find Buffs",N,"nav-actions-interaction-findplayer"],[a=>a.guildInventoryLink&&$(),"2","Guild Inventory",`${u}guildinvmgr`,"nav-guild-storehouse-inventory"],[a=>a.newGuildLogLink&&$()&&!L("useNewGuildLog"),"2","New Guild Log",b,"nav-guild-ledger-advisor"],[a=>a.topRatedLink,"2","Top 250 Players",`${w}toprated${f}xp`,"nav-toprated-players-level"]]
function A(n){P.forEach((([e,i,t,o,s])=>{e(n)&&function(n,e,i,t){const o=a(t)
o instanceof Node&&x(n,e,i,o)}(i,t,o,s)}))}const E=a=>22*d("li",a).length||null
function I(a,n,e){A(e),function(a,n){n.heights=d("#nav > li").map(E)
const e=Number(n.state)
e&&e>-1&&e<a.children.length&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export{I as default}
//# sourceMappingURL=injectItems-B6Vafd0Z.js.map
