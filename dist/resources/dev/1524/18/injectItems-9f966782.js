import{x as a,ac as n,o as e,s as i,f as t,T as s,U as r,c6 as o,c7 as c,c8 as l,c9 as f,ab as u,ca as d,$ as v,bM as g,as as h,D as m,cb as p,V as L,W as k,cc as b,c2 as y,a9 as $}from"./calfSystem-5545a3e6.js"
import{c as j}from"./currentGuildId-2b105bba.js"
import"./insertElementBefore-babbeb6f.js"
import{c as N}from"./createLi-721e020f.js"
import{i as B}from"./insertHtmlBeforeBegin-e7607ccd.js"
import{i as G}from"./insertHtmlAfterEnd-489f5b87.js"
import{c as M}from"./createAnchor-0a460032.js"
import{i as x}from"./insertElementAfter-a43cfe0f.js"
function w(e,i,t){const s=a(e)
if(s instanceof Node){i(s.parentNode,t)}else n(`#${e} is not a Node`,!1)}function A(a,n){s("accordion",a),r(n)}function E(a,n){x(n,a)}function I(a,n,s,r){const o=N({className:"nav-level-"+a}),c=M({className:"nav-link fshPoint",textContent:n})
e(c,i(A,n,s)),t(o,c),w(r,E,o)}const P=a=>22*a.length,S=n=>P(a("nav-"+n).nextElementSibling.children),C=a=>P(u(`#nav-${a} > ul li`))
function H(a){!function(a){a.recipeManagerLink&&I("1","Recipe Manager",d,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&w("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${v}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&w("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${g}${h}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&m("keepBuffLog")&&I("1","Buff Log",p,"nav-character-log")}(a),function(a){a.combatLogLink&&m("keepLogs")&&I("1","Combat Logs",L,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&m("showMonsterLog")&&I("1","Creature Logs",k,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&I("1","Quick Links",b,"nav-character-notepad")}(a)}export default function(a,n,e){H(e),function(a){a.auctionSearchLink&&I("2","AH Quick Search",o,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&I("2","Online Players",c,"nav-actions-interaction-findplayer"),a.findOtherLink&&I("2","Find Other",l,"nav-actions-interaction-findplayer"),a.findBuffsLink&&I("2","Find Buffs",f,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&j()&&w("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${v}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&j()&&!m("useNewGuildLog")&&w("nav-guild-ledger-guildlog",B,`<li class="nav-level-2"><a class="nav-link" href="${y}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&w("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${$}toprated${h}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=[null,null,S("character"),C("actions"),C("guild"),C("toprated"),C("upgrades"),S("resources"),null],-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=n.heights[n.state]+"px")}(a,n)}
//# sourceMappingURL=injectItems-9f966782.js.map
