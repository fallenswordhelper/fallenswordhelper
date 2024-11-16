import{g as a,cy as n,l as e,i,b2 as t,e as o,b as s,s as r,dv as c,dw as d,dx as l,dn as u,aK as g,ai as f,dy as L,ab as h,ac as v,dz as k,dA as p,dB as m,dC as y,dD as b,bW as N,dE as $,ar as w,n as G}from"./calfSystem-Blt4DbaE.js"
import{i as M}from"./insertElementAfter-BiQpTqUp.js"
const B=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function C(a,n){r("accordion",a),B.includes(a)?n():c(n)}function x(a,c,d,l){const u=function(a,t,o){const s=n({className:`nav-level-${a}`}),r=e({className:"nav-link fshPoint",textContent:t})
return i(s,r),M(s,o.parentNode),r}(a,c,l)
t(d)?o(u,s(C,c,d)):(u.href=d,o(u,(()=>r("accordion",c))))}const P=[[a=>a.recipeManagerLink,"1","Recipe Manager",d,"nav-character-log"],[a=>a.inventoryManagerLink,"1","Inventory Manager",`${l}invmanagernew`,"nav-character-log"],[a=>a.medalGuideLink,"1","Medal Guide",`${u}${g}medalguide`,"nav-character-log"],[a=>a.buffLogLink&&f("keepBuffLog"),"1","Buff Log",L,"nav-character-log"],[a=>a.combatLogLink&&f("keepLogs"),"1","Combat Logs",h,"nav-character-notepad"],[a=>a.creatureLogLink&&f("showMonsterLog"),"1","Creature Logs",v,"nav-character-notepad"],[a=>a.quickLinksLink,"1","Quick Links",k,"nav-character-notepad"],[a=>a.auctionSearchLink,"2","AH Quick Search",p,"nav-actions-trade-auctionhouse"],[a=>a.onlinePlayersLink,"2","Online Players",m,"nav-actions-interaction-findplayer"],[a=>a.findOtherLink,"2","Find Other",y,"nav-actions-interaction-findplayer"],[a=>a.findBuffsLink,"2","Find Buffs",b,"nav-actions-interaction-findplayer"],[a=>a.guildInventoryLink&&N(),"2","Guild Inventory",`${l}guildinvmgr`,"nav-guild-storehouse-inventory"],[a=>a.newGuildLogLink&&N()&&!f("useNewGuildLog"),"2","New Guild Log",$,"nav-guild-ledger-advisor"],[a=>a.topRatedLink,"2","Top 250 Players",`${w}toprated${g}xp`,"nav-toprated-players-level"]]
function A(n){P.forEach((([e,i,t,o,s])=>{e(n)&&function(n,e,i,t){const o=a(t)
o instanceof Node&&x(n,e,i,o)}(i,t,o,s)}))}const E=a=>22*G("li",a).length||null
function I(a,n,e){A(e),function(a,n){n.heights=G("#nav > li").map(E)
const e=Number(n.state)
e&&e>-1&&e<a.children.length&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export{I as default}
//# sourceMappingURL=injectItems-DfgtL81u.js.map
